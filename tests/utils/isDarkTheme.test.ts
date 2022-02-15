import type { Theme } from '../../src/utils/isDarkTheme';
import isDarkTheme from '../../src/utils/isDarkTheme';

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

describe('isDarkTheme', () => {
  context('When theme is undefined and user is not dark mode', () => {
    it('Should returns false', () => {
      expect(isDarkTheme()).toBe(false);
    });
  });

  context('When theme is undefined and user is dark mode', () => {
    it('Should returns true', () => {
      setUserDefaultDarkMode(true);

      expect(isDarkTheme()).toBe(true);
    });
  });

  context('When theme is "Browser Default" and user is not dark mode', () => {
    it('Should returns false', () => {
      setTheme('Browser Default');

      expect(isDarkTheme()).toBe(false);
    });
  });

  context('When theme is "Browser Default" and user is dark mode', () => {
    it('Should returns true', () => {
      setTheme('Browser Default');
      setUserDefaultDarkMode(true);

      expect(isDarkTheme()).toBe(true);
    });
  });

  context('When user set hubs-default theme', () => {
    it('Should returns false', () => {
      setTheme('hubs-default');

      expect(isDarkTheme()).toBe(false);
    });
  });

  context('When user set hubs-dark-mode theme', () => {
    it('Should returns true', () => {
      setTheme('hubs-dark-mode');

      expect(isDarkTheme()).toBe(true);
    });
  });
});
