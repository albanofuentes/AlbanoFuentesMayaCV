import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../../servicios/certificados.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  Certs: any[];

  constructor( private certificatesService: CertificatesService) {
  }

  ngOnInit(): void {
    this.Certs = this.certificatesService.getCerts();
  }

}
