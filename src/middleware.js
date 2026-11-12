import {defineMiddleware} from 'astro:middleware';
import {parcourirHTML} from './i18n/html.js';
import {traduire} from './i18n/traduire.js';
// Astro exécute aussi ce traitement lors de la génération des pages statiques.
export const onRequest=defineMiddleware(async (contexte,suite)=>{
  const reponse=await suite();
  if(!/^\/en(?:\/|$)/.test(contexte.url.pathname) || !reponse.headers.get('content-type')?.includes('text/html'))return reponse;
  const html=parcourirHTML(await reponse.text(),traduire,true);
  const entetes=new Headers(reponse.headers);entetes.delete('content-length');
  return new Response(html,{status:reponse.status,headers:entetes});
});
