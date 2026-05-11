pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Code already cloned by Jenkins'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jenkins-docker-demo .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f jenkins-docker-demo || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 4000:4000 --name jenkins-docker-demo jenkins-docker-demo'
            }
        }
    }
}