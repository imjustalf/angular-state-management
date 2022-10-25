import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  constructor() {}

  @ViewChild('alertTemplate') displayedAlert!: ElementRef<HTMLDivElement>;
  @ViewChild('daButton') theButton!: ElementRef<HTMLButtonElement>;

  @Input() alert: AlertTypes = 'info';

  @Input() dismissable = false;

  @Input() message = 'Alert';

  @Output() dismissed = new EventEmitter<string>();

  onDismiss(template: HTMLDivElement) {
    //this.theButton.nativeElement.classList.add('btn-lg');
    this.dismissed.emit(
      `They Dismissed the alert with the message ${this.message} `,
    );
    console.log(this.displayedAlert);
    this.displayedAlert.nativeElement.remove();
  }
}

export type AlertTypes =
  | 'danger'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'info';
