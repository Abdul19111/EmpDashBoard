// import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
// import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { LeaveService } from '../leave.service';
@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.css']
})
export class LeavelistComponent {
  gridApi:any;
  gridColumnApi:any;
   // Each Column Definition results in one Column.
   public columnDefs: ColDef[] = [
    { headerName:"S.No.", field: 'serial'},
    { headerName:"Applied By", field: 'applyby'},
    { headerName:"Leave Type", field: 'leavetype' },
    { headerName:"Status", field: 'status' },
    { headerName:"From Date", field: 'datefrom'},
    { headerName:"To Date", field: 'todate' },
    { headerName:"Reason", field:'reason'}
    // { headerName:"Action", field: 'action', cellRenderer:RenderComponent },
  
  ];
  rowHeight:number=30;
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
  "applyby":"dnsd",
  "leavetype":"dtfmdedfd",
  "status":"erfd@gmail.com",
  "datefrom":"erdfd",
  "todate":"3ee",
  "reason":"for sicke dfg"
},
{
  "applyby":"dnsd",
  "leavetype":"dtfmdedfd",
  "status":"erfd@gmail.com",
  "datefrom":"erdfd",
  "todate":"3ee",
  "reason":"for sicke dfg"
},
{
  "applyby":"dnsd",
  "leavetype":"dtfmdedfd",
  "status":"erfd@gmail.com",
  "datefrom":"erdfd",
  "todate":"3ee",
  "reason":"for sicke dfg"
},
];
params:any;
constructor(private leave:LeaveService){
  let arr=leave.leave;

  const uniqueArray =arr.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === arr.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });
  let newarr:any[]=[];
  for(let i=0; i<uniqueArray.length; i++){
    newarr.push({
      serial:i+1,
      applyby:uniqueArray[i].applyby,
      leavetype:uniqueArray[i].leavetype,
      status:uniqueArray[i].status,
      datefrom:uniqueArray[i].datefrom,
      todate:uniqueArray[i].todate,
      reason:uniqueArray[i].reason

    })
  }
 this.rowData=newarr;
 // console.log(uniqueArray,"leave data displayed");
  //this.rowData=arr;
}
// Example load data from sever
onGridReady(params: GridReadyEvent) {
  this.rowHeight=25;
  this.params=params;
this.gridApi=params.api;
this.gridColumnApi=params.columnApi;
 
}
// Example of consuming Grid Event
onCellClicked( e: CellClickedEvent): void {
  // console.log('cellClicked', e);
}
// Example using Grid's API
clearSelection(): void {
  
  this.agGrid.api.deselectAll();
}
SelectAll(): void {
  this.agGrid.api.selectAll();
}
DeleteAll(){
  this.agGrid.api.setRowData([]);
}
DeleteSelected(){
  let arry=this.agGrid.api.getSelectedRows;
 console.log(arry,"selected rows");
}







}
