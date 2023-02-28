import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddroleComponent } from './addrole/addrole.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormcomComponent } from './formcom/formcom.component';
import { LeaveformComponent } from './leaveform/leaveform.component';
import { LeavelistComponent } from './leavelist/leavelist.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { RoleComponent } from './rolelist/role.component';

import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [

{
  path:'',
 component:DashboardComponent,


},
{
  path:'dashboard',
  component:DashboardComponent
},


{
  path:'addrole',
  component:AddroleComponent
},
{
  path:'role',
  component:RoleComponent
},

{
  path:'formcom',
  component:FormcomComponent,
  
},
{
  path:'leavelist',
  component:LeavelistComponent
  
},
{
  path:'leaveform',
  component:LeaveformComponent,
  
},
{
  path:'userlist',
  component:UserlistComponent,
 
},

{
  path:'**',
  component:NotfoundComponent,
 
 
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
