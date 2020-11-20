import {EventEmitter, Injectable} from '@angular/core';
import {defaultConfig, SlideConfig} from "./slide-config";

const CONFIG_KEY = 'slideConfig';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
    window.addEventListener('storage', () => {
      this.ConfigChanged.emit(this.config);
    })
  }

  ConfigChanged = new EventEmitter<SlideConfig>();

  get config(): SlideConfig {
    const storedConfig = localStorage.getItem(CONFIG_KEY);
    let config;
    if (storedConfig) {
      config = JSON.parse(storedConfig);
    } else {
      config = defaultConfig;
    }
    return config;
  }

  save(newConfig: SlideConfig): void {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(newConfig));
    this.ConfigChanged.emit(newConfig);
  }
}
