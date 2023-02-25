import { Injectable } from "@angular/core";
import * as XLSX from 'xlsx';


@Injectable()
export class fileService{
    private _dataFile: any[]=[]; 

    get dataFile():string[]{
        return[...this._dataFile]; 
    }


    
    constructor(){
        // console.log("se inicializo")
    }

    validarArchivo(file: File): boolean {
        const fileType = file.type;
        if (fileType === 'application/vnd.ms-excel' || fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          return true;
        } else {
          return false;
        }
      }

    onFileChange(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          /* Leemos el contenido del archivo */
          const bstr = e.target.result;
          const wb = XLSX.read(bstr, { type: 'binary' });
          /* Obtenemos la primera hoja del libro de Excel */
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          /* Convertimos la hoja de Excel a un objeto JSON */
          const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
          console.log(data);
          this._dataFile.push(data);
        };
        reader.readAsBinaryString(file);
      }


      eliminarPersona(index: number) {
        if (index !== -1) {
            console.log(this._dataFile)
          //this._dataFile.splice(index, 1);
          console.error(this._dataFile)
        }
      }
}