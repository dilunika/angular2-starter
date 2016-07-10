import { QsPage } from './app.po';

describe('angular2-starter App', function() {
  let page: QsPage;

  beforeEach(() => {
    page = new QsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-starter works!');
  });
});
