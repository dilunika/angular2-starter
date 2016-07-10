export class QsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-starter-app h1')).getText();
  }
}
