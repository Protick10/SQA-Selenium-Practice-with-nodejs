const { Builder, Browser, By, Key, until } = require('selenium-webdriver')



const productname = "Nike react phantom run flyknit 2"
async function testRun(){

    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    await driver.get('https://demo.evershop.io/')
    await driver.manage().window().maximize()
    await driver.sleep(2000)
    // await driver.findElement(By.className("search-icon")).click() // Click on search icon to open search bar

    //we will do with xpath

    await driver.findElement(By.xpath("//a[@class='search-icon']")).click()
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Nike"); // enter search keyword
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER); //press enter from keyboard
    const productXpath = `//a[contains(@href,'182')]/span[contains(text(),'${productname}')]`
    // await driver.findElement(By.xpath("//a[contains(@href,'182')]/span[contains(text(),'Nike react phantom run flyknit 2')]")).click()
    await driver.findElement(By.xpath(productXpath)).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(),'S')]")).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(),'Black')]")).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//input[@placeholder='Qty']")).clear()
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//input[@placeholder='Qty']")).sendKeys("2")
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//button[@type='button']/span[contains(text(),'ADD TO CART')]")).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//a[contains(text(),'VIEW CART (1)')]")).click()
    
    await driver.sleep(2000)
    await driver.quit()
    

}

testRun()