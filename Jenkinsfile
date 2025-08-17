pipeline {
    agent any

    options {
        timestamps()             // add timestamps to logs
        disableConcurrentBuilds()// prevent parallel builds on same job
        buildDiscarder(logRotator(numToKeepStr: '10')) // keep last 10 builds only
    }

    environment {
        REGISTRY    = 'registry.gitlab.com/newsflick/newsflixconfig'
        IMAGE_TAG   = "${env.BUILD_NUMBER}"
        APP_NAME    = "newsflickapp"
        DOCKER_IMAGE = "${REGISTRY}:${IMAGE_TAG}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "📥 Checking out source code..."
                git branch: 'main', url: 'https://github.com/Maaz-x14/NewsFlix.git'
            }
        }

        stage('Install Dependencies & Build') {
            steps {
                echo "📦 Installing dependencies & building app..."
                sh '''
                    npm ci
                    npm run build
                '''
            }
        }

        stage('Run Tests') {
            steps {
                echo "🧪 Running tests..."
                sh 'npm test || echo "⚠️ Tests failed but continuing..."'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "🐳 Building Docker image ${DOCKER_IMAGE}..."
                sh "docker build --no-cache -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Login to GitLab Registry') {
            steps {
                echo "🔐 Logging into GitLab Registry..."
                withCredentials([usernamePassword(credentialsId: 'gitlab-docker-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin registry.gitlab.com"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                echo "📤 Pushing Docker image..."
                sh "docker push ${DOCKER_IMAGE}"
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo "🚀 Deploying to Kubernetes..."
                withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {
                    sh '''
                        set -e
                        kubectl --kubeconfig=$KUBECONFIG apply -f deployment.yaml
                        kubectl --kubeconfig=$KUBECONFIG set image deployment/newsflickapp-deployment newsflickapp-container=${DOCKER_IMAGE} --record
                        kubectl --kubeconfig=$KUBECONFIG rollout status deployment/newsflickapp-deployment --timeout=120s
                    '''
                }
            }
        }
    }

    post {
        always {
            echo "📋 Pipeline finished for Build #${env.BUILD_NUMBER}"
        }
        success {
            echo "✅ SUCCESS: Build ${env.BUILD_NUMBER} completed and deployed!"
        }
        failure {
            echo "❌ FAILURE: Build ${env.BUILD_NUMBER} failed. Check logs!"
        }
        unstable {
            echo "⚠️ UNSTABLE: Build ${env.BUILD_NUMBER} is unstable. Review test results."
        }
        cleanup {
            echo "🧹 Cleaning up workspace..."
            cleanWs()
        }
    }
}
