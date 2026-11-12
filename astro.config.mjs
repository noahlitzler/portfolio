// @ts-check
import { defineConfig } from 'astro/config';
// Domaine confirmé par Noah ; PORTFOLIO_SITE permet un autre domaine selon l’environnement.
export default defineConfig({ site: process.env.PORTFOLIO_SITE || 'https://noahlitzler.fr' });
