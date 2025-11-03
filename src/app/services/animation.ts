import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AnimationService {
    handleViewChange(event: any, animationClasses: string) {
        if (event.isIntersecting) {
            // Add the animation class when the element is in view
            event.target.classList.add(...animationClasses.split(' '));
        }
    }
}
