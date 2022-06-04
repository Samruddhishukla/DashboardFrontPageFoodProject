import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'Products',
      icon: 'fa-solid fa-box',
    },
    {
      number: '3',
      name: 'Order',
      icon: 'fa-solid fa-cart-shopping',
    },
    {
      number: '4',
      name: 'Contact',
      icon: 'fa-solid fa-phone',
    },
    {
      number: '5',
      name: 'About',
      icon: 'fa-solid fa-circle-info',
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
