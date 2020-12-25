import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'aeroaquaponic-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypographyComponent implements OnInit {
  @Input() text: string = '';

  @Input() isCentered: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
