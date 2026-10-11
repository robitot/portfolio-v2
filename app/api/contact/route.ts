import { NextResponse } from 'next/server';
import { hasErrors, validateContact } from '@/lib/validators';
import type { ContactValues } from '@/types';

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const b = (raw ?? {}) as Record<string, unknown>;
  const values: ContactValues = {
    name: typeof b.name === 'string' ? b.name : '',
    email: typeof b.email === 'string' ? b.email : '',
    message: typeof b.message === 'string' ? b.message : '',
  };
  const errors = validateContact(values);
  if (hasErrors(errors)) return NextResponse.json({ errors }, { status: 422 });

  // TODO: deliver the message. For example, with Formspree:
  // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(values),
  // });
  // or with Resend / EmailJS. Keep API keys in .env.local, never in the client.
  console.log('Contact form submission:', values.email);

  return NextResponse.json({ ok: true });
}
