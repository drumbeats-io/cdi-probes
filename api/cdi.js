// Vercel Cron (Hobby): runs once a day, see vercel.json. Only Vercel's cron caller may trigger it.
module.exports = async (req, res) => {
  if (!String(req.headers['user-agent'] || '').startsWith('vercel-cron/')) {
    return res.status(403).send('forbidden');
  }
  await fetch(`${process.env.DRUMBEATS_BASE}/cdi-vercel-daily-09/success`);
  res.status(200).send('ok');
};
