import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'form',
  template: `<h1 class="text-2xl font-bold text-red-500">
    This is my form component
  </h1>`,
})
export default class FormComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((res) => console.log(res));
  }
}
