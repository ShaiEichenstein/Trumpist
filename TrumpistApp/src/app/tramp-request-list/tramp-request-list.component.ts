import { TrampService } from './../services/tramp.service';
import { TrampRequest, TrampRequestForDisplay } from "./../models/trampRequest";
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tramp-request-list',
  templateUrl: './tramp-request-list.component.html',
  styleUrls: ['./tramp-request-list.component.css']
})
export class TrampRequestListComponent implements OnInit {
  @Input() trampRequestList: Array<TrampRequestForDisplay>;

  constructor(private trampService: TrampService) { }

  ngOnInit() {
  }

  confirmTrampRequstHandler(tramp: TrampRequestForDisplay) {
    const trampReq = <TrampRequest>{
      // id: tramp.id,
      driverUserID: tramp.driverUserId,
      passangerUserID: tramp.passangerUser.userId,
      requestStatus: 2
    };
    this.trampService.updateTrampRequestStatus(trampReq);
  }

}
