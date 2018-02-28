import { FormService } from './../../services/form.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnDestroy {
  form: FormGroup;
  initialData: {
    firstname: '',
    othernames: '',
    lastname: '',
    state_orig: '',
    dob: '',
    marital_stat: '',
    email: '',
    confirm: '',
    phone: '',
    address: ''
  };

  constructor(private fs: FormService) {
    this.initialData = this.fs.detailsForForm('first');
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(this.initialData.firstname, Validators.required),
      othernames: new FormControl(this.initialData.othernames),
      lastname: new FormControl(this.initialData.lastname, Validators.required),
      state_orig: new FormControl(this.initialData.state_orig, Validators.required),
      dob: new FormControl(this.initialData.dob), // yyyy-mm-dd
      marital_stat: new FormControl(this.initialData.marital_stat),
      email: new FormControl(this.initialData.email, Validators.compose([Validators.email, Validators.required])),
      confirm: new FormControl(this.initialData.confirm, Validators.compose([Validators.email, Validators.required])),
      phone: new FormControl(this.initialData.phone, Validators.pattern('^0[0-9]{10}$')),
      address: new FormControl(this.initialData.address)
  }, this.emailMatcher );
  }

  ngOnDestroy() {
    this.fs.persist(this.form.value, 'first');
  }

 emailMatcher = (control: AbstractControl ) => {
   const email = control.get('email');
   const confirm = control.get('confirm');
   if (!email || !confirm) {
     return null;
   }
   return email.value === confirm.value ? null : {nomatch: true};
 }

 get states() {
   return FormService.formData.states;
 }

}
