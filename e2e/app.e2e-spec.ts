import { DatastructurePage } from './app.po';

describe('datastructure App', () => {
  let page: DatastructurePage;

  beforeEach(() => {
    page = new DatastructurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
