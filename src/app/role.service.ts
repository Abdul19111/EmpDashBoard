import { Injectable } from '@angular/core';
import { Role } from './role';
@Injectable({
  providedIn: 'root'
})
export class RoleService {
roles:Role[]=[];
dropdown:any[]=[];
  constructor() { }
}
