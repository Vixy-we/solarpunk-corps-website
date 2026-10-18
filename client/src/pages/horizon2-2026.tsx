import { useEffect, useRef } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SEO } from "@/components/seo";

const recapHtml = String.raw`<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style></head><body>
<title>Horizon 2.0 Recap</title>
<meta name="claude:viewport-fit-sides" content="cover">
<script>document.documentElement.classList.add('js')</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anybody:wdth,wght@50..150,100..900&family=Hanken+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
<style>
/* Layout: a fixed sky runs dawn to night as the page scrolls. A sun crosses it, a ground silhouette with turbines and a rover sits at the bottom. Solid cut-corner panels carry all text, so contrast never depends on the sky. */
:root{
  --ink:#0B1812; --moss:#1D3B2B; --leaf:#7BE495; --sun:#FFB81F; --ember:#FF5A36; --sky:#8FD0F0;
  --paper:#EDF3E4; --dim:#9FB3A3; --line:rgba(237,243,228,.2);
  --f-display:'Anybody','Arial Narrow','Helvetica Neue',Arial,sans-serif;
  --f-body:'Hanken Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --f-mono:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace;
  --sky-top:#27466A; --sky-bot:#F59E5B; --ground:#14301F; --ground2:#27503A; --nav-bg:rgba(8,18,13,.8);
  color-scheme:dark;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:64px}
body{margin:0;background:var(--ink);color:var(--paper);font-family:var(--f-body);font-size:16px;line-height:1.6;
  padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
body::before{content:"";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);z-index:30;background:var(--nav-bg)}
h1,h2,h3,p{margin:0}
h2{font-family:var(--f-display);font-weight:850;font-stretch:130%;font-size:clamp(1.9rem,5vw,3.6rem);line-height:.98;text-wrap:balance;letter-spacing:-.01em}
h3{font-family:var(--f-display);font-weight:800;font-stretch:115%;font-size:1.25rem;line-height:1.1}
a{color:inherit}
:focus-visible{outline:3px solid var(--sun);outline-offset:3px}
.eyebrow{font:600 .72rem/1.3 var(--f-mono);letter-spacing:.14em;text-transform:uppercase}
.lead{font-size:1.06rem;max-width:56ch;margin-top:14px}
.wrap{max-width:1180px;margin-inline:auto}
main{position:relative;overflow-x:clip}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.chip{display:inline-block;padding:6px 10px;border:1.5px solid currentColor;font:600 .7rem/1 var(--f-mono);letter-spacing:.06em;text-transform:uppercase}

/* sky layers */
#sky{position:fixed;inset:0;z-index:0;background:linear-gradient(var(--sky-top),var(--sky-bot))}
#stars{position:fixed;inset:0;z-index:0;opacity:0;pointer-events:none}
#stars i{position:absolute;background:#fff;border-radius:50%;animation:tw 3.2s ease-in-out infinite}
@keyframes tw{50%{opacity:.25}}
#sun{position:fixed;left:0;top:0;z-index:0;width:clamp(96px,14vw,180px);aspect-ratio:1;pointer-events:none;will-change:transform}
#sun i{display:block;width:100%;height:100%;border-radius:50%;background:radial-gradient(circle,#FFF1BE 0 32%,var(--sun) 52%,rgba(255,184,31,0) 71%);animation:sunup 2.4s cubic-bezier(.2,.7,.2,1) both}
@keyframes sunup{from{transform:translateY(60vh)}}
#ground{position:fixed;left:0;right:0;bottom:0;width:100%;height:30vh;z-index:0;pointer-events:none}
#ground .g1{fill:var(--ground)} #ground .g2{fill:var(--ground2)}

/* nav */
.nav{position:sticky;top:env(safe-area-inset-top,0px);z-index:20;display:flex;align-items:center;gap:18px;height:52px;
  margin-left:calc(0px - max(16px,env(safe-area-inset-left,0px)));margin-right:calc(0px - max(16px,env(safe-area-inset-right,0px)));
  padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));
  background:var(--nav-bg);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.brand{display:flex;align-items:center;gap:9px;text-decoration:none;font-family:var(--f-display);font-weight:900;font-stretch:150%;text-transform:uppercase;letter-spacing:.02em;white-space:nowrap;font-size:.95rem}
.brand i{width:14px;height:14px;border-radius:50%;background:var(--sun);box-shadow:0 0 14px var(--sun)}
.links{display:flex;gap:16px;margin-left:auto;overflow-x:auto;scrollbar-width:none;font:600 .72rem var(--f-mono);text-transform:uppercase;letter-spacing:.1em}
.links::-webkit-scrollbar{display:none}
.links a{color:var(--dim);text-decoration:none;white-space:nowrap;padding:8px 2px;border-bottom:2px solid transparent}
.links a.on{color:var(--paper);border-bottom-color:var(--sun)}

/* hero */
.hero{padding-top:clamp(28px,6vw,70px)}
.hero h1{display:flex;flex-wrap:wrap;align-items:flex-end;column-gap:.14em;margin:.2em 0 .12em;font-family:var(--f-display);font-weight:900;font-stretch:150%;font-size:clamp(3rem,13vw,11rem);line-height:.84;color:var(--paper);text-shadow:0 4px 40px rgba(0,0,0,.25);text-transform:uppercase}
.hero h1 .w{display:inline-flex;overflow:hidden;padding-top:.05em}
.hero h1 .w span{display:inline-block;transform:translateY(105%);animation:rise 1s cubic-bezier(.2,.8,.2,1) forwards;animation-delay:calc(var(--i)*55ms + 150ms)}
.hero h1 .two span{color:var(--sun)}
@keyframes rise{to{transform:none}}
.hero-meta{display:flex;flex-wrap:wrap;gap:12px 40px;justify-content:space-between;align-items:flex-end}
.tag{font-size:clamp(1.15rem,2.4vw,1.7rem);line-height:1.25;max-width:26ch;font-weight:500;text-shadow:0 2px 20px rgba(0,0,0,.3)}
.hero .eyebrow{text-shadow:0 1px 12px rgba(0,0,0,.35)}
.reel{margin-top:28px;perspective:1200px}
.reel .frame{padding:8px;background:var(--paper);transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .25s ease-out;box-shadow:0 30px 70px rgba(0,0,0,.4)}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1px;margin-top:18px;background:var(--line)}
.stat{background:var(--ink);padding:16px 18px}
.stat b{display:block;font-family:var(--f-display);font-weight:900;font-stretch:130%;font-size:2.4rem;line-height:1;color:var(--sun);font-variant-numeric:tabular-nums}
.stat span{font:600 .68rem var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}

/* marquee */
.marq{width:104vw;margin:56px 0 0 calc(50% - 52vw);background:var(--sun);color:var(--ink);overflow:hidden;transform:rotate(-1.2deg);padding:12px 0;border-block:3px solid var(--ink)}
.marq div{display:flex;width:max-content;animation:mq 40s linear infinite}
.marq span{padding-right:1.2rem;white-space:nowrap;font-family:var(--f-display);font-weight:800;font-stretch:140%;font-size:1.25rem;text-transform:uppercase}
.marq span::after{content:"\2726";margin-left:1.2rem}
@keyframes mq{to{transform:translateX(-50%)}}

/* panels */
.panel{position:relative;background:var(--paper);color:var(--ink);padding:clamp(20px,3.6vw,44px);--cut:26px;
  clip-path:polygon(0 0,calc(100% - var(--cut)) 0,100% var(--cut),100% 100%,var(--cut) 100%,0 calc(100% - var(--cut)))}
.panel.dark{background:var(--ink);color:var(--paper)}
.panel.moss{background:var(--moss);color:var(--paper)}
.sec{padding-top:clamp(56px,8vw,110px)}
.stack>*+*{margin-top:22px}
.rv{transition:transform .9s cubic-bezier(.2,.7,.2,1)}
.js .rv{transform:translateY(30px) rotate(var(--rv,0deg))}
.js .rv.in{transform:none}

/* intro + overview */
.big{font-family:var(--f-display);font-weight:700;font-stretch:112%;font-size:clamp(1.5rem,4vw,2.9rem);line-height:1.1;margin-top:12px;max-width:26ch}
.big span{color:var(--leaf)}
.ov{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px;margin-top:22px}
.ovc{display:block;text-decoration:none;background:var(--paper);color:var(--ink);padding:0 20px 20px;border-top:8px solid var(--c);transition:transform .3s}
.ovc:hover{transform:translateY(-6px)}
.ovc .n{font-family:var(--f-display);font-weight:900;font-stretch:150%;font-size:3.6rem;line-height:1;margin-top:12px;-webkit-text-stroke:2px var(--ink);color:transparent}
.ovc h3{margin-top:6px}
.ovc .eyebrow{margin-top:10px;color:#35503F}
.ovc p{font-size:.92rem;margin-top:10px;line-height:1.45}

/* media slots */
.slot{position:relative;margin:0;overflow:hidden;background:#10241a;color:var(--paper);aspect-ratio:var(--ar,4/3)}
.slot.fill{aspect-ratio:auto;width:100%;height:100%}
.ph{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;gap:8px;padding:12px;
  background:repeating-linear-gradient(135deg,rgba(237,243,228,.05) 0 9px,transparent 9px 18px),linear-gradient(160deg,#18392b,#0c1a13)}
.ph-k{font:600 .64rem/1.2 var(--f-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--leaf)}
.ph svg{align-self:center;width:34px;height:34px;opacity:.5;flex:none}
.ph p{font-size:.72rem;line-height:1.38;color:var(--dim);max-width:36ch;overflow:hidden;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}

/* day blocks */
.day{padding-top:clamp(70px,10vw,140px)}
.daynum{font-family:var(--f-display);font-weight:900;font-stretch:150%;font-size:clamp(7rem,26vw,21rem);line-height:.74;letter-spacing:-.04em;color:transparent;-webkit-text-stroke:2.5px var(--numc,var(--ink));margin:0 0 -.17em;transform:translateX(var(--px,0px));user-select:none;pointer-events:none;position:relative}
.head{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:clamp(18px,4vw,48px)}
.head h2{margin-top:10px}
.day .panel+*{margin-top:22px}
.day .panel+.panel{margin-top:22px}

/* day 1 */
.anat-grid{display:grid;grid-template-columns:minmax(0,340px) minmax(0,1fr);gap:clamp(20px,5vw,56px);align-items:center}
.anat{position:relative;width:100%}
.anat svg{display:block;width:100%;height:auto}
.loop{transform-box:fill-box;transform-origin:center;animation:spin 50s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.hot{position:absolute;width:34px;height:34px;margin:-17px 0 0 -17px;border-radius:50%;border:2px solid var(--ink);background:var(--sun);color:var(--ink);font:700 .8rem var(--f-mono);cursor:pointer;padding:0}
.hot::after{content:"";position:absolute;inset:-7px;border-radius:50%;border:2px solid var(--sun);animation:ping 2.2s ease-out infinite}
.hot[aria-pressed=true]{background:var(--ember);color:var(--paper)}
@keyframes ping{from{transform:scale(.7);opacity:1}to{transform:scale(1.35);opacity:0}}
.parts{display:grid;gap:0;border-top:1px solid var(--line)}
.parts button{display:grid;grid-template-columns:auto 1fr;gap:2px 14px;text-align:left;background:transparent;color:inherit;border:0;border-bottom:1px solid var(--line);padding:14px 10px;cursor:pointer;font:inherit}
.parts button b{font:700 .8rem var(--f-mono);color:var(--sun);grid-row:span 2;align-self:start;padding-top:4px}
.parts button strong{font-family:var(--f-display);font-weight:800;font-stretch:120%;font-size:1.35rem;line-height:1.1}
.parts button small{font:600 .66rem var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--leaf);margin-left:8px}
.parts button p{grid-column:2;display:none;font-size:.95rem;color:var(--paper);max-width:46ch}
.parts button[aria-pressed=true]{background:rgba(123,228,149,.1)}
.parts button[aria-pressed=true] p{display:block}
.loopnote{margin-top:16px;font:600 .74rem var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--dim)}
.scatter{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:26px 18px;padding-top:12px}
.pola{position:relative;background:var(--paper);padding:10px 10px 12px;box-shadow:0 16px 34px rgba(0,0,0,.35);transform:rotate(var(--r,0deg));transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.pola::before{content:"";position:absolute;top:-12px;left:50%;width:66px;height:22px;margin-left:-33px;background:rgba(255,184,31,.8);transform:rotate(-3deg);z-index:2}
.pola figcaption{padding-top:10px;color:var(--ink);font:600 .66rem/1.3 var(--f-mono);letter-spacing:.05em;text-transform:uppercase}
.pola:hover{transform:rotate(0) scale(1.04);z-index:3}
.s5{grid-column:1/-1}

/* day 2 */
.d2grid{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:18px}
.vf{position:relative;min-height:300px;background:#000}
.hud{position:absolute;inset:0;pointer-events:none;transition:opacity .3s;z-index:2}
.vf[data-hud=off] .hud{opacity:0}
.hud .c{position:absolute;width:28px;height:28px;border:3px solid var(--leaf)}
.c1{top:12px;left:12px;border-right:0!important;border-bottom:0!important}
.c2{top:12px;right:12px;border-left:0!important;border-bottom:0!important}
.c3{bottom:12px;left:12px;border-right:0!important;border-top:0!important}
.c4{bottom:12px;right:12px;border-left:0!important;border-top:0!important}
.scan{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--leaf),transparent);box-shadow:0 0 16px var(--leaf);animation:scan 4.6s ease-in-out infinite}
@keyframes scan{0%,100%{top:7%}50%{top:93%}}
.box{position:absolute;border:2px solid var(--leaf);animation:drift 6s ease-in-out infinite alternate}
.box b{position:absolute;left:-2px;top:-22px;background:var(--leaf);color:var(--ink);font:600 .6rem/1 var(--f-mono);padding:5px 6px;text-transform:uppercase;letter-spacing:.06em}
.b1{left:10%;top:34%;width:24%;height:46%}.b2{left:44%;top:22%;width:22%;height:30%;animation-delay:-2s}.b3{left:62%;top:58%;width:26%;height:26%;animation-delay:-4s}
@keyframes drift{to{transform:translate(2.5%,3%)}}
.rec{position:absolute;right:52px;top:15px;display:flex;align-items:center;gap:7px;font:600 .64rem var(--f-mono);letter-spacing:.12em;color:var(--paper);text-transform:uppercase}
.rec::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--ember);animation:blink 1.2s steps(2) infinite}
@keyframes blink{50%{opacity:0}}
.hudbtn{position:absolute;left:14px;bottom:14px;z-index:4;background:var(--ink);color:var(--leaf);border:1.5px solid var(--leaf);font:600 .66rem var(--f-mono);padding:7px 10px;text-transform:uppercase;letter-spacing:.1em;cursor:pointer}
.d2side{display:grid;gap:18px;align-content:start}
.pipe{display:flex;flex-wrap:wrap;margin-top:6px}
.pipe .st{flex:1 1 130px;border:1.5px solid var(--ink);padding:12px 12px 14px}
.pipe .st+.st{border-left:0}
.pipe .st b{display:block;font-family:var(--f-display);font-weight:800;font-stretch:120%;font-size:1.05rem}
.pipe .st span{font-size:.82rem;line-height:1.35;display:block;margin-top:4px}
.pipe-track{position:relative;height:2px;background:var(--ink);margin-top:14px}
.pipe-track i{position:absolute;top:-5px;left:0;width:12px;height:12px;background:var(--ember);animation:run 3.4s linear infinite}
@keyframes run{to{left:calc(100% - 12px)}}

/* day 3 */
.track svg{display:block;width:100%;height:auto}
.cps{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}
.cp{padding:8px 12px;border:1.5px solid var(--leaf);color:var(--leaf);font:600 .7rem var(--f-mono);text-transform:uppercase;letter-spacing:.08em;opacity:.55;transition:all .3s}
.cp.on{opacity:1;background:var(--leaf);color:var(--ink)}
.film{background:#050807;padding:30px 0}
.film-in{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;padding:0 18px 4px;scrollbar-width:thin}
.film-in .slot{flex:0 0 min(78vw,280px);scroll-snap-align:start}
.film-holes{height:10px;background:repeating-linear-gradient(90deg,transparent 0 8px,rgba(237,243,228,.8) 8px 20px,transparent 20px 28px);margin:0 0 20px}
.film-holes.b{margin:20px 0 0}

/* day 4 */
.d4a{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:22px}
.items{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px;margin-top:16px}
.item{display:flex;flex-direction:column;gap:2px;text-align:left;background:transparent;color:inherit;border:1.5px solid var(--line);padding:10px;font:inherit;font-size:.86rem;line-height:1.25;cursor:pointer;transition:all .2s}
.item span{font:600 .68rem var(--f-mono);color:var(--sun)}
.item:hover{border-color:var(--leaf)}
.item[aria-pressed=true]{background:var(--leaf);color:var(--ink);border-color:var(--leaf)}
.item[aria-pressed=true] span{color:var(--ink)}
.bud{height:14px;background:rgba(237,243,228,.14);margin-top:18px}
.bud i{display:block;height:100%;width:0;background:var(--leaf);transition:width .3s,background .3s}
.bud.over i{background:var(--ember)}
.budtxt{margin-top:8px;font:600 .74rem var(--f-mono);letter-spacing:.06em;text-transform:uppercase}
.tl{list-style:none;margin:16px 0 0;padding:0 0 0 30px;position:relative}
.tl::before{content:"";position:absolute;left:9px;top:8px;bottom:14px;width:2px;background:var(--ink)}
.tl li{position:relative;padding-bottom:20px}
.tl li::before{content:"";position:absolute;left:-29px;top:4px;width:16px;height:16px;border-radius:50%;background:var(--sun);border:2.5px solid var(--ink)}
.tl b{font:600 .72rem var(--f-mono);letter-spacing:.1em;text-transform:uppercase;display:block}
.tl p{font-size:.96rem;margin-top:3px}
.ps{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:16px}
.ps div{border:1.5px solid var(--line);padding:12px}
.ps b{font-family:var(--f-display);font-weight:900;font-stretch:140%;font-size:1.6rem;color:var(--sun);display:block;line-height:1}
.ps span{font-size:.84rem;color:var(--dim);display:block;margin-top:6px;line-height:1.3}
.d4media{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:18px}
.ba{position:relative;aspect-ratio:4/3;--pos:50%}
.ba .slot{position:absolute;inset:0;aspect-ratio:auto}
.ba .top{clip-path:inset(0 0 0 var(--pos))}
.ba input{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:ew-resize;z-index:5;margin:0}
.ba .bar{position:absolute;top:0;bottom:0;left:var(--pos);width:3px;margin-left:-1.5px;background:var(--sun);z-index:4;pointer-events:none}
.ba .bar::after{content:"\2194";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:50%;background:var(--sun);color:var(--ink);display:grid;place-items:center;font-weight:700}
.ba .lab{position:absolute;bottom:10px;z-index:4;background:var(--ink);color:var(--paper);font:600 .64rem var(--f-mono);padding:5px 8px;letter-spacing:.1em;text-transform:uppercase;pointer-events:none}
.ba .l1{left:10px}.ba .l2{right:10px}
.d4side{display:grid;gap:18px;align-content:start}
.row4{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-top:18px}
.podium{display:grid;grid-template-columns:1fr 1.15fr 1fr;gap:16px;align-items:end;margin-top:20px}
.pc{background:var(--paper);color:var(--ink);padding:12px 12px 16px}
.pc.p1{background:var(--sun);transform:translateY(-18px)}
.pc .place{display:inline-block;background:var(--ink);color:var(--paper);font:700 .7rem var(--f-mono);padding:5px 9px;letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px}
.pc h3{margin-top:12px}
.pc p{font-size:.9rem;margin-top:4px;opacity:.85}
.pc .miss{opacity:.55}

/* wall */
.filters{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}
.filters button{background:transparent;color:inherit;border:1.5px solid currentColor;font:600 .7rem var(--f-mono);padding:8px 12px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}
.filters button[aria-pressed=true]{background:var(--sun);color:var(--ink);border-color:var(--sun)}
.mosaic{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));grid-auto-rows:clamp(90px,13vw,160px);grid-auto-flow:dense;gap:10px;margin-top:20px}
.tile{position:relative;overflow:hidden;border:2px solid var(--paper);transition:transform .3s}
.tile:hover{transform:scale(1.025) rotate(-.6deg);z-index:2}
.t22{grid-column:span 2;grid-row:span 2}.t32{grid-column:span 3;grid-row:span 2}.t23{grid-column:span 2;grid-row:span 3}.t11{grid-column:span 2}.t21{grid-column:span 2}

/* reels */
.reels{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.7fr);gap:clamp(20px,4vw,50px);align-items:center}
.reels ul{margin:16px 0 0;padding-left:1.1em;font-size:.95rem}
.reels li+li{margin-top:6px}
.phones{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.phones .slot{--ar:9/16;border:3px solid var(--paper)}
.phones>:nth-child(2){margin-top:44px}

/* footer */
.foot{padding:clamp(90px,14vw,180px) 0 70px}
.foot h2{font-size:clamp(2.4rem,8vw,6.5rem);max-width:12ch;text-shadow:0 4px 40px rgba(0,0,0,.5)}
.foot p{margin-top:20px;max-width:52ch;color:var(--paper)}
.links2{display:flex;flex-wrap:wrap;gap:12px;margin-top:22px}
.links2 a{display:inline-block;padding:11px 16px;background:var(--leaf);color:var(--ink);font:700 .76rem var(--f-mono);text-decoration:none;text-transform:uppercase;letter-spacing:.08em}
.links2 a.alt{background:transparent;color:var(--paper);border:1.5px solid var(--paper)}

@media(max-width:860px){
  .head,.anat-grid,.d2grid,.d4a,.d4media,.reels{grid-template-columns:minmax(0,1fr)}
  .anat{max-width:320px;margin-inline:auto}
  .mosaic{grid-template-columns:repeat(2,minmax(0,1fr))}
  .t22,.t32,.t23,.t11,.t21{grid-column:span 1;grid-row:span 1}
  .t32,.t11{grid-column:span 2}
  .podium{grid-template-columns:minmax(0,1fr)}
  .pc.p1{transform:none;order:-1}
  .vf{min-height:0;aspect-ratio:16/10}
}
@media(min-width:861px){
  .scatter{grid-template-columns:repeat(12,minmax(0,1fr))}
  .s1{grid-column:1/6}.s2{grid-column:6/10;margin-top:44px}.s3{grid-column:10/13;margin-top:14px}.s4{grid-column:2/6}.s5{grid-column:6/13;grid-row:2}
}
@media(prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
  .hero h1 .w span{transform:none}
  .js .rv{transform:none}
}
</style>

<div id="sky"></div>
<div id="stars"></div>
<div id="sun"><i></i></div>
<svg id="ground" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
  <defs>
    <g id="sp"><path d="M0 0 L26 -7 L30 4 L4 11Z" style="fill:#0f2d36;stroke:#FFB81F;stroke-opacity:.45"/><path d="M15 8 V21" style="stroke:var(--ground);stroke-width:3"/></g>
  </defs>
  <path class="g2" d="M0 190 C140 140 300 172 460 152 C640 130 780 178 960 152 C1120 130 1300 162 1440 134 V300 H0Z"/>
  <g class="g2" transform="translate(250 166)">
    <path d="M-3.5 6 L3.5 6 L1.6 -80 L-1.6 -80Z"/>
    <g><animateTransform attributeName="transform" type="rotate" from="0 0 -80" to="360 0 -80" dur="11s" repeatCount="indefinite"/>
      <path d="M-3 -80 L0 -130 L3 -80Z"/><path d="M-3 -80 L0 -130 L3 -80Z" transform="rotate(120 0 -80)"/><path d="M-3 -80 L0 -130 L3 -80Z" transform="rotate(240 0 -80)"/>
    </g><circle cy="-80" r="4.5"/>
  </g>
  <g class="g2" transform="translate(640 150) scale(.6)">
    <path d="M-3.5 6 L3.5 6 L1.6 -80 L-1.6 -80Z"/>
    <g><animateTransform attributeName="transform" type="rotate" from="0 0 -80" to="360 0 -80" dur="8s" repeatCount="indefinite"/>
      <path d="M-3 -80 L0 -130 L3 -80Z"/><path d="M-3 -80 L0 -130 L3 -80Z" transform="rotate(120 0 -80)"/><path d="M-3 -80 L0 -130 L3 -80Z" transform="rotate(240 0 -80)"/>
    </g><circle cy="-80" r="4.5"/>
  </g>
  <g class="g2" transform="translate(1210 152) scale(.82)">
    <path d="M-3.5 6 L3.5 6 L1.6 -80 L-1.6 -80Z"/>
    <g><animateTransform attributeName="transform" type="rotate" from="40 0 -80" to="400 0 -80" dur="13s" repeatCount="indefinite"/>
      <path d="M-3 -80 L0 -130 L3 -80Z"/><path d="M-3 -80 L0 -130 L3 -80Z" transform="rotate(120 0 -80)"/><path d="M-3 -80 L0 -130 L3 -80Z" transform="rotate(240 0 -80)"/>
    </g><circle cy="-80" r="4.5"/>
  </g>
  <path class="g1" d="M0 234 C180 214 360 240 560 226 C760 212 940 244 1160 226 C1300 214 1380 226 1440 220 V300 H0Z"/>
  <!-- overgrown arch -->
  <path class="g1" d="M24 238 V196 Q24 164 56 164 Q88 164 88 196 V238 H76 V198 Q76 176 56 176 Q36 176 36 198 V238Z"/>
  <circle class="g1" cx="30" cy="166" r="9"/><circle class="g1" cx="46" cy="160" r="8"/><circle class="g1" cx="82" cy="172" r="9"/><circle class="g1" cx="22" cy="206" r="6"/>
  <!-- pines -->
  <path class="g1" d="M130 190 L116 228 H144Z M130 176 L119 212 H141Z"/>
  <path class="g1" d="M156 200 L144 232 H168Z M156 188 L147 218 H165Z"/>
  <path class="g1" d="M360 196 L346 234 H374Z M360 182 L349 218 H371Z"/>
  <path class="g1" d="M520 202 L508 232 H532Z M520 190 L511 220 H529Z"/>
  <path class="g1" d="M1320 190 L1306 230 H1334Z M1320 176 L1309 214 H1331Z"/>
  <path class="g1" d="M1362 202 L1350 232 H1374Z M1362 190 L1353 220 H1371Z"/>
  <!-- solar row -->
  <use href="#sp" x="690" y="214"/><use href="#sp" x="726" y="216"/><use href="#sp" x="762" y="216"/><use href="#sp" x="798" y="215"/><use href="#sp" x="834" y="213"/>
  <!-- workshop -->
  <rect class="g1" x="1000" y="198" width="76" height="40"/><path class="g1" d="M992 198 L1038 174 L1084 198Z"/>
  <g id="lights" style="opacity:0"><rect x="1012" y="208" width="10" height="10" style="fill:#FFB81F"/><rect x="1030" y="208" width="10" height="10" style="fill:#FFB81F"/><rect x="1048" y="208" width="10" height="10" style="fill:#FFB81F"/><rect x="1036" y="222" width="8" height="16" style="fill:#FFB81F"/></g>
  <rect class="g1" x="0" y="258" width="1440" height="42"/>
  <g id="rover" transform="translate(40 262)">
    <rect x="0" y="-18" width="34" height="11" rx="3" style="fill:#EDF3E4"/>
    <rect x="22" y="-26" width="9" height="8" rx="1" style="fill:#EDF3E4"/>
    <circle cx="29" cy="-22" r="2" style="fill:#FF5A36"/>
    <path d="M6 -18 V-28" style="stroke:#EDF3E4;stroke-width:1.5"/><circle cx="6" cy="-29" r="2" style="fill:#FFB81F"/>
    <g class="wh" data-cx="7" data-cy="-4"><circle cx="7" cy="-4" r="5.5" style="fill:#EDF3E4"/><path d="M7 -9 V1 M2 -4 H12" style="stroke:#0B1812;stroke-width:1.4"/></g>
    <g class="wh" data-cx="27" data-cy="-4"><circle cx="27" cy="-4" r="5.5" style="fill:#EDF3E4"/><path d="M27 -9 V1 M22 -4 H32" style="stroke:#0B1812;stroke-width:1.4"/></g>
  </g>
</svg>

<nav class="nav" aria-label="Sections">
  <a class="brand" href="#top"><i></i>Horizon 2.0</a>
  <div class="links">
    <a href="#overview">Overview</a><a href="#day1">Day 1</a><a href="#day2">Day 2</a><a href="#day3">Day 3</a><a href="#day4">Day 4</a><a href="#wall">Wall</a><a href="#reels">Reels</a>
  </div>
</nav>

<main>
<header class="hero wrap" id="top">
  <p class="eyebrow">Solarpunk Corps × Department of Mechanical Engineering · BIET Jhansi · October 2026</p>
  <h1 aria-label="Horizon 2.0">
    <span class="w" aria-hidden="true"><span style="--i:0">H</span><span style="--i:1">O</span><span style="--i:2">R</span><span style="--i:3">I</span><span style="--i:4">Z</span><span style="--i:5">O</span><span style="--i:6">N</span></span>
    <span class="w two" aria-hidden="true"><span style="--i:8">2</span><span style="--i:9">.</span><span style="--i:10">0</span></span>
  </h1>
  <div class="hero-meta">
    <p class="tag">Where technology, nature &amp; people meet.</p>
    <p class="eyebrow">Robotics, AI &amp; Sustainability Workshop · Recap</p>
  </div>
  <div class="reel"><div class="frame"><figure class="slot" data-id="hero" style="--ar:16/9"></figure></div></div>
  <div class="stats">
    <div class="stat"><b>4</b><span>days</span></div>
    <div class="stat"><b>15</b><span>hours of sessions</span></div>
    <div class="stat"><b>6</b><span>problem statements</span></div>
    <div class="stat"><b>100</b><span>credits at the marketplace</span></div>
  </div>
  <div class="marq" aria-hidden="true"><div>
    <span>Robotics</span><span>Artificial intelligence</span><span>Sustainability</span><span>Sensors</span><span>Actuators</span><span>Computer vision</span><span>Simulation</span><span>Robo Race</span><span>Buildathon</span><span>Component Marketplace</span>
    <span>Robotics</span><span>Artificial intelligence</span><span>Sustainability</span><span>Sensors</span><span>Actuators</span><span>Computer vision</span><span>Simulation</span><span>Robo Race</span><span>Buildathon</span><span>Component Marketplace</span>
  </div></div>
</header>

<section id="overview" class="wrap sec">
  <div class="panel dark rv">
    <p class="eyebrow" style="color:var(--leaf)">The workshop</p>
    <p class="big">Four days where a sensor, a model and a motor ended up in the same conversation. <span>Robotics, AI and sustainability</span> taught side by side, then used to build something that works.</p>
  </div>
  <div class="ov">
    <a class="ovc rv" href="#day1" style="--c:var(--leaf)"><div class="n">01</div><p class="eyebrow">3 to 6 PM</p><h3>Foundation, Technology &amp; Sustainability</h3><p>Parts of a robot, AI basics, the UN SDGs and a quiz.</p></a>
    <a class="ovc rv" href="#day2" style="--c:var(--sky);--rv:0deg"><div class="n">02</div><p class="eyebrow">3 to 6 PM</p><h3>AI, Computer Vision &amp; Simulation</h3><p>Machine learning, OpenCV and MediaPipe, simulated circuits, team mini projects.</p></a>
    <a class="ovc rv" href="#day3" style="--c:var(--sun)"><div class="n">03</div><p class="eyebrow">3 to 6 PM</p><h3>Robo Race</h3><p>Motors, sensors, navigation and obstacles on a live track.</p></a>
    <a class="ovc rv" href="#day4" style="--c:var(--ember)"><div class="n">04</div><p class="eyebrow">10 AM to 6 PM</p><h3>Hardware Buildathon</h3><p>A problem statement, 100 credits, a prototype, a pitch and results.</p></a>
  </div>
</section>

<!-- DAY 1 -->
<section id="day1" class="day wrap" style="--numc:var(--ink)">
  <div class="daynum" aria-hidden="true">01</div>
  <div class="panel head rv">
    <div>
      <p class="eyebrow">Day 1 · 3 to 6 PM</p>
      <h2>Foundation, technology &amp; sustainability</h2>
      <p class="lead">The first afternoon started from the ground up. Students met the parts of a robot through a body analogy, saw where AI and sustainability fit in, and finished with an individual technical and logical quiz.</p>
    </div>
    <div>
      <p class="eyebrow">On the board</p>
      <div class="chips"><span class="chip">Robotics &amp; electronics</span><span class="chip">Sensors</span><span class="chip">Actuators &amp; motors</span><span class="chip">Controllers</span><span class="chip">AI fundamentals</span><span class="chip">UN SDGs</span><span class="chip">Quiz</span></div>
    </div>
  </div>
  <div class="panel dark rv">
    <p class="eyebrow" style="color:var(--leaf)">Anatomy of a robot · tap a number</p>
    <div class="anat-grid" style="margin-top:18px">
      <div class="anat" id="anat">
        <svg viewBox="0 0 300 340" role="img" aria-label="Simple robot with sensors in the head, a controller in the chest, a battery below it and motorised joints in the arms">
          <circle class="loop" cx="150" cy="172" r="142" fill="none" stroke="#EDF3E4" stroke-opacity=".3" stroke-width="1.5" stroke-dasharray="3 9"/>
          <path d="M150 42 V22" stroke="#EDF3E4" stroke-width="4" stroke-linecap="round"/><circle cx="150" cy="18" r="6" fill="#FF5A36"/>
          <rect x="104" y="40" width="92" height="72" rx="16" fill="#EDF3E4"/>
          <circle cx="130" cy="74" r="11" fill="#FFB81F"/><circle cx="170" cy="74" r="11" fill="#FFB81F"/><circle cx="130" cy="74" r="4" fill="#0B1812"/><circle cx="170" cy="74" r="4" fill="#0B1812"/>
          <rect x="134" y="95" width="32" height="6" rx="3" fill="#0B1812"/>
          <rect x="138" y="112" width="24" height="12" fill="#EDF3E4"/>
          <rect x="94" y="122" width="112" height="104" rx="12" fill="#EDF3E4"/>
          <rect x="122" y="140" width="56" height="38" rx="4" fill="#7BE495"/>
          <path d="M130 140V132M142 140V132M154 140V132M166 140V132M130 178v8M142 178v8M154 178v8M166 178v8" stroke="#7BE495" stroke-width="3"/>
          <rect x="124" y="194" width="52" height="22" rx="3" fill="#FFB81F"/><rect x="176" y="201" width="5" height="8" fill="#FFB81F"/>
          <path d="M92 138 L60 178 L52 220" fill="none" stroke="#EDF3E4" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M208 138 L240 178 L248 220" fill="none" stroke="#EDF3E4" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="92" cy="138" r="10" fill="#7BE495" stroke="#0B1812" stroke-width="3"/><circle cx="60" cy="178" r="10" fill="#7BE495" stroke="#0B1812" stroke-width="3"/>
          <circle cx="208" cy="138" r="10" fill="#7BE495" stroke="#0B1812" stroke-width="3"/><circle cx="240" cy="178" r="10" fill="#7BE495" stroke="#0B1812" stroke-width="3"/>
          <path d="M126 226 V292 M174 226 V292" stroke="#EDF3E4" stroke-width="16" stroke-linecap="round"/>
          <rect x="106" y="290" width="42" height="14" rx="5" fill="#EDF3E4"/><rect x="152" y="290" width="42" height="14" rx="5" fill="#EDF3E4"/>
        </svg>
        <button class="hot" type="button" data-p="0" style="left:50%;top:21.8%" aria-label="Sensors">1</button>
        <button class="hot" type="button" data-p="1" style="left:50%;top:46.8%" aria-label="Controller">2</button>
        <button class="hot" type="button" data-p="2" style="left:80%;top:52.4%" aria-label="Actuators">3</button>
        <button class="hot" type="button" data-p="3" style="left:50%;top:60.3%" aria-label="Power">4</button>
      </div>
      <div>
        <div class="parts" id="parts"></div>
        <p class="loopnote">Sense, decide, act, repeat. That loop is the robot.</p>
      </div>
    </div>
  </div>
  <div class="scatter">
    <div class="pola s1" style="--r:-3deg"><figure class="slot" data-id="d1-a"></figure><p class="eyebrow" style="color:var(--ink);padding-top:10px">Full room</p></div>
    <div class="pola s2" style="--r:2.5deg"><figure class="slot" data-id="d1-b"></figure><p class="eyebrow" style="color:var(--ink);padding-top:10px">The body analogy</p></div>
    <div class="pola s3" style="--r:-1.5deg"><figure class="slot" data-id="d1-c" style="--ar:3/4"></figure><p class="eyebrow" style="color:var(--ink);padding-top:10px">Part in hand</p></div>
    <div class="pola s4" style="--r:2deg"><figure class="slot" data-id="d1-d"></figure><p class="eyebrow" style="color:var(--ink);padding-top:10px">Quiz time</p></div>
    <div class="pola s5" style="--r:-1deg"><figure class="slot" data-id="d1-e" style="--ar:16/9"></figure><p class="eyebrow" style="color:var(--ink);padding-top:10px">A servo, on a loop</p></div>
  </div>
</section>

<!-- DAY 2 -->
<section id="day2" class="day wrap" style="--numc:var(--ink)">
  <div class="daynum" aria-hidden="true">02</div>
  <div class="panel head rv">
    <div>
      <p class="eyebrow">Day 2 · 3 to 6 PM</p>
      <h2>AI, computer vision &amp; simulation</h2>
      <p class="lead">Day 2 turned the foundation into software. Machine learning basics led into OpenCV and MediaPipe, camera-based systems and circuit simulation in Tinkercad and Wokwi. Teams then built small working projects around a real-world or sustainability challenge.</p>
    </div>
    <div>
      <p class="eyebrow">On the board</p>
      <div class="chips"><span class="chip">ML fundamentals</span><span class="chip">OpenCV</span><span class="chip">MediaPipe</span><span class="chip">Camera systems</span><span class="chip">Tinkercad</span><span class="chip">Wokwi</span><span class="chip">Team mini projects</span></div>
    </div>
  </div>
  <div class="panel dark rv">
    <p class="eyebrow" style="color:var(--leaf);margin-bottom:16px">Through the camera</p>
    <div class="d2grid">
      <div class="vf" id="vf" data-hud="on">
        <figure class="slot fill" data-id="d2-main"></figure>
        <div class="hud" aria-hidden="true">
          <i class="c c1"></i><i class="c c2"></i><i class="c c3"></i><i class="c c4"></i>
          <div class="scan"></div>
          <div class="box b1"><b>hands</b></div><div class="box b2"><b>board</b></div><div class="box b3"><b>screen</b></div>
          <div class="rec">Live</div>
        </div>
        <button class="hudbtn" type="button" id="hudbtn" aria-pressed="true">Vision overlay: on</button>
      </div>
      <div class="d2side">
        <figure class="slot" data-id="d2-b"></figure>
        <figure class="slot" data-id="d2-c"></figure>
      </div>
    </div>
  </div>
  <div class="panel rv">
    <p class="eyebrow">How a camera becomes a decision</p>
    <div class="pipe">
      <div class="st"><b>Camera</b><span>Sees the scene.</span></div>
      <div class="st"><b>Frame</b><span>OpenCV reads one image at a time.</span></div>
      <div class="st"><b>Model</b><span>Finds the hands, faces or objects that matter.</span></div>
      <div class="st"><b>Decision</b><span>A simple rule picks an action.</span></div>
      <div class="st"><b>Actuator</b><span>A motor or LED responds.</span></div>
    </div>
    <div class="pipe-track" aria-hidden="true"><i></i></div>
  </div>
</section>

<!-- DAY 3 -->
<section id="day3" class="day wrap" style="--numc:var(--ink)">
  <div class="daynum" aria-hidden="true">03</div>
  <div class="panel head rv">
    <div>
      <p class="eyebrow">Day 3 · 3 to 6 PM</p>
      <h2>Robo Race</h2>
      <p class="lead">Day 3 moved from screens to motion. Teams worked on motor control, sensors and navigation, handled obstacles, and coordinated as a group with the goal of running autonomously.</p>
    </div>
    <div>
      <p class="eyebrow">On the track</p>
      <div class="chips"><span class="chip">Motor control</span><span class="chip">Sensors</span><span class="chip">Navigation</span><span class="chip">Obstacle handling</span><span class="chip">Coordination</span><span class="chip">Autonomous run</span></div>
    </div>
  </div>
  <div class="panel dark track rv" id="trackpanel">
    <p class="eyebrow" style="color:var(--leaf)">Scroll to drive the rover</p>
    <svg viewBox="0 0 900 250" role="img" aria-label="Race track with a rover driving from start to finish">
      <defs><path id="trk" d="M40 200 C150 200 190 55 330 55 C450 55 450 200 570 200 C690 200 700 75 800 75 C850 75 870 100 870 140"/></defs>
      <use href="#trk" fill="none" stroke="#1D3B2B" stroke-width="44" stroke-linecap="round"/>
      <use href="#trk" fill="none" stroke="#EDF3E4" stroke-opacity=".55" stroke-width="2" stroke-dasharray="10 12"/>
      <use href="#trk" id="trkfill" fill="none" stroke="#7BE495" stroke-width="4" stroke-linecap="round"/>
      <g id="obst"></g>
      <g transform="translate(870 142)"><rect x="-24" y="-4" width="48" height="8" fill="#EDF3E4"/><path d="M-24 -4h8v4h-8z M-8 -4h8v4h-8z M8 -4h8v4h-8z M-16 0h8v4h-8z M0 0h8v4h-8z M16 0h8v4h-8z" fill="#0B1812"/></g>
      <text x="40" y="238" fill="#9FB3A3" font-family="JetBrains Mono,monospace" font-size="13" letter-spacing="2">START</text>
      <text x="838" y="188" fill="#9FB3A3" font-family="JetBrains Mono,monospace" font-size="13" letter-spacing="2">FINISH</text>
      <g id="trover" transform="translate(40 200)">
        <rect x="-15" y="-9" width="30" height="18" rx="3" fill="#FFB81F"/>
        <rect x="-12" y="-13" width="9" height="4" rx="1" fill="#EDF3E4"/><rect x="3" y="-13" width="9" height="4" rx="1" fill="#EDF3E4"/>
        <rect x="-12" y="9" width="9" height="4" rx="1" fill="#EDF3E4"/><rect x="3" y="9" width="9" height="4" rx="1" fill="#EDF3E4"/>
        <circle cx="15" cy="0" r="3.2" fill="#FF5A36"/>
      </g>
    </svg>
    <div class="cps" id="cps">
      <span class="cp" data-at=".12">Control</span><span class="cp" data-at=".38">Obstacle handling</span><span class="cp" data-at=".64">Coordination</span><span class="cp" data-at=".92">Autonomous run</span>
    </div>
  </div>
  <div class="panel dark rv" style="padding:12px"><figure class="slot" data-id="d3-reel" style="--ar:21/9"></figure></div>
  <div class="film rv">
    <div class="film-holes"></div>
    <div class="film-in">
      <figure class="slot" data-id="d3-1"></figure><figure class="slot" data-id="d3-2"></figure><figure class="slot" data-id="d3-3"></figure>
      <figure class="slot" data-id="d3-4"></figure><figure class="slot" data-id="d3-5"></figure><figure class="slot" data-id="d3-6"></figure>
    </div>
    <div class="film-holes b"></div>
  </div>
</section>

<!-- DAY 4 -->
<section id="day4" class="day wrap" style="--numc:var(--paper)">
  <div class="daynum" aria-hidden="true">04</div>
  <div class="panel head rv">
    <div>
      <p class="eyebrow">Day 4 · 10 AM to 6 PM</p>
      <h2>Hardware buildathon</h2>
      <p class="lead">The last day was a full build. Each team received a problem statement and 100 credits for the Component Marketplace, then designed, built and programmed a prototype in the morning. The afternoon went to integration, testing, debugging and the final pitch.</p>
    </div>
    <div>
      <p class="eyebrow">Pitch covered</p>
      <div class="chips"><span class="chip">Problem</span><span class="chip">Working solution</span><span class="chip">Resource use</span><span class="chip">Impact</span><span class="chip">SDG link</span><span class="chip">Future scope</span><span class="chip">Improvements</span></div>
    </div>
  </div>
  <div class="d4a">
    <div class="panel dark rv">
      <p class="eyebrow" style="color:var(--leaf)">Try the Component Marketplace</p>
      <h3 style="margin-top:8px">Build a rover on 100 credits</h3>
      <div class="items" id="items"></div>
      <div class="bud" id="bud"><i></i></div>
      <p class="budtxt" id="budtxt" aria-live="polite">0 of 100 credits spent</p>
      <p style="font-size:.8rem;color:var(--dim);margin-top:8px">Sample prices for this toy. They are not the prices used at the event.</p>
    </div>
    <div class="panel rv">
      <p class="eyebrow">The day, in order</p>
      <ol class="tl">
        <li><b>10 AM to 1 PM · Part I</b><p>Problem statement and 100 credits. Visit the Component Marketplace, then design, build and program the prototype.</p></li>
        <li><b>3 to 6 PM · Part II</b><p>Integrate, test and debug. Demo the working prototype.</p></li>
        <li><b>Showcase</b><p>Pitch the problem, the solution, the resources used, the impact, the SDG connection and future scope.</p></li>
        <li><b>Close</b><p>Judging, results and closure.</p></li>
      </ol>
    </div>
  </div>
  <div class="panel moss rv">
    <p class="eyebrow" style="color:var(--leaf)">Six problem statements</p>
    <p style="margin-top:8px;max-width:60ch">Environmental, social and resource challenges, each solved with a prototype built in a single day.</p>
    <div class="ps" id="ps"></div>
  </div>
  <div class="panel dark rv">
    <p class="eyebrow" style="color:var(--leaf);margin-bottom:16px">Morning to evening</p>
    <div class="d4media">
      <div class="ba" id="ba">
        <figure class="slot" data-id="d4-before"></figure>
        <figure class="slot top" data-id="d4-after"></figure>
        <span class="lab l1">10 AM</span><span class="lab l2">Evening</span>
        <div class="bar"></div>
        <input type="range" min="0" max="100" value="50" id="barange" aria-label="Compare the hall in the morning and in the evening">
      </div>
      <div class="d4side">
        <figure class="slot" data-id="d4-a"></figure>
        <figure class="slot" data-id="d4-b"></figure>
      </div>
    </div>
    <div class="row4">
      <figure class="slot" data-id="d4-c"></figure><figure class="slot" data-id="d4-d"></figure><figure class="slot" data-id="d4-e"></figure><figure class="slot" data-id="d4-f"></figure>
    </div>
    <div style="max-width:900px;margin:18px auto 0"><figure class="slot" data-id="d4-demo" style="--ar:16/9"></figure></div>
  </div>
  <div class="panel rv" style="background:var(--sun)">
    <p class="eyebrow">Showcase results</p>
    <h2 style="margin-top:8px">The podium</h2>
    <div class="podium">
      <div class="pc" id="pc2"><span class="place">2nd</span><figure class="slot" data-id="p2"></figure><h3 class="pteam"></h3><p class="pproj"></p></div>
      <div class="pc p1" id="pc1"><span class="place" style="background:var(--ember)">1st</span><figure class="slot" data-id="p1"></figure><h3 class="pteam"></h3><p class="pproj"></p></div>
      <div class="pc" id="pc3"><span class="place">3rd</span><figure class="slot" data-id="p3"></figure><h3 class="pteam"></h3><p class="pproj"></p></div>
    </div>
  </div>
</section>

<!-- WALL -->
<section id="wall" class="sec wrap">
  <div class="panel dark rv">
    <p class="eyebrow" style="color:var(--leaf)">The wall</p>
    <h2 style="margin-top:8px">Everything between the sessions</h2>
    <p class="lead">Hands, wires, chai breaks and whiteboards. The pictures that did not fit a schedule.</p>
    <div class="filters" id="filters">
      <button type="button" data-f="all" aria-pressed="true">All</button><button type="button" data-f="day1" aria-pressed="false">Day 1</button><button type="button" data-f="day2" aria-pressed="false">Day 2</button><button type="button" data-f="day3" aria-pressed="false">Day 3</button><button type="button" data-f="day4" aria-pressed="false">Day 4</button><button type="button" data-f="people" aria-pressed="false">People</button><button type="button" data-f="details" aria-pressed="false">Details</button>
    </div>
  </div>
  <div class="mosaic" id="mosaic">
    <div class="tile t22" data-tag="details day4"><figure class="slot fill" data-id="w1"></figure></div>
    <div class="tile t11" data-tag="details day2"><figure class="slot fill" data-id="w2"></figure></div>
    <div class="tile t23" data-tag="people"><figure class="slot fill" data-id="w3"></figure></div>
    <div class="tile t21" data-tag="people day1"><figure class="slot fill" data-id="w4"></figure></div>
    <div class="tile t32" data-tag="people day1"><figure class="slot fill" data-id="w5"></figure></div>
    <div class="tile t21" data-tag="people day4"><figure class="slot fill" data-id="w6"></figure></div>
    <div class="tile t21" data-tag="people details"><figure class="slot fill" data-id="w7"></figure></div>
    <div class="tile t22" data-tag="details day2"><figure class="slot fill" data-id="w8"></figure></div>
    <div class="tile t21" data-tag="details day3"><figure class="slot fill" data-id="w9"></figure></div>
    <div class="tile t23" data-tag="people day4"><figure class="slot fill" data-id="w10"></figure></div>
    <div class="tile t21" data-tag="details day4"><figure class="slot fill" data-id="w11"></figure></div>
    <div class="tile t32" data-tag="details day4"><figure class="slot fill" data-id="w12"></figure></div>
  </div>
</section>

<!-- REELS -->
<section id="reels" class="sec wrap">
  <div class="reels">
    <div class="panel dark rv">
      <p class="eyebrow" style="color:var(--leaf)">Short films</p>
      <h2 style="margin-top:8px">Watch it move</h2>
      <ul>
        <li>A 15 second hype cut for the club feed.</li>
        <li>A one minute interview with a team about what they built.</li>
        <li>A table time-lapse from empty to full.</li>
      </ul>
    </div>
    <div class="phones rv">
      <figure class="slot" data-id="r1"></figure><figure class="slot" data-id="r2"></figure><figure class="slot" data-id="r3"></figure>
    </div>
  </div>
</section>
</main>

<footer class="wrap foot" id="end">
  <h2>Thanks for building with us.</h2>
  <p>Horizon 2.0 was organised by Solarpunk Corps with the Department of Mechanical Engineering at BIET Jhansi. The corps keeps building.</p>
  <div class="links2">
    <a href="https://solarpunkcorps.vercel.app" target="_blank" rel="noopener">Solarpunk Corps site</a>
    <a class="alt" href="https://www.instagram.com/we.the.spc" target="_blank" rel="noopener">@we.the.spc</a>
  </div>
</footer>

<script>
(function(){
var RESULTS={1:{team:'',project:''},2:{team:'',project:''},3:{team:'',project:''}};
var PROBLEMS=[]; /* six short titles */
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var root=document.documentElement;

var CAT=[
['hero','Hero','Showreel','video','30 to 45 seconds on a loop: sunrise over the campus, a soldering iron at work, a robot crossing the line, a team cheering. Muted loops play best here.'],
['d1-a','Day 1','Full room','photo','Wide shot from the back of the room with the projector slide readable.'],
['d1-b','Day 1','Speaker moment','photo','Presenter mid-gesture explaining the body analogy, students in the foreground.'],
['d1-c','Day 1','Part in hand','photo','Close-up of a hand holding a sensor, servo or motor toward the camera. Portrait works well.'],
['d1-d','Day 1','Quiz','photo','Heads down over the individual quiz, pencils moving.'],
['d1-e','Day 1','Servo loop','video','Eight second loop of a servo sweeping or a motor spinning on a desk.'],
['d2-main','Day 2','Vision demo','video','Screen recording of a live OpenCV or MediaPipe demo with someone in frame. The overlay sits on top and can be switched off.'],
['d2-b','Day 2','Simulation screen','photo','Over-the-shoulder shot of a Wokwi or Tinkercad circuit on a laptop.'],
['d2-c','Day 2','Team sketch','photo','Whiteboard or notebook page with a team plan for the mini project.'],
['d3-reel','Day 3','Race slow-motion','video','Floor-level slow motion of a robot taking a corner or meeting an obstacle. Wide crop.'],
['d3-1','Day 3','Start line','photo','Robots lined up at the start, hands just leaving them.'],
['d3-2','Day 3','Track from above','photo','Overhead of the whole track with teams around it.'],
['d3-3','Day 3','Obstacle','photo','A robot meeting an obstacle, mid-correction.'],
['d3-4','Day 3','Timekeeper','photo','Whoever holds the timer or flag, face intent.'],
['d3-5','Day 3','Crowd','photo','Students leaning over the track edge, watching.'],
['d3-6','Day 3','Clean run','photo','A team reacting after a run that worked.'],
['d4-before','Day 4','Hall at 10 AM','photo','The hall from one fixed spot at 10 AM, tables still tidy. Keep the angle for the evening shot.'],
['d4-after','Day 4','Hall in the evening','photo','The same spot and angle in the evening, tables full of prototypes.'],
['d4-a','Day 4','Marketplace','photo','Wide shot of the Component Marketplace table with parts laid out.'],
['d4-b','Day 4','Choosing parts','photo','A student comparing two components, one in each hand.'],
['d4-c','Day 4','Wiring','photo','Close-up of hands wiring or soldering, tools in focus.'],
['d4-d','Day 4','Hall mid-build','photo','Wide shot with every table busy.'],
['d4-e','Day 4','Pitch','photo','A team presenting in front of the screen.'],
['d4-f','Day 4','Judges','photo','Judges taking notes while a team demonstrates.'],
['d4-demo','Day 4','Prototype demo','video','Ten to twenty seconds of a final prototype doing its job.'],
['p1','Results','1st place','photo','The winning team holding their prototype.'],
['p2','Results','2nd place','photo','The second place team with their prototype.'],
['p3','Results','3rd place','photo','The third place team with their prototype.'],
['w1','Wall','Hands at work','photo','Close crop of hands only: wiring, typing, pointing at a screen.'],
['w2','Wall','Small details','photo','Jumper wires, tape labels, a breadboard under a phone torch.'],
['w3','Wall','Chai break','photo','A candid of people talking between sessions. Portrait.'],
['w4','Wall','Registration','photo','Volunteers at the desk on the first day.'],
['w5','Wall','Faculty','photo','Faculty speaking or welcoming the room. Wide.'],
['w6','Wall','Group photo','photo','The whole group on the steps or outside the department.'],
['w7','Wall','Sol and Nira','photo','The club mascots somewhere unexpected in the venue.'],
['w8','Wall','Whiteboard doodles','photo','Diagrams and arrows left on the board at the end of a session.'],
['w9','Wall','Tools at rest','photo','Soldering iron, multimeter and cutters on a table after the race.'],
['w10','Wall','Organisers','photo','The team behind the event, a quick selfie. Portrait.'],
['w11','Wall','Empty hall','photo','The hall after everyone left, chairs pushed in.'],
['w12','Wall','Window light','photo','Late sun through the lab windows across the tables. Wide.'],
['r1','Reels','Hype reel','video','15 seconds, vertical, fast cuts of the best moments.'],
['r2','Reels','Team interview','video','One take, vertical: a team explaining what they built in a minute.'],
['r3','Reels','Table time-lapse','video','A table going from empty to full of parts, wires and laptops.']
];
var byId={}; CAT.forEach(function(r){byId[r[0]]={id:r[0],g:r[1],l:r[2],k:r[3],idea:r[4]}});
var ICON={photo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="6" width="18" height="13" rx="1"/><circle cx="12" cy="12.5" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M10 9l5 3-5 3z"/></svg>'};
$$('.slot').forEach(function(el){
  var d=byId[el.dataset.id]; if(!d) return;
  el.innerHTML='<div class="ph"><span class="ph-k">'+(d.k==='video'?'Video':'Photo')+' · '+d.l+'</span>'+ICON[d.k]+'<p>'+d.idea+'</p></div>';
});

/* stars */
var st=$('#stars');
for(var i=0;i<90;i++){var d=document.createElement('i'),sz=Math.random()*2+1;d.style.cssText='left:'+(Math.random()*100)+'%;top:'+(Math.random()*62)+'%;width:'+sz+'px;height:'+sz+'px;animation-delay:'+(Math.random()*4).toFixed(2)+'s';st.appendChild(d)}
if(reduce){$$('svg').forEach(function(s){if(s.pauseAnimations)s.pauseAnimations()})}

/* anatomy */
var PARTS=[
 ['Sensors','Senses','Cameras, distance sensors and touch switches tell the robot what is around it.'],
 ['Controller','Brain','A microcontroller reads the senses and decides what the muscles should do next.'],
 ['Actuators','Muscles','Motors and servos turn a decision into movement.'],
 ['Power','Fuel','Batteries and regulators feed every other part.']
];
var parts=$('#parts');
PARTS.forEach(function(p,i){var b=document.createElement('button');b.type='button';b.dataset.p=i;b.innerHTML='<b>'+(i+1)+'</b><strong>'+p[0]+'<small>'+p[1]+'</small></strong><p>'+p[2]+'</p>';parts.appendChild(b)});
function pick(i){$$('#parts button,.hot').forEach(function(b){b.setAttribute('aria-pressed',String(+b.dataset.p===i))})}
$$('#parts button,.hot').forEach(function(b){b.addEventListener('click',function(){pick(+b.dataset.p)})});
pick(0);

/* vision overlay */
$('#hudbtn').addEventListener('click',function(){var vf=$('#vf'),on=vf.dataset.hud!=='on';vf.dataset.hud=on?'on':'off';this.setAttribute('aria-pressed',on);this.textContent='Vision overlay: '+(on?'on':'off')});

/* marketplace */
var ITEMS=[['Microcontroller board',35],['Ultrasonic sensor',12],['IR sensor pair',8],['Servo motor',15],['DC motor and wheel',14],['Motor driver',18],['Breadboard and jumpers',10],['Solar cell',20],['Soil moisture sensor',12],['Camera module',40],['LED strip',6],['Battery pack',16]];
var chosen={}, itemsEl=$('#items');
ITEMS.forEach(function(it,i){var b=document.createElement('button');b.type='button';b.className='item';b.setAttribute('aria-pressed','false');b.innerHTML=it[0]+'<span>'+it[1]+' credits</span>';b.addEventListener('click',function(){chosen[i]=!chosen[i];b.setAttribute('aria-pressed',String(!!chosen[i]));budget()});itemsEl.appendChild(b)});
function budget(){
  var t=0; Object.keys(chosen).forEach(function(k){if(chosen[k])t+=ITEMS[k][1]});
  var bud=$('#bud'); $('i',bud).style.width=Math.min(100,t)+'%'; bud.classList.toggle('over',t>100);
  $('#budtxt').textContent=t>100?('Over budget by '+(t-100)+' credits. Put something back.'):(t+' of 100 credits spent · '+(100-t)+' left');
}
budget();

/* problem statements + results */
var ps=$('#ps');
for(var k=0;k<6;k++){var dv=document.createElement('div');dv.innerHTML='<b>PS '+(k+1)+'</b><span>'+(PROBLEMS[k]||'Title to add')+'</span>';ps.appendChild(dv)}
[1,2,3].forEach(function(n){var c=$('#pc'+n),r=RESULTS[n]||{};var t=$('.pteam',c),p=$('.pproj',c);
  t.textContent=r.team||'Team name to add'; if(!r.team)t.classList.add('miss'); p.textContent=r.project||'Project to add'; if(!r.project)p.classList.add('miss')});

/* before and after */
var ba=$('#ba'); $('#barange').addEventListener('input',function(){ba.style.setProperty('--pos',this.value+'%')});

/* wall filters */
$('#filters').addEventListener('click',function(e){
  var b=e.target.closest('button'); if(!b)return; var f=b.dataset.f;
  $$('#filters button').forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});
  $$('#mosaic .tile').forEach(function(t){t.hidden=!(f==='all'||t.dataset.tag.split(' ').indexOf(f)>-1)});
});

/* reveals + nav */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -5% 0px'});
$$('.rv').forEach(function(el){io.observe(el)});
var links=$$('.links a');
var nio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
['overview','day1','day2','day3','day4','wall','reels'].forEach(function(id){var el=document.getElementById(id);if(el)nio.observe(el)});

/* hero tilt */
var frameEl=$('.reel .frame');
if(frameEl&&matchMedia('(hover:hover)').matches&&!reduce){
  frameEl.addEventListener('pointermove',function(e){var r=frameEl.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;frameEl.style.setProperty('--ry',(x*5).toFixed(2)+'deg');frameEl.style.setProperty('--rx',(-y*4).toFixed(2)+'deg')});
  frameEl.addEventListener('pointerleave',function(){frameEl.style.setProperty('--ry','0deg');frameEl.style.setProperty('--rx','0deg')});
}

/* track */
var trk=document.getElementById('trk'), TL=trk.getTotalLength(), trover=$('#trover'), trfill=$('#trkfill'), cps=$$('.cp'), obst=$('#obst');
[.28,.55,.8].forEach(function(f){
  var a=trk.getPointAtLength(f*TL), b=trk.getPointAtLength(f*TL+1), dx=b.x-a.x, dy=b.y-a.y, l=Math.hypot(dx,dy)||1;
  var x=a.x-dy/l*34, y=a.y+dx/l*34;
  var g=document.createElementNS('http://www.w3.org/2000/svg','path'); g.setAttribute('d','M-7 7 L0 -9 L7 7Z'); g.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')'); g.setAttribute('style','fill:#FF5A36'); obst.appendChild(g);
});
function trackFrame(H){
  var box=$('#trackpanel').getBoundingClientRect();
  var t=Math.min(1,Math.max(0,(H*0.9-box.top)/(H*0.75)));
  var len=t*TL, p0=trk.getPointAtLength(len), p1=trk.getPointAtLength(Math.min(TL,len+2));
  var ang=Math.atan2(p1.y-p0.y,p1.x-p0.x)*180/Math.PI;
  trover.setAttribute('transform','translate('+p0.x.toFixed(1)+' '+p0.y.toFixed(1)+') rotate('+ang.toFixed(1)+')');
  trfill.style.strokeDasharray=len.toFixed(1)+' '+TL.toFixed(1);
  cps.forEach(function(c){c.classList.toggle('on',t>=+c.dataset.at)});
}

/* sky, sun, ground */
var SKY=[['top','#27466A','#F59E5B','#14301F',0],['day1','#5DAEE0','#DDF2E3','#1B4A32',0],['day2','#4A9BD9','#C4E9F2','#1B4A32',0],['day3','#EE9A45','#FFD98C','#23402A',0],['day4','#1E2452','#DA5A6C','#10241A',.3],['wall','#080F1A','#1C2A3E','#07120C',1],['reels','#050A10','#0F2218','#050E09',1],['end','#050A10','#0F2218','#050E09',1]];
var stops=[], W=innerWidth, H=innerHeight, docH=1, wallTop=1;
var sun=$('#sun'), stars=$('#stars'), lights=$('#lights'), rover=$('#rover'), wheels=$$('#rover .wh');
function hex(c){return [1,3,5].map(function(i){return parseInt(c.slice(i,i+2),16)})}
function mix(a,b,k){var A=hex(a),B=hex(b);return '#'+A.map(function(v,i){return Math.round(v+(B[i]-v)*k).toString(16).padStart(2,'0')}).join('')}
function measure(){
  W=innerWidth;H=innerHeight;docH=document.documentElement.scrollHeight;
  stops=SKY.map(function(s){var el=s[0]==='top'?null:document.getElementById(s[0]);var y=el?el.getBoundingClientRect().top+scrollY+el.offsetHeight*.3:0;return{y:y,t:s[1],b:s[2],g:s[3],n:s[4]}});
  for(var i=1;i<stops.length;i++){if(stops[i].y<=stops[i-1].y)stops[i].y=stops[i-1].y+1}
  var w=document.getElementById('wall'); wallTop=w.getBoundingClientRect().top+scrollY;
}
var ticking=false;
function frame(){
  ticking=false;
  var sy=scrollY, y=sy+H*.5, i=0;
  while(i<stops.length-2&&y>stops[i+1].y)i++;
  var a=stops[i], b=stops[i+1], k=Math.min(1,Math.max(0,(y-a.y)/Math.max(1,b.y-a.y))); k=k*k*(3-2*k);
  var bot=mix(a.b,b.b,k), gr=mix(a.g,b.g,k), n=a.n+(b.n-a.n)*k;
  root.style.setProperty('--sky-top',mix(a.t,b.t,k)); root.style.setProperty('--sky-bot',bot);
  root.style.setProperty('--ground',gr); root.style.setProperty('--ground2',mix(gr,bot,.22));
  stars.style.opacity=n.toFixed(2); lights.style.opacity=Math.min(1,n*1.3).toFixed(2);
  var s=Math.min(1,Math.max(0,sy/Math.max(1,wallTop-H*.3))), t=.02+.96*s, hy=H*.86, ty=H*.14, size=sun.offsetWidth;
  var sx=W*(.07+.86*t)-size/2, syy=hy-Math.sin(Math.PI*t)*(hy-ty)-size/2, sc=1+.3*(1-Math.sin(Math.PI*t));
  sun.style.transform='translate('+sx.toFixed(1)+'px,'+syy.toFixed(1)+'px) scale('+sc.toFixed(3)+')';
  var p=sy/Math.max(1,docH-H), gh=H*.3, scale=Math.max(W/1440,gh/300), vw=W/scale, left=(1440-vw)/2;
  var rx=left+28+p*(vw-96);
  rover.setAttribute('transform','translate('+rx.toFixed(1)+' 262)');
  wheels.forEach(function(w){w.setAttribute('transform','rotate('+(p*2600).toFixed(0)+' '+w.dataset.cx+' '+w.dataset.cy+')')});
  $$('.daynum').forEach(function(d){var r=d.getBoundingClientRect(); if(r.bottom<-50||r.top>H+50)return; d.style.setProperty('--px',(-(r.top+r.height/2-H/2)*.12).toFixed(1)+'px')});
  trackFrame(H);
}
function req(){if(!ticking){ticking=true;requestAnimationFrame(frame)}}
addEventListener('scroll',req,{passive:true});
addEventListener('resize',function(){measure();req()});
addEventListener('load',function(){measure();req()});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){measure();req()});
measure(); frame();
})();
</script>

</body></html>`;

