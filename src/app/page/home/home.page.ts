import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  OpenUrlGithub() {
    window.open("https://github.com/bloxxyyy",'_system', 'location=yes');
  }

  OpenUrlWebsite() {
    window.open("#",'_system', 'location=yes');
  }

  OpenUrlLinkedIn() {
    window.open("https://www.linkedin.com/in/marco-noppen-3a055718a/",'_system', 'location=yes');
  }

  constructor() { }
}
