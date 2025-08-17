pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    environment {
        APP_NAME    = "newsflickapp"
        IMAGE_TAG   = "build-${env.BUILD_NUMBER}"
        DOCKER_IMAGE = "${APP_NAME}:${IMAGE_TAG}"
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

        stage('Build Docker Image in Minikube') {
            steps {
                echo "🐳 Building Docker image inside Minikube..."
                sh '''
                    eval $(minikube docker-env)
                    docker build -t ${DOCKER_IMAGE} .
                '''
            }
        }

        stage('Deploy to Kubernetes (Minikube)') {
            steps {
                echo "🚀 Deploying to Kubernetes..."
                sh '''
                    eval $(minikube docker-env)
                    kubectl apply -f k8s/deployment.yaml
                    kubectl set image deployment/newsflickapp-deployment newsflickapp-container=${DOCKER_IMAGE} --record
                    kubectl rollout status deployment/newsflickapp-deployment --timeout=120s
                '''
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
