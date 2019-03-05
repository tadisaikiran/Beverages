import { BevTestPage } from './app.po';

describe('bev-test App', () => {
  let page: BevTestPage;

  beforeEach(() => {
    page = new BevTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
