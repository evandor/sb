import { SbPage } from './app.po';

describe('sb App', function() {
  let page: SbPage;

  beforeEach(() => {
    page = new SbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
