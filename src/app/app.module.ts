import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BoardComponent } from './presentation/board/board.component';
import { MancalaComponent } from './presentation/mancala/mancala.component';
import { PitComponent } from './presentation/pit/pit.component';
import { StoneComponent } from './presentation/stone/stone.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MancalaComponent,
    PitComponent,
    StoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
