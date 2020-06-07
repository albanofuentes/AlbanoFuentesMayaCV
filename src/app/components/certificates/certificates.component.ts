import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certis: any = {
    certi1: {
      titulo : 'JAVA',
      periodo: '06/2019 - 12/2019',
      institucion : 'Codo a Codo',
      ciudadInstitucion : 'CABA',
      paisInstitucion : 'Argentina',
      tecnos: {
        tecno1 : 'Capacitación Java, POO, Base de datos del Gobierno de la Ciudad de Buenos Aires.',
      }
    },
    certi2: {
      titulo : 'Java Full Stack',
      periodo: '09/2019 - 11/2019',
      institucion : 'Neoris S.A.',
      ciudadInstitucion : 'CABA',
      paisInstitucion : 'Argentina',
      tecnos: {
        tecno1 : 'Capacitación Web Development Full Stack de tecnologias actuales del mercado. Spring MVC, HTML, Java SpringBoot, JPA, Angular, NodeJS, Maven, MySQL.',
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
