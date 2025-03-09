import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{
  ngOnInit(): void {
    console.log('Componente Hijo: ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Hijo: ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('Componente Hijo: ngOnDestroy');
  }

  @Input()
  public price:number = 0;

}
