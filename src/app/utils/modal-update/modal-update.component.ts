import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent {
  onClose: EventEmitter<any> = new EventEmitter();

  
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
