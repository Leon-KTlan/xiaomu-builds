const Waline = require('@waline/vercel');

module.exports = Waline({
  preSave(comment) {
    const name = typeof comment.nick === 'string' ? comment.nick.trim() : '';
    const email = typeof comment.mail === 'string' ? comment.mail.trim() : '';

    if (!name || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { errmsg: 'Please provide a name and a valid email address.' };
    }
  },
});
