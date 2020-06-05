import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {


  jobs: any = {
    job1: {
      cargo : 'Junior Full Stack Developer',
      periodo: '11/2019 - Actual',
      empresa : 'Neoris S.A.',
      ciudadEmpresa : 'CABA',
      paisEmpresa : 'Argentina',
      tareas: {
        tarea1 : 'Desarrollo, diseño e implementación de SPA en Angular y Spring.',
        tarea2 : 'Soporte Back End de JSP, STRUT, Spring a entidades bancarias.'
      }
    },
    job2: {
      cargo : 'Junior Java Developer',
      periodo: '03/2019 - 06/2019',
      empresa : 'Freelo',
      ciudadEmpresa : 'CABA',
      paisEmpresa : 'Argentina',
      tareas: {
        tarea1 : 'Colaborando con otros desarrolladores en diseño, desarrollo, testing e implementación de nuevas páginas JSP y Servlets.',
        tarea2 : 'Mantenimiento de websites usando conocimientos y experiencia propia resolviendo cualquier problemática.',
        tarea3 : 'Brindando soporte web y asesoramiento a clientes.'
      }
    },
    job3: {
      cargo : 'Soporte de Relojes',
      periodo: '10/2018 - 06/2019',
      empresa : 'Coto C.I.C.S.A.',
      ciudadEmpresa : 'CABA',
      paisEmpresa : 'Argentina',
      tareas: {
        tarea1 : 'Fabricación de equipos de control horario de personal y controles de acceso.',
        tarea2 : 'Desarollo de Back Office para la configuración de relojes fichadores.',
        tarea3 : 'Comunicación con el cliente.',
        tarea4 : 'Soporte y desarrollo de nuevas funcionalidades en proyectos existentes.'
      }
    },
    job4: {
      cargo : 'Técnico Electrónico',
      periodo: '01/2018 - 10/2018',
      empresa : 'Vial Control S.A.',
      ciudadEmpresa : 'CABA',
      paisEmpresa : 'Argentina',
      tareas: {
        tarea1 : 'Fabricación de cinemómetros y equipos de fotomulta de semáforo.',
        tarea2 : 'Desarrollo y testing de codigo en C y Arduino.',
      }
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
