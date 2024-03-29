import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalheCiapComponent } from './components/detalhe-ciap/detalhe-ciap.component';
import { ListagemCiapComponent } from './components/listagem-ciap/listagem-ciap.component';

const routes: Routes = [
    {
        path: '',
        component: ListagemCiapComponent,
    },
    {
        path: 'incluir',
        component: DetalheCiapComponent
    },
    {
        path: ':id',
        component: DetalheCiapComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CiapRoutingModule { }
