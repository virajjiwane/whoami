import { Component } from '@angular/core';
import { IntersectionDirective } from '../../directives/intersection';
import { AnimationService } from '../../services/animation';

@Component({
    selector: 'app-about-me',
    imports: [IntersectionDirective],
    templateUrl: './about-me.html',
    styleUrl: './about-me.scss',
    standalone: true,
})
export class AboutMe {
    constructor(protected animationService: AnimationService) {}
}
