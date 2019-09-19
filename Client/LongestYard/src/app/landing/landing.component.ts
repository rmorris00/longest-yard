import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { BuildObjectService } from '../build-object.service';
import { Player } from '../interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  listOfPlayers : Player[];
  playerOneName: string;
  playerTwoName: string;

  constructor(private apiCallService : ApiCallService, private buildObject: BuildObjectService) { }

  ngOnInit() {
    this.listOfPlayers = this.buildObject.fillInDatabaseData();
  }

  fillInOffenseData(){
    let result = this.buildObject.fillInOffenseData(this.listOfPlayers);
    console.log(result);
  }

  setNames(){
    if (this.playerOneName !== undefined || this.playerTwoName !== undefined){
    this.buildObject.setPlayerNames(this.playerOneName, this.playerTwoName);
    };
  };
}
