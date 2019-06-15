import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@Angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './Acesso/banner/banner.component';
import { LoginComponent } from './Acesso/login/login.component';
import { CadastroComponent } from './Acesso/cadastro/cadastro.component';

import { Autenticacao } from './autenticacao.service';

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
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
    providers: [ Autenticacao ],
    bootstrap: [AppComponent]
})

export class AppModule { }