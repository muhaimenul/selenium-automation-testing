const webdriver = require('selenium-webdriver')

const seePageTitle = () => {
    // open browser
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    // navigate to a url, search for a text and get title of page
    driver.get('https://github.com/muhaimenul')
    .then(() => {
        // click the link Overview of the page
        driver.findElement(webdriver.By.linkText('Overview')).click()
        .then(() => {
            // get page title
            driver.getTitle().then((title) => {
                setTimeout(() => {
                    console.log(title)
                    driver.quit()
                }, 5000)
            })
        })
    })
}

seePageTitle();