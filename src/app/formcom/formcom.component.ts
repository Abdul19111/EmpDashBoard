import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Emp } from '../emp';
import { UserdataService } from '../services/userdata.service';
import { User } from '../user';
import { RoleService } from '../role.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-formcom',
  templateUrl: './formcom.component.html',
  styleUrls: ['./formcom.component.css']
})
export class FormcomComponent {
fill:string='';
  topics:{role:string}[]=[];
    // { name: "Angular", vlaue: "angular" },
    // { name: "React", vlaue: "react" },
    // { name: "NodeJs", vlaue: "nodejs" },
    // { name: "FullStack", vlaue: "fullstack" }
  
  roless: any = [
    { name: "sv1", vue: "sv1" },
    { name: "sv2", vue: "sv2" },
    { name: "sv3", vue: "sv3" }
  ];
  userdata: any = [];

 

  empmodel = new Emp('', '', '', '', '', new Date(), '', '');
  varry="default";
  varry2="default";
  constructor(public use:UserdataService,public rol:RoleService,public toast:ToastrService){
    // console.log(rol.roles.length,"length of role array");
    // console.log(rol.dropdown, "whole array of role");
    let arry=rol.dropdown;
   if (arry.length!==0) 
  {
    // for(let x=0; x<arry.length; x++){
     
    //  this.topics=[
    //   {
    //     role:arry[x].role
    //   }
    //  ]
       
      
    // }
    this.topics=arry;
  }
// console.log("topic array ", this.topics);
    
    // if(rol.roles.length !== 0)
    // {
    //   this.varry=rol.roles[rol.roles.length-1].role;
    // }
    // else   this.varry="default";
  //   if(rol.roles[rol.roles.length-1]?.role !== undefined )
  // { this.varry=rol.roles[rol.roles.length-1].role; }
  // else { this.varry="default";
  //    }
  // console.log(rol.roles[rol.roles.length-1].role,"role data displys");
  }
  TrimFun(item:string){
let str=item.trim()

let arrry=str.split(" ");
   
arrry = arrry.filter((data)=>{
return data !=="";
})
str='';
for(let x of arrry){
  str+=x+' ';
}
str=str.trim();
return str;
  }
  
  submit(item: any) {
   
  let temp=new User();
  
  temp.username=this.TrimFun(item.username);
  temp.fullname=this.TrimFun(item.fullname);
  temp.email=this.TrimFun(item.email);
  if(temp.username==="" || temp.fullname==="" || temp.email==="")
  {
    this.toast.error('Invlaid Details Entered','Invalid!',{
      positionClass:'toast-top-center',
      timeOut:2000
    });
    return;
  }
  else {

   if(this.use.user.length===0)
  {this.use.user.push(temp);
    this.toast.success('Form Submitted Successfully','Action Successfull!',{
      positionClass:'toast-top-center',
      timeOut:1500
    });
  } 
   else 

 {
  let x=this.checkfun2(this.use.user,temp.username);
  let y=this.checkfun3(this.use.user,temp.fullname);
  let z=this.checkfun4(this.use.user,temp.email);

if(!x && !y && !z){
  this.toast.warning('user already exists','Duplicate User',{
    positionClass:'toast-top-center',
    timeOut:1500
  });
  return;
}
else {
  this.use.user=[...this.use.user,temp];
  this.toast.success('User added successfully','User Added!',{
    positionClass:'toast-top-center',
    timeOut:1000,
  })
}






 }

  }
  // console.log('user data here', this.use.user);
   
  //(item.username, item.fullname, item.email);
  // this.data.push(temp);
  //  this.data.username=item.username;
  //  this.data.fullname=item.fullname;
  //  this.data.email=item.email;

   // this.data.userArray.push(item.name,item.password);
    // console.log(item);
    // let oldData = localStorage.getItem("userdata");

    // if (oldData) {
    //   let data: any[] = JSON.parse(oldData);
    //   console.log("old", data);
    //   data.push(
       
    //     {
    //       username: item.name,
    //       email: item.email,
    //       password: item.password
    //     }
    //   );

    //   localStorage.setItem("userdata", JSON.stringify(data));

    // } else {
    //   localStorage.setItem("userdata", JSON.stringify([{
    //     username: item.name,
    //     email: item.email,
    //     password: item.password
    //   }]));
    // }
    // //  this.userdata.username=item.name;
    // //  this.userdata.email=item.email;
    // //  this.userdata.password=item.password;

    // console.log(this.userdata, 'user')
    // let oldData=localStorage.getItem("userdata")
    // if(oldData){
    //   let data:any[]=JSON.parse(oldData);
    //   data.push(
    //     {
    //       username:item.name,
    //       email:item.email,
    //       password:item.password
    //     }
    //   )
    //   localStorage.setItem("userdata",JSON.stringify(data));
    // }
    // else{
    //   localStorage.setItem( 'userdata',JSON.stringify(
    //     [{
    //       username:item.name,
    //       email:item.email,
    //       password:item.password
    //     }])
    //   )
    // }
    // this.data.username=item.fullname;
    // this.data.email=item.email;
    // this.data.password=item.password;
    // console.log("form submmitted",this.data);
  //  return this.data
 
  
  }
  HasError = false;
  validate(item: any) {
    if (item === "default" || item === "") this.HasError = true;
    else this.HasError = false;
    // console.log(item);
  }
  HasError2 = false;
  validate2(item: any) {
    if (item === "default" || item === "") this.HasError2 = true;
    else this.HasError2 = false;
  }
  checkfun2(array:any[],str:string){
    for(let x of array){
      if (x.username === str ) return false;
    }
   
    return true;
}
checkfun3(array:any[],str:string){
  for(let x of array){
    if (x.fullname === str ) return false;
  }
 
  return true;
}
checkfun4(array:any[],str:string){
  for(let x of array){
    if (x.email === str ) return false;
  }
 
  return true;
}


  
  
  OnSubmit() {
// this.toast.success('Form submitted successfully','Successfull!',{
//   positionClass:'toast-top-center',
//   // easing:'ease-in',
//   // easeTime:1500,
//   timeOut:2000,
 
// });
    
  }

}
