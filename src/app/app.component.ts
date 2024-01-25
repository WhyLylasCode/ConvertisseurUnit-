import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  title : string = "Convertisseur d'unité";
  resultat : number | undefined;
  uniteUtilise : string = 'meters';
  uniteArrivee : string = 'centimeters';
  userInput : number | undefined;

   onclick(){
    if(this.userInput !== undefined){
       if (this.uniteUtilise === 'centimeters' && this.uniteArrivee === 'meters') 
        this.resultat = this.userInput / 100;
        else if (this.uniteUtilise === 'meters' && this.uniteArrivee === 'centimeters')
        this.resultat = this.userInput * 100;

    };
  }
}

