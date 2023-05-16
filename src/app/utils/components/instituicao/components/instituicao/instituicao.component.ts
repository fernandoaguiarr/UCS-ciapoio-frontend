import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

import { Subject } from 'rxjs';

import { Instituicao } from '../../models/instituicao';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.scss']
})
export class InstituicaoComponent implements OnInit, OnChanges, OnDestroy {

  @Input() tipo!: number;
  @Output('instituicaoAtualizada') instituicaoEmmiter!: EventEmitter<Instituicao>;

  form!: FormGroup;

  private _destroyed$: Subject<void>;

  constructor(
    private _matSnackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
  ) {
    this._destroyed$ = new Subject();
    this.instituicaoEmmiter = new EventEmitter();
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tipo'].currentValue) {
      this.criarForm();
    }
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  criarForm(): void {
    this.form = this._formBuilder.group({
      id: [null, []],
      nome: [null, [Validators.required]],
      cnpj: [null, [Validators.required]],
      email: [null, [Validators.required]],
      telefone1: [null, [Validators.required]],
      telefone2: [null, []],
      tipo_instituicao: [this.tipo, []],
      observacao: [null, []],
      data_credenciamento: [null, [Validators.required]],
      data_descredenciamento: [null, []],
      endereco: this._formBuilder.group({
        id: [null, []],
        cep: [null, [Validators.required]],
        rua: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        complemento: [null, []],
        cidade: [null, [Validators.required]],
      })
    });
  }

  onSubmit(): void {
    try {
      console.log(this.form);
      
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        throw new Error('Campos obrigatórios devem ser preenchidos!');
      }

      this.instituicaoEmmiter.emit(this.form.getRawValue());

    }
    catch (e: any) {
      this._matSnackBar.open(e.message, 'OK', { duration: 2000 })
    }

  }

}