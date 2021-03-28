import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    signupForm!: FormGroup;
	loading = false;
	submitted = false;
	hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(){
    if (this.signupForm.valid){
    this.authService.signUpUser(this.signupForm.value.name, this.signupForm.value.email,this.signupForm.value.password).subscribe(res=>{
        this.router.navigate(['/login'])
    }, error =>{

    })
    }
  }
}
