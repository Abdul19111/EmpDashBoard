
import { UserdataService } from '../services/userdata.service';
// import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { GridOptions } from 'ag-grid-community';
import { RenderComponent } from '../render/render.component';

// import { Observable } from 'rxjs';
// import { RenderComponent } from '../render/render.component';
// import { ArrayType } from '@angular/compiler';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
gridApi:any;
gridColumnApi:any;
 // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [
  { headerName:"S.No.", field: 'serial'},
  { headerName:"User Name", field: 'username'},
  { headerName:"Full Name", field: 'fullname' },
  { headerName:"Email", field: 'email' },
  // { headerName:"Action", field:'action', "cellRendererFramework":RenderComponent}
 

];

rowHeight:number=27;
// DefaultColDef sets props common to all Columns
public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
  resizable:true
};

gridOption:any;

// For accessing the Grid's API
@ViewChild('agGrid') agGrid!: AgGridAngular;
rowData=[
  {
  "username":"dnsd",
  "fullname":"dtfmdedfd",
  "email":"erfd@gmail.com"
},
{
  "username":"123234",
  "fullname":"dtfmdedfd",
  "email":"erfd@gmail.com"
},
{
  "username":"dnsd3123erwrrewrf",
  "fullname":"dtfmdedfd",
  "email":"erfd@gmail.com"
},
]
constructor(private user: UserdataService) {
 let arr=user.user;
  let uniqueArray =arr.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === arr.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });
 let temparr:any[]=[];
  for(let i=0; i<uniqueArray.length; i++){
temparr.push({
  serial:i+1,
  username:uniqueArray[i].username,
  fullname:uniqueArray[i].fullname,
  email:uniqueArray[i].email
});
  }
  
 this.rowData=temparr;
 
}

params:any;
// Example load data from sever
onGridReady(params: GridReadyEvent) {
  this.rowHeight=25;
  this.params=params;
this.gridApi=params.api;
this.gridColumnApi=params.columnApi;
 
}

// Example of consuming Grid Event
onCellClicked( e: CellClickedEvent): void {
  console.log('cellClicked', e);
}

// Example using Grid's API
clearSelection(): void {
  
  this.agGrid.api.deselectAll();
}
SelectAll(): void {
  this.agGrid.api.selectAll();
}

up(){
  
 
console.log( this.agGrid.api.getSelectedRows(), "selected row");

 
}


}
