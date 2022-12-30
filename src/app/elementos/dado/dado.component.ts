import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit{
  valor: number = 1;
  min:number=1;
  max:number=6

  constructor () {}

  ngOnInit(): void {
    this.valor = Math.floor(Math.random() * (this.max - this.min + 1)) +this.min;
  }
}
