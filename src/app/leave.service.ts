import { Injectable } from '@angular/core';
import { Leave } from './leave';
@Injectable({
  providedIn: 'root'
})
export class LeaveService {
leave:Leave[]=[]
  constructor() { }
}
