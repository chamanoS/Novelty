import{AbstractControl} from '@angular/forms';

export class PasswordValidation{
    static MatchPassword(AC:AbstractControl){
        let password = AC.get('user_password').value;
        if(AC.get('confirm_password').touched || AC.get('confirm_password').dirty ){

        }
        let verifyPassword = AC.get('confirm_password').value;

        if(password != verifyPassword){
            AC.get('confirm_password').setErrors({MatchPassword:true})
        }else{
            return null;
        }
    }
}