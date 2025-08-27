import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ApplicationResponse} from "../../../../services/models/application-response";
@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent {
  @Output() apply: EventEmitter<number> = new EventEmitter<number>();
  @Input() app: ApplicationResponse = <ApplicationResponse>{};


  constructor(private router: Router) {}

  onApply() {
    this.apply.emit(this.app.id);
  }

}
