import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces';
import { BuildObjectService } from '../build-object.service';

@Component({
  selector: 'app-playertwo',
  templateUrl: './playertwo.component.html',
  styleUrls: ['./playertwo.component.css']
})
export class PlayertwoComponent implements OnInit {

  availablePlayers: Player[];

  constructor(private buildObject : BuildObjectService) { }

  ngOnInit() {
    this.availablePlayers = this.buildObject.getPlayerList();
  }

}
