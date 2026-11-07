import type { APIRoute } from 'astro';
import {projets} from '../data/projets.js';
export const GET: APIRoute = ({site}) => {
 const routes=['','projets/','a-propos/','contact/',...projets.map(p=>'projets/'+p.slug+'/')];
 const urls=site?routes.map(p=>'<url><loc>'+new URL(p,site).href+'</loc></url>').join(''):'';
 return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls+'</urlset>',{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
