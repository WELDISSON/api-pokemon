pipeline {
  agent { docker { image 'node:7-alpine' }
    stages {
        stage('Build') {
            steps {
                sh 'npm start'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
}
