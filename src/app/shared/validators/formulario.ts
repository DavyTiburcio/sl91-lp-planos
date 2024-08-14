import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function stringValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(control.value);
    return valid ? null : { stringOnly: { value: control.value } };
  };
}

