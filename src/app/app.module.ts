import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueuePageComponent } from './queue/queue-page/queue-page.component';
import { QueueItemComponent } from './queue/queue-item/queue-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { QueueEditComponent } from './queue/queue-edit/queue-edit.component';
import {FormsModule} from '@angular/forms';
import { SafePipe } from './misc/safe.pipe';
import { SlidePreviewComponent } from './queue/slide-preview/slide-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    QueuePageComponent,
    QueueItemComponent,
    QueueEditComponent,
    SafePipe,
    SlidePreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
