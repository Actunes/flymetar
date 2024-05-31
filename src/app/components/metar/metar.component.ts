import { Component } from '@angular/core';

@Component({
  selector: 'app-metar',
  standalone: true,
  imports: [],
  templateUrl: './metar.component.html',
  styleUrl: './metar.component.scss'
})
export class MetarComponent {

  constructor() {
    this.getData()
  }

  getData() {
    fetch('https://api.decea.mil.br/aisweb/?apiKey=[apikey]&apiPass=[apipass]&area=met&icaoCode=sbsm')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");
        console.log(xmlDoc);

        const metarElements = xmlDoc.getElementsByTagName("metar");
        if (metarElements.length > 0) {
          const metar = metarElements[0];
          console.log(metar.textContent);
        }
      })
  }
}
