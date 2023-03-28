pipeline {
    agent any
        tools {
            nodejs '19.8.1',
            python 'Python3.8.12'
        }
    stages {
        stage('build') {
            steps {
                sh 'apt install python3 -y'
                sh 'npm version'
                sh 'npm i'
                sh 'npm run build'
                sh 'ls'
            }
        }
    }
}
