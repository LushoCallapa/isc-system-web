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
                sh 'npm install -g yarn'
                sh 'yarn install'
            }
        }
        stage('Intall Cypress') {
            steps {
                sh 'yarn add cypress --dev'
            }
        }
    }
}