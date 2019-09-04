import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import {CdkDragDrop, CdkDragStart, moveItemInArray, copyArrayItem, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import {Player} from '../interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  availablePlayers: Player[];

  playerCrimes = [];
  playerCost: number = 0;
  playerFirstName;
  playerLastName;

  constructor(private apiCall : ApiCallService) { }

  ngOnInit() {
    this.players2 = this.players.slice();
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



  player1 = [

  ];

 player2 = [

  ];

  players = [
    'michael vick',
    'josh gordon',
    'OJ simpson'
  ];

  players2 = [];

  

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
    
    

  

}
