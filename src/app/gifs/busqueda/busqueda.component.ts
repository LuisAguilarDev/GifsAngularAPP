import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private GifsService: GifsService) {}

  buscar(e: HTMLInputElement) {
    this.GifsService.buscarGifs(e.value);
    e.value = '';
    // console.log(e.value);
    // e.value = '';
    // const valor = this.txtBuscar.nativeElement.value;
    // console.log(
    //   '🚀 ~ file: busqueda.component.ts:15 ~ BusquedaComponent ~ buscar ~ valor',
    //   valor
    // );
  }
}
