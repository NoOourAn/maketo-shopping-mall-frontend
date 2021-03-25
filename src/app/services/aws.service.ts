import { Injectable } from '@angular/core';
import { s3 } from 'fine-uploader/lib/core/s3';

@Injectable({
  providedIn: 'root'
})
export class AWSService {

  constructor() { }

  bucketName = 'fineuploader-demo';

  uploader: any;

  AWS_config() {   
    let instance = this; 
    this.uploader = new s3.FineUploaderBasic({
      button: document.getElementById('upload_image'),
      debug: false,
      autoUpload: true,
      multiple: true,
      validation: {
        allowedExtensions: ['jpeg', 'jpg', 'png', 'gif', 'svg'],
        sizeLimit: 5120000 // 50 kB = 50 * 1024 bytes
      },
      region: 'us-west-2',
      request: {
        endpoint: 'https://' + instance.bucketName  +'.s3.amazonaws.com/',
        params: { 'Cache-Control': 'private, max-age=31536000, must-revalidate' }
      },
      signature: {
        endpoint: 'http://localhost:8000/api/v1/fine_uploader/s3_signature/',
      },
      iframeSupport: {
        localBlankPagePath: '/somepage.html'
      },
      cors: {
        expected: true,
        sendCredentials: true
      },
      objectProperties: {
        acl: 'public-read',       
      },     
      callbacks: {
        onSubmit: function (id, fileName) {
          console.log('selected file:', fileName);
        },
        // onSubmitted: function(id, name) { alert('onSubmitted');},
        onComplete: function (id, name, responseJSON, maybeXhr) {
          if(responseJSON.success) {
            console.log('upload complete', name);
            console.log('uploaded image url', 'https://' + instance.bucketName + '.s3.amazonaws.com/' + this.getKey(id));
          }
        },
        // onAllComplete: function (successful, failed) { console.log(failed); },
        // onCancel: function (id, name) {},
        // onUpload: function(id, name) { alert('onUpload');},
        // onUploadChunk: function(id, name, chunkData) { alert('onUploadChunk');},
        // onUploadChunkSuccess: function(id, chunkData, responseJSON, xhr) { alert('onUploadChunkSuccess');},
        // onResume: function(id, fileName, chunkData) { alert('onResume');},
        // onProgress: function (id, name, loaded, total) {},
        // onTotalProgress: function(loaded, total) { alert('onTotalProgress');},
        // onError: function (id, name, reason, maybeXhrOrXdr) {  },      
        // onSessionRequestComplete: function (response, success, xhrOrXdr) { }
      }
    });
  }

  
}
