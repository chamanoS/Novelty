import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }

  public success(msg: string ,title?: string ,time?:number): void
  {
    this.toastr.success( msg , title || '' ,{
      timeOut: time || 5000,
      positionClass: 'toast-top-right',

    })
  }

  public info(msg: string ,title?: string ,time?:number): void
  {
    this.toastr.info( msg , title || '' ,{
      timeOut: time || 5000,
      positionClass: 'toast-top-right',

    })
  }

  public warning(msg: string ,title?: string ,time?:number): void
  {
    this.toastr.warning( msg , title || '' ,{
      timeOut: time || 5000,
      positionClass: 'toast-top-right',

    })
  }

  public error(msg: string ,title?: string ,time?:number): void
  {
    this.toastr.error( msg , title || '' ,{
      timeOut: time || 5000,
      positionClass: 'toast-top-right',

    })
  }
}
