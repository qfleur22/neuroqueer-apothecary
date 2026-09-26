import { defineCloudflareConfig } from '@opennextjs/cloudflare'

export default {
  ...defineCloudflareConfig(),
  // OpenNext defaults to `npm run build`. That script is this adapter, so
  // without an explicit Next command the Cloudflare build calls itself forever.
  buildCommand: 'NEXT_TELEMETRY_DISABLED=1 next build',
}
