import { Component, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { AnimationService } from '../../services/animation';
import { DataService } from '../../services/data-service';
import { iContact } from '../../interfaces/contact';
@Component({
    selector: 'app-contact',
    imports: [ReactiveFormsModule],
    templateUrl: './contact.html',
    styleUrl: './contact.scss',
    standalone: true,
})
export class Contact implements OnInit {
    protected contact: iContact | null = null;
    protected safeHTMLLinks: {
        label: string;
        url: string;
        iconSVG: SafeHtml;
    }[] = [];
    emailSent = signal(false);
    emailForm = new FormGroup(
        {
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            title: new FormControl('', Validators.required),
            message: new FormControl('', Validators.required),
        },
        {
            updateOn: 'change',
        },
    );
    constructor(
        protected animationService: AnimationService,
        private dataService: DataService,
        private sanitizer: DomSanitizer,
    ) {}

    ngOnInit(): void {
        this.contact = this.dataService.data.contact;
        this.safeHTMLLinks = this.contact.links.map((l) => ({
            ...l,
            iconSVG: this.sanitizer.bypassSecurityTrustHtml(l.iconSVG),
        }));
    }

    sendEmail() {
        emailjs
            .send(
                'service_p6epjnl',
                'template_r907mj4',
                {
                    ...this.emailForm.value,
                },
                {
                    publicKey: '9z5tnKtdB_iK5PmTE',
                },
            )
            .then(
                () => {
                    this.emailSent.set(true);
                    this.emailForm.reset();
                },
                (error) => {
                    // Display toast notification for failure
                    alert(
                        `Failed to send the message. I probably ran out of credits to send mails. Please contact me directly at ${this.contact?.email} or ${this.contact?.phone}.`,
                    );
                },
            );
    }
}
