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
    sh "npm install",
    echo "Installed dependencies"
   }
  }
  stage("Create .env file from .env.jenkins") {
   steps {
    sh "copy .env.jenkins .env"
    echo "Created .env file" // This file isn't committed to SCM. It is only relevant locally
   }
  }
  stage("Run tests") {
   steps {
    sh "npm run test:debug"
    echo "Tests ran successfully"
   }
  }
  stage("Create build details file") {
   steps {
    bat('echo $"**BUILD NUMBER:** $BUILD_NUMBER\n **WORKSPACE:** $WORKSPACE\n **NODE NAME:** $NODE_NAME\n \n *This file is set to be automatically generated by the Jenkins pipeline build." > team-030-backend-[build: ${BUILD_NUMBER}].md')
    bat("mkdir -p jenkins && move team-030-backend-[build: ${BUILD_NUMBER}].md ./jenkins/team-030-backend-[build: ${BUILD_NUMBER}].md")
    bat "del team-030-backend-*.md"
   }
  }
  stage("Tag & Commit to SCM") {
   steps {
    sh "git tag -a team-030-backend-build-$BUILD_NUMBER -m 'Jenkins pipeline build $BUILD_NUMBER'"
    sh "git add . && git commit -m 'Jenkins pipeline build [Build Number: $BUILD_NUMBER]'"
   }
  }
  stage("Push to SCM for deploy") {
   steps {
    sh("git push --force https://$GIT_USERNAME:$GIT_PASSWORD@github.com/BuildForSDGCohort2/Team-030-Backend HEAD:refs/heads/team-030-heroku-deploy")
    echo "Successfully pushed to branch."
   }
  }
  stage("Push tags") {
   steps {
    sh("git push https://$GIT_USERNAME:$GIT_PASSWORD@gtihub.com/BuildForSDGCohort2/Team-030-Backend team-030-backend-build-$BUILD_NUMBER")
    echo "Successfully pushed tag"
   }
  }
 }
}