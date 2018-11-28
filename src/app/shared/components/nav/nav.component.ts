import { Component, OnInit, Input } from '@angular/core';

// Configuration
import { config } from "../../../app.config";

// Services
import { AuthService } from "../../services/auth/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss']
})
export class NavComponent implements OnInit {

  private appName: string;

  private currentLang: string;

  private CONFIG = config;

  @Input() private currentUser: any;

  constructor(private authService: AuthService) {
    this.appName = config.appName;
  }

  ngOnInit() {
    this.currentLang = 'en';

    if ( localStorage.getItem('lang') ) {
      this.currentLang = localStorage.getItem('lang');
    }
  }

  public toggleLanguage(lang: string): void {
    if (localStorage.getItem('lang') !== lang) {
      this.currentLang = ( this.currentLang === 'en' ) ? 'fr' : 'en';

      localStorage.setItem('lang', this.currentLang);

      location.reload();
    }
  }

  public logout(): void {
    this.authService.logout();
  }

}
