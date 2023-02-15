import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'softman';

  constructor(
    private translateService: TranslateService
  ){
    translateService.setDefaultLang('pl');
    translateService.use('pl');
  }
}
