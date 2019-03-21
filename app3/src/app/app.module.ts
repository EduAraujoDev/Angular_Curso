import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@Angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './Acesso/banner/banner.component';
import { LoginComponent } from './Acesso/login/login.component';
import { CadastroComponent } from './Acesso/cadastro/cadastro.component';

@NgModule({
    declarations: [
        AppComponent,
        AcessoComponent,
        BannerComponent,
        LoginComponent,
        CadastroComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }