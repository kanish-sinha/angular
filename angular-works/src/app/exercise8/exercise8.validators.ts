import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator {
    // static passwordWrong(control: AbstractControl): ValidationErrors | null {

    //     if ((control.value as string) != "123456")
    //         return ({ passwordWrong: true })
    //     else
    //         return null;
    // }
    static passwordMistake(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value != '123456') {
                    resolve({ passwordMistake: true })
                }
                else {
                    resolve(null);
                }
            }, 5000);
        })
    }
    static passwordMatch(control:AbstractControl,control2:AbstractControl){
       
    }
}