// import { Component } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { RenderComponent } from '../render/render.component';
import { RoleService } from '../role.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  gridApi:any;
  gridColumnApi:any;
   // Each Column Definition results in one Column.
   public columnDefs: ColDef[] = [
    { headerName:"S.No", field:'serial', },
   
    { headerName:"Role", field: 'role' },
    
    // { headerName:"Action", field:'action', "cellRendererFramework":RenderComponent }
  
  ];

  rowHeight:number=40;
// DefaultColDef sets props common to all Columns
public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
  resizable:true
}
// For accessing the Grid's API
@ViewChild('agGrid') agGrid!: AgGridAngular;
rowData=[
  {
 
 "role":"full stack"
},
{
 
  "role":"angular"
 },
];
constructor(private rol:RoleService){
let arr=rol.roles;
const uniqueArray =arr.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === arr.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });
  let newarr:any[]=[];
  for(let i=0; i<uniqueArray.length; i++){
    newarr.push(
      {
        serial:i+1,
        // name:uniqueArray[i].name,
        role:uniqueArray[i].role
      }
    )
  }
  
 let nw=newarr.forEach((data)=>{
   data.role.trim();
   
 })
 this.rowData=newarr;
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





}
