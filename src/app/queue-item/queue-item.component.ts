import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";
import {LocalStorageService} from "../local-storage.service";
import {SlideConfig} from "../slide-config";

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
export class QueueItemComponent implements OnInit {

  @Input() background;
  @Input() color;

  @HostBinding('style.--background') get bg() {return `url("${this.background}")`}
  @HostBinding('style.--color') get c() {return this.color}
  @HostBinding('style.--color-darker') get cd() {return Chroma(this.c).darken(1).hex()}

  constructor(private route: ActivatedRoute, private store: LocalStorageService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        const item = this.store.config.items[params.id] ?? null;
        this.background = item?.background;
        this.color = item?.color ?? 'white';
        this.store.ConfigChanged.subscribe((c: SlideConfig) => {
          this.background = c.items[params.id].background;
          this.color = c.items[params.id].color;
        });
      }
    })
  }

}
