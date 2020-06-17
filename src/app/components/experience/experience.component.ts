import { Component, OnInit } from '@angular/core';
import { TrabajosService } from '../../servicios/trabajos.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  Trabajos: any[];

  constructor( private trabajosService: TrabajosService) {
  }

  ngOnInit(): void {
    this.Trabajos = this.trabajosService.getTrabajos();
  }

}
