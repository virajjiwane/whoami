import { Component, OnInit } from '@angular/core';
import { IntersectionDirective } from '../../directives/intersection';
import { AnimationService } from '../../services/animation';
import { DataService } from '../../services/data-service';
import { iProject } from '../../interfaces/project';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-my-work',
    imports: [IntersectionDirective, RouterLink],
    templateUrl: './my-work.html',
    styleUrl: './my-work.scss',
    standalone: true,
})
export class MyWork implements OnInit {
    protected projects: { [key: string]: iProject } | null = null;
    protected displayedProjects: string[] = [];
    constructor(
        protected animationService: AnimationService,
        private dataService: DataService,
    ) {}

    ngOnInit(): void {
        this.projects = this.dataService.data.projects;
        this.displayedProjects = this.dataService.data.displayedProjects;
    }
}
