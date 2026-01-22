import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SendContactUseCase } from '@/application/usecases/SendContactUseCase';
import { EmailJSContactService } from '@/infrastructure/services/EmailJSContactService';
import { Button } from '@/presentation/components/atoms/Button/Button';
import { Input } from '@/presentation/components/atoms/Input/Input';
import { Textarea } from '@/presentation/components/atoms/Textarea/Textarea';
import { Card } from '@/presentation/components/atoms/Card/Card';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { SOCIAL_LINKS } from '@/shared/constants/navigation';
import { fadeInUp, staggerContainer } from '@/shared/utils/animations';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

/**
 * Contact section with form and social links
 */
export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2 });
  const { t } = useLanguage();

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    email: Mail,
    website: Mail,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const contactService = new EmailJSContactService();
      const useCase = new SendContactUseCase(contactService);
      const result = await useCase.execute(formData);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        if (result.errors) {
          const newErrors: FormErrors = {};
          result.errors.forEach(error => {
            newErrors[error.field] = t(`contact.form.validation.${error.field}Required`) || error.message;
          });
          setErrors(newErrors);
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  {t('contact.form.title')}
                </h3>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg dark:bg-green-900/20 dark:border-green-800">
                    <p className="text-green-800 dark:text-green-200">
                      {t('contact.form.success')}
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && !Object.keys(errors).length && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg dark:bg-red-900/20 dark:border-red-800">
                    <p className="text-red-800 dark:text-red-200">
                      {t('contact.form.error')}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label={t('contact.form.name')}
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      error={errors.name}
                      required
                    />
                    <Input
                      label={t('contact.form.email')}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      required
                    />
                  </div>
                  
                  <Input
                    label={t('contact.form.subject')}
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    error={errors.subject}
                    required
                  />
                  
                  <Textarea
                    label={t('contact.form.message')}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    error={errors.message}
                    rows={5}
                    required
                  />

                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  {t('contact.info.title')}
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>{t('contact.info.description1')}</p>
                  <p>{t('contact.info.description2')}</p>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {t('contact.social.title')}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = socialIcons[link.platform];
                    return (
                      <motion.a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  {t('contact.social.available')}
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};