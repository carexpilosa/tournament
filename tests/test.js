// eslint-disable-next-line no-undef
module.exports = {
  'Example Test input new player, change result' : function (browser) {
    browser
      .url('http://localhost:4040')
      .waitForElementVisible('//html/body', 1000)
      .waitForElementVisible('//*[@id="app"]/div/div/div[3]/input')
      .setValue('//*[@id="app"]/div/div/div[3]/input', 'Weller Friedrich')
      .click('//*[@id="app"]/div/div/div[3]/a')
      .waitForElementVisible('//*[@id="app"]/div/div/div[2]/table/tbody/tr[6]/td[1]')

      // add Friedrich Weller
      .assert.containsText('//*[@id="app"]/div/div/div[2]/table/tbody/tr[6]/td[1]',
        'Weller Friedrich')
      .waitForElementVisible('//*[@id="app"]/div/div/div[4]/div[1]/div[1]/div/div[2]/select/option[4]')
      .waitForElementVisible('//*[@id="app"]/div/div/div[4]/div[1]/div[1]/div/div[2]/select')

      // first Result set remis
      .click('//*[@id="app"]/div/div/div[4]/div[1]/div[1]/div/div[2]/select/option[3]')
      .assert.value('//*[@id="app"]/div/div/div[4]/div[1]/div[1]/div/div[2]/select', '0.5')
      .assert.containsText('//*[@id="app"]/div/div/div[2]/table/tbody/tr[3]/td[6]', '0.5 : 0.5')

      .click('//*[@id="app"]/div/div/div[4]/div[1]/div[2]/div/div[2]/select/option[3]')
      .assert.value('//*[@id="app"]/div/div/div[4]/div[1]/div[2]/div/div[2]/select', '0.5')
      .assert.containsText('//*[@id="app"]/div/div/div[2]/table/tbody/tr[4]/td[5]', '0.5 : 0.5')

      .click('//*[@id="app"]/div/div/div[4]/div[2]/div[1]/div/div[2]/select/option[3]')
      .assert.value('//*[@id="app"]/div/div/div[4]/div[2]/div[1]/div/div[2]/select', '0.5')
      .assert.containsText('//*[@id="app"]/div/div/div[2]/table/tbody/tr[2]/td[3]', '0.5 : 0.5')

      .end();
  }
};
