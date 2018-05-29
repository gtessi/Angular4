import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from '../game/game.component';

const routes: Routes =
    [
        { path: "", redirectTo: "Game", pathMatch: "prefix" },
        {
            path: "Game", component: GameComponent
        }
    ];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRouterModule { }
