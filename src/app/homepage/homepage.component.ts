import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @ViewChild ('bgat') bgat:ElementRef
  constructor() { }

  ngOnInit() { }
  ngAfterViewInit(): void {
    window.onscroll = ()=>{
    this.backgroundscroll(window.pageYOffset)
    }
  }
  backgroundscroll(e){
    this.bgat.nativeElement.style.backgroundPosition = "0%"+ e/12 +"%"
    console.log(e);
  }

}