const recapStyleText = Array.from(
  recapHtml.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi),
  ([, css]) => css,
).join("\n");

const scopedRecapStyles = recapStyleText
  .replace(/body::before\{[^}]*\}/g, "")
  .replace(/:root(?=\s*\{)/g, ":scope")
  .replace(/(^|[{}]\s*)html(?=\s*\{)/gm, "$1:scope")
  .replace(/(^|[{}]\s*)body(?=\s*\{)/gm, "$1:scope");

const siteChromeStyles = `
nav.horizon2-site-navigation {
  color-scheme: light;
  color: #0b1812 !important;
  background-color: rgba(255, 255, 255, 0.96) !important;
}
nav.horizon2-site-navigation a,
nav.horizon2-site-navigation button:not(.bg-green-600):not(.bg-emerald-600),
nav.horizon2-site-navigation button:not(.bg-green-600):not(.bg-emerald-600) svg {
  color: #0b1812 !important;
}
.horizon2-site-footer,
.horizon2-site-footer footer {
  position: relative;
  z-index: 1;
  color-scheme: light;
  color: #0b1812 !important;
  background: #f4f7f1 !important;
  border-color: #d1d5db !important;
}
.horizon2-site-footer :is(h1, h2, h3, p, a, span) {
  color: #0b1812 !important;
}
`;

const recapMarkup =
  recapHtml
    .match(/<body\b[^>]*>([\s\S]*?)<\/body\s*>/i)?.[1]
    ?.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, "")
    .replace(/<title\b[^>]*>[\s\S]*?<\/title\s*>/gi, "")
    .replace(/<(?:meta|link)\b[^>]*\/?>/gi, "") ?? "";

interface RecapDocumentFacade {
  querySelector: (selectors: string) => Element | null;
  querySelectorAll: (selectors: string) => NodeListOf<Element>;
  getElementById: (id: string) => HTMLElement | null;
  createElement: typeof document.createElement;
  createElementNS: typeof document.createElementNS;
  documentElement: HTMLElement;
  body: HTMLElement;
  fonts: FontFaceSet;
  addEventListener: typeof document.addEventListener;
}

export default function Horizon2_2026() {
  const recapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const recap = recapRef.current;
    if (!recap) return;

    recap.innerHTML = recapMarkup;
    const sourceDocument = new DOMParser().parseFromString(recapHtml, "text/html");
    const addedHeadElements = Array.from(
      sourceDocument.head.querySelectorAll(
        'link[rel="preconnect"], link[rel="stylesheet"]',
      ),
      (sourceLink) => {
        const link = sourceLink.cloneNode(true) as HTMLLinkElement;
        document.head.appendChild(link);
        return link;
      },
    );

    const windowListeners: Array<{
      type: string;
      listener: EventListenerOrEventListenerObject;
      options?: boolean | AddEventListenerOptions;
    }> = [];
    const documentListeners: Array<{
      type: string;
      listener: EventListenerOrEventListenerObject;
      options?: boolean | AddEventListenerOptions;
    }> = [];
    const updateSiteNavigationOffset = () => {
      const siteNavigation = document.querySelector<HTMLElement>(
        "#root nav.fixed",
      );
      recap.style.setProperty(
        "--site-navigation-height",
        `${siteNavigation?.getBoundingClientRect().height ?? 0}px`,
      );
    };
    updateSiteNavigationOffset();
    window.addEventListener("resize", updateSiteNavigationOffset);
    windowListeners.push({
      type: "resize",
      listener: updateSiteNavigationOffset,
    });

    const recapDocument: RecapDocumentFacade = {
      querySelector: (selectors) => recap.querySelector(selectors),
      querySelectorAll: (selectors) => recap.querySelectorAll(selectors),
      getElementById: (id) => recap.querySelector<HTMLElement>(`#${CSS.escape(id)}`),
      createElement: document.createElement.bind(document),
      createElementNS: document.createElementNS.bind(document),
      documentElement: recap,
      body: recap,
      fonts: document.fonts,
      addEventListener: ((
        type: string,
        listener: EventListenerOrEventListenerObject | null,
        options?: boolean | AddEventListenerOptions,
      ) => {
        if (!listener) return;
        document.addEventListener(type, listener, options);
        documentListeners.push({ type, listener, options });
      }) as typeof document.addEventListener,
    };
    const addRecapWindowListener = ((
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ) => {
      window.addEventListener(type, listener, options);
      windowListeners.push({ type, listener, options });
    }) as typeof window.addEventListener;
    const globalWindow = window as Window & {
      __horizon2RecapDocument?: RecapDocumentFacade;
      __horizon2RecapAddEventListener?: typeof window.addEventListener;
    };
    globalWindow.__horizon2RecapDocument = recapDocument;
    globalWindow.__horizon2RecapAddEventListener = addRecapWindowListener;

    const internalLinkHandler = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const id = decodeURIComponent(link.hash.slice(1));
      const destination = recap.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
      if (!destination) return;

      event.preventDefault();
      destination.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    };
    recap.addEventListener("click", internalLinkHandler);

    const scripts = Array.from(
      recapHtml.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script\s*>/gi),
      ([, source]) => source.trim(),
    ).filter(Boolean);
    const scriptElements: HTMLScriptElement[] = [];

    try {
      for (const source of scripts) {
        const script = document.createElement("script");
        script.textContent = `(function(document, addEventListener) {\n${source}\n})(window.__horizon2RecapDocument, window.__horizon2RecapAddEventListener);`;
        document.body.appendChild(script);
        scriptElements.push(script);
        script.remove();
      }
    } finally {
      delete globalWindow.__horizon2RecapDocument;
      delete globalWindow.__horizon2RecapAddEventListener;
    }

    return () => {
      recap.removeEventListener("click", internalLinkHandler);
      windowListeners.forEach(({ type, listener, options }) =>
        window.removeEventListener(type, listener, options),
      );
      documentListeners.forEach(({ type, listener, options }) =>
        document.removeEventListener(type, listener, options),
      );
      addedHeadElements.forEach((element) => element.remove());
      scriptElements.forEach((script) => script.remove());
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-background">
      <SEO
        title="Horizon 2.0 Recap"
        description="Explore the Horizon 2.0 robotics, AI, and sustainability workshop recap from Solarpunk Corps at BIET Jhansi."
        url="https://solarpunkcorps.vercel.app/events/horizon2-2026"
        keywords={[
          "Horizon 2.0",
          "Solarpunk Corps",
          "BIET Jhansi",
          "robotics workshop recap",
          "AI",
          "sustainability",
        ]}
      />
      <Navigation className="horizon2-site-navigation" />
      <style>{`${siteChromeStyles}
@scope (.horizon2-recap) {
${scopedRecapStyles}
:scope { padding-top: var(--site-navigation-height, 65px); }
:scope .nav { top: calc(var(--site-navigation-height, 65px) + env(safe-area-inset-top, 0px)); }
:scope [id] { scroll-margin-top: calc(var(--site-navigation-height, 65px) + 64px); }
}`}</style>
      <div
        ref={recapRef}
        className="horizon2-recap js"
        dangerouslySetInnerHTML={{ __html: recapMarkup }}
      />
      <div className="horizon2-site-footer">
        <Footer />
      </div>
    </div>
  );
}
