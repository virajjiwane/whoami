import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appIntersection]',
})
export class IntersectionDirective {
  @Input() appIntersection?: IntersectionObserverInit = {};
  @Output() viewChange = new EventEmitter();
  observer: IntersectionObserver = null!;
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      const e = entries[0];
      this.viewChange.emit(e);
    }, this.appIntersection);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.unobserve(this.el.nativeElement);
    this.observer.disconnect();
  }
}