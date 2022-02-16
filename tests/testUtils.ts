import type { Theme } from "../src/utils/isDarkTheme";

export function setUserDefaultDarkMode(matches: boolean): void {
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

export function setTheme(theme?: Theme): void {
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

export function mockLocationHref(location: Object) {
  jest.spyOn(window, "location", "get").mockReturnValue({
    ...window.location,
    ...location,
  });
}
