import { Component, Input } from '@angular/core';
import { fileService } from '../services/fileupload.service';
import { ToastrService } from 'ngx-toastr';
import { generalService } from '../services/general.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent {
  fileUpload: File | undefined;

  @Input () nuevo: any={
    file: ""
  };

  archivoSeleccionado: File | null = null;


  constructor ( private fileService:fileService, private general:generalService){ 
    this.fileService
  }

  get DataFile():string[]{
    return this.fileService.dataFile
  }

  onFileChange(event: any) {
     const files = event.target.files;
     if (files.length > 0) {
      const archivo = files[0];
      if (this.fileService.validarArchivo(archivo)) {
        this.fileUpload = event.target.files[0];
      } else {
        // el archivo no es de tipo Excel, muestra un mensaje de error
        alert('El archivo seleccionado no es de tipo Excel');
        event.target.value=null;
      }
    }
  }

  onSubmitFile(event: Event){
    event.preventDefault();
    if(this.fileUpload){
      const FileData = new FormData();
        FileData.append('myfile', this.fileUpload);
       this.fileService.onSubmit(this.fileUpload);
    }
  }


}
