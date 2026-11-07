// @ts-check
import { defineConfig } from 'astro/config';
// Renseigner l'URL définitive dans l'environnement de l'hébergeur après validation.
export default defineConfig({ site: process.env.PORTFOLIO_SITE || undefined });
