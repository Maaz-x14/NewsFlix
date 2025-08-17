pipeline {
    agent any   // run on Jenkins host

    environment {
        REGISTRY   = 'registry.gitlab.com/newsflick/newsflixconfig'
        IMAGE_TAG  = "${env.BUILD_NUMBER}"
        APP_NAME   = "newsflickapp"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Maaz-x14/NewsFlix.git'
            }
        }

        stage('Install Dependencies & Build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${REGISTRY}:${IMAGE_TAG} ."
            }
        }

        stage('Login to GitLab Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'gitlab-docker-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin registry.gitlab.com"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh "docker push ${REGISTRY}:${IMAGE_TAG}"
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {
                    sh '''
                        kubectl --kubeconfig=$KUBECONFIG apply -f deployment.yaml
                        kubectl --kubeconfig=$KUBECONFIG set image deployment/newsflickapp-deployment newsflickapp-container=${REGISTRY}:${IMAGE_TAG} --record
                        kubectl --kubeconfig=$KUBECONFIG rollout status deployment/newsflickapp-deployment
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Build ${env.BUILD_NUMBER} completed successfully and deployed!"
        }
        failure {
            echo "❌ Build ${env.BUILD_NUMBER} failed. Check logs."
        }
    }
}
