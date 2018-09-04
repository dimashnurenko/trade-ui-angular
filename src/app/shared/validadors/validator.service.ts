import { AbstractControl } from "@angular/forms";

export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'invalidTelephoneNumber': 'Invalid telephone number'
        };

        return config[validatorName];
    }

    static emailValidator(control: AbstractControl): {[key: string]: any} | null {
        // RFC 2822 compliant regex
        const regExp: RegExp = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
        return regExp.test(control.value) ? null : { 'invalidEmailAddress': true };
    }

    static passwordValidator(control: AbstractControl): {[key: string]: any} | null {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        const regExp: RegExp = new RegExp(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/);
        return regExp.test(control.value) ? null :  { 'invalidPassword': true };
    }

    static telephoneValidator(control: AbstractControl): {[key: string]: any} | null{
        /* 
        Valid formats:
        (123) 456-7890
        (123)456-7890
        123-456-7890
        123.456.7890
        1234567890
        +31636363634
        075-63546725
        */
        const regExp: RegExp = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        return regExp.test(control.value) ? null :   { 'invalidTelephoneNumber': true };
        
    }
}