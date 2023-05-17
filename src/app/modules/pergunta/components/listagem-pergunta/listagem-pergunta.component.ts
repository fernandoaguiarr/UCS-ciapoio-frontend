import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime, startWith, switchMap } from 'rxjs';
import { Pergunta } from 'src/app/utils/models/prestador/entidades/pergunta/pergunta';
import { PerguntaService } from '../../services/pergunta.service';

@Component({
  selector: 'app-listagem-pergunta',
  templateUrl: './listagem-pergunta.component.html',
  styleUrls: ['./listagem-pergunta.component.scss']
})
export class ListagemPerguntaComponent {
  public filtros: FormGroup;
  public perguntas$!: Observable<Pergunta[]>;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _perguntaService: PerguntaService,
  ) {
    this.filtros = this._formBuilder.group({
      id: [null, []],
      nome: [null, []]
    });
  }

  ngOnInit(): void {
    this.perguntas$ = this.filtros.valueChanges.pipe(
      startWith({}),
      debounceTime(500),
      switchMap((filtros: any) => {
        return this._perguntaService.getPerguntas(filtros)
      })
    );
  }

  onAdicionarNovaEntidade(): void {
    this._router.navigate(['pergunta', 'incluir']);
  }
}