import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@Angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './Acesso/banner/banner.component';
import { LoginComponent } from './Acesso/login/login.component';
import { CadastroComponent } from './Acesso/cadastro/cadastro.component';

import { Autenticacao } from './autenticacao.service';
import { AutenticacaoGuard  } from './autenticacao-guard.service'

import { HomeComponent } from './home/home.component';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';
import { from } from 'rxjs';

@NgModule({
    declarations: [
        AppComponent,
        AcessoComponent,
        BannerComponent,
        LoginComponent,
        CadastroComponent,
        HomeComponent,
        PublicacoesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [ Autenticacao, AutenticacaoGuard ],
    bootstrap: [AppComponent]
})

export class AppModule { }