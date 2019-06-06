import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';

import { AppComponent } from './app.component';
import { BingoComponent } from './bingo/bingo.component';

@NgModule({
  declarations: [
    AppComponent,
    BingoComponent
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    HttpClientModule,
    MessagesModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
