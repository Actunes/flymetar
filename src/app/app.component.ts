import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";
import { PricesComponent } from "./components/prices/prices.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, BodyComponent, PricesComponent, FooterComponent]
})
export class AppComponent {
  title = 'flymetar';
}
