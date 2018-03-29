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
      .assert.containsText('//*[@id="app"]/div/div/div[2]/table/tbody/tr[6]/td[1]',
        'Weller Friedrich')
      // .click('//*[@id="app"]/div/div/div[4]/div[1]/div[1]/div/div[2]/select option[value=0.5]')
      .waitForElementVisible('//*[@id="app"]/div/div/div[4]/div[1]/div[1]/div/div[2]/select/option[4]')
      .click('//*[@id="app"]/div/div/div[4]/div[1]/div[1]/div/div[2]/select/option[3]')
      .waitForElementVisible('//*[@id="app"]/div/div/div[4]/div[1]/div[1]/div/div[2]/select')
      .assert.value('//*[@id="app"]/div/div/div[4]/div[1]/div[1]/div/div[2]/select', '0.5')
      .end();
  }
};
