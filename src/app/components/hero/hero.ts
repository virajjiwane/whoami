import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../services/animation';
import { IntersectionDirective } from '../../directives/intersection';
import { DataService } from '../../services/data-service';
import { iHero } from '../../interfaces/hero';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hero',
    imports: [IntersectionDirective, RouterLink],
    templateUrl: './hero.html',
    styleUrl: './hero.scss',
    standalone: true,
})
export class Hero implements OnInit {
    protected hero$: iHero | null = null;
    constructor(
        protected animationService: AnimationService,
        private dataService: DataService,
    ) {}

    ngOnInit() {
        this.hero$ = this.dataService.data.hero;
    }
}
