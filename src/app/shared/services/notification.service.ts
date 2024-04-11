import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  info(header?: string, msg?: string) {
    this.toastr.info(msg, header);
  }

  success(header?: string, msg?: string) {
    this.toastr.success(msg, header);
  }

  error(header?: string, msg?: string) {
    this.toastr.error(msg, header);
  }
}
