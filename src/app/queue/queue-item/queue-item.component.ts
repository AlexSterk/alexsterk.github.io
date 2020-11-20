import {Component, HostBinding, Input} from '@angular/core';

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
export class QueueItemComponent {

  @Input() background;
  @Input() color;

  @HostBinding('style.--background') get bg() {return `url("${this.background}")`}
  @HostBinding('style.--color') get c() {return this.color}
  @HostBinding('style.--color-darker') get cd() {return Chroma(this.c).darken(1).hex()}

}
