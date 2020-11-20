import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../local-storage.service";
import {SlideConfig} from "../slide-config";
import Timeout = NodeJS.Timeout;



@Component({
  selector: 'app-queue-edit',
  templateUrl: './queue-edit.component.html',
  styleUrls: ['./queue-edit.component.scss']
})
export class QueueEditComponent implements OnInit {

  timeout: Timeout;

  constructor(private store: LocalStorageService) {
  }

  config: SlideConfig;

  ngOnInit(): void {
    this.config = this.store.config;
    this.store.ConfigChanged.subscribe(c => this.config = c);
  }

  save() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log("Saving config");
      this.store.save(this.config);
    }, 1000);
  }

  addItem() {
    this.config.items.push({
      background: "",
      color: "#FFFFFF"
    });
    this.save();
  }

}
