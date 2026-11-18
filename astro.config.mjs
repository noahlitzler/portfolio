// @ts-check
import {defineConfig} from 'astro/config';
import netlify from '@astrojs/netlify';
export default defineConfig({
  site:process.env.PORTFOLIO_SITE||'https://noahlitzler.fr',
  output:'server',
  adapter:netlify({imageCDN:false}),
  session:false,
  // Domaines autorisés pour les requêtes du portfolio.
  security:{allowedDomains:[
    {hostname:'noahlitzler.fr',protocol:'https'},
    {hostname:'www.noahlitzler.fr',protocol:'https'},
    {hostname:'localhost',protocol:'http'},
    {hostname:'127.0.0.1',protocol:'http'}
  ]}
});
