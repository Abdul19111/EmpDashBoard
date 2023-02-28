import { Component } from '@angular/core';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';
// import { Form } from '@angular/forms';
// import { NgModel } from '@angular/forms';
// import { NgModule } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-leaveform',
  templateUrl: './leaveform.component.html',
  styleUrls: ['./leaveform.component.css']
})
export class LeaveformComponent {
  topics: any = [
    { name: "Employee", vlaue: "employee" },
    { name: "Manager", vlaue: "manager" },
    { name: "Trainee", vlaue: "trainee" },
   
  ];
  leaves: any = [
    { name: "Sick Leave", vue: "sick" },
    { name: "Casual Leave", vue: "casual" },
    { name: "Sandwich Leave", vue: "sandwich" },
    { name: "Maternity Leave", vue: "maternity" },
    { name: "Annual Leave", vue: "annual" }
  ];
  userdata: any = [];

 

  // empmodel = new ('john', 'peter', '12345678', '12345678', '2sf@g.com', new Date("22-12-1222"), 'angular', 'sv2');
  
  HasError = false;
  validate(item: any) {
    if (item === "default" || item === "") this.HasError = true;
    else this.HasError = false;
  }
  HasError2 = false;
  validate2(item: any) {
    if (item === "default" || item === "") this.HasError2 = true;
    else this.HasError2 = false;
  }
  currentMin=new Date();
  currentMax:any;
  nextMin=new Date();
  nextMax:any;
  //  b=this.currentDate.setDate(this.currentDate.getDate() + 1);
  changeDate(item:any,ele:any){
if(!item && !ele){
  this.currentMin=new Date();
  this.nextMin=new Date();
}
else if(item && !ele){
  this.nextMin=item;
  this.currentMin=item;
}
else if(!item && ele ){
  this.currentMin=new Date();
  this.currentMax=ele;
  this.nextMin=ele;
}
else{

  this.currentMin=new Date();
 // this.nextMin=new Date();
this.currentMax=ele;
this.nextMin=new Date();
this.nextMax='';
}

  }
  constructor(public leave:LeaveService,private toast:ToastrService){}
  OnSubmit() {

   this.toast.success('You have applied for leave successfully','Successful!',{
    timeOut:2000,
    positionClass:'toast-top-center',
   })
  }
  
  submit(item: any) {
    console.log(item.value);
   let temp=new Leave();
temp.applyby=item.applyby;
temp.leavetype=item.leavetype;
temp.status="Yes";
temp.datefrom=item.fromdate.toString();
temp.todate=item.todate.toString();
temp.reason=item.reason;

this.leave.leave=[...this.leave.leave, temp];



   
  } 
}
