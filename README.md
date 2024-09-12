# Ningrui Business Card

URL: https://nngrz.github.io/business-card.

Digital Portfolio of Ningrui served on GH pages. Consists of all of my projects that I have worked on with it's source code.

## Local Development
1. Run `npm install`.
2. Run `npm start`.

## Continuous Deployment
After each push to main branch, the App is depolyed automatically by GitHub Actions to GH pages.

## Manual Deployment
1. Run `npm install` which will install GH pages dependency.
2. Run `npm run deploy` to build and deploy the app. This will run the build script to create a production build of your app in the build folder and deploy to GH pages.

## Serving static content:
Serving static content was achieved by setting "homepage" value to "." in package.json.
