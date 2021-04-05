import { FindClientComponent } from './components/find-client/find-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './defaults/default/default.component';
import { ServiceComponent } from './pages/service/service.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormConexionComponent } from './components/form-conexion/form-conexion.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ClientComponent } from './components/client/client.component';
import { SubrogeComponent } from './components/subroge/subroge.component';
import { FactureComponent } from './components/facture/facture.component';
import { ArticleComponent } from './components/article/article.component';
import { AddContratComponent } from './pages/add-contrat/add-contrat.component';
import { ModaliteComponent } from './components/modalite/modalite.component';
import { ContratComponent } from './pages/contrat/contrat.component';
import { VenteComponent } from './pages/vente/vente.component';
import { OtherContratComponent } from './pages/other-contrat/other-contrat.component';
import { EcheancierComponent } from './components/echeancier/echeancier.component';
import { FormDialogComponent } from './pages/form-dialog/form-dialog.component';
import { FormClientComponent } from './components/form-client/form-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: FormConexionComponent },
  {
    path: 'app', component: DefaultComponent,
    children: [
      { path: 'service', component: ServiceComponent },
      { path: 'adduser', component: UserAddComponent },
      { path: 'listUsers', component: ListUserComponent },
      { path: 'addcontrat', component: AddContratComponent },
      { path: 'addclient', component: ClientComponent },
      { path: 'addsubroge', component: SubrogeComponent },
      { path: 'addfacture', component: FactureComponent },
      { path: 'addarticle', component: ArticleComponent },
      { path: 'addecheancier', component: ModaliteComponent },
      { path: 'contratpdf', component: ContratComponent },
      { path: 'showclient', component: FindClientComponent },
      { path: 'othercontrat', component: OtherContratComponent },
      { path: 'ventes', component: VenteComponent } ,
      { path: 'echeancier', component: EcheancierComponent },
      { path: 'form', component: FormClientComponent }



    ]
  },
  { path: 'pageNotFoud', component: NotFoundComponent },
  { path: '**', redirectTo: 'pageNotFoud' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }

