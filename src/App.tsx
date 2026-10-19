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
    const hero=gsap.timeline({defaults:{ease:'power3.out'}});
    hero.fromTo('.cover .overline, .cover .cover-small',{y:34,autoAlpha:0,filter:'blur(10px)'},{y:0,autoAlpha:1,filter:'blur(0px)',duration:.85,stagger:.12},.12)
      .fromTo('.cover-title-word',{y:115,autoAlpha:0,rotateX:18,filter:'blur(8px)'},{y:0,autoAlpha:1,rotateX:0,filter:'blur(0px)',duration:1.35,ease:'expo.out'},.35)
      .fromTo('.cover .cover-swash',{scale:.3,rotation:-100,autoAlpha:0},{scale:1,rotation:-7,autoAlpha:1,duration:1.2,ease:'back.out(1.6)'},.95)
      .fromTo('.cover .cover-lead, .cover .scroll-cta',{y:25,autoAlpha:0},{y:0,autoAlpha:1,duration:.85,stagger:.14},.9)
      .fromTo('.cover-bottom > *',{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.7,stagger:.15},1.1);
    gsap.to('.cover-orbit-a',{rotation:360,duration:80,repeat:-1,ease:'none'});
    gsap.to('.cover-orbit-b',{rotation:-360,duration:110,repeat:-1,ease:'none'});
    gsap.to('.cover-star',{y:-14,rotation:24,duration:3.5,repeat:-1,yoyo:true,stagger:.5,ease:'sine.inOut'});
    gsap.to('.cover-content',{y:-65,opacity:.55,ease:'none',scrollTrigger:{trigger:'.cover',start:'top top',end:'bottom top',scrub:true}});
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
   if(window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches)return;
   const cover=document.querySelector<HTMLElement>('.cover');
   const title=document.querySelector<HTMLElement>('.cover-title-word');
   const button=document.querySelector<HTMLElement>('.cover .scroll-cta');
   if(!cover)return;
   const track=(ev:PointerEvent)=>{
     const r=cover.getBoundingClientRect();
     const x=(ev.clientX-r.left)/r.width, y=(ev.clientY-r.top)/r.height;
     cover.style.setProperty('--spot-x',(x*100).toFixed(1)+'%');
     cover.style.setProperty('--spot-y',(y*100).toFixed(1)+'%');
     if(title)gsap.to(title,{x:(x-.5)*20,y:(y-.5)*11,duration:.9,ease:'power3.out',overwrite:'auto'});
   };
   const reset=()=>{if(title)gsap.to(title,{x:0,y:0,duration:.8,ease:'power3.out'});if(button)gsap.to(button,{x:0,y:0,duration:.45,ease:'power3.out'})};
   const buttonMove=(ev:PointerEvent)=>{if(!button)return;const r=button.getBoundingClientRect();gsap.to(button,{x:(ev.clientX-r.left-r.width/2)*.13,y:(ev.clientY-r.top-r.height/2)*.18,duration:.45,ease:'power3.out',overwrite:'auto'})};
   cover.addEventListener('pointermove',track);
   cover.addEventListener('pointerleave',reset);
   button?.addEventListener('pointermove',buttonMove);
   button?.addEventListener('pointerleave',reset);
   return()=>{cover.removeEventListener('pointermove',track);cover.removeEventListener('pointerleave',reset);button?.removeEventListener('pointermove',buttonMove);button?.removeEventListener('pointerleave',reset);if(title)gsap.killTweensOf(title);if(button)gsap.killTweensOf(button)};
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
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@700;800;900&display=swap');
.intro-section .hello-copy h2{font-family:'Bodoni Moda','Times New Roman',serif;font-weight:900;letter-spacing:-.075em;line-height:1.05;font-size:clamp(82px,10.5vw,155px);margin:8px 0 16px}
.intro-section .designer-signature{display:table;position:relative;font-family:'DM Sans',Arial,sans-serif;font-weight:700;color:#1b1e18;font-size:clamp(15px,1.3vw,21px);letter-spacing:-.02em;line-height:1.5;margin:0 0 25px;padding:0 2px 7px}
.intro-section .designer-signature strong{font-weight:800}
.intro-section .designer-signature:after{content:'';position:absolute;left:0;right:0;bottom:2px;height:5px;background:#9ad742;border-radius:60% 20% 50% 15%;transform:rotate(-1.5deg);transform-origin:left center}
@media(max-width:650px){.intro-section .hello-copy h2{font-size:clamp(78px,19vw,116px)}}


/* Cinematic cover — deliberately scoped to the opening section. */
.cover{--spot-x:50%;--spot-y:45%;isolation:isolate;background:radial-gradient(ellipse at 50% 40%,#a52b26 0%,#751b1b 48%,#3f0d11 100%);min-height:100svh}
.cover::after{content:'';position:absolute;inset:0;pointer-events:none;z-index:0;background:radial-gradient(ellipse 52% 58% at var(--spot-x) var(--spot-y),#ff795321,transparent 80%);mix-blend-mode:screen}
.cover-noise{pointer-events:none;position:absolute;inset:0;z-index:0;opacity:.11;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.34'/%3E%3C/svg%3E")}
.cover-glow{position:absolute;inset:10% 20%;border-radius:50%;filter:blur(85px);opacity:.17;background:#fc7852;z-index:0;pointer-events:none}
.cover-orbit{position:absolute;left:50%;top:49%;border:1px solid #fff1e21a;pointer-events:none;border-radius:50%;transform-origin:center;z-index:0}
.cover-orbit-a{width:min(96vw,1100px);height:min(96vw,1100px);margin-left:calc(-1 * min(96vw,1100px)/2);margin-top:calc(-1 * min(96vw,1100px)/2);border-style:dashed}
.cover-orbit-b{width:min(70vw,800px);height:min(70vw,800px);margin-left:calc(-1 * min(70vw,800px)/2);margin-top:calc(-1 * min(70vw,800px)/2)}
.cover-star{position:absolute;color:#f7d4aa;opacity:.65;pointer-events:none;z-index:1}
.cover-star-a{left:8%;top:28%;font-size:clamp(20px,3vw,42px)}.cover-star-b{right:9%;bottom:25%;font-size:clamp(25px,4vw,55px)}
.cover .cover-content{z-index:2;max-width:1500px;will-change:transform;perspective:1200px}
.cover .cover-small{display:flex;justify-content:center;align-items:center;gap:22px}
.cover .hero-line{display:inline-block;width:clamp(30px,6vw,85px);height:2px;background:#a4e74b}
.cover .cover-title-word{display:inline-block;white-space:nowrap;font-size:clamp(49px,12vw,175px);line-height:1.25;letter-spacing:-.065em;text-shadow:4px 6px 0 #420a0d,0 18px 55px #28030b6b}
.cover .cover-swash{margin:8px auto 0;text-shadow:0 12px 22px #28030b55}
.cover .cover-lead{margin:45px 0 28px}
.cover .scroll-cta{position:relative;overflow:hidden;border:1px solid #ffe3c7a6;background:#fff1e70a;backdrop-filter:blur(8px);transition:box-shadow .4s,background .4s,color .4s}
.cover .scroll-cta:before{content:'';position:absolute;inset:0;background:#d0f18e;transform:translateY(103%);transition:transform .45s cubic-bezier(.2,.8,.2,1);z-index:-1}
.cover .scroll-cta:hover:before{transform:translateY(0)}
.cover .scroll-cta:hover{background:transparent;color:#25110d;box-shadow:0 16px 40px #1b050748}
.cover-scroll-indicator{position:absolute;bottom:31px;left:50%;transform:translateX(-50%);width:23px;height:39px;border:1px solid #ffecd288;border-radius:17px;display:grid;place-items:start center;padding-top:8px;z-index:3}
.cover-scroll-indicator span{width:3px;height:9px;background:#b5ec70;border-radius:3px;animation:cover-wheel 1.8s ease-in-out infinite}
@keyframes cover-wheel{0%{transform:translateY(0);opacity:1}80%{transform:translateY(14px);opacity:.1}100%{transform:translateY(0);opacity:0}}
.cover .cover-bottom{z-index:3}
@media(max-width:700px){.cover .cover-content{padding:100px 3%}.cover .cover-title-word{font-size:clamp(44px,11.4vw,90px)}.cover .cover-small{gap:7px;letter-spacing:.2em}.cover .hero-line{width:24px}.cover .cover-lead{margin-top:43px}.cover-scroll-indicator{bottom:55px}.cover .cover-bottom{bottom:15px}.cover-star{opacity:.35}}
@media(prefers-reduced-motion:reduce){.cover-scroll-indicator span{animation:none}.cover .cover-content,.cover .cover-title-word{will-change:auto}}

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
 <section className="cover heading-panel"><div className="panel-grid"/><div className="cover-noise" aria-hidden="true"/><div className="cover-glow" aria-hidden="true"/><div className="cover-orbit cover-orbit-a" aria-hidden="true"/><div className="cover-orbit cover-orbit-b" aria-hidden="true"/><span className="cover-star cover-star-a" aria-hidden="true">✳</span><span className="cover-star cover-star-b" aria-hidden="true">✦</span><div className="cover-content"><span className="overline">THE SELECTED WORK OF A GRAPHIC DESIGNER</span><span className="cover-small">GRAPHIC DESIGN <span className="hero-line"/></span><h1><span className="cover-title-word">PORTFOLIO</span><span className="swash cover-swash">❧</span></h1><p className="cover-lead">Ideas brought to life through bold visuals and thoughtful design.</p><a href="#hello" className="scroll-cta">EXPLORE THE PORTFOLIO <span>↓</span></a></div><div className="cover-bottom"><span>VISUAL IDENTITY · DIGITAL · PRINT</span><span>EST. 2026</span></div><a className="cover-scroll-indicator" href="#hello" aria-label="Scroll to introduction"><span/></a></section>
 <section className="intro-section" id="hello"><Accents/><div className="hello-copy"><span className="eyebrow">01 / THE DESIGNER BEHIND THE WORK</span><h2>HELLO<span>!</span></h2><div className="designer-signature">I am <strong>ABUBAKAR</strong></div><div className="scribble">Great to have you here.</div><p className="intro-name">I'm a graphic designer who turns ideas into memorable visual stories.</p><p>From distinctive logos to dynamic social media campaigns, I create purposeful identities and visuals that help brands connect with people.</p><a href="#branding" className="intro-link">DISCOVER MY WORK <span>↗</span></a><div className="intro-caption">CREATIVE THINKING · DESIGN WITH PURPOSE · 2026</div></div><div className="portrait-stage"><span className="portrait-behind-text" aria-hidden="true">CREATE<br/>INSPIRE</span><div className="portrait-orbit" aria-hidden="true"></div><div className="portrait-arch"><div className="portrait-halo"></div><img className="portrait-img" src="/images/designer-portrait.webp" alt="Graphic designer portrait" loading="eager"/></div><div className="portrait-label">THE FACE BEHIND THE DESIGNS <span>✳</span></div><div className="portrait-stamp">✦<br/>VISUAL<br/>STORYTELLER</div></div></section>
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
