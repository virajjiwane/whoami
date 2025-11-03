import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { AnimationService } from '../../services/animation';
@Component({
    selector: 'app-contact',
    imports: [ReactiveFormsModule],
    templateUrl: './contact.html',
    styleUrl: './contact.scss',
    standalone: true,
})
export class Contact {
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
    constructor(protected animationService: AnimationService) {}

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
                        'Failed to send the message. I probably ran out of credits to send mails. Please contact me directly at vjiwane27@gmail.com.',
                    );
                },
            );
    }
}
