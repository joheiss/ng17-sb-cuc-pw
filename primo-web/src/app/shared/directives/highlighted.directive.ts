import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true
})
export class HighlightedDirective {

  @Input("highlighted") isHighlighted = "false";

  @HostBinding("class.highlighted")
  get cssClasses(): boolean {
    return this.isHighlighted === "true"
  }

  @HostListener("mouseover")
  mouseOver() {
    this.isHighlighted = "true";
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighlighted = "false";
  }

}
