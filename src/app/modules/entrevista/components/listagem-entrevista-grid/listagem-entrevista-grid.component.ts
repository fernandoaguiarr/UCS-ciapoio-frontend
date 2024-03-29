import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable, startWith, debounceTime, switchMap } from 'rxjs';
import { ListaEntidadeConfiguracao } from 'src/app/utils/components/lista-entidade/models/lista-entidade-configuracao';
import { AtestadoComparecimento } from 'src/app/utils/models/atestado-comparecimento';
import { EntrevistaService } from '../../services/entrevista.service';

@Component({
  selector: 'app-listagem-entrevista-grid',
  templateUrl: './listagem-entrevista-grid.component.html',
  styleUrls: ['./listagem-entrevista-grid.component.scss']
})
export class ListagemEntrevistaGridComponent {
}
