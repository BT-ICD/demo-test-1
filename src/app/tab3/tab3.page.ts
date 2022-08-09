import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CricketerServiceService } from './cricketer-service.service';
import { Cricketer, ICricketer } from './cricketer.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
cricketers:ICricketer[];
selectedCricketer:ICricketer;
handlerMessage = '';
roleMessage = '';
  constructor(private cricketerServiceService:CricketerServiceService, private alertController: AlertController) {
    this.cricketers= cricketerServiceService.getCricketerList();
    console.log(this.cricketers.length);
  }
  async detailsOfPlayer(crick:ICricketer){
    console.log(crick);
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage =  `Alert confirmed, ${crick.name} having average score is ${crick.avgScore}.`;
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
  
}

