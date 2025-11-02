import { Component, signal, ViewChild } from '@angular/core';
import { IntersectionDirective } from './directives/intersection';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, NgForm } from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    standalone: true,
    imports: [IntersectionDirective, ReactiveFormsModule, NgClass],
})
export class App {
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

    handleViewChange(event: any, animationClasses: string) {
        if (event.isIntersecting) {
            // Add the animation class when the element is in view
            event.target.classList.add(...animationClasses.split(' '));
        }
    }

    public sendEmail() {
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
                        'Failed to send the message. I probably ran out of credits to send mails. Please contact me directly at vjiwane27@gmail.com.',
                    );
                },
            );
    }
}
