import { Component } from '@angular/core';
import { DocumentScannerOptions, DocumentScanner } from '@ionic-native/document-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private documentScanner: DocumentScanner
  ) {}

  openCamera() {
    const options: DocumentScannerOptions = {
      sourceType: 1
    };
    this.documentScanner.scanDoc(options).then((res) => {
      console.log(res);
    }).catch(() => {

    });
  }
}
