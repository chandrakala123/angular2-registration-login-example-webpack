import { Component } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gtm';

  constructor(
    private gtmService: GoogleTagManagerService,
    private router: Router
  ) { }
  submitt() {
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url,
          'transactionProducts': [{
            'sku': 'DD44',
            'name': 'T-Shirt',
            'category': 'Apparel',
            'price': 11.99,
            'quantity': 1
            },{
            'sku': 'AA1243544',
            'name': 'Socks',
            'category': 'Apparel',
            'price': 9.99,
            'quantity': 2
            }]
        };
        this.gtmService.pushTag(gtmTag);
      }
    });
   
  }
}
