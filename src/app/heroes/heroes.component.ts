import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window['dataLayer'].push({
      'event': 'onload',
      'products': [{
             'id': '123',
             'name': 'Black T-shirt',
             'brand': 'balenciaga',
             'quantity': 1
      }],
      
    });
  }
  submitt() {
    window['dataLayer'].push({
      'event': 'click',
      'products': [{
             'id': '123',
             'name': 'Black T-shirt',
             'brand': 'balenciaga',
             'quantity': 1
           }]
    });
    
  }

}
