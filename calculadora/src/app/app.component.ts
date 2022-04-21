import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculadora';

  calculadora = new FormGroup({
    elemento1: new FormControl(''),
    elemento2: new FormControl(''),
  });
  res: number = 0;

  validarInputs() : boolean {
    let primeraExpresion: string = this.calculadora.get('elemento1')?.value;
    let segundaExpresion: string = this.calculadora.get('elemento2')?.value;
    if (
      !primeraExpresion ||
      !segundaExpresion ||
      !parseFloat(primeraExpresion) ||
      !parseFloat(segundaExpresion)
    ) {
      this.res = 0;
      alert('Campos no válidos');
      return false;
    }
    return true;
  }
  sumar(): number {
    let primeraExpresion: string = this.calculadora.get('elemento1')?.value;
    let segundaExpresion: string = this.calculadora.get('elemento2')?.value;

    if (!this.validarInputs()) {
      this.res = 0;
    } else {
      this.res = parseFloat(primeraExpresion) + parseFloat(segundaExpresion);
    }

    return parseFloat(this.res.toFixed(2));
  }

  restar(): number {
    let primeraExpresion: string = this.calculadora.get('elemento1')?.value;
    let segundaExpresion: string = this.calculadora.get('elemento2')?.value;

    if (!this.validarInputs()) {
      this.res = 0;
    } else {
      this.res = parseFloat(primeraExpresion) - parseFloat(segundaExpresion);
    }
    return parseFloat(this.res.toFixed(2));
  }

  dividir(): number {
    let primeraExpresion: string = this.calculadora.get('elemento1')?.value;
    let segundaExpresion: string = this.calculadora.get('elemento2')?.value;

    if (!this.validarInputs()) {
      this.res = 0;
    } else {
      this.res = parseFloat(primeraExpresion) / parseFloat(segundaExpresion);
    }
    return parseFloat(this.res.toFixed(2));
  }

  multiplicar(): number {
    let primeraExpresion: string = this.calculadora.get('elemento1')?.value;
    let segundaExpresion: string = this.calculadora.get('elemento2')?.value;

    if (!this.validarInputs()) {
      this.res = 0;
    } else {
      this.res = parseFloat(primeraExpresion) * parseFloat(segundaExpresion);
    }
    return parseFloat(this.res.toFixed(2));
  }
}
