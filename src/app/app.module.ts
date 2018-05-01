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

const appRoutes: Routes = [
  { path: 'edition', component: EditionComponent},
  {  path: 'edition/new', component: NewEditionComponent},
  {  path: 'edition/:id', component: EditionDetailsComponent},
  { path: 'card', component: CardComponent },
  {  path: 'card/new/:id', component: NewCardComponent},
  {  path: 'card/update/:cardId', component: NewCardComponent},
  {  path: 'card/new', component: NewCardComponent},
  {  path: 'search', component: SearchComponent},
  {  path: 'card/:id', component: CardDetailsComponent},
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
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule
  ],
  providers: [
    EditionService,
    CardService,
    SearchService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
