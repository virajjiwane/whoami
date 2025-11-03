import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalExpertise } from './technical-expertise';

describe('TechnicalExpertise', () => {
    let component: TechnicalExpertise;
    let fixture: ComponentFixture<TechnicalExpertise>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TechnicalExpertise],
        }).compileComponents();

        fixture = TestBed.createComponent(TechnicalExpertise);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
