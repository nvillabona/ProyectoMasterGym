import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion'; /* Importado manualmente */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; /* Importado manualmente */
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire'; /* Importado manualmente */
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; /* Importado manualmente */
import { NgxSpinnerModule } from "ngx-spinner";
import { EncabezadoComponent } from './encabezado/encabezado.component'; /* Importado manualmente */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component'; /* Importado manualmente - Animación de NAVBAR */
import { AngularFirestore } from '@angular/fire/firestore';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar'; /* Importado manualmente */
import { AngularFireStorageModule } from '@angular/fire/storage'; /* Importado manualmente */
import { MensajesService } from './services/mensajes.service';
import { PreciosComponent } from './precios/precios.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { SeleccionarClienteComponent } from './seleccionar-cliente/seleccionar-cliente.component';
import { ListadoInscripcionesComponent } from './listado-inscripciones/listado-inscripciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncabezadoComponent,
    ListadoClientesComponent,
    AgregarClienteComponent,
    PreciosComponent,
    InscripcionComponent,
    SeleccionarClienteComponent,
    ListadoInscripcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule, /* Importado manualmente */
    ProgressbarModule.forRoot(), /* Importado manualmente */
    FormsModule, /* Importado manualmente */
    AccordionModule.forRoot(), /* Importado manualmente */
    BrowserAnimationsModule, /* Importado manualmente */
    AngularFireModule.initializeApp(environment.firebase), /* Importado manualmente */
    ReactiveFormsModule, /* Importado manualmente */
    NgxSpinnerModule, /* Importado manualmente -- PRIMERO SE EJECUTA EN LA TERMINAL EL COD: npm install ngx-spinner --save */
    BsDropdownModule.forRoot() /* Importado manualmente, animacion NAVBAR */
  ],
  providers: [
    AngularFireAuth,
    AngularFirestore, /* Importado manualmente */
    MensajesService /* Importado manualmente */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
