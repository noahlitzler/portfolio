import type {APIRoute} from 'astro';
import {creerFormulaire} from '../../lib/contact.js';
export const prerender=false;
const traiter=creerFormulaire();
export const POST:APIRoute=({request,clientAddress})=>traiter(request,request.headers.get('x-portfolio-client-ip')||clientAddress);
