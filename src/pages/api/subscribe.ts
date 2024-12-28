import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    // Here you would typically integrate with your email service provider
    // For example, using Mailchimp, SendGrid, etc.

    // Simulating API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success response
    return res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
