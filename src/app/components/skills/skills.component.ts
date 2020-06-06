import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillLevelLow = 'assets/img/barra-1-4.png';
  skillLevelMedium = 'assets/img/barra1-2.png';
  skillLevelHigh = 'assets/img/barra-3-4.png';
  skillLevelVeryHigh = 'assets/img/barra-full.png';
  constructor() { }

  ngOnInit(): void {
  }

}
