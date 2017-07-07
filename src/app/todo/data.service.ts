import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs';

import { Todo } from './todo';

@Injectable()
export class DataService {

  private requestOptions = new RequestOptions({
		headers: new Headers({
			'Authorization':'token e29f6eea-47d3-4c2e-88ae-ee759e777a64',
      'Content-Type':'application/json'
		})
	});

  constructor(private http: Http) { }

  getTodos(): Observable<Todo[]>{
		return this.http.get('https://jsonbin.org/jiaming0708/wallase', this.requestOptions).map(res =>{
      console.log(res.json());
			return res.json();
		}).catch(error => {
			console.log(error);
			return Observable.of<Todo[]>([]);
		});
	}

	saveTodos (newTodos: Todo[]){
		return this.http.post('https://jsonbin.org/jiaming0708/wallase',newTodos,this.requestOptions).map(res =>{
      console.log('saveTodos');
      console.log(res.json());
			return res.json();
		}).catch(error => {
			console.log(error);
			return Observable.of<Todo[]>([]);
		});
	}

}
