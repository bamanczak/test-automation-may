import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let component;

describe('AppComponent', () => {
  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it('should accept valid PESEL number for XIX century', () => {
    expect(component.isValidPesel('44850501351')).toBe(true);
  });

  it('should accept valid PESEL number for XX century', () => {
    expect(component.isValidPesel('64042999928')).toBe(true);
  });

  it('should accept valid PESEL number for XXI century', () => {
    expect(component.isValidPesel('44250501353')).toBe(true);
  });

  it('should accept valid PESEL number for XXII century', () => {
    expect(component.isValidPesel('44450901357')).toBe(true);
  });

  it('should accept valid PESEL number for XXIII century', () => {
    expect(component.isValidPesel('44650901353')).toBe(true);
  });

  it('should reject PESEL numbers with invalid controlNumber', () => {
    expect(component.isValidPesel('44051401358')).toBe(false);
  });

  it('should reject PESEL if text', () => {
    expect(component.isValidPesel('jhgasdjhgasjd')).toBe(false);
  });

  it('should reject PESEL if too short', () => {
    expect(component.isValidPesel('4405140135')).toBe(false);
  });

  it('should reject PESEL if too long', () => {
    expect(component.isValidPesel('440514013581123')).toBe(false);
  });

  it('should reject PESEL if int', () => {
    expect(component.isValidPesel(1)).toBe(false);
  });

  it('should reject PESEL if null', () => {
    expect(component.isValidPesel(null)).toBe(false);
  });

  it('should reject PESEL if nothing', () => {
    expect(component.isValidPesel()).toBe(false);
  });

  it('should accept valid dates', () => {
    expect(component.verifyDate(2020, 5, 9)).toBe(true);
  });

  it('should accept reject invalid dates, if number of days is too big', () => {
    expect(component.verifyDate(2020, 5, 32)).toBe(false);
  });

  it('should accept dates with leap year', () => {
    expect(component.verifyDate(2020, 2, 29)).toBe(true);
  });
  it('should reject dates without leap year', () => {

    expect(component.verifyDate(2021, 2, 29)).toBe(false);
  });

});
