pipeline {
  agent any
  stages {
    stage('NPM up') {
      parallel {
        stage('NPM up') {
          steps {
            bat 'docker-compose up'
          }
        }

        stage('test') {
          steps {
            bat 'npm test'
          }
        }

      }
    }

    stage('down') {
      steps {
        bat 'docker-compose down'
      }
    }

  }
}