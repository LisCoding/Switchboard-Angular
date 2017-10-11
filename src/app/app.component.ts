import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name: "",
    email: ""
  }
  users = []
  switches: string[] = ["OFF", "OFF","OFF","OFF","OFF","OFF","OFF","OFF","OFF","OFF"];
  switchOn(idx) {
    console.log("hey I was clicked", idx)
    var value = this.switches[idx];
    if(value == "OFF"){
      this.switches[idx] = 'ON'
    } else {
      this.switches[idx] = 'OFF'
    }
  }
  onSubmit(){
    console.log("I was submitted")
    //now we can use this.user(object) to make an API call or manipulate it in other ways
    this.users.push(this.user)
    //we are setting the object to its original state
    this.user = {
      name: "",
      email: ""
    }
  }
}
