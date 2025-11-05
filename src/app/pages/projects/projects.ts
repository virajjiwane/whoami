import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { iProject } from '../../interfaces/project';
import { AnimationService } from '../../services/animation';
import { IntersectionDirective } from '../../directives/intersection';
import { KeyValuePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-projects',
    imports: [IntersectionDirective, KeyValuePipe, RouterLink],
    templateUrl: './projects.html',
    styleUrl: './projects.scss',
})
export class Projects implements OnInit {
    protected projects: { [key: string]: iProject } | null = null;
    constructor(
        private dataService: DataService,
        protected animationService: AnimationService,
    ) {}

    ngOnInit(): void {
        this.projects = this.dataService.data.projects;
    }
}
