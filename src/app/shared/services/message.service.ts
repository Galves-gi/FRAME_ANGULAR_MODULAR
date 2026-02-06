import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  message: string | null = null;

  show(text: string) {
    this.message = text;

    // limpa após 2s
    setTimeout(() => {
      this.clear();
    }, 2000);
  }

  clear() {
    this.message = null;
  }

}
