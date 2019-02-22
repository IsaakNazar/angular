import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // isOpen = false;
  //
  // @HostListener('click') clicked() {
  //   this.isOpen = !this.isOpen;
  //   if (this.isOpen === true) {
  //     this.renderer.addClass(this.elRef.nativeElement, 'open');
  //   } else {
  //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //   }
  // }
  // constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleClick() {
    this.isOpen = !this.isOpen;
  }
}


