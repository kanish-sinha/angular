import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator {
    static cantContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cantContainSpace: true };
        }
        else
            return null;
    }
}