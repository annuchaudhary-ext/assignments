describe("Login App Test", function() {
    const INDEX_URL = "file:///D://Nag%20Assignments/Login%20App%20test%20using%20Protractor/src/index.html";
    const HOME_URL = "file:///D://Nag%20Assignments/Login%20App%20test%20using%20Protractor/src/home.html";
    it("When both email and password invalid credentials passed", function() {
        browser.get(INDEX_URL);
        var emailInp = element(by.name("email"));
        var passInp = element(by.name("password"));
        var submitBtn = element(by.id("loginSubmitBtn"));

        emailInp.sendKeys("chaudharyannugmail.com");
        passInp.sendKeys("annu");

        submitBtn.click();

        expect(element(by.id("emailError")).getText()).toEqual("You have entered invalid email address");
        expect(element(by.id("passwordError")).getText()).toEqual("You have entered invalid password");
        browser.sleep(2000);
        
    });

    it("When invalid email credential passed", function() {
        browser.get(INDEX_URL);
        var emailInp = element(by.name("email"));
        var passInp = element(by.name("password"));
        var submitBtn = element(by.id("loginSubmitBtn"));

        emailInp.sendKeys("chaudharyannugmail.com");
        passInp.sendKeys("Annu@1212");

        submitBtn.click();

        expect(element(by.id("emailError")).getText()).toEqual("You have entered invalid email address");
        expect(element(by.id("passwordError")).actionResults_).toBeUndefined();
        browser.sleep(2000);
        
    });

    it("When invalid password credential passed", function() {
        browser.get(INDEX_URL);
        var emailInp = element(by.name("email"));
        var passInp = element(by.name("password"));
        var submitBtn = element(by.id("loginSubmitBtn"));

        emailInp.sendKeys("chaudharyannu7@gmail.com");
        passInp.sendKeys("annu");

        submitBtn.click();

        expect(element(by.id("emailError")).actionResults_).toBeUndefined();
        expect(element(by.id("passwordError")).getText()).toEqual("You have entered invalid password");
        browser.sleep(2000);
        
    });

    it("When incorrect email password passed", function() {
        browser.get(INDEX_URL);
        var emailInp = element(by.name("email"));
        var passInp = element(by.name("password"));
        var submitBtn = element(by.id("loginSubmitBtn"));

        emailInp.sendKeys("chaudharyannu@gmail.com");
        passInp.sendKeys("Annu@1212");

        submitBtn.click();

        expect(element(by.id("emailError")).actionResults_).toBeUndefined();
        expect(element(by.id("passwordError")).actionResults_).toBeUndefined();
        expect(element(by.id("incorrectCredError")).getText()).toEqual("Username and password entered by you is/are incorrect.");
        browser.sleep(2000);
        
    });

    it("When correct email password passed", function() {
        browser.get(INDEX_URL);
        var emailInp = element(by.name("email"));
        var passInp = element(by.name("password"));
        var submitBtn = element(by.id("loginSubmitBtn"));

        emailInp.sendKeys("chaudharyannu7@gmail.com");
        passInp.sendKeys("Annu@1234");

        submitBtn.click();

        expect(browser.getCurrentUrl()).toBe(HOME_URL);
        browser.sleep(2000);
        
    });
})