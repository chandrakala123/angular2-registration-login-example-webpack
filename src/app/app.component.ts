import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gtm';

  constructor(
  ) { }
  ngOnInit() {
   
  }
  submitt() {
    window['dataLayer'].push({
      'event': 'click',
      // gtm.element:[Object ]
      'products': [{
             'id': '123',
             'name': 'Black T-shirt',
             'brand': 'balenciaga',
             'quantity': 1
           }]
    });
    
  }
}
