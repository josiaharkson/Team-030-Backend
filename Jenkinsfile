// Jenkins pipeline build
pipeline {
 agent any
 environment {
  GIT_USERNAME = credentials("git-username")
  GIT_PASSWORD = credentials("git-password")
 }
 stages {
  stage("Set git user and email") {
   steps {
    sh "git config --global user.name 'Kingsley Victor' && git config --global user.email 'javaprodigy56@gmail.com'"
   }
  }
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
  stage("Run tests") {
   steps {
    sh "npm run test:unix"
    echo "Tests ran successfully"
   }
  }
  stage("Commit to SCM") {
   steps {
    sh "git add . && git commit -m 'Jenkins pipeline build [Build Number: $BUILD_NUMBER]'"
   }
  }
  stage("Push to SCM for deploy") {
   steps {
    sh("git push --force https://$GIT_USERNAME:$GIT_PASSWORD@github.com/BuildForSDGCohort2/Team-030-Backend team-030-heroku-deploy")
   }
  }
 }
}