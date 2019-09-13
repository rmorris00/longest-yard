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
      careerBlurb: "he loved orange juice",
      playerCost: 10000
      
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

  constructor(private apiCall : ApiCallService, private buildObject : BuildObjectService, private modalService: NgbModal) { }

  ngOnInit() {
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
    return this.playerCost;
  }



  player1 : Player[] = [];



  player2 = [];




  players2 = [];



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