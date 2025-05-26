Project Description:
A URL shortener is a web service that takes a long URL (Uniform Resource Locator) and converts it into a much shorter, more manageable URL. When someone clicks on the short URL, they are automatically redirected to the original, long URL.

The need for a URL shortener arises from several practical problems that long, complex URLs present:
1. Readability and Aesthetics
2. Ease of Sharing 
3. Character Limits in Social Media
4. Easy to display in Print Media

In this Application, the request from client is sent using POST, and the application responds with a JSON object.
_______________________________________________________________________________

The above Application is deployed in the kind cluster running on the github runner.

Requirements:
1. A github account
2. VS Code - install it from the Appstore
3. Git - install using the command sudo apt install git
_______________________________________________________________________________

Create a new repo in GitHub called url-shortener using the github website.

In vs code, click view->terminal and enter the command git clone https://github.com/AswinSunil/url-shortener (link of the repo we created above)

The above command will ask for your github username and password. Enter your username but do not enter password instead use your github token as password.
By default the image pushed to GHCR is in private 
Generate Github tokens:

Click Github Profile Icon -> Settings -> Developer Settings -> Personal Access Tokens (PAT) -> Classic Tokens -> Create new Classic Tokens Give note, expiration date and permissions for Repo, workflow and GHCR then click -> Generate Token

To know the Github Username:

Click on the Profile Icon, the top name is the Github Username. Github username is not case sensitive which means devsunil and DevSunil will be considered same.

After entering username and password repo will be cloned locally.

In vs code, file -> open folder and select the repo which we cloned. The repo will be empty so add sub directories, files and codes as needed. Note: After each addition, change, etc. save and commit so that the changes will be pushed from the local repo to online repo.

Before committing we must set our name and mailid in vs code so that git will know who pushed the changes and committed:

git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

While committing for first time vs code will automatically install git extension to connect our local repo with online repo. Just give the necessay permissions in the pop-up that appears.

Also if you are storing workflows in the repo vs code will automactically install githubactions extension just give the necessary permissions in the pop-up that appears.
_______________________________________________________________________________

Project Directory Structure:

```text
url-shortener/
├── .github/                     
│   └── workflows/
│       ├── ci.yml         # CI pipeline (build & push Docker image to GHCR)
├── k8s/
│   ├── deployment.yaml    # Deployment resource manifest
│   └── service.yaml       # Service resource manifest for the above deployment
├── src/
│   └── index.js           # Main API logic
├── Dockerfile             # Docker image definition
├── package.json           # Node.js dependencies
└── README.md              # Project description
```
_______________________________________________________________________________

Since the workflow is set to trigger manually go to your online repo->actions tab-> click the Build, Push Docker Image and Deploy action and click on run workflow. What this workflow will do:

1. create a kind cluster
2. Build a docker image from the docker file we provided
3. The docker image created above is pushed to our GHCR. Note: By default the image pushed to GHCR is in private,change it to public
4. In the kind kubernetes cluster we created a deployment and its service is applied. This deployment uses the above image pulled from GHCR
5. A simple POST request is sent to the application using curl for testing purpose.
_______________________________________________________________________________
