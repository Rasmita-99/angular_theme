import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme-service';
import { COLOR_PALETTE } from './color-palette';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  imports: [CommonModule],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.css',
})
export class ThemeSwitcher {
// isOpen = false;


  

//   constructor(private themeService: ThemeService) {}

//   toggle() {
//     this.isOpen = !this.isOpen;
//   }

//   setTheme(theme: string) {
//     this.themeService.applyTheme(theme);
//     console.log(theme,'sdcdcs');
    
//   }

 isOpen = false;
  colors = COLOR_PALETTE;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.initTheme();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  applyColor(color: string) {
    this.themeService.setPrimaryColor(color);
     this.isOpen = false;
  }

  close() {
  this.isOpen = false;
}


}
