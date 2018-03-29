// eslint-disable-next-line no-undef
module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://localhost:4040')
      .waitForElementVisible('//html/body', 1000)
      .waitForElementVisible('//*[@id="app"]/div/div/div[3]/input')
      .setValue('//*[@id="app"]/div/div/div[3]/input', 'Weller Friedrich')
      .click('//*[@id="app"]/div/div/div[3]/a')
      .waitForElementVisible('//*[@id="app"]/div/div/div[2]/table/tbody/tr[6]/td[1]')
      .assert.containsText('//*[@id="app"]/div/div/div[2]/table/tbody/tr[6]/td[1]',
        'Weller Friedrich')
      //.setValue('input[type=text]', 'nightwatch')
      //.waitForElementVisible('button[name=btnG]', 1000)
      //.click('button[name=btnG]')
      //.pause(1000)
      //.assert.containsText('#main', 'Night Watch')
      .end();
  }
};

//*[@id="app"]/div/div/div[3]/input