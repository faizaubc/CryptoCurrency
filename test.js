const {Builder, By, Key, util}=require("selenium-webdriver");
require("chromedriver");

async function example(){
    let driver = await new Builder().forBrowser("chrome").build();
    driver.manage().setTimeouts({implicit:(100000)});
    await driver.get("http//google.com");
    await driver.findElement(By.Name("q")).sendKeys("Selenium Test", Key.RETURN);
}

example();