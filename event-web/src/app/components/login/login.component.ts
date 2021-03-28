import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public loginForm = this.builder.group({
    email: ['',[Validators.required]],
    password: ['',[Validators.required]]
})
  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    if (this.loginForm.valid){
        this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password).subscribe(() =>{
        this.router.navigate(['/']);
        })
    }
}
}
