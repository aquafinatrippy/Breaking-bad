import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.sass']
})
export class SearchBoxComponent implements OnInit {
  val: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onEnter(value){
    this.val = value
    //this.router.navigate(['/x', {  }])
  }
}
