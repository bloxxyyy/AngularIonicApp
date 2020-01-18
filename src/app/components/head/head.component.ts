import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent   {
  @Input('title') title: string;
}
