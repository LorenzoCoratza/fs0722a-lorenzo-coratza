import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './components/to-do/to-do.component';
import { CompletedComponent } from './components/completed/completed.component';

const routes: Routes = [
  {
    path:'',
    component: ToDoComponent
  },
  {
    path:'completed',
    component: CompletedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
