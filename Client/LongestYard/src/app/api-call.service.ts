import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpRequest : HttpClient) { }

getPlayerArrestData (firstName, lastName) {
  console.log('this ran');
  return this.httpRequest.get(`http://nflarrest.com/api/v1/player/topCrimes/${firstName}%20${lastName}`);
};

getPlayerDataFromDatabase (){
  console.log("Getting data from database");
  return this.httpRequest.get('http://localhost:8000/players');
};
}
