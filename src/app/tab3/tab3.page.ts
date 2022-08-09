import { Component } from '@angular/core';
import { CricketerServiceService } from './cricketer-service.service';
import { Cricketer } from './cricketer.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
cricketers:Cricketer[];
  constructor(private cricketerServiceService:CricketerServiceService) {
    this.cricketers= cricketerServiceService.getCricketerList();
    console.log(this.cricketers.length);
  }

}
