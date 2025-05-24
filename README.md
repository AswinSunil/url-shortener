Project Description:
A URL shortener is a web service that takes a long URL (Uniform Resource Locator) and converts it into a much shorter, more manageable URL. When someone clicks on the short URL, they are automatically redirected to the original, long URL.

The need for a URL shortener arises from several practical problems that long, complex URLs present:
1. Readability and Aesthetics
2. Ease of Sharing 
3. Character Limits in Social Media
4. Easy to display in Print Media

In this Application, the request from client is sent using POST, and the application responds with a JSON object.
_______________________________________________________________________________

The above Application is deployed in Minikube running on a windows laptop.

Requirements:
1. A github account and Repo
2. VS Code installed on laptop
3. Git installed on laptop
4. Docker Desktop installed on laptop
5. Kubeclt installed on laptop
6. Minikube installed on laptop
_______________________________________________________________________________

Install VS code using exe file
Install Git using exe file
Install Docker Desktop using exe file

Before Installing Docker Desktop WSL Hypervisor must be installed and virtualization must be enabled in Bios.
Install WSL using powershell command: wsl --install

Use curl command given in Kubernetes website to install kubectl
Set kubectl as environment variable in Windows

Use curl command to install Minikube
Set Minikube as environment variable in Windows

Use the command minikube start --driver=docker to start minikube.
This is the command that initiates the Minikube cluster startup. Specifying --driver=docker instructs Minikube to use Docker Desktop (which must be running) as the underlying virtualization technology to host the Kubernetes cluster.
_______________________________________________________________________________

Create a new repo in GitHub called url-shortener

vs code -> view -> terminal
In the terminal enter the following command:
git clone linkofyourgithubrepo

The above command will do three of the following:
1. Connect Git installed on the laptop to VS Code
2. Through Plugin connect VS code and the respective Github Repo
3. Clone the respective Github Repo to our laptop.
Note: The cloned Github Repo by defaut will be present in C:\Users\username\github_repo_name; this repo will be empty because we still have not added the code.

Using the VS code terminal configure your username and mail_id which will be visible during commit views.
_______________________________________________________________________________

Project Directory Structure:

```text
url-shortener/
├── .github/                     
│   └── workflows/
│       ├── ci.yml         # CI pipeline (build & push Docker image to GHCR)
│       └── cd.yml         # CD pipeline (deploy to Minikube)
├── k8s/
│   ├── deployment.yaml    # Deployment resource manifest
│   └── service.yaml       # Service resource manifest for the above deployment
├── src/
│   └── index.js           # Main API logic
├── Dockerfile             # Docker image definition
├── package.json           # Node.js dependencies
└── README.md              # Project description
```

Refer the project structure and add folders and files to your cloned local repo using VS code and commit each change to ensure that your cloned local repo and Github repo are in sync.
Note: Always committing after each change is recommended in case you need to backtrack your project due to errors.

Add code to each file and commit each change to your GitHub repo.
_______________________________________________________________________________

Generate Github tokens:

Click Github Profile Icon -> Settings -> Developer Settings -> Personal Access Tokens (PAT) -> Classic Tokens -> Create new Classic Tokens
Give note, expiration date and permissions for Repo, workflow and GHCR then click -> Generate Token

To know the Github Username:

Click on the Profile Icon, the top name is the Github Username.

Go to the specific repo settings:
secrets and variables -> Actions -> Secrets -> New repository secret
Here add two secrets which are used in ci.yml workflow
1. GHCR_USERNAME - paste the Github username as value of this secret
2. TOKEN_GITHUB - paste the Github token as value of this secret