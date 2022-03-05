pipeline {
  agent any
  stages {
    stage('NPM Build') {
      steps {
        bat 'docker-compose build'
      }
    }

    stage('NPM up') {
      parallel {
        stage('NPM up') {
          steps {
            bat 'docker-compose up'
          }
        }

        stage('sleep') {
          steps {
            bat 'sleep 30'
          }
        }

      }
    }

    stage('Test') {
      steps {
        bat 'npm test'
      }
    }

    stage('down') {
      steps {
        bat 'docker-compose down'
      }
    }

  }
}