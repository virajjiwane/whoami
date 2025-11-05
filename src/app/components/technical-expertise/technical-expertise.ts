import { Component, OnInit } from '@angular/core';
import { IntersectionDirective } from '../../directives/intersection';
import { AnimationService } from '../../services/animation';
import { DataService } from '../../services/data-service';
import { iSkillGroup } from '../../interfaces/skill-group';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-technical-expertise',
    imports: [IntersectionDirective, NgStyle],
    templateUrl: './technical-expertise.html',
    styleUrl: './technical-expertise.scss',
    standalone: true,
})
export class TechnicalExpertise implements OnInit {
    protected skillGroups: iSkillGroup[] | null = null;
    protected coreSkills: string[] = [];
    constructor(
        protected animationService: AnimationService,
        private dataService: DataService,
    ) {}

    ngOnInit(): void {
        this.skillGroups = this.dataService.data.skillGroups;
        this.coreSkills = this.dataService.data.hero.skills;
    }
}
