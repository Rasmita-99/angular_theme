import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitcher } from "./components/theme-switcher/theme-switcher";
import { ThemeService } from './services/theme-service';

@Component({
  selector: 'app-root',
  imports: [ ThemeSwitcher],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-themes');

  
constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.initTheme();
  }
}
