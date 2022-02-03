import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  labels1: string[] = [ 'Label1', 'Label2', 'Label3' ];
  data1 = {
    labels: this.labels1,
    datasets: [
      { data: [ 350, 450, 100 ] }
  ]
  }
    
}
