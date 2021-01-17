import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseColorSelectorComponent } from './course-color-selector.component';

describe('CourseColorSelectorComponent', () => {
    let component: CourseColorSelectorComponent;
    let fixture: ComponentFixture<CourseColorSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CourseColorSelectorComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseColorSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
