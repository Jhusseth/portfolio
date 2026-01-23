/**
 * Contact form submission entity
 */
export interface ContactSubmission {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
  readonly timestamp: Date;
}

/**
 * Social media link entity
 */
export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly url: string;
  readonly username: string;
}

export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email' | 'website';
