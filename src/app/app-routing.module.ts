import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QueuePageComponent} from "./queue-page/queue-page.component";
import {QueueEditComponent} from "./queue-edit/queue-edit.component";
import {QueueItemComponent} from "./queue-item/queue-item.component";

const routes: Routes = [
  {path: 'queue', component: QueuePageComponent},
  {path: 'queue/edit', component: QueueEditComponent},
  {path: 'queue/preview/:id', component: QueueItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
