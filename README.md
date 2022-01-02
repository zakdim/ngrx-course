
## Ngrx (with NgRx Data) - The Complete Guide

This repository contains the code of the video course [Ngrx (with NgRx Data) - The Complete Guide](https://angular-university.io/course/ngrx-course).

This course repository is updated to Angular v13:

![Ngrx (with NgRx Data) - The Complete Guide](https://angular-university.s3-us-west-1.amazonaws.com/course-images/ngrx-v2.png)


# Installation pre-requisites

For taking the course we recommend installing Node 16 Long Term Support Edition (LTE).

To easily switch between node versions on your machine, we recommend using a node virtual environment tool such as [nave](https://www.npmjs.com/package/nave) or [nvm-windows](https://github.com/coreybutler/nvm-windows), depending on your operating system. 

For example, here is how you switch to a new node version using nave:

    # note that you don't even need to update your node version before installing nave
    npm install -g nave
    
    nave use 12.3.1
    node -v
    v12.3.1

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/angular-ngrx-course.git
    
This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:
    
    cd ngrx-course
    npm install

Its also possible to install the modules as usual using npm:

    npm install 

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start 

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)



# Important 

This repository has multiple branches, have a look at the beginning of each section to see the name of the branch.

At certain points along the course, you will be asked to checkout other remote branches other than master. You can view all branches that you have available remotely using the following command:

    git branch -a

  The remote branches have their starting in origin, such as for example 1-start.

We can checkout the remote branch and start tracking it with a local branch that has the same name, by using the following command:

      git checkout -b 1-start 

It's also possible to download a ZIP file for a given branch,  using the branch dropdown on this page on the top left, and then selecting the Clone or Download / Download as ZIP button.

## Section-01 - Introduction

Course [GitHub](https://github.com/angular-university/ngrx-course)

### Lecture-03 - NgRx The Complete Guide - Development Environment Setup

``` 
# 1. Install dependencies
npm istall

# 2. Start server
npm run server    # running on http://localhost:9000

# 3. Start application
npm start

# Access http://localhost:4200
```

### Lecture-06 - Installing NgRx and the NgRx DevTools

``` 
ng add @ngrx/store
ng add @ngrx/store-devtools
```

## Section-02 - NgRx Key Concepts - Actions and Reducers

### Lecture-07 - Configuring an NgRx Feature Module using NgRx Schematics

* Update dependencies

``` 
"dependencies": {
    ...
    "@ngrx/data": "^8.0.1",
    "@ngrx/effects": "^8.0.1",
    "@ngrx/entity": "^8.0.1",
    "@ngrx/router-store": "^8.0.1",
    ...
}
"devDependencies": {
    ...
    "@ngrx/schematics": "^8.0.1",
    ...
}
```

* Add prittier

``` 
npm install prettier --save-dev 
```

* Generate Auth store

``` 
ng generate store auth/Auth --module auth.module.ts
```

## Section-06 - NgRx Data In Depth

### Lecture-40 - NgRx Custom Data Service - Fetching Data From the Backend

``` 
# Backend API
http://localhost:9000/api/courses
```

