import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { HologramService } from "../../shared/services/hologram/hologram.service";

@Component({
  selector: 'app-add-hologram',
  templateUrl: './add-hologram.component.html',
  styleUrls: ['./add-hologram.component.scss']
})
export class AddHologramComponent implements OnInit {

  hologramForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private hologramService: HologramService) { 
    this.hologramForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      imageUrl: [''],
      price: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    this.hologramService.addHologram(this.hologramForm.value)
      .subscribe((hologram: any) => {
        console.log('hologram added!');
        this.router.navigate(['/']);
      });
  }

}
