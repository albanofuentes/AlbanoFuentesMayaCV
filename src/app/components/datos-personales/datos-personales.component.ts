import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  public fechaNacimiento: string = '21/12/1987';
  public pais: string = 'Argentina';
  public direccion: string = 'Monasterio 71 4to "E"';
  public codigoPostal: string = 'CABA 1284, Argentina';
  public telefono: string = '1155175150';
  public mail: string = 'albano.fuentes@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

}
