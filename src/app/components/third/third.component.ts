import { FormService } from './../../services/form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  fullform;
  constructor(private fs: FormService) { }

  ngOnInit() {
  this.fullform = FormService.formDataStructure;
  }

}
