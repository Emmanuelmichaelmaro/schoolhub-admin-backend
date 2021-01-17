import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcourselistComponent } from './addcourselist.component';

describe('AddcourselistComponent', () => {
    let component: AddcourselistComponent;
    let fixture: ComponentFixture<AddcourselistComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddcourselistComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddcourselistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
