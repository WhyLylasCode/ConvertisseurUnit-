import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { of } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title: string = "Convertisseur d'unité";
  resultat: number | undefined;
  uniteUtilise: string = "m";
  uniteArrivee: string = "cm";
  userInput: number | undefined;

  onclick() {
    if (this.userInput !== undefined) {
      this.resultat = this.convertUnits(
        this.userInput,
        this.uniteUtilise,
        this.uniteArrivee
      );
    }
  }

  private convertUnits(
    value: number,
    source: string,
    destination: string
  ): number | undefined {
    const unitCoefficients: { [key: string]: number } = {
      mm:0.001,
      cm: 0.01,    
      dm: 0.1,
      m: 1,
      km: 1000
    };

    if (
      unitCoefficients[source] !== undefined &&
      unitCoefficients[destination] !== undefined
    ) {
      return value * (unitCoefficients[source] / unitCoefficients[destination]);
    }
    return undefined;
  }
}
