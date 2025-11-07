import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data-service';
import { iProject } from '../../interfaces/project';

@Component({
    selector: 'app-project-detail',
    imports: [RouterLink],
    templateUrl: './project-detail.html',
    styleUrl: './project-detail.scss',
})
export class ProjectDetail {
    private projectId = signal('');
    private activatedRoute = inject(ActivatedRoute);
    protected project = signal<iProject | null>(null);

    constructor(private dataService: DataService) {
        this.activatedRoute.params.subscribe((params) => {
            this.projectId.set(params['id']);
            console.log(this.projectId());
            this.project.set(this.dataService.data.projects[this.projectId()]);
        });
    }
}
