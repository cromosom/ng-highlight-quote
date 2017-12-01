import { Directive, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlightQuote]'
})
export class HighlightQuoteDirective implements OnInit {
  @Input('highlightQuote') highlightQuote: string;
  private textElements: HTMLCollection;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.textElements = el.nativeElement.children;
  }

  ngOnInit() {
    this.getFrequentQuote(this.textElements, this.highlightQuote);
  }

  /**
   * iterates over a HTMLCollection of text elements and modifies the dom where the given quote matches
   *
   * @param textElements
   * @param highlightQuote
   */
  getFrequentQuote(textElements: HTMLCollection, highlightQuote: string): void {
    let matched = false;

    for (let i = 0; i < textElements.length; i++) {
      // leave if allready matched
      if (matched) {
        return;
      }

      const match = textElements[i].textContent.match(highlightQuote);

      if (match) {
        const text = textElements[i].innerHTML.replace(highlightQuote, `<span class="highlight">${highlightQuote}</span>`);
        this.renderer.setProperty(textElements[i], 'innerHTML', text);
        matched = true;
      }
    }
  }

}
