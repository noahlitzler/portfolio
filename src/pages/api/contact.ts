import type {APIRoute} from 'astro';
import {creerFormulaire} from '../../lib/contact.js';
export const prerender=false;
// Le drapeau public est fixé au build ; les identifiants SMTP restent privés à la fonction.
const traiter=creerFormulaire({env:{...process.env,PUBLIC_CONTACT_ACTIF:import.meta.env.PUBLIC_CONTACT_ACTIF}});
export const POST:APIRoute=({request,clientAddress})=>traiter(request,process.env.PORTFOLIO_CIBLE==='vps' ? request.headers.get('x-portfolio-client-ip')||clientAddress : clientAddress);
