import type { Theme } from '../../src/utils/getTheme';
import getTheme from '../../src/utils/getTheme';

function setUserDefaultDarkMode(matches: boolean): void {
  window.matchMedia = () => ({
    media: '',
    onchange: () => {},
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
    matches,
  });
}
function setTheme(theme?: Theme): void {
  global.APP = {
    store: {
      state: {
        preferences: {
          theme,
        },
      },
    },
  };
}

beforeEach(() => {
  setTheme();
  setUserDefaultDarkMode(false);
});

describe('getTheme', () => {
  context('When theme is undefined and user is not dark mode', () => {
    it('Should returns true', () => {
      expect(getTheme()).toBe(false);
    });
  });

  context('When theme is undefined and user is dark mode', () => {
    it('Should returns true', () => {
      setUserDefaultDarkMode(true);

      expect(getTheme()).toBe(true);
    });
  });

  context('When user set hubs-default theme', () => {
    it('Should returns false', () => {
      setTheme('hubs-default');

      expect(getTheme()).toBe(false);
    });
  });

  context('When user set hubs-dark-mode theme', () => {
    it('Should returns true', () => {
      setTheme('hubs-dark-mode');

      expect(getTheme()).toBe(true);
    });
  });
});
