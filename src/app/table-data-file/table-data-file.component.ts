import { Component, Input } from '@angular/core';
import { fileService } from '../services/fileupload.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UtilsComponent } from '../utils/utils.component';


@Component({
  selector: 'app-table-data-file',
  templateUrl: './table-data-file.component.html',
  styleUrls: ['./table-data-file.component.css']
})
export class TableDataFileComponent {

  data: any[] | undefined;
  modalRef: BsModalRef | undefined;

  @Input() NoRows:number = 0;
  
  get personajes(){
    return this.fileService.dataFile
  }
  constructor ( private fileService:fileService,private modalService: BsModalService ){
    this.fileService
  }


  
  conectar(){
    this.fileService.GetInfoFiles().subscribe(
      response => {
        this.data = response.data;
        console.log(this.data)
        this.NoRows = this.data?.length || 0
      },
      error => {
        console.log(error);
      }
    );
  }

  onDelete(idElement: string, Registro:object, index:number){
    this.modalRef = this.modalService.show(UtilsComponent);
    this.modalRef.content.onClose.subscribe(() => {
      this.fileService.eliminarPersona(idElement).subscribe(()=>{
        this.conectar();
      }); 
    });
  }


  onUpdate(Registro:object ){
    console.log(Registro)
  }
}
