import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LocalStorageService} from "../../misc/local-storage.service";
import {SlideConfig} from "../slide-config";

@Component({
  selector: 'app-slide-preview',
  templateUrl: './slide-preview.component.html',
  styleUrls: ['./slide-preview.component.scss']
})
export class SlidePreviewComponent implements OnInit {

  background: string;
  color: string;

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
