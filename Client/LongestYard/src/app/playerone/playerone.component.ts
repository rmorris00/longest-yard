import { Component, OnInit } from '@angular/core';
import { BuildObjectService } from '../build-object.service';
import { Player } from '../interfaces'
import { WhowonService } from '../whowon.service';
import { MobileDraftService } from '../mobile-draft.service';

@Component({
  selector: 'app-playerone',
  templateUrl: './playerone.component.html',
  styleUrls: ['./playerone.component.css']
})
export class PlayeroneComponent implements OnInit {

  availablePlayers: Player[];
  playerOneRoster: Player[] = [];
  playerOneSalary: number;
  qbsDrafted: Player[]  = [];
  rbsDrafted: Player[]  = [];
  wrsDrafted: Player[]  = [];
  tesDrafted: Player[]  = [];
  flexsDrafted: Player[] = [];
  ksDrafted: Player[]  = [];

  constructor(private buildObject: BuildObjectService, private whoWon: WhowonService, private mobileDraft: MobileDraftService) { }

  ngOnInit() {
    this.availablePlayers = this.buildObject.getPlayerList();
    this.playerOneSalary = this.mobileDraft.getPlayerOneSalary();
  };

  calculateTotal(){
    this.whoWon.calculatePlayerOneScore(this.playerOneRoster);
  };

  draft(){
    this.addToRoster();
    this.calculateTotal();
  }

  addToRoster(){
    for (let i = 0; i < this.qbsDrafted.length; i ++){
      this.playerOneRoster.push(this.qbsDrafted[i]);
    };
    for (let i = 0; i < this.rbsDrafted.length; i ++){
      this.playerOneRoster.push(this.rbsDrafted[i]);
    };
    for (let i = 0; i < this.wrsDrafted.length; i ++){
      this.playerOneRoster.push(this.wrsDrafted[i]);
    };
    for (let i = 0; i < this.tesDrafted.length; i ++){
      this.playerOneRoster.push(this.tesDrafted[i]);
    };
    for (let i = 0; i < this.flexsDrafted.length; i ++){
      this.playerOneRoster.push(this.flexsDrafted[i]);
    };
    for (let i = 0; i < this.ksDrafted.length; i ++){
      this.playerOneRoster.push(this.ksDrafted[i]);
    };
    return this.playerOneRoster;
  };

  draftQB(selectedPlayer) {
    this.qbsDrafted = this.mobileDraft.draftQB(selectedPlayer);
    this.playerOneSalary = this.mobileDraft.getPlayerOneSalary();
  };

  draftRB(selectedPlayer) {
    this.rbsDrafted = this.mobileDraft.draftRB(selectedPlayer);
    this.playerOneSalary = this.mobileDraft.getPlayerOneSalary();
  };

  draftWR(selectedPlayer) {
    this.wrsDrafted = this.mobileDraft.draftWR(selectedPlayer);
    this.playerOneSalary = this.mobileDraft.getPlayerOneSalary();
  };

  draftTE(selectedPlayer) {
    this.tesDrafted = this.mobileDraft.draftTE(selectedPlayer);
    this.playerOneSalary = this.mobileDraft.getPlayerOneSalary();
  };

  draftFlex(selectedPlayer) {
    this.flexsDrafted = this.mobileDraft.draftFlex(selectedPlayer);
    this.playerOneSalary = this.mobileDraft.getPlayerOneSalary();
  };

  draftK(selectedPlayer) {
    this.ksDrafted = this.mobileDraft.draftK(selectedPlayer);
    this.playerOneSalary = this.mobileDraft.getPlayerOneSalary();
  };

    
  }



