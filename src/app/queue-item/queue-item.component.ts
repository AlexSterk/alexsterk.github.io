import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

const Chroma = require("chroma-js");

export interface QueueItem {
  background: string;
  color: string;
}

@Component({
  selector: 'app-queue-item',
  templateUrl: './queue-item.component.html',
  styleUrls: ['./queue-item.component.scss']
})
export class QueueItemComponent implements OnChanges {

  constructor() { }

  @Input() background;
  @Input() color;

  @HostBinding('style.--background') bg;
  @HostBinding('style.--color') c;
  @HostBinding('style.--color-darker') cd;

  ngOnChanges(changes: SimpleChanges): void {
    this.bg = `url("${this.background}")`;
    this.c = this.color;
    this.cd = Chroma(this.c).darken(1).hex();
  }

}
