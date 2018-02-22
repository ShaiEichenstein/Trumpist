import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tramp-grade',
  templateUrl: './tramp-grade.component.html',
  styleUrls: ['./tramp-grade.component.css']
})
export class TrampGradeComponent implements OnInit {

@Input() grade: number;
@Input() color: string;

  constructor() {
    this.grade = 100;
    this.color = 'red';
  }

  ngOnInit() {
  }

}
