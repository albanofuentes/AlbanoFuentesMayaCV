import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../servicios/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  Edus: any[];

  constructor( private educationService: EducationService ) {
  }

  ngOnInit(): void {
    this.Edus = this.educationService.getEdus();

  }

}
