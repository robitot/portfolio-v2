import type { ContactErrors, ContactValues } from '@/types';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(v: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (v.name.trim().length < 2) errors.name = 'Please add your name.';
  if (!EMAIL.test(v.email.trim())) errors.email = 'Please enter a valid email address.';
  if (v.message.trim().length < 10)
    errors.message = 'Tell me a little more (at least 10 characters).';
  return errors;
}

export const hasErrors = (e: ContactErrors) => Object.keys(e).length > 0;
