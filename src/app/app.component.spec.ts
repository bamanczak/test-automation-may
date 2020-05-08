import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let component;

describe('AppComponent', () => {
  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it('should accept valid PESEL numbers', () => {
    expect(component.isValidPesel('64042999928')).toBe(false);
    expect(component.isValidPesel('52022114478')).toBe(false);
    expect(component.isValidPesel('72021706812')).toBe(false);
    expect(component.isValidPesel('80042448774')).toBe(false);
    expect(component.isValidPesel('97031003029')).toBe(false);
  });

  it('should reject PESEL numbers with invalid controlNumber', () => {
    expect(component.isValidPesel('44051401358')).toBe(true);
    expect(component.isValidPesel('97031003021')).toBe(true);
    expect(component.isValidPesel('97031003023')).toBe(true);
  });

});
