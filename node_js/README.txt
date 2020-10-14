#Prerequisite: Node.js and Npm
Node.js and Npm must be installed in System, it can be verified by 'node -v'.
    *(Linux Only) In case not then it should be installed by 'sudo apt install nodejs'.(Note: installing Node.js will automatically install Npm).(https://nodejs.org/)
    *(Linux Only) If already installed but the version is less than "nodejs@v12.18.4" then please update by following commands: {'npm cache clean -f' 'npm install -g n' 'n stable'}. (https://phoenixnap.com/kb/update-node-js-version => Method 2)
    *For windows it can be installed by downloading the installer.

Now after confirming prerequisite navigate to the project folder in terminal and command 'npm install'; it will automatically install dependencies.(package.json: dependencies)

Then command 'npm run -- autogypi --init-gyp -p nbind -s add.cc' followed by that command 'npm run -- node-gyp configure build'.(https://github.com/charto/nbind)

Now if no error has occured then please command 'npm start'. This will start the application and should work normaly,
if not then please find the error and try to solve.