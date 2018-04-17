pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'node -v'
                sh 'npm prune'
                sh 'npm install'
                sh 'npm i chai --save-dev' 
                sh 'npm i mocha --save-dev' 
                sh 'npm i supertest --save-dev' 
                sh 'npm test'
            }
        }
    }
}