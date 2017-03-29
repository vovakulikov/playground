import { DocsDemoPage } from './app.po';

describe('docs-demo App', function() {
  let page: DocsDemoPage;

  beforeEach(() => {
    page = new DocsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
