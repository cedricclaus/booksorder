import {browser, element, by, By} from 'protractor';
import { Locator} from "protractor/built/locators";

export class BooksorderPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getOrderRows(){
    return element.all(by.className('order-row'));
  }

  getTextOnLastRowByClassName(className : string){
    return this.getOrderRows().last().element(By.className(className)).getText();
  }

  getOnLastRowByClassName(by : Locator){
    return this.getOrderRows().last().element(by);
  }

  clickToggleFormCheckBox(){
    element(By.css('input[type=checkbox]')).click();
  }

  getFormControl(name : string){
    return element(By.name(name));
  }

  getOnLastRow(by : Locator){
    return this.getOrderRows().last().element(by);
  }

}
