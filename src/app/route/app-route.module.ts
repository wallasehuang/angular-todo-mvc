import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TodoComponent } from '.././todo/todo.component'
import { HomeComponent } from "app/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'welcome', component: HomeComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRouteModule { }
