/*
    LambdaTest selenium automation sample example
    Configuration
    ----------
    username: Username can be found at automation dashboard
    accessToken:  AccessToken can be generated from automation dashboard or profile section
    Result
    -------
    Execute NodeJS Automation Tests on LambdaTest Distributed Selenium Grid 
*/
const webdriver = require('selenium-webdriver');

/*
    getting credentials from config 
*/
const { username, accessToken, gridHost } = require('./config');

/*
    Setup remote driver
    Params
    ----------
    platform : Supported platform - (Windows 10, Windows 8.1, Windows 8, Windows 7,  macOS High Sierra, macOS Sierra, OS X El Capitan, OS X Yosemite, OS X Mavericks)
    browserName : Supported platform - (chrome, firefox, Internet Explorer, MicrosoftEdge, Safari)
    version :  Supported list of version can be found at https://www.lambdatest.com/capabilities-generator/
*/

// username: Username can be found at automation dashboard
const USERNAME = username;

// AccessKey:  AccessKey can be generated from automation dashboard or profile section
const KEY = accessToken;

// gridUrl: gridUrl can be found at automation dashboard
const GRID_HOST = gridHost;

function searchTextOnGoogle() {

    // Setup Input capabilities
    const capabilities = {
        build: 'NodeJS Build 1', // name of the build
        name: 'Test 1: LabdaTest Grid', // name of the test
        platform: 'windows 10',
        browserName: 'chrome',
        version: '72.0',
        resolution: '1280x800',
        network: true,
        visual: true,
        console: true,
        video: true
    }

    // URL: https://{username}:{accessToken}@beta-hub.lambdatest.com/wd/hub
    const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;
    console.log('App started...');
    // setup and build selenium driver object 
    const driver = new webdriver.Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();

    // navigate to a url, search for a text and get title of page
    driver.get('https://www.google.com/ncr').then(function() {
        driver.findElement(webdriver.By.name('q')).sendKeys('muhaimenul larasearch\n').then(function() {
            driver.getTitle().then(function(title) {
                setTimeout(function() {
                    console.log(title);
                    driver.quit();
                }, 5000);
            });
        });
    }).catch(function(err){
        console.log("test failed with reason "+err)
        driver.quit();
    });
}
searchTextOnGoogle();