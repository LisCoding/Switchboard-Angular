import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switch_on :boolean = false;
  switches: string[] = ["OFF", "OFF","OFF","OFF","OFF","OFF","OFF","OFF","OFF","OFF"];
  color = 'red'
  switchOn(idx) {
    console.log("hey I was clicked", idx)
    var value = this.switches[idx];
    if(value == "OFF"){
      this.switches[idx] = 'ON'
      this.color = 'green'
    } else {
      this.switches[idx] = 'OFF'
      this.color = 'red'
    }
  }
}
