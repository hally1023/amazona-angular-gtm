import { Component, Input, OnInit } from '@angular/core';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import {
  faStar as faStarSolid,
  faStarHalf as faStarHalfSolid,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number | undefined;
  @Input() numReviews: number | undefined;

  faStarSolid = faStarSolid;
  faStarHalfSolid = faStarHalfSolid;
  faStarRegular = faStarRegular;

  constructor() {}

  ngOnInit(): void {}
}
