import { Injectable } from '@angular/core';
import { Player } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class WhowonService {

  constructor() { }

  player1Score : number;
  player2Score : number;

  whoWon(playerOneScore, playerTwoScore){
    if (playerOneScore > playerTwoScore || playerOneScore == playerTwoScore){
      return 1;
    };
    if (playerTwoScore > playerOneScore) {
      return 2;
    };
  };

  calculatePlayerOneScore(playerOneTeam: Player[]){
    this.player1Score = 0;
    for (let i = 0; i < playerOneTeam.length; i ++){
      this.player1Score += (playerOneTeam[i].av);
    };
    return this.player1Score;
  };

  calculatePlayerTwoScore(playerTwoTeam: Player[]){
    this.player2Score = 0;
    for (let i = 0; i < playerTwoTeam.length; i ++){
      this.player2Score += (playerTwoTeam[i].av);
    };
    return this.player2Score;
  };

  whoWonMobile(){
    if (this.player1Score >= this.player2Score){
      return 1;
    };

    if (this.player2Score > this.player1Score){
      return 2;
    };
  }

  


}
