import { Injectable } from '@angular/core';
import { ApiCallService } from './api-call.service';
import {Player} from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class BuildObjectService {

  playerOffenses : string[] = []
  builtListOfPlayers: Player[] = [];
  playerObject: Player;


  constructor(private apiCallService: ApiCallService) { }


  fillInOffenseData(listOfPlayers){
    console.log(listOfPlayers);
    console.log(listOfPlayers.length);
    console.log(typeof listOfPlayers);
    for (let i = 0; i < listOfPlayers.length; i ++) {
      // console.log(i);
      let currentPlayersFirstName = listOfPlayers[i].firstName;
      let currentPlayersLastName = listOfPlayers[i].lastName;
      this.apiCallService.getPlayerArrestData(currentPlayersFirstName,currentPlayersLastName).subscribe((e:any)=>{
        // console.log(e);
        this.playerOffenses = [];
        for (let o = 0; o < e.length; o ++){
          this.playerOffenses.push(e[o].category);
        }
      listOfPlayers[i].offenses = this.playerOffenses;
      });
    }
    return listOfPlayers;
  };

  fillInDatabaseData(){
    console.log("building player object from database");
    this.apiCallService.getPlayerDataFromDatabase().subscribe((d : any) => {
      for (let i = 0; i < d.length; i ++){
        this.playerObject = {
          playerId: d[i].playerid,
          firstName: d[i].firstname,
          lastName: d[i].lastname,
          position: d[i].position,
          picture: d[i].playerpic,
          mugshot: d[i].mugshotpic,
          av: d[i].av,
          playerCost: 0,
          offenses: [],
        };
        // console.log(this.playerObject);
        this.builtListOfPlayers.push(this.playerObject);
      };
      console.log(this.builtListOfPlayers);
    });
    return this.builtListOfPlayers;
  }
}
