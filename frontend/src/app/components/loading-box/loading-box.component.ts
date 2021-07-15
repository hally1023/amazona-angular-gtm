import { Component, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-loading-box',
  templateUrl: './loading-box.component.html',
  styleUrls: ['./loading-box.component.scss'],
})
export class LoadingBoxComponent implements OnInit {
  faSpinner = faSpinner;

  constructor() {}

  ngOnInit(): void {}
}
