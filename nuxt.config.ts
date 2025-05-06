// this import can be removed if you don't need to display the version on the page
import pkg from './package.json'

export default defineNuxtConfig({
  app:{
    head: {
    title: 'jom test liff 001',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  },
  vite: {
    server: {
      allowedHosts: ['efb6-1-47-153-126.ngrok-free.app']
    }
  },
  plugins:[],
  runtimeConfig: {
    public: {
      LIFF_ID: process.env.LIFF_ID,
      VERSION: pkg.version || '0.1.0',
    },
  },
})