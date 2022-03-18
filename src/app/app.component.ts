import {Component, ElementRef, ViewChild} from '@angular/core';
import {Product} from "../models/Product";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import * as url from "url";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudServe';

  @ViewChild('uploadFile', {static: true}) public avatarDom: ElementRef | undefined

  selectedImg: any = null;
  arrayFile = '';

  constructor(private storage: AngularFireStorage) {
  }

  submit() {
    if (this.selectedImg != null) {
      const filePath = this.selectedImg.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImg).snapshotChanges()
        .pipe(finalize(() => (fileRef.getDownloadURL()
          .subscribe(url => {
            this.arrayFile = url;
            console.log(url);
          })))
        ).subscribe()
    }
  }

  uploadFileImg() {
    this.selectedImg = this.avatarDom?.nativeElement.files[0];
    this.submit();
  }
}
