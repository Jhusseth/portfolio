import type { ContactSubmission } from '../entities/Contact';

/**
 * Service interface for contact operations
 */
export interface ContactService {
  /**
   * Sends a contact form submission
   */
  sendMessage(submission: ContactSubmission): Promise<void>;

  /**
   * Validates contact form data
   */
  validateSubmission(submission: Partial<ContactSubmission>): ValidationResult;
}

export interface ValidationResult {
  readonly isValid: boolean;
  readonly errors: ValidationError[];
}

export interface ValidationError {
  readonly field: keyof ContactSubmission;
  readonly message: string;
}
