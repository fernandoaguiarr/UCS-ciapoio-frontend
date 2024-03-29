import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Subject, Observable, takeUntil, switchMap, of } from 'rxjs';

import httpErrorMessages from 'src/app/utils/constants/http-error-messages';
import { EntidadeParceiraService } from '../../services/entidade-parceira.service';
import { Instituicao } from 'src/app/utils/components/instituicao/models/instituicao';

@Component({
  selector: 'app-detalhe-entidade-parceira',
  templateUrl: './detalhe-entidade-parceira.component.html',
  styleUrls: ['./detalhe-entidade-parceira.component.scss']
})
export class DetalheEntidadeParceiraComponent implements OnInit {

  private _destroyed$: Subject<void>;

  instituicao$!: Observable<Instituicao | null>;

  constructor(
    private _router: Router,
    private _matSnackBar: MatSnackBar,
    private _entidadeParceira: EntidadeParceiraService,
    private _activatedRoute: ActivatedRoute,
  ) {
    this._destroyed$ = new Subject();
  }

  ngOnInit(): void {
    this.instituicao$ = this._activatedRoute.params.pipe(
      takeUntil(this._destroyed$),
      switchMap((params: Params) => {
        if (params['id'])
          return this._entidadeParceira.getInstituicao(params['id']);
        return of(null);
      })
    );
  }

  onAtualizarInstituicao(instituicao: Instituicao): void {
    this._entidadeParceira.postInstituicao(instituicao).subscribe({
      next: (res) => {
        this._matSnackBar.open(`Instituição parceira ${res?.id} cadastrada! :)`, "OK", { duration: 2000 });
        this._router.navigate(['instituicao-parceira', res.id]);
      },
      error: (error: HttpErrorResponse) => {
        this._matSnackBar.open(httpErrorMessages[`${error.status}`], 'OK');
      }
    });
  }

}
