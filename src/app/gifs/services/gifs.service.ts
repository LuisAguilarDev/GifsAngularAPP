import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/interface.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] =
    JSON.parse(localStorage.getItem('historial')!) || [];
  public resultados: Gif[] =
    JSON.parse(localStorage.getItem('resultados')!) || [];
  url = 'https://api.giphy.com/v1/gifs/search';
  apikey = 'CxAHEScu5AgwTUq2Ve2LLihfHRI6rD1G';
  get historial() {
    return [...this._historial];
  }

  public pagination = {
    current: 1,
    total: 1,
  };

  buscarGifs(query: string) {
    query = query.toLowerCase();
    if (query.trim().length === 0) {
      return;
    }
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
    localStorage.setItem('historial', JSON.stringify(this._historial));

    const params = new HttpParams()
      .set('api_key', 'CxAHEScu5AgwTUq2Ve2LLihfHRI6rD1G')
      .set('limit', '10')
      .set('q', query);
    this.http
      .get<SearchGIFResponse>(`${this.url}`, { params })
      .subscribe((r) => {
        this.resultados = r.data;
        console.log(r);
        this.pagination.total = r.pagination.total_count;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }

  constructor(private http: HttpClient) {}
}
