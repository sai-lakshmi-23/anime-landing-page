import{r as c,a as f}from"./react-YsBxPMQB.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();var h={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=c,x=Symbol.for("react.element"),v=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,y=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function g(s,a,n){var o,t={},i=null,r=null;n!==void 0&&(i=""+n),a.key!==void 0&&(i=""+a.key),a.ref!==void 0&&(r=a.ref);for(o in a)b.call(a,o)&&!w.hasOwnProperty(o)&&(t[o]=a[o]);if(s&&s.defaultProps)for(o in a=s.defaultProps,a)t[o]===void 0&&(t[o]=a[o]);return{$$typeof:x,type:s,key:i,ref:r,props:t,_owner:y.current}}d.Fragment=v;d.jsx=g;d.jsxs=g;h.exports=d;var e=h.exports,p,u=f;p=u.createRoot,u.hydrateRoot;const N=()=>{const[s,a]=c.useState(!1),n=()=>{a(!s)},o=()=>{a(!1)},t=i=>{const r=document.getElementById(i);r&&(r.scrollIntoView({behavior:"smooth"}),o())};return e.jsxs("nav",{className:"navbar","aria-label":"Main Navigation",role:"navigation",children:[e.jsx("div",{className:"navbar-brand",tabIndex:"0",children:"Lore Olympus"}),e.jsxs("div",{className:`nav-links ${s?"open":""}`,role:"menu","aria-expanded":s,children:[e.jsx("a",{href:"#home",role:"menuitem",onClick:()=>t("home"),children:"Home"}),e.jsx("a",{href:"#characters",role:"menuitem",onClick:()=>t("characters"),children:"Characters"}),e.jsx("a",{href:"#carousel",role:"menuitem",onClick:()=>t("carousel"),children:"Supernatural Manhwas"}),e.jsx("a",{href:"#cta",role:"menuitem",onClick:()=>t("cta"),children:"Read Now"})]}),e.jsx("div",{className:"hamburger",onClick:n,"aria-controls":"navbar-menu","aria-expanded":s,"aria-label":"Toggle navigation menu",tabIndex:"0",children:"☰"})]})},C=()=>e.jsx("section",{id:"home",className:"hero",children:e.jsxs("div",{className:"hero-text",children:[e.jsx("h1",{children:"Jaw-Dropping Moments on Lore Olympus"}),e.jsx("p",{children:"Immerse yourself in the captivating stories of gods and humans!"})]})}),S=[{name:"Naruto Uzumaki",image:"/images/naruto.jpg",description:"Goddess of Spring"},{name:"Luffy",image:"/images/luffy.jpg",description:"God of the Underworld"},{name:"Ichigo Kurasaki",image:"/images/ichigo.jpg",description:"God of the Underworld"},{name:"Saitama",image:"/images/saitama.jpg",description:"God of the Underworld"},{name:"Sung Jin Woo",image:"/images/sung-jin-woo.jpg",description:"God of the Underworld"},{name:"Goku",image:"/images/goku.jpg",description:"God of the Underworld"}],E=()=>e.jsxs("section",{id:"characters",className:"characters-section",role:"region","aria-labelledby":"characters-title",children:[e.jsx("h2",{id:"characters-title",children:"Main Characters"}),e.jsx("div",{className:"characters-grid",role:"grid",children:S.map(s=>e.jsxs("div",{className:"character-card",role:"gridcell",children:[e.jsx("img",{src:s.image,alt:s.name,loading:"lazy",className:"character-image"}),e.jsxs("div",{className:"character-info",role:"contentinfo",children:[e.jsx("h3",{children:s.name}),e.jsx("p",{children:s.description})]})]},s.name))})]}),m=[{title:"Leviathan",image:"/images/pjimage.jpg"},{title:"Tower of God",image:"/images/tog.jpg"},{title:"Leveling Up with Gods",image:"/images/luwg.jpg"},{title:"Existence",image:"/images/existence.jpg"},{title:"The Breaker",image:"/images/breaker.jpg"},{title:"The First Hunter",image:"/images/hunter.jpg"},{title:"Noblesse",image:"/images/noblesse.jpg"},{title:"Ultimate Outcast",image:"/images/outcast.jpg"},{title:"Unholy Blood",image:"/images/blood.jpg"},{title:"Dice: The Cube that Changes Everything",image:"/images/dice.jpg"}],O=()=>{const[s,a]=c.useState(0),[n,o]=c.useState(3);c.useEffect(()=>{const r=()=>{const l=window.innerWidth;l<400?o(1):l<840?o(2):o(3)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]);const t=()=>{s+n<m.length?a(r=>r+1):a(0)},i=()=>{s>0?a(r=>r-1):a(m.length-n)};return c.useEffect(()=>{const r=l=>{l.key==="ArrowRight"?t():l.key==="ArrowLeft"&&i()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[s,n]),e.jsxs("section",{id:"carousel",className:"carousel-section","aria-label":"Supernatural Manhwas Carousel",role:"region",children:[e.jsx("h2",{children:"Supernatural Manhwas"}),e.jsxs("div",{className:"carousel-container",children:[e.jsx("button",{className:"carousel-button left",onClick:i,"aria-label":"Previous Slide",children:"❮"}),e.jsx("div",{className:"carousel-items",role:"listbox",style:{transform:`translateX(-${s*100/n}%)`,transition:"transform 0.5s ease"},children:m.map((r,l)=>e.jsxs("div",{className:"carousel-item",role:"option","aria-selected":l===s,children:[e.jsx("img",{src:r.image,alt:r.title,loading:"lazy",width:"200",height:"300"}),e.jsx("h3",{children:r.title})]},r.title))}),e.jsx("button",{className:"carousel-button right",onClick:t,"aria-label":"Next Slide",children:"❯"})]})]})},k=()=>e.jsx("section",{id:"cta",className:"cta-section",role:"banner","aria-label":"Call to Action",children:e.jsx("button",{className:"cta-button",onClick:()=>window.scrollTo({top:document.getElementById("characters").offsetTop,behavior:"smooth"}),"aria-label":"Read Now and navigate to characters section",children:"Read Now"})}),L=()=>e.jsx("footer",{className:"footer",children:e.jsx("p",{children:"© 2024 Lore Olympus. All Rights Reserved."})}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(C,{}),e.jsx(E,{}),e.jsx(O,{}),e.jsx(k,{}),e.jsx(L,{})]});p(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(_,{})}));
