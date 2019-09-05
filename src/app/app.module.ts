import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EditionComponent } from './features/edition/edition.component';
import { NewEditionComponent } from './features/edition/new-edition/new-edition.component';
import { EditionDetailsComponent } from './features/edition/edition-details/edition-details.component';
import { CardComponent } from './features/card/card.component';
import { NewCardComponent } from './features/card/new-card/new-card.component';
import { SearchComponent } from './features/search/search.component';
import { CardDetailsComponent } from './features/card/card-details/card-details.component';
import { SearchService } from './features/search/search.service';
import { CardService } from './features/card/card.service';
import { EditionService } from './features/edition/edition.service';
import { EmulatorComponent } from './features/emulator/emulator.component';
import { SimulatorComponent } from './features/emulator/simulator/simulator.component';
import { LogBattleComponent } from './features/emulator/log-battle/log-battle.component';
import { EmulatorService } from './features/emulator/emulator.service';
import { TreatmentComponent } from './features/treatment/treatment.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';

const appRoutes: Routes = [
  { path: 'admin/edition', component: EditionComponent},
  {  path: 'admin/edition/new', component: NewEditionComponent},
  {  path: 'admin/edition/:id', component: EditionDetailsComponent},
  { path: 'admin/card', component: CardComponent },
  {  path: 'admin/card/new/:id', component: NewCardComponent},
  {  path: 'admin/card/update/:cardId', component: NewCardComponent},
  {  path: 'admin/card/new', component: NewCardComponent},
  {  path: 'admin/search', component: SearchComponent},
  {  path: 'admin/emulator', component: EmulatorComponent},
  {  path: 'admin/card/:id', component: CardDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EditionComponent,
    CardComponent,
    NewEditionComponent,
    EditionDetailsComponent,
    NewCardComponent,
    CardDetailsComponent,
    SearchComponent,
    EmulatorComponent,
    SimulatorComponent,
    LogBattleComponent,
    TreatmentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    EditionService,
    CardService,
    SearchService,
    EmulatorService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
