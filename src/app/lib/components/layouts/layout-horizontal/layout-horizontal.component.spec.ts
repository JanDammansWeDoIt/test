import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutHorizontalComponent } from './layout-horizontal.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('LayoutHorizontalComponent', () => {
  let component: LayoutHorizontalComponent;
  let fixture: ComponentFixture<LayoutHorizontalComponent>;
  const initialState = { loggedIn: false };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutHorizontalComponent, RouterTestingModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
