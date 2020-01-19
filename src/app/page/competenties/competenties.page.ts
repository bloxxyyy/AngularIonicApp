import { Component } from '@angular/core';

@Component({
  selector: 'app-competentie',
  templateUrl: './competenties.page.html',
  styleUrls: ['./competenties.page.scss'],
})
export class CompetentiesPage {
  competenceList: any[] = [
    [
      "Programming languages",
      [
        {"imgRef": "./assets/cLang.png", "name":"C#", "desc":"Multiple big application at 2G"},
        {"imgRef": "./assets/php.png", "name":"PHP", "desc":"Rijnijssel College"},
        {"imgRef": "./assets/angular.png", "name":"Angular", "desc":"Mobile bible app at 2G"}
      ],
    ],
    [
      "Frameworks",
      [
        {"imgRef": "./assets/ionic.png", "name":"Ionic", "desc":"Mobile bible app at 2G"},
        {"imgRef": "./assets/larav.png", "name":"Laravel", "desc":"Rijnijssel College"}
      ],
    ],
    [
      "Frontend",
      [
        {"imgRef": "./assets/js.png", "name":"Javascript / Ajax", "desc":"Rijnijssel College"},
        {"imgRef": "./assets/sass.png", "name":"HTML5 / Sass", "desc":"Updating / developing websites"},
      ],
    ],
    [
      "GameDev",
      [
        {"imgRef": "./assets/unity.png", "name":"Unity", "desc":"freetime"},
        {"imgRef": "./assets/mono.png", "name":"MonoGame", "desc":"freetime"},
      ],
    ]
  ]

  constructor() { }
}
