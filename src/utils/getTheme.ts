export type Theme = 'Browser Default' | 'hubs-default' | 'hubs-dark-mode';

export default function isDarkTheme(): boolean {
  const theme = APP.store?.state?.preferences?.theme || 'Browser Default';

  switch (theme) {
    case 'Browser Default':
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    case 'hubs-default':
      return false;
    case 'hubs-dark-mode':
      return true;
    default:
      return false;
  }
}
