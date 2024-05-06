import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InscrivezVousComponent } from './components/inscrivez-vous/inscrivez-vous.component';
import { DomaineComponent } from './components/domaine/domaine.component';
import { ForumComponent } from './components/forum/forum.component';
import { ContactComponent } from './contact/contact.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { AdminComponent } from './admin/admin.component';
import { DeveloppementWebComponent } from './components/domaine/developpement-web/developpement-web.component';
import { ReseauInformatiqueComponent } from './components/domaine/reseau-informatique/reseau-informatique.component';
import { SecuriteInformatiqueComponent } from './components/domaine/securite-informatique/securite-informatique.component';


const routes: Routes = [
{ path :"Acceuil", component :HomeComponent},
{ path :"Inscrivez-vous", component :InscrivezVousComponent},
{ path :"Domaines", component :DomaineComponent},
{ path :"Developpement-web", component :DeveloppementWebComponent},
{ path :"reseau-informatique", component :ReseauInformatiqueComponent},
{ path :"securite-informatique", component :SecuriteInformatiqueComponent},
{ path :"Discussion", component :ForumComponent}, 
{ path: "formateurs" , component : FormateursComponent},
{ path: "Administrateur" , component :AdminComponent},
{ path: ' ', redirectTo: '/home', pathMatch: 'full' }, // Rediriger vers le composant Home par défaut
{ path: "contact" , component : ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
