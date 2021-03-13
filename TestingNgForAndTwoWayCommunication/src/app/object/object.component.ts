import { Component, OnInit } from '@angular/core';
import { user } from './users';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

  user: user = {
    id: 1,
    name: 'Krystian'
  }

  name? : string;

  fillName(){
    this.name = 'Not Empty';
  }

  makeNameNull(){
    this.name = undefined;
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
