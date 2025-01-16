import { NgForm, UntypedFormGroup } from "@angular/forms";

/**
 * What is this function? This function will make the form as touched,
 * in this way, we can properly trigger any validations provided in the form
 */
export function touchForm(form: NgForm): void {
  for (const field in form.form.controls) {
    markAsTouched(field, form.form.controls);
  }
}

function markAsTouched(field: string, controls: any): void {
  const control = controls[field] as UntypedFormGroup;
  control.markAsTouched();
}
