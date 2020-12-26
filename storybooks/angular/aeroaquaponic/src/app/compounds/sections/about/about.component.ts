import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @Input()
  title = 'About Us';

  @Input()
  subtitle = 'Our team';

  @Input()
  text = `We are a non-profit organization of scientists and engineers who want to bring a change to the world. Our goal is to provide tools to achieve the goal of self-sufficiency. This great feat will not be possible without you. Only together can we achieve this.`;

  constructor() {}

  ngOnInit(): void {}
}
