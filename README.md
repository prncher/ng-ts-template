ng-ts-template
================

## Documentation

Follow the steps below to have the template in a working status.

1. Install Git and npm if you haven't done yet.
2. install bower by "npm install bower -g"
3. Install grunt client by "npm install grunt-cli -g"
4. git clone https://github.com/prncher/ng-ts-template

5. Change to the ng-ts-template folder.

6. npm install  - This will install everything required for a typescript angularjs (< 2.0) AMD source code.

7. grunt - This will build the code.

Open the "index.html" in a browser.

If this is installed on a linux box, have http-server installed using "npm install http-server"
Now use http-server <path-where-package-installed>
Open the url in a browser.

## unit test

make sure karma is installed (npm install karma -g) 
npm test

## e2e test

Open a command window and do the following.

run "webdriver-manager update"
run "webdriver-manager start"

Now run "protractor"