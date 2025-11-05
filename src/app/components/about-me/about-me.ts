import { Component, OnInit } from '@angular/core';
import { IntersectionDirective } from '../../directives/intersection';
import { AnimationService } from '../../services/animation';
import { DataService } from '../../services/data-service';
import { iAboutMe } from '../../interfaces/about-me';

@Component({
    selector: 'app-about-me',
    imports: [IntersectionDirective],
    templateUrl: './about-me.html',
    styleUrl: './about-me.scss',
    standalone: true,
})
export class AboutMe implements OnInit {
    protected aboutMe$: iAboutMe | null = null;
    constructor(
        protected animationService: AnimationService,
        private dataService: DataService,
    ) {}

    ngOnInit() {
        this.aboutMe$ = this.dataService.data.aboutMe;
    }
}
