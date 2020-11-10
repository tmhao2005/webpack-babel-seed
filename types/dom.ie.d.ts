interface Element {
  msMatchesSelector(selectors: string): boolean;
  mozRequestFullScreen: () => void;
}
