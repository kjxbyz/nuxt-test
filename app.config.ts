export default defineAppConfig({
  vercelAnalytics: {
    mode: 'auto',
    beforeSend: (event: any) => {
      if (event.url.includes('/private')) return null

      return event
    },
  },
})
