# React-boilerplate

## link for my digital business card: https://nngrz.github.io/business-card

## What I have done:
I built a React app from scratch called "business-card" that showcases my personal information. The app consists of components for sections like Info, About, Interests, and Footer. Additionally, for practice, I added an extra section called Portfolio, where users can visit one of my projects via a link. I successfully deployed the app to GitHub Pages for public access.

## what I have learned:
1. Set up a local development environment on my computer for React development.
2. Deploy a React app to GitHub Pages for public access.
3. Manage and resolve path conflicts when switching between GitHub Pages and local development environments.

## Deployment
how to deploy React App on Github pages:
1. Ensure gh-pages is installed
If you haven't already set up GitHub Pages in your project, install the gh-pages package. If you've done this step before, you can skip it.

In the terminal, run:
bash
Copy code
npm install gh-pages --save-dev

2. Add the deployment scripts to package.json
Open your package.json file and make sure the following scripts are included:
json
Copy code
{
  "scripts": {
    "predeploy": "npm run build", // Build the app before deploying
    "deploy": "gh-pages -d build" // Deploy to GitHub Pages
  }
}

Also, if you haven’t added the homepage field yet, add it at the top of your package.json, replacing your-username and your-repo with your GitHub username and the repository name:
json
Copy code
{
  "homepage": "https://your-username.github.io/your-repo"
}

3. Build and Deploy the App
Once the gh-pages package and scripts are set up, you can deploy the updated app by running:
bash
Copy code

npm run deploy

This will:
Run the build script to create a production build of your app in the build folder.
Deploy the contents of the build folder to the gh-pages branch of your repository, which is used by GitHub Pages to serve your app.

4. Push Local Changes to GitHub
If you've made changes to your project and want to push those updates (e.g., code or content changes) to GitHub, do so with these commands:
bash
Copy code

git add .
git commit -m "Update React app"
git push origin main

5. Verify the Update
After running npm run deploy, GitHub will automatically serve your app from the gh-pages branch. Visit your GitHub Pages URL (e.g., https://your-username.github.io/your-repo) to see the updated app.

Additional Notes:
If you’re using a custom domain or need to troubleshoot, make sure your repository settings have GitHub Pages enabled under the "Settings" > "Pages" tab.

## how to resolve image and CSS path conflict for local and GitHub page environment:
if local environment doesn't work, try to change "homepage" value to ".".
if GitHub page doesn't work, try to redo the deployment