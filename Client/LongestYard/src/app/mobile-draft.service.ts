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
    else if (this.qbsDrafted.length < 1){
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
    if (this.qbsDrafted.length === 1){
      for (let i = 0; i < this.qbsDrafted.length; i ++){
        if (selectedPlayer.playerId === this.qbsDrafted[i].playerId){
          this.flipSelected2(this.qbsDrafted[i]);
          let indexOfPlayer = i;
          this.playerOneSalary += this.qbsDrafted[i].playerCost;
          this.qbsDrafted.splice(indexOfPlayer, 1);
          console.log("Qb list")
          console.log(this.qbsDrafted);
          return this.qbsDrafted;
        };
      }
    }
    else if (this.qbsDrafted.length < 1){
      console.log(selectedPlayer);
      this.flipSelected2(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      this.qbsDrafted.push(selectedPlayer);
      console.log("QB list");
      console.log(this.qbsDrafted);
      return this.qbsDrafted;
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
    if (this.rbsDrafted.length < 2) {
      this.flipSelected(selectedPlayer);
      this.rbsDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("Rb list" + this.rbsDrafted);
      return this.rbsDrafted;
    };
  };

  draftRB2(selectedPlayer) {
    if (this.rbsDrafted.length === 2) {
      for (let i = 0; i < this.rbsDrafted.length; i ++){
        if (selectedPlayer.playerId === this.rbsDrafted[i].playerId){
          this.flipSelected2(this.rbsDrafted[i]);
          let indexOfPlayer = i;
          this.playerOneSalary += this.rbsDrafted[i].playerCost;
          this.rbsDrafted.splice(indexOfPlayer, 1);
          console.log("Rb list" + this.rbsDrafted);
          return this.rbsDrafted;
        };
      }
    }
    if (this.rbsDrafted.length < 2) {
      this.flipSelected2(selectedPlayer);
      this.rbsDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("Rb list" + this.rbsDrafted);
      return this.rbsDrafted;
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
    if (this.wrsDrafted.length < 2) {
      this.flipSelected(selectedPlayer);
      this.wrsDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("Wr list" + this.wrsDrafted);
      return this.wrsDrafted;
    }
  };

  draftWR2(selectedPlayer) {
    if (this.wrsDrafted.length === 2) {
      for (let i = 0; i < this.wrsDrafted.length; i ++){
        if (selectedPlayer.playerId === this.wrsDrafted[i].playerId){
          this.flipSelected2(this.wrsDrafted[i]);
          let indexOfPlayer = i;
          this.playerOneSalary += this.wrsDrafted[i].playerCost;
          this.wrsDrafted.splice(indexOfPlayer, 1);
          console.log("Wr list" + this.wrsDrafted);
          return this.wrsDrafted;
        };
      }
    }
    if (this.wrsDrafted.length < 2) {
      this.flipSelected2(selectedPlayer);
      this.wrsDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("Wr list" + this.wrsDrafted);
      return this.wrsDrafted;
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
    if (this.tesDrafted.length < 1) {
      this.flipSelected(selectedPlayer);
      this.tesDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("TE list" + this.tesDrafted);
      return this.tesDrafted;
    }
  };

  draftTE2(selectedPlayer) {
    if (this.tesDrafted.length === 1) {
      for (let i = 0; i < this.tesDrafted.length; i ++){
        if (selectedPlayer.playerId === this.tesDrafted[i].playerId){
          this.flipSelected2(this.tesDrafted[i]);
          let indexOfPlayer = i;
          this.playerOneSalary += this.tesDrafted[i].playerCost;
          this.tesDrafted.splice(indexOfPlayer, 1);
          console.log("TE list" + this.tesDrafted);
          return this.tesDrafted;
        };
      }
    }
    if (this.tesDrafted.length < 1) {
      this.flipSelected2(selectedPlayer);
      this.tesDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("TE list" + this.tesDrafted);
      return this.tesDrafted;
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
    if (this.flexsDrafted.length < 1) {
      this.flipSelected(selectedPlayer);
      this.flexsDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("Flex list" + this.flexsDrafted);
      return this.flexsDrafted;
    }
  };

  draftFlex2(selectedPlayer) {
    if (this.flexsDrafted.length === 1) {
      for (let i = 0; i < this.flexsDrafted.length; i ++){
        if (selectedPlayer.playerId === this.flexsDrafted[i].playerId){
          this.flipSelected2(this.flexsDrafted[i]);
          let indexOfPlayer = i;
          this.playerOneSalary += this.flexsDrafted[i].playerCost;
          this.flexsDrafted.splice(indexOfPlayer, 1);
          console.log("Flex list" + this.flexsDrafted);
          return this.flexsDrafted;
        };
      }
    }
    if (this.flexsDrafted.length < 1) {
      this.flipSelected2(selectedPlayer);
      this.flexsDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("Flex list" + this.flexsDrafted);
      return this.flexsDrafted;
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
    if (this.ksDrafted.length < 1){
      this.flipSelected(selectedPlayer);
      this.ksDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("K list" + this.ksDrafted);
      return this.ksDrafted;
    }
  };

  draftK2(selectedPlayer) {
    if (this.ksDrafted.length === 1) {
      for (let i = 0; i < this.ksDrafted.length; i ++){
        if (selectedPlayer.playerId === this.ksDrafted[i].playerId){
          this.flipSelected2(this.ksDrafted[i]);
          let indexOfPlayer = i;
          this.playerOneSalary += this.ksDrafted[i].playerCost;
          this.ksDrafted.splice(indexOfPlayer, 1);
          console.log("K list" + this.ksDrafted);
          return this.ksDrafted;
        };
      }
    }
    if (this.ksDrafted.length < 1){
      this.flipSelected2(selectedPlayer);
      this.ksDrafted.push(selectedPlayer);
      this.playerOneSalary -= selectedPlayer.playerCost;
      console.log("K list" + this.ksDrafted);
      return this.ksDrafted;
    }
  };

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

