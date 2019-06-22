import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { Usuario } from "../usuario.model"
import { Autenticacao } from "../../autenticacao.service"

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css'],
    animations: [
        trigger('animacao-painel', [
            state('criado', style({
                opacity: 1
            })),
            transition('criado => alerta', [
                animate('0.5s 0s ease-in-out', keyframes([
                    style({ offset: 0.05, opacity: 1, transform: 'translateY(-10px)' }),
                    style({ offset: 0.10, opacity: 1, transform: 'translateY(10px)' }),
                    style({ offset: 0.15, opacity: 1, transform: 'translateY(-10px)' }),
                    style({ offset: 0.20, opacity: 1, transform: 'translateY(10px)' }),
                    style({ offset: 0.25, opacity: 1, transform: 'translateY(-10px)' }),
                    style({ offset: 0.30, opacity: 1, transform: 'translateY(10px)' }),
                    style({ offset: 0.35, opacity: 1, transform: 'translateY(-10px)' }),
                    style({ offset: 0.40, opacity: 1, transform: 'translateY(10px)' }),
                    style({ offset: 0.45, opacity: 1, transform: 'translateY(-10px)' }),
                    style({ offset: 0.50, opacity: 1, transform: 'translateY(0)' })
                ]))
            ])
        ])
    ]
})

export class CadastroComponent implements OnInit {

    @Output()
    public exibirPainel: EventEmitter<string> = new EventEmitter();

    public mensagemErro: string = ""
    public estadoPainel: string = "criado"

    public formulario: FormGroup = new FormGroup({
        'email': new FormControl(null, [ Validators.required ]),
        'nome_completo': new FormControl(null, [ Validators.required ]),
        'nome_usuario': new FormControl(null, [ Validators.required ]),
        'senha': new FormControl(null, [ Validators.required, Validators.minLength(6) ])
    })

    constructor(
        private autenticacao: Autenticacao
    ) { }

    ngOnInit() {

    }

    public exibirPainelLogin(): void {
        this.exibirPainel.emit('login');
    }

    public cadastrarUsuario(): void {
        let usuario: Usuario = new Usuario (
            this.formulario.value.email,
            this.formulario.value.nome_completo,
            this.formulario.value.nome_usuario,
            this.formulario.value.senha
        )

        this.autenticacao.cadastrarUsuario(usuario)
            .then(() => this.exibirPainelLogin())
            .catch((error: Error) => {
                this.mensagemErro = error.message
                this.estadoPainel = "alerta"
            })
    }

    public fimDaAnimacao(): void {
        this.estadoPainel = "criado"
    }
}