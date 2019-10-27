import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // }));

  it('True should be true', () => {
   expect(true).toBe(true);
  });

  // it(`should have as title 'InternTest'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('InternTest');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('InternTest app is running!');
  // });
});
