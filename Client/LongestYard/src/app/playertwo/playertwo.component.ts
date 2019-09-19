import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces';
import { BuildObjectService } from '../build-object.service';
import { WhowonService } from '../whowon.service';
import { MobileDraftService } from '../mobile-draft.service';

@Component({
  selector: 'app-playertwo',
  templateUrl: './playertwo.component.html',
  styleUrls: ['./playertwo.component.css']
})
export class PlayertwoComponent implements OnInit {

  availablePlayers: Player[];
  playerTwoRoster: Player[] = [];
  playerTwoSalary: number = 10000;
  qbsDrafted: Player[]  = [];
  rbsDrafted: Player[]  = [];
  wrsDrafted: Player[]  = [];
  tesDrafted: Player[]  = [];
  flexsDrafted: Player[] = [];
  ksDrafted: Player[]  = [];

  constructor(private buildObject: BuildObjectService, private whoWon: WhowonService, private mobileDraft: MobileDraftService) { }

  ngOnInit() {
    this.availablePlayers = this.buildObject.getPlayerList();
    
  };


  calculateTotal(){
    this.whoWon.calculatePlayerOneScore(this.playerTwoRoster);
  };

  draft(){
    this.addToRoster();
    this.calculateTotal();
  }

  addToRoster(){
    for (let i = 0; i < this.qbsDrafted.length; i ++){
      this.playerTwoRoster.push(this.qbsDrafted[i]);
    };
    for (let i = 0; i < this.rbsDrafted.length; i ++){
      this.playerTwoRoster.push(this.rbsDrafted[i]);
    };
    for (let i = 0; i < this.wrsDrafted.length; i ++){
      this.playerTwoRoster.push(this.wrsDrafted[i]);
    };
    for (let i = 0; i < this.tesDrafted.length; i ++){
      this.playerTwoRoster.push(this.tesDrafted[i]);
    };
    for (let i = 0; i < this.flexsDrafted.length; i ++){
      this.playerTwoRoster.push(this.flexsDrafted[i]);
    };
    for (let i = 0; i < this.ksDrafted.length; i ++){
      this.playerTwoRoster.push(this.ksDrafted[i]);
    };
    return this.playerTwoRoster;
  };

  draftQB(selectedPlayer) {
    this.qbsDrafted = this.mobileDraft.draftQB2(selectedPlayer);
  };

  draftRB(selectedPlayer) {
    this.rbsDrafted = this.mobileDraft.draftRB2(selectedPlayer);
  };

  draftWR(selectedPlayer) {
    this.wrsDrafted = this.mobileDraft.draftWR2(selectedPlayer);
  };

  draftTE(selectedPlayer) {
    this.tesDrafted = this.mobileDraft.draftTE2(selectedPlayer);
  };

  draftFlex(selectedPlayer) {
    this.flexsDrafted = this.mobileDraft.draftFlex2(selectedPlayer);
  };

  draftK(selectedPlayer) {
    this.ksDrafted = this.mobileDraft.draftK2(selectedPlayer);
  };

}
