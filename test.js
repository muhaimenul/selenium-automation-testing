const webdriver = require('selenium-webdriver')

const searchTextOnGoogle = () => {
    // open browser
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    // navigate to a url, search for a text and get title of page
    driver.get('https://www.lambdatest.com')
    .then(() => {
        driver.findElement(webdriver.By.linkText('Automation')).click()
        .then(() => {
            driver.getTitle().then((title) => {
                setTimeout(() => {
                    console.log(title)
                    driver.quit()
                }, 5000)
            })
        })
    })
}

searchTextOnGoogle();