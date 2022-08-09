import { Injectable } from '@angular/core';
import { Cricketer } from './cricketer.model';

@Injectable({
  providedIn: 'root'
})
export class CricketerServiceService {

  constructor() { }
  getCricketerList(){
    let cricketers: Cricketer[]=[new Cricketer(11,"Manan",65), new Cricketer(2,"Shival",56)]; 
    return cricketers;
  }
}
