import { Component, Input, OnInit } from '@angular/core';
import { LogService } from '@app/shared/log.service';

@Component({
  selector: 'ngprj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
 

  constructor(private logService: LogService) 
  {
    this.logService.log("nella home")
   }

  ngOnInit(): void {
  }

}
