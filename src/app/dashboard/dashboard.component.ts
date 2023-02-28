import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  tem:string='block';
myFun(){
if(this.tem==='block') this.tem='none'
else this.tem='block';
//  console.log(x,"display block")
//  x.style["display"]="none";
}
}
