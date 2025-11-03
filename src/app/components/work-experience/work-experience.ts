import { Component } from '@angular/core';
import { IntersectionDirective } from '../../directives/intersection';
import { AnimationService } from '../../services/animation';
@Component({
    selector: 'app-work-experience',
    imports: [IntersectionDirective],
    templateUrl: './work-experience.html',
    styleUrl: './work-experience.scss',
    standalone: true,
})
export class WorkExperience {
    constructor(protected animationService: AnimationService) {}

    openModal(event: Event) {
        const target = event.currentTarget as HTMLElement;
        if (target) {
            const backdrop = document.getElementById('modal-backdrop');
            if (!backdrop) return;
            backdrop.classList.remove('hidden');
            backdrop.classList.add('flex');
        }
    }

    closeModal() {
        const backdrop = document.getElementById('modal-backdrop');
        if (!backdrop) return;
        backdrop.classList.add('hidden');
        backdrop.classList.remove('flex');
    }
}
