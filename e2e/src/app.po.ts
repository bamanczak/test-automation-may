import { browser, by, element, protractor } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getErrorMessage() {
    return element(by.css('.isValidMessage')).getText() as Promise<string>;
  }

  waitForAnimationToFinish() {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(element(by.css('.isValidMessage'))), 5000);
  }

  fillPeselInput(pesel: string) {
    const input = element(by.name('peselInput'));
    input.sendKeys(pesel);
    const submitButton = element(by.css('.mat-raised-button.mat-button-base'));
    submitButton.click();
  }


}
