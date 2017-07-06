import { Component, OnInit } from '@angular/core';

import { Todo } from './todo';
import { DataService } from "app/todo/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
	inputHint = 'What needs to be done?';
	todos: Todo[] = [];
	todo = '';
	filterType ='All';
	toggleAll = false;	

	constructor(private dataSvc: DataService){}

	ngOnInit(){
		this.dataSvc.getTodos().subscribe(data => {
			this.todos = data;
		});
	}

	addTodo() {
		console.log('into addTodo()');
		let newTodos = [...this.todos];
		newTodos.push({
			task : this.todo,
			done : false
		});
		this.dataSvc.saveTodos(newTodos).subscribe(data =>{
			this.todos = data;
			this.todo = '';
		})
	}

	clearCompleted(){
		let newTodos = this.todos.filter(item => { return !item.done; });
		this.dataSvc.saveTodos(newTodos).subscribe(data=>{
			this.todos = data;
		});
	}

	filterTypeChange(filterType: string){
		this.filterType = filterType;
	}

	changedStatus(){
		let newTodos = [...this.todos];
        console.log("todos",this.todos);
        console.log("newtodo",newTodos);
		this.dataSvc.saveTodos(newTodos).subscribe(data=>{
			this.todos = data;
		});

	}

	toggleAllChanged(value:boolean){
		console.log('into toggleallchanged');
		let newTodos = [...this.todos];
		newTodos.forEach(item=>{
			item.done = value;
		});
		this.dataSvc.saveTodos(newTodos).subscribe(data=>{
			this.todos = data;
		});
	}

	updateToggleAllState(){
		this.toggleAll = this.todos.filter(item => {return !item.done; }).length === 0;
	}

	removeTodo(todo){
		let newTodos = [...this.todos];
		newTodos.splice(this.todos.indexOf(todo),1);
		this.dataSvc.saveTodos(newTodos).subscribe(data => {
			this.todos = data;
		});
	}

}
