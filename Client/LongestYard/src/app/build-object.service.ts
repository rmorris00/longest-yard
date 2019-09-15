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
  playerCost: number;


  constructor(private apiCallService: ApiCallService) { }


  fillInOffenseData(listOfPlayers){
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
      let result = this.getCrimeScore(this.playerOffenses);
      listOfPlayers[i].playerCost = result;
      let costResult = this.getPlayerCost(listOfPlayers[i]);
      listOfPlayers[i].playerCost = costResult;
      console.log(listOfPlayers[i].av, listOfPlayers[i].position, listOfPlayers[i].firstName, listOfPlayers[i].lastName, listOfPlayers[i].playerCost)
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
          offenses: [],
          av: d[i].av,
          playerCost: d[i].price,
          careerStat1: d[i].careerstat1,
          careerStat2: d[i].careerstat2,
          careerStat3: d[i].careerstat3,
          careerStat4: d[i].careerstat4,
          careerStat5: d[i].careerstat5,
          careerBlurb: d[i].careerblurb
        };
        // console.log(this.playerObject);
        this.builtListOfPlayers.push(this.playerObject);
      };
      console.log(this.builtListOfPlayers);
    });
    return this.builtListOfPlayers;
  };

  getCrimeScore(playerOffenses){
    this.playerCost = 0;
    for (let i = 0; i < playerOffenses.length; i ++){
      if (playerOffenses[i].toLowerCase().includes('murder')) {
        this.playerCost += 150;
      };
      if (playerOffenses[i].toLowerCase().includes('dui')) {
        this.playerCost += 30;
      };
      if (playerOffenses[i].toLowerCase().includes('sex')) {
        this.playerCost += 40;
      };
      if (playerOffenses[i].toLowerCase().includes('drug')) {
        this.playerCost += 20;
      };
      if (playerOffenses[i].toLowerCase().includes('assault')) {
        this.playerCost += 25;
      };
      if (playerOffenses[i].toLowerCase().includes("gun")) {
        this.playerCost += 30;
      };
      if (playerOffenses[i].toLowerCase() === "disorderly conduct") {
        this.playerCost += 10;
      };
      if (playerOffenses[i].toLowerCase() === "domestic violence") {
        this.playerCost += 25;
      };
      if (playerOffenses[i].toLowerCase() === "public intoxication") {
        this.playerCost += 20;
      };
      if (playerOffenses[i].toLowerCase() === "battery") {
        this.playerCost += 20;
      };
      if (playerOffenses[i].toLowerCase() === "license") {
        this.playerCost += 15;
      };
      if (playerOffenses[i].toLowerCase() === "alcohol") {
        this.playerCost += 20;
      };
      if (playerOffenses[i].toLowerCase() === "reckless driving") {
        this.playerCost += 20;
      };
      if (playerOffenses[i].toLowerCase() === "theft") {
        this.playerCost += 20;
      };
      if (playerOffenses[i].toLowerCase() === "outstanding warrant") {
        this.playerCost += 25;
      };
      if (playerOffenses[i].toLowerCase() === "failure to appear") {
        this.playerCost += 10;
      };
      if (playerOffenses[i].toLowerCase() === "trespassing") {
        this.playerCost += 10;
      };
      if (playerOffenses[i].toLowerCase() === "dogfighting") {
        this.playerCost += 60;
      };
      if (playerOffenses[i].toLowerCase() === "obstruction") {
        this.playerCost += 20;
      };
      if (playerOffenses[i].toLowerCase() === "child abuse") {
        this.playerCost += 60;
      };
      if (playerOffenses[i].toLowerCase() === "resisting arrest") {
        this.playerCost += 20;
      };

    }
    return this.playerCost;
  };

  getPlayerCost(player){
    let numerator = ((player.playerCost + player.av) * (player.playerCost + player.av));
    let calculatedCost = (numerator / 10);
    
    return calculatedCost;

  };

  getPlayerList(){
    return this.builtListOfPlayers;
  }
}
