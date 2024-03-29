import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { SelectsModule } from 'src/app/utils/components/selects/selects.module';
import { DetalheUsuarioComponent } from './components/detalhe-usuario/detalhe-usuario.component';
import { ListagemUsuarioComponent } from './components/listagem-usuario/listagem-usuario.component';
import { ListaEntidadeModule } from 'src/app/utils/components/lista-entidade/lista-entidade.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DetalheUsuarioComponent,
    ListagemUsuarioComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    MatListModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatChipsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatAutocompleteModule,

    ListaEntidadeModule,
    UsuarioRoutingModule,
    SelectsModule,
    FlexLayoutModule,
  ]
})
export class UsuarioModule { }
