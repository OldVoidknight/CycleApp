import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoutetrackComponent } from './routetrack.component';

describe('RoutetrackComponent', () => {
  let component: RoutetrackComponent;
  let fixture: ComponentFixture<RoutetrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutetrackComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoutetrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
