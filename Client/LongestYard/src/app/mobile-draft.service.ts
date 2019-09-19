import { Injectable } from '@angular/core';
import { Player } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MobileDraftService {

  playerOneRoster: Player[] = [];
  playerOneSalary: number = 10000;
  playerTwoSalary: number = 10000;
  qbsDrafted: Player[]  = [];
  rbsDrafted: Player[]  = [];
  wrsDrafted: Player[]  = [];
  tesDrafted: Player[]  = [];
  flexsDrafted: Player[] = [];
  ksDrafted: Player[]  = [];
  qbs2Drafted: Player[]  = [];
  rbs2Drafted: Player[]  = [];
  wrs2Drafted: Player[]  = [];
  tes2Drafted: Player[]  = [];
  flexs2Drafted: Player[] = [];
  ks2Drafted: Player[]  = [];

  constructor() { }

  draftQB(selectedPlayer) {
    if (this.qbsDrafted.length === 1){
      for (let i = 0; i < this.qbsDrafted.length; i ++){
        if (selectedPlayer.playerId === this.qbsDrafted[i].playerId){
          this.flipSelected(this.qbsDrafted[i]);
          let indexOfPlayer = i;
          this.playerOneSalary += this.qbsDrafted[i].playerCost;
          this.qbsDrafted.splice(indexOfPlayer, 1);
          console.log("Qb list")
          console.log(this.qbsDrafted);
          return this.qbsDrafted;
        };
      }
    }
    else if (this.qbsDrafted.length < 1 && this.playerOneSalary >= selectedPlayer.playerCost){
      console.log(selectedPlayer);
      this.flipSelected(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      this.qbsDrafted.push(selectedPlayer);
      console.log("QB list");
      console.log(this.qbsDrafted);
      return this.qbsDrafted;
    }
  };

  draftQB2(selectedPlayer) {
    if (this.qbs2Drafted.length === 1){
      for (let i = 0; i < this.qbs2Drafted.length; i ++){
        if (selectedPlayer.playerId === this.qbs2Drafted[i].playerId){
          this.flipSelected2(this.qbs2Drafted[i]);
          let indexOfPlayer = i;
          this.playerTwoSalary += this.qbs2Drafted[i].playerCost;
          this.qbs2Drafted.splice(indexOfPlayer, 1);
          console.log("Qb list")
          console.log(this.qbs2Drafted);
          return this.qbs2Drafted;
        };
      }
    }
    else if (this.qbs2Drafted.length < 1 && this.playerTwoSalary >= selectedPlayer.playerCost){
      console.log(selectedPlayer);
      this.flipSelected2(selectedPlayer);
      this.playerTwoSalary -= selectedPlayer.playerCost;
      this.qbs2Drafted.push(selectedPlayer);
      console.log("QB list");
      console.log(this.qbs2Drafted);
      return this.qbs2Drafted;
    }
  };

  draftRB(selectedPlayer) {
    if (this.rbsDrafted.length === 2) {
      for (let i = 0; i < this.rbsDrafted.length; i ++){
        if (selectedPlayer.playerId === this.rbsDrafted[i].playerId){
          this.flipSelected(this.rbsDrafted[i]);
          let indexOfPlayer = i;
          this.playerOneSalary += this.rbsDrafted[i].playerCost;
          this.rbsDrafted.splice(indexOfPlayer, 1);
          console.log("Rb list" + this.rbsDrafted);
          return this.rbsDrafted;
        };
      }
    }
    if (this.rbsDrafted.length < 2 && this.playerOneSalary >= selectedPlayer.playerCost) {
      this.flipSelected(selectedPlayer);
      this.rbsDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("Rb list" + this.rbsDrafted);
      return this.rbsDrafted;
    };
  };

  draftRB2(selectedPlayer) {
    if (this.rbs2Drafted.length === 2) {
      for (let i = 0; i < this.rbs2Drafted.length; i ++){
        if (selectedPlayer.playerId === this.rbs2Drafted[i].playerId){
          this.flipSelected2(this.rbs2Drafted[i]);
          let indexOfPlayer = i;
          this.playerTwoSalary += this.rbs2Drafted[i].playerCost;
          this.rbs2Drafted.splice(indexOfPlayer, 1);
          console.log("Rb list" + this.rbs2Drafted);
          return this.rbs2Drafted;
        };
      }
    }
    if (this.rbs2Drafted.length < 2 && this.playerTwoSalary >= selectedPlayer.playerCost) {
      this.flipSelected2(selectedPlayer);
      this.rbs2Drafted.push(selectedPlayer);
      this.playerTwoSalary -= selectedPlayer.playerCost;
      console.log("Rb list" + this.rbs2Drafted);
      return this.rbs2Drafted;
    };
  };

  draftWR(selectedPlayer) {
    if (this.wrsDrafted.length === 2) {
      for (let i = 0; i < this.wrsDrafted.length; i ++){
        if (selectedPlayer.playerId === this.wrsDrafted[i].playerId){
          this.flipSelected(this.wrsDrafted[i]);
          let indexOfPlayer = i;
          this.playerOneSalary += this.wrsDrafted[i].playerCost;
          this.wrsDrafted.splice(indexOfPlayer, 1);
          console.log("Wr list" + this.wrsDrafted);
          return this.wrsDrafted;
        };
      }
    }
    if (this.wrsDrafted.length < 2 && this.playerOneSalary >= selectedPlayer.playerCost) {
      this.flipSelected(selectedPlayer);
      this.wrsDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("Wr list" + this.wrsDrafted);
      return this.wrsDrafted;
    }
  };

  draftWR2(selectedPlayer) {
    if (this.wrs2Drafted.length === 2) {
      for (let i = 0; i < this.wrs2Drafted.length; i ++){
        if (selectedPlayer.playerId === this.wrs2Drafted[i].playerId){
          this.flipSelected2(this.wrs2Drafted[i]);
          let indexOfPlayer = i;
          this.playerTwoSalary += this.wrs2Drafted[i].playerCost;
          this.wrs2Drafted.splice(indexOfPlayer, 1);
          console.log("Wr list" + this.wrs2Drafted);
          return this.wrs2Drafted;
        };
      }
    }
    if (this.wrs2Drafted.length < 2 && this.playerTwoSalary >= selectedPlayer.playerCost) {
      this.flipSelected2(selectedPlayer);
      this.wrs2Drafted.push(selectedPlayer);
      this.playerTwoSalary -= selectedPlayer.playerCost;
      console.log("Wr list" + this.wrs2Drafted);
      return this.wrs2Drafted;
    }
  };

  draftTE(selectedPlayer) {
    if (this.tesDrafted.length === 1) {
      for (let i = 0; i < this.tesDrafted.length; i ++){
        if (selectedPlayer.playerId === this.tesDrafted[i].playerId){
          this.flipSelected(this.tesDrafted[i]);
          let indexOfPlayer = i;
          this.playerOneSalary += this.tesDrafted[i].playerCost;
          this.tesDrafted.splice(indexOfPlayer, 1);
          console.log("TE list" + this.tesDrafted);
          return this.tesDrafted;
        };
      }
    }
    if (this.tesDrafted.length < 1 && this.playerOneSalary >= selectedPlayer.playerCost) {
      this.flipSelected(selectedPlayer);
      this.tesDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("TE list" + this.tesDrafted);
      return this.tesDrafted;
    }
  };

  draftTE2(selectedPlayer) {
    if (this.tes2Drafted.length === 1) {
      for (let i = 0; i < this.tes2Drafted.length; i ++){
        if (selectedPlayer.playerId === this.tes2Drafted[i].playerId){
          this.flipSelected2(this.tes2Drafted[i]);
          let indexOfPlayer = i;
          this.playerTwoSalary += this.tes2Drafted[i].playerCost;
          this.tes2Drafted.splice(indexOfPlayer, 1);
          console.log("TE list" + this.tes2Drafted);
          return this.tes2Drafted;
        };
      }
    }
    if (this.tes2Drafted.length < 1 && this.playerTwoSalary >= selectedPlayer.playerCost) {
      this.flipSelected2(selectedPlayer);
      this.tes2Drafted.push(selectedPlayer);
      this.playerTwoSalary -= selectedPlayer.playerCost;
      console.log("TE list" + this.tes2Drafted);
      return this.tes2Drafted;
    }
  };

  draftFlex(selectedPlayer) {
    if (this.flexsDrafted.length === 1) {
      for (let i = 0; i < this.flexsDrafted.length; i ++){
        if (selectedPlayer.playerId === this.flexsDrafted[i].playerId){
          this.flipSelected(this.flexsDrafted[i]);
          let indexOfPlayer = i;
          this.playerOneSalary += this.flexsDrafted[i].playerCost;
          this.flexsDrafted.splice(indexOfPlayer, 1);
          console.log("Flex list" + this.flexsDrafted);
          return this.flexsDrafted;
        };
      }
    }
    if (this.flexsDrafted.length < 1 && this.playerOneSalary >= selectedPlayer.playerCost) {
      this.flipSelected(selectedPlayer);
      this.flexsDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("Flex list" + this.flexsDrafted);
      return this.flexsDrafted;
    }
  };

  draftFlex2(selectedPlayer) {
    if (this.flexs2Drafted.length === 1) {
      for (let i = 0; i < this.flexs2Drafted.length; i ++){
        if (selectedPlayer.playerId === this.flexs2Drafted[i].playerId){
          this.flipSelected2(this.flexs2Drafted[i]);
          let indexOfPlayer = i;
          this.playerTwoSalary += this.flexs2Drafted[i].playerCost;
          this.flexs2Drafted.splice(indexOfPlayer, 1);
          console.log("Flex list" + this.flexs2Drafted);
          return this.flexs2Drafted;
        };
      }
    }
    if (this.flexs2Drafted.length < 1 && this.playerTwoSalary >= selectedPlayer.playerCost) {
      this.flipSelected2(selectedPlayer);
      this.flexs2Drafted.push(selectedPlayer);
      this.playerTwoSalary -= selectedPlayer.playerCost;
      console.log("Flex list" + this.flexs2Drafted);
      return this.flexs2Drafted;
    }
  };

  draftK(selectedPlayer) {
    if (this.ksDrafted.length === 1) {
      for (let i = 0; i < this.ksDrafted.length; i ++){
        if (selectedPlayer.playerId === this.ksDrafted[i].playerId){
          this.flipSelected(this.ksDrafted[i]);
          let indexOfPlayer = i;
          this.playerOneSalary += this.ksDrafted[i].playerCost;
          this.ksDrafted.splice(indexOfPlayer, 1);
          console.log("K list" + this.ksDrafted);
          return this.ksDrafted;
        };
      }
    }
    if (this.ksDrafted.length < 1 && this.playerOneSalary >= selectedPlayer.playerCost){
      this.flipSelected(selectedPlayer);
      this.ksDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("K list" + this.ksDrafted);
      return this.ksDrafted;
    }
  };

  draftK2(selectedPlayer) {
    if (this.ks2Drafted.length === 1) {
      for (let i = 0; i < this.ks2Drafted.length; i ++){
        if (selectedPlayer.playerId === this.ks2Drafted[i].playerId){
          this.flipSelected2(this.ks2Drafted[i]);
          let indexOfPlayer = i;
          this.playerTwoSalary += this.ks2Drafted[i].playerCost;
          this.ks2Drafted.splice(indexOfPlayer, 1);
          console.log("K list" + this.ks2Drafted);
          return this.ks2Drafted;
        };
      }
    }
    if (this.ks2Drafted.length < 1 && this.playerTwoSalary >= selectedPlayer.playerCost){
      this.flipSelected2(selectedPlayer);
      this.ks2Drafted.push(selectedPlayer);
      this.playerTwoSalary -= selectedPlayer.playerCost;
      console.log("K list" + this.ks2Drafted);
      return this.ks2Drafted;
    }
  };

  getPlayerOneSalary(){
    return this.playerOneSalary;
  }

  getPlayerTwoSalary(){
    return this.playerTwoSalary;
  }

  flipSelected(p){
    if (p.playerOneSelected === false){
      p.playerOneSelected = true
    }
    else if (p.playerOneSelected === true){
      p.playerOneSelected = false
    };
    return p;
  };

  flipSelected2(p){
    if (p.playerTwoSelected === false){
      p.playerTwoSelected = true
    }
    else if (p.playerTwoSelected === true){
      p.playerTwoSelected = false
    };
    return p;
  };
  }

