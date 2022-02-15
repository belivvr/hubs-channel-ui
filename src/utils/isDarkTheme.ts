export type Theme = 'Browser Default' | 'hubs-default' | 'hubs-dark-mode';

export default function isDarkTheme(): boolean {
  const theme = APP.store?.state?.preferences?.theme;

  switch (theme) {
    // I know this line is useless.
    // But, I want to specify theme 'Browser Default' is exists.
    case 'Browser Default':
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    case 'hubs-default':
      return false;
    case 'hubs-dark-mode':
      return true;
    default:
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
