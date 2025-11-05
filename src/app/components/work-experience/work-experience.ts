import { Component, OnInit } from '@angular/core';
import { IntersectionDirective } from '../../directives/intersection';
import { AnimationService } from '../../services/animation';
import { DataService } from '../../services/data-service';
import { iExperience } from '../../interfaces/experience';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-work-experience',
    imports: [IntersectionDirective, DatePipe],
    templateUrl: './work-experience.html',
    styleUrl: './work-experience.scss',
    standalone: true,
})
export class WorkExperience implements OnInit {
    protected experience$: { [key: string]: iExperience } | null = null;
    protected experienceOrder$: string[] = [];
    protected backdropExperienceItem: iExperience | null = null;

    constructor(
        protected animationService: AnimationService,
        private dataService: DataService,
    ) {}

    ngOnInit() {
        this.experience$ = this.dataService.data.experience;
        this.experienceOrder$ = this.dataService.data.experienceOrder;
        this.backdropExperienceItem = this.experience$
            ? this.experience$[this.experienceOrder$[0]]
            : null;
    }

    openModal(experienceKey: string) {
        if (!this.experience$) return;
        this.backdropExperienceItem = this.experience$[experienceKey];
        const backdrop = document.getElementById('modal-backdrop');
        if (!backdrop) return;
        backdrop.classList.remove('hidden');
        backdrop.classList.add('flex');
    }

    closeModal() {
        const backdrop = document.getElementById('modal-backdrop');
        if (!backdrop) return;
        backdrop.classList.add('hidden');
        backdrop.classList.remove('flex');
    }
}
