import { Component, OnInit } from '@angular/core';
import {QueueItem} from "../queue-item/queue-item.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

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

  constructor() { }

  currentItem = 0;
  items: QueueItem[] = [
    {
      background: "https://cache.desktopnexus.com/wallpapers/2461/2461542-1920x1080-white-swiss-shepherd-forest-trees-beautiful-white-dog-pets-besthqwallpapers.com-1920x1080.jpg?st=_0x_AYvX2VwsKQg37_f-8Q&e=1605830085",
      color: "green"
    },
    {
      background: "https://external-preview.redd.it/Dw0AmpcfjZ9WzXPz0buiRjnHZdOkM-PSGtE5lpTvYqA.jpg?width=1024&auto=webp&s=67e8e522bf2b7d5bc9b1495b9d7de7923c1956b5",
      color: "cyan"
    }
  ];

  ngOnInit(): void {
    setInterval(() => this.updateItem(), 10*1000)
  }

  updateItem() {
    this.currentItem = (this.currentItem + 1) % this.items.length;
  }

}
