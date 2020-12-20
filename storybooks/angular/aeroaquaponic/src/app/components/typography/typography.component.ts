import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypographyComponent implements OnInit {
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
