import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from 'src/app/Models/hero.model';

import { DashboardHeroComponent } from './dashboard-hero.component';

describe('DashboardHeroComponent', () => {
  let component: DashboardHeroComponent;
  let fixture: ComponentFixture<DashboardHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('raises the selected event when clicked', () => {
    const comp = new DashboardHeroComponent();
    const hero:Hero = {id:42 , name:'Test'};
    comp.hero = hero;

    comp.selected.subscribe((selectedHero:Hero) => expect(selectedHero).toBe(hero));
  });
});
