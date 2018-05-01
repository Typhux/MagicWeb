import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EditionComponent } from './component/edition/edition.component';
import { CardComponent } from './component/card/card.component';
import { NewEditionComponent } from './component/new-edition/new-edition.component';
import { EditionService } from './service/edition.service';
import { EditionDetailsComponent } from './component/edition-details/edition-details.component';
import { NewCardComponent } from './component/new-card/new-card.component';
import { CardDetailsComponent } from './component/card-details/card-details.component';
import { CardService } from './service/card.service';
import { SearchComponent } from './component/search/search.component';
import { SearchService } from './service/search.service';

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
