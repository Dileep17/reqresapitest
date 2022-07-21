pipeline {

    agent {
        node {
            label 'node'
        }
    }

    stages {
        
        stage('Clean') {
            steps {
                cleanWs()
                sh """
                echo "Cleaned Workspace"
                """
            }
        }

        stage('Code Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: '*/main']], 
                    userRemoteConfigs: [[url: 'https://github.com/Dileep17/reqresapitest.git']]
                ])
            }
        }

        stage('npm install') {
            steps {
                 sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test'
            }
        }
        
    }   
}