import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../misc/local-storage.service";
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
  selected = 0;
  saving;

  ngOnInit(): void {
    this.config = this.store.config;
    this.store.ConfigChanged.subscribe(c => this.config = c);
  }

  save() {
    this.saving = true;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.store.save(this.config);
      this.saving = false;
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
