import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from "../../shared/services/auth/auth.service";

@Component({
  selector: 'fbl-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private pageTitle: string = 'nav.register';

  registerForm: FormGroup;

  private registerEvent: EventEmitter<any>;

  constructor(private router: Router,
              private authService: AuthService,
              private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      password: ['']
    });

    this.registerEvent = new EventEmitter;
  }

  public ngOnInit(): void {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/holograms']);
    }
  }

  public onSubmit(form: any): void {
    this.registerEvent.emit();

    this.authService.registerUser(this.registerForm.value);
  }

}
