import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-panel',
  standalone: true,
  imports: [],
  templateUrl: './common-panel.component.html',
  styleUrl: './common-panel.component.scss'
})
export class CommonPanelComponent {

  @Input()
  public active?: boolean;

}
