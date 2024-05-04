import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccueilComponent } from './accueil/app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AccueilComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SafannerWeb'`, () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SafannerWeb');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('SafannerWeb app is running!');
  });
});
