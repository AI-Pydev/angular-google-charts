import { Component } from '@angular/core';
import {
   ChartErrorEvent,
   ChartMouseLeaveEvent,
   ChartMouseOverEvent,
   ChartSelectionChangedEvent,
   ChartType,
   Column,
   GoogleChartComponent
 } from 'angular-google-charts';

 
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'Sample Graph';
   type = 'LineChart';
   data = [
      [10,  -6.0, -0.2, -0.9, 3.9, -6.0, -1, 0.9, 1.9],
      [20,  4.9, 0.8, 0.6, 4.2, 2.9, 4.8, 3.6, 5.2],
      [30,  8.5,  5.7, 3.5, 5.7, 10.5,  8.7, 6.5, 8.7],
      [40,  14.5, 11.3, 8.4, 8.5, 16.5, 11.3, 13.4, 8.5],
      [50,  28.2, 14.0, 13.5, 11.9, 21.2, 14.0, 17.5, 21.9],
      [60,  31.5, 32.0, 17.0, 15.2, 31.5, 22.0, 19.0, 25.2],
      [70,  55.2, 34.8, 18.6, 17.0, 45.2, 38.8, 21.6, 27.0],
      [80,  63.5, 44.1, 19.9, 18.6, 56.5, 47.1, 39.9, 28.6],
      [90,  76.9, 55.1, 24.3, 24.2, 66.5, 59.1, 44.3, 36.2],
      [100,  79.3, 56.1, 29.0, 26.3, 70.3, 61.1, 49.0, 46.3],
      [120,  83.9,  58.6, 33.9, 26.6, 73.9,  68.6, 53.9, 56.6],
      [140,  89.6,  62.5,  41.0, 34.8, 79.6,  70.5,  61.0, 64.8]
   ];
   columns = ["Data", "L1", "L2","L3", "L4", "L5", "L6","L7", "L8"];
   options = {  
      legend: { position: 'bottom', alignment: 'center'}, 
      hAxis: {
         title: 'Sample data X'
      },
      vAxis:{
         title: 'Sample data Y'
      },
      pointSize: 10,
      animation: {
         duration: 1500,
         easing: 'linear',
         startup: true
       },
      backgroundColor:'#f1f8e9',
      // crosshair:{
      //    color:'#000000',
      //    trigger:'selection'  
      //  },
      series: {
        0: { pointShape: 'circle', lineDashStyle: [14, 2, 2, 7]},
        1: { pointShape: 'triangle' },
        2: { pointShape: 'square' },
        3: { pointShape: 'diamond' },
        4: { pointShape: 'star' },
        5: { pointShape: 'polygon' }
    },
    


   };
   width = 1050;
   height = 500;
}