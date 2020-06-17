import { Injectable } from '@angular/core';

@Injectable()
export class CertificatesService {

    private Certs: Cert[] = [
        {
            id: 1,
            titulo : 'JAVA',
              periodo: '06/2019 - 12/2019',
              institucion : 'Codo a Codo',
              ciudadInstitucion : 'CABA',
              paisInstitucion : 'Argentina',
              tecnos: [
                  'Capacitación Java, POO, Base de datos del Gobierno de la Ciudad de Buenos Aires.',
              ]
        },
        {
            id: 2,
            titulo : 'Java Full Stack',
            periodo: '09/2019 - 11/2019',
            institucion : 'Neoris S.A.',
            ciudadInstitucion : 'CABA',
            paisInstitucion : 'Argentina',
            tecnos: [
                'Capacitación Web Development Full Stack de tecnologias actuales del mercado. Spring MVC, HTML, Java SpringBoot, JPA, Angular, NodeJS, Maven, MySQL.',
            ]
        }
    ];

    getCerts() {
        return this.Certs;
    }
}

interface Cert {
    id: number;
    titulo: string;
    periodo: string;
    institucion: string;
    ciudadInstitucion: string;
    paisInstitucion: string;
    tecnos: string[];
}
