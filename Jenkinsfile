pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'npm install'
      }
    }
    stage('unit-test') {
      when {
        anyOf {
          branch 'main'
          branch 'feature'
        }
      }
      steps {
        sh 'npm run unit-test'
      }
	}
    stage('integration-test') {
      when {
        anyOf {
          branch 'develop'
          branch 'main'
        }
      }
      steps {
        sh 'npm run integration-test'
      }
    }
  }
}
