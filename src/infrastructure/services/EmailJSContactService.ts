import emailjs from '@emailjs/browser';
import type { ContactSubmission } from '@/domain/entities/Contact';
import type { ContactService, ValidationResult, ValidationError } from '@/domain/services/ContactService';

/**
 * EmailJS implementation of ContactService
 */
export class EmailJSContactService implements ContactService {
  private readonly serviceId: string;
  private readonly templateId: string;
  private readonly publicKey: string;

  constructor() {
    this.serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    this.templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    this.publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
  }

  async sendMessage(submission: ContactSubmission): Promise<void> {
    if (!this.serviceId || !this.templateId || !this.publicKey) {
      throw new Error('EmailJS configuration is missing');
    }

    const templateParams = {
      from_name: submission.name,
      from_email: submission.email,
      subject: submission.subject,
      message: submission.message,
      to_name: 'Portfolio Owner',
    };

    try {
      await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey
      );
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error('Failed to send message');
    }
  }

  validateSubmission(submission: Partial<ContactSubmission>): ValidationResult {
    const errors: ValidationError[] = [];

    // Validate name
    if (!submission.name || submission.name.trim().length < 2) {
      errors.push({
        field: 'name',
        message: 'nameRequired',
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!submission.email || !emailRegex.test(submission.email)) {
      errors.push({
        field: 'email',
        message: 'emailInvalid',
      });
    }

    // Validate subject
    if (!submission.subject || submission.subject.trim().length < 5) {
      errors.push({
        field: 'subject',
        message: 'subjectRequired',
      });
    }

    // Validate message
    if (!submission.message || submission.message.trim().length < 10) {
      errors.push({
        field: 'message',
        message: 'messageRequired',
      });
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}