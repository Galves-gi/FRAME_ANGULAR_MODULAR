import { Component, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() options: string[] = [];
  @Input() placeholder: string = 'Selecione uma opção';

  isOpen = false;
  selectedValue: string = '';
  focusedIndex = -1;

  constructor(private elementRef: ElementRef) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.focusedIndex = 0;
    }
  }

  selectOption(option: string) {
    this.selectedValue = option;
    this.isOpen = false;
  }

  // Navegação por teclado
  onKeyDown(event: KeyboardEvent) {
    if (!this.isOpen && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      this.toggleDropdown();
      return;
    }

    if (!this.isOpen) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.focusedIndex =
        (this.focusedIndex + 1) % this.options.length;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusedIndex =
        (this.focusedIndex - 1 + this.options.length) %
        this.options.length;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      this.selectOption(this.options[this.focusedIndex]);
    }

    if (event.key === 'Escape') {
      this.isOpen = false;
    }
  }

  // Fecha ao clicar fora
  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

}
