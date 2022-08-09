import { Injectable } from '@angular/core';
import { Cricketer, ICricketer } from './cricketer.model';

@Injectable({
  providedIn: 'root'
})
export class CricketerServiceService {

  constructor() { }
  getCricketerList(){
    // let cricketers: Cricketer[]=[new Cricketer(11,"Manan",65), new Cricketer(2,"Shival",56)]; 
    let cricketers:ICricketer[]=[{id:101,name:"Manan",avgScore:65}, {id:102,name:"Dilip",avgScore:50}];
    return cricketers;
  }
}
