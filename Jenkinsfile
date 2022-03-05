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

        stage('npm test') {
          steps {
            bat 'sleep(30);npm test;'
          }
        }

      }
    }

    stage('npm down') {
      steps {
        bat 'docker-compose down'
      }
    }

  }
}