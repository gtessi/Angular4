import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouterModule } from './app-router/app-router.module';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

@NgModule({
    declarations: [
        AppComponent,
        GameComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }