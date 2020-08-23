// Jenkins pipeline build
pipeline {
 agent any
 environment {}
 stages {
  stage("Install dependencies") {
   steps {
    sh "sudo npm install",
    echo "Installed dependencies"
   }
  }
  stage("Create .env file from .env.jenkins") {
   steps {
    sh "cp .env.jenkins .env"
    echo "Created .env file" // This file isn't committed to SCM. It is relevant to local builds
   }
  }
  // Subsequent stages would come here as we progress
 }
}