import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnDestroy {
  form: FormGroup;

  initialData = {
    undergrad: {
      schoolname: '',
      department: '',
      course: '',
      grade: '',
      degreetype: ''
    },
    ssceResult: [],
    secondSitting: 0,
    ssceResult2: [],
    EmploymentHistory: []
  };

  constructor(private formBuilder: FormBuilder, public fs: FormService) {
    this.initialData = this.fs.detailsForForm('second');
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      undergrad: this.formBuilder.group({
        schoolname: [this.initialData.undergrad.schoolname, Validators.required],
        department: [this.initialData.undergrad.department, Validators.required],
        course: [this.initialData.undergrad.course, Validators.required],
        degreetype: [this.initialData.undergrad.degreetype, Validators.required],
        grade: [this.initialData.undergrad.grade, Validators.required]
      }),
      ssceResult: this.formBuilder.array(this.initialData.ssceResult),
      secondSitting: [this.initialData.secondSitting, Validators.required],
      ssceResult2: this.formBuilder.array(this.initialData.ssceResult2),
      EmploymentHistory: this.formBuilder.array(this.initialData.EmploymentHistory)
    });
  }

  ngOnDestroy() {
    this.fs.persist(this.form.value, 'second');
    this.fs.setFormValidity('second', this.form);
  }

  createSsceResult(): FormGroup {
    return this.formBuilder.group({
      subject: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }

  createEmploymentHistory(): FormGroup {
    return this.formBuilder.group({
      employer: ['', Validators.required],
      designation: ['', Validators.required],
      description: [''],
      inEmploy: [false]
    });
  }

  add(array: FormArray, group: FormGroup) {
    array.push(group);
  }

  remove(array: FormArray, index: number) {
    array.removeAt(index);
  }

  get getSsceResult() {
    return (this.form.get('ssceResult') as FormArray);
  }

  get getSsceResult2() {
    return (this.form.get('ssceResult2') as FormArray);
  }

  get getEmploymentHistory() {
    return (this.form.get('EmploymentHistory') as FormArray);
  }

  get schools () {
    return FormService.formData.schools;
  }

  get degreeTypes() {
    return FormService.formData.degreeTypes;
  }

  get degreeGrades() {
    return FormService.formData.degreeGrades;
  }

  get ssceGrades() {
    return FormService.formData.ssceGrades;
  }

}
