pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '10'))
        retry(2) // Retry the entire pipeline twice on transient failures
    }

    environment {
        APP_NAME     = "newsflickapp"
        IMAGE_TAG    = "${env.BUILD_NUMBER}-${GIT_COMMIT.take(7)}" // Build # + short commit SHA
        DOCKER_IMAGE = "${APP_NAME}:${IMAGE_TAG}"
        K8S_DEPLOY   = "newsflickapp-deployment"
        CONTAINER_NAME = "newsflickapp-container"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "📥 Checking out source code..."
                git branch: 'main', url: 'https://github.com/Maaz-x14/NewsFlix.git'
            }
        }

        stage('Set up Minikube Docker Env') {
            steps {
                echo "🔧 Configuring Docker to use Minikube..."
                sh 'eval $(minikube docker-env)'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "🐳 Building Docker image ${DOCKER_IMAGE}..."
                sh 'docker build --no-cache -t ${DOCKER_IMAGE} .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo "🚀 Applying Kubernetes deployment..."
                sh '''
                    kubectl apply -f k8s/deployment.yaml
                    kubectl set image deployment/${K8S_DEPLOY} ${CONTAINER_NAME}=${DOCKER_IMAGE} --record
                    kubectl rollout status deployment/${K8S_DEPLOY} --timeout=180s
                '''
            }
        }

        stage('Optional: Push to Docker Hub') {
            when {
                expression { return env.PUSH_TO_HUB == 'true' }
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    echo "📦 Pushing Docker image to Docker Hub..."
                    sh '''
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker tag ${DOCKER_IMAGE} $DOCKER_USER/${DOCKER_IMAGE}
                        docker push $DOCKER_USER/${DOCKER_IMAGE}
                    '''
                }
            }
        }
    }

    post {
        always {
            echo "📋 Pipeline finished for Build #${env.BUILD_NUMBER} (${GIT_COMMIT.take(7)})"
            cleanWs()
        }
        success {
            echo "✅ SUCCESS: Build ${env.BUILD_NUMBER} deployed as ${DOCKER_IMAGE}!"
        }
        failure {
            echo "❌ FAILURE: Build ${env.BUILD_NUMBER} failed. Check logs!"
        }
    }
}
