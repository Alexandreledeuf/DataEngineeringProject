pipeline {
  agent any
  stages {
    stage('NPM build') {
      steps {
        bat 'docker-compose build'
      }
    }

    stage('up') {
      parallel {
        stage('down') {
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