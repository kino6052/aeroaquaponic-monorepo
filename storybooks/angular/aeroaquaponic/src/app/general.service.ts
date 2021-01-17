import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  scrollToId = (id: string) => {
    const y = document.querySelector(id)?.getBoundingClientRect().top;
    if (!y) return;
    window.scrollTo(0, y);
  };

  constructor() {}
}
