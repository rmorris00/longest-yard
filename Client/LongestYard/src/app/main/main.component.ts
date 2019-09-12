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
  }


player1 : Player[] = [];



 player2 = [];




  players2 = [];
  


  



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
