import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueuePageComponent } from './queue-page/queue-page.component';
import { QueueItemComponent } from './queue-item/queue-item.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { QueueEditComponent } from './queue-edit/queue-edit.component';
import {FormsModule} from "@angular/forms";
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QueuePageComponent,
    QueueItemComponent,
    QueueEditComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
