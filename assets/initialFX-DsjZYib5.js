import{s as d,m as o}from"./Navbar-CWQCo8vM.js";import{g as e}from"./ScrollTrigger-DTqkFlXW.js";import"./index-qM8IKOlX.js";function g(){document.body.style.overflowY="auto",d.paused(!1),document.getElementsByTagName("main")[0].classList.add("main-active"),e.to("body",{backgroundColor:"#0b080c",duration:.5,delay:1});var t=new o([".landing-info h3",".landing-intro h2",".landing-intro h1"],{type:"chars,lines",linesClass:"split-line"});e.fromTo(t.chars,{opacity:0,y:80,filter:"blur(5px)"},{opacity:1,duration:1.2,filter:"blur(0px)",ease:"power3.inOut",y:0,stagger:.025,delay:.3});let a={type:"chars,lines",linesClass:"split-h2"};var i=new o(".landing-h2-info",a);e.fromTo(i.chars,{opacity:0,y:80,filter:"blur(5px)"},{opacity:1,duration:1.2,filter:"blur(0px)",ease:"power3.inOut",y:0,stagger:.025,delay:.3}),e.fromTo(".landing-info-h2",{opacity:0,y:30},{opacity:1,duration:1.2,ease:"power1.inOut",y:0,delay:.8}),e.fromTo([".header",".icons-section",".nav-fade"],{opacity:0},{opacity:1,duration:1.2,ease:"power1.inOut",delay:.1});var n=new o(".landing-h2-info-1",a),r=new o(".landing-h2-1",a),s=new o(".landing-h2-2",a);l(i,n),l(r,s)}function l(t,a){var i=e.timeline({repeat:-1,repeatDelay:1});const n=4,r=n*2+1;i.fromTo(a.chars,{opacity:0,y:80},{opacity:1,duration:1.2,ease:"power3.inOut",y:0,stagger:.1,delay:n},0).fromTo(t.chars,{y:80},{duration:1.2,ease:"power3.inOut",y:0,stagger:.1,delay:r},1).fromTo(t.chars,{y:0},{y:-80,duration:1.2,ease:"power3.inOut",stagger:.1,delay:n},0).to(a.chars,{y:-80,duration:1.2,ease:"power3.inOut",stagger:.1,delay:r},1)}export{g as initialFX};
