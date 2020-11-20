import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QueuePageComponent} from "./queue-page/queue-page.component";

const routes: Routes = [
  {path: 'queue', component: QueuePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
