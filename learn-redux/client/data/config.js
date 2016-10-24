import Raven from 'raven-js';

const sentry_key = '9f888e3d3df24036bc046a50eab06d7f';
const sentry_app = '108788';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
