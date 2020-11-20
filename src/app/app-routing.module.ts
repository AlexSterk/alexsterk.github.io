import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QueuePageComponent} from "./queue/queue-page/queue-page.component";
import {QueueEditComponent} from "./queue/queue-edit/queue-edit.component";
import {SlidePreviewComponent} from "./queue/slide-preview/slide-preview.component";

const routes: Routes = [
  {path: 'queue', component: QueuePageComponent},
  {path: 'queue/edit', component: QueueEditComponent},
  {path: 'queue/preview/:id', component: SlidePreviewComponent},
  {path: '**', redirectTo: 'queue', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
