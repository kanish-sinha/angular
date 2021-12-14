import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator {
    static passwordWrong(control: AbstractControl): ValidationErrors | null {
      
                if ((control.value as string) !="123456")
                    return ({ passwordWrong: true })
                else
                    return null;
    }
}