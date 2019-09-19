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
  qbs2Drafted: Player[]  = [];
  rbs2Drafted: Player[]  = [];
  wrs2Drafted: Player[]  = [];
  tes2Drafted: Player[]  = [];
  flexs2Drafted: Player[] = [];
  ks2Drafted: Player[]  = [];

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
    for (let i = 0; i < this.qbs2Drafted.length; i ++){
      this.playerTwoRoster.push(this.qbs2Drafted[i]);
    };
    for (let i = 0; i < this.rbs2Drafted.length; i ++){
      this.playerTwoRoster.push(this.rbs2Drafted[i]);
    };
    for (let i = 0; i < this.wrs2Drafted.length; i ++){
      this.playerTwoRoster.push(this.wrs2Drafted[i]);
    };
    for (let i = 0; i < this.tes2Drafted.length; i ++){
      this.playerTwoRoster.push(this.tes2Drafted[i]);
    };
    for (let i = 0; i < this.flexs2Drafted.length; i ++){
      this.playerTwoRoster.push(this.flexs2Drafted[i]);
    };
    for (let i = 0; i < this.ks2Drafted.length; i ++){
      this.playerTwoRoster.push(this.ks2Drafted[i]);
    };
    return this.playerTwoRoster;
  };

  draftQB(selectedPlayer) {
    this.qbs2Drafted = this.mobileDraft.draftQB2(selectedPlayer);
  };

  draftRB(selectedPlayer) {
    this.rbs2Drafted = this.mobileDraft.draftRB2(selectedPlayer);
  };

  draftWR(selectedPlayer) {
    this.wrs2Drafted = this.mobileDraft.draftWR2(selectedPlayer);
  };

  draftTE(selectedPlayer) {
    this.tes2Drafted = this.mobileDraft.draftTE2(selectedPlayer);
  };

  draftFlex(selectedPlayer) {
    this.flexs2Drafted = this.mobileDraft.draftFlex2(selectedPlayer);
  };

  draftK(selectedPlayer) {
    this.ks2Drafted = this.mobileDraft.draftK2(selectedPlayer);
  };

}
