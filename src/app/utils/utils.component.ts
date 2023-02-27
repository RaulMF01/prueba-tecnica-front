import { Component,EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.css']
})
export class UtilsComponent {
  onClose: EventEmitter<any> = new EventEmitter();
  onCloseAcept: EventEmitter<any> = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) {}

  close() {
    // this.onClose.emit('Data passed back to the parent component');
    this.bsModalRef.hide();
  }

  closeAcept(){
    this.onClose.emit('Data passed back to the parent component');
    this.bsModalRef.hide();
  }
}
