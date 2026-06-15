import { createClientFromRequest } from 'npm:@base44/sdk@0.8.20';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const payload = await req.json();

    const data = payload?.data?.data || payload?.data || {};

    // Find the sales user by email
    const users = await base44.asServiceRole.entities.User.filter({ email: 'sales@innovasights.com' });

    if (!users || users.length === 0) {
      return Response.json({ error: 'Sales user not found in app' }, { status: 404 });
    }

    const salesUser = users[0];

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: salesUser.email,
      from_name: 'INNOVASIGHTS Website',
      subject: `New Contact Form Submission from ${data.name || 'Unknown'}`,
      body: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name || '-'}</p>
        <p><strong>Email:</strong> ${data.email || '-'}</p>
        <p><strong>Phone:</strong> ${data.phone || '-'}</p>
        <p><strong>Company:</strong> ${data.company || '-'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || '-'}</p>
      `
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});