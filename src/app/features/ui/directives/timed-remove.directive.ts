import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appTimedRemove]',
})
export class TimedRemoveDirective implements OnInit {
  @Input() appTimedRemove = 5;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>,
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);

    setTimeout(() => {
      this.viewContainerRef.clear();
    }, this.appTimedRemove * 1000);
  }
}
