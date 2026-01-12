import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {


 
  private readonly THEME_KEY = 'theme';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // applyTheme(theme: string) {
  //   if (!isPlatformBrowser(this.platformId)) return;

  //   document.documentElement.setAttribute('data-theme', theme);
  //   localStorage.setItem(this.THEME_KEY, theme);
  // }

  // initTheme() {
  //   if (!isPlatformBrowser(this.platformId)) return;

  //   const savedTheme = localStorage.getItem(this.THEME_KEY) ?? 'light';
  //   document.documentElement.setAttribute('data-theme', savedTheme);
  // }

    setPrimaryColor(color: string) {
    if (!isPlatformBrowser(this.platformId)) return;

    document.documentElement.style
      .setProperty('--color-primary', color);

    localStorage.setItem('primaryColor', color);
  }

  initTheme() {
    if (!isPlatformBrowser(this.platformId)) return;

    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
      document.documentElement.style
        .setProperty('--color-primary', savedColor);
    }
  }

}
