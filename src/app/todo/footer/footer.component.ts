import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './../todo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  todos : Todo[];

  @Output()
  clearCompleted = new EventEmitter();

  filterType = 'All';

  @Output()
  filterTypeChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clearBtnOnClick(){
    this.clearCompleted.emit();
  }

  changeFilterType(filterType : string){
    this.filterType = filterType;
    this.filterTypeChanged.emit(filterType);
  }

}
