import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Walidator PESEL');
  });

  it('should reject invalid PESEL', () => {
    page.navigateTo();
    page.fillPeselInput('asdasd');
    page.waitForAnimationToFinish();
    expect(page.getPeselMessage()).toContain('PESEL nieprawidłowy');
  });

  it('should reject invalid PESEL', () => {
    page.navigateTo();
    page.fillPeselInput('44850501351');
    page.waitForAnimationToFinish();
    expect(page.getPeselMessage()).toContain('PESEL prawidłowy');
  });


  afterEach(async () => {
    // Anything?
  });
});
