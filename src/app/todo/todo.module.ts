import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TodoComponent } from './todo.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './filter.pipe';
import { DataService } from './data.service';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    TodoComponent,
    TitleComponent,
    FooterComponent,
    FilterPipe,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [],
  exports: [ TodoComponent,TitleComponent,FooterComponent ]
})
export class TodoModule { }
