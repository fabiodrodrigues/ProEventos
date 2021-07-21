import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos() {
    this.http.get('https://localhost:44359/WeatherForecast').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );

    // this.eventos = [
    //   {
    //     temperatureC: 'Angular 11',
    //     summary: 'Belo Horizonte'
    //   },
    //   {
    //     Tema: '.NET 5',
    //     Local: 'São Paulo'
    //   },
    //   {
    //     Tema: 'Angular e suas novidades',
    //     Local: 'Rio de Janeiro'
    //   }
    // ]
  }
}
