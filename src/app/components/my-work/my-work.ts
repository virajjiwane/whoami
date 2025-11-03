import { Component } from '@angular/core';
import { IntersectionDirective } from '../../directives/intersection';
import { AnimationService } from '../../services/animation';

@Component({
    selector: 'app-my-work',
    imports: [IntersectionDirective],
    templateUrl: './my-work.html',
    styleUrl: './my-work.scss',
    standalone: true,
})
export class MyWork {
    constructor(protected animationService: AnimationService) {}
}
