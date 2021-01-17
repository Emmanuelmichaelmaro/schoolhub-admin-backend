import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcoursenameComponent } from './editcoursename.component';

describe('EditcoursenameComponent', () => {
    let component: EditcoursenameComponent;
    let fixture: ComponentFixture<EditcoursenameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditcoursenameComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditcoursenameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
