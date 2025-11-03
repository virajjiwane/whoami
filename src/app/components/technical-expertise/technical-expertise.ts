import { Component } from '@angular/core';
import { IntersectionDirective } from '../../directives/intersection';
import { AnimationService } from '../../services/animation';

@Component({
    selector: 'app-technical-expertise',
    imports: [IntersectionDirective],
    templateUrl: './technical-expertise.html',
    styleUrl: './technical-expertise.scss',
    standalone: true,
})
export class TechnicalExpertise {
    constructor(protected animationService: AnimationService) {}
}
