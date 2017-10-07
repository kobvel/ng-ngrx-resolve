import { NgrxRouteResolverPage } from './app.po';

describe('ngrx-route-resolver App', () => {
  let page: NgrxRouteResolverPage;

  beforeEach(() => {
    page = new NgrxRouteResolverPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
