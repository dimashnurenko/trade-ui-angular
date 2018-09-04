import {  
    ReactiveFormsModule,
    AbstractControl,  
    NG_VALIDATORS,  
    FormsModule,  
    FormGroup,  
    FormControl,  
    ValidatorFn,  
} from '@angular/forms';   


export function EmailValidator(): ValidatorFn {
  const EMAIL_REGEXP: RegExp = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');
  return (control: AbstractControl): {[key: string]: any} | null => {
    return EMAIL_REGEXP.test(control.value) ? null : { 'invalidEmailAddress':  false };    
  };
}