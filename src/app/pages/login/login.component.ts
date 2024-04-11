import { Component } from '@angular/core';
import { FIELD_TYPE } from '../../core/enum/field-type.enum';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UntypedFormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { NotificationService } from '../../shared/services/notification.service';
import { ICustomerLoginRequest } from '../../core/model/http-request/customer-login-request.model';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  passwordToggleFlag = false;
  passwordFieldType = FIELD_TYPE.PASSWORD;
  loginForm!: UntypedFormGroup;
  isSubmitted = false;

  
  returnUrl: string = '/home';

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private auth: AuthenticationService,
    
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.buildForm();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['mukesh.nanji@gmail.com', [Validators.required, Validators.email]],
      phone: [
        '',
        // [
        //   Validators.required,
        //   Validators.minLength(10),
        //   Validators.maxLength(10),
        // ],
      ],
      password: ['Password@123', [Validators.required]],
      remember_me: []
    });
  }

  togglePassword() {
    this.passwordToggleFlag = !this.passwordToggleFlag;
    this.passwordFieldType = this.passwordToggleFlag
      ? FIELD_TYPE.TEXT
      : FIELD_TYPE.PASSWORD;
  }

  get controls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.loginForm.value);
    this.auth
      .login(this.loginForm.value as ICustomerLoginRequest)
      .pipe(
        finalize(() => {
          this.isSubmitted = false
        })
      )
      .subscribe({
        next: (response) => {
          this.notificationService.success('User Login', 'Successful');
          this.router.navigate([this.returnUrl]);
        },
        error: (error) => {
          this.notificationService.error('User Failed', error.error?.message);
        },
      });
  }
}
