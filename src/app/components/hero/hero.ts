import { Component } from '@angular/core';
import { AnimationService } from '../../services/animation';
import { IntersectionDirective } from '../../directives/intersection';

@Component({
    selector: 'app-hero',
    imports: [IntersectionDirective],
    templateUrl: './hero.html',
    styleUrl: './hero.scss',
    standalone: true,
})
export class Hero {
    constructor(protected animationService: AnimationService) {}
}
