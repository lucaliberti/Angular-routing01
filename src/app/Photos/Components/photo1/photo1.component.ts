import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo1',
  templateUrl: './photo1.component.html',
  styleUrls: ['./photo1.component.css']
})
export class Photo1Component implements OnInit {

  photoid: string;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe((params) => this.photoid = params.photoid);
  }


}
