import { BooksorderPage } from './app.po';

describe('booksorder App', () => {
  let page: BooksorderPage;

  beforeEach(() => {
    page = new BooksorderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
