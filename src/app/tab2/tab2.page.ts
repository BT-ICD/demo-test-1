import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  player:Player= new Player(101,"Ketan Paresh","Michigan");
  constructor() {
    console.log(this.player);
  }
  ngOnInit(): void {
    // this.player.id=101;
    // this.player.name="Ketan Parekh";
    // this.player.team="Michigan";
  }

}
