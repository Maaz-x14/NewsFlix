pipeline {
    agent any

    environment {
        BUILD_DIR = 'dist'
        REGISTRY = 'registry.gitlab.com/newsflick/newsflixconfig'
        IMAGE_TAG = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                sh 'echo Checking out github repo'
                git branch: 'main', url: 'https://github.com/Maaz-x14/NewsFlix.git'
            }
        }

        stage('Install Dependencies & Build') {
            steps {
                sh 'echo Installing dependencies'
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'echo Building docker image'
                script {
                    dockerImage = docker.build("${REGISTRY}:${IMAGE_TAG}")
                }
            }
        }

        stage('Login to GitLab Registry') {
            steps {
                sh 'echo Logging to gitlab'
                // These credentials are used when setting up jenkins server credentials
                withCredentials([usernamePassword(credentialsId: 'gitlab-docker-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin registry.gitlab.com"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'echo Pushing docker image'
                sh "docker push ${REGISTRY}:${IMAGE_TAG}"
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'echo Deploying project to k8s'
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
            echo "Build ${env.BUILD_NUMBER} completed successfully!"
        }
        failure {
            echo "Build ${env.BUILD_NUMBER} failed!"
        }
    }
}
