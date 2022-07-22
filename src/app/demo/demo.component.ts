import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  name: string;
  user: any;
  
  userClasses: string;
  
  // style atribut:
  width: string;
  
  // pretplata na dogadjaj
  sayHello(){
    alert("Hello");
  }

  myClasses: string;
  myStyles: any;
  message: string;
  items:any;
  selectedIndex: number;


  constructor() {
    this.name = "John";
    this.user = {
      id: 1,
      name: "Ben",
      email: "email@email.com",
      balance: 2413412.123,
      code: "dasd",
      isDeleted: true
    }
    this.userClasses = "user-class-1 user-class-2 user-class-3";
    this.width = "300px";
    this.myClasses = "user-class-1 user-class-2 user-class-3";
    this.myStyles = {
      'font-style': 'normal',
      'font-weight': 'bold',
      'font-size': '24px'
    };
    this.message = "This is initial value";
    this.items = ['black', 'blue', 'green', 'yellow', 'purple'];
    this.selectedIndex = -1;

  }

  ngOnInit(): void {
  }

}
