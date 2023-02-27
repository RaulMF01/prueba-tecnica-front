import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { fileService } from './services/fileupload.service';
import { generalService } from './services/general.service';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { TableDataFileComponent } from './table-data-file/table-data-file.component';
import { UtilsComponent } from './utils/utils.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalUpdateComponent } from './utils/modal-update/modal-update.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TableDataFileComponent,
    UtilsComponent,
    ModalUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [fileService,generalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
