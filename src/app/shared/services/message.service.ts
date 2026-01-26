import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  message: string | null = null;

  show(text: string) {
    this.message = text;
  }

  clear() {
    this.message = null;
  }
}
