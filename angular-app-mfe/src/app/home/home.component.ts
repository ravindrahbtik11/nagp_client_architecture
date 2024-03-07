import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare const require: any;

@Component({
  selector: 'mfe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HomeComponent implements OnInit {
  // Getting the version of Angular from Package.json
  angularVersion = require('./../../../package.json').dependencies[
    '@angular/core'
  ];

  constructor() {}

  ngOnInit(): void {}
}
