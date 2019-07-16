import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Import Components
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import {WashingtonComponent} from './washington/washington.component';


const routes: Routes = [
  {path: 'seattle', component: SeattleComponent},
  {path: 'burbank', component: BurbankComponent},
  {path: 'chicago', component: ChicagoComponent},
  {path: 'dallas', component: DallasComponent},
  {path: 'sanjose', component: SanjoseComponent},
  {path: 'washington', component: WashingtonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
