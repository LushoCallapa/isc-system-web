pipeline {
    agent any
    tools {
        nodejs 'node-20'
    }
    stages {
        stage('Clone Project') {
            steps {
                git branch:'qa', url: 'https://github.com/LushoCallapa/isc-system-web.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Intall Cypress') {
            steps {
                sh 'npm install cypress --save-dev'
            }
        }
    }
}