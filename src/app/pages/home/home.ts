import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { WorkExperience } from '../../components/work-experience/work-experience';
import { TechnicalExpertise } from '../../components/technical-expertise/technical-expertise';
import { Contact } from '../../components/contact/contact';
import { AboutMe } from '../../components/about-me/about-me';
import { MyWork } from '../../components/my-work/my-work';

@Component({
    selector: 'app-home',
    imports: [Hero, AboutMe, WorkExperience, TechnicalExpertise, MyWork, Contact],
    templateUrl: './home.html',
    styleUrl: './home.scss',
    standalone: true,
})
export class Home {}
