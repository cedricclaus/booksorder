import { BooksorderPage } from './app.po';
import {By} from "protractor";

describe('booksorder App', () => {
  let page: BooksorderPage;

  beforeEach(() => {
    page = new BooksorderPage();
    page.navigateTo();
  });

  it('should display message saying app works', () => {
    expect(page.getTitleText()).toEqual('Book store!');
  });

  it('should display two initial row', () => {
    expect(page.getOrderRows().count()).toBeCloseTo(2);
    expect(page.getTextOnLastRowByClassName('order-author')).toContain("author2");
  });


  it('should remove the last row', () => {

    let button = page.getOnLastRowByClassName(By.buttonText("Supprimer"));
    button.click();
    expect(page.getOrderRows().count()).toBeCloseTo(1);
    expect(page.getTextOnLastRowByClassName('order-author')).not.toContain("author2");
  });

  it('should add a new row from manuel', () => {
    expect(page.getOrderRows().count()).toBeCloseTo(2);
    page.clickToggleFormCheckBox();
    page.getFormControl('title').sendKeys("titre");
    page.getFormControl('author').sendKeys("author");
    page.getFormControl('price').sendKeys("10.10");
    page.getFormControl('quantity').sendKeys("10");
    page.getFormControl('quantity').submit();

    expect(page.getOrderRows().count()).toBeCloseTo(3);
    expect(page.getOnLastRow(By.css('.order-quantity input')).getAttribute("value")).toEqual('10')


  });



});
