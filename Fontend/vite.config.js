export default defineConfig({
  plugins: [tailwindcss(), react()],
  preview: {
    host: true,
    allowedHosts: true
  }
});