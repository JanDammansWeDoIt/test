pipeline {
    agent any
        tools {
            nodejs '19.8.1'
        }
    stages {
        stage('build') {
            steps {
                sh 'npm version'
                sh 'cd frontend && npm i'
                sh 'npm run build'
                sh 'ls'
            }
        }
    }
}