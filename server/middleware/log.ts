export default defineEventHandler((event) => {
  console.log('event', event)
  console.log('New request: ' + getRequestURL(event))
})
