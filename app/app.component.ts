import { Component, ViewChild } from '@angular/core';
import { DateTime } from '../DateTime';
import { PopoverDirective } from 'ngx-bootstrap/popover';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('popoverRef') private _popoverRef: PopoverDirective;
  time: Date;
  date: Date;
  isDateVisible: boolean = true;
  isMeridian: boolean = false;
  dateTime = new Date();
 
  ngOnInit() {

    if (this.dateTime) {
      this.time = this.date = this.dateTime;
      return;
    }
    this.date = this.time = new Date();
  }

  dateSelectionDone() {
    this.isDateVisible = false;
  }
  
  updateDate() {

    if (this.date) {
      this.dateTime = DateTime.getDateTime(this.date, this.time);
    }
    if (!this.time) {
      this.time = this.date;
    }
  }

  updateTime() {
    if (this.time) {
      this.dateTime = DateTime.getDateTime(this.date, this.time);
    }
  }

  showDate() {
    this.isDateVisible = true;
  }

  showTime() {
    this.isDateVisible = false;
  }

  close() {
    this._popoverRef.hide();
  }

  now() {
    this.dateTime = DateTime.now(this.date);
    this.time = this.dateTime;
  }

  today() {
    this.date = this.time = new Date();
    this.dateTime = DateTime.now(this.date);
  }
  clear() {
    //https://valor-software.com/ngx-bootstrap/#/timepicker#dynamic
    //Check component DemoTimepickerDynamicComponent  -> clear() method;  void 0 evaluates to undefined
    this.time = void 0;
    this.date = void 0;
    this.dateTime = void 0;
  }
}