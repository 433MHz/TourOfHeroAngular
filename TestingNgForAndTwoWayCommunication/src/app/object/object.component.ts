import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

  name: string;
  secondName?: string;

  constructor() { 
    this.name = 'Krystian';
  }

  ngOnInit(): void {
  }

}
