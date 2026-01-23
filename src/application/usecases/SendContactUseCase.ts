import type { ContactSubmission } from '@/domain/entities/Contact';
import type { ContactService, ValidationResult } from '@/domain/services/ContactService';

/**
 * Use case for handling contact form submissions
 */
export class SendContactUseCase {
  constructor(private readonly contactService: ContactService) {}

  /**
   * Executes the use case to send a contact message
   */
  async execute(submission: Partial<ContactSubmission>): Promise<ContactResult> {
    // Validate the submission
    const validation = this.contactService.validateSubmission(submission);

    if (!validation.isValid) {
      return {
        success: false,
        errors: validation.errors,
      };
    }

    try {
      // Create complete submission with timestamp
      const completeSubmission: ContactSubmission = {
        name: submission.name!,
        email: submission.email!,
        subject: submission.subject!,
        message: submission.message!,
        timestamp: new Date(),
      };

      await this.contactService.sendMessage(completeSubmission);

      return {
        success: true,
        message: 'Message sent successfully!',
      };
    } catch (error) {
      return {
        success: false,
        errors: [
          {
            field: 'message',
            message: 'Failed to send message. Please try again later.',
          },
        ],
      };
    }
  }
}

export interface ContactResult {
  readonly success: boolean;
  readonly message?: string;
  readonly errors?: Array<{ field: keyof ContactSubmission; message: string }>;
}
