pipeline {
    agent any
    tools {
        nodejs '20'
    }
    stages {
        stage('Clone Project') {
            steps {
                git 'https://github.com/PaulLandaeta/isc-system-web.git'
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