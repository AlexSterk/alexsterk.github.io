import {Component, OnInit} from '@angular/core';
import {QueueItem} from "../queue-item/queue-item.component";
import {animate, style, transition, trigger} from "@angular/animations";
import {defaultConfig, SlideConfig} from "../slide-config";
import {LocalStorageService} from "../local-storage.service";
import Timeout = NodeJS.Timeout;

@Component({
  animations: [
    trigger('fade', [
      transition(':enter', [style({opacity: 0}), animate('2s ease-out', style({opacity: 1}))]),
      transition(':leave', [style({opacity: 1}), animate('2s ease-in', style({opacity: 0}))]),
    ])
  ],
  selector: 'app-queue-page',
  templateUrl: './queue-page.component.html',
  styleUrls: ['./queue-page.component.scss']
})
export class QueuePageComponent implements OnInit {

  constructor(private store: LocalStorageService) {
  }

  currentItem = 0;
  config: SlideConfig = defaultConfig;

  ngOnInit(): void {
    this.config = this.store.config;
    setTimeout(() => this.runTimer(), this.config.interval * 1000);
    this.store.ConfigChanged.subscribe(c => {
      this.config = c;
    });
  }

  updateItem() {
    this.currentItem = (this.currentItem + 1) % this.config.items.length;
  }

  runTimer() {
    this.updateItem();
    setTimeout(() => this.runTimer(), this.config.interval * 1000);
  }

}
