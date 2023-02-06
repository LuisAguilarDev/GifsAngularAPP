import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Pagination } from '../interfaces/interface.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent {
  constructor(private GifsService: GifsService) {}
  get resultados() {
    return this.GifsService.resultados;
  }
  get Pagination() {
    return this.GifsService.pagination;
  }
}
