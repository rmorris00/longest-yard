import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { BuildObjectService } from '../build-object.service';
import { Player } from '../interfaces'
import { WhowonService } from '../whowon.service';
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-playerone',
  templateUrl: './playerone.component.html',
  styleUrls: ['./playerone.component.css']
})
export class PlayeroneComponent implements OnInit {

<<<<<<< Updated upstream
  availablePlayers: Player[];
  playerOneRoster: Player[];

  constructor(private buildObject: BuildObjectService, private whoWon: WhowonService) { }

  ngOnInit() {
    this.availablePlayers = this.buildObject.getPlayerList();
  };

  calculateTotal(){
    this.whoWon.calculatePlayerOneScore(this.playerOneRoster);
  };
=======
  constructor() { }

  ngOnInit() {
  }
>>>>>>> Stashed changes

}
