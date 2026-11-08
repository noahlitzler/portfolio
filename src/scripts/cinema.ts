// Une seule initialisation par document ; navigation native Astro conservée.
document.documentElement.classList.add('cinema-ready');
const main = document.querySelector('main');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const stored = (key: string) => {try{return sessionStorage.getItem(key)}catch{return null}};
const remember = (key: string, value: string) => {try{sessionStorage.setItem(key,value)}catch{ /* lecture sans stockage */ }};
let effectsOff = stored('cinema-effects') === 'off';
document.documentElement.classList.toggle('effets-reduits', effectsOff);
if(location.pathname === '/' && !stored('cinema-intro')){
 document.documentElement.classList.add('premiere-seance');remember('cinema-intro','seen');
 setTimeout(()=>document.documentElement.classList.remove('premiere-seance'),1400);
}
// Révélations progressives : les contenus restent visibles sans JS ou en mouvement réduit.
const reveals = [...document.querySelectorAll<HTMLElement>('main .chapitre, main .scene, main .plan, main .presentation, main .programme, main .prochaine, main .film-programme, main .auteur-home, main .profil-detail')];
const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('dans-le-plan');observer.unobserve(entry.target)}}),{threshold:0.08});
reveals.forEach(el=>{if(el.getBoundingClientRect().top>innerHeight){el.classList.add('attente-plan');observer.observe(el)}});
const motion = document.querySelector<HTMLButtonElement>('[data-motion]');
function syncMotion(){document.documentElement.classList.toggle('effets-reduits',effectsOff);if(motion){motion.setAttribute('aria-pressed',String(effectsOff));motion.textContent = effectsOff || reduced.matches ? 'Effets : réduits':'Effets : actifs';}if(effectsOff || reduced.matches)reveals.forEach(el=>el.classList.add('dans-le-plan'));}
motion?.addEventListener('click',()=>{effectsOff=!effectsOff;remember('cinema-effects',effectsOff?'off':'on');syncMotion()});reduced.addEventListener('change',syncMotion);syncMotion();
// La progression du document est indiquée par un seul filet sous le menu.
let scheduled=false;
function updateReader(){scheduled=false;const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);document.documentElement.style.setProperty('--lecture',String(Math.max(0,Math.min(1,scrollY/max))));}
addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateReader)}},{passive:true});addEventListener('resize',updateReader);addEventListener('load',updateReader);updateReader();
// Galerie au clavier, regroupée par section, avec lien image natif en secours.
const gallery=document.querySelector<HTMLDialogElement>('.projection');
let items:HTMLAnchorElement[]=[];let active=0;let trigger:HTMLAnchorElement|null=null;
function showImage(){const item=items[active];if(!item||!gallery)return;const img=gallery.querySelector<HTMLImageElement>('img');if(img){img.src=item.href;img.alt=item.dataset.caption||'';}const caption=gallery.querySelector('figcaption');if(caption)caption.textContent=item.dataset.caption||'';const count=gallery.querySelector('.projection-compteur');if(count)count.textContent=(active+1)+' / '+items.length;gallery.querySelectorAll<HTMLButtonElement>('[data-gallery-prev],[data-gallery-next]').forEach(b=>b.disabled=items.length<2);}
document.querySelectorAll<HTMLAnchorElement>('[data-gallery]').forEach(link=>link.addEventListener('click',event=>{if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;event.preventDefault();trigger=link;items=[...(link.closest('section')||main||document).querySelectorAll<HTMLAnchorElement>('[data-gallery]')];active=items.indexOf(link);showImage();gallery?.showModal();}));
function step(n:number){if(items.length){active=(active+n+items.length)%items.length;showImage()}}
document.querySelector('[data-gallery-close]')?.addEventListener('click',()=>gallery?.close());document.querySelector('[data-gallery-prev]')?.addEventListener('click',()=>step(-1));document.querySelector('[data-gallery-next]')?.addEventListener('click',()=>step(1));gallery?.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();step(-1)}if(e.key==='ArrowRight'){e.preventDefault();step(1)}});gallery?.addEventListener('close',()=>trigger?.focus());gallery?.addEventListener('click',e=>{if(e.target===gallery){const r=gallery.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)gallery.close()}});
// Comparateur : le curseur natif fonctionne au toucher, à la souris et au clavier.
document.querySelectorAll<HTMLInputElement>('[data-compare]').forEach(input=>input.addEventListener('input',()=>{input.closest<HTMLElement>('.comparateur')?.style.setProperty('--comparaison',input.value+'%');input.setAttribute('aria-valuetext',input.value+' % de la proposition visible')}));
// Générique volontaire : lecture, pause, reprise ; coordonnées toujours hors du mouvement.
const credits=document.querySelector<HTMLElement>('.generique-final');const creditsButton=document.querySelector<HTMLButtonElement>('[data-credits]');
creditsButton?.addEventListener('click',()=>{if(!credits)return;const playing=credits.classList.toggle('en-lecture');creditsButton.textContent=playing?'Mettre le générique en pause':'Lire le générique';creditsButton.setAttribute('aria-pressed',String(playing));});
// Ambiance originale synthétisée : aucun fichier sonore ni requête externe.
let audio:AudioContext|null=null;let master:GainNode|null=null;let soundOn=false;
const sound=document.querySelector<HTMLButtonElement>('[data-sound]');
async function stopSound(){soundOn=false;if(master&&audio)master.gain.setTargetAtTime(0,audio.currentTime,.05);if(sound){sound.setAttribute('aria-pressed','false');sound.textContent='Son : coupé';}if(audio)await audio.suspend();}
sound?.addEventListener('click',async()=>{try{if(soundOn){await stopSound();return;}if(!audio){audio=new AudioContext();master=audio.createGain();master.gain.value=0;master.connect(audio.destination);const hum=audio.createOscillator();hum.type='sine';hum.frequency.value=60;const humGain=audio.createGain();humGain.gain.value=.05;hum.connect(humGain);humGain.connect(master);hum.start();const buffer=audio.createBuffer(1,audio.sampleRate,audio.sampleRate);const samples=buffer.getChannelData(0);for(let i=0;i<samples.length;i++)samples[i]=(Math.random()*2-1)*.025;const noise=audio.createBufferSource();noise.buffer=buffer;noise.loop=true;const filter=audio.createBiquadFilter();filter.type='lowpass';filter.frequency.value=800;noise.connect(filter);filter.connect(master);noise.start();}await audio.resume();master!.gain.setTargetAtTime(.35,audio.currentTime,.1);soundOn=true;sound.setAttribute('aria-pressed','true');sound.textContent='Son : actif';}catch{sound.textContent='Son indisponible';}});
document.addEventListener('visibilitychange',()=>{if(document.hidden)void stopSound()});addEventListener('pagehide',()=>{void stopSound()});
