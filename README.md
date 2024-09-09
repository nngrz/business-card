# Ningrui Business Card

    Digital Portfolio of Ningrui. Consists of all of my projects that I have worked on with it's source code.

    Link for the digital business card: https://nngrz.github.io/business-card.


## what I have learned:
1. Set up a local development environment on my computer for React development.
2. Deploy a React app to GitHub Pages for public access.
3. Manage and resolve path conflicts when switching between GitHub Pages and local development environments.

## Deployment
1. Type run npm install which will install GH pages
2. Build and Deploy the App
    ```
    npm run deploy
    ```

    This will:
    Run the build script to create a production build of your app in the build folder.
    Deploy the contents of the build folder to the gh-pages branch of your repository, which is used by GitHub Pages to serve your app.

3. Verify the Update
    After running npm run deploy, GitHub will automatically serve your app from the gh-pages branch. Visit your GitHub Pages URL (e.g., https://your-username.github.io/your-repo) to see the updated app.

## Serving static content:
Serving static content was achieved by setting "homepage" value to "." in package.json.