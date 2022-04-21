import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calculadora'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calculadora');
  });

  /* it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'calculadora app is running!'
    );
  }); */

  it('test de la funcion suma', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.calculadora.setValue({
      elemento1: 1,
      elemento2: 2.2,
    });

    expect(app.sumar()).toBe(3.2);
  });

  it('test de la funcion resta', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.calculadora.setValue({
      elemento1: 1.1,
      elemento2: 2.2,
    });

    expect(app.restar()).toBe(-1.1);
  });

  it('test de la funcion division', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.calculadora.setValue({
      elemento1: 1.1,
      elemento2: 2.2,
    });

    expect(app.dividir()).toBe(0.5);
  });

  it('test de la funcion multiplicacion', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.calculadora.setValue({
      elemento1: 1.5,
      elemento2: 2,
    });

    expect(app.multiplicar()).toBe(3);
  });

  it('test de la validacion de inputs', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.calculadora.setValue({
      elemento1: "aaaaaa",
      elemento2: "4/2",
    });
    expect(app.validarInputs()).toBe(false);
  })
});
