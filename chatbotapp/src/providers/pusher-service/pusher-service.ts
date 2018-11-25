
    import { HttpClient } from '@angular/common/http';
    import { Injectable } from '@angular/core';

    declare const Pusher: any;
    @Injectable()
    export class PusherServiceProvider {
      public _pusher : any;
      constructor(public http: HttpClient) {
        this._pusher = new Pusher("a68252a6c077569d67ba", {
          cluster: "mt1",
          encrypted: true
        });
      }

      getPusher(){
        return this._pusher;
      }
    }