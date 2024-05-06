import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPayPalModule } from 'ngx-paypal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { InscrivezVousComponent } from './components/inscrivez-vous/inscrivez-vous.component';
import { DomaineComponent } from './components/domaine/domaine.component';
import { ForumComponent } from './components/forum/forum.component';
import { ContactComponent } from './contact/contact.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { AdminComponent } from './admin/admin.component';
import { FormateurService } from './admin/formateur.service';
import { DeveloppementWebComponent } from './components/domaine/developpement-web/developpement-web.component';
import { SecuriteInformatiqueComponent } from './components/domaine/securite-informatique/securite-informatique.component';
import { ReseauInformatiqueComponent } from './components/domaine/reseau-informatique/reseau-informatique.component';

@NgModule({
  declarations: [
    AppComponent,
 NavbarComponent,
      HomeComponent,
      InscrivezVousComponent,
      DomaineComponent,
      ForumComponent,
      ContactComponent,
      FormateursComponent,
      AdminComponent,
      DeveloppementWebComponent,
      SecuriteInformatiqueComponent,
      ReseauInformatiqueComponent,
     
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPayPalModule,

     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
