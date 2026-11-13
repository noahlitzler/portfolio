// @ts-check
import {defineConfig} from 'astro/config';
import node from '@astrojs/node';
export default defineConfig({
  site:process.env.PORTFOLIO_SITE||'https://noahlitzler.fr',
  output:'server',
  adapter:node({mode:'standalone',bodySizeLimit:16384}),
  session:false,
  // Apache conserve le domaine et signale HTTPS au serveur Astro.
  security:{allowedDomains:[
    {hostname:'noahlitzler.fr',protocol:'https'},
    {hostname:'www.noahlitzler.fr',protocol:'https'},
    {hostname:'localhost',protocol:'http'},
    {hostname:'127.0.0.1',protocol:'http'}
  ]}
});
