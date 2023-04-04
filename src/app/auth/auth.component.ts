import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  NgForm,
  Validators,
  UntypedFormArray,
  UntypedFormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  public user: UntypedFormGroup;
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(
    private _formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get userDetails(): UntypedFormArray {
    return this.user.get('userDetails') as UntypedFormArray;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: any) => {
      if (res.params.id === 'signup') {
        this.error = null;
        this.isLoginMode = false;
      }
    });
    this.route.paramMap.subscribe((res: any) => {
      if (res.params.id === 'login') {
        this.error = null;
        this.isLoginMode = true;
      }
    });
    this.user = this._formBuilder.group({
      userDetails: this._formBuilder.array([]),
    });
    this.userDetails.push(
      this._formBuilder.group({
        goal: ['', Validators.required],
      })
    );
    this.userDetails.push(
      this._formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      })
    );
    this.userDetails.push(
      this._formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      })
    );
  }
  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    this.authService.form = form.value;
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      (resData) => {
        this.isLoading = false;
        if (!this.isLoginMode) {
          // this.userStorageService
          //   .addUserToFireBase(this.userDetails.value)
          //   .subscribe((res) => {
          //   });
        }
        this.router.navigate(['']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    form.reset();
  }
  onSignUp() {
    const email = this.userDetails.value[3].email;
    const password = this.userDetails.value[3].password;
    this.isLoading = true;

    this.authService.signUp(email, password).subscribe(
      (resData) => {
        this.isLoading = false;
      },

      (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
  }

  redirect() {
    this.router.navigate(['']);
  }
}
