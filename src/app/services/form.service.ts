import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
  static formDataStructure = {
    first : {
      address: '',
      confirm: '',
      dob: '',
      email: '',
      firstname: '',
      lastname: '',
      othernames: '',
      marital_stat: '',
      phone: '',
      state_orig: ''
    },
    second: {
      secondSitting: 0,
      undergrad: {
        course: '',
        degreeType: '',
        department: '',
        grade: '',
        schoolname: ''
      },
      ssceResult: [],
      ssceResult2: [],
      EmploymentHistory: []
    }
  };

  static formData = {
      states:  [
      'Abia',
      'Adamawa',
      'Akwa Ibom',
      'Anambra',
      'Bauchi',
      'Bayelsa',
      'Borno',
      'Delta',
      'Edo',
      'Ekiti'
    ],

    schools: [
      'UNIBEN',
      'UNIUYO',
      'AAU',
      'ABU',
      'UNILAG'
    ],

    degreeTypes: [
      'B.Sc',
      'B.Eng',
      'B.A',
      'B.Ed'
    ],

    degreeGrades: [
      'First Class',
      'Second Class Upper',
      'Second Class Lower',
      'Third class'
    ],

    ssceGrades: [
      'A1',
      'B2',
      'B3',
      'C4',
      'C5',
      'C6',
    ]
  };

  static formValid = {
    first: {
      valid: true,
      invalidFields: []
    },
    second: {
      valid: true,
      invalidFields: []
    }
  };

  constructor() { }
  // on save, persist to store
  // functions to add to db structure
  // and set form vals from db structure

  set db(newdetails: { formData: {}, form: string}) {
    // console.log('before', FormService.formDataStructure);
    // console.log(FormService.formDataStructure[newdetails.form]);
    // FormService.formDataStructure[newdetails.form] = this.objectify(FormService.formDataStructure, newdetails.formData, newdetails.form);
      FormService.formDataStructure[newdetails.form] = newdetails.formData;
    // console.log('after', FormService.formDataStructure);
  }

  persist(formValue, formName) {
    this.db = {formData: formValue, form: formName};
  }

  detailsForForm(form) {
    return FormService.formDataStructure[form];
  }

  formsValid(): boolean {
    let valid = false;
    for (const prop in FormService.formValid) {
      if (typeof FormService.formValid[prop] === 'object') {

        valid = FormService.formValid[prop].valid && valid;
      }
    }
    return valid;
  }

  get invalidFormControls() {
    let fields: string[] = [];
    for (const prop in FormService.formValid) {
      if (typeof FormService.formValid[prop] === 'object' && !FormService.formValid[prop].valid) {
        fields = fields.concat(FormService.formValid[prop].invalidFields);
      }
    }
    return fields;
  }

  setFormValidity(formTitle, form: FormGroup) {
    if (!form.valid) {
    const invalidFields = [];
    for (const prop in form.controls) {
      if (form.controls.hasOwnProperty(prop) && !(form.controls[prop].valid)) {
        if (form.controls[prop].hasOwnProperty('controls')) {
          // should refactor into a recursive function
          const fg = (form.controls[prop] as FormGroup);
          for (const ctl in fg.controls) {
            if (fg.controls.hasOwnProperty(ctl) && !(fg.controls[ctl].valid)) {
              invalidFields.push(ctl);
            }
          }
        } else {
          invalidFields.push(prop);
        }
      }
    }
    FormService.formValid[formTitle].invalidFields = invalidFields;
  }

  FormService.formValid[formTitle].valid = form.valid;
  }

}
