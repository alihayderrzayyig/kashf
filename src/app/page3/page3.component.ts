import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component  implements OnInit {


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // window.print();
  }

  ngAfterViewInit() {
    window.print();
  }


}
