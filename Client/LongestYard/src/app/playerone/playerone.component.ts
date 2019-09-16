import { Component, OnInit } from '@angular/core';
import { BuildObjectService } from '../build-object.service';
import { Player } from '../interfaces'

@Component({
  selector: 'app-playerone',
  templateUrl: './playerone.component.html',
  styleUrls: ['./playerone.component.css']
})
export class PlayeroneComponent implements OnInit {

  availablePlayers: Player[];

  constructor(private buildObject: BuildObjectService) { }

  ngOnInit() {
    this.availablePlayers = this.buildObject.getPlayerList();
  }

}
