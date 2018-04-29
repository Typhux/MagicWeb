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

const appRoutes: Routes = [
  { path: 'edition', component: EditionComponent},
  {  path: 'edition/new', component: NewEditionComponent},
  {  path: 'edition/:id', component: EditionDetailsComponent},
  { path: 'card', component: CardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EditionComponent,
    CardComponent,
    NewEditionComponent,
    EditionDetailsComponent
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
    EditionService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
