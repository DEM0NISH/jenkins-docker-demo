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
                bat 'docker build -t jenkins-docker-demo .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker rm -f jenkins-docker-demo || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 4000:4000 --name jenkins-docker-demo jenkins-docker-demo'
            }
        }
    }
}