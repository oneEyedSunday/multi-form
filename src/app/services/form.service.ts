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

}
