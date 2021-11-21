# Template Cli

### 1-Clone the repo:

Install Git and clone the Repo or Download the zip file.

```
git clone https://github.com/Raiden-56/Cli-Template.git cli && cd cli
```

### 2-Edit the CLI Settings:

Go to the **[./package.json](package.json)** file and then edit the **prefix** with your own **prefix**.

```
"bin": {
    "prefix": "./bin/index.js"
},
```

### 3-Install Modules and The CLI:

#### 1-First of all you need to install the required modules for the CLI, for this you can use this command.

```
npm install
```

#### 2-And then install the CLI globaly in your computer using this command.

(For this command you will need permissions, don't forget to prefix with sudo if you are on Linux)

```
npm install -g
```

This command will allow you to use the cli in the Terminal in any place simply by taping the **prefix** you puted before

### 4-Finaly

Now you can enjoy yout CLI and start creating commands by adding them into the **[./commands](commands)** folder.

### 5-Need Help ?

You can find me on Discord !
**raiden#7988**
