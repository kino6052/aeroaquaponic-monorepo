import { Component, Input, OnInit } from '@angular/core';

interface IMenuItem {
  text: string;
  link: string;
}

@Component({
  selector: 'aeroaquaponic-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input()
  items: IMenuItem[] = [];

  @Input()
  color: 'black' | 'white' = 'black';

  constructor() {}

  ngOnInit(): void {}
}
