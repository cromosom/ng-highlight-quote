
import {
  async, getTestBed,
  TestBed, ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightQuoteDirective } from './highlight-quote.directive';
import { TestComponent } from '../components/test/test.component';

describe('HighlightQuoteDirective', () => {

  // configure testing module
  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        declarations: [
          TestComponent,
          HighlightQuoteDirective
        ]
      }
    );
  });

  it('should work', async(() => {
    // setup test-component template
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: '<article highlightQuote="test"><p>test</p></article>'
      }
    });

    TestBed.compileComponents().then(() => {
      // test-component should be created successfully
      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();

      const directiveEl = fixture.debugElement.query(By.directive(HighlightQuoteDirective));

      expect(directiveEl).not.toBeNull();

      // access highlight-quote-directive and expect it to have the argument 'test'
      const directiveInstance = directiveEl.injector.get(HighlightQuoteDirective);

      expect(directiveInstance.highlightQuote).toBe('test');

      // create a textElement and expect it to equal the directives dom modification
      const textEl = directiveEl.nativeElement.querySelectorAll('.highlight')[0];
      const testNode = document.createElement('span');

      testNode.classList.add('highlight');
      testNode.textContent = 'test';

      expect(textEl).toEqual(testNode);
    });
  }));

});
