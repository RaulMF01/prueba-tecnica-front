import { Component } from '@angular/core';
import { fileService } from '../services/fileupload.service';
import { ToastrService } from 'ngx-toastr';
import { generalService } from '../services/general.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent {
  

  archivoSeleccionado: File | null = null;


  constructor ( private fileService:fileService, private notification:generalService){ 
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
        // el archivo es de tipo Excel, puedes procesarlo
        this.archivoSeleccionado = archivo;
        this.fileService.onFileChange(event)

      } else {
        // el archivo no es de tipo Excel, muestra un mensaje de error
        alert('El archivo seleccionado no es de tipo Excel');
        event.target.value=null;
      }
    }
  }


  eliminarPersona(index: number) {
    this.fileService.eliminarPersona(index)
  }
}
