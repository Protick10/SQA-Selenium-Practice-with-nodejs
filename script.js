const { Builder, Browser, By, Key, until } = require('selenium-webdriver')


async function testRun(){

    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    await driver.get('https://demo.evershop.io/')
    await driver.manage().window().maximize()
    await driver.sleep(2000)
    await driver.findElement(By.className("search-icon")).click() // Click on search icon to open search bar
    await driver.sleep(2000)
    await driver.quit()
    

}

testRun()