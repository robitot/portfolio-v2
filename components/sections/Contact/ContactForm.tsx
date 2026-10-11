'use client';

import { useState, type FormEvent } from 'react';
import Button from '@/components/ui/Button/Button';
import Reveal from '@/components/ui/Reveal/Reveal';
import { hasErrors, validateContact } from '@/lib/validators';
import type { ContactValues } from '@/types';

type Status = 'idle' | 'sending' | 'sent' | 'error';
const EMPTY: ContactValues = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [tried, setTried] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const errors = tried ? validateContact(values) : {};

  const set = (k: keyof ContactValues) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setTried(true);
    if (hasErrors(validateContact(values))) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  function reset() {
    setValues(EMPTY);
    setTried(false);
    setStatus('idle');
  }

  return (
    <Reveal className="form">
      {status === 'sent' ? (
        <div className="ok" role="status">
          <h3>Thanks, {values.name}!</h3>
          <p style={{ fontSize: 17, lineHeight: 1.6 }}>
            Your message is on its way. I&apos;ll get back to you at {values.email} soon.
          </p>
          <Button variant="alt" onClick={reset}>
            Send another
          </Button>
        </div>
      ) : (
        <form noValidate onSubmit={onSubmit}>
          <div className="fld">
            <label htmlFor="f-name">NAME</label>
            <input
              id="f-name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={set('name')}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="err">{errors.name}</p>}
          </div>
          <div className="fld">
            <label htmlFor="f-email">EMAIL</label>
            <input
              id="f-email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={set('email')}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="err">{errors.email}</p>}
          </div>
          <div className="fld">
            <label htmlFor="f-msg">MESSAGE</label>
            <textarea
              id="f-msg"
              value={values.message}
              onChange={set('message')}
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="err">{errors.message}</p>}
          </div>
          {status === 'error' && (
            <p className="err" role="alert" style={{ marginBottom: 16 }}>
              Something went wrong sending your message. Please try again, or email me directly.
            </p>
          )}
          <Button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </Reveal>
  );
}
