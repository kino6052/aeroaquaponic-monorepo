import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';

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
  onClickHandler = (id: string) => {
    this.generalService.scrollToId(id);
  };

  @Input()
  color: 'black' | 'white' = 'black';

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {}
}
