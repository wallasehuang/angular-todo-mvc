import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './../todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  item: Todo[];

  @Output()
  changeStatus = new EventEmitter();

  @Output()
  removeTodo = new EventEmitter<Todo>();

  changed(){
    this.changeStatus.emit();
  }

  remove(todo: Todo){
    this.removeTodo.emit(todo);
  }


}
