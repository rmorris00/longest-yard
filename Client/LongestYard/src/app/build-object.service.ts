import { Injectable } from '@angular/core';
import { ApiCallService } from './api-call.service';
import {Player} from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class BuildObjectService {

  playerOffenses : string[] = []


  constructor(private apiCallService: ApiCallService) { }


  fillInOffenseData(listOfPlayers: Player[]){
    console.log(listOfPlayers);
    for (let i = 0; i < listOfPlayers.length; i ++) {
      let currentPlayersFirstName = listOfPlayers[i].firstName;
      let currentPlayersLastName = listOfPlayers[i].lastName;
      this.apiCallService.getPlayerArrestData(currentPlayersFirstName,currentPlayersLastName).subscribe((e:any)=>{
        console.log(e);
        this.playerOffenses = [];
        for (let o = 0; o < e.length; o ++){
          this.playerOffenses.push(e[o].category);
        }
      listOfPlayers[i].offenses = this.playerOffenses;
      });
    }
    return listOfPlayers;
  }
}
