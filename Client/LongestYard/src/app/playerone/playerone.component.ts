import { Component, OnInit } from '@angular/core';
import { BuildObjectService } from '../build-object.service';
import { Player } from '../interfaces'
import { WhowonService } from '../whowon.service';

@Component({
  selector: 'app-playerone',
  templateUrl: './playerone.component.html',
  styleUrls: ['./playerone.component.css']
})
export class PlayeroneComponent implements OnInit {

  availablePlayers: Player[];
  playerOneRoster: Player[];

  constructor(private buildObject: BuildObjectService, private whoWon: WhowonService) { }

  ngOnInit() {
    this.availablePlayers = this.buildObject.getPlayerList();
  };

  calculateTotal(){
    this.whoWon.calculatePlayerOneScore(this.playerOneRoster);
  };

}
