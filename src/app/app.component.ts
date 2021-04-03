import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myStudentRecord';

  userProfileForm= new FormGroup({
        firstname:new FormControl('',Validators.required),
        lastname: new FormControl('',Validators.required),
        age: new FormControl('',Validators.required),
        email: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required)
      });

  onSubmit()
      {
        console.log(this.userProfileForm.value);

        //when we just want to access 'age' field rather then accessing the whole form
        //console.log(this.userProfileForm.controls['age'].value);
        //or 
        //console.log(this.userProfileForm.get('age').value);
      }
}
