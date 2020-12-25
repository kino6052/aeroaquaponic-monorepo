import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'aeroaquaponic-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent implements OnInit {
  @Input()
  isDebugging = false;

  constructor() {}

  ngOnInit(): void {}
}
