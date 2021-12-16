import { AbstractControl, ValidationErrors } from "@angular/forms";
import { ServeService } from "../services/serve.service";

export class SignupValidate {
    constructor() { }
    static usernameMatch(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let serve = new ServeService();
                let arr = serve.getusername();
                for (var i = 0; i < arr.length; i++) {
                    if (control.value == arr[i]) {
                        resolve({ usernameMatch: true })
                        break;
                    }
                }
                if (i >= arr.length)
                    resolve(null);
            }, 3000);
        })
    }
    static emailMatch(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let serve = new ServeService();
                let arr = serve.getemail();
                for(var i=0;i<arr.length;i++){
                    if (control.value === arr[i])
                    resolve({ emailMatch: true })
                }
                if(i>=arr.length)
                    resolve(null);
            }, 4000);
        })
    }
}