import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormcomComponent } from './formcom/formcom.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { LeaveformComponent } from './leaveform/leaveform.component';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { RoleComponent } from './rolelist/role.component';
import { AddroleComponent } from './addrole/addrole.component';
import { RenderComponent } from './render/render.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
  
    SidebarComponent,
    FormcomComponent,
    UserlistComponent,
    HeaderComponent,
    NotfoundComponent,
    DashboardComponent,
   
    LeaveformComponent,
    LeavelistComponent,
    RoleComponent,
    AddroleComponent,
   
    RenderComponent,
    
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,FormsModule,
    AgGridModule,HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      // positionClass:'toast-top-center',
      preventDuplicates:true,
      // timeOut:1000,
      // easing:'ease-in',
      // easeTime:2000
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
