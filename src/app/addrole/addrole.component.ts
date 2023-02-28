import { Component } from '@angular/core';
// import { Form } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Role } from '../role';
import { RoleService } from '../role.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent {
roles=[
  { name: "Angular", vlaue: "angular" },
    { name: "React", vlaue: "react" },
    { name: "NodeJs", vlaue: "nodejs" },
    { name: "FullStack", vlaue: "fullstack" }
]
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
  constructor(public role:RoleService , public toast:ToastrService){}
  submit(item:any){
    let temp=new Role();
   
    temp.role=item.name.trim();
   let arrry=temp.role.split(" ");
   
    arrry = arrry.filter((data)=>{
    return data !=="";
   })
  //  console.log("splitted array", arrry)
   let str='';
   for(let x of arrry) str=str+x+' ';
   str=str.trim();
   if(str===""){
this.toast.error('Role is invalid','Invalid Role',{
  timeOut:2000,
  positionClass:'toast-top-center',
})
return;
   }
   else
   temp.role=str;
   if(this.role.roles.length===0 )
 { 

  this.role.roles.push(temp);
  // console.log("firstr time",this.role.roles)
  this.toast.success('Role Added Successfully', 'Successfull!',{
    positionClass:'toast-top-center',
    timeOut:2000,
    
  });
}
  else {
    let x=this.checkfun(this.role.roles,temp.role);
    
    if(x){
this.toast.success('Role Added Successfully', 'Successfull!',{
  positionClass:'toast-top-center',
  timeOut:2000,
  
});
this.role.roles=[...this.role.roles,temp];
// console.log("second time", this.role.roles);
    }
    else {
      if(str!=="")
this.toast.warning('Role Already Exists','Already Added!',{
  positionClass:'toast-top-center',
  timeOut:2000,
})
    }

  }


  
    // console.log("role array has been displayed",this.role.roles);
    let arr2=this.role.roles;
    const uniqueArray =arr2.filter((value, index) => {
      const _value = JSON.stringify(value);
      return index === arr2.findIndex(obj => {
        return JSON.stringify(obj) === _value;
      });
    });
    this.role.dropdown=uniqueArray;
    // console.log(uniqueArray,"unique array");
  }
  checkfun(array:any[],str:string){
      for(let x of array){
        if (  x.role.toLowerCase() === str.toLowerCase() ) return false;
      }
      return true;
  }
  OnSubmit() {

    // console.log("Form Submitted SuccessFully");
  }

  temp:string="";
  OnReset(){
  this.temp="";
  }


}
