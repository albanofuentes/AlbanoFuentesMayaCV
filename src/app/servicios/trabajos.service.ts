import { Injectable } from '@angular/core';


@Injectable()
export class TrabajosService {

    constructor() {}

    private Trabajos: Trabajo[] = [
        {
            id: 1,
            cargo: 'Junior Full Stack Developer',
            periodo: '11/2019 - Actual',
            empresa: 'Neoris S.A.',
            ciudadEmpresa: 'CABA',
            paisEmpresa: 'Argentina',
            tareas: [
                'Desarrollo, diseño e implementación de SPA en Angular y Spring.',
                'Soporte Back End de JSP, STRUT, Spring a entidades bancarias.'
            ]
        },
        {
            id: 2,
            cargo: 'Junior Java Developer',
            periodo: '03/2019 - 06/2019',
            empresa: 'Freelo',
            ciudadEmpresa: 'CABA',
            paisEmpresa: 'Argentina',
            tareas: [
                'Colaborando con otros desarrolladores en diseño, desarrollo, testing e implementación de nuevas páginas JSP y Servlets.',
                'Mantenimiento de websites usando conocimientos y experiencia propia resolviendo cualquier problemática.',
                'Brindando soporte web y asesoramiento a clientes.'
            ]
        },
        {
            id: 3,
            cargo: 'Soporte de Relojes',
            periodo: '10/2018 - 06/2019',
            empresa: 'Coto C.I.C.S.A.',
            ciudadEmpresa: 'CABA',
            paisEmpresa: 'Argentina',
            tareas: [
                'Fabricación de equipos de control horario de personal y controles de acceso.',
                'Desarollo de Back Office para la configuración de relojes fichadores.',
                'Comunicación con el cliente.',
                'Soporte y desarrollo de nuevas funcionalidades en proyectos existentes.'
            ]
        },
        {
            id: 4,
            cargo: 'Técnico Electrónico',
            periodo: '01/2018 - 10/2018',
            empresa: 'Vial Control S.A.',
            ciudadEmpresa: 'CABA',
            paisEmpresa: 'Argentina',
            tareas: [
                'Fabricación de cinemómetros y equipos de fotomulta de semáforo.',
                'Desarrollo y testing de codigo en C y Arduino.',
            ]
        }
    ];

    getTrabajos() {
        return this.Trabajos;
    }
}

interface Trabajo {
    id: number;
    cargo: string;
    periodo: string;
    empresa: string;
    ciudadEmpresa: string;
    paisEmpresa: string;
    tareas: string[];
}

