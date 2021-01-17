import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aeroaquaponic-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent implements OnInit {
  @Input()
  onClickHandler: (e: Event) => void = (e) => {
    const a = document.createElement('a');
    a.setAttribute('target', '_blank');
    a.setAttribute('href', 'https://ko-fi.com/aeroaquaponic');
    a.click();
  };

  constructor() {}

  ngOnInit(): void {}
}
