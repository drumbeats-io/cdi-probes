// Netlify Scheduled Function: every 15 minutes, UTC.
export default async () => {
  await fetch(`${process.env.DRUMBEATS_BASE}/cdi-netlify-15m/success`);
  return new Response('ok');
};

export const config = { schedule: '*/15 * * * *' };
