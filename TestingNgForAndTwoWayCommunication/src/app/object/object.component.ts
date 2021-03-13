import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

  users = Users;

  constructor() { 
  }

  ngOnInit(): void {
  }

}


export interface User {
  id: number;
  name: string;
}


export const Users: User[] = [
  {id: 1, name: 'Krystian'},
  {id: 2, name: 'Tomek'},
  {id: 3, name: 'Domka'},
  {id: 4, name: 'Mama'}
]


