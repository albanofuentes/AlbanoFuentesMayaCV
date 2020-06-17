import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InfoComponent } from './components/info/info.component';
import { TrabajosService } from './servicios/trabajos.service';
import { EducationService } from './servicios/education.service';
import { CertificatesService } from './servicios/certificados.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavBarComponent,
    DatosPersonalesComponent,
    ExperienceComponent,
    EducationComponent,
    CertificatesComponent,
    SkillsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TrabajosService,
    EducationService,
    CertificatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
