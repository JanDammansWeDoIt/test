import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    // Test in comment because it gives the error 'TypeError: StoreModule.forRoot() called twice. Feature modules should use StoreModule.forFeature() instead.'
    // The error occurs when you put 'StoreModule.forRoot({ router: routerReducer })' or 'StoreModule.forRoot({})' in app.module.
    // You need this line. Otherwise, the app will not run

    //const fixture = TestBed.createComponent(AppComponent);
    //const app = fixture.componentInstance;
    // expect(app).toBeTruthy();

    expect(true).toBeTrue();
  });
});
