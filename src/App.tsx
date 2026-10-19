import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';

const specialties = ['Logo Design','Branding','Social Media','Food Campaigns','Packaging Design','Real Estate'];
const logos = [{"name": "NOS Fragrances", "src": "/images/logos/logo-1.webp"}, {"name": "Imaan Fragrances", "src": "/images/logos/logo-2.webp"}, {"name": "Holidays by Meezab", "src": "/images/logos/logo-3.webp"}, {"name": "Sol Tekkers", "src": "/images/logos/logo-4.webp"}, {"name": "MA Digital", "src": "/images/logos/logo-5.webp"}, {"name": "Glow & Wear", "src": "/images/logos/logo-6.webp"}, {"name": "Quilim Restaurant", "src": "/images/logos/logo-7.webp"}, {"name": "LS News", "src": "/images/logos/logo-8.webp"}];
const projects = [{"name": "Aish Aloe Face Wash", "brand": "Aish Cosmetics", "src": "/images/posters/poster-1.webp"}, {"name": "Aish Egg Shampoo", "brand": "Aish Cosmetics", "src": "/images/posters/poster-2.webp"}, {"name": "Cooling Sensation", "brand": "Aish Cosmetics", "src": "/images/posters/poster-3.webp"}, {"name": "Papaya Glow", "brand": "Aish Cosmetics", "src": "/images/posters/poster-4.webp"}, {"name": "4DX Bleach Cream", "brand": "Aish Cosmetics", "src": "/images/posters/poster-5.webp"}, {"name": "Classic Karahi", "brand": "Dolphin Foods", "src": "/images/posters/poster-6.webp"}, {"name": "Karahi Gosht", "brand": "Dolphin Foods", "src": "/images/posters/poster-7.webp"}, {"name": "Qorma or Karahi", "brand": "Dolphin Foods", "src": "/images/posters/poster-8.webp"}, {"name": "Perfectly Positioned", "brand": "Raya Canal", "src": "/images/posters/poster-9.webp"}, {"name": "Escape into Prestige", "brand": "Raya Canal", "src": "/images/posters/poster-10.webp"}, {"name": "Raya Canal Sunset", "brand": "Raya Canal", "src": "/images/posters/poster-11.webp"}];
const thumbnails = [
 ['STILL FINISHING?','The design challenge','yellow'],['FUNNIEST MEME REVIEW','You won’t believe this','red'],['5 DESIGN HACKS','Level up today','blue'],['BEHIND THE SCENES','A day in my life','orange'],
 ['THE END OF AN ERA','Everything changes','dark'],['CREATIVE SECRETS','Tips you need','purple'],['MAKE IT POP','Design breakdown','olive'],['NEW BEGINNINGS','Big announcement','peach']
];
function HeadingPanel({word,detail}:{word:string;detail:string}){return <section className="heading-panel"><div className="panel-grid"/><div className="heading-content"><span className="panel-small">GRAPHIC DESIGN / PORTFOLIO</span><h2>{word}<span className="swash">❧</span></h2><p>{detail}</p></div><span className="panel-number">CREATIVE WORKS — 2026</span></section>}
function Accents(){return <div className="accents" aria-hidden="true"><span/><span/><span/></div>}
function App(){
 const [progress,setProgress]=useState(0);
 useEffect(()=>{let raf=0;const onScroll=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>setProgress(window.scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)))};onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>{cancelAnimationFrame(raf);window.removeEventListener('scroll',onScroll)}},[]);
 useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const ctx=gsap.context(()=>{
    gsap.fromTo('.cover-content > *',{y:55,autoAlpha:0},{y:0,autoAlpha:1,duration:1.15,stagger:.13,ease:'power3.out',delay:.12});
    gsap.fromTo('.hello-copy > *',{y:62,autoAlpha:0},{y:0,autoAlpha:1,duration:1,stagger:.12,ease:'power3.out',scrollTrigger:{trigger:'.intro-section',start:'top 70%',once:true}});
    gsap.fromTo('.portrait-arch',{autoAlpha:0,y:42,scale:.95},{autoAlpha:1,y:0,scale:1,duration:1.25,ease:'power3.out',scrollTrigger:{trigger:'.intro-section',start:'top 66%',once:true}});
    gsap.fromTo('.portrait-img',{autoAlpha:0},{autoAlpha:1,duration:1.1,ease:'power2.out',scrollTrigger:{trigger:'.intro-section',start:'top 65%',once:true}});
    gsap.to('.portrait-orbit',{rotation:110,ease:'none',scrollTrigger:{trigger:'.intro-section',start:'top bottom',end:'bottom top',scrub:true}});
    gsap.utils.toArray<HTMLElement>('.heading-content, .section-big, .contents-heading, .campaign-feature').forEach(el=>{gsap.fromTo(el,{y:75,autoAlpha:0},{y:0,autoAlpha:1,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 85%',once:true}})});
    gsap.utils.toArray<HTMLElement>('.real-project-grid, .logo-grid, .contents-grid').forEach(grid=>{
      const cards=Array.from(grid.children) as HTMLElement[];
      cards.forEach((el,i)=>{
        gsap.fromTo(el,{x:i%2===0?-65:65,y:28,autoAlpha:0,rotate:i%2===0?-1.5:1.5},
          {x:0,y:0,autoAlpha:1,rotate:0,duration:1.05,delay:(i%4)*.09,ease:'power3.out',clearProps:'transform,opacity,visibility',
            scrollTrigger:{trigger:el,start:'top 94%',once:true}});
      });
    });
    gsap.utils.toArray<HTMLElement>('.section-top, .panel-small, .heading-panel:not(.cover):not(.final-section) .panel-number').forEach(el=>{
      gsap.fromTo(el,{y:25,autoAlpha:0},{y:0,autoAlpha:1,duration:.8,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}});
    });
    
  });
  return()=>{ctx.revert();};
 },[]);
 useEffect(()=>{
   // Pointer-responsive recessed 3D motion. Touch and reduced-motion users keep static cards.
   if(window.matchMedia('(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)').matches)return;
   const cards=Array.from(document.querySelectorAll<HTMLElement>('.real-project, .logo-tile, .content-item'));
   const cleanups=cards.map(card=>{
     const max=card.classList.contains('real-project')?8:5;
     const toX=gsap.quickTo(card,'rotationX',{duration:.48,ease:'power3.out'});
     const toY=gsap.quickTo(card,'rotationY',{duration:.48,ease:'power3.out'});
     gsap.set(card,{transformPerspective:850,transformOrigin:'50% 50%',transformStyle:'preserve-3d'});
     const move=(ev:PointerEvent)=>{
       const r=card.getBoundingClientRect();
       const x=(ev.clientX-r.left)/r.width-.5;
       const y=(ev.clientY-r.top)/r.height-.5;
       // Cursor side recedes inward, rather than bulging outward.
       toX(y*max*2);
       toY(-x*max*2);
     };
     const leave=()=>{toX(0);toY(0)};
     card.addEventListener('pointermove',move);
     card.addEventListener('pointerleave',leave);
     card.addEventListener('pointercancel',leave);
     return ()=>{card.removeEventListener('pointermove',move);card.removeEventListener('pointerleave',leave);card.removeEventListener('pointercancel',leave);gsap.killTweensOf(card);gsap.set(card,{clearProps:'rotationX,rotationY,transformPerspective,transformOrigin,transformStyle'})};
   });
   return()=>cleanups.forEach(fn=>fn());
 },[]);
 return <main id="top"><style>{`
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
.intro-section .hello-copy h2{font-family:'Abril Fatface',Georgia,serif;font-weight:400;letter-spacing:-.055em;line-height:1.05;font-size:clamp(82px,10.5vw,155px);margin:8px 0 16px}
.intro-section .designer-signature{display:table;position:relative;font-family:'DM Sans',Arial,sans-serif;font-weight:700;color:#1b1e18;font-size:clamp(15px,1.3vw,21px);letter-spacing:-.02em;line-height:1.5;margin:0 0 25px;padding:0 2px 7px}
.intro-section .designer-signature strong{font-weight:800}
.intro-section .designer-signature:after{content:'';position:absolute;left:0;right:0;bottom:2px;height:5px;background:#9ad742;border-radius:60% 20% 50% 15%;transform:rotate(-1.5deg);transform-origin:left center}
@media(max-width:650px){.intro-section .hello-copy h2{font-size:clamp(78px,19vw,116px)}}

/* Premium hover treatments: children animate independently from GSAP-revealed cards. */
.real-project{position:relative;isolation:isolate;border-radius:10px;transition:box-shadow .45s cubic-bezier(.2,.7,.2,1),background .35s!important;overflow:hidden}
.real-project:hover{box-shadow:0 24px 58px #18231732!important;background:#f0f5e8}
.real-project:before{content:'';position:absolute;inset:0 0 70px;pointer-events:none;background:linear-gradient(180deg,transparent 55%,#111a1666);z-index:2;opacity:0;transition:opacity .55s}
.real-project:hover:before{opacity:1}
.real-project img{transition:transform .75s cubic-bezier(.2,.75,.2,1),filter .55s!important;transform-origin:center;will-change:transform}
.real-project:hover img{transform:scale(1.075)!important;filter:saturate(1.13) contrast(1.04)!important}
.real-project div{position:relative;z-index:3;transition:padding .35s}
.real-project:hover div{padding-left:19px}
.logo-tile{transition:box-shadow .45s,background .45s,border-radius .45s!important;overflow:hidden}
.logo-tile:hover{background:#e3efd9!important;box-shadow:0 22px 48px #24371b25!important;border-radius:22px}
.logo-tile img{transition:transform .65s cubic-bezier(.2,.8,.2,1),filter .5s}
.logo-tile:hover img{transform:scale(1.09) rotate(-2deg);filter:drop-shadow(0 12px 13px #23361c2b)}
.content-item{position:relative;overflow:hidden}
.content-item:before{content:'';position:absolute;inset:0;background:linear-gradient(120deg,transparent,#b9ed7e55,transparent);transform:translateX(-120%);transition:transform .7s;pointer-events:none}
.content-item:hover:before{transform:translateX(120%)}
@media (hover:none){.real-project img{will-change:auto}}
@media(prefers-reduced-motion:reduce){.real-project img,.logo-tile img,.real-project,.logo-tile,.content-item:before{transition:none!important;transform:none!important}}
`}</style><div className="progress" style={{transform:`scaleX(${progress})`}}/><nav className="navigation"><a href="#top" className="mini-brand">DESIGN<span>FOLIO</span></a><div><a href="#contents">Explore</a><a href="#branding">Branding</a><a href="#social">Social media</a><a href="#contact">Contact ↗</a></div></nav>
 <section className="cover heading-panel"><div className="panel-grid"/><div className="cover-content"><span className="overline">THE SELECTED WORK OF A GRAPHIC DESIGNER</span><span className="cover-small">GRAPHIC DESIGN</span><h1>PORTFOLIO<span className="swash cover-swash">❧</span></h1><p>Ideas brought to life through bold visuals and thoughtful design.</p><a href="#hello" className="scroll-cta">EXPLORE THE PORTFOLIO <span>↓</span></a></div><div className="cover-bottom"><span>VISUAL IDENTITY · DIGITAL · PRINT</span><span>EST. 2026</span></div></section>
 <section className="intro-section" id="hello"><Accents/><div className="hello-copy"><span className="eyebrow">01 / THE DESIGNER BEHIND THE WORK</span><h2>HELLO<span>!</span></h2><div className="designer-signature">I am <strong>ABUBAKAR'S</strong></div><div className="scribble">Great to have you here.</div><p className="intro-name">I'm a graphic designer who turns ideas into memorable visual stories.</p><p>From distinctive logos to dynamic social media campaigns, I create purposeful identities and visuals that help brands connect with people.</p><a href="#branding" className="intro-link">DISCOVER MY WORK <span>↗</span></a><div className="intro-caption">CREATIVE THINKING · DESIGN WITH PURPOSE · 2026</div></div><div className="portrait-stage"><span className="portrait-behind-text" aria-hidden="true">CREATE<br/>INSPIRE</span><div className="portrait-orbit" aria-hidden="true"></div><div className="portrait-arch"><div className="portrait-halo"></div><img className="portrait-img" src="/images/designer-portrait.webp" alt="Graphic designer portrait" loading="eager"/></div><div className="portrait-label">THE FACE BEHIND THE DESIGNS <span>✳</span></div><div className="portrait-stamp">✦<br/>VISUAL<br/>STORYTELLER</div></div></section>
 <section className="contents-section" id="contents"><Accents/><div className="eyebrow">02 / WHAT'S INSIDE</div><div className="contents-heading"><span className="handwritten">Table of</span><h2>Contents<span>.</span></h2></div><div className="contents-grid">{specialties.map((s,i)=><a href={['#branding','#branding','#social','#thumbnails','#packaging','#print'][i]} className="content-item" key={s}><span className="content-count">0{i+1}</span><strong>{s.split(' ')[0]}<br/>{s.split(' ').slice(1).join(' ')}</strong><span>↗</span></a>)}</div></section>
 <section className="logo-showcase light-section" id="branding"><div className="section-top"><span className="eyebrow">03 / IDENTITY DESIGN</span><span>SELECTED BRAND MARKS</span></div><div className="logo-grid">{logos.map((logo)=><div className="logo-tile genuine-logo" key={logo.name}><img src={logo.src} alt={logo.name+ ' logo design'} loading="lazy"/><small>{logo.name}</small></div>)}</div><Accents/></section>
 <HeadingPanel word="BRANDING" detail="Brand identity designs that shape meaningful experiences through visual identity, purpose, and personality."/>
 <section className="brand-case light-section"><div className="section-top"><span className="eyebrow">04 / CAMPAIGN IDENTITY</span><span>REAL CLIENT CREATIVE WORK</span></div><div className="campaign-feature"><div><span className="eyebrow">FEATURED CAMPAIGN / AISH COSMETICS</span><h2>Creative that feels fresh.</h2><p>Product-led visuals featuring bold typography, color storytelling, and carefully composed consumer campaigns.</p></div><img src="/images/posters/poster-4.webp" alt="Aish Papaya Glow campaign design" loading="lazy"/></div><Accents/></section>
 <HeadingPanel word="SOCIAL MEDIA" detail="Creative social posts designed to grab attention, spark interest, and build stronger brand connections."/>
 <section className="social-section light-section" id="social"><div className="section-top"><span className="eyebrow">05 / DIGITAL DESIGN</span><span>ACTUAL CLIENT CAMPAIGNS</span></div><h2 className="section-big">Made to <em>stop</em> the scroll.</h2><div className="real-project-grid">{projects.slice(0,8).map((project)=><a href={project.src} target="_blank" rel="noreferrer" key={project.name} className="real-project"><img src={project.src} alt={project.name+ ' social media campaign by '+project.brand} loading="lazy"/><div><strong>{project.name}</strong><span>{project.brand} ↗</span></div></a>)}</div><Accents/></section>
 <section className="packaging-section light-section" id="packaging"><div className="section-top"><span className="eyebrow">06 / PRODUCT DESIGN</span><span>PRODUCT PROMOTIONAL ARTWORK</span></div><h2 className="section-big">Products with <em>presence.</em></h2><div className="real-project-grid featured-three">{[projects[0],projects[3],projects[4]].map(project=><a className="real-project" key={project.name} href={project.src} target="_blank" rel="noreferrer"><img src={project.src} alt={project.name} loading="lazy"/><div><strong>{project.name}</strong><span>{project.brand} ↗</span></div></a>)}</div><Accents/></section>
 <HeadingPanel word="PRINT MEDIA" detail="High-quality print design crafted with purposeful layout, strong visual hierarchy, and attention to every detail."/>
 <section className="print-section light-section" id="print"><div className="section-top"><span className="eyebrow">07 / REAL ESTATE ADVERTISING</span><span>RAYA CANAL CAMPAIGN</span></div><div className="real-project-grid featured-three">{projects.slice(8,11).map(project=><a className="real-project" key={project.name} href={project.src} target="_blank" rel="noreferrer"><img src={project.src} alt={project.name} loading="lazy"/><div><strong>{project.name}</strong><span>{project.brand} ↗</span></div></a>)}</div><Accents/></section>
 <HeadingPanel word="FOOD CAMPAIGNS" detail="Appetizing promotional visuals designed for bold, memorable food brands."/>
 <section className="thumbnail-section light-section" id="thumbnails"><div className="section-top"><span className="eyebrow">08 / FOOD ADVERTISING</span><span>DOLPHIN FOODS CAMPAIGN</span></div><div className="real-project-grid featured-three">{projects.slice(5,8).map(project=><a className="real-project" key={project.name} href={project.src} target="_blank" rel="noreferrer"><img src={project.src} alt={project.name} loading="lazy"/><div><strong>{project.name}</strong><span>{project.brand} ↗</span></div></a>)}</div><Accents/></section>
 <section className="final-section heading-panel" id="contact"><div className="panel-grid"/><span className="eyebrow">THE NEXT GREAT PROJECT STARTS HERE</span><h2>LET'S MAKE<br/><em>SOMETHING</em><br/>GREAT.</h2><a href="https://wa.me/923258757668?text=Hi%20Abubakar%2C%20I%27d%20like%20to%20discuss%20a%20design%20project." target="_blank" rel="noopener noreferrer">GET IN TOUCH ↗</a><p>THANK YOU FOR EXPLORING MY PORTFOLIO.</p></section>
 <footer><span>© {new Date().getFullYear()} DESIGNFOLIO</span><a href="#top">BACK TO TOP ↑</a><span>MADE WITH PURPOSE.</span></footer>
 </main>
}
export default App;
