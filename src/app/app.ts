import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { IntersectionDirective } from './directives/intersection';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, NgForm } from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';
import { Hero } from './components/hero/hero';
import { AnimationService } from './services/animation';
import { WorkExperience } from './components/work-experience/work-experience';
import { TechnicalExpertise } from './components/technical-expertise/technical-expertise';
import { Contact } from './components/contact/contact';
import { AboutMe } from './components/about-me/about-me';
import { MyWork } from './components/my-work/my-work';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        Hero,
        AboutMe,
        WorkExperience,
        TechnicalExpertise,
        MyWork,
        Contact,
    ],
})
export class App {
    constructor(protected animationService: AnimationService) {}
}
