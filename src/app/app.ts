import { Component } from '@angular/core';
import { IntersectionDirective } from './directives/intersection';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    standalone: true,
    imports: [IntersectionDirective],
})
export class App {
    handleViewChange(event: any, animationClasses: string) {
        if (event.isIntersecting) {
            // Add the animation class when the element is in view
            event.target.classList.add(...animationClasses.split(' '));
        }
    }
}
