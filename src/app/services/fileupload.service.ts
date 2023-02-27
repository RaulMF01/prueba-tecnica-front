import { Injectable } from "@angular/core";
import * as XLSX from 'xlsx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class fileService{
    private _dataFile: any[]=[]; 

    private baseUrl = 'http://localhost:3001/api';
    private apiEndpointStorage = '/storage';
    private apiEndpointStorageFile = '/storage/files';

    private headersCors = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });

    get dataFile():string[]{
        return[...this._dataFile]; 
    }



    constructor(private http: HttpClient){
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

      onSubmit(file:File) {
        const url = this.baseUrl + this.apiEndpointStorageFile;
        const FileFormData = new FormData();
        FileFormData.append('myfile', file);
        
        FileFormData.forEach((value, key) => {
            console.log(key, value);
        });
        this.http.post(url, FileFormData).subscribe((data: any) => {
          console.log(data);
        });
      }
      


    GetInfoFiles(): Observable<any>{
        const url = this.baseUrl + this.apiEndpointStorageFile;
        return this.http.get<any>(url);
    }


    eliminarPersona(id: String): Observable<any> {
      const url = `${this.baseUrl}${this.apiEndpointStorage}/${id}`;
      return this.http.delete<any>(url);
    }
}