import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
// import { TodoModule } from '.././todo/todo.module';
import { TodoComponent } from '.././todo/todo.component'
import { HomeComponent } from "app/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'welcome', component: HomeComponent}
];


@NgModule({
  imports: [
    //不需要import這兩個module進來，因為在這個moudle底下沒有用到
//     CommonModule,
//     TodoModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRouteModule { }
