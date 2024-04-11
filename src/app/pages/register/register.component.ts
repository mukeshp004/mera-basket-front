import { Component, OnInit } from '@angular/core';
import { FIELD_TYPE } from '../../core/enum/field-type.enum';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../shared/services/notification.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ICustomerRegisterRequest } from '../../core/model/http-request/customer-register-request.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  passwordToggleFlag = false;
  passwordFieldType = FIELD_TYPE.PASSWORD;

  registerForm!: UntypedFormGroup;

  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]],
    });

    this.setDefaultValue();
  }

  get controls() {
    return this.registerForm.controls;
  }

  setDefaultValue() {
    this.registerForm.patchValue({
      first_name: 'Mukesh',
      last_name: 'Patel',
      email: 'mukesh.nanji@gmail.com',
      phone: '9892409105',
      password: 'Password@123',
      password_confirmation: 'Password@123',
    });
  }

  togglePassword() {
    this.passwordToggleFlag = !this.passwordToggleFlag;
    this.passwordFieldType = this.passwordToggleFlag
      ? FIELD_TYPE.TEXT
      : FIELD_TYPE.PASSWORD;
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.registerForm.value);
    this.auth
      .register(this.registerForm.value as ICustomerRegisterRequest)
      .pipe(
        finalize(() => {
          this.isSubmitted = false
        })
      )
      .subscribe({
        next: (response) => {
          this.notificationService.success('User Register', 'Register Successful Please check the mail');
          
        },
        error: (error) => {
          console.log(error)
          
          this.notificationService.error('User Failed', error.error?.message);
        },
      });
  }
}
