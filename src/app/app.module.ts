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
    FindClientComponent
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
    MatDatepickerModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule


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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
