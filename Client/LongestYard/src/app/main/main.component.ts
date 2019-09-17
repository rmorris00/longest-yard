import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import {CdkDragDrop, CdkDropList, CdkDragStart, moveItemInArray, copyArrayItem, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import {Player} from '../interfaces';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';

import { BuildObjectService } from '../build-object.service';
import { NumberValueAccessor } from '@angular/forms';
import { currentId } from 'async_hooks';
import { element } from 'protractor';
import { WhowonService } from '../whowon.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  availPlayers : Player;
  playerRoster1 : Player[] = [];
  playerRoster2 : Player [] = [];

  players2 = [];
 

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
      careerBlurb: "he loved orange juice",
      playerCost: 10000
      
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
      careerBlurb: "he loved orange juice",
      playerCost: 10000
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
      careerBlurb: "he loved orange juice",
      playerCost: 10000
    },
  ]


  playerCrimes = [];
  playerCost: number = 0;
  playerFirstName;
  playerLastName;
  panelOpenState = false;

  closeResult: string;




  QB: any;
  RB : any;
  WR: any;

  constructor(private apiCall : ApiCallService, private buildObject : BuildObjectService, private modalService: NgbModal, private whoWon: WhowonService) { }

  ngOnInit() {
    this.availablePlayers = this.buildObject.getPlayerList();
   
    this.fillInOffenseData();
  }

  getData(firstName, lastName){
    
    this.apiCall.getPlayerArrestData(firstName, lastName).subscribe((e: any)=>{
      console.log(e);
      this.playerCrimes = [];
      for (let i = 0; i < e.length; i++){
        this.playerCrimes.push(e[i].category);
      }
      this.getPlayerCost(this.playerCrimes)
      console.log(this.playerCrimes);
      return(this.playerCrimes);
    })
  };

  fillInOffenseData(){
    console.log(this.buildObject.fillInOffenseData(this.testPlayers));
  }

  getPlayerCost(playerCrimes){
    this.playerCost = 0;
    for (let i = 0; i < playerCrimes.length; i ++){
      console.log(playerCrimes[i])
      if (playerCrimes[i].toLowerCase().includes('murder')) {
        this.playerCost += 100;
      };
      if (playerCrimes[i].toLowerCase().includes('dui')) {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase().includes('sex')) {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase().includes('drug')) {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase().includes('assault')) {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase().includes("gun")) {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "disorderly conduct") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "domestic violence") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "public intoxication") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "battery") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "license") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "alcohol") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "reckless driving") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "theft") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "outstanding warrant") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "failure to appear") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "trespassing") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "animal abuse") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "obstruction") {
        this.playerCost += 2;
      };
      if (playerCrimes[i].toLowerCase() === "child abuse") {
        this.playerCost += 1;
      };
      if (playerCrimes[i].toLowerCase() === "resisting arrest") {
        this.playerCost += 2;
      };
    }
    return this.playerCost
  }
  availablePlayers : Player[];

  teamPlayer1 : Player[] = [];
  teamPlayer2 : Player[] = [];
  selectedPlayer : Player = {
    firstName: "Johnny",
    lastName: "Manziel",
    position: "QB",
    picture: '',
    playerId: 2,
    av: 1
  };
  playerOneDrafted : boolean = false;
  playerTwoDrafted: boolean = false;
  playerOneSalary : number = 10000;
  playerTwoSalary : number = 10000;
  positionToBeDrafted : string = "QB"
  positionAllowedToBeDrafted : string = "QB";
  flexPosition: string = "p.position === WR || p.position === TE"
  draftRound: number = 1;
  playerOneTotalScore: number;
  playerTwoTotalScore: number;
  winner: number;



  player1 : Player[] = [];



  player2 = [];





  playerSelected(player){
    this.selectedPlayer = player;
    console.log(this.selectedPlayer);
  };

  player1Drafted(){
    console.log(`Player 1 has drafted ${this.selectedPlayer.firstName}`)
    if (this.playerOneDrafted === false){
      for (let i = 0; i < this.teamPlayer1.length; i++){
        if (this.selectedPlayer.playerId === this.teamPlayer1[i].playerId){
          alert(`${this.selectedPlayer.firstName} ${this.selectedPlayer.lastName} Has Already Been Drafted By Player 1`);
          return;
        }
      }
      this.teamPlayer1.push(this.selectedPlayer);
      this.playerOneSalary -= this.selectedPlayer.playerCost;
      this.playerOneDrafted = true;
      this.goToNextRound();
    }
    console.log(this.teamPlayer1);
    return;
  };

  player2Drafted(){
    console.log(`Player 2 has drafted ${this.selectedPlayer.firstName}`)
    if (this.playerTwoDrafted === false){
      for (let i = 0; i < this.teamPlayer2.length; i ++){
        if (this.selectedPlayer.playerId === this.teamPlayer2[i].playerId){
          alert(`${this.selectedPlayer.firstName} ${this.selectedPlayer.lastName} Has Already Been Drafted By Player 2`);
          return;
        }
      }
      this.teamPlayer2.push(this.selectedPlayer);
      this.playerTwoSalary -= this.selectedPlayer.playerCost;
      this.playerTwoDrafted = true;
      this.goToNextRound();
    }
    else {
      return;
    }
    console.log(this.teamPlayer2);
    return;
  };

  goToNextRound(){
    if (this.playerOneDrafted === true && this.playerTwoDrafted === true) {
      this.draftRound += 1;
      this.playerOneDrafted = false;
      this.playerTwoDrafted = false;
      this.whichPositionToDraft();
      if (this.draftRound >= 9){
        let totalPlayer1 = this.totalPlayerOneScore();
        let totalPlayer2 = this.totalPlayerTwoScore();
        this.winner = this.whoWon.whoWon(totalPlayer1, totalPlayer2);
        console.log(`The winner is player ${this.winner}`);
      }
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
    else if (this.draftRound > 8) {
      this.positionToBeDrafted = "No More Picks"
      this.positionAllowedToBeDrafted = this.positionToBeDrafted; 
    }
    else if (this.draftRound > 9 || this.draftRound < 1){
      alert("woah, something is wrong")
    };
  };

  totalPlayerOneScore() {
    this.playerOneTotalScore = 0;
    for (let i = 0; i < this.teamPlayer1.length; i ++){
      this.playerOneTotalScore += (this.teamPlayer1[i].av);
    };
    return this.playerOneTotalScore;
  };

  totalPlayerTwoScore() {
    this.playerTwoTotalScore = 0;
    for (let i = 0; i < this.teamPlayer2.length; i ++){
      this.playerTwoTotalScore += (this.teamPlayer2[i].av);
    };
    return this.playerTwoTotalScore;
  };



  open(content) {
    this.modalService.open(content)
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

                        // this.subtractSalary(this.permittedValues);
                        
                        
    }
    
  }


  drop2(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
 
  // drop condition code that doesn't work below

  // evenPredicate(item : CdkDrag<string>, testPlayer) {


  //   return true;
   
  // }

  // noReturnPredicate() {
  //   return false;
  // }

  filteredPlayer = [...this.player2];

  // removeTask(testPlayer){
  //   console.log(testPlayer)
  //   let indexNumber = this.player2.indexOf(testPlayer)
  //   this.testPlayer.splice(indexNumber, 1);
  // }

    
  playerStartingSalary : number = 100000

  permittedValues : any = this.player1.map(function(value) {
    return value.playerCost;
  });
  
  playerSalary : any = (this.playerStartingSalary - this.permittedValues);
  

};
