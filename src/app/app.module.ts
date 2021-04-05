import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormConexionComponent } from './components/form-conexion/form-conexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { UserAddComponent } from './components/user-add/user-add.component';
import { AjoutUserService } from './services/ajout-user.service';
import { ListUserComponent } from './components/list-user/list-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatStepperModule} from '@angular/material/stepper';


// last import
import {
  ErrorStateMatcher, MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material/core';
import { DefaultComponent } from './defaults/default/default.component';
import { FooterComponent } from './defaults/footer/footer.component';
import { NavbarComponent } from './defaults/navbar/navbar.component';
import { SidebarComponent } from './defaults/sidebar/sidebar.component';
import { ServiceComponent } from './pages/service/service.component';
// agains
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DecodeJwtTokenService } from './helpers/decode-jwt-token.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MatDatepickerModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClientComponent } from './components/client/client.component';
import { SubrogeComponent } from './components/subroge/subroge.component';
import { ArticleComponent } from './components/article/article.component';
import { FactureComponent } from './components/facture/facture.component';
import { AddContratComponent } from './pages/add-contrat/add-contrat.component';
import { ModaliteComponent } from './components/modalite/modalite.component';
import { ContratService } from './services/contrat.service';
import { ContratComponent } from './pages/contrat/contrat.component';
import { VenteComponent } from './pages/vente/vente.component';
import { VenteService } from './services/vente.service';
import { OtherContratComponent } from './pages/other-contrat/other-contrat.component';
import { FindClientComponent } from './components/find-client/find-client.component';
import { EcheancierComponent } from './components/echeancier/echeancier.component';
import { FormDialogComponent } from './pages/form-dialog/form-dialog.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { ClientService } from './services/forms/client.service';
import { SubrogeService } from './services/forms/subroge.service';
import { EcheancierService } from './services/forms/echeancier.service';
import { FactureService } from './services/forms/facture.service';
import { ArticleService } from './services/forms/article.service';


PdfMakeWrapper.setFonts(pdfFonts);

// const appRoute: Routes = [
//   {  path: 'acceuil', component: AcceuilComponent }
// ];


@NgModule({
  declarations: [
    AppComponent,
    FormConexionComponent,
    UserAddComponent,
    ListUserComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    DefaultComponent,
    ServiceComponent,
    NotFoundComponent,
    ClientComponent,
    SubrogeComponent,
    ArticleComponent,
    FactureComponent,
    AddContratComponent,
    ModaliteComponent,
    ContratComponent,
    VenteComponent,
    OtherContratComponent,
    FindClientComponent,
    EcheancierComponent,
    FormDialogComponent,
    FormClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
    // { provide: ErrorHandler,  useClass: ErrorService },
    AjoutUserService,
    UserService,
    DecodeJwtTokenService,
    AuthService,
    ContratService,
    AjoutUserService,
    UserService,
    VenteService,
    DecodeJwtTokenService,
    MatDatepickerModule,
    ClientService,
    SubrogeService,
    ArticleService,
    EcheancierService,
    FactureService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
