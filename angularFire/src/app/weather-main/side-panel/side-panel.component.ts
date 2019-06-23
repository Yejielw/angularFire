import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.sass']
})
export class SidePanelComponent implements OnInit {

  @Input() weather: any;

  constructor() { }

  ngOnInit() {
  }

}
