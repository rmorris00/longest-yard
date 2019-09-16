import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PlayeroneComponent } from './playerone/playerone.component';
import { PlayertwoComponent } from './playertwo/playertwo.component';


const appRoutes: Routes = [
  { path: '', component:LandingComponent},
  { path: 'home', component: MainComponent, 
   children:[
    { path: '', component: PlayeroneComponent},
    { path: 'player1', component: PlayeroneComponent},
    { path: 'player2', component: PlayertwoComponent},
    ]},
  { path: '*',
    redirectTo: '',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LandingComponent,
    PlayeroneComponent,
    PlayertwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
