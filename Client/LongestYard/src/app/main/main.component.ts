import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import {CdkDragDrop, CdkDropList, CdkDragStart, moveItemInArray, copyArrayItem, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import {Player} from '../interfaces';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';

import { BuildObjectService } from '../build-object.service';
import { NumberValueAccessor } from '@angular/forms';
import { currentId } from 'async_hooks';
import { element } from 'protractor';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  testPlayer : Player;
  testPlayers : Player[] = [
    {
      playerId: 99,
      firstName: "Michael",
      lastName: "Vick",
      position: "QB",
      picture: "testurl",
      av: 4,
      careerStat1: "Mike used dogs to fight",
      careerStat2: "He like pits",
      careerStat3: "he was fast",
      careerBlurb: "he loved orange juice"
    },
    {
      playerId: 92,
      firstName: "Tom",
      lastName: "Brady",
      position: "QB",
      picture: "testurl",
      av: 4,
      careerStat1: "Mike used dogs to fight",
      careerStat2: "He like pits",
      careerStat3: "he was fast",
      careerBlurb: "he loved orange juice"
    },
    {
      playerId: 98,
      firstName: "Josh",
      lastName: "Gordon",
      position: "RB",
      picture: "testurl",
      av: 4,
      careerStat1: "Mike used dogs to fight",
      careerStat2: "He like pits",
      careerStat3: "he was fast",
      careerBlurb: "he loved orange juice"
    },
    {
      playerId: 97,
      firstName: "Aaron",
      lastName: "Hernandez",
      position: "TE",
      picture: "testurl",
      av: 4,
      careerStat1: "Mike used dogs to fight",
      careerStat2: "He like pits",
      careerStat3: "he was fast",
      careerBlurb: "he loved orange juice"
    }
  ]


  playerCrimes = [];
  listOfPlayers : Player[];
  playerCost: number = 0;
  playerFirstName;
  playerLastName;
  panelOpenState = false;

  QB: any;
  RB : any;
  WR: any;

  constructor(private apiCall : ApiCallService, private buildObject : BuildObjectService) { }

  ngOnInit() {
    this.availablePlayers = this.buildObject.getPlayerList();
    
  }
  availablePlayers : Player[];

  mikePlayer1 : Player[] = [];
  mikePlayer2 : Player[] = [];
  mikeSelectedPlayer : Player;
  playerOneDrafted : boolean = false;
  playerTwoDrafted: boolean = false;
  playerOneSalary : number = 10000;
  playerTwoSalary : number = 10000;
  positionToBeDrafted : string = "QB"
  positionAllowedToBeDrafted : string = "QB";
  flexPosition: string = "p.position === WR || p.position === TE"
  draftRound: number = 1;


player1 : Player[] = [];



 player2 = [];




  players2 = [];
  

  playerSelected(player){
    this.mikeSelectedPlayer = player;
    console.log(this.mikeSelectedPlayer);
  };

  player1Drafted(){
    if (this.playerOneDrafted === false){
      for (let i = 0; i < this.mikePlayer1.length; i++){
        if (this.mikeSelectedPlayer.playerId === this.mikePlayer1[i].playerId){
          alert(`${this.mikeSelectedPlayer.firstName} ${this.mikeSelectedPlayer.lastName} Has Already Been Drafted By Player 1`);
          return;
        }
      }
      this.mikePlayer1.push(this.mikeSelectedPlayer);
      this.playerOneSalary -= this.mikeSelectedPlayer.playerCost;
      this.playerOneDrafted = true;
      this.goToNextRound();
    }
    console.log(this.mikePlayer1);
  };

  player2Drafted(){
    if (this.playerTwoDrafted === false){
      for (let i = 0; i < this.mikePlayer2.length; i ++){
        if (this.mikeSelectedPlayer.playerId === this.mikePlayer2[i].playerId){
          alert(`${this.mikeSelectedPlayer.firstName} ${this.mikeSelectedPlayer.lastName} Has Already Been Drafted By Player 2`);
          return;
        }
      }
      this.mikePlayer2.push(this.mikeSelectedPlayer);
      this.playerOneSalary -= this.mikeSelectedPlayer.playerCost;
      this.playerTwoDrafted = true;
      this.goToNextRound();
    }
    else {
      return;
    }
    console.log(this.mikePlayer2);
  };

  goToNextRound(){
    if (this.playerOneDrafted === true && this.playerTwoDrafted === true) {
      this.draftRound += 1;
      this.playerOneDrafted = false;
      this.playerTwoDrafted = false;
      this.whichPositionToDraft();
      console.log(this.draftRound, this.positionAllowedToBeDrafted);
    }
    else {
      return;
    }
  }

  whichPositionToDraft(){
    if (this.draftRound === 1){
      this.positionToBeDrafted = "QB";
      this.positionAllowedToBeDrafted = this.positionToBeDrafted;
      console.log("Am i stuck on 1?")
    }
    else if (this.draftRound === 2 || this.draftRound === 3){
      this.positionToBeDrafted = "RB";
      this.positionAllowedToBeDrafted = "RB";
    }
    else if (this.draftRound === 4 || this.draftRound === 5){
      this.positionToBeDrafted = "WR";
      this.positionAllowedToBeDrafted = this.positionToBeDrafted;
    }
    else if (this.draftRound === 6){
      this.positionToBeDrafted = "TE";
      this.positionAllowedToBeDrafted = this.positionToBeDrafted;
    }
    else if (this.draftRound === 7) {
      this.positionToBeDrafted = "RB/WR/TE";
      this.positionAllowedToBeDrafted = "WR";
      }
    else if (this.draftRound === 8) {
      this.positionToBeDrafted = "K"
      this.positionAllowedToBeDrafted = this.positionToBeDrafted;
    }
    else if (this.draftRound > 9 || this.draftRound < 1){
      alert("woah, something is wrong");
    };
  };



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    
    } else{
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex)
                        console.log(this.player1);
                        
                        
    }
    
  }

  evenPredicate(item : CdkDrag<string>, testPlayer) {


    return true;
   
  }

  noReturnPredicate() {
    return false;
  }



  
    
    

  

}
