pipeline {
  agent any
  stages {
    stage('NPM Build') {
      steps {
        bat 'docker-compose build'
      }
    }

    stage('NPM up') {
      steps {
        bat 'docjer-compose up'
      }
    }

  }
}