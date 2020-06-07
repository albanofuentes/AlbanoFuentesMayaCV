import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  edus: any = {
    edu1: {
      titulo : 'Ingeniería en Sistemas de la Información',
      periodo: '03/2019 - Presente - En Curso',
      institucion : 'U.T.N / F.R.B.A.',
      ciudadInstitucion : 'CABA',
      paisInstitucion : 'Argentina',
      tecnos: {
        tecno1 : '',
        tecno2 : ''
      }
    },
    edu2: {
      titulo : 'Ingeniería Electrónica',
      periodo: '03/2012 - 12/2016 - A Completar',
      institucion : 'U.T.N / F.R.B.A.',
      ciudadInstitucion : 'CABA',
      paisInstitucion : 'Argentina',
      tecnos: {
        tecno1 : '',
        tecno2 : ''
      }
    },
    edu3: {
      titulo : 'Técnico Electrónico',
      periodo: '03/2001 - 12/2006',
      institucion : 'Escuela Técnica N°1 "Ing. Otto Krause',
      ciudadInstitucion : 'CABA',
      paisInstitucion : 'Argentina',
      tecnos: {
        tecno1 : '',
        tecno2 : ''
      }
    },
    edu4: {
      titulo : 'Web App Full Stack',
      periodo: '03/2019 - 05/2019',
      institucion : 'Udemi',
      ciudadInstitucion : 'CABA',
      paisInstitucion : 'Argentina',
      tecnos: {
        tecno1 : 'Desarrollo Front End con Angular 8 y Back End Spring 5, Spring Boot, API REST, JPA, Spring Security OAuth2, JWT, Socket',
      }
    },
    edu5: {
      titulo : 'Web App Full Stack',
      periodo: '04/2019 - Presente - En Curso',
      institucion : 'Udemi',
      ciudadInstitucion : 'CABA',
      paisInstitucion : 'Argentina',
      tecnos: {
        tecno1 : 'Desarrollo Front End con Angular 9 y Back End NodeJS ECMAScript 6, usando buenas prácticas.',
        tecno2 : 'Firebase, Firebase RESTful services, Firebase Cloud Function, CRUD, Reactive-Extensions, Sockets, Ionic 5, AngularFire, Spotifi API, Youtube API.'
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
