import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.css']
})

export class PositionsFormComponent implements OnInit {
  @Input('categoryId') categoryId: string

  constructor() { }

  ngOnInit() {
  }

}
