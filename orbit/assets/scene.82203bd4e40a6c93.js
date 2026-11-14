;(function(){if(window.__orbitSceneStarted)return;window.__orbitSceneStarted=true;(()=>{function Xh(){let i=matchMedia("(max-width: 700px), (max-height: 600px)"),e=document.getElementById("info-panel"),t=document.querySelector(".bottom-ui");function n(){if(i.matches||innerHeight>900){e.style.removeProperty("--info-available-height");return}let m=t.getBoundingClientRect().top-e.getBoundingClientRect().top-16;e.style.setProperty("--info-available-height",`${Math.max(0,m)}px`)}let s=new ResizeObserver(n);s.observe(t),s.observe(e),addEventListener("resize",n);let r=document.createElement("div");r.className="compact-bar ui";let a=document.createElement("button");a.id="compact-info",a.setAttribute("aria-haspopup","dialog");let o=document.createElement("button");o.id="compact-explore",o.textContent="\u63A2\u7D22\u4E0E\u63A7\u5236 \u2303",o.setAttribute("aria-haspopup","dialog"),r.append(a,o),document.body.append(r);function l(m,p){let _=document.createElement("dialog");_.id=m,_.className="compact-sheet",_.setAttribute("aria-label",p);let M=document.createElement("div");M.className="compact-sheet-header";let y=document.createElement("strong");y.textContent=p;let b=document.createElement("button");return b.textContent="\xD7",b.setAttribute("aria-label","\u6536\u8D77"+p),b.onclick=()=>_.close(),M.append(y,b),_.append(M),document.body.append(_),_}let c=l("compact-details","\u5929\u4F53\u8BE6\u60C5"),u=l("compact-controls","\u63A2\u7D22\u4E0E\u63A7\u5236"),f=document.createElement("div");f.className="compact-extra",u.append(f),a.onclick=()=>c.showModal(),o.onclick=()=>u.showModal();let h=[];function d(m,p){let _=document.querySelector(m);if(!_)return;let M=document.createComment("compact control location");_.before(M),h.push({node:_,marker:M}),p.append(_)}function g(){a.textContent=(document.getElementById("info-name").firstChild?.textContent||"\u5929\u4F53")+" \xB7 \u8BE6\u60C5 \u2303"}new MutationObserver(g).observe(document.getElementById("info-name"),{childList:!0,characterData:!0,subtree:!0}),g();function x(){if(c.close(),u.close(),i.matches&&!h.length){d("#info-panel",c);for(let m of[".scenes","#earthsense-mode-switch",".control-row",".planet-dock","#trajectory-panel","#earthsense-panel",".zoom-controls"])d(m,u);for(let m of[".github-link","#fullscreen","#help-button","#credits-button"])d(m,f);u.append(f)}else if(!i.matches){for(let{node:m,marker:p}of h)p.replaceWith(m);h.length=0}document.body.classList.toggle("compact-ui",i.matches),n()}u.addEventListener("click",m=>{m.target.closest(".planet-button,[data-view],#overview,.trajectory-back,#night-view,#station-view,#jwst-visit")&&u.close()}),c.addEventListener("click",m=>{m.target.closest("button:not(.compact-sheet-header button)")&&c.close()});for(let m of[c,u])m.addEventListener("click",p=>{if(p.target===m){let _=m.getBoundingClientRect();(p.clientX<_.left||p.clientX>_.right||p.clientY<_.top||p.clientY>_.bottom)&&m.close()}});i.addEventListener("change",x),x()}var Qa=Object.freeze([.6,.45,1]),qh=[0,6e3,0],Yh={id:"trajectory",kind:"trajectory",cn:"\u8FD0\u52A8\u8F68\u8FF9",en:"SOLAR SYSTEM IN MOTION",index:"09",type:"\u592A\u9633\u7CFB \xB7 \u8FD0\u52A8\u793A\u610F",r:1,viewDistance:600,position:[-150,5970,-60],desc:"\u8DDF\u968F\u592A\u9633\u524D\u884C\uFF0C\u770B\u516B\u9897\u884C\u661F\u5728\u516C\u8F6C\u4E2D\u7559\u4E0B\u8F68\u8FF9\u3002\u5207\u6362\u53C2\u7167\u7CFB\uFF0C\u53EF\u5BF9\u7167\u5411\u524D\u5EF6\u4F38\u7684\u66F2\u7EBF\u4E0E\u56F4\u7ED5\u592A\u9633\u7684\u8FD0\u884C\u8F68\u9053\u3002",stat1:"\u8FFD\u8E2A\u5929\u4F53",diameter:"\u592A\u9633 + 8",unit1:"\u884C\u661F",stat2:"\u8FD0\u52A8\u6BD4\u4F8B",value2:"\u6F14\u793A",unit2:"\u975E\u7B49\u6BD4",sourceUrl:"https://science.nasa.gov/solar-system/solar-system-facts/",sourceLabel:"NASA \xB7 \u592A\u9633\u7CFB\u8FD0\u52A8"};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var $i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fd=0,Eu=1,Nd=2;var Sa=1,Ud=2,ur=3,bn=0,Xt=1,pt=2,Dn=0,hs=1,wt=2,Tu=3,wu=4,Od=5;var Gi=100,Bd=101,zd=102,kd=103,Hd=104,Vd=200,Gd=201,Wd=202,Xd=203,Lo=204,Fo=205,qd=206,Yd=207,jd=208,$d=209,Zd=210,Kd=211,Jd=212,Qd=213,ef=214,No=0,Uo=1,Oo=2,ds=3,Bo=4,zo=5,ko=6,Ho=7,yl=0,tf=1,nf=2,jn=0,Ea=1,Ta=2,wa=3,bs=4,Aa=5,Ra=6,Ca=7;var Au=300,Ki=301,Ms=302,hr=303,_l=304,Pa=306,js=1e3,si=1001,Vo=1002,Jt=1003,sf=1004;var Ia=1005;var Tt=1006,bl=1007;var di=1008;var mn=1009,Ru=1010,Cu=1011,dr=1012,Ml=1013,$n=1014,Ln=1015,cn=1016,Sl=1017,El=1018,fr=1020,Pu=35902,Iu=35899,Du=1021,Lu=1022,Fn=1023,ai=1026,Ji=1027,pr=1028,Tl=1029,Qi=1030,wl=1031;var Al=1033,Da=33776,La=33777,Fa=33778,Na=33779,Rl=35840,Cl=35841,Pl=35842,Il=35843,Dl=36196,Ll=37492,Fl=37496,Nl=37488,Ul=37489,Ua=37490,Ol=37491,Bl=37808,zl=37809,kl=37810,Hl=37811,Vl=37812,Gl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,jl=37818,$l=37819,Zl=37820,Kl=37821,Jl=36492,Ql=36494,ec=36495,tc=36283,nc=36284,Oa=36285,ic=36286;var Wr=2300,Go=2301,Io=2302,cu=2303,uu=2400,hu=2401,du=2402;var rf=3200;var Ba=0,af=1,Zn="",Ot="srgb",Xr="srgb-linear",qr="linear",ut="srgb";var ls=7680;var fu=519,of=512,lf=513,cf=514,sc=515,uf=516,hf=517,rc=518,df=519,Wo=35044;var Fu="300 es",Wn=2e3,$s=2001;function r0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function a0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ff(){let i=Zs("canvas");return i.style.display="block",i}var jh={},Ks=null;function Yr(...i){let e="THREE."+i.shift();Ks?Ks("log",e,...i):console.log(e,...i)}function pf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=pf(i);let e="THREE."+i.shift();if(Ks)Ks("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=pf(i);let e="THREE."+i.shift();if(Ks)Ks("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function us(...i){let e=i.join(" ");e in jh||(jh[e]=!0,Xe(...i))}function mf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var gf={[No]:Uo,[Oo]:ko,[Bo]:Ho,[ds]:zo,[Uo]:No,[ko]:Oo,[Ho]:Bo,[zo]:ds},Xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$h=1234567,kr=Math.PI/180,Js=180/Math.PI;function ri(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Nu(i,e){return(i%e+e)%e}function o0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function l0(i,e,t){return i!==e?(t-i)/(e-i):0}function Hr(i,e,t){return(1-t)*i+t*e}function c0(i,e,t,n){return Hr(i,e,1-Math.exp(-t*n))}function u0(i,e=1){return e-Math.abs(Nu(i,e*2)-e)}function h0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function d0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function f0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function p0(i,e){return i+Math.random()*(e-i)}function m0(i){return i*(.5-Math.random())}function g0(i){i!==void 0&&($h=i);let e=$h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x0(i){return i*kr}function v0(i){return i*Js}function y0(i){return(i&i-1)===0&&i!==0}function _0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function b0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function M0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Se={DEG2RAD:kr,RAD2DEG:Js,generateUUID:ri,clamp:it,euclideanModulo:Nu,mapLinear:o0,inverseLerp:l0,lerp:Hr,damp:c0,pingpong:u0,smoothstep:h0,smootherstep:d0,randInt:f0,randFloat:p0,randFloatSpread:m0,seededRandom:g0,degToRad:x0,radToDeg:v0,isPowerOfTwo:y0,ceilPowerOfTwo:_0,floorPowerOfTwo:b0,setQuaternionFromProperEuler:M0,normalize:ft,denormalize:Gn},Hu=class Hu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hu.prototype.isVector2=!0;var ce=Hu,_t=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);p=Math.sin(p*_)/M,o=Math.sin(o*_)/M,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+x*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+x*o;let _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vu=class Vu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vu.prototype.isVector3=!0;var I=Vu,Uc=new I,Zh=new _t,Gu=class Gu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],M=s[4],y=s[7],b=s[2],S=s[5],w=s[8];return r[0]=a*x+o*_+l*b,r[3]=a*m+o*M+l*S,r[6]=a*p+o*y+l*w,r[1]=c*x+u*_+f*b,r[4]=c*m+u*M+f*S,r[7]=c*p+u*y+f*w,r[2]=h*x+d*_+g*b,r[5]=h*m+d*M+g*S,r[8]=h*p+d*y+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oc.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oc.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gu.prototype.isMatrix3=!0;var Qe=Gu,Oc=new Qe,Kh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S0(){let i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:e,whitePoint:n,transfer:qr,toXYZ:Kh,fromXYZ:Jh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Kh,fromXYZ:Jh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}var lt=S0();function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cs,Xo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=Zs("canvas")),Cs.width=e.width,Cs.height=e.height;let s=Cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},E0=0,Qs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bc(s[a].image)):r.push(Bc(s[a]))}else r=Bc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var T0=0,zc=new I,rn=class i extends Xn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,s=si,r=Tt,a=di,o=Fn,l=mn,c=i.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=ri(),this.name="",this.source=new Qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zc).x}get height(){return this.source.getSize(zc).y}get depth(){return this.source.getSize(zc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Au;rn.DEFAULT_ANISOTROPY=1;var Wu=class Wu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,b=(p+1)/2,S=(u+h)/4,w=(f+x)/4,v=(g+m)/4;return M>y&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=w/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=v/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wu.prototype.isVector4=!0;var Rt=Wu,qo=class extends Xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new rn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},jr=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yo=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vl=class vl{constructor(e,t,n,s,r,a,o,l,c,u,f,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,d,g,x,m)}set(e,t,n,s,r,a,o,l,c,u,f,h,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),a=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,d=a*f,g=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,g=c*u,x=c*f;t[0]=h+x*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,g=c*u,x=c*f;t[0]=h-x*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,d=a*f,g=o*u,x=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-x*f}else if(e.order==="XZY"){let h=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w0,e,A0)}lookAt(e,t,n){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Oi.crossVectors(n,yn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Oi.crossVectors(n,yn)),Oi.normalize(),eo.crossVectors(yn,Oi),s[0]=Oi.x,s[4]=eo.x,s[8]=yn.x,s[1]=Oi.y,s[5]=eo.y,s[9]=yn.y,s[2]=Oi.z,s[6]=eo.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],M=n[7],y=n[11],b=n[15],S=s[0],w=s[4],v=s[8],E=s[12],T=s[1],C=s[5],R=s[9],D=s[13],k=s[2],N=s[6],O=s[10],U=s[14],W=s[3],V=s[7],B=s[11],G=s[15];return r[0]=a*S+o*T+l*k+c*W,r[4]=a*w+o*C+l*N+c*V,r[8]=a*v+o*R+l*O+c*B,r[12]=a*E+o*D+l*U+c*G,r[1]=u*S+f*T+h*k+d*W,r[5]=u*w+f*C+h*N+d*V,r[9]=u*v+f*R+h*O+d*B,r[13]=u*E+f*D+h*U+d*G,r[2]=g*S+x*T+m*k+p*W,r[6]=g*w+x*C+m*N+p*V,r[10]=g*v+x*R+m*O+p*B,r[14]=g*E+x*D+m*U+p*G,r[3]=_*S+M*T+y*k+b*W,r[7]=_*w+M*C+y*N+b*V,r[11]=_*v+M*R+y*O+b*B,r[15]=_*E+M*D+y*U+b*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15],_=l*d-c*h,M=o*d-c*f,y=o*h-l*f,b=a*d-c*u,S=a*h-l*u,w=a*f-o*u;return t*(x*_-m*M+p*y)-n*(g*_-m*b+p*S)+s*(g*M-x*b+p*w)-r*(g*y-x*S+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=t*o-n*a,M=t*l-s*a,y=t*c-r*a,b=n*l-s*o,S=n*c-r*o,w=s*c-r*l,v=u*x-f*g,E=u*m-h*g,T=u*p-d*g,C=f*m-h*x,R=f*p-d*x,D=h*p-d*m,k=_*D-M*R+y*C+b*T-S*E+w*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/k;return e[0]=(o*D-l*R+c*C)*N,e[1]=(s*R-n*D-r*C)*N,e[2]=(x*w-m*S+p*b)*N,e[3]=(h*S-f*w-d*b)*N,e[4]=(l*T-a*D-c*E)*N,e[5]=(t*D-s*T+r*E)*N,e[6]=(m*y-g*w-p*M)*N,e[7]=(u*w-h*y+d*M)*N,e[8]=(a*R-o*T+c*v)*N,e[9]=(n*T-t*R-r*v)*N,e[10]=(g*S-x*y+p*_)*N,e[11]=(f*y-u*S-d*_)*N,e[12]=(o*E-a*C-l*v)*N,e[13]=(t*C-n*E+s*v)*N,e[14]=(x*M-g*b-m*_)*N,e[15]=(u*b-f*M+h*_)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,x=a*u,m=a*f,p=o*f,_=l*c,M=l*u,y=l*f,b=n.x,S=n.y,w=n.z;return s[0]=(1-(x+p))*b,s[1]=(d+y)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(d-y)*S,s[5]=(1-(h+p))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+M)*w,s[9]=(m-_)*w,s[10]=(1-(h+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),l=Ps.set(s[8],s[9],s[10]).length();r<0&&(a=-a),kn.copy(this);let c=1/a,u=1/o,f=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,t.setFromRotationMatrix(kn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Wn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Wn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===$s)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Wn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Wn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===$s)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};vl.prototype.isMatrix4=!0;var ot=vl,Ps=new I,kn=new ot,w0=new I(0,0,0),A0=new I(1,1,1),Oi=new I,eo=new I,yn=new I,Qh=new ot,ed=new _t,dn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ed.setFromEuler(this),this.setFromQuaternion(ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},R0=0,td=new I,Is=new _t,vi=new ot,to=new I,Cr=new I,C0=new I,P0=new _t,nd=new I(1,0,0),id=new I(0,1,0),sd=new I(0,0,1),rd={type:"added"},I0={type:"removed"},Ds={type:"childadded",child:null},kc={type:"childremoved",child:null},an=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new dn,n=new _t,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Qe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(nd,e)}rotateY(e){return this.rotateOnAxis(id,e)}rotateZ(e){return this.rotateOnAxis(sd,e)}translateOnAxis(e,t){return td.copy(e).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nd,e)}translateY(e){return this.translateOnAxis(id,e)}translateZ(e){return this.translateOnAxis(sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?to.copy(e):to.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Cr,to,this.up):vi.lookAt(to,Cr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(vi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rd),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rd),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,C0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,P0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};an.DEFAULT_UP=new I(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ze=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},D0={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},no={h:0,s:0,l:0};function Hc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Nu(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Hc(a,r,e+1/3),this.g=Hc(a,r,e),this.b=Hc(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=xf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return lt.workingToColorSpace(sn.copy(this),e),Math.round(it(sn.r*255,0,255))*65536+Math.round(it(sn.g*255,0,255))*256+Math.round(it(sn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(sn.copy(this),t);let n=sn.r,s=sn.g,r=sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Ot){lt.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,s=sn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(no);let n=Hr(Bi.h,no.h,t),s=Hr(Bi.s,no.s,t),r=Hr(Bi.l,no.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new ge;ge.NAMES=xf;var $r=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new I,yi=new I,Vc=new I,_i=new I,Ls=new I,Fs=new I,ad=new I,Gc=new I,Wc=new I,Xc=new I,qc=new Rt,Yc=new Rt,jc=new Rt,Si=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),yi.subVectors(n,t),Vc.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(yi),l=Hn.dot(Vc),c=yi.dot(yi),u=yi.dot(Vc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return qc.setScalar(0),Yc.setScalar(0),jc.setScalar(0),qc.fromBufferAttribute(e,t),Yc.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(qc,r.x),a.addScaledVector(Yc,r.y),a.addScaledVector(jc,r.z),a}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),yi.subVectors(e,t),Hn.cross(yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Hn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ls.subVectors(s,n),Fs.subVectors(r,n),Gc.subVectors(e,n);let l=Ls.dot(Gc),c=Fs.dot(Gc);if(l<=0&&c<=0)return t.copy(n);Wc.subVectors(e,s);let u=Ls.dot(Wc),f=Fs.dot(Wc);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ls,a);Xc.subVectors(e,r);let d=Ls.dot(Xc),g=Fs.dot(Xc);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Fs,o);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return ad.subVectors(r,s),o=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(ad,o);let p=1/(m+x+h);return a=x*p,o=h*p,t.copy(n).addScaledVector(Ls,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),io.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox)),io.applyMatrix4(e.matrixWorld),this.union(io)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),so.subVectors(this.max,Pr),Ns.subVectors(e.a,Pr),Us.subVectors(e.b,Pr),Os.subVectors(e.c,Pr),zi.subVectors(Us,Ns),ki.subVectors(Os,Us),ss.subVectors(Ns,Os);let t=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-ss.z,ss.y,zi.z,0,-zi.x,ki.z,0,-ki.x,ss.z,0,-ss.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-ss.y,ss.x,0];return!$c(t,Ns,Us,Os,so)||(t=[1,0,0,0,1,0,0,0,1],!$c(t,Ns,Us,Os,so))?!1:(ro.crossVectors(zi,ki),t=[ro.x,ro.y,ro.z],$c(t,Ns,Us,Os,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new I,new I,new I,new I,new I,new I,new I,new I],Vn=new I,io=new Pn,Ns=new I,Us=new I,Os=new I,zi=new I,ki=new I,ss=new I,Pr=new I,so=new I,ro=new I,rs=new I;function $c(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){rs.fromArray(i,r);let o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var zt=new I,ao=new ce,L0=0,Ht=class extends Xn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wo,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Zr=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Kr=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Pe=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},F0=new Pn,Ir=new I,Zc=new I,Qt=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):F0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Zc)),this.expandByPoint(Ir.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},N0=0,Rn=new ot,Kc=new an,Bs=new I,_n=new Pn,Dr=new Pn,Kt=new I,Ke=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r0(e)?Kr:Zr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(_n.min,Dr.min),_n.expandByPoint(Kt),Kt.addVectors(_n.max,Dr.max),_n.expandByPoint(Kt)):(_n.expandByPoint(Dr.min),_n.expandByPoint(Dr.max))}_n.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Kt.fromBufferAttribute(o,c),l&&(Bs.fromBufferAttribute(e,c),Kt.add(Bs)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new I,l[v]=new I;let c=new I,u=new I,f=new I,h=new ce,d=new ce,g=new ce,x=new I,m=new I;function p(v,E,T){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,T),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,T),u.sub(c),f.sub(c),d.sub(h),g.sub(h);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(C),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),o[v].add(x),o[E].add(x),o[T].add(x),l[v].add(m),l[E].add(m),l[T].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,E=_.length;v<E;++v){let T=_[v],C=T.start,R=T.count;for(let D=C,k=C+R;D<k;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new I,y=new I,b=new I,S=new I;function w(v){b.fromBufferAttribute(s,v),S.copy(b);let E=o[v];M.copy(E),M.sub(b.multiplyScalar(b.dot(E))).normalize(),y.crossVectors(S,E);let C=y.dot(l[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,C)}for(let v=0,E=_.length;v<E;++v){let T=_[v],C=T.start,R=T.count;for(let D=C,k=C+R;D<k;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let h=0,d=e.count;h<d;h+=3){let g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Ht(h,u,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},jo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wo,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new I,Jr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},U0=0,In=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=hs,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Fo,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lo&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},oi=class extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zs,Lr=new I,ks=new I,Hs=new I,Vs=new ce,Fr=new ce,vf=new ot,oo=new I,Nr=new I,lo=new I,od=new ce,Jc=new ce,ld=new ce,Ti=class extends an{constructor(e=new oi){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new Ke;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jo(t,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new Jr(n,3,0,!1)),zs.setAttribute("uv",new Jr(n,2,3,!1))}this.geometry=zs,this.material=e,this.center=new ce(.5,.5),this.count=1}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),vf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Hs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;co(oo.set(-.5,-.5,0),Hs,a,ks,s,r),co(Nr.set(.5,-.5,0),Hs,a,ks,s,r),co(lo.set(.5,.5,0),Hs,a,ks,s,r),od.set(0,0),Jc.set(1,0),ld.set(1,1);let o=e.ray.intersectTriangle(oo,Nr,lo,!1,Lr);if(o===null&&(co(Nr.set(-.5,.5,0),Hs,a,ks,s,r),Jc.set(0,1),o=e.ray.intersectTriangle(oo,lo,Nr,!1,Lr),o===null))return;let l=e.ray.origin.distanceTo(Lr);l<e.near||l>e.far||t.push({distance:l,point:Lr.clone(),uv:Si.getInterpolation(Lr,oo,Nr,lo,od,Jc,ld,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function co(i,e,t,n,s,r){Vs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Fr.x=r*Vs.x-s*Vs.y,Fr.y=s*Vs.x+r*Vs.y):Fr.copy(Vs),i.copy(e),i.x+=Fr.x,i.y+=Fr.y,i.applyMatrix4(vf)}var Mi=new I,Qc=new I,uo=new I,Hi=new I,eu=new I,ho=new I,tu=new I,wi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qc.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Qc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(uo),o=Hi.dot(this.direction),l=-Hi.dot(uo),c=Hi.lengthSq(),u=Math.abs(1-a*a),f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){let x=1/u;f*=x,h*=x,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Qc).addScaledVector(uo,h),d}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,s,r){eu.subVectors(t,e),ho.subVectors(n,e),tu.crossVectors(eu,ho);let a=this.direction.dot(tu),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);let l=o*this.direction.dot(ho.crossVectors(Hi,ho));if(l<0)return null;let c=o*this.direction.dot(eu.cross(Hi));if(c<0||l+c>a)return null;let u=-o*Hi.dot(tu);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cd=new ot,as=new wi,fo=new Qt,ud=new I,po=new I,mo=new I,go=new I,nu=new I,xo=new I,hd=new I,vo=new I,We=class extends an{constructor(e=new Ke,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(nu.fromBufferAttribute(f,e),a?xo.addScaledVector(nu,u):xo.addScaledVector(nu.sub(t),u))}t.add(xo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(fo.containsPoint(as.origin)===!1&&(as.intersectSphere(fo,ud)===null||as.origin.distanceToSquared(ud)>(e.far-e.near)**2))&&(cd.copy(r).invert(),as.copy(e.ray).applyMatrix4(cd),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,b=M;y<b;y+=3){let S=o.getX(y),w=o.getX(y+1),v=o.getX(y+2);s=yo(this,p,e,n,c,u,f,S,w,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);s=yo(this,a,e,n,c,u,f,_,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,b=M;y<b;y+=3){let S=y,w=y+1,v=y+2;s=yo(this,p,e,n,c,u,f,S,w,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=m,M=m+1,y=m+2;s=yo(this,a,e,n,c,u,f,_,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function O0(i,e,t,n,s,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===bn,o),l===null)return null;vo.copy(o),vo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(vo);return c<t.near||c>t.far?null:{distance:c,point:vo.clone(),object:i}}function yo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,po),i.getVertexPosition(l,mo),i.getVertexPosition(c,go);let u=O0(i,e,t,n,po,mo,go,hd);if(u){let f=new I;Si.getBarycoord(hd,po,mo,go,f),s&&(u.uv=Si.getInterpolatedAttribute(s,o,l,c,f,new ce)),r&&(u.uv1=Si.getInterpolatedAttribute(r,o,l,c,f,new ce)),a&&(u.normal=Si.getInterpolatedAttribute(a,o,l,c,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};Si.getNormal(po,mo,go,h.normal),u.face=h,u.barycoord=f}return u}var pn=class extends rn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Jt,u=Jt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new ot,dd=new ot,_o=[],fd=new Pn,B0=new ot,Ur=new We,Or=new Qt,Wi=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new li(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,B0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),fd.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(fd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Or.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),e.ray.intersectsSphere(Or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),dd.multiplyMatrices(n,Gs),Ur.matrixWorld=dd,Ur.raycast(e,_o);for(let a=0,o=_o.length;a<o;a++){let l=_o[a];l.instanceId=r,l.object=this,t.push(l)}_o.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new li(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pn(new Float32Array(s*this.count),s,this.count,pr,Ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},iu=new I,z0=new I,k0=new Qe,Cn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=iu.subVectors(n,t).cross(z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(iu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||k0.getNormalMatrix(e),s=this.coplanarPoint(iu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new Qt,H0=new ce(.5,.5),bo=new I,nr=class{constructor(e=new Cn,t=new Cn,n=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],_=r[12],M=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,d-u,p-g,b-_).normalize(),s[1].setComponents(c+a,d+u,p+g,b+_).normalize(),s[2].setComponents(c+o,d+f,p+x,b+M).normalize(),s[3].setComponents(c-o,d-f,p-x,b-M).normalize(),n)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,d-h,p-m,b-y).normalize();else if(s[4].setComponents(c-l,d-h,p-m,b-y).normalize(),t===Wn)s[5].setComponents(c+l,d+h,p+m,b+y).normalize();else if(t===$s)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=H0.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(bo.x=s.normal.x>0?e.max.x:e.min.x,bo.y=s.normal.y>0?e.max.y:e.min.y,bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ln=class extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$o=new I,Zo=new I,pd=new ot,Br=new wi,Mo=new Qt,su=new I,md=new I,ci=class extends an{constructor(e=new Ke,t=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$o.fromBufferAttribute(t,s-1),Zo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$o.distanceTo(Zo);e.setAttribute("lineDistance",new Pe(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;pd.copy(s).invert(),Br.copy(e.ray).applyMatrix4(pd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),_=u.getX(x+1),M=So(this,e,Br,l,p,_,x);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=So(this,e,Br,l,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=So(this,e,Br,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=So(this,e,Br,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function So(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if($o.fromBufferAttribute(o,s),Zo.fromBufferAttribute(o,r),t.distanceSqToSegment($o,Zo,su,md)>n)return;su.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(su);if(!(c<e.near||c>e.far))return{distance:c,point:md.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var gd=new I,xd=new I,fs=class extends ci{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gd.fromBufferAttribute(t,s),xd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gd.distanceTo(xd);e.setAttribute("lineDistance",new Pe(n,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ps=class extends ci{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ko=class extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vd=new ot,pu=new wi,Eo=new Qt,To=new I,ms=class extends an{constructor(e=new Ke,t=new Ko){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;vd.copy(s).invert(),pu.copy(e.ray).applyMatrix4(vd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,x=d;g<x;g++){let m=c.getX(g);To.fromBufferAttribute(f,m),yd(To,m,l,s,e,t,this)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,x=d;g<x;g++)To.fromBufferAttribute(f,g),yd(To,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yd(i,e,t,n,s,r,a){let o=pu.distanceSqToPoint(i);if(o<t){let l=new I;pu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Qr=class extends rn{constructor(e=[],t=Ki,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ea=class extends rn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ai=class extends rn{constructor(e,t,n=$n,s,r,a,o=Jt,l=Jt,c,u=ai,f=1){if(u!==ai&&u!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jo=class extends Ai{constructor(e,t=$n,n=Ki,s,r,a=Jt,o=Jt,l,c=ai){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ta=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vt=class i extends Ke{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(f,2));function g(x,m,p,_,M,y,b,S,w,v,E){let T=y/w,C=b/v,R=y/2,D=b/2,k=S/2,N=w+1,O=v+1,U=0,W=0,V=new I;for(let B=0;B<O;B++){let G=B*C-D;for(let $=0;$<N;$++){let xe=$*T-R;V[x]=xe*_,V[m]=G*M,V[p]=k,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[p]=S>0?1:-1,u.push(V.x,V.y,V.z),f.push($/w),f.push(1-B/v),U+=1}}for(let B=0;B<v;B++)for(let G=0;G<w;G++){let $=h+G+N*B,xe=h+G+N*(B+1),ee=h+(G+1)+N*(B+1),te=h+(G+1)+N*B;l.push($,xe,te),l.push(xe,ee,te),W+=6}o.addGroup(d,W,E),d+=W,h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var na=class i extends Ke{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,u=new ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gt=class i extends Ke{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,x=[],m=n/2,p=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Pe(f,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(d,2));function _(){let y=new I,b=new I,S=0,w=(t-e)/n;for(let v=0;v<=r;v++){let E=[],T=v/r,C=T*(t-e)+e;for(let R=0;R<=s;R++){let D=R/s,k=D*l+o,N=Math.sin(k),O=Math.cos(k);b.x=C*N,b.y=-T*n+m,b.z=C*O,f.push(b.x,b.y,b.z),y.set(N,w,O).normalize(),h.push(y.x,y.y,y.z),d.push(D,1-T),E.push(g++)}x.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){let T=x[E][v],C=x[E+1][v],R=x[E+1][v+1],D=x[E][v+1];(e>0||E!==0)&&(u.push(T,C,D),S+=3),(t>0||E!==r-1)&&(u.push(C,R,D),S+=3)}c.addGroup(p,S,0),p+=S}function M(y){let b=g,S=new ce,w=new I,v=0,E=y===!0?e:t,T=y===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,m*T,0),h.push(0,T,0),d.push(.5,.5),g++;let C=g;for(let R=0;R<=s;R++){let k=R/s*l+o,N=Math.cos(k),O=Math.sin(k);w.x=E*O,w.y=m*T,w.z=E*N,f.push(w.x,w.y,w.z),h.push(0,T,0),S.x=N*.5+.5,S.y=O*.5*T+.5,d.push(S.x,S.y),g++}for(let R=0;R<s;R++){let D=b+R,k=C+R;y===!0?u.push(k,k+1,D):u.push(k+1,k,D),v+=3}c.addGroup(p,v,y===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ia=class i extends Ke{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new I,y=new I,b=new I;for(let S=0;S<t.length;S+=3)d(t[S+0],M),d(t[S+1],y),d(t[S+2],b),l(M,y,b,_)}function l(_,M,y,b){let S=b+1,w=[];for(let v=0;v<=S;v++){w[v]=[];let E=_.clone().lerp(y,v/S),T=M.clone().lerp(y,v/S),C=S-v;for(let R=0;R<=C;R++)R===0&&v===S?w[v][R]=E:w[v][R]=E.clone().lerp(T,R/C)}for(let v=0;v<S;v++)for(let E=0;E<2*(S-v)-1;E++){let T=Math.floor(E/2);E%2===0?(h(w[v][T+1]),h(w[v+1][T]),h(w[v][T])):(h(w[v][T+1]),h(w[v+1][T+1]),h(w[v+1][T]))}}function c(_){let M=new I;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(_),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){let _=new I;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let y=m(_)/2/Math.PI+.5,b=p(_)/Math.PI+.5;a.push(y,1-b)}g(),f()}function f(){for(let _=0;_<a.length;_+=6){let M=a[_+0],y=a[_+2],b=a[_+4],S=Math.max(M,y,b),w=Math.min(M,y,b);S>.9&&w<.1&&(M<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function d(_,M){let y=_*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){let _=new I,M=new I,y=new I,b=new I,S=new ce,w=new ce,v=new ce;for(let E=0,T=0;E<r.length;E+=9,T+=6){_.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),S.set(a[T+0],a[T+1]),w.set(a[T+2],a[T+3]),v.set(a[T+4],a[T+5]),b.copy(_).add(M).add(y).divideScalar(3);let C=m(b);x(S,T+0,_,C),x(w,T+2,M,C),x(v,T+4,y,C)}}function x(_,M,y,b){b<0&&_.x===1&&(a[M]=_.x-1),y.x===0&&y.z===0&&(a[M]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ce:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new ot;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(it(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(it(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ir=class extends Mn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qo=class extends ir{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Uu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var _d=new I,bd=new I,ru=new Uu,au=new Uu,ou=new Uu,sr=class extends Mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(bd.subVectors(s[0],s[1]).add(s[0]),c=bd);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(_d.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=_d),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ru.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,x,m),au.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,x,m),ou.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(ru.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),au.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),ou.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(ru.calc(l),au.calc(l),ou.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Md(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function V0(i,e){let t=1-i;return t*t*e}function G0(i,e){return 2*(1-i)*i*e}function W0(i,e){return i*i*e}function Vr(i,e,t,n){return V0(i,e)+G0(i,t)+W0(i,n)}function X0(i,e){let t=1-i;return t*t*t*e}function q0(i,e){let t=1-i;return 3*t*t*i*e}function Y0(i,e){return 3*(1-i)*i*i*e}function j0(i,e){return i*i*i*e}function Gr(i,e,t,n,s){return X0(i,e)+q0(i,t)+Y0(i,n)+j0(i,s)}var sa=class extends Mn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(e,s.x,r.x,a.x,o.x),Gr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},el=class extends Mn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(e,s.x,r.x,a.x,o.x),Gr(e,s.y,r.y,a.y,o.y),Gr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends Mn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends Mn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Mn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Vr(e,s.x,r.x,a.x),Vr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends Mn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Vr(e,s.x,r.x,a.x),Vr(e,s.y,r.y,a.y),Vr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Md(o,l.x,c.x,u.x,f.x),Md(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},mu=Object.freeze({__proto__:null,ArcCurve:Qo,CatmullRomCurve3:sr,CubicBezierCurve:sa,CubicBezierCurve3:el,EllipseCurve:ir,LineCurve:ra,LineCurve3:tl,QuadraticBezierCurve:aa,QuadraticBezierCurve3:nl,SplineCurve:oa}),il=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new mu[s.type]().fromJSON(s))}return this}},la=class extends il{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ra(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new aa(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new sa(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new oa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new ir(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},rr=class extends la{constructor(e){super(e),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new la().fromJSON(s))}return this}};function $0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=yf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=eg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,f=l;for(let h=t;h<s;h+=t){let d=i[h],g=i[h+1];d<o&&(o=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return ca(r,a,t,o,l,c,0),a}function yf(i,e,t,n,s){let r;if(s===hg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Sd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Sd(a/n|0,i[a],i[a+1],r);return r&&ar(r,r.next)&&(ha(r),r=r.next),r}function gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ar(t,t.next)||Ct(t.prev,t,t.next)===0)){if(ha(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ca(i,e,t,n,s,r,a){if(!i)return;!a&&r&&rg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?K0(i,n,s,r):Z0(i)){e.push(l.i,i.i,c.i),ha(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=J0(gs(i),e),ca(i,e,t,n,s,r,2)):a===2&&Q0(i,e,t,n,s,r):ca(gs(i),e,t,n,s,r,1);break}}}function Z0(i){let e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&zr(s,o,r,l,a,c,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function K0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ct(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),g=Math.min(u,f,h),x=Math.max(o,l,c),m=Math.max(u,f,h),p=gu(d,g,e,t,n),_=gu(x,m,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=p&&y&&y.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&zr(o,u,l,f,c,h,M.x,M.y)&&Ct(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&zr(o,u,l,f,c,h,y.x,y.y)&&Ct(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&zr(o,u,l,f,c,h,M.x,M.y)&&Ct(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&zr(o,u,l,f,c,h,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function J0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ar(n,s)&&bf(n,t,t.next,s)&&ua(n,s)&&ua(s,n)&&(e.push(n.i,t.i,s.i),ha(t),ha(t.next),t=i=s),t=t.next}while(t!==i);return gs(t)}function Q0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lg(a,o)){let l=Mf(a,o);a=gs(a,a.next),l=gs(l,l.next),ca(a,e,t,n,s,r,0),ca(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function eg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=yf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(og(c))}s.sort(tg);for(let r=0;r<s.length;r++)t=ng(s[r],t);return t}function tg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ng(i,e){let t=ig(i,e);if(!t)return e;let n=Mf(t,i);return gs(n,n.next),gs(t,t.next)}function ig(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ar(i,t))return t;do{if(ar(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&_f(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);ua(t,i)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&sg(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function sg(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function rg(i,e,t,n){let s=i;do s.z===0&&(s.z=gu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ag(s)}function ag(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function gu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function og(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _f(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function zr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&_f(i,e,t,n,s,r,a,o)}function lg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cg(i,e)&&(ua(i,e)&&ua(e,i)&&ug(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||ar(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ar(i,e){return i.x===e.x&&i.y===e.y}function bf(i,e,t,n){let s=Ao(Ct(i,e,t)),r=Ao(Ct(i,e,n)),a=Ao(Ct(t,n,i)),o=Ao(Ct(t,n,e));return!!(s!==r&&a!==o||s===0&&wo(i,t,e)||r===0&&wo(i,n,e)||a===0&&wo(t,i,n)||o===0&&wo(t,e,n))}function wo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ao(i){return i>0?1:i<0?-1:0}function cg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&bf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ua(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function ug(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mf(i,e){let t=xu(i.i,i.x,i.y),n=xu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sd(i,e,t,n){let s=xu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ha(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var vu=class{static triangulate(e,t,n=2){return $0(e,t,n)}},cs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ed(e),Td(n,e);let a=e.length;t.forEach(Ed);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Td(n,t[l]);let o=vu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ed(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Td(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var da=class i extends Ke{constructor(e=new rr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Pe(s,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:dg,M,y=!1,b,S,w,v;if(p){M=p.getSpacedPoints(u),y=!0,h=!1;let se=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,se),S=new I,w=new I,v=new I}h||(m=0,d=0,g=0,x=0);let E=o.extractPoints(c),T=E.shape,C=E.holes;if(!cs.isClockWise(T)){T=T.reverse();for(let se=0,ue=C.length;se<ue;se++){let ie=C[se];cs.isClockWise(ie)&&(C[se]=ie.reverse())}}function D(se){let ie=10000000000000001e-36,pe=se[0];for(let ve=1;ve<=se.length;ve++){let Ue=ve%se.length,Ne=se[Ue],qe=Ne.x-pe.x,$e=Ne.y-pe.y,H=qe*qe+$e*$e,dt=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(pe.x),Math.abs(pe.y)),rt=ie*dt*dt;if(H<=rt){se.splice(Ue,1),ve--;continue}pe=Ne}}D(T),C.forEach(D);let k=C.length,N=T;for(let se=0;se<k;se++){let ue=C[se];T=T.concat(ue)}function O(se,ue,ie){return ue||je("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ue,ie)}let U=T.length;function W(se,ue,ie){let pe,ve,Ue,Ne=se.x-ue.x,qe=se.y-ue.y,$e=ie.x-se.x,H=ie.y-se.y,dt=Ne*Ne+qe*qe,rt=Ne*H-qe*$e;if(Math.abs(rt)>Number.EPSILON){let F=Math.sqrt(dt),A=Math.sqrt($e*$e+H*H),Z=ue.x-qe/F,Q=ue.y+Ne/F,oe=ie.x-H/A,_e=ie.y+$e/A,be=((oe-Z)*H-(_e-Q)*$e)/(Ne*H-qe*$e);pe=Z+Ne*be-se.x,ve=Q+qe*be-se.y;let le=pe*pe+ve*ve;if(le<=2)return new ce(pe,ve);Ue=Math.sqrt(le/2)}else{let F=!1;Ne>Number.EPSILON?$e>Number.EPSILON&&(F=!0):Ne<-Number.EPSILON?$e<-Number.EPSILON&&(F=!0):Math.sign(qe)===Math.sign(H)&&(F=!0),F?(pe=-qe,ve=Ne,Ue=Math.sqrt(dt)):(pe=Ne,ve=qe,Ue=Math.sqrt(dt/2))}return new ce(pe/Ue,ve/Ue)}let V=[];for(let se=0,ue=N.length,ie=ue-1,pe=se+1;se<ue;se++,ie++,pe++)ie===ue&&(ie=0),pe===ue&&(pe=0),V[se]=W(N[se],N[ie],N[pe]);let B=[],G,$=V.concat();for(let se=0,ue=k;se<ue;se++){let ie=C[se];G=[];for(let pe=0,ve=ie.length,Ue=ve-1,Ne=pe+1;pe<ve;pe++,Ue++,Ne++)Ue===ve&&(Ue=0),Ne===ve&&(Ne=0),G[pe]=W(ie[pe],ie[Ue],ie[Ne]);B.push(G),$=$.concat(G)}let xe;if(m===0)xe=cs.triangulateShape(N,C);else{let se=[],ue=[];for(let ie=0;ie<m;ie++){let pe=ie/m,ve=d*Math.cos(pe*Math.PI/2),Ue=g*Math.sin(pe*Math.PI/2)+x;for(let Ne=0,qe=N.length;Ne<qe;Ne++){let $e=O(N[Ne],V[Ne],Ue);X($e.x,$e.y,-ve),pe===0&&se.push($e)}for(let Ne=0,qe=k;Ne<qe;Ne++){let $e=C[Ne];G=B[Ne];let H=[];for(let dt=0,rt=$e.length;dt<rt;dt++){let F=O($e[dt],G[dt],Ue);X(F.x,F.y,-ve),pe===0&&H.push(F)}pe===0&&ue.push(H)}}xe=cs.triangulateShape(se,ue)}let ee=xe.length,te=g+x;for(let se=0;se<U;se++){let ue=h?O(T[se],$[se],te):T[se];y?(w.copy(b.normals[0]).multiplyScalar(ue.x),S.copy(b.binormals[0]).multiplyScalar(ue.y),v.copy(M[0]).add(w).add(S),X(v.x,v.y,v.z)):X(ue.x,ue.y,0)}for(let se=1;se<=u;se++)for(let ue=0;ue<U;ue++){let ie=h?O(T[ue],$[ue],te):T[ue];y?(w.copy(b.normals[se]).multiplyScalar(ie.x),S.copy(b.binormals[se]).multiplyScalar(ie.y),v.copy(M[se]).add(w).add(S),X(v.x,v.y,v.z)):X(ie.x,ie.y,f/u*se)}for(let se=m-1;se>=0;se--){let ue=se/m,ie=d*Math.cos(ue*Math.PI/2),pe=g*Math.sin(ue*Math.PI/2)+x;for(let ve=0,Ue=N.length;ve<Ue;ve++){let Ne=O(N[ve],V[ve],pe);X(Ne.x,Ne.y,f+ie)}for(let ve=0,Ue=C.length;ve<Ue;ve++){let Ne=C[ve];G=B[ve];for(let qe=0,$e=Ne.length;qe<$e;qe++){let H=O(Ne[qe],G[qe],pe);y?X(H.x,H.y+M[u-1].y,M[u-1].x+ie):X(H.x,H.y,f+ie)}}}q(),z();function q(){let se=s.length/3;if(h){let ue=0,ie=U*ue;for(let pe=0;pe<ee;pe++){let ve=xe[pe];ae(ve[2]+ie,ve[1]+ie,ve[0]+ie)}ue=u+m*2,ie=U*ue;for(let pe=0;pe<ee;pe++){let ve=xe[pe];ae(ve[0]+ie,ve[1]+ie,ve[2]+ie)}}else{for(let ue=0;ue<ee;ue++){let ie=xe[ue];ae(ie[2],ie[1],ie[0])}for(let ue=0;ue<ee;ue++){let ie=xe[ue];ae(ie[0]+U*u,ie[1]+U*u,ie[2]+U*u)}}n.addGroup(se,s.length/3-se,0)}function z(){let se=s.length/3,ue=0;L(N,ue),ue+=N.length;for(let ie=0,pe=C.length;ie<pe;ie++){let ve=C[ie];L(ve,ue),ue+=ve.length}n.addGroup(se,s.length/3-se,1)}function L(se,ue){let ie=se.length;for(;--ie>=0;){let pe=ie,ve=ie-1;ve<0&&(ve=se.length-1);for(let Ue=0,Ne=u+m*2;Ue<Ne;Ue++){let qe=U*Ue,$e=U*(Ue+1),H=ue+pe+qe,dt=ue+ve+qe,rt=ue+ve+$e,F=ue+pe+$e;re(H,dt,rt,F)}}}function X(se,ue,ie){l.push(se),l.push(ue),l.push(ie)}function ae(se,ue,ie){ye(se),ye(ue),ye(ie);let pe=s.length/3,ve=_.generateTopUV(n,s,pe-3,pe-2,pe-1);fe(ve[0]),fe(ve[1]),fe(ve[2])}function re(se,ue,ie,pe){ye(se),ye(ue),ye(pe),ye(ue),ye(ie),ye(pe);let ve=s.length/3,Ue=_.generateSideWallUV(n,s,ve-6,ve-3,ve-2,ve-1);fe(Ue[0]),fe(Ue[1]),fe(Ue[3]),fe(Ue[1]),fe(Ue[2]),fe(Ue[3])}function ye(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function fe(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new mu[s.type]().fromJSON(s)),new i(n,e.options)}},dg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ce(r,a),new ce(o,l),new ce(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-f),new ce(h,1-g),new ce(x,1-p)]:[new ce(o,1-l),new ce(u,1-f),new ce(d,1-g),new ce(m,1-p)]}};function fg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var fa=class i extends ia{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var pa=class i extends ia{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ui=class i extends Ke{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let _=p*h-a;for(let M=0;M<c;M++){let y=M*f-r;g.push(y,-_,0),x.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let M=_+c*p,y=_+c*(p+1),b=_+1+c*(p+1),S=_+1+c*p;d.push(M,y,S),d.push(y,b,S)}this.setIndex(d),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},qn=class i extends Ke{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],f=e,h=(t-e)/s,d=new I,g=new ce;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,M=_,y=_+n+1,b=_+n+2,S=_+1;o.push(M,y,S),o.push(y,b,S)}}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Pt=class i extends Ke{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new I,h=new I,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],M=p/n,y=a+M*o,b=e*Math.cos(y),S=Math.sqrt(e*e-b*b),w=0;p===0&&a===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let v=0;v<=t;v++){let E=v/t,T=s+E*r;f.x=-S*Math.cos(T),f.y=b,f.z=S*Math.sin(T),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(E+w,1-M),_.push(c++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let M=u[p][_+1],y=u[p][_],b=u[p+1][_],S=u[p+1][_+1];(p!==0||a>0)&&d.push(M,y,S),(p!==n-1||l<Math.PI)&&d.push(y,b,S)}this.setIndex(d),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var or=class i extends Ke{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new I,d=new I,g=new I;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let p=0;p<=s;p++){let _=p/s*r;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,M=(s+1)*(x-1)+m,y=(s+1)*x+m;l.push(p,_,y),l.push(_,M,y)}this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function Ss(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(wd(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=Ss(i[t]);for(let s in n)e[s]=n[s]}return e}function wd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ou(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Ri={clone:Ss,merge:un},mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=pg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ot().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},lr=class extends Je{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bt=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ma=class extends Bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},hi=class extends In{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=yl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var sl=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rl=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var xs=class extends ln{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Ro(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var Xi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},al=class extends Xi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uu,endingEnd:uu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hu:r=e,o=2*t-n;break;case du:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hu:a=e,l=2*n-t;break;case du:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,_=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,M=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let b=0;b!==o;++b)r[b]=p*a[u+b]+_*a[c+b]+M*a[l+b]+y*a[f+b];return r}},ol=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},ll=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},cl=class extends Xi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*g;return r}let h=o*2,d=e-1;for(let g=0;g!==o;++g){let x=a[c+g],m=a[l+g],p=d*h+g*2,_=f[p],M=f[p+1],y=e*h+g*2,b=u[y],S=u[y+1],w=(n-t)/(s-t),v,E,T,C,R;for(let D=0;D<8;D++){v=w*w,E=v*w,T=1-w,C=T*T,R=C*T;let N=R*t+3*C*w*_+3*T*v*b+E*s-n;if(Math.abs(N)<1e-10)break;let O=3*C*(_-t)+6*T*w*(b-_)+3*v*(s-b);if(Math.abs(O)<1e-10)break;w=w-N/O,w=Math.max(0,Math.min(1,w))}r[g]=R*x+3*C*w*M+3*T*v*S+E*m}return r}},Sn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ro(t,this.TimeBufferType),this.values=Ro(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ro(e.times,Array),values:Ro(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new cl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Wr:t=this.InterpolantFactoryMethodDiscrete;break;case Go:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break;case cu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return cu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&a0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[h+g]||x!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Go;var qi=class extends Sn{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Wr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};ul.prototype.ValueTypeName="color";var hl=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};hl.prototype.ValueTypeName="number";var dl=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)_t.slerpFlat(r,0,a,c-o,a,c,l);return r}},ga=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}};ga.prototype.ValueTypeName="quaternion";ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends Sn{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Wr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};fl.prototype.ValueTypeName="vector";var Do={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ad(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ad(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ad(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var pl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sf=new pl,cr=class{constructor(e){this.manager=e!==void 0?e:Sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};cr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=new WeakMap,ml=class extends cr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Do.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Ws.get(a);f===void 0&&(f=[],Ws.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=Zs("img");function l(){u(),t&&t(this);let f=Ws.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}Ws.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),Do.remove(`image:${e}`);let h=Ws.get(this)||[];for(let d=0;d<h.length;d++){let g=h[d];g.onError&&g.onError(f)}Ws.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Do.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var vs=class extends cr{constructor(e){super(e)}load(e,t,n,s){let r=new rn,a=new ml(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},xa=class extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var lu=new ot,Rd=new I,Cd=new I,yu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rd),Cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cd),t.updateMatrixWorld(),lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===$s||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Co=new I,Po=new _t,ii=new I,va=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Co,Po,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Po,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Co,Po,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Po,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new I,Pd=new ce,Id=new ce,kt=class extends va{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Pd,Id),t.subVectors(Id,Pd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var _u=class extends yu{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}},Yn=class extends xa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _u}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ys=class extends va{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ya=class extends xa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var _a=class extends Ke{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Xs=-90,qs=1,gl=class extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Xs,qs,e,t);s.layers=this.layers,this.add(s);let r=new kt(Xs,qs,e,t);r.layers=this.layers,this.add(r);let a=new kt(Xs,qs,e,t);a.layers=this.layers,this.add(a);let o=new kt(Xs,qs,e,t);o.layers=this.layers,this.add(o);let l=new kt(Xs,qs,e,t);l.layers=this.layers,this.add(l);let c=new kt(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xl=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ba=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=xg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function xg(){this._document.hidden===!1&&this.reset()}var Bu="\\[\\]\\.:\\/",vg=new RegExp("["+Bu+"]","g"),zu="[^"+Bu+"]",yg="[^"+Bu.replace("\\.","")+"]",_g=/((?:WC+[\/:])*)/.source.replace("WC",zu),bg=/(WCOD+)?/.source.replace("WCOD",yg),Mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zu),Sg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zu),Eg=new RegExp("^"+_g+bg+Mg+Sg+"$"),Tg=["material","materials","bones","map"],bu=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vg,"")}static parseTrackName(e){let t=Eg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=bu;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JM=new Float32Array(1);var Dd=new ot,_s=class{constructor(e,t,n=0,s=1/0){this.ray=new wi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dd),this}intersectObject(e,t=!0,n=[]){return Mu(e,this,n,t),n.sort(Ld),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Mu(e[s],this,n,t);return n.sort(Ld),n}};function Ld(i,e){return i.distance-e.distance}function Mu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Mu(r[a],e,t,!0)}}var ji=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Xu=class Xu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Xu.prototype.isMatrix2=!0;var Su=Xu;var Ma=class extends Xn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Xe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ku(i,e,t,n){let s=wg(n);switch(t){case Du:return i*e;case pr:return i*e/s.components*s.byteLength;case Tl:return i*e/s.components*s.byteLength;case Qi:return i*e*2/s.components*s.byteLength;case wl:return i*e*2/s.components*s.byteLength;case Lu:return i*e*3/s.components*s.byteLength;case Fn:return i*e*4/s.components*s.byteLength;case Al:return i*e*4/s.components*s.byteLength;case Da:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fa:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Il:return Math.max(i,16)*Math.max(e,8)/4;case Rl:case Pl:return Math.max(i,8)*Math.max(e,8)/2;case Dl:case Ll:case Nl:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Ua:case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jl:case Ql:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tc:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oa:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wg(i){switch(i){case mn:case Ru:return{byteLength:1,components:1};case dr:case Cu:case cn:return{byteLength:2,components:1};case Sl:case El:return{byteLength:2,components:4};case $n:case Ml:case Ln:return{byteLength:4,components:1};case Pu:case Iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rg(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Og=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ex=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ax=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ix=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ev=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ov=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ey=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ny=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ry=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:Cg,alphahash_pars_fragment:Pg,alphamap_fragment:Ig,alphamap_pars_fragment:Dg,alphatest_fragment:Lg,alphatest_pars_fragment:Fg,aomap_fragment:Ng,aomap_pars_fragment:Ug,batching_pars_vertex:Og,batching_vertex:Bg,begin_vertex:zg,beginnormal_vertex:kg,bsdfs:Hg,iridescence_fragment:Vg,bumpmap_pars_fragment:Gg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Yg,color_fragment:jg,color_pars_fragment:$g,color_pars_vertex:Zg,color_vertex:Kg,common:Jg,cube_uv_reflection_fragment:Qg,defaultnormal_vertex:ex,displacementmap_pars_vertex:tx,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:sx,colorspace_fragment:rx,colorspace_pars_fragment:ax,envmap_fragment:ox,envmap_common_pars_fragment:lx,envmap_pars_fragment:cx,envmap_pars_vertex:ux,envmap_physical_pars_fragment:bx,envmap_vertex:hx,fog_vertex:dx,fog_pars_vertex:fx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:xx,lights_lambert_fragment:vx,lights_lambert_pars_fragment:yx,lights_pars_begin:_x,lights_toon_fragment:Mx,lights_toon_pars_fragment:Sx,lights_phong_fragment:Ex,lights_phong_pars_fragment:Tx,lights_physical_fragment:wx,lights_physical_pars_fragment:Ax,lights_fragment_begin:Rx,lights_fragment_maps:Cx,lights_fragment_end:Px,lightprobes_pars_fragment:Ix,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Lx,logdepthbuf_pars_vertex:Fx,logdepthbuf_vertex:Nx,map_fragment:Ux,map_pars_fragment:Ox,map_particle_fragment:Bx,map_particle_pars_fragment:zx,metalnessmap_fragment:kx,metalnessmap_pars_fragment:Hx,morphinstance_vertex:Vx,morphcolor_vertex:Gx,morphnormal_vertex:Wx,morphtarget_pars_vertex:Xx,morphtarget_vertex:qx,normal_fragment_begin:Yx,normal_fragment_maps:jx,normal_pars_fragment:$x,normal_pars_vertex:Zx,normal_vertex:Kx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:ev,clearcoat_pars_fragment:tv,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:sv,premultiplied_alpha_fragment:rv,project_vertex:av,dithering_fragment:ov,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:uv,shadowmap_pars_fragment:hv,shadowmap_pars_vertex:dv,shadowmap_vertex:fv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:gv,skinning_vertex:xv,skinnormal_vertex:vv,specularmap_fragment:yv,specularmap_pars_fragment:_v,tonemapping_fragment:bv,tonemapping_pars_fragment:Mv,transmission_fragment:Sv,transmission_pars_fragment:Ev,uv_pars_fragment:Tv,uv_pars_vertex:wv,uv_vertex:Av,worldpos_vertex:Rv,background_vert:Cv,background_frag:Pv,backgroundCube_vert:Iv,backgroundCube_frag:Dv,cube_vert:Lv,cube_frag:Fv,depth_vert:Nv,depth_frag:Uv,distance_vert:Ov,distance_frag:Bv,equirect_vert:zv,equirect_frag:kv,linedashed_vert:Hv,linedashed_frag:Vv,meshbasic_vert:Gv,meshbasic_frag:Wv,meshlambert_vert:Xv,meshlambert_frag:qv,meshmatcap_vert:Yv,meshmatcap_frag:jv,meshnormal_vert:$v,meshnormal_frag:Zv,meshphong_vert:Kv,meshphong_frag:Jv,meshphysical_vert:Qv,meshphysical_frag:ey,meshtoon_vert:ty,meshtoon_frag:ny,points_vert:iy,points_frag:sy,shadow_vert:ry,shadow_frag:ay,sprite_vert:oy,sprite_frag:ly},Re={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},pi={basic:{uniforms:un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:un([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:un([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ge(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:un([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:un([Re.points,Re.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:un([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:un([Re.common,Re.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:un([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:un([Re.sprite,Re.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:un([Re.common,Re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:un([Re.lights,Re.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};pi.physical={uniforms:un([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var ac={r:0,b:0,g:0},cy=new ot,Yf=new Qe;Yf.set(-1,0,0,0,1,0,0,0,1);function uy(i,e,t,n,s,r){let a=new ge(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let y=_.backgroundBlurriness>0;M=e.get(M,y)}return M}function g(_){let M=!1,y=d(_);y===null?m(a,o):y&&y.isColor&&(m(y,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){let y=d(M);y&&(y.isCubeTexture||y.mapping===Pa)?(c===void 0&&(c=new We(new Vt(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:Ss(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yf),c.material.toneMapped=lt.getTransfer(y.colorSpace)!==ut,(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new We(new ui(2,2),new Je({name:"BackgroundMaterial",uniforms:Ss(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(ac,Ou(i)),t.buffers.color.setClear(ac.r,ac.g,ac.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:x,dispose:p}}function hy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(C,R,D,k,N){let O=!1,U=f(C,k,D,R);r!==U&&(r=U,c(r.object)),O=d(C,k,D,N),O&&g(C,k,D,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(C,R,D,k),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function f(C,R,D,k){let N=k.wireframe===!0,O=n[R.id];O===void 0&&(O={},n[R.id]=O);let U=C.isInstancedMesh===!0?C.id:0,W=O[U];W===void 0&&(W={},O[U]=W);let V=W[D.id];V===void 0&&(V={},W[D.id]=V);let B=V[N];return B===void 0&&(B=h(l()),V[N]=B),B}function h(C){let R=[],D=[],k=[];for(let N=0;N<t;N++)R[N]=0,D[N]=0,k[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:k,object:C,attributes:{},index:null}}function d(C,R,D,k){let N=r.attributes,O=R.attributes,U=0,W=D.getAttributes();for(let V in W)if(W[V].location>=0){let G=N[V],$=O[V];if($===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),G===void 0||G.attribute!==$||$&&G.data!==$.data)return!0;U++}return r.attributesNum!==U||r.index!==k}function g(C,R,D,k){let N={},O=R.attributes,U=0,W=D.getAttributes();for(let V in W)if(W[V].location>=0){let G=O[V];G===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(G=C.instanceColor));let $={};$.attribute=G,G&&G.data&&($.data=G.data),N[V]=$,U++}r.attributes=N,r.attributesNum=U,r.index=k}function x(){let C=r.newAttributes;for(let R=0,D=C.length;R<D;R++)C[R]=0}function m(C){p(C,0)}function p(C,R){let D=r.newAttributes,k=r.enabledAttributes,N=r.attributeDivisors;D[C]=1,k[C]===0&&(i.enableVertexAttribArray(C),k[C]=1),N[C]!==R&&(i.vertexAttribDivisor(C,R),N[C]=R)}function _(){let C=r.newAttributes,R=r.enabledAttributes;for(let D=0,k=R.length;D<k;D++)R[D]!==C[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function M(C,R,D,k,N,O,U){U===!0?i.vertexAttribIPointer(C,R,D,N,O):i.vertexAttribPointer(C,R,D,k,N,O)}function y(C,R,D,k){x();let N=k.attributes,O=D.getAttributes(),U=R.defaultAttributeValues;for(let W in O){let V=O[W];if(V.location>=0){let B=N[W];if(B===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(B=C.instanceColor)),B!==void 0){let G=B.normalized,$=B.itemSize,xe=e.get(B);if(xe===void 0)continue;let ee=xe.buffer,te=xe.type,q=xe.bytesPerElement,z=te===i.INT||te===i.UNSIGNED_INT||B.gpuType===Ml;if(B.isInterleavedBufferAttribute){let L=B.data,X=L.stride,ae=B.offset;if(L.isInstancedInterleavedBuffer){for(let re=0;re<V.locationSize;re++)p(V.location+re,L.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let re=0;re<V.locationSize;re++)M(V.location+re,$/V.locationSize,te,G,X*q,(ae+$/V.locationSize*re)*q,z)}else{if(B.isInstancedBufferAttribute){for(let L=0;L<V.locationSize;L++)p(V.location+L,B.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let L=0;L<V.locationSize;L++)m(V.location+L);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let L=0;L<V.locationSize;L++)M(V.location+L,$/V.locationSize,te,G,$*q,$/V.locationSize*L*q,z)}}else if(U!==void 0){let G=U[W];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(V.location,G);break;case 3:i.vertexAttrib3fv(V.location,G);break;case 4:i.vertexAttrib4fv(V.location,G);break;default:i.vertexAttrib1fv(V.location,G)}}}}_()}function b(){E();for(let C in n){let R=n[C];for(let D in R){let k=R[D];for(let N in k){let O=k[N];for(let U in O)u(O[U].object),delete O[U];delete k[N]}}delete n[C]}}function S(C){if(n[C.id]===void 0)return;let R=n[C.id];for(let D in R){let k=R[D];for(let N in k){let O=k[N];for(let U in O)u(O[U].object),delete O[U];delete k[N]}}delete n[C.id]}function w(C){for(let R in n){let D=n[R];for(let k in D){let N=D[k];if(N[C.id]===void 0)continue;let O=N[C.id];for(let U in O)u(O[U].object),delete O[U];delete N[C.id]}}}function v(C){for(let R in n){let D=n[R],k=C.isInstancedMesh===!0?C.id:0,N=D[k];if(N!==void 0){for(let O in N){let U=N[O];for(let W in U)u(U[W].object),delete U[W];delete N[O]}delete D[k],Object.keys(D).length===0&&delete n[R]}}}function E(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function dy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Fn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let v=w===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==mn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ln&&!v)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:b,samples:S}}function py(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Cn,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let _=r?0:n,M=_*4,y=p.clippingState||null;l.value=y,y=u(g,h,M,d);for(let b=0;b!==M;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=d;M!==x;++M,y+=4)a.copy(f[M]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var es=4,Ef=[.125,.215,.35,.446,.526,.582],Es=20,my=256,za=new ys,Tf=new ge,qu=null,Yu=0,ju=0,$u=!1,gy=new I,lc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=gy}=r;qu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,Yu,ju),this._renderer.xr.enabled=$u,e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:cn,format:Fn,colorSpace:Xr,depthBuffer:!1},s=wf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xy(r)),this._blurMaterial=yy(r,e,t),this._ggxMaterial=vy(r,e,t)}return s}_compileMaterial(e){let t=new We(new Ke,e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,s,r){let l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Tf),f.toneMapping=jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new Vt,new on({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,p=!0):(m.color.copy(Tf),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));let b=this._cubeSize;mr(s,y*b,M>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(x,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ki||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;mr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,za)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-es?n-g+es:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,mr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,za),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,mr(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,za)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[s];f.material=c;let h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Es-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Es;m>Es&&Xe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Es}`);let p=[],_=0;for(let w=0;w<Es;++w){let v=w/x,E=Math.exp(-v*v/2);p.push(E),w===0?_+=E:w<m&&(_+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;let y=this._sizeLods[s],b=3*y*(s>M-es?s-M+es:0),S=4*(this._cubeSize-y);mr(t,b,S,3*y,2*y),l.setRenderTarget(t),l.render(f,za)}};function xy(i){let e=[],t=[],n=[],s=i,r=i-es+1+Ef.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-es?l=Ef[a-i+es-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),M=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let S=0;S<d;S++){let w=S%3*2/3-1,v=S>2?0:-1,E=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];_.set(E,x*g*S),M.set(h,m*g*S);let T=[S,S,S,S,S,S];y.set(T,p*g*S)}let b=new Ke;b.setAttribute("position",new Ht(_,x)),b.setAttribute("uv",new Ht(M,m)),b.setAttribute("faceIndex",new Ht(y,p)),n.push(new We(b,null)),s>es&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function wf(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function vy(i,e,t){return new Je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:my,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function yy(i,e,t){let n=new Float32Array(Es),s=new I(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Af(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Rf(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var cc=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vt(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Dn});r.uniforms.tEquirect.value=t;let a=new We(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=Tt),new gl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function _y(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===hr||d===_l)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new cc(g.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,g=d===hr||d===_l,x=d===Ki||d===Ms;if(g||x){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new lc(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return g&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new lc(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===hr?h.mapping=Ki:d===_l&&(h.mapping=Ms),h}function l(h){let d=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function by(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function My(i,e,t,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let M=0,y=_.length;M<y;M+=3){let b=_[M+0],S=_[M+1],w=_[M+2];h.push(b,S,S,w,w,b)}}else{let _=g.array;x=g.version;for(let M=0,y=_.length/3-1;M<y;M+=3){let b=M+0,S=M+1,w=M+2;h.push(b,S,S,w,w,b)}}let m=new(g.count>=65535?Kr:Zr)(h,1);m.version=x;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Sy(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ey(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ty(i,e,t){let n=new WeakMap,s=new Rt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let E=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let y=o.attributes.position.count*M,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*b*4*f),w=new jr(S,y,b,f);w.type=Ln,w.needsUpdate=!0;let v=M*4;for(let T=0;T<f;T++){let C=m[T],R=p[T],D=_[T],k=y*b*4*T;for(let N=0;N<C.count;N++){let O=N*v;d===!0&&(s.fromBufferAttribute(C,N),S[k+O+0]=s.x,S[k+O+1]=s.y,S[k+O+2]=s.z,S[k+O+3]=0),g===!0&&(s.fromBufferAttribute(R,N),S[k+O+4]=s.x,S[k+O+5]=s.y,S[k+O+6]=s.z,S[k+O+7]=0),x===!0&&(s.fromBufferAttribute(D,N),S[k+O+8]=s.x,S[k+O+9]=s.y,S[k+O+10]=s.z,S[k+O+11]=D.itemSize===4?s.w:1)}}h={count:f,texture:w,size:new ce(y,b)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function wy(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Ay={[Ea]:"LINEAR_TONE_MAPPING",[Ta]:"REINHARD_TONE_MAPPING",[wa]:"CINEON_TONE_MAPPING",[bs]:"ACES_FILMIC_TONE_MAPPING",[Ra]:"AGX_TONE_MAPPING",[Ca]:"NEUTRAL_TONE_MAPPING",[Aa]:"CUSTOM_TONE_MAPPING"};function Ry(i,e,t,n,s,r){let a=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Ai(e,t):void 0}),o=new Wt(e,t,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new Ke;l.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Pe([0,2,0,0,2,0],2));let c=new lr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new We(l,c),f=new ys(-1,1,1,-1,0,1),h=null,d=null,g=!1,x,m=null,p=[],_=!1;this.setSize=function(M,y){a.setSize(M,y),o.setSize(M,y);for(let b=0;b<p.length;b++){let S=p[b];S.setSize&&S.setSize(M,y)}},this.setEffects=function(M){p=M,_=p.length>0&&p[0].isRenderPass===!0;let y=a.width,b=a.height;for(let S=0;S<p.length;S++){let w=p[S];w.setSize&&w.setSize(y,b)}},this.begin=function(M,y){if(g||M.toneMapping===jn&&p.length===0)return!1;if(m=y,y!==null){let b=y.width,S=y.height;(a.width!==b||a.height!==S)&&this.setSize(b,S)}return _===!1&&M.setRenderTarget(a),x=M.toneMapping,M.toneMapping=jn,!0},this.hasRenderPass=function(){return _},this.end=function(M,y){M.toneMapping=x,g=!0;let b=a,S=o;for(let w=0;w<p.length;w++){let v=p[w];if(v.enabled!==!1&&(v.render(M,S,b,y),v.needsSwap!==!1)){let E=b;b=S,S=E}}if(h!==M.outputColorSpace||d!==M.toneMapping){h=M.outputColorSpace,d=M.toneMapping,c.defines={},lt.getTransfer(h)===ut&&(c.defines.SRGB_TRANSFER="");let w=Ay[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(m),M.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var jf=new rn,Ju=new Ai(1,1),$f=new jr,Zf=new Yo,Kf=new Qr,Cf=[],Pf=[],If=new Float32Array(16),Df=new Float32Array(9),Lf=new Float32Array(4);function xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cf[s];if(r===void 0&&(r=new Float32Array(s),Cf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function dc(i,e){let t=Pf[e];t===void 0&&(t=new Int32Array(e),Pf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function Ly(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Lf.set(n),i.uniformMatrix2fv(this.addr,!1,Lf),Yt(t,n)}}function Fy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Df.set(n),i.uniformMatrix3fv(this.addr,!1,Df),Yt(t,n)}}function Ny(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;If.set(n),i.uniformMatrix4fv(this.addr,!1,If),Yt(t,n)}}function Uy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Wy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ju.compareFunction=t.isReversedDepthBuffer()?rc:sc,r=Ju):r=jf,t.setTexture2D(e||r,s)}function Xy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zf,s)}function qy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kf,s)}function Yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$f,s)}function jy(i){switch(i){case 5126:return Cy;case 35664:return Py;case 35665:return Iy;case 35666:return Dy;case 35674:return Ly;case 35675:return Fy;case 35676:return Ny;case 5124:case 35670:return Uy;case 35667:case 35671:return Oy;case 35668:case 35672:return By;case 35669:case 35673:return zy;case 5125:return ky;case 36294:return Hy;case 36295:return Vy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}function $y(i,e){i.uniform1fv(this.addr,e)}function Zy(i,e){let t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ky(i,e){let t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function Jy(i,e){let t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function Qy(i,e){let t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function e_(i,e){let t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function t_(i,e){let t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function n_(i,e){i.uniform1iv(this.addr,e)}function i_(i,e){i.uniform2iv(this.addr,e)}function s_(i,e){i.uniform3iv(this.addr,e)}function r_(i,e){i.uniform4iv(this.addr,e)}function a_(i,e){i.uniform1uiv(this.addr,e)}function o_(i,e){i.uniform2uiv(this.addr,e)}function l_(i,e){i.uniform3uiv(this.addr,e)}function c_(i,e){i.uniform4uiv(this.addr,e)}function u_(i,e,t){let n=this.cache,s=e.length,r=dc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ju:a=jf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function h_(i,e,t){let n=this.cache,s=e.length,r=dc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zf,r[a])}function d_(i,e,t){let n=this.cache,s=e.length,r=dc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Kf,r[a])}function f_(i,e,t){let n=this.cache,s=e.length,r=dc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$f,r[a])}function p_(i){switch(i){case 5126:return $y;case 35664:return Zy;case 35665:return Ky;case 35666:return Jy;case 35674:return Qy;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return a_;case 36294:return o_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}var Qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jy(t.type)}},eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p_(t.type)}},th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Zu=/(\w+)(\])?(\[|\.)?/g;function Ff(i,e){i.seq.push(e),i.map[e.id]=e}function m_(i,e,t){let n=i.name,s=n.length;for(Zu.lastIndex=0;;){let r=Zu.exec(n),a=Zu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ff(t,c===void 0?new Qu(o,i,e):new eh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new th(o),Ff(t,f)),t=f}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);m_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Nf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var g_=37297,x_=0;function v_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Uf=new Qe;function y_(i){lt._getMatrix(Uf,lt.workingColorSpace,i);let e=`mat3( ${Uf.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case qr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Of(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+v_(i.getShaderSource(e),o)}else return r}function __(i,e){let t=y_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var b_={[Ea]:"Linear",[Ta]:"Reinhard",[wa]:"Cineon",[bs]:"ACESFilmic",[Ra]:"AgX",[Ca]:"Neutral",[Aa]:"Custom"};function M_(i,e){let t=b_[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oc=new I;function S_(){lt.getLuminanceCoefficients(oc);let i=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function T_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ha(i){return i!==""}function Bf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var A_=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(i){return i.replace(A_,C_)}var R_=new Map;function C_(i,e){let t=st[e];if(t===void 0){let n=R_.get(e);if(n!==void 0)t=st[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nh(t)}var P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(i){return i.replace(P_,I_)}function I_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var D_={[Sa]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function L_(i){return D_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var F_={[Ki]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE_UV"};function N_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":F_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var U_={[Ms]:"ENVMAP_MODE_REFRACTION"};function O_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":U_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var B_={[yl]:"ENVMAP_BLENDING_MULTIPLY",[tf]:"ENVMAP_BLENDING_MIX",[nf]:"ENVMAP_BLENDING_ADD"};function z_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":B_[i.combine]||"ENVMAP_BLENDING_NONE"}function k_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function H_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=L_(t),c=N_(t),u=O_(t),f=z_(t),h=k_(t),d=E_(t),g=T_(r),x=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ha).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ha).join(`
`),p.length>0&&(p+=`
`)):(m=[Hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),p=[Hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?st.tonemapping_pars_fragment:"",t.toneMapping!==jn?M_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,__("linearToOutputTexel",t.outputColorSpace),S_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),a=nh(a),a=Bf(a,t),a=zf(a,t),o=nh(o),o=Bf(o,t),o=zf(o,t),a=kf(a),o=kf(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+m+a,y=_+p+o,b=Nf(s,s.VERTEX_SHADER,M),S=Nf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,b),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(C){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(b)||"",k=s.getShaderInfoLog(S)||"",N=R.trim(),O=D.trim(),U=k.trim(),W=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,S);else{let B=Of(s,b,"vertex"),G=Of(s,S,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+B+`
`+G)}else N!==""?Xe("WebGLProgram: Program Info Log:",N):(O===""||U==="")&&(V=!1);V&&(C.diagnostics={runnable:W,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(b),s.deleteShader(S),v=new gr(s,x),E=w_(s,x)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(x,g_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var V_=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sh(e),t.set(e,n)),n}},sh=class{constructor(e){this.id=V_++,this.code=e,this.usedTimes=0}};function G_(i){return i===Qi||i===Ua||i===Oa}function W_(i,e,t,n,s,r){let a=new er,o=new ih,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,E,T,C,R,D){let k=C.fog,N=R.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,W=e.get(v.envMap||O,U),V=W&&W.mapping===Pa?W.image.height:null,B=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Xe("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let G=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,$=G!==void 0?G.length:0,xe=0;N.morphAttributes.position!==void 0&&(xe=1),N.morphAttributes.normal!==void 0&&(xe=2),N.morphAttributes.color!==void 0&&(xe=3);let ee,te,q,z;if(B){let Oe=pi[B];ee=Oe.vertexShader,te=Oe.fragmentShader}else{ee=v.vertexShader,te=v.fragmentShader;let Oe=o.getVertexShaderStage(v),It=o.getFragmentShaderStage(v);o.update(v,Oe,It),q=Oe.id,z=It.id}let L=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),ae=R.isInstancedMesh===!0,re=R.isBatchedMesh===!0,ye=!!v.map,fe=!!v.matcap,se=!!W,ue=!!v.aoMap,ie=!!v.lightMap,pe=!!v.bumpMap&&v.wireframe===!1,ve=!!v.normalMap,Ue=!!v.displacementMap,Ne=!!v.emissiveMap,qe=!!v.metalnessMap,$e=!!v.roughnessMap,H=v.anisotropy>0,dt=v.clearcoat>0,rt=v.dispersion>0,F=v.iridescence>0,A=v.sheen>0,Z=v.transmission>0,Q=H&&!!v.anisotropyMap,oe=dt&&!!v.clearcoatMap,_e=dt&&!!v.clearcoatNormalMap,be=dt&&!!v.clearcoatRoughnessMap,le=F&&!!v.iridescenceMap,de=F&&!!v.iridescenceThicknessMap,Ee=A&&!!v.sheenColorMap,He=A&&!!v.sheenRoughnessMap,Ae=!!v.specularMap,Te=!!v.specularColorMap,Ye=!!v.specularIntensityMap,Ze=Z&&!!v.transmissionMap,tt=Z&&!!v.thicknessMap,Y=!!v.gradientMap,Me=!!v.alphaMap,he=v.alphaTest>0,we=!!v.alphaHash,De=!!v.extensions,me=jn;v.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(me=i.toneMapping);let ke={shaderID:B,shaderType:v.type,shaderName:v.name,vertexShader:ee,fragmentShader:te,defines:v.defines,customVertexShaderID:q,customFragmentShaderID:z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:re,batchingColor:re&&R._colorsTexture!==null,instancing:ae,instancingColor:ae&&R.instanceColor!==null,instancingMorph:ae&&R.morphTexture!==null,outputColorSpace:L===null?i.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ye,matcap:fe,envMap:se,envMapMode:se&&W.mapping,envMapCubeUVHeight:V,aoMap:ue,lightMap:ie,bumpMap:pe,normalMap:ve,displacementMap:Ue,emissiveMap:Ne,normalMapObjectSpace:ve&&v.normalMapType===af,normalMapTangentSpace:ve&&v.normalMapType===Ba,packedNormalMap:ve&&v.normalMapType===Ba&&G_(v.normalMap.format),metalnessMap:qe,roughnessMap:$e,anisotropy:H,anisotropyMap:Q,clearcoat:dt,clearcoatMap:oe,clearcoatNormalMap:_e,clearcoatRoughnessMap:be,dispersion:rt,iridescence:F,iridescenceMap:le,iridescenceThicknessMap:de,sheen:A,sheenColorMap:Ee,sheenRoughnessMap:He,specularMap:Ae,specularColorMap:Te,specularIntensityMap:Ye,transmission:Z,transmissionMap:Ze,thicknessMap:tt,gradientMap:Y,opaque:v.transparent===!1&&v.blending===hs&&v.alphaToCoverage===!1,alphaMap:Me,alphaTest:he,alphaHash:we,combine:v.combine,mapUv:ye&&g(v.map.channel),aoMapUv:ue&&g(v.aoMap.channel),lightMapUv:ie&&g(v.lightMap.channel),bumpMapUv:pe&&g(v.bumpMap.channel),normalMapUv:ve&&g(v.normalMap.channel),displacementMapUv:Ue&&g(v.displacementMap.channel),emissiveMapUv:Ne&&g(v.emissiveMap.channel),metalnessMapUv:qe&&g(v.metalnessMap.channel),roughnessMapUv:$e&&g(v.roughnessMap.channel),anisotropyMapUv:Q&&g(v.anisotropyMap.channel),clearcoatMapUv:oe&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:He&&g(v.sheenRoughnessMap.channel),specularMapUv:Ae&&g(v.specularMap.channel),specularColorMapUv:Te&&g(v.specularColorMap.channel),specularIntensityMapUv:Ye&&g(v.specularIntensityMap.channel),transmissionMapUv:Ze&&g(v.transmissionMap.channel),thicknessMapUv:tt&&g(v.thicknessMap.channel),alphaMapUv:Me&&g(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ve||H),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!N.attributes.uv&&(ye||Me),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&ve===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:X,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:ye&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===ut,decodeVideoTextureEmissive:Ne&&v.emissiveMap.isVideoTexture===!0&&lt.getTransfer(v.emissiveMap.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pt,flipSided:v.side===Xt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:De&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&v.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function m(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let T in v.defines)E.push(T),E.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(p(E,v),_(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function _(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function M(v){let E=d[v.type],T;if(E){let C=pi[E];T=Ri.clone(C.uniforms)}else T=v.uniforms;return T}function y(v,E){let T=u.get(E);return T!==void 0?++T.usedTimes:(T=new H_(i,E,v,s),c.push(T),u.set(E,T)),T}function b(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function S(v){o.remove(v)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:w}}function X_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,x,m,p){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=g,_.materialVariant=a(h),_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=m,_.group=p),e++,_}function l(h,d,g,x,m,p){let _=o(h,d,g,x,m,p);g.transmission>0?n.push(_):g.transparent===!0?s.push(_):t.push(_)}function c(h,d,g,x,m,p){let _=o(h,d,g,x,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,d,g){t.length>1&&t.sort(h||q_),n.length>1&&n.sort(d||Vf),s.length>1&&s.sort(d||Vf),g&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let h=e,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Y_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Gf,i.set(n,[a])):s>=r.length?(a=new Gf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function j_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ge};break;case"SpotLight":t={position:new I,direction:new I,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function $_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Z_=0;function K_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function J_(i){let e=new j_,t=$_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new ot,a=new ot;function o(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,M=0,y=0,b=0,S=0,w=0;c.sort(K_);for(let E=0,T=c.length;E<T;E++){let C=c[E],R=C.color,D=C.intensity,k=C.distance,N=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Qi?N=C.shadow.map.texture:N=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=R.r*D,f+=R.g*D,h+=R.b*D;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],D);w++}else if(C.isDirectionalLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let U=C.shadow,W=t.get(C);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=C.shadow.matrix,_++}n.directional[d]=O,d++}else if(C.isSpotLight){let O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(R).multiplyScalar(D),O.distance=k,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[x]=O;let U=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,U.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[x]=U.matrix,C.castShadow){let W=t.get(C);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=N,y++}x++}else if(C.isRectAreaLight){let O=e.get(C);O.color.copy(R).multiplyScalar(D),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=O,m++}else if(C.isPointLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let U=C.shadow,W=t.get(C);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,W.shadowCameraNear=U.camera.near,W.shadowCameraFar=U.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=O,g++}else if(C.isHemisphereLight){let O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(D),O.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let v=n.hash;(v.directionalLength!==d||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==_||v.numPointShadows!==M||v.numSpotShadows!==y||v.numSpotMaps!==b||v.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,v.directionalLength=d,v.pointLength=g,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=_,v.numPointShadows=M,v.numSpotShadows=y,v.numSpotMaps=b,v.numLightProbes=w,n.version=Z_++)}function l(c,u){let f=0,h=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let M=c[p];if(M.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(M.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let y=n.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Wf(i){let e=new J_(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Q_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Wf(i),e.set(s,[o])):r>=a.length?(o=new Wf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var eb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nb=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],ib=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Xf=new ot,ka=new I,Ku=new I;function sb(i,e,t){let n=new nr,s=new ce,r=new ce,a=new Rt,o=new sl,l=new rl,c={},u=t.maxTextureSize,f={[bn]:Xt,[Xt]:bn,[pt]:pt},h=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:eb,fragmentShader:tb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ke;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new We(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sa;let p=this.type;this.render=function(S,w,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Ud&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sa);let E=i.getRenderTarget(),T=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Dn),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let D=p!==this.type;D&&w.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(N=>N.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,N=S.length;k<N;k++){let O=S[k],U=O.shadow;if(U===void 0){Xe("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let W=U.getFrameExtents();s.multiply(W),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,U.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=V,U.map===null||D===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ur){if(O.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Wt(s.x,s.y,{format:Qi,type:cn,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),U.map.texture.name=O.name+".shadowMap",U.map.depthTexture=new Ai(s.x,s.y,Ln),U.map.depthTexture.name=O.name+".shadowMapDepth",U.map.depthTexture.format=ai,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Jt,U.map.depthTexture.magFilter=Jt}else O.isPointLight?(U.map=new cc(s.x),U.map.depthTexture=new Jo(s.x,$n)):(U.map=new Wt(s.x,s.y),U.map.depthTexture=new Ai(s.x,s.y,$n)),U.map.depthTexture.name=O.name+".shadowMap",U.map.depthTexture.format=ai,this.type===Sa?(U.map.depthTexture.compareFunction=V?rc:sc,U.map.depthTexture.minFilter=Tt,U.map.depthTexture.magFilter=Tt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Jt,U.map.depthTexture.magFilter=Jt);U.camera.updateProjectionMatrix()}let B=U.map.isWebGLCubeRenderTarget?6:1;for(let G=0;G<B;G++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,G),i.clear();else{G===0&&(i.setRenderTarget(U.map),i.clear());let $=U.getViewport(G);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),R.viewport(a)}if(O.isPointLight){let $=U.camera,xe=U.matrix,ee=O.distance||$.far;ee!==$.far&&($.far=ee,$.updateProjectionMatrix()),ka.setFromMatrixPosition(O.matrixWorld),$.position.copy(ka),Ku.copy($.position),Ku.add(nb[G]),$.up.copy(ib[G]),$.lookAt(Ku),$.updateMatrixWorld(),xe.makeTranslation(-ka.x,-ka.y,-ka.z),Xf.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Xf,$.coordinateSystem,$.reversedDepth)}else U.updateMatrices(O);n=U.getFrustum(),y(w,v,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===ur&&_(U,v),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,C)};function _(S,w){let v=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Wt(s.x,s.y,{format:Qi,type:cn})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,v,h,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,v,d,x,null)}function M(S,w,v,E){let T=null,C=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)T=C;else if(T=v.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let R=T.uuid,D=w.uuid,k=c[R];k===void 0&&(k={},c[R]=k);let N=k[D];N===void 0&&(N=T.clone(),k[D]=N,w.addEventListener("dispose",b)),T=N}if(T.visible=w.visible,T.wireframe=w.wireframe,E===ur?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,v.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let R=i.properties.get(T);R.light=v}return T}function y(S,w,v,E,T){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===ur)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let D=e.update(S),k=S.material;if(Array.isArray(k)){let N=D.groups;for(let O=0,U=N.length;O<U;O++){let W=N[O],V=k[W.materialIndex];if(V&&V.visible){let B=M(S,V,E,T);S.onBeforeShadow(i,S,w,v,D,B,W),i.renderBufferDirect(v,null,D,B,S,W),S.onAfterShadow(i,S,w,v,D,B,W)}}}else if(k.visible){let N=M(S,k,E,T);S.onBeforeShadow(i,S,w,v,D,N,null),i.renderBufferDirect(v,null,D,N,S,null),S.onAfterShadow(i,S,w,v,D,N,null)}}let R=S.children;for(let D=0,k=R.length;D<k;D++)y(R[D],w,v,E,T)}function b(S){S.target.removeEventListener("dispose",b);for(let v in c){let E=c[v],T=S.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function rb(i,e){function t(){let Y=!1,Me=new Rt,he=null,we=new Rt(0,0,0,0);return{setMask:function(De){he!==De&&!Y&&(i.colorMask(De,De,De,De),he=De)},setLocked:function(De){Y=De},setClear:function(De,me,ke,Oe,It){It===!0&&(De*=Oe,me*=Oe,ke*=Oe),Me.set(De,me,ke,Oe),we.equals(Me)===!1&&(i.clearColor(De,me,ke,Oe),we.copy(Me))},reset:function(){Y=!1,he=null,we.set(-1,0,0,0)}}}function n(){let Y=!1,Me=!1,he=null,we=null,De=null;return{setReversed:function(me){if(Me!==me){let ke=e.get("EXT_clip_control");me?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Me=me;let Oe=De;De=null,this.setClear(Oe)}},getReversed:function(){return Me},setTest:function(me){me?L(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(me){he!==me&&!Y&&(i.depthMask(me),he=me)},setFunc:function(me){if(Me&&(me=gf[me]),we!==me){switch(me){case No:i.depthFunc(i.NEVER);break;case Uo:i.depthFunc(i.ALWAYS);break;case Oo:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Bo:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case ko:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=me}},setLocked:function(me){Y=me},setClear:function(me){De!==me&&(De=me,Me&&(me=1-me),i.clearDepth(me))},reset:function(){Y=!1,he=null,we=null,De=null,Me=!1}}}function s(){let Y=!1,Me=null,he=null,we=null,De=null,me=null,ke=null,Oe=null,It=null;return{setTest:function(Mt){Y||(Mt?L(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(Mt){Me!==Mt&&!Y&&(i.stencilMask(Mt),Me=Mt)},setFunc:function(Mt,ei,ti){(he!==Mt||we!==ei||De!==ti)&&(i.stencilFunc(Mt,ei,ti),he=Mt,we=ei,De=ti)},setOp:function(Mt,ei,ti){(me!==Mt||ke!==ei||Oe!==ti)&&(i.stencilOp(Mt,ei,ti),me=Mt,ke=ei,Oe=ti)},setLocked:function(Mt){Y=Mt},setClear:function(Mt){It!==Mt&&(i.clearStencil(Mt),It=Mt)},reset:function(){Y=!1,Me=null,he=null,we=null,De=null,me=null,ke=null,Oe=null,It=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,_=null,M=null,y=null,b=null,S=null,w=null,v=new ge(0,0,0),E=0,T=!1,C=null,R=null,D=null,k=null,N=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,W=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=W>=2);let B=null,G={},$=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),ee=new Rt().fromArray($),te=new Rt().fromArray(xe);function q(Y,Me,he,we){let De=new Uint8Array(4),me=i.createTexture();i.bindTexture(Y,me),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<he;ke++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Me+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return me}let z={};z[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),L(i.DEPTH_TEST),a.setFunc(ds),pe(!1),ve(Eu),L(i.CULL_FACE),ue(Dn);function L(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function X(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function ae(Y,Me){return h[Y]!==Me?(i.bindFramebuffer(Y,Me),h[Y]=Me,Y===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Me),Y===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function re(Y,Me){let he=g,we=!1;if(Y){he=d.get(Me),he===void 0&&(he=[],d.set(Me,he));let De=Y.textures;if(he.length!==De.length||he[0]!==i.COLOR_ATTACHMENT0){for(let me=0,ke=De.length;me<ke;me++)he[me]=i.COLOR_ATTACHMENT0+me;he.length=De.length,we=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,we=!0);we&&i.drawBuffers(he)}function ye(Y){return x!==Y?(i.useProgram(Y),x=Y,!0):!1}let fe={[Gi]:i.FUNC_ADD,[Bd]:i.FUNC_SUBTRACT,[zd]:i.FUNC_REVERSE_SUBTRACT};fe[kd]=i.MIN,fe[Hd]=i.MAX;let se={[Vd]:i.ZERO,[Gd]:i.ONE,[Wd]:i.SRC_COLOR,[Lo]:i.SRC_ALPHA,[Zd]:i.SRC_ALPHA_SATURATE,[jd]:i.DST_COLOR,[qd]:i.DST_ALPHA,[Xd]:i.ONE_MINUS_SRC_COLOR,[Fo]:i.ONE_MINUS_SRC_ALPHA,[$d]:i.ONE_MINUS_DST_COLOR,[Yd]:i.ONE_MINUS_DST_ALPHA,[Kd]:i.CONSTANT_COLOR,[Jd]:i.ONE_MINUS_CONSTANT_COLOR,[Qd]:i.CONSTANT_ALPHA,[ef]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(Y,Me,he,we,De,me,ke,Oe,It,Mt){if(Y===Dn){m===!0&&(X(i.BLEND),m=!1);return}if(m===!1&&(L(i.BLEND),m=!0),Y!==Od){if(Y!==p||Mt!==T){if((_!==Gi||b!==Gi)&&(i.blendEquation(i.FUNC_ADD),_=Gi,b=Gi),Mt)switch(Y){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wt:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",Y);break}else switch(Y){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tu:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wu:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",Y);break}M=null,y=null,S=null,w=null,v.set(0,0,0),E=0,p=Y,T=Mt}return}De=De||Me,me=me||he,ke=ke||we,(Me!==_||De!==b)&&(i.blendEquationSeparate(fe[Me],fe[De]),_=Me,b=De),(he!==M||we!==y||me!==S||ke!==w)&&(i.blendFuncSeparate(se[he],se[we],se[me],se[ke]),M=he,y=we,S=me,w=ke),(Oe.equals(v)===!1||It!==E)&&(i.blendColor(Oe.r,Oe.g,Oe.b,It),v.copy(Oe),E=It),p=Y,T=!1}function ie(Y,Me){Y.side===pt?X(i.CULL_FACE):L(i.CULL_FACE);let he=Y.side===Xt;Me&&(he=!he),pe(he),Y.blending===hs&&Y.transparent===!1?ue(Dn):ue(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let we=Y.stencilWrite;o.setTest(we),we&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ne(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(Y){C!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),C=Y)}function ve(Y){Y!==Fd?(L(i.CULL_FACE),Y!==R&&(Y===Eu?i.cullFace(i.BACK):Y===Nd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),R=Y}function Ue(Y){Y!==D&&(U&&i.lineWidth(Y),D=Y)}function Ne(Y,Me,he){Y?(L(i.POLYGON_OFFSET_FILL),(k!==Me||N!==he)&&(k=Me,N=he,a.getReversed()&&(Me=-Me),i.polygonOffset(Me,he))):X(i.POLYGON_OFFSET_FILL)}function qe(Y){Y?L(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function $e(Y){Y===void 0&&(Y=i.TEXTURE0+O-1),B!==Y&&(i.activeTexture(Y),B=Y)}function H(Y,Me,he){he===void 0&&(B===null?he=i.TEXTURE0+O-1:he=B);let we=G[he];we===void 0&&(we={type:void 0,texture:void 0},G[he]=we),(we.type!==Y||we.texture!==Me)&&(B!==he&&(i.activeTexture(he),B=he),i.bindTexture(Y,Me||z[Y]),we.type=Y,we.texture=Me)}function dt(){let Y=G[B];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(Y){je("WebGLState:",Y)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(Y){je("WebGLState:",Y)}}function A(){try{i.texSubImage2D(...arguments)}catch(Y){je("WebGLState:",Y)}}function Z(){try{i.texSubImage3D(...arguments)}catch(Y){je("WebGLState:",Y)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){je("WebGLState:",Y)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){je("WebGLState:",Y)}}function _e(){try{i.texStorage2D(...arguments)}catch(Y){je("WebGLState:",Y)}}function be(){try{i.texStorage3D(...arguments)}catch(Y){je("WebGLState:",Y)}}function le(){try{i.texImage2D(...arguments)}catch(Y){je("WebGLState:",Y)}}function de(){try{i.texImage3D(...arguments)}catch(Y){je("WebGLState:",Y)}}function Ee(Y){return f[Y]!==void 0?f[Y]:i.getParameter(Y)}function He(Y,Me){f[Y]!==Me&&(i.pixelStorei(Y,Me),f[Y]=Me)}function Ae(Y){ee.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),ee.copy(Y))}function Te(Y){te.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),te.copy(Y))}function Ye(Y,Me){let he=c.get(Me);he===void 0&&(he=new WeakMap,c.set(Me,he));let we=he.get(Y);we===void 0&&(we=i.getUniformBlockIndex(Me,Y.name),he.set(Y,we))}function Ze(Y,Me){let we=c.get(Me).get(Y);l.get(Me)!==we&&(i.uniformBlockBinding(Me,we,Y.__bindingPointIndex),l.set(Me,we))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},B=null,G={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,_=null,M=null,y=null,b=null,S=null,w=null,v=new ge(0,0,0),E=0,T=!1,C=null,R=null,D=null,k=null,N=null,ee.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:L,disable:X,bindFramebuffer:ae,drawBuffers:re,useProgram:ye,setBlending:ue,setMaterial:ie,setFlipSided:pe,setCullFace:ve,setLineWidth:Ue,setPolygonOffset:Ne,setScissorTest:qe,activeTexture:$e,bindTexture:H,unbindTexture:dt,compressedTexImage2D:rt,compressedTexImage3D:F,texImage2D:le,texImage3D:de,pixelStorei:He,getParameter:Ee,updateUBOMapping:Ye,uniformBlockBinding:Ze,texStorage2D:_e,texStorage3D:be,texSubImage2D:A,texSubImage3D:Z,compressedTexSubImage2D:Q,compressedTexSubImage3D:oe,scissor:Ae,viewport:Te,reset:tt}}function ab(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,A){return g?new OffscreenCanvas(F,A):Zs("canvas")}function m(F,A,Z){let Q=1,oe=rt(F);if((oe.width>Z||oe.height>Z)&&(Q=Z/Math.max(oe.width,oe.height)),Q<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let _e=Math.floor(Q*oe.width),be=Math.floor(Q*oe.height);h===void 0&&(h=x(_e,be));let le=A?x(_e,be):h;return le.width=_e,le.height=be,le.getContext("2d").drawImage(F,0,0,_e,be),Xe("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+_e+"x"+be+")."),le}else return"data"in F&&Xe("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),F;return F}function p(F){return F.generateMipmaps}function _(F){i.generateMipmap(F)}function M(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(F,A,Z,Q,oe,_e=!1){if(F!==null){if(i[F]!==void 0)return i[F];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let be;Q&&(be=e.get("EXT_texture_norm16"),be||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=A;if(A===i.RED&&(Z===i.FLOAT&&(le=i.R32F),Z===i.HALF_FLOAT&&(le=i.R16F),Z===i.UNSIGNED_BYTE&&(le=i.R8),Z===i.UNSIGNED_SHORT&&be&&(le=be.R16_EXT),Z===i.SHORT&&be&&(le=be.R16_SNORM_EXT)),A===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.R8UI),Z===i.UNSIGNED_SHORT&&(le=i.R16UI),Z===i.UNSIGNED_INT&&(le=i.R32UI),Z===i.BYTE&&(le=i.R8I),Z===i.SHORT&&(le=i.R16I),Z===i.INT&&(le=i.R32I)),A===i.RG&&(Z===i.FLOAT&&(le=i.RG32F),Z===i.HALF_FLOAT&&(le=i.RG16F),Z===i.UNSIGNED_BYTE&&(le=i.RG8),Z===i.UNSIGNED_SHORT&&be&&(le=be.RG16_EXT),Z===i.SHORT&&be&&(le=be.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.RG8UI),Z===i.UNSIGNED_SHORT&&(le=i.RG16UI),Z===i.UNSIGNED_INT&&(le=i.RG32UI),Z===i.BYTE&&(le=i.RG8I),Z===i.SHORT&&(le=i.RG16I),Z===i.INT&&(le=i.RG32I)),A===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(le=i.RGB16UI),Z===i.UNSIGNED_INT&&(le=i.RGB32UI),Z===i.BYTE&&(le=i.RGB8I),Z===i.SHORT&&(le=i.RGB16I),Z===i.INT&&(le=i.RGB32I)),A===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),Z===i.UNSIGNED_INT&&(le=i.RGBA32UI),Z===i.BYTE&&(le=i.RGBA8I),Z===i.SHORT&&(le=i.RGBA16I),Z===i.INT&&(le=i.RGBA32I)),A===i.RGB&&(Z===i.UNSIGNED_SHORT&&be&&(le=be.RGB16_EXT),Z===i.SHORT&&be&&(le=be.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),A===i.RGBA){let de=_e?qr:lt.getTransfer(oe);Z===i.FLOAT&&(le=i.RGBA32F),Z===i.HALF_FLOAT&&(le=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(le=de===ut?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&be&&(le=be.RGBA16_EXT),Z===i.SHORT&&be&&(le=be.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function b(F,A){let Z;return F?A===null||A===$n||A===fr?Z=i.DEPTH24_STENCIL8:A===Ln?Z=i.DEPTH32F_STENCIL8:A===dr&&(Z=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$n||A===fr?Z=i.DEPTH_COMPONENT24:A===Ln?Z=i.DEPTH_COMPONENT32F:A===dr&&(Z=i.DEPTH_COMPONENT16),Z}function S(F,A){return p(F)===!0||F.isFramebufferTexture&&F.minFilter!==Jt&&F.minFilter!==Tt?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function w(F){let A=F.target;A.removeEventListener("dispose",w),E(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function v(F){let A=F.target;A.removeEventListener("dispose",v),C(A)}function E(F){let A=n.get(F);if(A.__webglInit===void 0)return;let Z=F.source,Q=d.get(Z);if(Q){let oe=Q[A.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&T(F),Object.keys(Q).length===0&&d.delete(Z)}n.remove(F)}function T(F){let A=n.get(F);i.deleteTexture(A.__webglTexture);let Z=F.source,Q=d.get(Z);delete Q[A.__cacheKey],a.memory.textures--}function C(F){let A=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(A.__webglFramebuffer[Q]))for(let oe=0;oe<A.__webglFramebuffer[Q].length;oe++)i.deleteFramebuffer(A.__webglFramebuffer[Q][oe]);else i.deleteFramebuffer(A.__webglFramebuffer[Q]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Q])}else{if(Array.isArray(A.__webglFramebuffer))for(let Q=0;Q<A.__webglFramebuffer.length;Q++)i.deleteFramebuffer(A.__webglFramebuffer[Q]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Q=0;Q<A.__webglColorRenderbuffer.length;Q++)A.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Q]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Z=F.textures;for(let Q=0,oe=Z.length;Q<oe;Q++){let _e=n.get(Z[Q]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(Z[Q])}n.remove(F)}let R=0;function D(){R=0}function k(){return R}function N(F){R=F}function O(){let F=R;return F>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),R+=1,F}function U(F){let A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function W(F,A){let Z=n.get(F);if(F.isVideoTexture&&H(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Z.__version!==F.version){let Q=F.image;if(Q===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{X(Z,F,A);return}}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+A)}function V(F,A){let Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){X(Z,F,A);return}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+A)}function B(F,A){let Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){X(Z,F,A);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+A)}function G(F,A){let Z=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Z.__version!==F.version){ae(Z,F,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+A)}let $={[js]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Vo]:i.MIRRORED_REPEAT},xe={[Jt]:i.NEAREST,[sf]:i.NEAREST_MIPMAP_NEAREST,[Ia]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[bl]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},ee={[of]:i.NEVER,[df]:i.ALWAYS,[lf]:i.LESS,[sc]:i.LEQUAL,[cf]:i.EQUAL,[rc]:i.GEQUAL,[uf]:i.GREATER,[hf]:i.NOTEQUAL};function te(F,A){if(A.type===Ln&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Tt||A.magFilter===bl||A.magFilter===Ia||A.magFilter===di||A.minFilter===Tt||A.minFilter===bl||A.minFilter===Ia||A.minFilter===di)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,$[A.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,$[A.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,$[A.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,xe[A.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,xe[A.minFilter]),A.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Jt||A.minFilter!==Ia&&A.minFilter!==di||A.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function q(F,A){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",w));let Q=A.source,oe=d.get(Q);oe===void 0&&(oe={},d.set(Q,oe));let _e=U(A);if(_e!==F.__cacheKey){oe[_e]===void 0&&(oe[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),oe[_e].usedTimes++;let be=oe[F.__cacheKey];be!==void 0&&(oe[F.__cacheKey].usedTimes--,be.usedTimes===0&&T(A)),F.__cacheKey=_e,F.__webglTexture=oe[_e].texture}return Z}function z(F,A,Z){return Math.floor(Math.floor(F/Z)/A)}function L(F,A,Z,Q){let _e=F.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Z,Q,A.data);else{_e.sort((He,Ae)=>He.start-Ae.start);let be=0;for(let He=1;He<_e.length;He++){let Ae=_e[be],Te=_e[He],Ye=Ae.start+Ae.count,Ze=z(Te.start,A.width,4),tt=z(Ae.start,A.width,4);Te.start<=Ye+1&&Ze===tt&&z(Te.start+Te.count-1,A.width,4)===Ze?Ae.count=Math.max(Ae.count,Te.start+Te.count-Ae.start):(++be,_e[be]=Te)}_e.length=be+1;let le=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let He=0,Ae=_e.length;He<Ae;He++){let Te=_e[He],Ye=Math.floor(Te.start/4),Ze=Math.ceil(Te.count/4),tt=Ye%A.width,Y=Math.floor(Ye/A.width),Me=Ze,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(i.TEXTURE_2D,0,tt,Y,Me,he,Z,Q,A.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function X(F,A,Z){let Q=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=i.TEXTURE_3D);let oe=q(F,A),_e=A.source;t.bindTexture(Q,F.__webglTexture,i.TEXTURE0+Z);let be=n.get(_e);if(_e.version!==be.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let he=lt.getPrimaries(lt.workingColorSpace),we=A.colorSpace===Zn?null:lt.getPrimaries(A.colorSpace),De=A.colorSpace===Zn||he===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let de=m(A.image,!1,s.maxTextureSize);de=dt(A,de);let Ee=r.convert(A.format,A.colorSpace),He=r.convert(A.type),Ae=y(A.internalFormat,Ee,He,A.normalized,A.colorSpace,A.isVideoTexture);te(Q,A);let Te,Ye=A.mipmaps,Ze=A.isVideoTexture!==!0,tt=be.__version===void 0||oe===!0,Y=_e.dataReady,Me=S(A,de);if(A.isDepthTexture)Ae=b(A.format===Ji,A.type),tt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Ae,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ae,de.width,de.height,0,Ee,He,null));else if(A.isDataTexture)if(Ye.length>0){Ze&&tt&&t.texStorage2D(i.TEXTURE_2D,Me,Ae,Ye[0].width,Ye[0].height);for(let he=0,we=Ye.length;he<we;he++)Te=Ye[he],Ze?Y&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Te.width,Te.height,Ee,He,Te.data):t.texImage2D(i.TEXTURE_2D,he,Ae,Te.width,Te.height,0,Ee,He,Te.data);A.generateMipmaps=!1}else Ze?(tt&&t.texStorage2D(i.TEXTURE_2D,Me,Ae,de.width,de.height),Y&&L(A,de,Ee,He)):t.texImage2D(i.TEXTURE_2D,0,Ae,de.width,de.height,0,Ee,He,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ze&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ae,Ye[0].width,Ye[0].height,de.depth);for(let he=0,we=Ye.length;he<we;he++)if(Te=Ye[he],A.format!==Fn)if(Ee!==null)if(Ze){if(Y)if(A.layerUpdates.size>0){let De=ku(Te.width,Te.height,A.format,A.type);for(let me of A.layerUpdates){let ke=Te.data.subarray(me*De/Te.data.BYTES_PER_ELEMENT,(me+1)*De/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,me,Te.width,Te.height,1,Ee,ke)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Te.width,Te.height,de.depth,Ee,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Ae,Te.width,Te.height,de.depth,0,Te.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Te.width,Te.height,de.depth,Ee,He,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Ae,Te.width,Te.height,de.depth,0,Ee,He,Te.data)}else{Ze&&tt&&t.texStorage2D(i.TEXTURE_2D,Me,Ae,Ye[0].width,Ye[0].height);for(let he=0,we=Ye.length;he<we;he++)Te=Ye[he],A.format!==Fn?Ee!==null?Ze?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Ae,Te.width,Te.height,0,Te.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?Y&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Te.width,Te.height,Ee,He,Te.data):t.texImage2D(i.TEXTURE_2D,he,Ae,Te.width,Te.height,0,Ee,He,Te.data)}else if(A.isDataArrayTexture)if(Ze){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ae,de.width,de.height,de.depth),Y)if(A.layerUpdates.size>0){let he=ku(de.width,de.height,A.format,A.type);for(let we of A.layerUpdates){let De=de.data.subarray(we*he/de.data.BYTES_PER_ELEMENT,(we+1)*he/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,de.width,de.height,1,Ee,He,De)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ee,He,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,de.width,de.height,de.depth,0,Ee,He,de.data);else if(A.isData3DTexture)Ze?(tt&&t.texStorage3D(i.TEXTURE_3D,Me,Ae,de.width,de.height,de.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ee,He,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,de.width,de.height,de.depth,0,Ee,He,de.data);else if(A.isFramebufferTexture){if(tt)if(Ze)t.texStorage2D(i.TEXTURE_2D,Me,Ae,de.width,de.height);else{let he=de.width,we=de.height;for(let De=0;De<Me;De++)t.texImage2D(i.TEXTURE_2D,De,Ae,he,we,0,Ee,He,null),he>>=1,we>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),de.parentNode!==he){he.appendChild(de),f.add(A),he.onpaint=we=>{let De=we.changedElements;for(let me of f)De.includes(me.image)&&(me.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let De=i.RGBA,me=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,De,me,ke,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ye.length>0){if(Ze&&tt){let he=rt(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ae,he.width,he.height)}for(let he=0,we=Ye.length;he<we;he++)Te=Ye[he],Ze?Y&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Ee,He,Te):t.texImage2D(i.TEXTURE_2D,he,Ae,Ee,He,Te);A.generateMipmaps=!1}else if(Ze){if(tt){let he=rt(de);t.texStorage2D(i.TEXTURE_2D,Me,Ae,he.width,he.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,He,de)}else t.texImage2D(i.TEXTURE_2D,0,Ae,Ee,He,de);p(A)&&_(Q),be.__version=_e.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function ae(F,A,Z){if(A.image.length!==6)return;let Q=q(F,A),oe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Z);let _e=n.get(oe);if(oe.version!==_e.__version||Q===!0){t.activeTexture(i.TEXTURE0+Z);let be=lt.getPrimaries(lt.workingColorSpace),le=A.colorSpace===Zn?null:lt.getPrimaries(A.colorSpace),de=A.colorSpace===Zn||be===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ee=A.isCompressedTexture||A.image[0].isCompressedTexture,He=A.image[0]&&A.image[0].isDataTexture,Ae=[];for(let me=0;me<6;me++)!Ee&&!He?Ae[me]=m(A.image[me],!0,s.maxCubemapSize):Ae[me]=He?A.image[me].image:A.image[me],Ae[me]=dt(A,Ae[me]);let Te=Ae[0],Ye=r.convert(A.format,A.colorSpace),Ze=r.convert(A.type),tt=y(A.internalFormat,Ye,Ze,A.normalized,A.colorSpace),Y=A.isVideoTexture!==!0,Me=_e.__version===void 0||Q===!0,he=oe.dataReady,we=S(A,Te);te(i.TEXTURE_CUBE_MAP,A);let De;if(Ee){Y&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,tt,Te.width,Te.height);for(let me=0;me<6;me++){De=Ae[me].mipmaps;for(let ke=0;ke<De.length;ke++){let Oe=De[ke];A.format!==Fn?Ye!==null?Y?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,Oe.width,Oe.height,Ye,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,tt,Oe.width,Oe.height,0,Oe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,Oe.width,Oe.height,Ye,Ze,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,tt,Oe.width,Oe.height,0,Ye,Ze,Oe.data)}}}else{if(De=A.mipmaps,Y&&Me){De.length>0&&we++;let me=rt(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,tt,me.width,me.height)}for(let me=0;me<6;me++)if(He){Y?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ae[me].width,Ae[me].height,Ye,Ze,Ae[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,tt,Ae[me].width,Ae[me].height,0,Ye,Ze,Ae[me].data);for(let ke=0;ke<De.length;ke++){let It=De[ke].image[me].image;Y?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,It.width,It.height,Ye,Ze,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,tt,It.width,It.height,0,Ye,Ze,It.data)}}else{Y?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ye,Ze,Ae[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,tt,Ye,Ze,Ae[me]);for(let ke=0;ke<De.length;ke++){let Oe=De[ke];Y?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,Ye,Ze,Oe.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,tt,Ye,Ze,Oe.image[me])}}}p(A)&&_(i.TEXTURE_CUBE_MAP),_e.__version=oe.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function re(F,A,Z,Q,oe,_e){let be=r.convert(Z.format,Z.colorSpace),le=r.convert(Z.type),de=y(Z.internalFormat,be,le,Z.normalized,Z.colorSpace),Ee=n.get(A),He=n.get(Z);if(He.__renderTarget=A,!Ee.__hasExternalTextures){let Ae=Math.max(1,A.width>>_e),Te=Math.max(1,A.height>>_e);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,_e,de,Ae,Te,A.depth,0,be,le,null):t.texImage2D(oe,_e,de,Ae,Te,0,be,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),$e(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,oe,He.__webglTexture,0,qe(A)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,oe,He.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(F,A,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,F),A.depthBuffer){let Q=A.depthTexture,oe=Q&&Q.isDepthTexture?Q.type:null,_e=b(A.stencilBuffer,oe),be=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;$e(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(A),_e,A.width,A.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(A),_e,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,_e,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,F)}else{let Q=A.textures;for(let oe=0;oe<Q.length;oe++){let _e=Q[oe],be=r.convert(_e.format,_e.colorSpace),le=r.convert(_e.type),de=y(_e.internalFormat,be,le,_e.normalized,_e.colorSpace);$e(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(A),de,A.width,A.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(A),de,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,de,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(F,A,Z){let Q=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(A.depthTexture);if(oe.__renderTarget=A,(!oe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Q){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),te(i.TEXTURE_CUBE_MAP,A.depthTexture);let Ee=r.convert(A.depthTexture.format),He=r.convert(A.depthTexture.type),Ae;A.depthTexture.format===ai?Ae=i.DEPTH_COMPONENT24:A.depthTexture.format===Ji&&(Ae=i.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ae,A.width,A.height,0,Ee,He,null)}}else W(A.depthTexture,0);let _e=oe.__webglTexture,be=qe(A),le=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,de=A.depthTexture.format===Ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===ai)$e(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,le,_e,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,de,le,_e,0);else if(A.depthTexture.format===Ji)$e(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,le,_e,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,de,le,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(F){let A=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){let Q=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Q){let oe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Q.removeEventListener("dispose",oe)};Q.addEventListener("dispose",oe),A.__depthDisposeCallback=oe}A.__boundDepthTexture=Q}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if(Z)for(let Q=0;Q<6;Q++)fe(A.__webglFramebuffer[Q],F,Q);else{let Q=F.texture.mipmaps;Q&&Q.length>0?fe(A.__webglFramebuffer[0],F,0):fe(A.__webglFramebuffer,F,0)}else if(Z){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]===void 0)A.__webglDepthbuffer[Q]=i.createRenderbuffer(),ye(A.__webglDepthbuffer[Q],F,!1);else{let oe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,_e)}}else{let Q=F.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ye(A.__webglDepthbuffer,F,!1);else{let oe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,_e)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(F,A,Z){let Q=n.get(F);A!==void 0&&re(Q.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&se(F)}function ie(F){let A=F.texture,Z=n.get(F),Q=n.get(A);F.addEventListener("dispose",v);let oe=F.textures,_e=F.isWebGLCubeRenderTarget===!0,be=oe.length>1;if(be||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=A.version,a.memory.textures++),_e){Z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[le]=[];for(let de=0;de<A.mipmaps.length;de++)Z.__webglFramebuffer[le][de]=i.createFramebuffer()}else Z.__webglFramebuffer[le]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let le=0;le<A.mipmaps.length;le++)Z.__webglFramebuffer[le]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(be)for(let le=0,de=oe.length;le<de;le++){let Ee=n.get(oe[le]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&$e(F)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let le=0;le<oe.length;le++){let de=oe[le];Z.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[le]);let Ee=r.convert(de.format,de.colorSpace),He=r.convert(de.type),Ae=y(de.internalFormat,Ee,He,de.normalized,de.colorSpace,F.isXRRenderTarget===!0),Te=qe(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Ae,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,Z.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),te(i.TEXTURE_CUBE_MAP,A);for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)re(Z.__webglFramebuffer[le][de],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else re(Z.__webglFramebuffer[le],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(A)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let le=0,de=oe.length;le<de;le++){let Ee=oe[le],He=n.get(Ee),Ae=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ae=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,He.__webglTexture),te(Ae,Ee),re(Z.__webglFramebuffer,F,Ee,i.COLOR_ATTACHMENT0+le,Ae,0),p(Ee)&&_(Ae)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(le=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),te(le,A),A.mipmaps&&A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)re(Z.__webglFramebuffer[de],F,A,i.COLOR_ATTACHMENT0,le,de);else re(Z.__webglFramebuffer,F,A,i.COLOR_ATTACHMENT0,le,0);p(A)&&_(le),t.unbindTexture()}F.depthBuffer&&se(F)}function pe(F){let A=F.textures;for(let Z=0,Q=A.length;Z<Q;Z++){let oe=A[Z];if(p(oe)){let _e=M(F),be=n.get(oe).__webglTexture;t.bindTexture(_e,be),_(_e),t.unbindTexture()}}}let ve=[],Ue=[];function Ne(F){if(F.samples>0){if($e(F)===!1){let A=F.textures,Z=F.width,Q=F.height,oe=i.COLOR_BUFFER_BIT,_e=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(F),le=A.length>1;if(le)for(let Ee=0;Ee<A.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let de=F.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ee=0;Ee<A.length;Ee++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);let He=n.get(A[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,Z,Q,0,0,Z,Q,oe,i.NEAREST),l===!0&&(ve.length=0,Ue.length=0,ve.push(i.COLOR_ATTACHMENT0+Ee),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ve.push(_e),Ue.push(_e),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Ee=0;Ee<A.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);let He=n.get(A[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){let A=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function qe(F){return Math.min(s.maxSamples,F.samples)}function $e(F){let A=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function H(F){let A=a.render.frame;u.get(F)!==A&&(u.set(F,A),F.update())}function dt(F,A){let Z=F.colorSpace,Q=F.format,oe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==Xr&&Z!==Zn&&(lt.getTransfer(Z)===ut?(Q!==Fn||oe!==mn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",Z)),A}function rt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.getTextureUnits=k,this.setTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=B,this.setTextureCube=G,this.rebindTextures=ue,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=re,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ob(i,e){function t(n,s=Zn){let r,a=lt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===El)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ru)return i.BYTE;if(n===Cu)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===Ml)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===Du)return i.ALPHA;if(n===Lu)return i.RGB;if(n===Fn)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===pr)return i.RED;if(n===Tl)return i.RED_INTEGER;if(n===Qi)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===Al)return i.RGBA_INTEGER;if(n===Da||n===La||n===Fa||n===Na)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Cl||n===Pl||n===Il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Ll||n===Fl||n===Nl||n===Ul||n===Ua||n===Ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Ll)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nl)return r.COMPRESSED_R11_EAC;if(n===Ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return r.COMPRESSED_RG11_EAC;if(n===Ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bl||n===zl||n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===jl||n===$l||n===Zl||n===Kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jl||n===Ql||n===ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jl)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tc||n===nc||n===Oa||n===ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var lb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Je({vertexShader:lb,fragmentShader:cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends Xn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new rh,p={},_=t.getContextAttributes(),M=null,y=null,b=[],S=[],w=new ce,v=null,E=new kt;E.viewport=new Rt;let T=new kt;T.viewport=new Rt;let C=[E,T],R=new xl,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let z=b[q];return z===void 0&&(z=new tr,b[q]=z),z.getTargetRaySpace()},this.getControllerGrip=function(q){let z=b[q];return z===void 0&&(z=new tr,b[q]=z),z.getGripSpace()},this.getHand=function(q){let z=b[q];return z===void 0&&(z=new tr,b[q]=z),z.getHandSpace()};function N(q){let z=S.indexOf(q.inputSource);if(z===-1)return;let L=b[z];L!==void 0&&(L.update(q.inputSource,q.frame,c||a),L.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",U);for(let q=0;q<b.length;q++){let z=S[q];z!==null&&(S[q]=null,b[q].disconnect(z))}D=null,k=null,m.reset();for(let q in p)delete p[q];e.setRenderTarget(M),d=null,h=null,f=null,s=null,y=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let L=null,X=null,ae=null;_.depth&&(ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,L=_.stencil?Ji:ai,X=_.stencil?fr:$n);let re={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(re),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Wt(h.textureWidth,h.textureHeight,{format:Fn,type:mn,depthTexture:new Ai(h.textureWidth,h.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let L={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,L),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Wt(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(q){for(let z=0;z<q.removed.length;z++){let L=q.removed[z],X=S.indexOf(L);X>=0&&(S[X]=null,b[X].disconnect(L))}for(let z=0;z<q.added.length;z++){let L=q.added[z],X=S.indexOf(L);if(X===-1){for(let re=0;re<b.length;re++)if(re>=S.length){S.push(L),X=re;break}else if(S[re]===null){S[re]=L,X=re;break}if(X===-1)break}let ae=b[X];ae&&ae.connect(L)}}let W=new I,V=new I;function B(q,z,L){W.setFromMatrixPosition(z.matrixWorld),V.setFromMatrixPosition(L.matrixWorld);let X=W.distanceTo(V),ae=z.projectionMatrix.elements,re=L.projectionMatrix.elements,ye=ae[14]/(ae[10]-1),fe=ae[14]/(ae[10]+1),se=(ae[9]+1)/ae[5],ue=(ae[9]-1)/ae[5],ie=(ae[8]-1)/ae[0],pe=(re[8]+1)/re[0],ve=ye*ie,Ue=ye*pe,Ne=X/(-ie+pe),qe=Ne*-ie;if(z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(qe),q.translateZ(Ne),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ae[10]===-1)q.projectionMatrix.copy(z.projectionMatrix),q.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{let $e=ye+Ne,H=fe+Ne,dt=ve-qe,rt=Ue+(X-qe),F=se*fe/H*$e,A=ue*fe/H*$e;q.projectionMatrix.makePerspective(dt,rt,F,A,$e,H),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function G(q,z){z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let z=q.near,L=q.far;m.texture!==null&&(m.depthNear>0&&(z=m.depthNear),m.depthFar>0&&(L=m.depthFar)),R.near=T.near=E.near=z,R.far=T.far=E.far=L,(D!==R.near||k!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,k=R.far),R.layers.mask=q.layers.mask|6,E.layers.mask=R.layers.mask&-5,T.layers.mask=R.layers.mask&-3;let X=q.parent,ae=R.cameras;G(R,X);for(let re=0;re<ae.length;re++)G(ae[re],X);ae.length===2?B(R,E,T):R.projectionMatrix.copy(E.projectionMatrix),$(q,R,X)};function $(q,z,L){L===null?q.matrix.copy(z.matrixWorld):(q.matrix.copy(L.matrixWorld),q.matrix.invert(),q.matrix.multiply(z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(z.projectionMatrix),q.projectionMatrixInverse.copy(z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Js*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(q){return p[q]};let xe=null;function ee(q,z){if(u=z.getViewerPose(c||a),g=z,u!==null){let L=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let X=!1;L.length!==R.cameras.length&&(R.cameras.length=0,X=!0);for(let fe=0;fe<L.length;fe++){let se=L[fe],ue=null;if(d!==null)ue=d.getViewport(se);else{let pe=f.getViewSubImage(h,se);ue=pe.viewport,fe===0&&(e.setRenderTargetTextures(y,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(y))}let ie=C[fe];ie===void 0&&(ie=new kt,ie.layers.enable(fe),ie.viewport=new Rt,C[fe]=ie),ie.matrix.fromArray(se.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(se.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ue.x,ue.y,ue.width,ue.height),fe===0&&(R.matrix.copy(ie.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),X===!0&&R.cameras.push(ie)}let ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let fe=f.getDepthInformation(L[0]);fe&&fe.isValid&&fe.texture&&m.init(fe,s.renderState)}if(ae&&ae.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let fe=0;fe<L.length;fe++){let se=L[fe].camera;if(se){let ue=p[se];ue||(ue=new ta,p[se]=ue);let ie=f.getCameraImage(se);ue.sourceTexture=ie}}}}for(let L=0;L<b.length;L++){let X=S[L],ae=b[L];X!==null&&ae!==void 0&&ae.update(X,z,c||a)}xe&&xe(q,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),g=null}let te=new qf;te.setAnimationLoop(ee),this.setAnimationLoop=function(q){xe=q},this.dispose=function(){}}},ub=new ot,Jf=new Qe;Jf.set(-1,0,0,0,1,0,0,0,1);function hb(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ou(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(ub.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function db(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let S=b.program;n.uniformBlockBinding(y,S)}function c(y,b){let S=s[y.id];S===void 0&&(m(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",_));let w=b.program;n.updateUBOMapping(y,w);let v=e.render.frame;r[y.id]!==v&&(h(y),r[y.id]=v)}function u(y){let b=f();y.__bindingPointIndex=b;let S=i.createBuffer(),w=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let b=s[y.id],S=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,E=S.length;v<E;v++){let T=S[v];if(Array.isArray(T))for(let C=0,R=T.length;C<R;C++)d(T[C],v,C,w);else d(T,v,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,b,S,w){if(x(y,b,S,w)===!0){let v=y.__offset,E=y.value;if(Array.isArray(E)){let T=0;for(let C=0;C<E.length;C++){let R=E[C],D=p(R);g(R,y.__data,T),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(T+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function g(y,b,S){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,S)}function x(y,b,S,w){let v=y.value,E=b+"_"+S;if(w[E]===void 0)return typeof v=="number"||typeof v=="boolean"?w[E]=v:ArrayBuffer.isView(v)?w[E]=v.slice():w[E]=v.clone(),!0;{let T=w[E];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return w[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(y){let b=y.uniforms,S=0,w=16;for(let E=0,T=b.length;E<T;E++){let C=Array.isArray(b[E])?b[E]:[b[E]];for(let R=0,D=C.length;R<D;R++){let k=C[R],N=Array.isArray(k.value)?k.value:[k.value];for(let O=0,U=N.length;O<U;O++){let W=N[O],V=p(W),B=S%w,G=B%V.boundary,$=B+G;S+=G,$!==0&&w-$<V.storage&&(S+=w-$),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=V.storage}}}let v=S%w;return v>0&&(S+=w-v),y.__size=S,y.__cache={},this}function p(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",y),b}function _(y){let b=y.target;b.removeEventListener("dispose",_);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function M(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var fb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function pb(){return fi===null&&(fi=new pn(fb,16,16,Qi,cn),fi.name="DFG_LUT",fi.minFilter=Tt,fi.magFilter=Tt,fi.wrapS=si,fi.wrapT=si,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var uc=class{constructor(e={}){let{canvas:t=ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=d,m=new Set([Al,wl,Tl]),p=new Set([mn,$n,dr,fr,Sl,El]),_=new Uint32Array(4),M=new Int32Array(4),y=new I,b=null,S=null,w=[],v=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,C=!1,R=null,D=null,k=null,N=null;this._outputColorSpace=Ot;let O=0,U=0,W=null,V=-1,B=null,G=new Rt,$=new Rt,xe=null,ee=new ge(0),te=0,q=t.width,z=t.height,L=1,X=null,ae=null,re=new Rt(0,0,q,z),ye=new Rt(0,0,q,z),fe=!1,se=new nr,ue=!1,ie=!1,pe=new ot,ve=new I,Ue=new Rt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function $e(){return W===null?L:1}let H=n;function dt(P,j){return t.getContext(P,j)}try{let P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",ei,!1),H===null){let j="webgl2";if(H=dt(j,P),H===null)throw dt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(P){throw je("WebGLRenderer: "+P.message),P}let rt,F,A,Z,Q,oe,_e,be,le,de,Ee,He,Ae,Te,Ye,Ze,tt,Y,Me,he,we,De,me;function ke(){rt=new by(H),rt.init(),we=new ob(H,rt),F=new fy(H,rt,e,we),A=new rb(H,rt),F.reversedDepthBuffer&&h&&A.buffers.depth.setReversed(!0),D=H.createFramebuffer(),k=H.createFramebuffer(),N=H.createFramebuffer(),Z=new Ey(H),Q=new X_,oe=new ab(H,rt,A,Q,F,we,Z),_e=new _y(T),be=new Rg(H),De=new hy(H,be),le=new My(H,be,Z,De),de=new wy(H,le,be,De,Z),Y=new Ty(H,F,oe),Ye=new py(Q),Ee=new W_(T,_e,rt,F,De,Ye),He=new hb(T,Q),Ae=new Y_,Te=new Q_(rt),tt=new uy(T,_e,A,de,g,l),Ze=new sb(T,de,F),me=new db(H,Z,F,A),Me=new dy(H,rt,Z),he=new Sy(H,rt,Z),Z.programs=Ee.programs,T.capabilities=F,T.extensions=rt,T.properties=Q,T.renderLists=Ae,T.shadowMap=Ze,T.state=A,T.info=Z}ke(),x!==mn&&(E=new Ry(x,t.width,t.height,o,s,r));let Oe=new ah(T,H);this.xr=Oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let P=rt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=rt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(P){P!==void 0&&(L=P,this.setSize(q,z,!1))},this.getSize=function(P){return P.set(q,z)},this.setSize=function(P,j,ne=!0){if(Oe.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}q=P,z=j,t.width=Math.floor(P*L),t.height=Math.floor(j*L),ne===!0&&(t.style.width=P+"px",t.style.height=j+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(q*L,z*L).floor()},this.setDrawingBufferSize=function(P,j,ne){q=P,z=j,L=ne,t.width=Math.floor(P*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,P,j)},this.setEffects=function(P){if(x===mn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let j=0;j<P.length;j++)if(P[j].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(G)},this.getViewport=function(P){return P.copy(re)},this.setViewport=function(P,j,ne,K){P.isVector4?re.set(P.x,P.y,P.z,P.w):re.set(P,j,ne,K),A.viewport(G.copy(re).multiplyScalar(L).round())},this.getScissor=function(P){return P.copy(ye)},this.setScissor=function(P,j,ne,K){P.isVector4?ye.set(P.x,P.y,P.z,P.w):ye.set(P,j,ne,K),A.scissor($.copy(ye).multiplyScalar(L).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(P){A.setScissorTest(fe=P)},this.setOpaqueSort=function(P){X=P},this.setTransparentSort=function(P){ae=P},this.getClearColor=function(P){return P.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(P=!0,j=!0,ne=!0){let K=0;if(P){let J=!1;if(W!==null){let Ie=W.texture.format;J=m.has(Ie)}if(J){let Ie=W.texture.type,Fe=p.has(Ie),Ce=tt.getClearColor(),Be=tt.getClearAlpha(),Ve=Ce.r,nt=Ce.g,at=Ce.b;Fe?(_[0]=Ve,_[1]=nt,_[2]=at,_[3]=Be,H.clearBufferuiv(H.COLOR,0,_)):(M[0]=Ve,M[1]=nt,M[2]=at,M[3]=Be,H.clearBufferiv(H.COLOR,0,M))}else K|=H.COLOR_BUFFER_BIT}j&&(K|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(K|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),R=P},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),tt.dispose(),Ae.dispose(),Te.dispose(),Q.dispose(),_e.dispose(),de.dispose(),De.dispose(),me.dispose(),Ee.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Oh),Oe.removeEventListener("sessionend",Bh),is.stop()};function It(P){P.preventDefault(),Yr("WebGLRenderer: Context Lost."),C=!0}function Mt(){Yr("WebGLRenderer: Context Restored."),C=!1;let P=Z.autoReset,j=Ze.enabled,ne=Ze.autoUpdate,K=Ze.needsUpdate,J=Ze.type;ke(),Z.autoReset=P,Ze.enabled=j,Ze.autoUpdate=ne,Ze.needsUpdate=K,Ze.type=J}function ei(P){je("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ti(P){let j=P.target;j.removeEventListener("dispose",ti),Jm(j)}function Jm(P){Qm(P),Q.remove(P)}function Qm(P){let j=Q.get(P).programs;j!==void 0&&(j.forEach(function(ne){Ee.releaseProgram(ne)}),P.isShaderMaterial&&Ee.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,ne,K,J,Ie){j===null&&(j=Ne);let Fe=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ce=n0(P,j,ne,K,J);A.setMaterial(K,Fe);let Be=ne.index,Ve=1;if(K.wireframe===!0){if(Be=le.getWireframeAttribute(ne),Be===void 0)return;Ve=2}let nt=ne.drawRange,at=ne.attributes.position,Ge=nt.start*Ve,gt=(nt.start+nt.count)*Ve;Ie!==null&&(Ge=Math.max(Ge,Ie.start*Ve),gt=Math.min(gt,(Ie.start+Ie.count)*Ve)),Be!==null?(Ge=Math.max(Ge,0),gt=Math.min(gt,Be.count)):at!=null&&(Ge=Math.max(Ge,0),gt=Math.min(gt,at.count));let Nt=gt-Ge;if(Nt<0||Nt===1/0)return;De.setup(J,K,Ce,ne,Be);let Dt,vt=Me;if(Be!==null&&(Dt=be.get(Be),vt=he,vt.setIndex(Dt)),J.isMesh)K.wireframe===!0?(A.setLineWidth(K.wireframeLinewidth*$e()),vt.setMode(H.LINES)):vt.setMode(H.TRIANGLES);else if(J.isLine){let tn=K.linewidth;tn===void 0&&(tn=1),A.setLineWidth(tn*$e()),J.isLineSegments?vt.setMode(H.LINES):J.isLineLoop?vt.setMode(H.LINE_LOOP):vt.setMode(H.LINE_STRIP)}else J.isPoints?vt.setMode(H.POINTS):J.isSprite&&vt.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))vt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let tn=J._multiDrawStarts,Le=J._multiDrawCounts,vn=J._multiDrawCount,ct=Be?be.get(Be).bytesPerElement:1,An=Q.get(K).currentProgram.getUniforms();for(let ni=0;ni<vn;ni++)An.setValue(H,"_gl_DrawID",ni),vt.render(tn[ni]/ct,Le[ni])}else if(J.isInstancedMesh)vt.renderInstances(Ge,Nt,J.count);else if(ne.isInstancedBufferGeometry){let tn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Le=Math.min(ne.instanceCount,tn);vt.renderInstances(Ge,Nt,Le)}else vt.render(Ge,Nt)};function Uh(P,j,ne){P.transparent===!0&&P.side===pt&&P.forceSinglePass===!1?(P.side=Xt,P.needsUpdate=!0,Ja(P,j,ne),P.side=bn,P.needsUpdate=!0,Ja(P,j,ne),P.side=pt):Ja(P,j,ne)}this.compile=function(P,j,ne=null){ne===null&&(ne=P),S=Te.get(ne),S.init(j),v.push(S),ne.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),P!==ne&&P.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights();let K=new Set;return P.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let Fe=0;Fe<Ie.length;Fe++){let Ce=Ie[Fe];Uh(Ce,ne,J),K.add(Ce)}else Uh(Ie,ne,J),K.add(Ie)}),S=v.pop(),K},this.compileAsync=function(P,j,ne=null){let K=this.compile(P,j,ne);return new Promise(J=>{function Ie(){if(K.forEach(function(Fe){Q.get(Fe).currentProgram.isReady()&&K.delete(Fe)}),K.size===0){J(P);return}setTimeout(Ie,10)}rt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Fc=null;function e0(P){Fc&&Fc(P)}function Oh(){is.stop()}function Bh(){is.start()}let is=new qf;is.setAnimationLoop(e0),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(P){Fc=P,Oe.setAnimationLoop(P),P===null?is.stop():is.start()},Oe.addEventListener("sessionstart",Oh),Oe.addEventListener("sessionend",Bh),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;R!==null&&R.renderStart(P,j);let ne=Oe.enabled===!0&&Oe.isPresenting===!0,K=E!==null&&(W===null||ne)&&E.begin(T,W);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(j),j=Oe.getCamera()),P.isScene===!0&&P.onBeforeRender(T,P,j,W),S=Te.get(P,v.length),S.init(j),S.state.textureUnits=oe.getTextureUnits(),v.push(S),pe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),se.setFromProjectionMatrix(pe,Wn,j.reversedDepth),ie=this.localClippingEnabled,ue=Ye.init(this.clippingPlanes,ie),b=Ae.get(P,w.length),b.init(),w.push(b),Oe.enabled===!0&&Oe.isPresenting===!0){let Fe=T.xr.getDepthSensingMesh();Fe!==null&&Nc(Fe,j,-1/0,T.sortObjects)}Nc(P,j,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(X,ae,j.reversedDepth),qe=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,qe&&tt.addToRenderList(b,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&Ye.beginShadows();let J=S.state.shadowsArray;if(Ze.render(J,P,j),ue===!0&&Ye.endShadows(),(K&&E.hasRenderPass())===!1){let Fe=b.opaque,Ce=b.transmissive;if(S.setupLights(),j.isArrayCamera){let Be=j.cameras;if(Ce.length>0)for(let Ve=0,nt=Be.length;Ve<nt;Ve++){let at=Be[Ve];kh(Fe,Ce,P,at)}qe&&tt.render(P);for(let Ve=0,nt=Be.length;Ve<nt;Ve++){let at=Be[Ve];zh(b,P,at,at.viewport)}}else Ce.length>0&&kh(Fe,Ce,P,j),qe&&tt.render(P),zh(b,P,j)}W!==null&&U===0&&(oe.updateMultisampleRenderTarget(W),oe.updateRenderTargetMipmap(W)),K&&E.end(T),P.isScene===!0&&P.onAfterRender(T,P,j),De.resetDefaultState(),V=-1,B=null,v.pop(),v.length>0?(S=v[v.length-1],oe.setTextureUnits(S.state.textureUnits),ue===!0&&Ye.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,R!==null&&R.renderEnd()};function Nc(P,j,ne,K){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)ne=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLightProbeGrid)S.pushLightProbeGrid(P);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||se.intersectsSprite(P)){K&&Ue.setFromMatrixPosition(P.matrixWorld).applyMatrix4(pe);let Fe=de.update(P),Ce=P.material;Ce.visible&&b.push(P,Fe,Ce,ne,Ue.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||se.intersectsObject(P))){let Fe=de.update(P),Ce=P.material;if(K&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ue.copy(P.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ue.copy(Fe.boundingSphere.center)),Ue.applyMatrix4(P.matrixWorld).applyMatrix4(pe)),Array.isArray(Ce)){let Be=Fe.groups;for(let Ve=0,nt=Be.length;Ve<nt;Ve++){let at=Be[Ve],Ge=Ce[at.materialIndex];Ge&&Ge.visible&&b.push(P,Fe,Ge,ne,Ue.z,at)}}else Ce.visible&&b.push(P,Fe,Ce,ne,Ue.z,null)}}let Ie=P.children;for(let Fe=0,Ce=Ie.length;Fe<Ce;Fe++)Nc(Ie[Fe],j,ne,K)}function zh(P,j,ne,K){let{opaque:J,transmissive:Ie,transparent:Fe}=P;S.setupLightsView(ne),ue===!0&&Ye.setGlobalState(T.clippingPlanes,ne),K&&A.viewport(G.copy(K)),J.length>0&&Ka(J,j,ne),Ie.length>0&&Ka(Ie,j,ne),Fe.length>0&&Ka(Fe,j,ne),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function kh(P,j,ne,K){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[K.id]===void 0){let Ge=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[K.id]=new Wt(1,1,{generateMipmaps:!0,type:Ge?cn:mn,minFilter:di,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Ie=S.state.transmissionRenderTarget[K.id],Fe=K.viewport||G;Ie.setSize(Fe.z*T.transmissionResolutionScale,Fe.w*T.transmissionResolutionScale);let Ce=T.getRenderTarget(),Be=T.getActiveCubeFace(),Ve=T.getActiveMipmapLevel();T.setRenderTarget(Ie),T.getClearColor(ee),te=T.getClearAlpha(),te<1&&T.setClearColor(16777215,.5),T.clear(),qe&&tt.render(ne);let nt=T.toneMapping;T.toneMapping=jn;let at=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),S.setupLightsView(K),ue===!0&&Ye.setGlobalState(T.clippingPlanes,K),Ka(P,ne,K),oe.updateMultisampleRenderTarget(Ie),oe.updateRenderTargetMipmap(Ie),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let gt=0,Nt=j.length;gt<Nt;gt++){let Dt=j[gt],{object:vt,geometry:tn,material:Le,group:vn}=Dt;if(Le.side===pt&&vt.layers.test(K.layers)){let ct=Le.side;Le.side=Xt,Le.needsUpdate=!0,Hh(vt,ne,K,tn,Le,vn),Le.side=ct,Le.needsUpdate=!0,Ge=!0}}Ge===!0&&(oe.updateMultisampleRenderTarget(Ie),oe.updateRenderTargetMipmap(Ie))}T.setRenderTarget(Ce,Be,Ve),T.setClearColor(ee,te),at!==void 0&&(K.viewport=at),T.toneMapping=nt}function Ka(P,j,ne){let K=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Ie=P.length;J<Ie;J++){let Fe=P[J],{object:Ce,geometry:Be,group:Ve}=Fe,nt=Fe.material;nt.allowOverride===!0&&K!==null&&(nt=K),Ce.layers.test(ne.layers)&&Hh(Ce,j,ne,Be,nt,Ve)}}function Hh(P,j,ne,K,J,Ie){P.onBeforeRender(T,j,ne,K,J,Ie),P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(T,j,ne,K,P,Ie),J.transparent===!0&&J.side===pt&&J.forceSinglePass===!1?(J.side=Xt,J.needsUpdate=!0,T.renderBufferDirect(ne,j,K,J,P,Ie),J.side=bn,J.needsUpdate=!0,T.renderBufferDirect(ne,j,K,J,P,Ie),J.side=pt):T.renderBufferDirect(ne,j,K,J,P,Ie),P.onAfterRender(T,j,ne,K,J,Ie)}function Ja(P,j,ne){j.isScene!==!0&&(j=Ne);let K=Q.get(P),J=S.state.lights,Ie=S.state.shadowsArray,Fe=J.state.version,Ce=Ee.getParameters(P,J.state,Ie,j,ne,S.state.lightProbeGridArray),Be=Ee.getProgramCacheKey(Ce),Ve=K.programs;K.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?j.environment:null,K.fog=j.fog;let nt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;K.envMap=_e.get(P.envMap||K.environment,nt),K.envMapRotation=K.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,Ve===void 0&&(P.addEventListener("dispose",ti),Ve=new Map,K.programs=Ve);let at=Ve.get(Be);if(at!==void 0){if(K.currentProgram===at&&K.lightsStateVersion===Fe)return Gh(P,Ce),at}else Ce.uniforms=Ee.getUniforms(P),R!==null&&P.isNodeMaterial&&R.build(P,ne,Ce),P.onBeforeCompile(Ce,T),at=Ee.acquireProgram(Ce,Be),Ve.set(Be,at),K.uniforms=Ce.uniforms;let Ge=K.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ge.clippingPlanes=Ye.uniform),Gh(P,Ce),K.needsLights=s0(P),K.lightsStateVersion=Fe,K.needsLights&&(Ge.ambientLightColor.value=J.state.ambient,Ge.lightProbe.value=J.state.probe,Ge.directionalLights.value=J.state.directional,Ge.directionalLightShadows.value=J.state.directionalShadow,Ge.spotLights.value=J.state.spot,Ge.spotLightShadows.value=J.state.spotShadow,Ge.rectAreaLights.value=J.state.rectArea,Ge.ltc_1.value=J.state.rectAreaLTC1,Ge.ltc_2.value=J.state.rectAreaLTC2,Ge.pointLights.value=J.state.point,Ge.pointLightShadows.value=J.state.pointShadow,Ge.hemisphereLights.value=J.state.hemi,Ge.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ge.spotLightMatrix.value=J.state.spotLightMatrix,Ge.spotLightMap.value=J.state.spotLightMap,Ge.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=S.state.lightProbeGridArray.length>0,K.currentProgram=at,K.uniformsList=null,at}function Vh(P){if(P.uniformsList===null){let j=P.currentProgram.getUniforms();P.uniformsList=gr.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function Gh(P,j){let ne=Q.get(P);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function t0(P,j){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;y.setFromMatrixPosition(j.matrixWorld);for(let ne=0,K=P.length;ne<K;ne++){let J=P[ne];if(J.texture!==null&&J.boundingBox.containsPoint(y))return J}return null}function n0(P,j,ne,K,J){j.isScene!==!0&&(j=Ne),oe.resetTextureUnits();let Ie=j.fog,Fe=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?j.environment:null,Ce=W===null?T.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:lt.workingColorSpace,Be=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ve=_e.get(K.envMap||Fe,Be),nt=K.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,at=!!ne.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ge=!!ne.morphAttributes.position,gt=!!ne.morphAttributes.normal,Nt=!!ne.morphAttributes.color,Dt=jn;K.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Dt=T.toneMapping);let vt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,tn=vt!==void 0?vt.length:0,Le=Q.get(K),vn=S.state.lights;if(ue===!0&&(ie===!0||P!==B)){let St=P===B&&K.id===V;Ye.setState(K,P,St)}let ct=!1;K.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==vn.state.version||Le.outputColorSpace!==Ce||J.isBatchedMesh&&Le.batching===!1||!J.isBatchedMesh&&Le.batching===!0||J.isBatchedMesh&&Le.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Le.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Le.instancing===!1||!J.isInstancedMesh&&Le.instancing===!0||J.isSkinnedMesh&&Le.skinning===!1||!J.isSkinnedMesh&&Le.skinning===!0||J.isInstancedMesh&&Le.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Le.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Le.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Le.instancingMorph===!1&&J.morphTexture!==null||Le.envMap!==Ve||K.fog===!0&&Le.fog!==Ie||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ye.numPlanes||Le.numIntersection!==Ye.numIntersection)||Le.vertexAlphas!==nt||Le.vertexTangents!==at||Le.morphTargets!==Ge||Le.morphNormals!==gt||Le.morphColors!==Nt||Le.toneMapping!==Dt||Le.morphTargetsCount!==tn||!!Le.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Le.__version=K.version);let An=Le.currentProgram;ct===!0&&(An=Ja(K,j,J),R&&K.isNodeMaterial&&R.onUpdateProgram(K,An,Le));let ni=!1,Fi=!1,As=!1,yt=An.getUniforms(),Ut=Le.uniforms;if(A.useProgram(An.program)&&(ni=!0,Fi=!0,As=!0),K.id!==V&&(V=K.id,Fi=!0),Le.needsLights){let St=t0(S.state.lightProbeGridArray,J);Le.lightProbeGrid!==St&&(Le.lightProbeGrid=St,Fi=!0)}if(ni||B!==P){A.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),yt.setValue(H,"projectionMatrix",P.projectionMatrix),yt.setValue(H,"viewMatrix",P.matrixWorldInverse);let Ui=yt.map.cameraPosition;Ui!==void 0&&Ui.setValue(H,ve.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&yt.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&yt.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),B!==P&&(B=P,Fi=!0,As=!0)}if(Le.needsLights&&(vn.state.directionalShadowMap.length>0&&yt.setValue(H,"directionalShadowMap",vn.state.directionalShadowMap,oe),vn.state.spotShadowMap.length>0&&yt.setValue(H,"spotShadowMap",vn.state.spotShadowMap,oe),vn.state.pointShadowMap.length>0&&yt.setValue(H,"pointShadowMap",vn.state.pointShadowMap,oe)),J.isSkinnedMesh){yt.setOptional(H,J,"bindMatrix"),yt.setOptional(H,J,"bindMatrixInverse");let St=J.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),yt.setValue(H,"boneTexture",St.boneTexture,oe))}J.isBatchedMesh&&(yt.setOptional(H,J,"batchingTexture"),yt.setValue(H,"batchingTexture",J._matricesTexture,oe),yt.setOptional(H,J,"batchingIdTexture"),yt.setValue(H,"batchingIdTexture",J._indirectTexture,oe),yt.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&yt.setValue(H,"batchingColorTexture",J._colorsTexture,oe));let Ni=ne.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Y.update(J,ne,An),(Fi||Le.receiveShadow!==J.receiveShadow)&&(Le.receiveShadow=J.receiveShadow,yt.setValue(H,"receiveShadow",J.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&j.environment!==null&&(Ut.envMapIntensity.value=j.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=pb()),Fi){if(yt.setValue(H,"toneMappingExposure",T.toneMappingExposure),Le.needsLights&&i0(Ut,As),Ie&&K.fog===!0&&He.refreshFogUniforms(Ut,Ie),He.refreshMaterialUniforms(Ut,K,L,z,S.state.transmissionRenderTarget[P.id]),Le.needsLights&&Le.lightProbeGrid){let St=Le.lightProbeGrid;Ut.probesSH.value=St.texture,Ut.probesMin.value.copy(St.boundingBox.min),Ut.probesMax.value.copy(St.boundingBox.max),Ut.probesResolution.value.copy(St.resolution)}gr.upload(H,Vh(Le),Ut,oe)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(gr.upload(H,Vh(Le),Ut,oe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&yt.setValue(H,"center",J.center),yt.setValue(H,"modelViewMatrix",J.modelViewMatrix),yt.setValue(H,"normalMatrix",J.normalMatrix),yt.setValue(H,"modelMatrix",J.matrixWorld),K.uniformsGroups!==void 0){let St=K.uniformsGroups;for(let Ui=0,Rs=St.length;Ui<Rs;Ui++){let Wh=St[Ui];me.update(Wh,An),me.bind(Wh,An)}}return An}function i0(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function s0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(P,j,ne){let K=Q.get(P);K.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Q.get(P.texture).__webglTexture=j,Q.get(P.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ne,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,j){let ne=Q.get(P);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,ne=0){W=P,O=j,U=ne;let K=null,J=!1,Ie=!1;if(P){let Ce=Q.get(P);if(Ce.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(H.FRAMEBUFFER,Ce.__webglFramebuffer),G.copy(P.viewport),$.copy(P.scissor),xe=P.scissorTest,A.viewport(G),A.scissor($),A.setScissorTest(xe),V=-1;return}else if(Ce.__webglFramebuffer===void 0)oe.setupRenderTarget(P);else if(Ce.__hasExternalTextures)oe.rebindTextures(P,Q.get(P.texture).__webglTexture,Q.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let nt=P.depthTexture;if(Ce.__boundDepthTexture!==nt){if(nt!==null&&Q.has(nt)&&(P.width!==nt.image.width||P.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(P)}}let Be=P.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ie=!0);let Ve=Q.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ve[j])?K=Ve[j][ne]:K=Ve[j],J=!0):P.samples>0&&oe.useMultisampledRTT(P)===!1?K=Q.get(P).__webglMultisampledFramebuffer:Array.isArray(Ve)?K=Ve[ne]:K=Ve,G.copy(P.viewport),$.copy(P.scissor),xe=P.scissorTest}else G.copy(re).multiplyScalar(L).floor(),$.copy(ye).multiplyScalar(L).floor(),xe=fe;if(ne!==0&&(K=D),A.bindFramebuffer(H.FRAMEBUFFER,K)&&A.drawBuffers(P,K),A.viewport(G),A.scissor($),A.setScissorTest(xe),J){let Ce=Q.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce.__webglTexture,ne)}else if(Ie){let Ce=j;for(let Be=0;Be<P.textures.length;Be++){let Ve=Q.get(P.textures[Be]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Be,Ve.__webglTexture,ne,Ce)}}else if(P!==null&&ne!==0){let Ce=Q.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ce.__webglTexture,ne)}V=-1},this.readRenderTargetPixels=function(P,j,ne,K,J,Ie,Fe,Ce=0){if(!(P&&P.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){A.bindFramebuffer(H.FRAMEBUFFER,Be);try{let Ve=P.textures[Ce],nt=Ve.format,at=Ve.type;if(P.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ce),!F.textureFormatReadable(nt)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(at)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-K&&ne>=0&&ne<=P.height-J&&H.readPixels(j,ne,K,J,we.convert(nt),we.convert(at),Ie)}finally{let Ve=W!==null?Q.get(W).__webglFramebuffer:null;A.bindFramebuffer(H.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(P,j,ne,K,J,Ie,Fe,Ce=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be)if(j>=0&&j<=P.width-K&&ne>=0&&ne<=P.height-J){A.bindFramebuffer(H.FRAMEBUFFER,Be);let Ve=P.textures[Ce],nt=Ve.format,at=Ve.type;if(P.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ce),!F.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ge=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ge),H.bufferData(H.PIXEL_PACK_BUFFER,Ie.byteLength,H.STREAM_READ),H.readPixels(j,ne,K,J,we.convert(nt),we.convert(at),0);let gt=W!==null?Q.get(W).__webglFramebuffer:null;A.bindFramebuffer(H.FRAMEBUFFER,gt);let Nt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await mf(H,Nt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ge),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ie),H.deleteBuffer(Ge),H.deleteSync(Nt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,j=null,ne=0){let K=Math.pow(2,-ne),J=Math.floor(P.image.width*K),Ie=Math.floor(P.image.height*K),Fe=j!==null?j.x:0,Ce=j!==null?j.y:0;oe.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,ne,0,0,Fe,Ce,J,Ie),A.unbindTexture()},this.copyTextureToTexture=function(P,j,ne=null,K=null,J=0,Ie=0){let Fe,Ce,Be,Ve,nt,at,Ge,gt,Nt,Dt=P.isCompressedTexture?P.mipmaps[Ie]:P.image;if(ne!==null)Fe=ne.max.x-ne.min.x,Ce=ne.max.y-ne.min.y,Be=ne.isBox3?ne.max.z-ne.min.z:1,Ve=ne.min.x,nt=ne.min.y,at=ne.isBox3?ne.min.z:0;else{let Ut=Math.pow(2,-J);Fe=Math.floor(Dt.width*Ut),Ce=Math.floor(Dt.height*Ut),P.isDataArrayTexture?Be=Dt.depth:P.isData3DTexture?Be=Math.floor(Dt.depth*Ut):Be=1,Ve=0,nt=0,at=0}K!==null?(Ge=K.x,gt=K.y,Nt=K.z):(Ge=0,gt=0,Nt=0);let vt=we.convert(j.format),tn=we.convert(j.type),Le;j.isData3DTexture?(oe.setTexture3D(j,0),Le=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(oe.setTexture2DArray(j,0),Le=H.TEXTURE_2D_ARRAY):(oe.setTexture2D(j,0),Le=H.TEXTURE_2D),A.activeTexture(H.TEXTURE0),A.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),A.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),A.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);let vn=A.getParameter(H.UNPACK_ROW_LENGTH),ct=A.getParameter(H.UNPACK_IMAGE_HEIGHT),An=A.getParameter(H.UNPACK_SKIP_PIXELS),ni=A.getParameter(H.UNPACK_SKIP_ROWS),Fi=A.getParameter(H.UNPACK_SKIP_IMAGES);A.pixelStorei(H.UNPACK_ROW_LENGTH,Dt.width),A.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Dt.height),A.pixelStorei(H.UNPACK_SKIP_PIXELS,Ve),A.pixelStorei(H.UNPACK_SKIP_ROWS,nt),A.pixelStorei(H.UNPACK_SKIP_IMAGES,at);let As=P.isDataArrayTexture||P.isData3DTexture,yt=j.isDataArrayTexture||j.isData3DTexture;if(P.isDepthTexture){let Ut=Q.get(P),Ni=Q.get(j),St=Q.get(Ut.__renderTarget),Ui=Q.get(Ni.__renderTarget);A.bindFramebuffer(H.READ_FRAMEBUFFER,St.__webglFramebuffer),A.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Rs=0;Rs<Be;Rs++)As&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Q.get(P).__webglTexture,J,at+Rs),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Q.get(j).__webglTexture,Ie,Nt+Rs)),H.blitFramebuffer(Ve,nt,Fe,Ce,Ge,gt,Fe,Ce,H.DEPTH_BUFFER_BIT,H.NEAREST);A.bindFramebuffer(H.READ_FRAMEBUFFER,null),A.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||P.isRenderTargetTexture||Q.has(P)){let Ut=Q.get(P),Ni=Q.get(j);A.bindFramebuffer(H.READ_FRAMEBUFFER,k),A.bindFramebuffer(H.DRAW_FRAMEBUFFER,N);for(let St=0;St<Be;St++)As?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ut.__webglTexture,J,at+St):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ut.__webglTexture,J),yt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ni.__webglTexture,Ie,Nt+St):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ni.__webglTexture,Ie),J!==0?H.blitFramebuffer(Ve,nt,Fe,Ce,Ge,gt,Fe,Ce,H.COLOR_BUFFER_BIT,H.NEAREST):yt?H.copyTexSubImage3D(Le,Ie,Ge,gt,Nt+St,Ve,nt,Fe,Ce):H.copyTexSubImage2D(Le,Ie,Ge,gt,Ve,nt,Fe,Ce);A.bindFramebuffer(H.READ_FRAMEBUFFER,null),A.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else yt?P.isDataTexture||P.isData3DTexture?H.texSubImage3D(Le,Ie,Ge,gt,Nt,Fe,Ce,Be,vt,tn,Dt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Le,Ie,Ge,gt,Nt,Fe,Ce,Be,vt,Dt.data):H.texSubImage3D(Le,Ie,Ge,gt,Nt,Fe,Ce,Be,vt,tn,Dt):P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ie,Ge,gt,Fe,Ce,vt,tn,Dt.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ie,Ge,gt,Dt.width,Dt.height,vt,Dt.data):H.texSubImage2D(H.TEXTURE_2D,Ie,Ge,gt,Fe,Ce,vt,tn,Dt);A.pixelStorei(H.UNPACK_ROW_LENGTH,vn),A.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ct),A.pixelStorei(H.UNPACK_SKIP_PIXELS,An),A.pixelStorei(H.UNPACK_SKIP_ROWS,ni),A.pixelStorei(H.UNPACK_SKIP_IMAGES,Fi),Ie===0&&j.generateMipmaps&&H.generateMipmap(Le),A.unbindTexture()},this.initRenderTarget=function(P){Q.get(P).__webglFramebuffer===void 0&&oe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?oe.setTextureCube(P,0):P.isData3DTexture?oe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?oe.setTexture2DArray(P,0):oe.setTexture2D(P,0),A.unbindTexture()},this.resetState=function(){O=0,U=0,W=null,A.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var fc=Object.freeze({min:5,max:5e3});function oh(i){return Math.min(fc.max,Math.max(fc.min,i))}var Qf=Object.freeze({mode:"universe",selected:"earth",center:"middle",autoplay:!1,interval:15,zoom:70,spaceColor:"#03070d",starsVisible:!0,orbitsVisible:!0,satellitesVisible:!0,focusYaw:0,focusPitch:0,trajectoryCenter:"middle",trajectoryDragYaw:0,trajectoryDragPitch:0,reference:"galactic",trail:"long"});function Va(i={}){(!i||typeof i!="object"||Array.isArray(i))&&(i={});let e=(t,n,s)=>typeof i[t]!="boolean"&&i[t]!==null&&i[t]!==""&&Number.isFinite(Number(i[t]))?Math.min(s,Math.max(n,Number(i[t]))):Qf[t];return{mode:["universe","focus","trajectory"].includes(i.mode)?i.mode:i.single===!0?"focus":"universe",selected:typeof i.selected=="string"?i.selected:"earth",center:["left","middle","right"].includes(i.center)?i.center:"middle",autoplay:typeof i.autoplay=="boolean"?i.autoplay:!1,interval:e("interval",5,120),zoom:e("zoom",fc.min,fc.max),spaceColor:typeof i.spaceColor=="string"&&/^#[0-9a-f]{6}$/i.test(i.spaceColor)?i.spaceColor.toLowerCase():Qf.spaceColor,satellitesVisible:typeof i.satellitesVisible=="boolean"?i.satellitesVisible:!0,starsVisible:typeof i.starsVisible=="boolean"?i.starsVisible:!0,orbitsVisible:typeof i.orbitsVisible=="boolean"?i.orbitsVisible:!0,focusYaw:e("focusYaw",-180,180),focusPitch:e("focusPitch",-85,85),trajectoryCenter:["left","middle","right"].includes(i.trajectoryCenter)?i.trajectoryCenter:"middle",trajectoryDragYaw:e("trajectoryDragYaw",-180,180),trajectoryDragPitch:e("trajectoryDragPitch",-85,85),reference:i.reference==="solar"?"solar":"galactic",trail:i.trail==="short"?"short":"long"}}function ep(i,e){return{width:i,height:e}}function tp(i,e,t){if(!i.length)return null;let n=Math.max(0,i.indexOf(e));return i[((n+t)%i.length+i.length)%i.length]}function np(i,e){let t=[["galactic","long"],["galactic","short"],["solar","long"],["solar","short"]],n=t.findIndex(([a,o])=>a===i&&o===e),[s,r]=t[(n+1)%t.length];return{reference:s,trail:r}}var mi=[{id:"sun",cn:"\u592A\u9633",en:"SUN",index:"00",type:"\u592A\u9633\u7CFB / \u6052\u661F",r:8,orbit:0,period:0,texture:"sun",color:16760404,diameter:"1,392,700",stat2:"\u8868\u9762\u6E29\u5EA6",value2:"5,500",unit2:"\xB0C",desc:"\u6BCF\u4E00\u675F\u62B5\u8FBE\u5730\u7403\u7684\u5149\uFF0C\u90FD\u66FE\u5728\u8FD9\u91CC\u51FA\u53D1\u3002\u592A\u9633\u4EE5\u5F15\u529B\u7EF4\u7CFB\u7740\u516B\u5927\u884C\u661F\uFF0C\u4E5F\u70B9\u4EAE\u4E86\u6211\u4EEC\u7684\u4E16\u754C\u3002"},{id:"mercury",cn:"\u6C34\u661F",en:"MERCURY",index:"01",type:"\u592A\u9633\u7CFB / \u7C7B\u5730\u884C\u661F",r:.48,orbit:22,period:88,phase:2.8,texture:"mercury",color:12235945,diameter:"4,879",value2:"88",unit2:"\u5929",desc:"\u6700\u9760\u8FD1\u592A\u9633\u7684\u884C\u661F\u3002\u904D\u5E03\u649E\u51FB\u5751\u7684\u5CA9\u77F3\u8868\u9762\uFF0C\u8BB0\u5F55\u7740\u592A\u9633\u7CFB\u65E9\u671F\u6F2B\u957F\u800C\u6FC0\u70C8\u7684\u5386\u53F2\u3002"},{id:"venus",cn:"\u91D1\u661F",en:"VENUS",index:"02",type:"\u592A\u9633\u7CFB / \u7C7B\u5730\u884C\u661F",r:.95,orbit:32,period:225,phase:4.5,texture:"venus-atmosphere",color:15254933,diameter:"12,104",value2:"224.7",unit2:"\u5929",desc:"\u539A\u91CD\u7684\u4E91\u5C42\u5C06\u8FD9\u9897\u91D1\u8272\u661F\u7403\u5305\u88F9\u3002\u6668\u660F\u65F6\u5206\uFF0C\u5B83\u662F\u5730\u7403\u5929\u7A7A\u4E2D\u683C\u5916\u660E\u4EAE\u7684\u5B58\u5728\u3002"},{id:"earth",cn:"\u5730\u7403",en:"EARTH",index:"03",type:"\u592A\u9633\u7CFB / \u7C7B\u5730\u884C\u661F",r:1,orbit:45,period:365.25,phase:0,texture:"earth-day",color:7583972,diameter:"12,742",value2:"365.25",unit2:"\u5929",desc:"\u8D8A\u8FC7\u851A\u84DD\u7684\u5927\u6C14\u5C42\uFF0C\u770B\u89C1\u4E91\u6D77\u4E4B\u4E0B\u7684\u4E07\u5BB6\u706F\u706B\u3002\u8FD9\u91CC\uFF0C\u662F\u6211\u4EEC\u5728\u5B87\u5B99\u4E2D\u7684\u5BB6\u3002"},{id:"moon",cn:"\u6708\u7403",en:"MOON",index:"01",type:"\u5730\u7403\u7CFB\u7EDF / \u5929\u7136\u536B\u661F",r:.273,orbit:3.9,period:27.3,phase:3.35,texture:"moon",color:13027786,diameter:"3,474",value2:"27.3",unit2:"\u5929",desc:"\u8D8A\u8FC7\u5BC2\u9759\u7684\u6708\u6D77\u4E0E\u73AF\u5F62\u5C71\uFF0C\u56DE\u671B\u8FDC\u5904\u7684\u84DD\u8272\u5730\u7403\u3002\u6708\u7403\uFF0C\u662F\u8DDD\u79BB\u6211\u4EEC\u6700\u8FD1\u7684\u53E6\u4E00\u4E2A\u4E16\u754C\u3002"},{id:"mars",cn:"\u706B\u661F",en:"MARS",index:"04",type:"\u592A\u9633\u7CFB / \u7C7B\u5730\u884C\u661F",r:.66,orbit:65,period:687,phase:1.5,texture:"mars",color:15114879,diameter:"6,779",value2:"687",unit2:"\u5929",desc:"\u94C1\u9508\u8272\u7684\u8352\u539F\u3001\u6781\u5730\u7684\u51B0\u76D6\uFF0C\u548C\u66FE\u7ECF\u6D41\u6DCC\u8FC7\u6C34\u7684\u75D5\u8FF9\u3002\u7EA2\u8272\u661F\u7403\u6B63\u7B49\u5F85\u4E0B\u4E00\u4F4D\u8FDC\u884C\u8005\u3002"},{id:"jupiter",cn:"\u6728\u661F",en:"JUPITER",index:"05",type:"\u592A\u9633\u7CFB / \u6C14\u6001\u5DE8\u884C\u661F",r:4.1,orbit:108,period:4333,phase:3.8,texture:"jupiter",color:14665902,diameter:"139,820",value2:"11.86",unit2:"\u5E74",desc:"\u5DE8\u5927\u7684\u4E91\u5E26\u5728\u8FD9\u91CC\u6D8C\u52A8\uFF0C\u98CE\u66B4\u7EF5\u5EF6\u6570\u4E2A\u4E16\u7EAA\u3002\u653E\u5927\u89C2\u5BDF\u5927\u7EA2\u6591\uFF0C\u611F\u53D7\u592A\u9633\u7CFB\u6700\u5927\u7684\u884C\u661F\u3002"},{id:"saturn",cn:"\u571F\u661F",en:"SATURN",index:"06",type:"\u592A\u9633\u7CFB / \u6C14\u6001\u5DE8\u884C\u661F",r:3.45,orbit:155,period:10759,phase:.7,texture:"saturn",color:15127459,diameter:"116,460",value2:"29.46",unit2:"\u5E74",desc:"\u65E0\u6570\u51B0\u7C92\u4E0E\u5CA9\u5C51\uFF0C\u6C47\u6210\u4E00\u5708\u8F7B\u76C8\u800C\u58EE\u4E3D\u7684\u5149\u73AF\u3002\u8F6C\u52A8\u89C6\u89D2\uFF0C\u770B\u5149\u7EBF\u4ECE\u571F\u661F\u73AF\u7684\u7F1D\u9699\u4E2D\u7A7F\u8FC7\u3002"},{id:"uranus",cn:"\u5929\u738B\u661F",en:"URANUS",index:"07",type:"\u592A\u9633\u7CFB / \u51B0\u5DE8\u884C\u661F",r:2.15,orbit:205,period:30687,phase:5.35,texture:"uranus",color:11001567,diameter:"50,724",value2:"84.0",unit2:"\u5E74",desc:"\u4E00\u9897\u51E0\u4E4E\u4FA7\u8EBA\u7740\u81EA\u8F6C\u7684\u51B0\u84DD\u8272\u884C\u661F\u3002\u9065\u8FDC\u800C\u9759\u8C27\u7684\u5927\u6C14\u4E4B\u4E0B\uFF0C\u85CF\u7740\u5BD2\u51B7\u7684\u5DE8\u5927\u4E16\u754C\u3002"},{id:"neptune",cn:"\u6D77\u738B\u661F",en:"NEPTUNE",index:"08",type:"\u592A\u9633\u7CFB / \u51B0\u5DE8\u884C\u661F",r:2.08,orbit:252,period:60190,phase:2.5,texture:"neptune",color:7180516,diameter:"49,244",value2:"164.8",unit2:"\u5E74",desc:"\u592A\u9633\u7CFB\u6700\u5916\u4FA7\u7684\u884C\u661F\u3002\u5728\u6DF1\u84DD\u8272\u7684\u5927\u6C14\u4E2D\uFF0C\u731B\u70C8\u7684\u98CE\u66B4\u4F9D\u7136\u4E0D\u77E5\u75B2\u5026\u5730\u7A7F\u884C\u3002"}],lh={solar:{id:"solar",cn:"\u592A\u9633\u7CFB",en:"SOLAR SYSTEM",index:"08",type:"\u94F6\u6CB3\u7CFB / \u6211\u4EEC\u7684\u884C\u661F\u7CFB\u7EDF",r:1,desc:"\u516B\u9897\u884C\u661F\uFF0C\u6CBF\u7740\u5404\u81EA\u7684\u8F68\u9053\u7ED5\u592A\u9633\u8FD0\u884C\u3002\u7EE7\u7EED\u7F29\u5C0F\uFF0C\u8BA9\u8FD9\u7247\u719F\u6089\u7684\u661F\u7A7A\u6210\u4E3A\u94F6\u6CB3\u4E2D\u7684\u4E00\u4E2A\u5149\u70B9\u3002",diameter:"8",unit1:"\u9897",stat1:"\u884C\u661F",stat2:"\u4E2D\u5FC3\u6052\u661F",value2:"\u592A\u9633",unit2:""},galaxy:{id:"galaxy",cn:"\u94F6\u6CB3\u7CFB",en:"MILKY WAY",index:"\u221E",type:"\u672C\u661F\u7CFB\u7FA4 / \u68D2\u65CB\u661F\u7CFB",r:1,desc:"\u65E0\u6570\u6052\u661F\u805A\u6210\u6D41\u52A8\u7684\u65CB\u81C2\uFF0C\u800C\u592A\u9633\u53EA\u662F\u5176\u4E2D\u4E00\u9897\u3002\u8DE8\u8D8A\u5C3A\u5EA6\uFF0C\u4ECE\u94F6\u6CB3\u91CD\u65B0\u627E\u5230\u6211\u4EEC\u7684\u5BB6\u3002",diameter:"\u7EA6 10 \u4E07",unit1:"\u5149\u5E74",stat1:"\u6052\u661F\u76D8\u76F4\u5F84",stat2:"\u6211\u4EEC\u7684\u5750\u6807",value2:"\u730E\u6237\u81C2",unit2:""},iss:{id:"iss",cn:"\u7A7A\u95F4\u7AD9",en:"ISS",index:"LEO",type:"\u5730\u7403\u7CFB\u7EDF / \u56FD\u9645\u7A7A\u95F4\u7AD9",r:.13,desc:"\u592A\u9633\u80FD\u5E06\u677F\u5728\u5FAE\u5149\u4E2D\u5C55\u5F00\uFF0C\u8237\u7A97\u5916\u662F\u7F13\u7F13\u8F6C\u52A8\u7684\u5730\u7403\u3002\u5728\u8FD9\u5EA7\u8F68\u9053\u5B9E\u9A8C\u5BA4\uFF0C\u65E5\u51FA\u6BCF\u5929\u5230\u6765\u591A\u6B21\u3002",diameter:"\u7EA6 400",unit1:"km",stat1:"\u5178\u578B\u8F68\u9053\u9AD8\u5EA6",stat2:"\u7ED5\u5730\u7403\u4E00\u5468",value2:"\u7EA6 90",unit2:"\u5206\u949F"}};var ch=Math.PI*2,Ts=Object.freeze([3.5,.7,1.35]),Ci=Object.freeze({short:48,long:96}),Pi=769,ip={sun:{orbitRadius:0,period:0,r:6.8,color:16764792},mercury:{orbitRadius:15,period:10,r:1.25,color:11451854},venus:{orbitRadius:24,period:16,r:1.75,color:15189111},earth:{orbitRadius:33,period:24,r:1.85,color:5949690},mars:{orbitRadius:42,period:32,r:1.45,color:15826276},jupiter:{orbitRadius:54,period:42,r:3.8,color:14265479},saturn:{orbitRadius:65,period:56,r:3.25,color:15848083},uranus:{orbitRadius:75,period:72,r:2.5,color:7724495},neptune:{orbitRadius:85,period:90,r:2.4,color:8429055}},uh=Object.freeze(mi.filter(i=>Object.hasOwn(ip,i.id)).map(i=>Object.freeze({id:i.id,cn:i.cn,en:i.en,texture:i.texture,phase:i.phase??0,inclination:i.id==="mercury"?.075:.018,...ip[i.id]})));function hh(i){return i==="galactic"||i==="solar"}function mb(i,e,t=0,n="galactic",s=new I){if(!i||![i.orbitRadius,i.period,i.phase,i.inclination].every(Number.isFinite)||i.orbitRadius<0||i.period<0||!Number.isFinite(e)||!Number.isFinite(t)||t<0||!hh(n))throw new RangeError("A trajectory sample requires a body, finite time, nonnegative age and a valid reference frame.");let r=i.period>0?i.phase+(e-t)%i.period/i.period*ch:0,a=Math.sin(r),o=i.orbitRadius;return s.set(o*a*Math.sin(i.inclination),o*Math.cos(r),o*a*Math.cos(i.inclination)),n==="galactic"&&(s.x-=t*Ts[0],s.y-=t*Ts[1],s.z-=t*Ts[2]),s}function gb(i="galactic",e="short"){if(!hh(i)||!Object.hasOwn(Ci,e))throw new RangeError("Unknown trajectory reference frame or trail length.");let t=i==="galactic"?Ci[e]:0;return sp(t)}function sp(i){let e=[20,95,95],t=e.map((s,r)=>-s-Ts[r]*i),n=[...e];return{min:t,max:n,size:t.map((s,r)=>n[r]-s),center:t.map((s,r)=>(s+n[r])/2)}}var xb=`
  attribute float aAge, aSide;
  uniform float uAngle, uAngularSpeed, uRadius, uInclination, uHistory, uGalactic;
  uniform float uPixelRatio, uHalfWidth;
  uniform vec2 uResolution;
  uniform vec3 uForward;
  varying float vAge, vSide;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  vec3 historyPosition(float fraction) {
    float age = fraction * uHistory;
    float angle = uAngle - age * uAngularSpeed;
    return vec3(uRadius * sin(angle) * sin(uInclination),
      uRadius * cos(angle), uRadius * sin(angle) * cos(uInclination))
      - uForward * age * uGalactic;
  }
  void main() {
    vAge = aAge;
    vSide = aSide;
    vec4 projected = projectionMatrix * modelViewMatrix * vec4(historyPosition(aAge), 1.0);
    vec4 next = projectionMatrix * modelViewMatrix
      * vec4(historyPosition(aAge + 1.0 / ${Pi-1}.0), 1.0);
    vec2 direction = (next.xy / max(abs(next.w), 0.0001)
      - projected.xy / max(abs(projected.w), 0.0001)) * uResolution;
    float magnitude = length(direction);
    direction = magnitude > 0.00001 ? direction / magnitude : vec2(1.0, 0.0);
    vec2 perpendicular = vec2(-direction.y, direction.x);
    projected.xy += perpendicular * aSide * uHalfWidth * uPixelRatio
      * 2.0 / uResolution * projected.w;
    gl_Position = projected;
    #include <logdepthbuf_vertex>
  }
`,vb=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vAge, vSide;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  void main() {
    float recent = clamp(1.0 - vAge, 0.0, 1.0);
    float feather = exp(-vSide * vSide * 5.2);
    float fade = pow(recent, 0.75);
    vec3 color = uColor * (1.45 + pow(recent, 5.0) * 0.35);
    gl_FragColor = vec4(color, feather * fade * uOpacity);
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,yb=`
  varying vec2 vUv;
  varying vec3 vNormal;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vUv = uv;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    #include <logdepthbuf_vertex>
  }
`,_b=`
  uniform sampler2D uMap;
  uniform vec3 uColor, uLightDirection;
  uniform float uHasMap, uEmissive, uTwoSided;
  varying vec2 vUv;
  varying vec3 vNormal;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  void main() {
    vec4 texel = texture2D(uMap, vUv);
    vec3 surface = mix(uColor, texel.rgb, uHasMap);
    float light = dot(normalize(vNormal), normalize(uLightDirection));
    light = mix(max(light, 0.0), abs(light), uTwoSided);
    vec3 lit = surface * (0.17 + light * 1.08);
    vec3 color = mix(lit, surface * vec3(2.3, 1.9, 1.5), uEmissive);
    gl_FragColor = vec4(max(color, vec3(0.0)), mix(1.0, texel.a, uHasMap));
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function bb(){let e=new Uint8Array(16384);for(let n=0;n<64;n++)for(let s=0;s<64;s++){let r=Math.hypot((s+.5)/64*2-1,(n+.5)/64*2-1),a=Math.exp(-r*r*7)*(1-Se.smoothstep(r,.75,1)),o=(n*64+s)*4;e[o]=e[o+1]=e[o+2]=255,e[o+3]=Math.round(a*255)}let t=new pn(e,64,64);return t.minFilter=t.magFilter=Tt,t.needsUpdate=!0,t}function Mb(){let i=new Float32Array(Pi*2*3),e=new Float32Array(Pi*2),t=new Float32Array(Pi*2),n=new Uint16Array((Pi-1)*6);for(let a=0;a<Pi;a++){let o=a/(Pi-1),l=a*2;e[l]=e[l+1]=o,t[l]=-1,t[l+1]=1,a<Pi-1&&n.set([l,l+2,l+1,l+1,l+2,l+3],a*6)}let s=new Ke;s.setAttribute("position",new Ht(i,3)),s.setAttribute("aAge",new Ht(e,1)),s.setAttribute("aSide",new Ht(t,1)),s.setIndex(new Ht(n,1));let r=gb("galactic","long");return s.boundingBox=new Pn(new I(...r.min),new I(...r.max)),s.boundingSphere=s.boundingBox.getBoundingSphere(new Qt),s}function pc(i,e={},t=1){let n=new ze;n.name="motion-trajectories",n.visible=!1,i.add(n);let s=new Pt(1,36,24),r=Mb(),a=bb(),o=new pn(new Uint8Array([255,255,255,255]),1,1);o.needsUpdate=!0;let l=[],c=[],u=[],f=new _t,h=e??{},d=globalThis.matchMedia?.("(prefers-reduced-motion: reduce)"),g=0,x=!1,m=!1,p="galactic",_="short",M=1,y=!1,b=1,S=Ci.short,w=null;function v(B,G,{rings:$=!1}={}){let xe=new Je({uniforms:{uMap:{value:G||o},uHasMap:{value:G?1:0},uColor:{value:new ge(B.color)},uLightDirection:{value:new I(1,0,0)},uEmissive:{value:B.id==="sun"?1:0},uTwoSided:{value:$?1:0}},vertexShader:yb,fragmentShader:_b,side:$?pt:bn,transparent:$,depthWrite:!$,forceSinglePass:!0});return l.push(xe),xe}for(let B of uh){let G=v(B,h[B.texture]),$=new We(s,G);$.name=`trajectory-body-${B.id}`,$.userData.trajectoryBodyId=B.id,$.scale.setScalar(B.r),$.rotation.z=B.id==="saturn"?.466:B.id==="uranus"?1.7:.08,n.add($);let xe=new oi({map:a,color:B.color,transparent:!0,opacity:B.id==="sun"?.5:.1,blending:wt,depthWrite:!1});l.push(xe);let ee=new Ti(xe);ee.name=`trajectory-halo-${B.id}`,ee.scale.setScalar(B.r*(B.id==="sun"?4.8:3.3)),n.add(ee);let te=new Je({uniforms:{uAngle:{value:B.phase},uAngularSpeed:{value:B.period?ch/B.period:0},uRadius:{value:B.orbitRadius},uInclination:{value:B.inclination},uHistory:{value:Ci.short},uGalactic:{value:1},uForward:{value:new I(...Ts)},uColor:{value:new ge(B.color)},uOpacity:{value:B.id==="sun"?.8:.9},uHalfWidth:{value:B.id==="sun"?2.2:1.7},uPixelRatio:{value:t},uResolution:{value:new ce(1,1)}},vertexShader:xb,fragmentShader:vb,transparent:!0,depthWrite:!1,blending:wt,side:pt,forceSinglePass:!0});l.push(te);let q=new We(r,te);q.name=`trajectory-trail-${B.id}`,q.userData.trajectoryBodyId=B.id,n.add(q);let z={definition:B,mesh:$,halo:ee,trail:q,material:G,trailMaterial:te};if(B.id==="saturn"){let L=new qn(1.25,2.1,96,1),X=L.attributes.position,ae=L.attributes.uv;for(let fe=0;fe<X.count;fe++){let se=Math.hypot(X.getX(fe),X.getY(fe));ae.setXY(fe,(se-1.25)/.85,.5)}L.rotateX(-Math.PI/2),c.push(L);let re=v(B,h["saturn-rings"],{rings:!0}),ye=new We(L,re);ye.name="trajectory-saturn-rings",$.add(ye),z.ringMaterial=re}u.push(z)}function E(){for(let{definition:B,mesh:G,halo:$,material:xe,ringMaterial:ee,trailMaterial:te}of u){mb(B,g,0,p,G.position),G.rotation.y=g*(B.id==="sun"?.06:.15)+B.phase,$.position.copy(G.position);let q=xe.uniforms.uLightDirection.value;B.id==="sun"?q.set(1,0,0):(f.copy(G.quaternion).invert(),q.copy(G.position).negate().normalize().applyQuaternion(f)),ee?.uniforms.uLightDirection.value.copy(q),te.uniforms.uAngle.value=B.phase+(B.period?g%B.period/B.period*ch:0)}}function T(){for(let{definition:B,trail:G,trailMaterial:$}of u){G.visible=b>0||B.orbitRadius>0,$.uniforms.uHistory.value=S,$.uniforms.uGalactic.value=b;let xe=B.period?Math.max(1,S/B.period):1,ee=Se.lerp(1/xe,1,b);$.uniforms.uOpacity.value=B.id==="sun"?.8*b:.9*ee}}function C(){if(d?.matches){b=+(p==="galactic"),S=Ci[_],w=null,T();return}if(b===+(p==="galactic")&&S===Ci[_]){w=null;return}w={galacticMix:b,renderedHistory:S,elapsed:0}}function R(B){if(!w)return;w.elapsed+=Number.isFinite(B)?Math.max(0,B):0;let G=d?.matches?1:Math.min(1,w.elapsed/.4),$=Se.smoothstep(G,0,1);b=Se.lerp(w.galacticMix,+(p==="galactic"),$),S=Se.lerp(w.renderedHistory,Ci[_],$),G===1&&(w=null),T()}function D(B,{paused:G=!1,speed:$=1,active:xe=!1}={}){if(y||(x=!!xe,m=!!G,n.visible=x,!x)||(R(B),m||d?.matches))return;let ee=Number.isFinite(B)&&Number.isFinite($)&&B>0&&$>0?B*$:0;!Number.isFinite(ee)||ee<=0||(g+=ee,E())}function k(B){return y||!hh(B)?!1:(p===B||(p=B,C()),!0)}function N(B){return y||!Object.hasOwn(Ci,B)?!1:(_===B||(_=B,C()),!0)}function O(B){if(y)return;Number.isFinite(B)&&B>0&&(M=B);let G=Math.max(1,globalThis.innerWidth||1440),$=Math.max(1,globalThis.innerHeight||900);for(let{trailMaterial:xe}of u)xe.uniforms.uPixelRatio.value=M,xe.uniforms.uResolution.value.set(G*M,$*M)}function U(B=new I){return B.fromArray(Ts).multiplyScalar(-S*b*.5)}function W(){let B=sp(S*b);return{time:g,active:x,paused:m,referenceFrame:p,trailLength:_,historySeconds:Ci[_],sampleCount:Pi,renderedHistorySeconds:S,galacticMix:b,transitioning:!!w,pixelRatio:M,reducedMotion:!!d?.matches,forward:[...Ts],center:[...B.center],bounds:B,bodies:u.map(({definition:G,mesh:$})=>({id:G.id,cn:G.cn,color:G.color,orbitRadius:G.orbitRadius,period:G.period,r:G.r,position:$.position.toArray()}))}}function V(){y||(y=!0,x=!1,n.visible=!1,n.removeFromParent(),s.dispose(),r.dispose(),a.dispose(),o.dispose(),c.forEach(B=>B.dispose()),l.forEach(B=>B.dispose()))}return E(),O(t),{group:n,update:D,setReferenceFrame:k,setTrailLength:N,getState:W,getCenter:U,resize:O,dispose:V}}function rp({renderer:i,composer:e,scene:t,world:n,textures:s,mainCamera:r,resizeMain:a}){let o=new kt(40,1,.001,1e7),l=i.domElement,c=new _s,u=new kt(40,1,.001,1e7),f,h=0,d=null,g=null;function x(M){f=ep(innerWidth,innerHeight),a(),l.style.cssText=`width:${f.width}px;height:${f.height}px;left:0;top:0;touch-action:none;`}function m(M,y,b,S,w,v,E=0,T=null){let C=Math.max(1,w/100);w=Math.min(w,100);let R=f.width/f.height,D=Math.min(Math.min(b,1-b)*2*R,Math.min(S,1-S)*2),k=y/Math.sin(Se.degToRad(20))/(D*.88*w/100);if(o.fov=40,o.zoom=C,o.aspect=R,o.up.set(0,1,0),o.position.copy(M).addScaledVector(v.normalize(),k),o.lookAt(M),o.rotateZ(Se.degToRad(E)),T){let N=o.quaternion.clone().invert(),O=Math.tan(Se.degToRad(20)),U=2*Math.min(b,1-b)*R*O*.88*w/100,W=2*Math.min(S,1-S)*O*.88*w/100;k=0;for(let V of[0,1])for(let B of[0,1])for(let G of[0,1]){let $=new I(T[V?"max":"min"][0],T[B?"max":"min"][1],T[G?"max":"min"][2]).sub(M).applyQuaternion(N);k=Math.max(k,$.z+Math.abs($.x)/U,$.z+Math.abs($.y)/W)}o.position.copy(M).addScaledVector(v,k)}o.setViewOffset(f.width,f.height,(.5-b)*f.width,(.5-S)*f.height,f.width,f.height),o.updateProjectionMatrix(),o.updateMatrixWorld()}function p(M,y,b=new I(.15,.18,1)){let S=new ji().setFromVector3(b.normalize());return S.theta+=Se.degToRad(M),S.phi=Se.clamp(S.phi-Se.degToRad(y),.04,Math.PI-.04),new I().setFromSpherical(S)}function _(M,y){if(f||x(y),h+=M,y.mode==="universe"){o.copy(r);let V={left:.27,middle:.5,right:.73}[y.center];o.setViewOffset(f.width,f.height,(.5-V)*f.width,0,f.width,f.height),o.updateMatrixWorld();let B=e.passes[0].camera;try{e.passes[0].camera=o,e.render()}finally{e.passes[0].camera=B}return}let b,S,w,v,E,T;if(y.mode==="trajectory")d||(d=pc(t,s,i.getPixelRatio())),d.setReferenceFrame(y.reference),d.setTrailLength(y.trail),d.update(M,{active:!0,paused:M===0,speed:1}),T=d.getState(),b=d.group,S=d.getCenter(),w=new I(...T.bounds.size).length()/2,m(S,w,{left:.27,middle:.5,right:.73}[y.trajectoryCenter],.5,y.zoom,p(y.trajectoryDragYaw,y.trajectoryDragPitch,new I(...Qa)),0,T.bounds),b.traverse(V=>{let B=V.material?.uniforms;B?.uResolution&&B.uResolution.value.set(f.width*i.getPixelRatio(),f.height*i.getPixelRatio())}),g=null;else{if(v=n.bodies.get(y.selected),E=n.galaxyDefinitions.find(B=>B.id===y.selected),v?(b=v.group,S=v.position,w=v.visualRadius?v.visualRadius*1.1:v.r*(v.rings?2.3:1.15)):E&&(b=E.id==="galaxy"?n.galaxy:n.nearbyGalaxies.galaxies.get(E.id)?.group,S=n.getPosition(E.id),w=E.radius*1.05),!b)return;let V=E?new I(.2,1,1.15).applyQuaternion(b.quaternion):S.clone().negate();!E&&(V.lengthSq()<.001||v.parentGalaxy)&&V.set(.15,.18,1),v?.kind==="black-hole"&&V.set(.3,.08,1).applyQuaternion(v.accretionDisk.quaternion),m(S,w,{left:.27,middle:.5,right:.73}[y.center],.5,y.zoom,p(y.focusYaw+(E?h*.6:v.kind==="black-hole"?0:37),y.focusPitch,V)),g={body:v,position:S.clone(),radius:w}}let C=new Map,R=[];t.traverse(V=>C.set(V,V.visible));let D=v?.mesh.rotation.y,k=n.backgroundStars.position.clone(),N=n.backgroundStars.material?.uniforms,O=N?.uFixedProjection.value,U=N?.uProjection.value.clone(),W=e.passes[0].camera;try{let V=new Set;b.traverse(G=>V.add(G)),t.traverse(G=>{(G.isMesh||G.isLine||G.isPoints||G.isSprite)&&(G.visible=V.has(G)&&(C.get(G)||!!E))});for(let G=b;G;G=G.parent)G.visible=!0;if(n.backgroundStars.visible=y.starsVisible,n.backgroundStars.position.copy(o.position),N&&(u.aspect=f.width/f.height,u.updateProjectionMatrix(),N.uFixedProjection.value=!0,N.uProjection.value.copy(u.projectionMatrix)),y.mode==="trajectory"&&b.traverse(G=>{G.name.startsWith("trajectory-trail-")&&!y.orbitsVisible&&(G.visible=!1)}),!(y.mode==="focus"?!1:y.orbitsVisible)){n.orbitGroup.visible=!1,n.earthOrbitGroup.visible=!1;for(let G of n.deepSpace.orbitLines)G.visible=!1}if(n.earthSatellites.visible=!1,n.station.visible=!1,v?.id==="earth"&&y.satellitesVisible)for(let G of[n.earthSatellites,n.station]){G.traverse($=>{$.visible=!0});for(let $=G;$;$=$.parent)$.visible=!0}if(v){v.mesh.visible=!0,v.mesh.rotation.y=D+h*.035;let G=v.mesh.getObjectByName("EarthSense surface layers");G&&(G.visible=!1)}E&&b.traverse(G=>{let $=G.material?.uniforms?.uOpacity;$&&(R.push([$,"value",$.value]),$.value=.9),G.isSprite&&(R.push([G.material,"opacity",G.material.opacity]),G.material.opacity=.15)}),e.passes[0].camera=o,v?.renderPreview?v.renderPreview(o,h,()=>e.render()):e.render()}finally{C.forEach((V,B)=>{B.visible=V}),n.backgroundStars.position.copy(k),N&&(N.uFixedProjection.value=O,N.uProjection.value.copy(U)),R.forEach(([V,B,G])=>{V[B]=G}),v&&(v.mesh.rotation.y=D),d&&(d.group.visible=!1),e.passes[0].camera=W}}return{resize:x,render:_,resetRotation(){h=0},hitTest(M,y){if(!g)return!1;let b=l.getBoundingClientRect();return c.setFromCamera(new ce((M-b.left)/b.width*2-1,1-(y-b.top)/b.height*2),o),g.body?(g.body.group.updateWorldMatrix(!0,!0),c.intersectObjects(g.body.pickMeshes||[g.body.mesh],!0).length>0):c.ray.intersectsSphere(new Qt(g.position,g.radius))},getState:()=>({camera:o.position.toArray(),trajectory:d?.getState()||null}),exit(){f=null,h=0,g=null,d&&(d.group.visible=!1),l.style.cssText="touch-action:none",a()}}}var vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Sb=new ys(-1,1,1,-1,0,1),dh=class extends Ke{constructor(){super(),this.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pe([0,2,0,0,2,0],2))}},Eb=new dh,ts=class{constructor(e){this._mesh=new We(Eb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var mc=class extends En{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Je?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ri.clone(e.uniforms),this.material=new Je({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ts(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ga=class extends En{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},gc=class extends En{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var xc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mc(vr),this.copyPass.material.blending=Dn,this.timer=new ba}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ga!==void 0&&(a instanceof Ga?n=!0:a instanceof gc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var vc=class extends En{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ge}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var ap={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var yr=class i extends En{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,a,{type:cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Wt(r,a,{type:cn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new Wt(r,a,{type:cn});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=ap;this.highPassUniforms=Ri.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Je({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ri.clone(vr.uniforms),this.blendMaterial=new Je({uniforms:this.copyUniforms,vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,premultipliedAlpha:!0,blending:wt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new on,this._fsQuad=new ts(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new Je({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Je({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};yr.BlurDirectionX=new ce(1,0);yr.BlurDirectionY=new ce(0,1);var Wa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var yc=class extends En{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ri.clone(Wa.uniforms),this.material=new lr({name:Wa.name,uniforms:this.uniforms,vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader}),this._fsQuad=new ts(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ea?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ta?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ra?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ca?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Aa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Tn=Math.PI*2,Nn=Se.clamp,Ii=(i,e,t)=>Se.smoothstep(t,i,e),Un=matchMedia("(prefers-reduced-motion: reduce)").matches,jt=()=>innerWidth<=600,fh=20260906;function At(){return fh=Math.imul(fh,1664525)+1013904223|0,(fh>>>0)/4294967296}function _r(){return Math.sqrt(-2*Math.log(Math.max(1e-6,At())))*Math.cos(Tn*At())}function Tb({width:i,height:e,pixelRatio:t,compact:n}){let s=Math.min(Math.max(t,1.5),n?2:2.5);return Math.min(s,Math.max(1,Math.sqrt(6e6/(i*e))))}function wb(i,e,t,{reducedMotion:n=!1}={}){let s=e?1:0;if(n)return s;let r=Number.isFinite(t)?Math.max(0,t):0,a=i+(s-i)*(1-Math.exp(-r*12));return Math.abs(s-a)<.001?s:a}function op(i,e){let t=new uc({antialias:!0,alpha:!1,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});return t.setClearColor(198413),t.toneMapping=bs,t.toneMappingExposure=1.15,t.outputColorSpace=Ot,i.append(t.domElement),t.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),e()}),t}function lp(i,e,t){let n=new xc(i);n.addPass(new vc(e,t));let s=new yr(new ce(innerWidth,innerHeight),.42,.65,1.18);n.addPass(s),n.addPass(new yc);for(let h of[n.renderTarget1,n.renderTarget2])h.samples=Math.min(2,i.capabilities.maxSamples);let r=0,a=innerWidth,o=innerHeight,l=jt();function c(){t.aspect=a/o;let h=o*Se.lerp(-.045,.03,r);t.setViewOffset(a,o,l?0:-a*.105,l?h:0,a,o)}function u(h,d){let g=wb(r,h,d,{reducedMotion:Un});return g!==r&&(r=g,l&&c()),r}function f(h){let d=innerWidth,g=innerHeight;a=d,o=g,l=jt();let x=Tb({width:d,height:g,pixelRatio:devicePixelRatio,compact:l});i.setPixelRatio(x),i.setSize(d,g),c(),n.setPixelRatio(x),n.setSize(d,g);for(let m of h?.starFields||[h?.galaxy,h?.backgroundStars])m&&(m.material.uniforms.uRatio.value=x);return h?.motionTrajectories?.resize(x),x}return{composer:n,resize:f,updateFraming:u}}var cp={type:"change"},mh={type:"start"},hp={type:"end"},_c=new wi,up=new Cn,Ab=Math.cos(70*Se.DEG2RAD),$t=new I,gn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ph=1e-6,bc=class extends Ma{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new _t,this._lastTargetPosition=new I,this._quat=new _t().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ji,this._sphericalDelta=new ji,this._scale=1,this._panOffset=new I,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new I,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Cb.bind(this),this._onPointerDown=Rb.bind(this),this._onPointerUp=Pb.bind(this),this._onContextMenu=Ob.bind(this),this._onMouseWheel=Lb.bind(this),this._onKeyDown=Fb.bind(this),this._onTouchStart=Nb.bind(this),this._onTouchMove=Ub.bind(this),this._onMouseDown=Ib.bind(this),this._onMouseMove=Db.bind(this),this._interceptControlDown=Bb.bind(this),this._interceptControlUp=zb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cp),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=$t.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_c.origin.copy(this.object.position),_c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_c.direction))<Ab?this.object.lookAt(this.target):(up.setFromNormalAndCoplanarPoint(this.object.up,this.target),_c.intersectPlane(up,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ph||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ph||this._lastTargetPosition.distanceToSquared(this.target)>ph?(this.dispatchEvent(cp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;$t.copy(s).sub(this.target);let r=$t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Rb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Cb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Pb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hp),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ib(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case $i.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case $i.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(mh)}function Db(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Lb(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(mh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(hp))}function Fb(i){this.enabled!==!1&&this._handleKeyDown(i)}function Nb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(mh)}function Ub(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function Ob(i){this.enabled!==!1&&i.preventDefault()}function Bb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gh(i,e){return{position:i.position.toArray(),target:e.target.toArray(),quaternion:i.quaternion.toArray(),up:i.up.toArray(),zoom:i.zoom,minDistance:e.minDistance,maxDistance:e.maxDistance,enabled:e.enabled}}function xh(i,e,t){let n=e.enableDamping;e.enableDamping=!1,e.update(),e.enableDamping=n,i.position.fromArray(t.position),i.quaternion.fromArray(t.quaternion),i.up.fromArray(t.up),i.zoom=t.zoom,i.updateProjectionMatrix(),e.target.fromArray(t.target),e.minDistance=t.minDistance,e.maxDistance=t.maxDistance,e.enabled=t.enabled,e.update()}function dp(i,e){if(!i)return null;let t=Math.max(0,Math.min(i.duration,e-i.start));return{id:i.id,night:i.night,duration:i.duration,elapsed:t,remaining:i.duration-t,startTarget:i.startTarget.toArray(),startDir:i.startDir.toArray(),endDir:i.endDir.toArray(),startDist:i.startDist,endDist:i.endDist,earthFocus:i.earthFocus?{...i.earthFocus}:null}}function fp(i,e){return i?{id:i.id,night:i.night,duration:i.duration,start:e-i.elapsed,startTarget:new I().fromArray(i.startTarget),startDir:new I().fromArray(i.startDir),endDir:new I().fromArray(i.endDir),startDist:i.startDist,endDist:i.endDist,earthFocus:i.earthFocus?{...i.earthFocus}:null}:null}function fn(i,e,t=1){let n=Se.degToRad(i),s=Se.degToRad(e);return new I(t*Math.cos(n)*Math.cos(s),t*Math.sin(n),-t*Math.cos(n)*Math.sin(s))}function vh(i,{lat:e,lon:t}){let n=fn(e,t);return i.mesh.updateWorldMatrix(!0,!1),i.mesh.localToWorld(n).sub(i.position).normalize()}var Xa=3e6;function pp(i){let e=new kt(43,innerWidth/innerHeight,.001,4e6),t=new bc(e,i.domElement);return t.enableDamping=!0,t.dampingFactor=.07,t.enablePan=!1,t.zoomSpeed=1.65,t.rotateSpeed=.5,t.minDistance=1.13,t.maxDistance=Xa,t.maxPolarAngle=Math.PI-.02,t.minPolarAngle=.02,{camera:e,controls:t}}function mp({camera:i,controls:e,world:t,onInfo:n,onStage:s,toast:r}){let{bodies:a,earth:o,station:l,getData:c,getPosition:u}=t,f=new I,h=u("galaxy"),d=new I,g=new I,x="earth",m="earth",p="earth",_="galaxy",M="solar",y=!1,b=null,S=null,w="earth";function v(z){let L=c(z);if(L.kind==="trajectory")return L.viewDistance*(jt()?1.7:1);if(L.kind==="group"){let ae=L.viewDistance*(jt()?1.65:1),re=new I(.12,.8,1.65).normalize(),ye=new I().crossVectors(new I(0,1,0),re).normalize(),fe=new I().crossVectors(re,ye).normalize(),se=Math.tan(Se.degToRad(i.fov/2));for(let ue of t.galaxyDefinitions||[]){let ie=u(ue.id).sub(u(z)),pe=ue.radius*1.15,ve=ie.dot(re)+Math.max((Math.abs(ie.dot(ye))+pe)/(se*i.aspect),(Math.abs(ie.dot(fe))+pe)/se);ae=Math.max(ae,ve*1.04)}return ae}if(L.kind==="galaxy"){if(!jt())return L.viewDistance;let ae=L.radius*1.12/(Math.tan(Se.degToRad(i.fov/2))*Math.min(1,i.aspect));return Math.max(L.viewDistance*1.25,ae)}if(z==="galaxy")return 68e3;if(z==="solar")return 650;if(z==="iss")return .88;if(z==="jwst")return jt()?5.3:4.1;let X=jt()?L.parentGalaxy?1.7:1.19:1;if(L.kind==="spacecraft"){let ae=L.r*1.12/(Math.tan(Se.degToRad(i.fov/2))*Math.min(1,i.aspect));return Math.max((L.viewDistance||L.r*5.5)*X,ae)}if(L.kind==="black-hole"){let ae=L.visualRadius||L.r*(L.diskOuterRadius||4.5),re=ae*1.12/(Math.tan(Se.degToRad(i.fov/2))*Math.min(1,i.aspect));return Math.max((L.viewDistance||ae*3.3)*X,re)}return L.r*(z==="saturn"?8.6:z==="sun"||L.kind==="star"?5.5:4.65)*X}function E(z,L=!1){let X=c(z);if(X.kind==="trajectory")return new I(...Qa).normalize();if(X.kind==="group")return new I(.12,.8,1.65).normalize();if(X.kind==="galaxy")return X.profile==="lenticular"||X.profile==="dust-lane"?new I(.16,.14,1.7).applyEuler(new dn(...X.tilt||[0,0,0])).normalize():new I(.16,1.3,1.7).normalize();if(X.kind==="spacecraft"&&X.viewDirection)return new I(...X.viewDirection).normalize();if(X.kind==="black-hole")return new I(.45,.065,1).applyEuler(new dn(...X.diskTilt||[.12,0,-.22])).normalize();if(X.parentStarId){let re=u(X.parentStarId).sub(u(z)).normalize(),ye=new I().crossVectors(re,new I(0,1,0));return re.addScaledVector(ye,.5).add(new I(0,.42,0)).normalize()}if(X.parentGalaxy)return new I(.45,.38,1).normalize();if(z==="galaxy")return new I(.14,1.2,1.55).normalize();if(z==="solar")return new I(.18,1.15,1.45).normalize();if(z==="jwst")return new I(.85,.72,1.65).applyQuaternion(t.jwst.body.group.quaternion).normalize();if(z==="iss"){let re=l.position.clone().sub(o.position).normalize(),ye=new I().crossVectors(re,new I(0,1,0)).normalize();return re.addScaledVector(ye,.35).add(new I(0,.15,0)).normalize()}let ae=u(z);return z==="earth"?L?ae.normalize().multiplyScalar(1.1).add(new I(0,.14,.3)).normalize():new I(2.1,.95,3.8).normalize():ae.normalize().negate().multiplyScalar(.9).add(new I(.3,.48,1.15)).normalize()}function T(z){p=z,n(z)}function C(z,{night:L=!1,immediate:X=!1,earthFocus:ae=null,distance:re}={}){let ye=c(z);if(!ye)return;S=null,x=z,y=ye.kind==="trajectory",y?(m="earth",_="galaxy",M="solar"):z==="galaxy"||z==="solar"?((_!=="galaxy"||M!=="solar")&&(m="earth"),_="galaxy",M="solar"):ye.kind==="galaxy"?(_=z,m=M=([...a.values()].find(ie=>ie.parentGalaxy===z&&ie.kind==="star")||[...a.values()].find(ie=>ie.parentGalaxy===z))?.id||z):(a.has(z)||z==="iss")&&(m=z,_=ye.parentGalaxy||"galaxy",M=ye.parentSystemId||ye.parentStarId||(ye.kind==="star"||ye.kind==="black-hole"?z:"solar")),T(z),e.minDistance=.001,e.maxDistance=Xa;let fe=i.position.clone().sub(e.target);b={id:z,night:L,start:performance.now(),duration:X||Un?1:z==="galaxy"?2600:ye.kind==="group"||ye.kind==="galaxy"?3200:1800,startTarget:e.target.clone(),startDir:fe.clone().normalize(),startDist:fe.length(),endDist:re??v(z),endDir:ae?vh(o,ae):E(z,L),earthFocus:ae},e.enabled=!1,e.update(),L?r("\u6B63\u5728\u98DE\u5411\u5730\u7403\u591C\u4FA7"):z==="iss"&&r("\u6B63\u5728\u63A5\u8FD1\u56FD\u9645\u7A7A\u95F4\u7AD9")}function R(){let z=!1;for(let L of a.values()){g.copy(i.position).sub(L.position);let X=L.r*1.018;g.lengthSq()<X*X&&(g.lengthSq()<1e-6&&g.set(0,0,1),i.position.copy(L.position).add(g.setLength(X)),z=!0)}z&&i.lookAt(e.target)}function D(z){let L=b;if(!L)return;let X=Nn((z-L.start)/L.duration,0,1),ae=X*X*(3-2*X);e.target.lerpVectors(L.startTarget,u(L.id),ae),L.endDir.copy(L.earthFocus?vh(o,L.earthFocus):E(L.id,L.night));let re=d.lerpVectors(L.startDir,L.endDir,ae);re.lengthSq()<1e-6&&re.copy(L.endDir),re.normalize();let ye=Math.exp(Se.lerp(Math.log(L.startDist),Math.log(L.endDist),ae));i.position.copy(e.target).addScaledVector(re,ye),R(),e.update(),X>=1&&W()}function k(z){let L=S,X=Nn((z-L.start)/L.duration,0,1),ae=X*X*(3-2*X);e.target.lerpVectors(L.startTarget,L.endTarget,ae);let re=d.lerpVectors(L.startDir,L.endDir,ae);re.lengthSq()<1e-6&&re.copy(L.endDir),re.normalize();let ye=Math.exp(Se.lerp(Math.log(L.startDist),Math.log(L.endDist),ae));i.position.copy(e.target).addScaledVector(re,ye),i.zoom=Se.lerp(L.startZoom,L.saved.camera.zoom,ae),i.updateProjectionMatrix(),e.update(),R(),X>=1&&q(L.saved)}function N(){return Math.max(15e4,jt()?v(_)*1.2:0)}function O(z){if(y)return u("trajectory");let L=c(m),X=u(m),ae=L.kind==="spacecraft"?v(m)*1.25:0,re=Ii(Math.max(L.r*9,8,ae),Math.max(L.r*25,75,ae*2),z);X.lerp(M==="solar"?f:u(M),re);let ye=Math.min(3e4,(c(_).viewDistance||68e3)*.7);if(X.lerp(_==="galaxy"?h:u(_),Ii(1800,ye,z)),c("local-group")){let fe=N();X.lerp(u("local-group"),Ii(fe,Math.max(5e5,fe*2.4),z))}return X}function U(z){let L=i.position.distanceTo(e.target),X=c(m);d.copy(O(L)).sub(e.target).multiplyScalar(1-Math.exp(-z*8)),e.target.add(d),i.position.add(d),e.minDistance=y?60:m==="iss"?.2:X.r*(X.kind==="black-hole"?2.8:1.13),e.maxDistance=y?2400:Xa,e.update(),R()}function W(){b=null,S=null,e.enabled=!0;let z=c(m);e.minDistance=y?60:m==="iss"?.2:z.r*(z.kind==="black-hole"?2.8:1.13),e.maxDistance=y?2400:Xa}function V(z){(b||S)&&W();let L=i.position.clone().sub(e.target);L.setLength(Nn(L.length()*z,e.minDistance,e.maxDistance)),i.position.copy(e.target).add(L),e.update()}function B(){if(y)return"trajectory";let z=i.position.distanceTo(e.target);if(c("local-group")&&z>N()*4/3)return"local-group";let L=c(m);return L.kind==="galaxy"?"galaxy":L.kind==="black-hole"?z>2600?"galaxy":"earth":z>2600?"galaxy":z>Math.max(28,c(m).r*10)?"solar":"earth"}function G(){let z=B();if(z!==w&&(w=z,s(z),z==="galaxy"&&r(`\u8FDB\u5165${c(_).cn} \xB7 \u7EE7\u7EED\u7F29\u5C0F\u53EF\u6253\u5F00\u661F\u7CFB\u56FE\u9274`),z==="local-group"&&r("\u6253\u5F00\u661F\u7CFB\u56FE\u9274 \xB7 \u70B9\u51FB\u661F\u7CFB\u7EE7\u7EED\u8FDC\u884C")),!b&&!S){let L=z==="trajectory"?"trajectory":z==="earth"?m:z==="solar"?M:z==="galaxy"?_:"local-group";p!==L&&T(L),x=L}}function $(z,L,X){let ae=i.position.distanceTo(e.target),re=b||S?null:O(ae);if(X(z),S)k(L);else if(b)D(L);else{let ye=O(ae).sub(re);e.target.add(ye),i.position.add(ye),U(z)}}function xe(){e.target.copy(o.position),i.position.copy(o.position).addScaledVector(E("earth"),v("earth")),e.update()}function ee({lat:z,lon:L,distance:X=2}){return[z,L,X].every(Number.isFinite)?(C("earth",{earthFocus:{lat:Nn(z,-90,90),lon:L},distance:Nn(X,1.13,28)}),!0):!1}function te(){return S?S.saved:{selected:x,focusBody:m,displayedId:p,lastMode:w,activeGalaxyId:_,activeSystemId:M,trajectoryView:y,camera:gh(i,e),flight:dp(b,performance.now())}}function q(z,{animate:L=!1}={}){let X=L&&!Un?gh(i,e):null;if(x=z.selected,m=z.focusBody,p=z.displayedId,w=z.lastMode,_=z.activeGalaxyId||"galaxy",M=z.activeSystemId||"solar",y=z.trajectoryView||!1,b=null,S=null,X){let ae=new I().fromArray(X.target),re=new I().fromArray(z.camera.target),ye=new I().fromArray(X.position).sub(ae),fe=new I().fromArray(z.camera.position).sub(re);xh(i,e,X),S={saved:z,start:performance.now(),duration:ae.distanceTo(re)>1e4||Math.max(ye.length(),fe.length())>2600?2200:1e3,startTarget:ae,endTarget:re,startDir:ye.clone().normalize(),endDir:fe.clone().normalize(),startDist:Math.max(.001,ye.length()),endDist:Math.max(.001,fe.length()),startZoom:X.zoom},e.minDistance=.001,e.maxDistance=Xa,e.enabled=!1}else b=fp(z.flight,performance.now()),xh(i,e,z.camera);n(p),s(w)}return{initialize:xe,flyTo:C,zoom:V,cancelFlight:W,trackingCenter:O,stage:B,update:$,updateStage:G,focusEarth:ee,snapshot:te,restore:q,getState:()=>({selected:x,focusBody:m,displayedId:p,activeGalaxyId:_,activeSystemId:M,trajectoryView:y,flight:!!b||!!S,returning:!!S,stage:B(),distance:i.position.distanceTo(e.target),galaxyViewDistance:v(_)})}}var kb={id:"jwst",cn:"\u8A79\u59C6\u65AF\xB7\u97E6\u5E03",en:"JAMES WEBB",index:"L2",kind:"observatory",type:"\u65E5\u5730 L2 / \u7EA2\u5916\u592A\u7A7A\u671B\u8FDC\u955C",r:1.38,color:15055977,stat1:"\u4E3B\u955C\u53E3\u5F84",diameter:"6.5",unit1:"m",stat2:"\u8DDD\u5730\u7403\u7EA6",value2:"150",unit2:"\u4E07 km",desc:"\u5341\u516B\u7247\u9540\u91D1\u955C\u9762\u6536\u96C6\u5FAE\u5149\uFF0C\u4E94\u5C42\u906E\u9633\u677F\u9694\u5F00\u592A\u9633\u7684\u70ED\u3002\u5728\u7EA2\u5916\u6CE2\u6BB5\uFF0C\u7A7F\u8FC7\u5C18\u57C3\u5BFB\u627E\u65B0\u751F\u6052\u661F\uFF0C\u6355\u6349\u9065\u8FDC\u661F\u7CFB\u7684\u6697\u5F31\u5149\u8292\u3002",sourceUrl:"https://science.nasa.gov/mission/webb/science-overview/science-explainers/telescope-overview/",sourceLabel:"NASA \xB7 \u671B\u8FDC\u955C\u7ED3\u6784"};function Hb(){let t=new Uint8Array(131072);for(let s=0;s<128;s++)for(let r=0;r<256;r++){let a=r/256,o=s/128,l=Math.exp(-Math.pow((o-.38-.12*Math.sin(a*6.28))/.08,2)),c=Math.exp(-Math.pow((a-.22)/.08,2)-Math.pow((o-.43)/.3,2)),u=Math.exp(-Math.pow((a-.72)/.045,2)-Math.pow((o-.5)/.2,2)),f=Math.min(1,.06+.45*l+.75*c+.65*u),h=(s*256+r)*4;t[h]=f*225,t[h+1]=f*235,t[h+2]=f*255,t[h+3]=255}let n=new pn(t,256,128);return n.mapping=hr,n.colorSpace=Ot,n.needsUpdate=!0,n}function gp(i,e){let t=new ze;t.name="jwst",i.add(t);let n=[],s=Hb(),r=new Yn(16772044,2.3,5,0);r.position.set(-.6,1.8,2),t.add(r);let a=new Yn(12966399,1.5,4,0);a.position.set(-1.6,1.4,-.4),t.add(a);let o=new ze;o.name="jwst-deployable-sunshield",t.add(o);let l=[],c=[[],[]],u=new ma({color:16765803,metalness:.96,roughness:.19,envMap:s,envMapIntensity:2.6,clearcoat:.25,emissive:12683823,emissiveIntensity:.32}),f=new Bt({color:2106153,metalness:.55,roughness:.38,envMap:s,envMapIntensity:.7}),h=new Bt({color:13357785,metalness:.85,roughness:.28,envMap:s,envMapIntensity:1.1}),d=new Bt({color:12753489,metalness:.8,roughness:.4,envMap:s}),g=new ze;g.name="jwst-optical-assembly",g.position.set(0,.57,-.12),g.rotation.x=-.09,t.add(g);function x(ee,te,q=[0,0,0],z=t,L=""){let X=new We(ee,te);return X.position.fromArray(q),X.name=L,X.userData.bodyId="jwst",z.add(X),n.push(X),X}function m(ee,te,q=.005,z=f,L=t){let X=new I(...ee),ae=new I(...te),re=ae.clone().sub(X),ye=x(new Gt(q,q,re.length(),8),z,[0,0,0],L);return ye.position.copy(X.add(ae).multiplyScalar(.5)),ye.quaternion.setFromUnitVectors(new I(0,1,0),re.normalize()),ye}let p=new rr;for(let ee=0;ee<6;ee++){let te=ee*Math.PI/3,q=Math.cos(te)*.086,z=Math.sin(te)*.086;ee?p.lineTo(q,z):p.moveTo(q,z)}p.closePath();let _=new da(p,{depth:.007,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.0011,bevelThickness:.0011}),M=0;for(let ee=-2;ee<=2;ee++)for(let te=-2;te<=2;te++){if(Math.max(Math.abs(ee),Math.abs(te),Math.abs(ee+te))>2||!ee&&!te)continue;let q=ee*.132,z=(te+ee/2)*.1524,L=(q*q+z*z)*.11,X=new ze;X.position.set(q,z,0),g.add(X),Math.abs(ee)===2&&c[ee<0?0:1].push(X),x(_,u,[0,0,L],X,"jwst-primary-segment-"+ ++M).rotation.set(-z*.22,q*.22,0);let re=x(new Gt(.087,.082,.025,6),f,[0,0,L-.019],X);re.rotation.x=Math.PI/2,re.rotation.y=Math.PI/6,x(new Gt(.012,.012,.037,6),h,[0,0,-.055],X).rotation.x=Math.PI/2}for(let ee of[-.28,0,.28])m([ee,-.29,-.065],[ee,.28,-.065],.008,f,g),m([ee,-.28,-.07],[0,0,-.17],.008,f,g),m([ee,.28,-.07],[0,0,-.17],.008,f,g);for(let ee of[-.23,.23])m([-.29,ee,-.06],[.29,ee,-.06],.009,f,g);let y=x(new Gt(.047,.062,.1,6),f,[0,0,.06],g,"jwst-aft-optics");y.rotation.x=Math.PI/2;for(let ee of[-.2,.2])for(let te of[-.24,.24])x(new Vt(.022,.043,.035),h,[ee,te,-.035],g);let b=[0,.018,.69];for(let ee of[[0,.345,.02],[-.3,-.21,.02],[.3,-.21,.02]])l.push(m(ee,b,.0065,f,g)),x(new Pt(.012,8,6),h,ee,g);let S=x(new Gt(.048,.037,.034,24),f,b,g,"jwst-secondary-housing");S.rotation.x=Math.PI/2,l.push(S);let w=x(new Pt(.037,24,12,0,Math.PI*2,0,Math.PI/2),u,[0,.018,.67],g,"jwst-secondary-mirror");w.rotation.x=-Math.PI/2,w.scale.y=.22,l.push(w),m([-.07,.08,-.15],[-.07,.51,-.21],.025,h),m([.07,.08,-.15],[.07,.51,-.21],.025,h),x(new Vt(.31,.26,.21),f,[0,.55,-.32],t,"jwst-instruments");for(let ee of[-.12,0,.12])x(new Vt(.075,.22,.07),d,[ee,.53,-.46]);let v=[[0,1.13],[.5,.62],[.77,-.13],[.46,-.87],[0,-1.13],[-.46,-.87],[-.77,-.13],[-.5,.62]];for(let ee=0;ee<5;ee++){let fe=function(ie,pe){let ve=pe*v.length,Ue=Math.floor(ve)%v.length,Ne=ve-Math.floor(ve),qe=(Ue+1)%v.length,$e=Se.lerp(v[Ue][0],v[qe][0],Ne)*ie*re,H=Se.lerp(v[Ue][1],v[qe][1],Ne)*ie*re,dt=.007*Math.sin(pe*Math.PI*48+ie*5)*Math.sin(ie*Math.PI),rt=ye-(1-ie*ie)*(.018+ee*.01)+dt;return[$e,rt,H]},te=[],q=[],z=[],L=[],re=1-ee*.027,ye=-.13+ee*.042;for(let ie=0;ie<=14;ie++)for(let pe=0;pe<=96;pe++){let ve=ie/14,Ue=pe/96,Ne=fe(ve,Ue);te.push(...Ne);let qe=.86+.1*Math.sin(Ue*Math.PI*16)+.04*Math.cos(ve*17+Ue*32);if(z.push(qe,qe,qe),ie===14&&L.push(...Ne),ie<14&&pe<96){let $e=ie*97+pe,H=$e+96+1;q.push($e,H,$e+1,H,H+1,$e+1)}}let se=new Ke;se.setAttribute("position",new Pe(te,3)),se.setAttribute("color",new Pe(z,3)),se.setIndex(q),se.computeVertexNormals();let ue=new Bt({color:[12098215,12887483,11840701,12828111,14012892][ee],vertexColors:!0,metalness:.78,roughness:.36,side:pt,envMap:s,envMapIntensity:1.5,emissive:8156043,emissiveIntensity:.17});x(se,ue,[0,0,0],o,"jwst-sunshield-layer-"+(ee+1)),o.add(new ci(new Ke().setAttribute("position",new Pe(L,3)),new ln({color:14541292,transparent:!0,opacity:.45})));for(let ie=0;ie<8;ie++){let pe=[];for(let ve=1;ve<=14;ve++){let Ue=fe(ve/14,ie/8);Ue[1]+=.001,pe.push(...Ue)}o.add(new ci(new Ke().setAttribute("position",new Pe(pe,3)),new ln({color:14934763,transparent:!0,opacity:.24})))}}for(let[ee,te]of[[0,1.12],[.77,-.13],[-.77,-.13],[0,-1.12]])m([0,-.18,0],[ee,-.19,te],.011,h,o);x(new Gt(.22,.22,.19,8),d,[0,-.28,-.02],t,"jwst-spacecraft-bus");for(let ee=0;ee<8;ee++){let te=ee*Math.PI/4;x(new Vt(.07,.06,.025),f,[Math.sin(te)*.218,-.28,Math.cos(te)*.218-.02]).rotation.y=te}let E=x(new Pt(.09,20,12,0,Math.PI*2,0,Math.PI*.4),h,[.23,-.38,.17],t,"jwst-antenna");E.rotation.z=2.3,E.scale.y=.45,m([.12,-.3,0],[.23,-.38,.17],.01,h);let T=new Bt({color:1255234,metalness:.6,roughness:.3,envMap:s});x(new Vt(.36,.008,.4),T,[0,-.43,-.43],t,"jwst-solar-array");for(let ee=-.16;ee<.18;ee+=.04)m([ee,-.424,-.62],[ee,-.424,-.24],.0014,h);for(let ee=-.62;ee<-.23;ee+=.05)m([-.17,-.424,ee],[.17,-.424,ee],.0014,h);let C=x(new Vt(.44,.006,.22),h,[0,-.1,-1.19],t,"jwst-momentum-flap");C.rotation.x=.32;let R=c.map((ee,te)=>{let q=new ze;q.name=te?"jwst-right-wing":"jwst-left-wing",q.position.x=te?.2:-.2,g.add(q),t.updateMatrixWorld(!0);for(let z of ee)q.attach(z);return q}),D=new ze;D.name="jwst-deployable-secondary",D.position.set(0,.345,.02),g.add(D),t.updateMatrixWorld(!0);for(let ee of l)D.attach(ee);let k=1,N=1,O=(ee,te)=>{let q=Se.clamp((k-ee)/(te-ee),0,1);return q*q*(3-2*q)};function U(){let ee=O(0,.45),te=O(.25,.6),q=O(.5,.8),z=O(.72,1);o.scale.set(.2+.8*ee,.34+.66*ee,.23+.77*ee),g.position.y=.32+.25*te,D.rotation.x=-(1-q)*Math.PI*.48,R[0].rotation.y=(1-z)*Math.PI*.64,R[1].rotation.y=-(1-z)*Math.PI*.64,C.scale.z=.1+.9*ee,C.position.z=-.3-.89*ee}let W={...kb,group:t,mesh:n[0],pickMeshes:n,position:t.position},V=0,B=new I,G=new I,$=new I(0,1,0);function xe(ee,{paused:te=!1,speed:q=1}={}){if(te||(V+=ee*q*.035),k!==N){let z=ee/8;k=N>k?Math.min(N,k+z):Math.max(N,k-z),U()}B.copy(e.position).normalize(),G.crossVectors($,B).normalize(),t.position.copy(e.position).addScaledVector(B,7).addScaledVector(G,Math.cos(V)*.55).addScaledVector($,Math.sin(V)*.36),t.quaternion.setFromAxisAngle($,Math.atan2(B.x,B.z))}return xe(0),{body:W,update:xe,setDeployment(ee,{immediate:te=!1}={}){N=ee?1:0,te&&(k=N,U())},getState:()=>({progress:k,targetExpanded:N===1,animating:k!==N,phase:k<.45?"\u906E\u9633\u677F":k<.6?"\u5149\u5B66\u652F\u6491\u5854":k<.8?"\u526F\u955C\u652F\u67B6":"\u4E3B\u955C\u4FA7\u7FFC"})}}var Vb={id:"voyager-1",cn:"\u65C5\u884C\u8005 1 \u53F7",en:"VOYAGER 1",index:"V1",kind:"spacecraft",parentGalaxy:"galaxy",parentId:"solar",parentSystemId:"solar",type:"\u661F\u9645\u7A7A\u95F4 / \u6DF1\u7A7A\u63A2\u6D4B\u5668",r:1.5,visualRadius:1.5,color:14927243,viewDistance:8.8,viewDirection:[1.3,.55,1.6],stat1:"\u53D1\u5C04\u65E5\u671F",diameter:"1977",unit1:"09.05",stat2:"\u8D8A\u8FC7\u65E5\u7403\u5C42\u9876",value2:"2012",unit2:"08.25",desc:"\u767D\u8272\u5929\u7EBF\u9065\u671B\u5730\u7403\uFF0C\u91D1\u5531\u7247\u4FDD\u5B58\u7740\u5730\u7403\u7684\u58F0\u97F3\u3002\u65C5\u884C\u8005 1 \u53F7\u5728 1977 \u5E74\u542F\u7A0B\uFF0C\u98DE\u63A0\u6728\u661F\u4E0E\u571F\u661F\u540E\uFF0C\u4E8E 2012 \u5E74 8 \u6708 25 \u65E5\u8D8A\u8FC7\u65E5\u7403\u5C42\u9876\uFF0C\u8FDB\u5165\u661F\u9645\u7A7A\u95F4\u3002",sourceUrl:"https://science.nasa.gov/mission/voyager/voyager-1/",sourceLabel:"NASA \xB7 \u65C5\u884C\u8005 1 \u53F7",modelStatus:"confirmed",modelNote:"\u7ED3\u6784\u4E0E\u4F4D\u7F6E\u4E3A\u5C55\u793A\u793A\u610F\uFF1B\u6DE1\u8272\u5F27\u7EBF\u4E3A\u7B80\u5316\u51FA\u53D1\u8DEF\u5F84\uFF0C\u4E0D\u4EE3\u8868\u5B9E\u65F6\u661F\u5386\u3001\u8DDD\u79BB\u6216\u59FF\u6001\u3002"};function Gb(){let i=[],e=[];for(let r=0;r<=22;r++){let a=r/22*.62;for(let o=0;o<=72;o++){let l=o/72*Math.PI*2;if(i.push(a*Math.cos(l),a*Math.sin(l),.19*(a/.62)**2),r<22&&o<72){let c=r*73+o,u=c+72+1;e.push(c,u,c+1,u,u+1,c+1)}}}let s=new Ke;return s.setAttribute("position",new Pe(i,3)),s.setIndex(e),s.computeVertexNormals(),s}function xp(i){let e=new ze;e.name="voyager-1",e.position.set(-320,180,-470),i.add(e);let t=new ze;t.name="voyager-assembly",t.scale.setScalar(.75),e.add(t);let n=[],s=new Bt({color:15920867,roughness:.44,metalness:.14,emissive:14472905,emissiveIntensity:.18,side:pt}),r=new Bt({color:14331995,roughness:.42,metalness:.65,emissive:9990444,emissiveIntensity:.3}),a=new Bt({color:11779266,roughness:.38,metalness:.6,emissive:6911874,emissiveIntensity:.2}),o=new Bt({color:3159098,roughness:.58,metalness:.25,emissive:2107960,emissiveIntensity:.24}),l=new Bt({color:15844714,roughness:.36,metalness:.65,emissive:10250776,emissiveIntensity:.42}),c=new Yn(16772824,2.4,7,0);c.position.set(1.3,2.2,3),e.add(c);let u=new Yn(12310271,1.6,6,0);u.position.set(-2,.5,-1),e.add(u);let f=new pa(1,0),h=[],d=f.getAttribute("position"),g=new ge(14135660),x=new ge(16774876);for(let L=0;L<d.count;L++)h.push(...g.clone().lerp(x,(d.getY(L)+1)/2).toArray());f.setAttribute("color",new Pe(h,3));let m=new We(f,new on({vertexColors:!0}));m.name="voyager-distant-marker",m.userData.bodyId="voyager-1",m.scale.setScalar(.15),m.visible=!1,e.add(m),n.push(m);function p(L,X,ae=[0,0,0],re="",ye=t){let fe=new We(L,X);return fe.position.fromArray(ae),fe.name=re,fe.userData.bodyId="voyager-1",ye.add(fe),n.push(fe),fe}function _(L,X,ae=.009,re=a,ye="",fe=t){let se=new I(...L),ue=new I(...X),ie=ue.clone().sub(se),pe=p(new Gt(ae,ae,ie.length(),6),re,[0,0,0],ye,fe);return pe.position.copy(se.add(ue).multiplyScalar(.5)),pe.quaternion.setFromUnitVectors(new I(0,1,0),ie.normalize()),pe}let M=p(Gb(),s,[0,0,0],"voyager-high-gain-antenna");p(new or(.62,.009,6,72),a,[0,0,.19],"voyager-antenna-rim");let y=p(new Gt(.29,.29,.26,10),r,[0,0,-.23],"voyager-ten-sided-bus");y.rotation.x=Math.PI/2;let b=p(new Gt(.3,.3,.018,10),o,[0,0,-.365]);b.rotation.x=Math.PI/2;for(let L=0;L<10;L++){let X=L/10*Math.PI*2,ae=p(new Vt(.12,.013,.17),L%3?r:o,[Math.sin(X)*.288,Math.cos(X)*.288,-.24]);ae.rotation.z=-X}for(let L=0;L<3;L++){let X=L/3*Math.PI*2+Math.PI/2;_([Math.cos(X)*.49,Math.sin(X)*.49,.12],[0,0,.46],.009,o)}let S=p(new Gt(.045,.066,.1,16),s,[0,0,.48],"voyager-antenna-feed");S.rotation.x=Math.PI/2;for(let L=0;L<12;L++){let X=L/12*Math.PI*2;_([Math.cos(X)*.2,Math.sin(X)*.2,-.08],[Math.cos(X)*.595,Math.sin(X)*.595,.158],.005,a)}let w=new ze;w.name="voyager-magnetometer-boom",t.add(w);let v=new I(-.19,-.16,-.29),E=new I(-1.76,-.76,-.34),T=E.clone().sub(v).normalize(),C=new I(0,0,1).cross(T).normalize(),R=T.clone().cross(C).normalize(),D=(L,X)=>v.clone().lerp(E,L).addScaledVector(C,Math.cos(X/3*Math.PI*2)*.025).addScaledVector(R,Math.sin(X/3*Math.PI*2)*.025);for(let L=0;L<13;L++)for(let X=0;X<3;X++){let ae=D(L/13,X),re=D((L+1)/13,X);_(ae.toArray(),re.toArray(),.0035,a,"",w),_(ae.toArray(),D((L+1)/13,(X+1)%3).toArray(),.0023,a,"",w)}for(let L of[.58,1])p(new Vt(.063,.058,.056),o,v.clone().lerp(E,L).toArray(),"voyager-magnetometer-sensor",w);let k=new ze;k.name="voyager-radioisotope-power",t.add(k);let N=new I(-.24,.15,-.25),O=new I(-.94,.8,-.33),U=O.clone().sub(N).normalize();_(N.toArray(),O.toArray(),.024,a,"voyager-rtg-arm",k);for(let L=0;L<3;L++){let X=N.clone().lerp(O,.5+L*.205),ae=new ze;ae.position.copy(X),ae.quaternion.setFromUnitVectors(new I(0,1,0),U),k.add(ae),p(new Gt(.071,.071,.165,12),o,[0,0,0],`voyager-rtg-${L+1}`,ae);for(let re=0;re<8;re++){let ye=re/8*Math.PI*2,fe=p(new Vt(.052,.152,.008),a,[Math.cos(ye)*.083,0,Math.sin(ye)*.083],"",ae);fe.rotation.y=-ye}}let W=new ze;W.name="voyager-science-boom",t.add(W);for(let L of[-.1,.1])_([.23,L,-.25],[1.08,L+.18,-.27],.012,a,"",W);for(let L=0;L<6;L++){let X=.25+L*.135,ae=(X-.23)/.85*.18;_([X,ae-.1,-.25],[X+.135,ae+.129,-.27],.006,a,"",W)}p(new Vt(.29,.23,.16),r,[1.16,.18,-.27],"voyager-scan-platform",W);for(let[L,X,ae]of[[1.08,.25,.07],[1.24,.25,.048],[1.16,.1,.06]]){let re=p(new Gt(ae,ae,.2,16),o,[L,X,-.09],"",W);re.rotation.x=Math.PI/2,p(new na(ae*.8,16),a,[L,X,.011],"",W)}let V=new ze;V.name="voyager-golden-record",V.position.set(.276,-.035,-.24),V.rotation.y=Math.PI/2,t.add(V);let B=p(new Gt(.117,.117,.014,48),l,[0,0,0],"voyager-record-cover",V);B.rotation.x=Math.PI/2;for(let L of[.026,.036,.089,.101])p(new or(L,.0014,4,40),o,[0,0,.008],"",V);for(let L=0;L<9;L++){let X=L*2.399;_([-.035,-.02,.009],[-.035+Math.cos(X)*.045,-.02+Math.sin(X)*.044,.009],.0014,o,"",V)}_([-.05,-.18,-.3],[.27,-1.35,-.37],.0025,a,"voyager-plasma-wave-antenna-1"),_([.09,-.17,-.3],[.96,-.94,-.37],.0025,a,"voyager-plasma-wave-antenna-2");let G=new sr([new I(0,0,0),new I(56,2,-25),new I(-74,15,-127),new I(-212,91,-286),e.position.clone()]),$=new ci(new Ke().setFromPoints(G.getPoints(160)),new xs({color:14467732,transparent:!0,opacity:.18,dashSize:5,gapSize:4,depthWrite:!1}));$.name="voyager-illustrative-trajectory",$.computeLineDistances(),$.userData.illustrative=!0,$.visible=!1,i.add($);let xe={...Vb,group:e,mesh:M,pickMeshes:n,position:e.position},ee=!1;function te(L,X={}){ee||e.updateMatrixWorld(!0)}function q(L,{focusBody:X=null,activeGalaxyId:ae=null,stage:re=null,orbitsVisible:ye=!0}={}){if(ee)return;let se=(typeof X=="string"?X:X?.id)===xe.id,ue=!ae||ae==="galaxy",ie=!["trajectory","universe","local-group"].includes(re),pe=L.position.distanceTo(xe.position);e.visible=ue&&ie&&(se||pe<2200);let ve=pe<=110;t.visible=M.visible=c.visible=u.visible=e.visible&&ve,m.visible=e.visible&&!ve,m.scale.setScalar(Se.clamp(pe*.0012,.15,1)),m.updateMatrixWorld(!0),$.visible=e.visible&&ye&&(se||pe<1600),$.material.opacity=se?.16:.12}function z(){if(ee)return;ee=!0,e.visible=t.visible=M.visible=m.visible=$.visible=!1,c.visible=u.visible=!1,e.removeFromParent(),$.removeFromParent();let L=new Set,X=new Set;for(let ae of[e,$])ae.traverse(re=>{re.geometry&&L.add(re.geometry);for(let ye of[re.material].flat())ye&&X.add(ye)});L.forEach(ae=>ae.dispose()),X.forEach(ae=>ae.dispose())}return te(0),{body:xe,trajectory:$,update:te,updateVisibility:q,dispose:z}}var yh=`
 varying vec2 vUv; varying vec3 vWorldNormal; varying vec3 vWorldPosition;
 #include <common>
 #include <logdepthbuf_pars_vertex>
 void main(){vUv=uv;vWorldNormal=normalize(mat3(modelMatrix)*normal);vec4 world=modelMatrix*vec4(position,1.0);vWorldPosition=world.xyz;gl_Position=projectionMatrix*viewMatrix*world;
 #include <logdepthbuf_vertex>
 }`;function vp(i){return new Je({uniforms:{uDay:{value:i["earth-day"]},uNight:{value:i["earth-night"]}},vertexShader:yh,fragmentShader:`
 uniform sampler2D uDay;uniform sampler2D uNight;varying vec2 vUv;varying vec3 vWorldNormal;varying vec3 vWorldPosition;
 #include <common>
 #include <logdepthbuf_pars_fragment>
 void main(){
 vec3 n=normalize(vWorldNormal);vec3 l=normalize(-vWorldPosition);float ndl=dot(n,l);vec3 viewDir=normalize(cameraPosition-vWorldPosition);
 vec3 day=texture2D(uDay,vUv).rgb;vec3 night=texture2D(uNight,vUv).rgb;
 float daylight=smoothstep(-.13,.23,ndl);vec3 color=day*(.025+1.65*max(ndl,0.0));
 float nightMask=1.0-smoothstep(-.13,.18,ndl);color+=night*nightMask*3.1;
 float ocean=smoothstep(.025,.15,day.b-day.r);float spec=pow(max(dot(reflect(-l,n),viewDir),0.0),65.0)*ocean*daylight;
 color+=vec3(.45,.65,.8)*spec*.5;
 float rim=pow(1.0-max(dot(n,viewDir),0.0),3.7);color+=vec3(.05,.24,.64)*rim*(.2+.8*daylight);
 gl_FragColor=vec4(color,1.0);
 #include <logdepthbuf_fragment>
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`})}function yp(i){i.add(new ya(10271205,.19)),i.add(new Yn(16774110,3.4,0,0))}function br(i,e,t,n,s=.65){let r=new Je({uniforms:{uColor:{value:new ge(n)},uStrength:{value:s}},vertexShader:yh,fragmentShader:`
 uniform vec3 uColor;uniform float uStrength;varying vec3 vWorldNormal;varying vec3 vWorldPosition;
 #include <common>
 #include <logdepthbuf_pars_fragment>
 void main(){vec3 n=normalize(vWorldNormal);vec3 v=normalize(cameraPosition-vWorldPosition);float rim=pow(1.0-abs(dot(n,v)),3.5);float light=.22+.78*max(dot(n,normalize(-vWorldPosition)),0.0);gl_FragColor=vec4(uColor*1.5,rim*light*uStrength);
 #include <logdepthbuf_fragment>
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`,transparent:!0,blending:wt,depthWrite:!1,side:Xt}),a=new We(e,r);return a.scale.setScalar(t*1.037),i.add(a),a}function _p(i,e,t){let n=new We(i,new hi({map:e["earth-clouds"],alphaMap:e["earth-clouds"],transparent:!0,opacity:.64,depthWrite:!1,shininess:2}));return n.scale.setScalar(1.008),n.rotation.y=t,n}function bp(i,e,t){let n=br(i.group,e,1,4427239,1.1),s=_p(e,t,i.mesh.rotation.y);return i.group.add(s),{clouds:s,atmosphere:n}}function Wb(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.15,"rgba(255,255,255,.7)"),t.addColorStop(.4,"rgba(255,255,255,.15)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new ea(i)}var Xb=Wb();function Kn(i,e,t=1){let n=new Ti(new oi({map:Xb,color:i,transparent:!0,opacity:t,depthWrite:!1,blending:wt}));return n.scale.setScalar(e),n}function Mr(i,e=6650253,t=.26,n=0){let s=[];for(let r=0;r<=256;r++){let a=r/256*Tn;s.push(new I(Math.cos(a)*i,Math.sin(a)*i*Math.sin(n),Math.sin(a)*i*Math.cos(n)))}return new ps(new Ke().setFromPoints(s),new ln({color:e,transparent:!0,opacity:t,depthWrite:!1}))}function Di(i,e,t,n,s=0,r=0,a=0){let o=new We(new Vt(i,e,t),n);return o.position.set(s,r,a),o}function Mp(i,e,t){let n=new We(new Gt(i,i,e,12),t);return n.rotation.z=Math.PI/2,n}function Sp(i,e,t){let n=[],s,r=new Bt({color:13093840,roughness:.45,metalness:.65}),a=new Bt({color:14662770,roughness:.5,metalness:.6}),o=new Bt({color:2313849,roughness:.32,metalness:.52,emissive:1059151,emissiveIntensity:.3});for(let h=0;h<32;h++){let d=new ze,g=1.16+At()*.6;d.add(Di(.026,.027,.023,h%3?r:a)),d.add(Di(.075,.002,.034,o,-.053)),d.add(Di(.075,.002,.034,o,.053)),d.add(Di(.135,.003,.004,r)),t.add(d);let x=.25+At()*2.5,m=At()*Tn,p=At()*Tn,_=new _t().setFromEuler(new dn(x,m,0));if(n.push({group:d,r:g,quat:_,phase:p,velocity:(.1+At()*.1)*(h%3===0?-1:1)}),h<7){let M=Mr(g,6331322,.12);M.quaternion.copy(_),e.add(M)}}s=new ze;let l=Di(.44,.013,.013,r);s.add(l),s.add(Mp(.021,.2,r));let c=Mp(.027,.105,r);c.rotation.y=Math.PI/2,c.position.z=.038,s.add(c);for(let h=0;h<4;h++){let d=(h-1.5)*.116;for(let g of[-.1,.1]){let x=Di(.085,.003,.135,o,d,0,g);s.add(x);for(let m=0;m<6;m++)s.add(Di(8e-4,.004,.135,r,d-.038+m*.015,0,g))}s.add(Di(.007,.007,.35,r,d))}s.add(Di(.035,.027,.055,a,.11,.016,.02));let u=new We(new Pt(.016,8,6),new Bt({color:5866140,metalness:.75,roughness:.15}));u.position.set(-.015,.027,.065),s.add(u),s.rotation.set(.22,.35,.18),i.add(s);let f=Mr(1.33,8968650,.3,.55);return e.add(f),{station:s,satellites:n}}function Ep(i,e){let t=new Map,n=new Pt(1,96,64),s=new ze,r=new ze,a=new ze,o,l,c;i.add(s,r,a),yp(i);for(let d of mi){let g=new ze;i.add(g);let x=d.id==="earth"?vp(e):new hi({map:e[d.texture],shininess:d.id==="sun"?0:8,specular:1514531});d.id==="sun"&&(x.emissiveMap=e.sun,x.emissive=new ge(16759906),x.emissiveIntensity=2.4,x.color.set(0));let m=new We(n,x);m.scale.setScalar(d.r),m.rotation.y=d.id==="earth"?2.9:At()*Tn,g.add(m),m.userData.bodyId=d.id;let p={...d,group:g,mesh:m,position:g.position};if(t.set(d.id,p),d.orbit&&d.id!=="moon"){let _=Mr(d.orbit,d.color,d.id==="earth"?.33:.2,d.id==="mercury"?.075:.015);_.userData.baseOpacity=_.material.opacity,s.add(_)}if(d.id==="earth"){o=p;let _=bp(p,n,e);l=_.clouds,p.atmosphere=_.atmosphere}if(d.id==="venus"&&br(g,n,d.r,14198890,.35),d.id==="mars"&&br(g,n,d.r,15249559,.14),(d.id==="uranus"||d.id==="neptune")&&br(g,n,d.r,d.color,.45),d.id==="sun"&&(c=p,g.add(Kn(16756290,43,.45)),g.add(Kn(16765840,24,.55))),d.id==="saturn"){let _=new qn(d.r*1.22,d.r*2.3,180,1),M=_.attributes.uv,y=_.attributes.position;for(let v=0;v<y.count;v++){let E=Math.hypot(y.getX(v),y.getY(v));M.setXY(v,(E-d.r*1.22)/(d.r*1.08),.5)}M.needsUpdate=!0;let b=new hi({map:e["saturn-rings"],side:pt,transparent:!0,opacity:.97,depthWrite:!1,shininess:0}),S=new We(_,b);S.rotation.x=-Math.PI/2;let w=new ze;w.rotation.z=.466,m.rotation.z=.466,w.add(S),g.add(w),p.rings=S}d.id==="uranus"&&(m.rotation.z=1.7)}let u=Mr(3.9,7572387,.21,.07);r.add(u);let{station:f,satellites:h}=Sp(i,r,a);return{bodies:t,earth:o,clouds:l,sun:c,station:f,satellites:h,orbitGroup:s,earthOrbitGroup:r,earthSatellites:a}}var qb=`
 attribute float aSize;attribute vec3 aColor;varying vec3 vColor;uniform float uRatio;uniform float uPerspective;uniform bool uFixedProjection;uniform mat4 uProjection;
 #include <common>
 #include <logdepthbuf_pars_vertex>
 void main(){vColor=aColor;vec4 mv=viewMatrix*modelMatrix*vec4(position,1.0);gl_Position=(uFixedProjection?uProjection:projectionMatrix)*mv;gl_PointSize=clamp(aSize*uRatio*(uPerspective>0.0?uPerspective/max(1.0,-mv.z):1.0),.6,18.0);
 #include <logdepthbuf_vertex>
 }`,Yb=`
 varying vec3 vColor;uniform float uOpacity;
 #include <common>
 #include <logdepthbuf_pars_fragment>
 void main(){float d=length(gl_PointCoord-.5)*2.0;if(d>1.0)discard;float a=pow(1.0-d,2.0);gl_FragColor=vec4(vColor,uOpacity*a);
 #include <logdepthbuf_fragment>
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`;function qa(i,e,t,n,s,r){let a=new Ke;a.setAttribute("position",new Pe(i,3)),a.setAttribute("aColor",new Pe(e,3)),a.setAttribute("aSize",new Pe(t,1));let o=new Je({uniforms:{uFixedProjection:{value:!1},uProjection:{value:new ot},uRatio:{value:r},uPerspective:{value:n},uOpacity:{value:s}},vertexShader:qb,fragmentShader:Yb,transparent:!0,depthWrite:!1,blending:wt});return new ms(a,o)}function Tp(i,e,t){let n,s,r,a=[],o=[],l=[];for(let d=0;d<(jt()?4500:8e3);d++){let g=At()*Tn,x=At()*2-1,m=Math.sqrt(1-x*x);a.push(m*Math.cos(g)*11e4,x*11e4,m*Math.sin(g)*11e4);let p=new ge().setHSL(.53+At()*.17,.08+At()*.3,.5+At()*.42);o.push(p.r,p.g,p.b),l.push((At()<.035?3:1)*(At()*1.25+.65))}n=qa(a,o,l,0,.9,e),n.frustumCulled=!1,i.add(n);let c=[],u=[],f=[],h=jt()?36e3:65e3;for(let d=0;d<h;d++){let g=d<h*.19,x,m,p,_;if(g){_=Math.pow(At(),1.3)*4200;let S=At()*Tn;x=Math.cos(S)*_,m=Math.sin(S)*_,p=_r()*950*(1-_/5e3)}else{_=1500+Math.pow(At(),.68)*27e3;let w=Math.floor(At()*4)*Math.PI/2+Math.log(_/1600)*1.8+_r()*.16;x=Math.cos(w)*_+_r()*480,m=Math.sin(w)*_+_r()*480,p=_r()*(100+_*.012)}c.push(x,p,m);let M=Nn(_/25e3,0,1),y=new ge(16767144).lerp(new ge(8960236),M);At()>.85&&y.set(14411775);let b=.65+At()*1.4;u.push(y.r*b,y.g*b,y.b*b),f.push((g?3:2)+At()*3.5)}return s=qa(c,u,f,24e3,0,e),s.position.copy(t),s.rotation.x=.13,i.add(s),r=Kn(10944495,650,.7),i.add(r),{galaxy:s,backgroundStars:n,solarMarker:r}}function wp(i){let{bodies:e,earth:t,clouds:n,station:s,satellites:r,earthOrbitGroup:a,earthSatellites:o}=i,l=0,c=new I;return function(f,{paused:h,speed:d}){h||(l+=f*d);for(let p of e.values())if(p.id!=="moon"){if(p.orbit){let _=(p.phase||0)+l*Tn/p.period*.55,M=p.id==="mercury"?.075:.015;p.position.set(Math.cos(_)*p.orbit,Math.sin(_)*p.orbit*Math.sin(M),Math.sin(_)*p.orbit*Math.cos(M))}h||(p.mesh.rotation.y+=f*d*(p.id==="sun"?.015:p.id==="earth"?.035:.025))}let g=e.get("moon"),x=g.phase+l*.12;g.position.copy(t.position).add(c.set(Math.cos(x)*3.9,Math.sin(x)*3.9*Math.sin(.07),Math.sin(x)*3.9*Math.cos(.07))),a.position.copy(t.position),o.position.copy(t.position),h||(n.rotation.y+=f*d*.04);let m=l*.16+2.35;s.position.copy(t.position).add(c.set(Math.cos(m)*1.33,Math.sin(m)*1.33*Math.sin(.55),Math.sin(m)*1.33*Math.cos(.55))),h||(s.rotation.y+=f*d*.016);for(let p of r){let _=p.phase+l*p.velocity;p.group.position.set(Math.cos(_)*p.r,0,Math.sin(_)*p.r).applyQuaternion(p.quat),p.group.quaternion.copy(p.quat),p.group.rotateY(-_)}}}var jb=`
  varying vec2 vUv;
  uniform float uLength, uWidth, uBend;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vUv = uv;
    float t = uv.x;
    vec3 p = vec3(-t * uLength,
      (uv.y * 2.0 - 1.0) * uWidth * mix(0.08, 1.0, t) + t * t * uBend, 0.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    #include <logdepthbuf_vertex>
  }
`,$b=`
  varying vec2 vUv;
  uniform vec3 uColor;
  uniform float uOpacity, uTime;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  void main() {
    // Interpolation can overshoot at the edge; keep fractional powers finite
    // so invalid pixels never propagate through the bloom passes.
    float t = clamp(vUv.x, 0.0, 1.0);
    float side = abs(vUv.y * 2.0 - 1.0);
    float feather = exp(-side * side * 5.0) * (1.0 - smoothstep(0.65, 1.0, side));
    float wisps = 0.92 + 0.08 * sin(vUv.x * 32.0 + side * 9.0 - uTime * 2.0);
    float alpha = feather * pow(1.0 - t, 1.7) * wisps * uOpacity;
    gl_FragColor = vec4(mix(uColor, vec3(1.5, 1.4, 1.2), pow(1.0 - t, 8.0)), alpha);
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function _h(i,e,t,n,s,r){let a=new Je({uniforms:{uColor:{value:new ge(e)},uLength:{value:t},uWidth:{value:n},uBend:{value:s},uOpacity:{value:0},uTime:{value:0}},vertexShader:jb,fragmentShader:$b,transparent:!0,depthWrite:!1,blending:wt,side:pt,forceSinglePass:!0}),o=new We(i,a);return o.frustumCulled=!1,o.userData.opacity=r,o}function Zb(i,e){let t=i==="comet",n=new ze;n.name=`ambient-${i}`,n.visible=!1;let s=t?[_h(e,9228270,.64,.023,-.018,.64),_h(e,15782563,.48,.056,.075,.24)]:[_h(e,16759929,.28,.008,.004,.85)],r=Kn(t?10806254:16758905,t?.075:.043,0),a=Kn(t?15138047:16770232,t?.022:.019,0),o=new We(new fa(1,0),new hi({color:t?11322310:7692886,emissive:t?8102576:10242343,emissiveIntensity:.6,flatShading:!0,transparent:!0,opacity:0,depthWrite:!1}));return o.scale.set(t?.003:.006,.004,.0045),n.add(...s,r,o,a),{kind:i,group:n,tails:s,halo:r,core:a,rock:o}}function Ap(i,{random:e=Math.random}={}){let t=new ze;t.name="ambient-flybys",i.add(t);let n=new ui(1,1,40,1),s=["meteor","comet"].map(b=>Zb(b,n));t.add(...s.map(b=>b.group));let r=new I,a=new I,o=new _t,l=new I(0,0,1),c=globalThis.matchMedia?.("(prefers-reduced-motion: reduce)"),u=null,f=0,h=0,d=3+e()*3,g=null,x=0,m=0;function p(){u&&(u.group.visible=!1),u=null,f=0}function _(b){let S=e()<.42?"comet":"meteor";x>=2&&S===g&&(S=S==="comet"?"meteor":"comet"),x=S===g?x+1:1,g=S,u=s.find(D=>D.kind===S),h=S==="comet"?8+e()*4:2.2+e()*1.4,f=0,m++;let w=Math.min(95e3,b.far*.3),v=b.projectionMatrix.elements,E=w/v[5],T=v[5]/v[0],C=e()<.5?-1:1,R=.35+e()*.6;r.set((-C*1.2+v[8])*T,R+v[9],-w/E),a.set((C*1.85+v[8])*T,R-.45-e()*.8+v[9],r.z),o.setFromAxisAngle(l,Math.atan2(a.y-r.y,a.x-r.x)),t.quaternion.copy(b.quaternion),t.scale.setScalar(E),u.group.quaternion.copy(o),u.group.scale.setScalar(.85+e()*.3),u.group.visible=!0}function M(b,S,{paused:w=!1,enabled:v=!0,navigating:E=!1}={}){let T=v&&!c?.matches;if(t.visible=T,t.position.copy(S.position),!T||E){u&&(p(),d=3+e()*4);return}if(w)return;if(!u){if(d-=b,d>0)return;_(S)}f+=b;let C=Math.min(f/h,1);if(C>=1){p(),d=7+e()*13;return}let R=Se.smoothstep(C,0,.09)*(1-Se.smoothstep(C,.78,1));u.group.position.lerpVectors(r,a,C),u.rock.rotation.x+=b*.8,u.rock.rotation.y+=b*1.3,u.rock.material.opacity=R,u.halo.material.opacity=R*(u.kind==="comet"?.45:.32),u.core.material.opacity=R*.9;for(let D of u.tails)D.material.uniforms.uOpacity.value=R*D.userData.opacity,D.material.uniforms.uTime.value=f}function y(){t.removeFromParent(),n.dispose();for(let b of s)b.rock.geometry.dispose(),b.group.children.forEach(S=>S.material.dispose())}return{update:M,dispose:y,getState:()=>({active:u?.kind??null,progress:u?f/h:0,nextIn:u?null:Math.max(0,d),spawned:m,reducedMotion:!!c?.matches})}}var Rp=[{id:"whirlpool",kind:"galaxy",cn:"\u65CB\u6DA1\u661F\u7CFB",en:"WHIRLPOOL GALAXY \xB7 M51",index:"M51",type:"\u730E\u72AC\u5EA7\u65B9\u5411 / \u87BA\u65CB\u661F\u7CFB",parentId:"local-group",r:1,position:[-285e3,145e3,65e3],radius:24e3,viewDistance:62400,shape:"spiral",tilt:[.12,.4,-.18],arms:2,color:9618687,armTwist:1.25,armSpread:.12,bulgeFraction:.1,diameter:"\u7EA6 3100 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u661F\u7CFB\u7F16\u53F7",value2:"M51",unit2:"",desc:"\u730E\u72AC\u5EA7\u65B9\u5411\u7684\u4E00\u5EA7\u87BA\u65CB\u661F\u7CFB\uFF0C\u4F4D\u4E8E\u672C\u661F\u7CFB\u7FA4\u4E4B\u5916\u3002\u6E05\u6670\u7684\u65CB\u81C2\u4E2D\u4EA4\u7EC7\u7740\u5C18\u57C3\u3001\u6C14\u4F53\u548C\u5E74\u8F7B\u661F\u56E2\uFF1B\u5B83\u4E0E\u90BB\u8FD1\u661F\u7CFB NGC 5195 \u7684\u76F8\u4E92\u4F5C\u7528\uFF0C\u53EF\u80FD\u5E2E\u52A9\u5851\u9020\u4E86\u9192\u76EE\u7684\u65CB\u81C2\u3002",sourceUrl:"https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-51/",sourceLabel:"NASA Hubble \xB7 \u65CB\u6DA1\u661F\u7CFB M51",modelStatus:"confirmed",appearance:"\u84DD\u767D\u53CC\u65CB\u81C2\u3001\u7EC6\u957F\u5C18\u5E26\u4E0E\u7C89\u8272\u6052\u661F\u8BDE\u751F\u533A"},{id:"bode",kind:"galaxy",cn:"\u6CE2\u5FB7\u661F\u7CFB",en:"BODE\u2019S GALAXY \xB7 M81",index:"M81",type:"\u5927\u718A\u5EA7\u65B9\u5411 / \u87BA\u65CB\u661F\u7CFB",parentId:"local-group",r:1,position:[-175e3,-85e3,305e3],radius:3e4,viewDistance:78e3,shape:"spiral",tilt:[.38,-.25,.22],arms:2,color:11323109,armTwist:2.2,armSpread:.14,bulgeFraction:.27,diameter:"\u7EA6 1160 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u5927\u718A\u5EA7",unit2:"",desc:"M81 \u662F\u5927\u718A\u5EA7\u65B9\u5411\u660E\u4EAE\u7684\u87BA\u65CB\u661F\u7CFB\uFF0C\u4E0E\u96EA\u8304\u661F\u7CFB M82 \u76F8\u90BB\u3002\u5BBD\u9614\u6838\u7403\u91CC\u805A\u96C6\u7740\u8F83\u8001\u3001\u504F\u7EA2\u7684\u6052\u661F\uFF0C\u5E74\u8F7B\u84DD\u661F\u52FE\u52D2\u51FA\u65CB\u81C2\uFF0C\u7EC6\u5BC6\u5C18\u5E26\u4E00\u76F4\u5EF6\u4F38\u5411\u4E2D\u5FC3\u3002",sourceUrl:"https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-81/",sourceLabel:"NASA Hubble \xB7 \u6CE2\u5FB7\u661F\u7CFB M81",modelStatus:"confirmed",appearance:"\u6696\u91D1\u5BBD\u6838\u7403\u3001\u8212\u5C55\u84DD\u767D\u65CB\u81C2\u4E0E\u7EC6\u5BC6\u5C18\u5E26"},{id:"cigar",kind:"galaxy",cn:"\u96EA\u8304\u661F\u7CFB",en:"CIGAR GALAXY \xB7 M82",index:"M82",type:"\u5927\u718A\u5EA7\u65B9\u5411 / \u661F\u66B4\u661F\u7CFB",parentId:"local-group",r:1,position:[-23e4,-45e3,355e3],radius:14e3,viewDistance:39200,shape:"irregular",profile:"cigar",axisRatio:.24,tilt:[.65,.1,.28],arms:0,color:15842469,diameter:"\u7EA6 1200 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u89C2\u6D4B\u7279\u5F81",value2:"\u5267\u70C8\u6052\u661F\u5F62\u6210",unit2:"",desc:"\u8FD9\u5EA7\u4FA7\u5411\u5C55\u5F00\u7684\u87BA\u65CB\u661F\u7CFB\u56E0\u72ED\u957F\u5916\u89C2\u5F97\u540D\uFF0C\u6B63\u7ECF\u5386\u5267\u70C8\u7684\u6052\u661F\u5F62\u6210\uFF0C\u56E0\u800C\u88AB\u79F0\u4E3A\u661F\u66B4\u661F\u7CFB\u3002\u5B83\u4E0E M81 \u7684\u5F15\u529B\u76F8\u4E92\u4F5C\u7528\u6270\u52A8\u4E86\u6C14\u4F53\uFF0C\u5E74\u8F7B\u6052\u661F\u9A71\u52A8\u7684\u661F\u7CFB\u98CE\u5411\u661F\u76D8\u5916\u6269\u6563\u3002",sourceUrl:"https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-82/",sourceLabel:"NASA Hubble \xB7 \u96EA\u8304\u661F\u7CFB M82",modelStatus:"confirmed",appearance:"\u72ED\u957F\u6696\u767D\u661F\u76D8\u3001\u7834\u788E\u5C18\u5E26\u4E0E\u7EA2\u8272\u5916\u6D41\u5149\u4E91"},{id:"sombrero",kind:"galaxy",cn:"\u8349\u5E3D\u661F\u7CFB",en:"SOMBRERO GALAXY \xB7 M104",index:"M104",type:"\u5BA4\u5973\u5EA7\u65B9\u5411 / \u8FD1\u4FA7\u89C6\u87BA\u65CB\u661F\u7CFB",parentId:"local-group",r:1,position:[28e4,11e4,235e3],radius:25e3,viewDistance:7e4,shape:"spiral",profile:"lenticular",axisRatio:.2,tilt:[1.3,.12,-.24],arms:2,color:15258800,diameter:"\u7EA6 3000 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u661F\u7CFB\u7F16\u53F7",value2:"M104",unit2:"",desc:"\u6211\u4EEC\u51E0\u4E4E\u4ECE\u4FA7\u9762\u89C2\u770B\u8FD9\u5EA7\u87BA\u65CB\u661F\u7CFB\u3002\u660E\u4EAE\u9686\u8D77\u7684\u6838\u7403\u4E0E\u73AF\u7ED5\u661F\u76D8\u7684\u6DF1\u8272\u5C18\u5E26\u7EC4\u6210\u8349\u5E3D\u822C\u7684\u8F6E\u5ED3\uFF1B\u54C8\u52C3\u4E0E\u97E6\u5E03\u5728\u4E0D\u540C\u6CE2\u6BB5\u4E0B\uFF0C\u63ED\u793A\u4E86\u6052\u661F\u5149\u8292\u548C\u5C18\u57C3\u7684\u4E0D\u540C\u9762\u8C8C\u3002",sourceUrl:"https://science.nasa.gov/missions/webb/nasas-webb-rounds-out-picture-of-sombrero-galaxys-disk/",sourceLabel:"NASA Webb \xB7 \u8349\u5E3D\u661F\u7CFB\u661F\u76D8",modelStatus:"confirmed",appearance:"\u4E73\u91D1\u9686\u8D77\u6838\u7403\u3001\u8584\u5706\u76D8\u4E0E\u73AF\u72B6\u6DF1\u8272\u5C18\u5E26"},{id:"centaurus-a",kind:"galaxy",cn:"\u534A\u4EBA\u9A6C\u5EA7 A",en:"CENTAURUS A \xB7 NGC 5128",index:"NGC 5128",type:"\u534A\u4EBA\u9A6C\u5EA7\u65B9\u5411 / \u7279\u6B8A\u692D\u5706\u661F\u7CFB",parentId:"local-group",r:1,position:[35e3,-165e3,-325e3],radius:28e3,viewDistance:78400,shape:"elliptical",profile:"dust-lane",axisRatio:.82,tilt:[.32,-.22,-.48],arms:0,color:15125680,diameter:"\u7EA6 1200 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u89C2\u6D4B\u7279\u5F81",value2:"\u5F3A\u5C04\u7535\u8F90\u5C04",unit2:"",desc:"\u672C\u661F\u7CFB\u7FA4\u5916\u7684\u4E00\u5EA7\u7279\u6B8A\u692D\u5706\u661F\u7CFB\uFF0C\u4E5F\u662F\u8457\u540D\u5C04\u7535\u6E90\u3002\u5BBD\u9614\u800C\u6591\u9A73\u7684\u5C18\u5E26\u6A2A\u7A7F\u53E4\u8001\u6052\u661F\u7684\u67D4\u5149\uFF0C\u6C14\u4F53\u3001\u5C18\u57C3\u4E0E\u5E74\u8F7B\u661F\u56E2\u7684\u5206\u5E03\u4E3A\u8FC7\u53BB\u7684\u661F\u7CFB\u5408\u5E76\u63D0\u4F9B\u4E86\u8BC1\u636E\u3002",sourceUrl:"https://www.hq.eso.org/public/news/eso1221/",sourceLabel:"ESO \xB7 \u534A\u4EBA\u9A6C\u5EA7 A \u6DF1\u5EA6\u89C2\u6D4B",modelStatus:"confirmed",appearance:"\u6696\u767D\u692D\u5706\u661F\u5149\u3001\u6A2A\u8D2F\u6838\u5FC3\u7684\u5BBD\u5C18\u5E26\u4E0E\u6DE1\u7EA2\u4E91\u56E2"},{id:"m87",kind:"galaxy",cn:"M87 \u661F\u7CFB",en:"MESSIER 87 \xB7 VIRGO A",index:"M87",type:"\u5BA4\u5973\u5EA7\u661F\u7CFB\u56E2 / \u5DE8\u692D\u5706\u661F\u7CFB",parentId:"local-group",r:1,position:[385e3,-45e3,55e3],radius:36e3,viewDistance:100800,shape:"elliptical",profile:"giant",axisRatio:.9,tilt:[-.2,.35,.12],arms:0,color:15783341,diameter:"\u7EA6 5400 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u6240\u5728\u661F\u7CFB\u56E2",value2:"\u5BA4\u5973\u5EA7",unit2:"",desc:"\u5BA4\u5973\u5EA7\u661F\u7CFB\u56E2\u4E2D\u7684\u5DE8\u5927\u692D\u5706\u661F\u7CFB\uFF0C\u5E73\u6ED1\u661F\u5149\u5916\u5206\u5E03\u7740\u6570\u91CF\u4F17\u591A\u7684\u7403\u72B6\u661F\u56E2\u3002\u4E2D\u592E\u8D85\u5927\u8D28\u91CF\u9ED1\u6D1E\u5468\u56F4\u7684\u6D3B\u52A8\u9A71\u52A8\u4E00\u675F\u9AD8\u901F\u55B7\u6D41\uFF0C\u54C8\u52C3\u89C2\u6D4B\u5230\u4E86\u5B83\u4F38\u5411\u661F\u7CFB\u5916\u4FA7\u7684\u84DD\u8272\u5149\u8292\u3002",sourceUrl:"https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-87/",sourceLabel:"NASA Hubble \xB7 M87 \u4E0E\u4E2D\u592E\u55B7\u6D41",modelStatus:"confirmed",appearance:"\u5BBD\u9614\u91D1\u767D\u692D\u5706\u661F\u6655\u4E0E\u660E\u4EAE\u6838\u5FC3\uFF1B\u672C\u6A21\u578B\u672A\u5355\u72EC\u7ED8\u5236\u55B7\u6D41"}];var Cp=[{id:"polaris",cn:"\u5317\u6781\u661F A",en:"POLARIS Aa",index:"\u03B1 UMI Aa",type:"\u94F6\u6CB3\u7CFB / \u9020\u7236\u53D8\u661F",position:[-16e3,1700,-11800],r:23,surfaceStyle:"gold-star",color:16770998,diameter:"\u9020\u7236\u53D8\u661F",stat1:"\u6052\u661F\u7C7B\u578B",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u5C0F\u718A\u5EA7",desc:"\u4F4D\u4E8E\u5317\u5929\u6781\u9644\u8FD1\uFF0C\u662F\u5C0F\u718A\u5EA7\u4E2D\u719F\u6089\u7684\u6307\u5317\u4EAE\u661F\u3002\u5317\u6781\u661F\u5176\u5B9E\u5C5E\u4E8E\u4E09\u661F\u7CFB\u7EDF\uFF1B\u672C\u6B21\u63A2\u8BBF\u7684\u662F\u8089\u773C\u6240\u89C1\u7684\u4E3B\u8981\u6210\u5458 Polaris Aa\uFF0C\u4E00\u9897\u4F1A\u968F\u8109\u52A8\u6539\u53D8\u4EAE\u5EA6\u7684\u9020\u7236\u53D8\u661F\u3002",sourceUrl:"https://www.eso.org/public/blog/probing-polaris/",sourceLabel:"ESO \xB7 \u5317\u6781\u661F\u4E0E\u9020\u7236\u53D8\u661F",appearance:"\u67D4\u548C\u91D1\u767D\u661F\u9762\u3001\u6D45\u6696\u9897\u7C92\u4E0E\u660E\u4EAE\u5916\u6655"},{id:"altair",cn:"\u725B\u90CE\u661F",en:"ALTAIR",index:"\u03B1 AQL",type:"\u94F6\u6CB3\u7CFB / \u84DD\u767D\u4E3B\u5E8F\u661F",position:[-7300,250,-8600],r:12,surfaceStyle:"blue-star",color:13690879,diameter:"\u7EA6 17",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u5929\u9E70\u5EA7",desc:"\u4E0E\u7EC7\u5973\u661F\u3001\u5929\u6D25\u56DB\u7EC4\u6210\u590F\u5B63\u5927\u4E09\u89D2\uFF0C\u662F\u5929\u9E70\u5EA7\u7684\u660E\u4EAE\u6052\u661F\u3002\u5B83\u81EA\u8F6C\u5F88\u5FEB\uFF0C\u771F\u5B9E\u661F\u4F53\u7684\u8D64\u9053\u56E0\u6B64\u9F13\u8D77\uFF1B\u5929\u6587\u5B66\u5BB6\u901A\u8FC7\u5E72\u6D89\u6210\u50CF\u89C2\u6D4B\u5230\u4E86\u5B83\u7684\u5F62\u72B6\u4E0E\u661F\u9762\u4EAE\u5EA6\u5DEE\u5F02\u3002",sourceUrl:"https://science.nasa.gov/solar-system/skywatching/night-sky-network/summer-triangle-corner-altair/",sourceLabel:"NASA \xB7 \u725B\u90CE\u661F\u4E0E\u590F\u5B63\u5927\u4E09\u89D2",appearance:"\u6E05\u900F\u84DD\u767D\u5149\u7403\u4E0E\u51B0\u84DD\u5916\u7F18"},{id:"arcturus",cn:"\u5927\u89D2\u661F",en:"ARCTURUS",index:"\u03B1 BOO",type:"\u94F6\u6CB3\u7CFB / \u7EA2\u5DE8\u661F",position:[-14200,820,11800],r:21,surfaceStyle:"gold-star",color:16758903,diameter:"\u7EA6 37",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u7267\u592B\u5EA7",desc:"\u6CBF\u5317\u6597\u6597\u67C4\u7684\u5F27\u7EBF\u5EF6\u4F38\uFF0C\u53EF\u4EE5\u627E\u5230\u8FD9\u9897\u6E29\u6696\u7684\u6A59\u8272\u4EAE\u661F\u3002\u5927\u89D2\u661F\u5DF2\u7ECF\u8FDB\u5165\u7EA2\u5DE8\u661F\u9636\u6BB5\uFF0C\u81A8\u80C0\u7684\u5916\u5C42\u6BD4\u592A\u9633\u8868\u9762\u66F4\u51B7\uFF1B\u5728\u753B\u9762\u4E2D\u53EF\u8FD1\u770B\u5B83\u67D4\u548C\u7684\u6A59\u91D1\u5149\u7403\u3002",sourceUrl:"https://science.nasa.gov/universe/stars/types/",sourceLabel:"NASA \xB7 \u6052\u661F\u7C7B\u578B\u4E0E\u5927\u89D2\u661F",appearance:"\u6A59\u91D1\u8272\u5DE8\u661F\u5149\u7403\u4E0E\u8212\u7F13\u5BF9\u6D41\u6591\u7EB9"},{id:"aldebaran",cn:"\u6BD5\u5BBF\u4E94",en:"ALDEBARAN",index:"\u03B1 TAU",type:"\u94F6\u6CB3\u7CFB / \u7EA2\u5DE8\u661F",position:[-28800,-450,9700],r:23,surfaceStyle:"red-star",color:16753523,diameter:"\u7EA6 65",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u91D1\u725B\u5EA7",desc:"\u91D1\u725B\u5EA7\u773C\u775B\u4F4D\u7F6E\u7684\u6A59\u7EA2\u8272\u5DE8\u661F\u3002\u5B83\u770B\u4E0A\u53BB\u843D\u5728 V \u5B57\u5F62\u7684\u6BD5\u661F\u56E2\u4E2D\uFF0C\u5B9E\u9645\u4E0A\u6BD4\u661F\u56E2\u66F4\u9760\u8FD1\u5730\u7403\uFF1B\u8FD9\u9897\u524D\u666F\u6052\u661F\u4E0E\u8FDC\u5904\u661F\u56E2\u6070\u597D\u4F4D\u4E8E\u76F8\u8FD1\u7684\u89C6\u7EBF\u65B9\u5411\u3002",sourceUrl:"https://nightsky.jpl.nasa.gov/documents/787/ObserverCardsRed1.pdf",sourceLabel:"NASA / JPL \xB7 \u7EA2\u5DE8\u661F\u89C2\u6D4B\u5361",appearance:"\u6DF1\u6A59\u7EA2\u5149\u7403\u3001\u6696\u8272\u9897\u7C92\u4E0E\u67D4\u8F6F\u661F\u6655"},{id:"deneb",cn:"\u5929\u6D25\u56DB",en:"DENEB",index:"\u03B1 CYG",type:"\u94F6\u6CB3\u7CFB / \u84DD\u767D\u8D85\u5DE8\u661F",position:[-27200,1050,-11100],r:29,surfaceStyle:"blue-star",color:11456511,diameter:"\u84DD\u767D\u8D85\u5DE8\u661F",stat1:"\u6052\u661F\u7C7B\u578B",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u5929\u9E45\u5EA7",desc:"\u6807\u8BB0\u7740\u5929\u9E45\u5EA7\u7684\u5C3E\u90E8\uFF0C\u4E5F\u662F\u590F\u5B63\u5927\u4E09\u89D2\u7684\u4E00\u89D2\u3002\u5929\u6D25\u56DB\u662F\u4E00\u9897\u660E\u4EAE\u7684\u84DD\u767D\u8D85\u5DE8\u661F\uFF1B\u6CBF\u5B83\u6240\u5728\u7684\u5929\u9E45\u5EA7\u671B\u53BB\uFF0C\u53EF\u4EE5\u770B\u5230\u94F6\u6CB3\u7A7F\u8FC7\u5BC6\u96C6\u661F\u91CE\u7684\u65B9\u5411\u3002",sourceUrl:"https://www.jpl.nasa.gov/videos/whats-up-october-2021/",sourceLabel:"NASA / JPL \xB7 \u5929\u6D25\u56DB\u4E0E\u7EC7\u5973\u661F",appearance:"\u5BBD\u9614\u84DD\u767D\u661F\u9762\u4E0E\u51B7\u8272\u8F89\u5149"},{id:"canopus",cn:"\u5357\u8239\u4E8C",en:"CANOPUS",index:"\u03B1 CAR",type:"\u94F6\u6CB3\u7CFB / \u822A\u5929\u5BFC\u822A\u6052\u661F",position:[-31900,-950,-4600],r:26,surfaceStyle:"gold-star",color:16773071,diameter:"\u8239\u5E95\u5EA7",stat1:"\u6240\u5C5E\u661F\u5EA7",stat2:"\u822A\u5929\u7528\u9014",value2:"\u59FF\u6001\u53C2\u8003",desc:"\u53C8\u79F0\u8001\u4EBA\u661F\uFF0C\u662F\u5357\u65B9\u5929\u7A7A\u4E2D\u9192\u76EE\u7684\u4EAE\u661F\u3002\u6C34\u624B 7 \u53F7\u66FE\u4F7F\u7528\u661F\u654F\u611F\u5668\u9501\u5B9A\u5357\u8239\u4E8C\uFF0C\u5E76\u4E0E\u592A\u9633\u4E00\u8D77\u4F5C\u4E3A\u98DE\u884C\u59FF\u6001\u53C2\u8003\uFF0C\u8BA9\u8FD9\u9897\u9065\u8FDC\u6052\u661F\u53C2\u4E0E\u4E86\u4EBA\u7C7B\u7684\u706B\u661F\u63A2\u7D22\u3002",sourceUrl:"https://www.jpl.nasa.gov/news/mariner-7-to-complete-star-acquisition-sequence/",sourceLabel:"NASA / JPL \xB7 \u6C34\u624B 7 \u53F7\u4E0E\u5357\u8239\u4E8C",appearance:"\u660E\u4EAE\u6696\u767D\u661F\u9762\u4E0E\u6DE1\u91D1\u7EC6\u6655"},{id:"antares",cn:"\u5FC3\u5BBF\u4E8C A",en:"ANTARES A",index:"\u03B1 SCO A",type:"\u94F6\u6CB3\u7CFB / \u7EA2\u8D85\u5DE8\u661F",position:[-21100,350,-15500],r:30,surfaceStyle:"red-star",color:16744790,diameter:"\u7EA2\u8D85\u5DE8\u661F",stat1:"\u6052\u661F\u7C7B\u578B",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u5929\u874E\u5EA7",desc:"\u4F4D\u4E8E\u5929\u874E\u5EA7\u5FC3\u810F\u4F4D\u7F6E\uFF0C\u95EA\u8000\u7740\u9C9C\u660E\u7684\u6A59\u7EA2\u8272\u5149\u8292\u3002\u8FD9\u91CC\u5C55\u793A\u4E3B\u661F\u5FC3\u5BBF\u4E8C A\uFF1BESO \u7684\u751A\u5927\u671B\u8FDC\u955C\u5E72\u6D89\u4EEA\u66FE\u89E3\u6790\u5B83\u7684\u661F\u9762\u4E0E\u5927\u6C14\u8FD0\u52A8\uFF0C\u63ED\u793A\u5E9E\u5927\u5916\u5C42\u4E2D\u590D\u6742\u7684\u6C14\u4F53\u6D41\u52A8\u3002",sourceUrl:"https://www.eso.org/public/news/eso1726/",sourceLabel:"ESO \xB7 \u5FC3\u5BBF\u4E8C\u661F\u9762\u4E0E\u5927\u6C14\u89C2\u6D4B",appearance:"\u5BBD\u5927\u6A59\u7EA2\u5149\u7403\u4E0E\u7FFB\u6D8C\u7684\u6DF1\u6D45\u5BF9\u6D41\u6591"},{id:"barnard-star",cn:"\u5DF4\u7EB3\u5FB7\u661F",en:"BARNARD\u2019S STAR",index:"GJ 699",type:"\u94F6\u6CB3\u7CFB / \u7EA2\u77EE\u661F",position:[-6100,-120,6100],r:5.5,surfaceStyle:"red-star",color:16741972,diameter:"\u7EA6 6",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u86C7\u592B\u5EA7",desc:"\u592A\u9633\u9644\u8FD1\u7684\u4E00\u9897\u6697\u6DE1\u7EA2\u77EE\u661F\uFF0C\u4F4D\u4E8E\u86C7\u592B\u5EA7\u65B9\u5411\uFF0C\u9700\u8981\u501F\u52A9\u671B\u8FDC\u955C\u89C2\u5BDF\u3002\u5B83\u4E0E\u592A\u9633\u7684\u8DDD\u79BB\u53EA\u6709\u7EA6 6 \u5149\u5E74\uFF0C\u5929\u6587\u5B66\u5BB6\u957F\u671F\u6D4B\u91CF\u5B83\u7684\u5FAE\u5C0F\u8FD0\u52A8\uFF0C\u5BFB\u627E\u56F4\u7ED5\u5B83\u8FD0\u884C\u7684\u884C\u661F\u3002",sourceUrl:"https://www.eso.org/public/news/eso2414/",sourceLabel:"ESO \xB7 \u5DF4\u7EB3\u5FB7\u661F\u89C2\u6D4B",appearance:"\u5C0F\u5DE7\u7684\u6697\u7EA2\u661F\u9762\u4E0E\u67D4\u548C\u6A59\u8272\u5916\u6655"}].map(i=>({kind:"star",modelStatus:"confirmed",parentId:"galaxy",parentGalaxy:"galaxy",unit1:"",unit2:"",...i}));var ns=[{id:"andromeda",kind:"galaxy",cn:"\u4ED9\u5973\u5EA7\u661F\u7CFB",en:"ANDROMEDA \xB7 M31",index:"M31",type:"\u672C\u661F\u7CFB\u7FA4 / \u87BA\u65CB\u661F\u7CFB",parentId:"local-group",r:1,position:[24e4,35e3,-18e4],radius:38e3,viewDistance:98800,shape:"spiral",tilt:[.34,.18,-.26],arms:2,color:10992639,diameter:"\u7EA6 250 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u661F\u7CFB\u7F16\u53F7",value2:"M31",unit2:"",desc:"\u8DDD\u79BB\u6211\u4EEC\u7EA6 250 \u4E07\u5149\u5E74\u7684\u87BA\u65CB\u661F\u7CFB\uFF0C\u660E\u4EAE\u7684\u4E2D\u592E\u6838\u7403\u5916\u5C55\u5F00\u5BBD\u9614\u661F\u76D8\u3002\u98DE\u5165\u65CB\u81C2\uFF0C\u5BFB\u627E AF And \u548C AE And \u8FD9\u4E24\u9897\u660E\u4EAE\u7684\u84DD\u53D8\u661F\u3002",sourceUrl:"https://www.jpl.nasa.gov/images/pia15416-andromeda/",sourceLabel:"NASA / JPL \xB7 \u4ED9\u5973\u5EA7\u661F\u7CFB",modelStatus:"confirmed",appearance:"\u6696\u767D\u6838\u7403\u3001\u51B7\u84DD\u53CC\u65CB\u81C2\u4E0E\u7A00\u758F\u5C18\u5E26"},{id:"triangulum",kind:"galaxy",cn:"\u4E09\u89D2\u5EA7\u661F\u7CFB",en:"TRIANGULUM \xB7 M33",index:"M33",type:"\u672C\u661F\u7CFB\u7FA4 / \u87BA\u65CB\u661F\u7CFB",parentId:"local-group",r:1,position:[-21e4,-18e3,-21e4],radius:22e3,viewDistance:57200,shape:"spiral",tilt:[-.2,.7,.17],arms:3,color:8903911,diameter:"\u7EA6 300 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u661F\u7CFB\u7F16\u53F7",value2:"M33",unit2:"",desc:"\u4E09\u89D2\u5EA7\u661F\u7CFB\u62E5\u6709\u758F\u6717\u7684\u87BA\u65CB\u7ED3\u6784\uFF0C\u662F\u672C\u661F\u7CFB\u7FA4\u7684\u4E3B\u8981\u6210\u5458\u4E4B\u4E00\u3002\u6052\u661F\u8BDE\u751F\u533A\u70B9\u4EAE\u661F\u76D8\uFF0C\u7F57\u9A6C\u8BFA\u4E4B\u661F\u5219\u5C55\u793A\u7740\u5927\u8D28\u91CF\u6052\u661F\u7684\u591A\u53D8\u9762\u8C8C\u3002",sourceUrl:"https://www.nasa.gov/image-article/triangulum-galaxy-3/",sourceLabel:"NASA \xB7 \u4E09\u89D2\u5EA7\u661F\u7CFB",modelStatus:"confirmed",appearance:"\u9752\u84DD\u758F\u65CB\u81C2\u3001\u8F83\u5C0F\u6838\u7403\u4E0E\u7C89\u8272\u6052\u661F\u8BDE\u751F\u533A"},{id:"lmc",kind:"galaxy",cn:"\u5927\u9EA6\u54F2\u4F26\u661F\u4E91",en:"LARGE MAGELLANIC CLOUD",index:"LMC",type:"\u672C\u661F\u7CFB\u7FA4 / \u4E0D\u89C4\u5219\u77EE\u661F\u7CFB",parentId:"local-group",r:1,position:[1e5,-65e3,8e4],radius:11e3,viewDistance:28600,shape:"irregular",tilt:[.16,-.35,.31],arms:0,color:9555949,diameter:"\u7EA6 16 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u8457\u540D\u533A\u57DF",value2:"\u8718\u86DB\u661F\u4E91",unit2:"",desc:"\u540D\u5B57\u53EB\u661F\u4E91\uFF0C\u5176\u5B9E\u662F\u4E00\u5EA7\u90BB\u8FD1\u7684\u77EE\u661F\u7CFB\u3002\u6563\u5F00\u7684\u661F\u5149\u4E0E\u6C14\u4F53\u4E91\u4E2D\uFF0C\u85CF\u7740 R136a1 \u548C\u88AB\u5C18\u57C3\u5305\u56F4\u7684 WOH G64 \u7B49\u5F15\u4EBA\u6CE8\u76EE\u7684\u5927\u8D28\u91CF\u6052\u661F\u3002",sourceUrl:"https://science.nasa.gov/earth/earth-observatory/the-galaxy-next-door/",sourceLabel:"NASA \xB7 \u5927\u9EA6\u54F2\u4F26\u661F\u4E91",modelStatus:"confirmed",appearance:"\u4E0D\u5BF9\u79F0\u84DD\u767D\u661F\u7FA4\u3001\u4E2D\u592E\u77ED\u68D2\u4E0E\u504F\u7F6E\u7C89\u8272\u4E91\u56E2"},{id:"smc",kind:"galaxy",cn:"\u5C0F\u9EA6\u54F2\u4F26\u661F\u4E91",en:"SMALL MAGELLANIC CLOUD",index:"SMC",type:"\u672C\u661F\u7CFB\u7FA4 / \u4E0D\u89C4\u5219\u77EE\u661F\u7CFB",parentId:"local-group",r:1,position:[16e4,-95e3,11e4],radius:7e3,viewDistance:18200,shape:"irregular",tilt:[-.24,.2,-.3],arms:0,color:11909615,diameter:"\u7EA6 20 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u6052\u661F\u76EE\u7684\u5730",value2:"HD 5980",unit2:"",desc:"\u4E00\u5EA7\u4F4D\u4E8E\u94F6\u6CB3\u9644\u8FD1\u7684\u4E0D\u89C4\u5219\u77EE\u661F\u7CFB\uFF0C\u661F\u5149\u5448\u677E\u6563\u7684\u4E91\u72B6\u5206\u5E03\u3002\u9760\u8FD1 NGC 346 \u4E00\u5E26\uFF0C\u63A2\u7D22\u62E5\u6709\u5F3A\u70C8\u6052\u661F\u98CE\u7684 HD 5980 \u5927\u8D28\u91CF\u591A\u661F\u7CFB\u7EDF\u3002",sourceUrl:"https://science.nasa.gov/photojournal/little-galaxy-explored/",sourceLabel:"NASA \xB7 \u5C0F\u9EA6\u54F2\u4F26\u661F\u4E91",modelStatus:"confirmed",appearance:"\u6DE1\u7D2B\u758F\u6563\u661F\u7FA4\u4E0E\u4E0D\u5BF9\u79F0\u7FBD\u7FFC"},{id:"m32",kind:"galaxy",cn:"M32 \u661F\u7CFB",en:"MESSIER 32 \xB7 NGC 221",index:"M32",type:"\u672C\u661F\u7CFB\u7FA4 / \u7D27\u51D1\u692D\u5706\u661F\u7CFB",parentId:"local-group",r:1,position:[284e3,16e3,-151e3],radius:7e3,viewDistance:18200,shape:"elliptical",profile:"compact",axisRatio:.76,tilt:[.2,-.15,.42],arms:0,color:16768180,diameter:"\u7EA6 250 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u90BB\u8FD1\u4E3B\u661F\u7CFB",value2:"\u4ED9\u5973\u5EA7",unit2:"",desc:"\u4ED9\u5973\u5EA7\u65C1\u7684\u4E00\u5EA7\u7D27\u51D1\u692D\u5706\u661F\u7CFB\uFF0C\u5BC6\u96C6\u7684\u6052\u661F\u5F62\u6210\u5E73\u6ED1\u800C\u660E\u4EAE\u7684\u6838\u5FC3\u3002\u5B83\u6CA1\u6709\u87BA\u65CB\u661F\u7CFB\u90A3\u6837\u7684\u65CB\u81C2\uFF0C\u4E2D\u592E\u85CF\u7740\u4E00\u9897\u6570\u767E\u4E07\u592A\u9633\u8D28\u91CF\u91CF\u7EA7\u7684\u9ED1\u6D1E\u3002",sourceUrl:"https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-32/",sourceLabel:"NASA Hubble \xB7 M32",modelStatus:"confirmed",appearance:"\u7D27\u51D1\u6696\u91D1\u6838\u7403\u4E0E\u5E73\u6ED1\u692D\u5706\u661F\u5149"},{id:"m110",kind:"galaxy",cn:"M110 \u661F\u7CFB",en:"MESSIER 110 \xB7 NGC 205",index:"M110",type:"\u672C\u661F\u7CFB\u7FA4 / \u77EE\u692D\u5706\u661F\u7CFB",parentId:"local-group",r:1,position:[203e3,76e3,-22e4],radius:1e4,viewDistance:26e3,shape:"elliptical",profile:"diffuse",axisRatio:.55,tilt:[-.22,.3,-.48],arms:0,color:15193529,diameter:"\u7EA6 270 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u53E6\u4E00\u7F16\u53F7",value2:"NGC 205",unit2:"",desc:"\u4E5F\u79F0 NGC 205\uFF0C\u662F\u4ED9\u5973\u5EA7\u661F\u7CFB\u7684\u536B\u661F\u661F\u7CFB\u3002\u67D4\u548C\u3001\u62C9\u957F\u7684\u692D\u5706\u8F6E\u5ED3\u4E2D\u5206\u5E03\u7740\u53E4\u8001\u6052\u661F\u548C\u7403\u72B6\u661F\u56E2\uFF0C\u4E2D\u5FC3\u4E5F\u53D1\u73B0\u4E86\u5E74\u8F7B\u84DD\u661F\u7684\u8E2A\u8FF9\u3002",sourceUrl:"https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-110/",sourceLabel:"NASA Hubble \xB7 M110",modelStatus:"confirmed",appearance:"\u8212\u5C55\u7684\u6D45\u91D1\u692D\u5706\u661F\u7FA4\u4E0E\u6DE1\u767D\u6838\u5FC3"},{id:"ngc6822",kind:"galaxy",cn:"\u5DF4\u7EB3\u5FB7\u661F\u7CFB",en:"BARNARD\u2019S GALAXY \xB7 NGC 6822",index:"NGC 6822",type:"\u672C\u661F\u7CFB\u7FA4 / \u4E0D\u89C4\u5219\u77EE\u661F\u7CFB",parentId:"local-group",r:1,position:[-9e4,65e3,155e3],radius:9e3,viewDistance:23400,shape:"irregular",tilt:[.28,-.5,-.12],arms:0,color:10410182,diameter:"\u7EA6 160 \u4E07",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u661F\u7CFB\u7F16\u53F7",value2:"NGC 6822",unit2:"",desc:"\u4E00\u5EA7\u8DDD\u79BB\u94F6\u6CB3\u8F83\u8FD1\u7684\u4E0D\u89C4\u5219\u77EE\u661F\u7CFB\uFF0C\u4E5F\u662F\u672C\u661F\u7CFB\u7FA4\u6210\u5458\u3002\u677E\u6563\u7684\u661F\u7FA4\u4E0E\u6052\u661F\u8BDE\u751F\u533A\u4EA4\u7EC7\uFF0C\u8F83\u4F4E\u7684\u91CD\u5143\u7D20\u542B\u91CF\u8BA9\u5B83\u6210\u4E3A\u7814\u7A76\u65E9\u671F\u661F\u7CFB\u6F14\u5316\u7684\u90BB\u8FD1\u7A97\u53E3\u3002",sourceUrl:"https://www.esa.int/Science_Exploration/Space_Science/Euclid/Euclid_s_view_of_irregular_galaxy_NGC_6822",sourceLabel:"ESA Euclid \xB7 NGC 6822",modelStatus:"confirmed",appearance:"\u9752\u767D\u677E\u6563\u661F\u56E2\u4E0E\u4E0D\u89C4\u5219\u6C14\u4F53\u4E91"}];ns.push(...Rp);var bh=ns.length+1,Pp={id:"local-group",kind:"group",cn:"\u661F\u7CFB\u56FE\u9274",en:"GALAXY ATLAS",index:"ATLAS",type:"\u89C2\u6D4B\u56FE\u9274 / \u8FD1\u90BB\u661F\u7CFB",r:1,position:[5e4,-5e4,3e4],viewDistance:1e6,color:12044526,diameter:String(bh),stat1:"\u5F00\u653E\u63A2\u7D22",unit1:"\u5EA7\u661F\u7CFB",stat2:"\u6240\u5728\u661F\u7CFB",value2:"\u94F6\u6CB3\u7CFB",unit2:"",desc:`\u4ECE\u94F6\u6CB3\u4E0E\u4ED9\u5973\u5EA7\u51FA\u53D1\uFF0C\u63A2\u8BBF\u65CB\u6DA1\u3001\u8349\u5E3D\u3001\u534A\u4EBA\u9A6C\u5EA7 A \u548C M87 \u7B49\u5DF2\u88AB\u89C2\u6D4B\u7684\u661F\u7CFB\u3002\u56FE\u9274\u5F00\u653E ${bh} \u5EA7\u661F\u7CFB\uFF0C\u6A2A\u8DE8\u672C\u661F\u7CFB\u7FA4\u53CA\u66F4\u8FDC\u7684\u90BB\u8FD1\u5B87\u5B99\uFF1B\u4F4D\u7F6E\u4E0E\u5927\u5C0F\u7ECF\u8FC7\u538B\u7F29\uFF0C\u5E76\u4E0D\u8868\u793A\u5B83\u4EEC\u540C\u5C5E\u4E00\u4E2A\u661F\u7CFB\u7FA4\u3002`,sourceUrl:"https://science.nasa.gov/universe/galaxies/",sourceLabel:"NASA \xB7 \u661F\u7CFB\u4E0E\u5B87\u5B99\u7ED3\u6784",modelStatus:"confirmed",appearance:`${bh} \u5EA7\u53EF\u62B5\u8FBE\u7684\u661F\u7CFB\u6563\u5E03\u4E8E\u6DF1\u7A7A`};function Zt(i){return{kind:"star",modelStatus:"confirmed",unit1:"",unit2:"",parentId:i.parentGalaxy,...i}}var Mh=[Zt({id:"proxima-centauri",cn:"\u6BD4\u90BB\u661F",en:"PROXIMA CENTAURI",index:"\u03B1 CEN C",type:"\u94F6\u6CB3\u7CFB / \u7EA2\u77EE\u661F",parentGalaxy:"galaxy",position:[-3100,-120,1800],r:6,surfaceStyle:"red-star",color:16742226,diameter:"\u7EA6 4.25",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u6240\u5C5E\u7CFB\u7EDF",value2:"\u5357\u95E8\u4E8C\u4E09\u661F",desc:"\u9664\u592A\u9633\u5916\uFF0C\u79BB\u6211\u4EEC\u6700\u8FD1\u7684\u6052\u661F\u662F\u4E00\u9897\u6697\u6DE1\u7684\u7EA2\u77EE\u661F\u3002\u5B83\u662F\u5357\u95E8\u4E8C\u4E09\u661F\u7CFB\u7EDF\u7684\u8FDC\u65B9\u6210\u5458\uFF0C\u4F53\u79EF\u867D\u5C0F\u5374\u5E38\u6709\u5F3A\u70C8\u8000\u6591\uFF1B\u8FD9\u91CC\u4EE5\u6E29\u6696\u7EA2\u5149\u8868\u73B0\u5B83\u7684\u661F\u9762\u3002",sourceUrl:"https://science.nasa.gov/exoplanets/other-stars-other-worlds/our-nearest-celestial-neighbor-an-exotic-3-star-system/",sourceLabel:"NASA \xB7 \u6BD4\u90BB\u661F\u4E0E\u5357\u95E8\u4E8C\u7CFB\u7EDF",appearance:"\u5C0F\u5DE7\u7684\u6A59\u7EA2\u661F\u9762\u4E0E\u67D4\u548C\u5916\u6655"}),Zt({id:"alpha-centauri-a",cn:"\u5357\u95E8\u4E8C A",en:"ALPHA CENTAURI A",index:"\u03B1 CEN A",type:"\u94F6\u6CB3\u7CFB / \u7C7B\u592A\u9633\u6052\u661F",parentGalaxy:"galaxy",position:[-3600,90,2100],r:10,surfaceStyle:"gold-star",color:16770482,diameter:"\u5357\u95E8\u4E8C",stat1:"\u6240\u5C5E\u7CFB\u7EDF",stat2:"\u6052\u661F\u7279\u5F81",value2:"\u7C7B\u4F3C\u592A\u9633",desc:"\u5357\u95E8\u4E8C\u7CFB\u7EDF\u4E2D\u8F83\u660E\u4EAE\u7684\u6210\u5458\uFF0C\u8BB8\u591A\u6027\u8D28\u90FD\u4E0E\u592A\u9633\u76F8\u8FD1\u3002\u5B83\u548C\u5357\u95E8\u4E8C B \u4E92\u76F8\u7ED5\u884C\uFF0C\u6BD4\u90BB\u661F\u5219\u5728\u66F4\u8FDC\u5904\u76F8\u4F34\uFF1B\u753B\u9762\u62C9\u5F00\u4E86\u6210\u5458\u95F4\u8DDD\uFF0C\u65B9\u4FBF\u5206\u522B\u62B5\u8FBE\u3002",sourceUrl:"https://www.nasa.gov/image-article/alpha-centauri-triple-star-system-about-4-light-years-from-earth/",sourceLabel:"NASA Chandra \xB7 \u5357\u95E8\u4E8C\u4E09\u661F\u7CFB\u7EDF",appearance:"\u6E29\u6696\u91D1\u767D\u5149\u7403\u4E0E\u7EC6\u5BC6\u8868\u9762\u9897\u7C92"}),Zt({id:"alpha-centauri-b",cn:"\u5357\u95E8\u4E8C B",en:"ALPHA CENTAURI B",index:"\u03B1 CEN B",type:"\u94F6\u6CB3\u7CFB / \u6A59\u8272\u6052\u661F",parentGalaxy:"galaxy",position:[-3820,105,2160],r:8.5,surfaceStyle:"gold-star",color:16760449,diameter:"\u5357\u95E8\u4E8C",stat1:"\u6240\u5C5E\u7CFB\u7EDF",stat2:"\u6052\u661F\u7279\u5F81",value2:"\u6BD4\u592A\u9633\u7A0D\u51B7",desc:"\u4E0E\u5357\u95E8\u4E8C A \u76F8\u4F34\u7684\u4E00\u9897\u6A59\u8272\u6052\u661F\uFF0C\u6BD4\u592A\u9633\u7A0D\u51B7\u3001\u8D28\u91CF\u7A0D\u5C0F\u3002\u5929\u6587\u5B66\u5BB6\u80FD\u901A\u8FC7\u661F\u9762\u7684\u5FAE\u5C0F\u632F\u52A8\u7814\u7A76\u5176\u5185\u90E8\uFF0C\u50CF\u8046\u542C\u4E00\u9897\u6052\u661F\u7684\u56DE\u58F0\u3002",sourceUrl:"https://www.hq.eso.org/public/news/eso0542/",sourceLabel:"ESO \xB7 \u5357\u95E8\u4E8C B \u661F\u9707\u89C2\u6D4B",appearance:"\u67D4\u548C\u6A59\u91D1\u661F\u9762\u4E0E\u6DE1\u6696\u5149\u6655"}),Zt({id:"sirius-a",cn:"\u5929\u72FC\u661F A",en:"SIRIUS A",index:"\u03B1 CMA A",type:"\u94F6\u6CB3\u7CFB / \u84DD\u767D\u6052\u661F",parentGalaxy:"galaxy",position:[3600,-140,2800],r:12,surfaceStyle:"blue-star",color:13231615,diameter:"\u7EA6 8.6",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u5927\u72AC\u5EA7",desc:"\u5730\u7403\u591C\u7A7A\u4E2D\u6700\u4EAE\u7684\u6052\u661F\uFF0C\u95EA\u8000\u7740\u84DD\u767D\u8272\u5149\u8292\u3002\u5929\u72FC\u661F A \u4E0E\u4E00\u9897\u6697\u6DE1\u767D\u77EE\u661F\u7EC4\u6210\u53CC\u661F\uFF0C\u5F7C\u6B64\u7ED5\u884C\u7684\u5468\u671F\u7EA6\u4E3A 50 \u5E74\u3002",sourceUrl:"https://science.nasa.gov/asset/hubble/the-dog-star-sirius-and-its-tiny-companion/",sourceLabel:"NASA Hubble \xB7 \u5929\u72FC\u661F\u53CC\u661F",appearance:"\u660E\u4EAE\u767D\u8272\u661F\u9762\u4E0E\u51B0\u84DD\u5916\u7F18"}),Zt({id:"sirius-b",cn:"\u5929\u72FC\u661F B",en:"SIRIUS B",index:"\u03B1 CMA B",type:"\u94F6\u6CB3\u7CFB / \u767D\u77EE\u661F",parentGalaxy:"galaxy",position:[3770,-122,2910],r:4.5,surfaceStyle:"blue-star",color:15069183,diameter:"\u7EA6 8.6",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u6F14\u5316\u9636\u6BB5",value2:"\u767D\u77EE\u661F",desc:"\u5929\u72FC\u661F A \u65C1\u8FB9\u7684\u5C0F\u578B\u81F4\u5BC6\u4F34\u661F\uFF0C\u662F\u6052\u661F\u6F14\u5316\u7559\u4E0B\u7684\u767D\u77EE\u661F\u3002\u5B83\u4F53\u79EF\u63A5\u8FD1\u5730\u7403\u5374\u62E5\u6709\u8FD1\u4E00\u4E2A\u592A\u9633\u7684\u8D28\u91CF\uFF1B\u663E\u793A\u5927\u5C0F\u548C\u4E24\u661F\u95F4\u8DDD\u7ECF\u8FC7\u653E\u5927\uFF0C\u4FBF\u4E8E\u8FD1\u8DDD\u79BB\u89C2\u5BDF\u3002",sourceUrl:"https://science.nasa.gov/missions/hubble/measuring-a-white-dwarf-star/",sourceLabel:"NASA Hubble \xB7 \u5929\u72FC\u661F B \u6D4B\u91CF",appearance:"\u7D27\u51D1\u51B7\u767D\u5149\u7403\u4E0E\u6D45\u84DD\u7EC6\u6655"}),Zt({id:"vega",cn:"\u7EC7\u5973\u661F",en:"VEGA",index:"\u03B1 LYR",type:"\u94F6\u6CB3\u7CFB / \u84DD\u767D\u6052\u661F",parentGalaxy:"galaxy",position:[-4200,420,-6500],r:13,surfaceStyle:"blue-star",color:12114431,diameter:"\u7EA6 25",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u5929\u7434\u5EA7",desc:"\u5929\u7434\u5EA7\u7684\u660E\u4EAE\u6052\u661F\uFF0C\u4E5F\u662F\u590F\u5B63\u5927\u4E09\u89D2\u7684\u4E00\u89D2\u3002\u5B83\u5468\u56F4\u7684\u5C18\u57C3\u76D8\u66FE\u88AB\u54C8\u52C3\u4E0E\u97E6\u5E03\u671B\u8FDC\u955C\u7EC6\u81F4\u89C2\u6D4B\uFF0C\u4E3A\u7814\u7A76\u6052\u661F\u5468\u56F4\u7684\u788E\u5C51\u63D0\u4F9B\u4E86\u7EBF\u7D22\u3002",sourceUrl:"https://science.nasa.gov/asset/hubble/hubble-and-webb-observations-of-vega-circumstellar-disk/",sourceLabel:"NASA Hubble / Webb \xB7 \u7EC7\u5973\u661F\u5C18\u57C3\u76D8",appearance:"\u6E05\u4EAE\u84DD\u767D\u661F\u9762\u4E0E\u8F7B\u76C8\u8F89\u5149"}),Zt({id:"pollux",cn:"\u5317\u6CB3\u4E09",en:"POLLUX",index:"\u03B2 GEM",type:"\u94F6\u6CB3\u7CFB / \u6A59\u8272\u5DE8\u661F",parentGalaxy:"galaxy",position:[5300,190,-3900],r:19,surfaceStyle:"gold-star",color:16759160,diameter:"\u7EA6 34",stat1:"\u8DDD\u5730\u7403",unit1:"\u5149\u5E74",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u53CC\u5B50\u5EA7",desc:"\u53CC\u5B50\u5EA7\u4E24\u9897\u5934\u90E8\u4EAE\u661F\u4E2D\u66F4\u660E\u4EAE\u7684\u4E00\u9897\uFF0C\u662F\u5DF2\u7ECF\u6F14\u5316\u6210\u5DE8\u661F\u7684\u6052\u661F\u3002\u6696\u6A59\u8272\u7684\u661F\u5149\u4E0E\u9644\u8FD1\u84DD\u767D\u6052\u661F\u5F62\u6210\u5BF9\u6BD4\uFF1B\u5B83\u4E0E\u5317\u6CB3\u4E8C\u53EA\u662F\u5929\u7A7A\u4E2D\u76F8\u90BB\uFF0C\u5E76\u4E0D\u6784\u6210\u53CC\u661F\u3002",sourceUrl:"https://science.nasa.gov/solar-system/skywatching/night-sky-network/gemini-constellation/",sourceLabel:"NASA \xB7 \u53CC\u5B50\u5EA7\u4E0E\u5317\u6CB3\u4E09",appearance:"\u91D1\u6A59\u8272\u5927\u5149\u7403\u4E0E\u7F13\u6162\u7FFB\u6D8C\u7684\u6591\u7EB9"}),Zt({id:"rigel",cn:"\u53C2\u5BBF\u4E03",en:"RIGEL",index:"\u03B2 ORI",type:"\u94F6\u6CB3\u7CFB / \u84DD\u8D85\u5DE8\u661F",parentGalaxy:"galaxy",position:[-19900,-200,5600],r:27,surfaceStyle:"blue-star",color:10341375,diameter:"\u84DD\u8D85\u5DE8\u661F",stat1:"\u6052\u661F\u7C7B\u578B",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u730E\u6237\u5EA7",desc:"\u4F4D\u4E8E\u730E\u6237\u5EA7\u811A\u90E8\u7684\u84DD\u767D\u8272\u8D85\u5DE8\u661F\uFF0C\u4E0E\u80A9\u90E8\u6A59\u7EA2\u7684\u53C2\u5BBF\u56DB\u9065\u76F8\u547C\u5E94\u3002\u5B83\u662F\u4E00\u9897\u70BD\u70ED\u7684\u5927\u8D28\u91CF\u6052\u661F\uFF0C\u5C55\u793A\u4E86\u4E0E\u7EA2\u8D85\u5DE8\u661F\u622A\u7136\u4E0D\u540C\u7684\u660E\u4EAE\u5916\u89C2\u3002",sourceUrl:"https://science.nasa.gov/universe/stories/quick-reads/the-lives-times-and-deaths-of-stars/",sourceLabel:"NASA \xB7 \u6052\u661F\u6F14\u5316\u4E0E\u53C2\u5BBF\u4E03",appearance:"\u5BBD\u9614\u7684\u84DD\u767D\u661F\u9762\u4E0E\u5F3A\u70C8\u51B7\u8272\u5149\u6655"}),Zt({id:"betelgeuse",cn:"\u53C2\u5BBF\u56DB",en:"BETELGEUSE",index:"\u03B1 ORI",type:"\u94F6\u6CB3\u7CFB / \u7EA2\u8D85\u5DE8\u661F",parentGalaxy:"galaxy",position:[-23e3,-350,4800],r:30,surfaceStyle:"red-star",color:16746070,diameter:"\u7EA6 1,000",stat1:"\u76F4\u5F84\u91CF\u7EA7",unit1:"\u592A\u9633\u76F4\u5F84",stat2:"\u6240\u5C5E\u661F\u5EA7",value2:"\u730E\u6237\u5EA7",desc:"\u730E\u6237\u5EA7\u80A9\u5934\u7684\u6A59\u7EA2\u8272\u6052\u661F\uFF0C\u5DF2\u7ECF\u81A8\u80C0\u6210\u7EA2\u8D85\u5DE8\u661F\u3002\u5B83\u7684\u5916\u5C42\u4E0D\u65AD\u53D8\u5316\u5E76\u5411\u5916\u91CA\u653E\u7269\u8D28\uFF1B\u8FD9\u91CC\u7528\u7FFB\u6D8C\u7684\u6696\u8272\u8868\u9762\u8868\u73B0\u8FD9\u9897\u5E9E\u5927\u7684\u6052\u661F\uFF0C\u5C3A\u5BF8\u4EC5\u5C55\u793A\u91CF\u7EA7\u3002",sourceUrl:"https://www.esa.int/Science_Exploration/Space_Science/Betelgeuse_braces_for_a_collision",sourceLabel:"ESA \xB7 \u53C2\u5BBF\u56DB",appearance:"\u6A59\u7EA2\u5BF9\u6D41\u6591\u4E0E\u5BBD\u9614\u67D4\u5149"}),Zt({id:"trappist-1",cn:"TRAPPIST-1",en:"TRAPPIST-1",index:"T-1",type:"\u94F6\u6CB3\u7CFB / \u8D85\u51B7\u7EA2\u77EE\u661F",parentGalaxy:"galaxy",position:[4800,-330,-7e3],r:5.5,surfaceStyle:"red-star",color:16745566,diameter:"7",stat1:"\u5DF2\u786E\u8BA4\u884C\u661F",unit1:"\u9897",stat2:"\u672C\u6B21\u53EF\u63A2\u7D22",value2:"e / f / g",desc:"\u4E00\u9897\u62E5\u6709\u4E03\u9897\u5730\u7403\u5927\u5C0F\u884C\u661F\u7684\u8D85\u51B7\u7EA2\u77EE\u661F\uFF0C\u6574\u4E2A\u884C\u661F\u5BB6\u65CF\u90FD\u7D27\u9760\u6BCD\u661F\u3002\u8FD9\u91CC\u5F00\u653E e\u3001f\u3001g \u4E09\u4E2A\u4E16\u754C\uFF0C\u5E76\u62C9\u5F00\u8F68\u9053\u65B9\u4FBF\u6F2B\u6E38\uFF1B\u884C\u661F\u8868\u9762\u4E0E\u6C14\u5019\u5C1A\u4E0D\u80FD\u7531\u8FD9\u4E9B\u753B\u9762\u786E\u5B9A\u3002",sourceUrl:"https://science.nasa.gov/exoplanets/trappist1/",sourceLabel:"NASA \xB7 TRAPPIST-1 \u884C\u661F\u7CFB\u7EDF",appearance:"\u5C0F\u5DE7\u6A59\u7EA2\u661F\u9762\u4E0E\u4E09\u5C42\u53EF\u63A2\u7D22\u8F68\u9053"}),Zt({id:"kepler-186",cn:"\u5F00\u666E\u52D2-186",en:"KEPLER-186",index:"K186",type:"\u94F6\u6CB3\u7CFB / \u7EA2\u77EE\u661F",parentGalaxy:"galaxy",position:[-9e3,920,9200],r:7,surfaceStyle:"red-star",color:16753528,diameter:"M \u578B",stat1:"\u6052\u661F\u5149\u8C31",stat2:"\u63A2\u7D22\u884C\u661F",value2:"\u5F00\u666E\u52D2-186 f",desc:"\u5929\u9E45\u5EA7\u65B9\u5411\u7684\u4E00\u9897\u7EA2\u77EE\u661F\uFF0C\u5F00\u666E\u52D2\u671B\u8FDC\u955C\u901A\u8FC7\u884C\u661F\u7ECF\u8FC7\u661F\u9762\u65F6\u9020\u6210\u7684\u5FAE\u5F31\u53D8\u6697\u7814\u7A76\u8FD9\u4E2A\u7CFB\u7EDF\u3002\u98DE\u5411\u5F00\u666E\u52D2-186 f\uFF0C\u63A2\u7D22\u8FD9\u9897\u6052\u661F\u65C1\u5DF2\u786E\u8BA4\u7684\u8FD1\u5730\u7403\u5927\u5C0F\u4E16\u754C\u3002",sourceUrl:"https://www.nasa.gov/news-release/nasas-kepler-telescope-discovers-first-earth-size-planet-in-habitable-zone/",sourceLabel:"NASA \xB7 \u5F00\u666E\u52D2-186 \u7CFB\u7EDF\u53D1\u73B0",appearance:"\u67D4\u548C\u6A59\u7EA2\u661F\u9762\u4E0E\u7EC6\u5BC6\u5BF9\u6D41\u9897\u7C92"}),Zt({id:"kepler-22",cn:"\u5F00\u666E\u52D2-22",en:"KEPLER-22",index:"K22",type:"\u94F6\u6CB3\u7CFB / \u7C7B\u592A\u9633\u6052\u661F",parentGalaxy:"galaxy",position:[-7200,650,10200],r:9.5,surfaceStyle:"gold-star",color:16768941,diameter:"G \u578B",stat1:"\u6052\u661F\u5149\u8C31",stat2:"\u63A2\u7D22\u884C\u661F",value2:"\u5F00\u666E\u52D2-22 b",desc:"\u4E0E\u592A\u9633\u540C\u5C5E G \u578B\u7684\u4E00\u9897\u6052\u661F\uFF0C\u6BD4\u592A\u9633\u7565\u5C0F\u3001\u7565\u51B7\u3002\u5F00\u666E\u52D2-22 b \u73AF\u7ED5\u5B83\u8FD0\u884C\uFF0C\u662F\u5F00\u666E\u52D2\u4EFB\u52A1\u9996\u9897\u786E\u8BA4\u4F4D\u4E8E\u6052\u661F\u5B9C\u5C45\u5E26\u7684\u884C\u661F\uFF1B\u5B9C\u5C45\u5E26\u7684\u4F4D\u7F6E\u5E76\u4E0D\u7B49\u4E8E\u5DF2\u786E\u8BA4\u9002\u5B9C\u751F\u547D\u3002",sourceUrl:"https://www.jpl.nasa.gov/news/nasas-kepler-confirms-its-first-planet-in-habitable-zone/",sourceLabel:"NASA / JPL \xB7 \u5F00\u666E\u52D2-22 \u7CFB\u7EDF",appearance:"\u6696\u91D1\u5149\u7403\u4E0E\u67D4\u767D\u5916\u6655"}),Zt({id:"hr8799",cn:"HR 8799",en:"HR 8799",index:"HR",type:"\u94F6\u6CB3\u7CFB / \u5DE8\u884C\u661F\u7CFB\u7EDF\u5BBF\u4E3B",parentGalaxy:"galaxy",position:[-11e3,750,-4300],r:9,surfaceStyle:"gold-star",color:16770233,diameter:"4",stat1:"\u5DF2\u786E\u8BA4\u5DE8\u884C\u661F",unit1:"\u9897",stat2:"\u63A2\u6D4B\u65B9\u5F0F",value2:"\u76F4\u63A5\u6210\u50CF",desc:"\u8FD9\u9897\u6052\u661F\u5468\u56F4\u6709\u56DB\u9897\u901A\u8FC7\u76F4\u63A5\u6210\u50CF\u7814\u7A76\u7684\u5DE8\u5927\u7CFB\u5916\u884C\u661F\u3002\u4F9D\u6B21\u98DE\u5411 b\u3001c\u3001d\u3001e\uFF0C\u89C2\u5BDF\u4E0D\u540C\u7684\u4E91\u5E26\uFF1B\u8868\u9762\u7EC6\u8282\u4E0E\u6F14\u793A\u8F68\u9053\u7ECF\u8FC7\u827A\u672F\u5316\u5904\u7406\u3002",sourceUrl:"https://exoplanetarchive.ipac.caltech.edu/overview/HR%208799",sourceLabel:"NASA \u7CFB\u5916\u884C\u661F\u6863\u6848 \xB7 HR 8799",appearance:"\u67D4\u548C\u6696\u767D\u6052\u661F\u4E0E\u56DB\u5C42\u884C\u661F\u8F68\u9053"}),Zt({id:"af-and",cn:"\u4ED9\u5973\u5EA7 AF",en:"AF ANDROMEDAE",index:"AF",type:"\u4ED9\u5973\u5EA7\u661F\u7CFB / \u9AD8\u5149\u5EA6\u84DD\u53D8\u661F",parentGalaxy:"andromeda",position:[246600,35350,-184300],r:22,surfaceStyle:"blue-star",color:9882367,diameter:"M31",stat1:"\u6240\u5728\u661F\u7CFB",stat2:"\u6052\u661F\u7C7B\u578B",value2:"\u84DD\u53D8\u661F",desc:"AF And \u662F\u4ED9\u5973\u5EA7\u661F\u7CFB\u4E2D\u5DF2\u77E5\u7684\u9AD8\u5149\u5EA6\u84DD\u53D8\u661F\u4E4B\u4E00\u3002\u5B83\u7684\u4EAE\u5EA6\u4E0E\u5149\u8C31\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u662F\u7814\u7A76\u5927\u8D28\u91CF\u6052\u661F\u6F14\u5316\u7684\u7A97\u53E3\uFF1B\u84DD\u767D\u5916\u89C2\u662F\u53EF\u89C6\u5316\u793A\u610F\u3002",sourceUrl:"https://academic.oup.com/mnras/article/447/3/2459/988608",sourceLabel:"MNRAS \xB7 M31 \u9AD8\u5149\u5EA6\u84DD\u53D8\u661F\u7814\u7A76",appearance:"\u51B7\u84DD\u5916\u7F18\u4E0E\u9AD8\u4EAE\u767D\u8272\u661F\u9762"}),Zt({id:"ae-and",cn:"\u4ED9\u5973\u5EA7 AE",en:"AE ANDROMEDAE",index:"AE",type:"\u4ED9\u5973\u5EA7\u661F\u7CFB / \u9AD8\u5149\u5EA6\u84DD\u53D8\u661F",parentGalaxy:"andromeda",position:[234100,34740,-177e3],r:20,surfaceStyle:"blue-star",color:11001087,diameter:"M31",stat1:"\u6240\u5728\u661F\u7CFB",stat2:"\u6052\u661F\u7C7B\u578B",value2:"\u84DD\u53D8\u661F",desc:"AE And \u662F\u4ED9\u5973\u5EA7\u661F\u7CFB\u7684\u4E00\u9897\u9AD8\u5149\u5EA6\u84DD\u53D8\u661F\u3002\u89C2\u6D4B\u8005\u5229\u7528\u5B83\u5728\u4E0D\u540C\u72B6\u6001\u4E0B\u7684\u5149\u8C31\u7814\u7A76\u70BD\u70ED\u5927\u6C14\u4E0E\u7269\u8D28\u6D41\u5931\uFF0C\u63ED\u793A\u5927\u8D28\u91CF\u6052\u661F\u590D\u6742\u7684\u751F\u547D\u5386\u7A0B\u3002",sourceUrl:"https://academic.oup.com/mnras/article/447/3/2459/988608",sourceLabel:"MNRAS \xB7 AE And \u5149\u8C31\u7814\u7A76",appearance:"\u6DE1\u9752\u8272\u661F\u9762\u4E0E\u7EC6\u5BC6\u6D41\u52A8\u5149\u6591"}),Zt({id:"romano-star",cn:"\u7F57\u9A6C\u8BFA\u4E4B\u661F",en:"ROMANO\u2019S STAR \xB7 GR 290",index:"GR 290",type:"\u4E09\u89D2\u5EA7\u661F\u7CFB / \u6F14\u5316\u4E2D\u7684\u5927\u8D28\u91CF\u6052\u661F",parentGalaxy:"triangulum",position:[-216400,-17500,-207100],r:24,surfaceStyle:"blue-star",color:9234943,diameter:"M33",stat1:"\u6240\u5728\u661F\u7CFB",stat2:"\u53E6\u4E00\u7F16\u53F7",value2:"V532",desc:"\u4E5F\u79F0 GR 290 \u6216 V532\u3002\u5B83\u5728\u4E09\u89D2\u5EA7\u661F\u7CFB\u4E2D\u5448\u73B0\u660E\u663E\u7684\u4EAE\u5EA6\u548C\u5149\u8C31\u53D8\u5316\uFF0C\u67D0\u4E9B\u72B6\u6001\u5177\u6709\u665A\u578B\u6C2E\u5E8F\u6C83\u5C14\u592B\u2013\u62C9\u53F6\u661F\u7684\u7279\u5F81\uFF0C\u8BA9\u6211\u4EEC\u5F97\u4EE5\u7814\u7A76\u5927\u8D28\u91CF\u6052\u661F\u7684\u6F14\u5316\u3002",sourceUrl:"https://academic.oup.com/mnras/article/419/2/1455/989195",sourceLabel:"MNRAS \xB7 \u7F57\u9A6C\u8BFA\u4E4B\u661F\u5149\u8C31\u6A21\u578B",appearance:"\u660E\u4EAE\u9752\u767D\u661F\u9762\u4E0E\u84DD\u8272\u6052\u661F\u98CE\u5149\u6655"}),Zt({id:"r136a1",cn:"R136a1",en:"R136a1",index:"R136",type:"\u5927\u9EA6\u54F2\u4F26\u661F\u4E91 / \u5927\u8D28\u91CF\u6052\u661F",parentGalaxy:"lmc",position:[105600,-64750,77200],r:28,surfaceStyle:"blue-star",color:11589887,diameter:"\u903E 100",stat1:"\u8D28\u91CF\u91CF\u7EA7",unit1:"\u592A\u9633\u8D28\u91CF",stat2:"\u6240\u5728\u661F\u56E2",value2:"R136",desc:"\u4F4D\u4E8E\u8718\u86DB\u661F\u4E91\u7684 R136 \u661F\u56E2\uFF0C\u662F\u5DF2\u77E5\u6781\u5927\u8D28\u91CF\u6052\u661F\u7684\u4EE3\u8868\u3002\u5B83\u91CA\u653E\u5F3A\u70C8\u7684\u8F90\u5C04\u4E0E\u6052\u661F\u98CE\uFF1B\u8D28\u91CF\u4F30\u8BA1\u968F\u89C2\u6D4B\u548C\u6A21\u578B\u4FEE\u8BA2\uFF0C\u8FD9\u91CC\u5C55\u793A\u91CF\u7EA7\u800C\u975E\u56FA\u5B9A\u6392\u540D\u3002",sourceUrl:"https://www.eso.org/public/news/eso1030/",sourceLabel:"ESO \xB7 R136 \u5927\u8D28\u91CF\u6052\u661F\u7814\u7A76",appearance:"\u70BD\u767D\u6838\u5FC3\u3001\u51B0\u84DD\u5149\u6655\u4E0E\u7EC6\u5BC6\u80FD\u91CF\u7EB9\u7406"}),Zt({id:"woh-g64",cn:"WOH G64",en:"WOH G64",index:"WOH",type:"\u5927\u9EA6\u54F2\u4F26\u661F\u4E91 / \u6F14\u5316\u4E2D\u7684\u8D85\u5DE8\u661F",parentGalaxy:"lmc",position:[94800,-65170,81700],r:35,surfaceStyle:"red-star",color:16757363,diameter:"LMC",stat1:"\u6240\u5728\u661F\u7CFB",stat2:"\u5468\u56F4\u7269\u8D28",value2:"\u6D53\u539A\u5C18\u57C3",desc:"\u88AB\u539A\u91CD\u5C18\u57C3\u5305\u56F4\u7684\u8457\u540D\u8D85\u5DE8\u661F\u3002\u8FD1\u671F\u7814\u7A76\u5BF9\u5B83\u662F\u5426\u5DF2\u7531\u7EA2\u8D85\u5DE8\u661F\u8F6C\u4E3A\u9EC4\u7279\u8D85\u5DE8\u661F\u5B58\u5728\u4E0D\u540C\u89E3\u91CA\uFF1B\u8FD9\u91CC\u4EE5\u6696\u8272\u827A\u672F\u6A21\u578B\u5448\u73B0\uFF0C\u4E0D\u628A\u6F14\u5316\u9636\u6BB5\u6216\u5F53\u524D\u989C\u8272\u89C6\u4E3A\u5B9A\u8BBA\u3002",sourceUrl:"https://arxiv.org/abs/2601.02057",sourceLabel:"van Loon \u4E0E Ohnaka \xB7 2026 \u5149\u8C31\u7814\u7A76",appearance:"\u5DE8\u5927\u7684\u6696\u6A59\u661F\u9762\u4E0E\u67D4\u548C\u5C18\u57C3\u8272\u5149\u6655"}),Zt({id:"hd5980",cn:"HD 5980",en:"HD 5980",index:"HD",type:"\u5C0F\u9EA6\u54F2\u4F26\u661F\u4E91 / \u5927\u8D28\u91CF\u591A\u661F\u7CFB\u7EDF",parentGalaxy:"smc",position:[165100,-94820,108600],r:26,surfaceStyle:"blue-star",color:12570367,diameter:"SMC",stat1:"\u6240\u5728\u661F\u7CFB",stat2:"\u89C2\u6D4B\u7279\u5F81",value2:"\u5F3A\u70C8\u6052\u661F\u98CE",desc:"NGC 346 \u9644\u8FD1\u7684\u8457\u540D\u5927\u8D28\u91CF\u591A\u661F\u7CFB\u7EDF\uFF0C\u5305\u542B\u6C83\u5C14\u592B\u2013\u62C9\u53F6\u578B\u6052\u661F\uFF0C\u5E76\u66FE\u7ECF\u5386\u663E\u8457\u7206\u53D1\u3002\u6B64\u5904\u7528\u4E00\u4E2A\u53D1\u5149\u5929\u4F53\u4EE3\u8868\u6574\u4E2A\u7CFB\u7EDF\uFF0C\u65B9\u4FBF\u63A2\u7D22\uFF1B\u4E0D\u662F\u5404\u6210\u5458\u7684\u771F\u5B9E\u7A7A\u95F4\u7ED3\u6784\u3002",sourceUrl:"https://ntrs.nasa.gov/citations/19950037141",sourceLabel:"NASA NTRS \xB7 HD 5980 \u591A\u661F\u7CFB\u7EDF\u7814\u7A76",appearance:"\u84DD\u7D2B\u8FB9\u7F18\u4E0E\u5F3A\u70C8\u767D\u8272\u8F89\u5149"})];Mh.push(...Cp);function Ya(i){let e=i.diskOuterRadius??4.5;return{kind:"black-hole",modelStatus:"confirmed",unit1:"\u592A\u9633\u8D28\u91CF",unit2:"",parentId:i.parentGalaxy,diskOuterRadius:e,visualRadius:i.r*e,viewDistance:i.r*14,...i}}var Kb=[Ya({id:"sagittarius-a",cn:"\u4EBA\u9A6C\u5EA7 A*",en:"SAGITTARIUS A*",index:"SGR A*",type:"\u94F6\u6CB3\u7CFB / \u4E2D\u592E\u8D85\u5927\u8D28\u91CF\u9ED1\u6D1E",parentGalaxy:"galaxy",position:[-18e3,0,0],r:36,color:16753502,diskTilt:[.28,-.18,-.35],diameter:"\u7EA6 400 \u4E07",stat1:"\u8D28\u91CF\u4F30\u8BA1",stat2:"\u6240\u5728\u4F4D\u7F6E",value2:"\u94F6\u6CB3\u4E2D\u5FC3",desc:"\u4F4D\u4E8E\u94F6\u6CB3\u7CFB\u4E2D\u5FC3\u7684\u8D85\u5927\u8D28\u91CF\u9ED1\u6D1E\uFF0C\u8D28\u91CF\u7EA6\u4E3A\u592A\u9633\u7684 400 \u4E07\u500D\u3002\u4E8B\u4EF6\u89C6\u754C\u671B\u8FDC\u955C\u5728 2022 \u5E74\u516C\u5E03\u4E86\u5176\u5468\u56F4\u53D1\u5149\u6C14\u4F53\u52FE\u52D2\u7684\u9634\u5F71\uFF1B\u8FD9\u91CC\u7684\u5438\u79EF\u76D8\u4E0E\u5149\u73AF\u662F\u827A\u672F\u6F14\u793A\u3002",sourceUrl:"https://www.hq.eso.org/public/news/eso2208-eht-mw/",sourceLabel:"ESO / EHT \xB7 \u4EBA\u9A6C\u5EA7 A* \u9996\u5F20\u56FE\u50CF",appearance:"\u6F06\u9ED1\u6697\u6838\u3001\u7EC6\u957F\u7425\u73C0\u76D8\u4E0E\u4E0A\u4E0B\u5F2F\u66F2\u5149\u5E26"}),Ya({id:"m31-black-hole",cn:"\u4ED9\u5973\u5EA7\u4E2D\u592E\u9ED1\u6D1E",en:"ANDROMEDA CENTRAL BLACK HOLE",index:"M31*",type:"\u4ED9\u5973\u5EA7\u661F\u7CFB / \u4E2D\u592E\u8D85\u5927\u8D28\u91CF\u9ED1\u6D1E",parentGalaxy:"andromeda",position:[...ns.find(i=>i.id==="andromeda").position],r:45,color:16763778,diskTilt:[.38,.12,-.28],diameter:"\u7EA6 1.4 \u4EBF",stat1:"\u8D28\u91CF\u4F30\u8BA1",stat2:"\u6240\u5728\u4F4D\u7F6E",value2:"M31 \u4E2D\u5FC3",desc:"\u4ED9\u5973\u5EA7\u661F\u7CFB\u7684\u4E2D\u592E\u9ED1\u6D1E\u8FDC\u6BD4\u94F6\u6CB3\u4E2D\u5FC3\u7684\u9ED1\u6D1E\u66F4\u91CD\uFF0C\u54C8\u52C3\u7814\u7A76\u7ED9\u51FA\u7684\u8D28\u91CF\u4F30\u8BA1\u7EA6\u4E3A 1.4 \u4EBF\u4E2A\u592A\u9633\u3002\u9644\u8FD1\u6052\u661F\u7684\u8FD0\u52A8\u63ED\u793A\u4E86\u5B83\u7684\u5F15\u529B\uFF1B\u91D1\u8272\u76D8\u9762\u5E76\u975E\u5B9E\u62CD\u5916\u89C2\u3002",sourceUrl:"https://science.nasa.gov/asset/hubble/our-neighboring-galaxys-unusual-core/",sourceLabel:"NASA Hubble \xB7 \u4ED9\u5973\u5EA7\u6838\u5FC3\u4E0E\u9ED1\u6D1E",appearance:"\u7EC6\u957F\u91D1\u8272\u5438\u79EF\u76D8\u3001\u6696\u767D\u5F2F\u66F2\u5185\u7F18\u4E0E\u6F06\u9ED1\u4E2D\u5FC3"}),Ya({id:"m32-black-hole",cn:"M32 \u4E2D\u592E\u9ED1\u6D1E",en:"M32 CENTRAL BLACK HOLE",index:"M32*",type:"M32 \u661F\u7CFB / \u4E2D\u592E\u8D85\u5927\u8D28\u91CF\u9ED1\u6D1E",parentGalaxy:"m32",position:[...ns.find(i=>i.id==="m32").position],r:31,color:16757644,diskTilt:[-.16,.24,.44],diameter:"\u903E 200 \u4E07",stat1:"\u8D28\u91CF\u91CF\u7EA7",stat2:"\u6240\u5728\u4F4D\u7F6E",value2:"M32 \u4E2D\u5FC3",desc:"\u8FD9\u5EA7\u5C0F\u578B\u692D\u5706\u661F\u7CFB\u7684\u5BC6\u96C6\u6838\u5FC3\u4E2D\uFF0C\u6709\u4E00\u9897\u6570\u767E\u4E07\u592A\u9633\u8D28\u91CF\u91CF\u7EA7\u7684\u9ED1\u6D1E\u3002\u5929\u6587\u5B66\u5BB6\u901A\u8FC7\u4E2D\u5FC3\u6052\u661F\u7684\u5206\u5E03\u4E0E\u8FD0\u52A8\u7814\u7A76\u5B83\uFF1B\u6696\u8272\u5149\u76D8\u8868\u73B0\u5438\u79EF\u73AF\u5883\u7684\u6982\u5FF5\u5916\u89C2\u3002",sourceUrl:"https://svs.gsfc.nasa.gov/vis/a010000/a014300/a014335/14335_Supermassive_Black_Hole_Scale_Comparison_HTML_Transcript.html",sourceLabel:"NASA SVS \xB7 \u8D85\u5927\u8D28\u91CF\u9ED1\u6D1E\u5C3A\u5EA6\u6BD4\u8F83",appearance:"\u6A59\u91D1\u8584\u76D8\u4E0E\u5305\u56F4\u6697\u6838\u7684\u5C42\u53E0\u5F2F\u66F2\u5149\u5E26"}),Ya({id:"m33-x7",cn:"M33 X-7 \u9ED1\u6D1E",en:"M33 X-7",index:"X-7",type:"\u4E09\u89D2\u5EA7\u661F\u7CFB / \u6052\u661F\u7EA7\u9ED1\u6D1E",parentGalaxy:"triangulum",position:[-203300,-17700,-214200],r:20,color:16761739,diskTilt:[.18,.48,-.38],diameter:"\u7EA6 16",stat1:"\u8D28\u91CF\u4F30\u8BA1",stat2:"\u7CFB\u7EDF\u7C7B\u578B",value2:"X \u5C04\u7EBF\u53CC\u661F",desc:"\u4E09\u89D2\u5EA7\u661F\u7CFB\u4E2D\u7684\u6052\u661F\u7EA7\u9ED1\u6D1E\uFF0C\u4E0E\u4E00\u9897\u5927\u8D28\u91CF\u6052\u661F\u7EC4\u6210\u98DF\u53CC\u661F\u3002\u89C2\u6D4B\u7814\u7A76\u4F30\u8BA1\u9ED1\u6D1E\u8D28\u91CF\u7EA6\u4E3A 16 \u4E2A\u592A\u9633\uFF1B\u5B83\u4F4D\u4E8E\u661F\u76D8\u4E2D\u7684\u53CC\u661F\u7CFB\u7EDF\uFF0C\u5E76\u4E0D\u662F\u4E09\u89D2\u5EA7\u7684\u4E2D\u592E\u9ED1\u6D1E\u3002",sourceUrl:"https://arxiv.org/abs/0710.3165",sourceLabel:"Orosz \u7B49 \xB7 M33 X-7 \u52A8\u529B\u5B66\u8D28\u91CF\u7814\u7A76",appearance:"\u5C0F\u578B\u91D1\u6A59\u8584\u76D8\u4E0E\u6696\u767D\u5F2F\u66F2\u5149\u5E26"}),Ya({id:"lmc-x1",cn:"LMC X-1 \u9ED1\u6D1E",en:"LMC X-1",index:"X-1",type:"\u5927\u9EA6\u54F2\u4F26\u661F\u4E91 / \u6052\u661F\u7EA7\u9ED1\u6D1E",parentGalaxy:"lmc",position:[102800,-65400,84600],r:18,color:16756082,diskTilt:[-.3,.22,.34],diameter:"\u7EA6 11",stat1:"\u8D28\u91CF\u4F30\u8BA1",stat2:"\u7CFB\u7EDF\u7C7B\u578B",value2:"X \u5C04\u7EBF\u53CC\u661F",desc:"\u4F4D\u4E8E\u5927\u9EA6\u54F2\u4F26\u661F\u4E91\u7684\u4E00\u9897\u6052\u661F\u7EA7\u9ED1\u6D1E\uFF0C\u4E0E\u9AD8\u8D28\u91CF\u4F34\u661F\u6784\u6210\u660E\u4EAE\u7684 X \u5C04\u7EBF\u53CC\u661F\u3002\u52A8\u529B\u5B66\u6A21\u578B\u7ED9\u51FA\u7EA6 11 \u4E2A\u592A\u9633\u8D28\u91CF\uFF1B\u5B83\u662F\u661F\u7CFB\u5185\u7684\u53CC\u661F\u6210\u5458\uFF0C\u5E76\u975E\u661F\u7CFB\u4E2D\u5FC3\u9ED1\u6D1E\u3002",sourceUrl:"https://arxiv.org/abs/0810.3447",sourceLabel:"Orosz \u7B49 \xB7 LMC X-1 \u52A8\u529B\u5B66\u6A21\u578B",appearance:"\u6696\u6A59\u7EC6\u957F\u76D8\u3001\u767D\u91D1\u5185\u7F18\u4E0E\u9ED1\u8272\u9634\u5F71"})];function xn(i){let e=Mh.find(n=>n.id===i.parentStarId),t=i.phase;return{kind:"planet",parentGalaxy:e.parentGalaxy,parentId:e.id,position:[e.position[0]+Math.cos(t)*i.orbitRadius,e.position[1],e.position[2]+Math.sin(t)*i.orbitRadius],unit1:"",unit2:"",surfaceStyle:"gas-giant",...i}}var Jb=[xn({id:"proxima-centauri-b",parentStarId:"proxima-centauri",cn:"\u6BD4\u90BB\u661F b",en:"PROXIMA CENTAURI b",index:"b",type:"\u94F6\u6CB3\u7CFB / \u5DF2\u786E\u8BA4\u7CFB\u5916\u884C\u661F",modelStatus:"confirmed",r:2.6,orbitRadius:46,orbitalPeriod:55,phase:1.1,color:12162169,surfaceStyle:"rocky-world",diameter:"11.2",stat1:"\u516C\u8F6C\u5468\u671F",unit1:"\u5929",stat2:"\u53D1\u73B0\u5E74\u4EFD",value2:"2016",unit2:"\u5E74",desc:"\u73AF\u7ED5\u6BD4\u90BB\u661F\u8FD0\u884C\u7684\u5DF2\u786E\u8BA4\u884C\u661F\uFF0C\u901A\u8FC7\u6BCD\u661F\u53D7\u5230\u5F15\u529B\u7275\u52A8\u4EA7\u751F\u7684\u5F84\u5411\u901F\u5EA6\u53D8\u5316\u88AB\u53D1\u73B0\uFF0C\u4E00\u5E74\u53EA\u6709\u7EA6 11.2 \u5929\u3002\u8910\u8272\u5CA9\u9762\u3001\u8584\u96FE\u4E0E\u6F14\u793A\u8F68\u9053\u5747\u4E3A\u827A\u672F\u793A\u610F\uFF0C\u4E0D\u4EE3\u8868\u5DF2\u7ECF\u89C2\u6D4B\u5230\u5730\u8C8C\u6216\u5927\u6C14\u3002",sourceUrl:"https://science.nasa.gov/exoplanet-catalog/proxima-centauri-b/",sourceLabel:"NASA \u7CFB\u5916\u884C\u661F\u76EE\u5F55 \xB7 \u6BD4\u90BB\u661F b",appearance:"\u827A\u672F\u793A\u610F\uFF1A\u94DC\u8910\u5CA9\u9762\u3001\u6DF1\u8272\u76C6\u5730\u4E0E\u6DE1\u6696\u8584\u96FE"}),xn({id:"trappist-1-e",parentStarId:"trappist-1",cn:"TRAPPIST-1 e",en:"TRAPPIST-1 e",index:"e",type:"\u94F6\u6CB3\u7CFB / \u5DF2\u786E\u8BA4\u7C7B\u5730\u884C\u661F",modelStatus:"confirmed",r:2.4,orbitRadius:52,orbitalPeriod:58,phase:.65,color:8168618,surfaceStyle:"temperate-world",diameter:"0.92",stat1:"\u534A\u5F84",unit1:"\u5730\u7403\u534A\u5F84",stat2:"\u516C\u8F6C\u5468\u671F",value2:"6.1",unit2:"\u5929",desc:"TRAPPIST-1 \u5BB6\u65CF\u4E2D\u4E00\u9897\u7565\u5C0F\u4E8E\u5730\u7403\u7684\u884C\u661F\uFF0C\u6BCF\u7EA6 6.1 \u5929\u73AF\u7ED5\u7EA2\u77EE\u661F\u4E00\u5468\u3002\u9752\u84DD\u8272\u6591\u5757\u3001\u6D45\u8272\u5730\u5F62\u4E0E\u4E91\u5C42\u662F\u827A\u672F\u793A\u610F\uFF1B\u5B83\u662F\u5426\u5177\u6709\u5927\u6C14\u3001\u6D77\u6D0B\u6216\u751F\u547D\uFF0C\u4ECD\u4E0D\u80FD\u7531\u8FD9\u4E9B\u56FE\u6848\u4F5C\u51FA\u5224\u65AD\u3002",sourceUrl:"https://science.nasa.gov/exoplanet-catalog/trappist-1-e/",sourceLabel:"NASA \u7CFB\u5916\u884C\u661F\u76EE\u5F55 \xB7 TRAPPIST-1 e",appearance:"\u827A\u672F\u793A\u610F\uFF1A\u9752\u84DD\u6DF1\u8272\u533A\u57DF\u3001\u6D45\u8910\u5730\u5F62\u4E0E\u8F7B\u4E91"}),xn({id:"trappist-1-f",parentStarId:"trappist-1",cn:"TRAPPIST-1 f",en:"TRAPPIST-1 f",index:"f",type:"\u94F6\u6CB3\u7CFB / \u5DF2\u786E\u8BA4\u7CFB\u5916\u884C\u661F",modelStatus:"confirmed",r:2.65,orbitRadius:72,orbitalPeriod:82,phase:2.8,color:11060427,surfaceStyle:"ice-world",diameter:"\u7EA6 1.05",stat1:"\u534A\u5F84",unit1:"\u5730\u7403\u534A\u5F84",stat2:"\u516C\u8F6C\u5468\u671F",value2:"9.2",unit2:"\u5929",desc:"\u6BD4 TRAPPIST-1 e \u66F4\u9760\u5916\u7684\u4E00\u9897\u884C\u661F\uFF0C\u5927\u5C0F\u4E0E\u5730\u7403\u63A5\u8FD1\uFF0C\u516C\u8F6C\u5468\u671F\u7EA6 9.2 \u5929\u3002\u8FD9\u91CC\u7528\u971C\u767D\u7EB9\u7406\u548C\u84DD\u7070\u88C2\u9699\u60F3\u8C61\u5B83\u7684\u5916\u89C2\uFF1B\u51B0\u5C42\u3001\u4E91\u96FE\u4E0E\u5730\u8868\u989C\u8272\u5747\u4E3A\u827A\u672F\u793A\u610F\uFF0C\u4E0D\u662F\u5DF2\u786E\u8BA4\u7684\u8868\u9762\u73AF\u5883\u3002",sourceUrl:"https://science.nasa.gov/exoplanet-catalog/trappist-1-f/",sourceLabel:"NASA \u7CFB\u5916\u884C\u661F\u76EE\u5F55 \xB7 TRAPPIST-1 f",appearance:"\u827A\u672F\u793A\u610F\uFF1A\u84DD\u7070\u88C2\u9699\u3001\u971C\u767D\u7EB9\u7406\u4E0E\u6D45\u9752\u8584\u96FE"}),xn({id:"trappist-1-g",parentStarId:"trappist-1",cn:"TRAPPIST-1 g",en:"TRAPPIST-1 g",index:"g",type:"\u94F6\u6CB3\u7CFB / \u5DF2\u786E\u8BA4\u7CFB\u5916\u884C\u661F",modelStatus:"confirmed",r:2.8,orbitRadius:96,orbitalPeriod:106,phase:4.6,color:12830175,surfaceStyle:"ice-world",diameter:"\u7EA6 1.13",stat1:"\u534A\u5F84",unit1:"\u5730\u7403\u534A\u5F84",stat2:"\u516C\u8F6C\u5468\u671F",value2:"12.4",unit2:"\u5929",desc:"\u6CBF\u7740 TRAPPIST-1 \u7684\u8F68\u9053\u7EE7\u7EED\u5411\u5916\uFF0C\u662F\u534A\u5F84\u7565\u5927\u4E8E\u5730\u7403\u7684 g \u884C\u661F\uFF0C\u5B83\u7EA6\u6BCF 12.4 \u5929\u7ED5\u6BCD\u661F\u4E00\u5468\u3002\u6DE1\u7D2B\u51B0\u7EB9\u548C\u67D4\u767D\u4E91\u96FE\u4E3A\u827A\u672F\u793A\u610F\uFF0C\u4E0D\u4EE3\u8868\u5DF2\u63A2\u6D4B\u5230\u51B0\u76D6\u3001\u5927\u6C14\u6216\u6D77\u6D0B\u3002",sourceUrl:"https://science.nasa.gov/exoplanet-catalog/trappist-1-g/",sourceLabel:"NASA \u7CFB\u5916\u884C\u661F\u76EE\u5F55 \xB7 TRAPPIST-1 g",appearance:"\u827A\u672F\u793A\u610F\uFF1A\u6DE1\u7D2B\u88C2\u7EB9\u3001\u94F6\u767D\u6591\u5757\u4E0E\u51B7\u8272\u8FB9\u7F18"}),xn({id:"kepler-186-f",parentStarId:"kepler-186",cn:"\u5F00\u666E\u52D2-186 f",en:"KEPLER-186 f",index:"f",type:"\u94F6\u6CB3\u7CFB / \u5DF2\u786E\u8BA4\u7CFB\u5916\u884C\u661F",modelStatus:"confirmed",r:2.8,orbitRadius:65,orbitalPeriod:120,phase:1.85,color:12224117,surfaceStyle:"rocky-world",diameter:"1.17",stat1:"\u534A\u5F84",unit1:"\u5730\u7403\u534A\u5F84",stat2:"\u516C\u8F6C\u5468\u671F",value2:"129.9",unit2:"\u5929",desc:"2014 \u5E74\u516C\u5E03\u53D1\u73B0\u7684\u8FD1\u5730\u7403\u5927\u5C0F\u884C\u661F\uFF0C\u7ED5\u4E00\u9897 M \u578B\u7EA2\u77EE\u661F\u8FD0\u884C\uFF0C\u662F\u5F00\u666E\u52D2\u63A2\u7D22\u5B9C\u5C45\u5E26\u4E16\u754C\u7684\u91CD\u8981\u53D1\u73B0\u3002\u6696\u7EA2\u5CA9\u9762\u548C\u6D45\u8272\u9AD8\u5730\u4E3A\u827A\u672F\u793A\u610F\uFF1B\u771F\u5B9E\u5730\u8C8C\u3001\u5927\u6C14\u4E0E\u751F\u547D\u60C5\u51B5\u4ECD\u672A\u786E\u8BA4\u3002",sourceUrl:"https://science.nasa.gov/exoplanet-catalog/kepler-186-f/",sourceLabel:"NASA \u7CFB\u5916\u884C\u661F\u76EE\u5F55 \xB7 \u5F00\u666E\u52D2-186 f",appearance:"\u827A\u672F\u793A\u610F\uFF1A\u8D6D\u7EA2\u5CA9\u9762\u3001\u6D45\u8272\u9AD8\u5730\u4E0E\u6697\u8272\u76C6\u5730"}),xn({id:"kepler-22-b",parentStarId:"kepler-22",cn:"\u5F00\u666E\u52D2-22 b",en:"KEPLER-22 b",index:"b",type:"\u94F6\u6CB3\u7CFB / \u5DF2\u786E\u8BA4\u8D85\u7EA7\u5730\u7403",modelStatus:"confirmed",r:3.8,orbitRadius:90,orbitalPeriod:150,phase:3.9,color:7383482,surfaceStyle:"temperate-world",diameter:"2.1",stat1:"\u534A\u5F84",unit1:"\u5730\u7403\u534A\u5F84",stat2:"\u516C\u8F6C\u5468\u671F",value2:"289.9",unit2:"\u5929",desc:"2011 \u5E74\u516C\u5E03\u786E\u8BA4\u7684\u8D85\u7EA7\u5730\u7403\uFF0C\u73AF\u7ED5\u7C7B\u592A\u9633\u6052\u661F\u5F00\u666E\u52D2-22\uFF0C\u4E00\u5E74\u7EA6 289.9 \u5929\u3002\u5B83\u7684\u771F\u5B9E\u7EC4\u6210\u4E0E\u8868\u9762\u73AF\u5883\u4ECD\u4E0D\u786E\u5B9A\uFF1B\u84DD\u8272\u533A\u57DF\u548C\u767D\u8272\u4E91\u5C42\u662F\u827A\u672F\u793A\u610F\uFF0C\u4E0D\u610F\u5473\u7740\u5DF2\u7ECF\u786E\u8BA4\u5B58\u5728\u6D77\u6D0B\u6216\u751F\u547D\u3002",sourceUrl:"https://science.nasa.gov/exoplanet-catalog/kepler-22b/",sourceLabel:"NASA \u7CFB\u5916\u884C\u661F\u76EE\u5F55 \xB7 \u5F00\u666E\u52D2-22 b",appearance:"\u827A\u672F\u793A\u610F\uFF1A\u6DF1\u9752\u6591\u5757\u3001\u6DE1\u91D1\u6C99\u8272\u5730\u5F62\u4E0E\u67D4\u767D\u4E91\u5C42"}),xn({id:"hr8799-b",parentStarId:"hr8799",cn:"HR 8799 b",en:"HR 8799 b",index:"b",type:"\u94F6\u6CB3\u7CFB / \u5DF2\u786E\u8BA4\u6C14\u6001\u5DE8\u884C\u661F",modelStatus:"confirmed",r:3.5,orbitRadius:90,orbitalPeriod:160,phase:.7,color:15052683,diameter:"\u7EA6 7",stat1:"\u8D28\u91CF\u4F30\u8BA1",unit1:"\u6728\u661F\u8D28\u91CF",stat2:"\u516C\u8F6C\u5468\u671F",value2:"\u7EA6 465.8",unit2:"\u5E74",desc:"HR 8799 \u7CFB\u7EDF\u6700\u5916\u4FA7\u7684\u5DF2\u77E5\u884C\u661F\uFF0C\u901A\u8FC7\u76F4\u63A5\u6210\u50CF\u88AB\u53D1\u73B0\u3002NASA \u76EE\u5F55\u7ED9\u51FA\u7EA6 7 \u4E2A\u6728\u661F\u8D28\u91CF\u7684\u4F30\u8BA1\uFF1B\u753B\u9762\u4E2D\u7684\u6696\u8272\u4E91\u5E26\u3001\u6BD4\u4F8B\u4E0E\u8FD0\u884C\u901F\u5EA6\u4E3A\u827A\u672F\u6F14\u793A\u3002",sourceUrl:"https://science.nasa.gov/exoplanet-catalog/hr-8799-b/",sourceLabel:"NASA \u7CFB\u5916\u884C\u661F\u76EE\u5F55 \xB7 HR 8799 b",appearance:"\u7425\u73C0\u8272\u5BBD\u4E91\u5E26\u4E0E\u4E73\u767D\u98CE\u66B4"}),xn({id:"hr8799-c",parentStarId:"hr8799",cn:"HR 8799 c",en:"HR 8799 c",index:"c",type:"\u94F6\u6CB3\u7CFB / \u5DF2\u786E\u8BA4\u6C14\u6001\u5DE8\u884C\u661F",modelStatus:"confirmed",r:3.8,orbitRadius:75,orbitalPeriod:125,phase:2.3,color:14192750,diameter:"\u7EA6 10",stat1:"\u8D28\u91CF\u4F30\u8BA1",unit1:"\u6728\u661F\u8D28\u91CF",stat2:"\u516C\u8F6C\u5468\u671F",value2:"\u7EA6 189",unit2:"\u5E74",desc:"\u8FD9\u9897\u5DE8\u884C\u661F\u4F4D\u4E8E HR 8799 b \u8F68\u9053\u5185\u4FA7\uFF0C2008 \u5E74\u516C\u5E03\u53D1\u73B0\u3002NASA \u76EE\u5F55\u7ED9\u51FA\u7EA6 10 \u4E2A\u6728\u661F\u8D28\u91CF\u7684\u4F30\u8BA1\uFF1B\u68D5\u7EA2\u4E91\u5C42\u662F\u4F9D\u636E\u5DE8\u884C\u661F\u7279\u5F81\u7ED8\u5236\u7684\u827A\u672F\u8868\u9762\u3002",sourceUrl:"https://science.nasa.gov/exoplanet-catalog/hr-8799-c/",sourceLabel:"NASA \u7CFB\u5916\u884C\u661F\u76EE\u5F55 \xB7 HR 8799 c",appearance:"\u68D5\u7EA2\u4E91\u5E26\u4E0E\u91D1\u8272\u6DA1\u65CB"}),xn({id:"hr8799-d",parentStarId:"hr8799",cn:"HR 8799 d",en:"HR 8799 d",index:"d",type:"\u94F6\u6CB3\u7CFB / \u5DF2\u786E\u8BA4\u6C14\u6001\u5DE8\u884C\u661F",modelStatus:"confirmed",r:3.7,orbitRadius:60,orbitalPeriod:95,phase:4.1,color:12888025,diameter:"\u7EA6 10",stat1:"\u8D28\u91CF\u4F30\u8BA1",unit1:"\u6728\u661F\u8D28\u91CF",stat2:"\u516C\u8F6C\u5468\u671F",value2:"\u7EA6 101.4",unit2:"\u5E74",desc:"\u56DB\u9897\u5DF2\u77E5\u5DE8\u884C\u661F\u4E2D\u7684\u5185\u4FA7\u6210\u5458\u4E4B\u4E00\uFF0C\u4E5F\u5728 2008 \u5E74\u516C\u5E03\u53D1\u73B0\u3002\u5B83\u7ED5\u6052\u661F\u4E00\u5468\u9700\u8981\u7EA6\u4E00\u4E2A\u4E16\u7EAA\uFF1B\u8FD9\u91CC\u52A0\u5FEB\u65F6\u95F4\uFF0C\u8BA9\u9065\u8FDC\u7684\u516C\u8F6C\u5728\u773C\u524D\u5C55\u5F00\u3002\u7D2B\u7070\u8272\u7EB9\u7406\u4E3A\u827A\u672F\u793A\u610F\u3002",sourceUrl:"https://science.nasa.gov/exoplanet-catalog/hr-8799-d/",sourceLabel:"NASA \u7CFB\u5916\u884C\u661F\u76EE\u5F55 \xB7 HR 8799 d",appearance:"\u7D2B\u7070\u6761\u5E26\u4E0E\u6DE1\u7C89\u98CE\u66B4\u4E91\u5C42"}),xn({id:"hr8799-e",parentStarId:"hr8799",cn:"HR 8799 e",en:"HR 8799 e",index:"e",type:"\u94F6\u6CB3\u7CFB / \u5DF2\u786E\u8BA4\u6C14\u6001\u5DE8\u884C\u661F",modelStatus:"confirmed",r:3.6,orbitRadius:45,orbitalPeriod:65,phase:5.5,color:14993550,diameter:"\u7EA6 10",stat1:"\u8D28\u91CF\u4F30\u8BA1",unit1:"\u6728\u661F\u8D28\u91CF",stat2:"\u516C\u8F6C\u5468\u671F",value2:"\u7EA6 57",unit2:"\u5E74",desc:"2010 \u5E74\u516C\u5E03\u53D1\u73B0\uFF0C\u662F HR 8799 \u56DB\u9897\u5DF2\u77E5\u884C\u661F\u4E2D\u6700\u9760\u8FD1\u6052\u661F\u7684\u4E00\u9897\u3002\u5B83\u662F\u4E00\u9897\u53EF\u76F4\u63A5\u6210\u50CF\u7814\u7A76\u7684\u5DE8\u5927\u4E16\u754C\uFF1B\u753B\u9762\u4E2D\u7684\u91D1\u8272\u4E91\u5E26\u4E0E\u98CE\u66B4\u5F62\u6001\u4E3A\u827A\u672F\u6F14\u7ECE\u3002",sourceUrl:"https://science.nasa.gov/exoplanet-catalog/hr-8799-e/",sourceLabel:"NASA \u7CFB\u5916\u884C\u661F\u76EE\u5F55 \xB7 HR 8799 e",appearance:"\u91D1\u8272\u539A\u4E91\u5C42\u4E0E\u6DF1\u8910\u65CB\u6DA1"})],Qb=[xn({id:"andromeda-giant-demo",parentStarId:"af-and",cn:"\u4ED9\u5973\u5DE8\u884C\u661F\xB7\u793A\u610F",en:"ANDROMEDA GIANT \xB7 ILLUSTRATION",index:"SIM",type:"\u4ED9\u5973\u5EA7\u661F\u7CFB / \u865A\u6784\u5DE8\u884C\u661F\u793A\u610F",modelStatus:"illustration",r:4.2,orbitRadius:176,orbitalPeriod:120,phase:.9,color:9027037,diameter:"\u827A\u672F\u793A\u610F",stat1:"\u5929\u4F53\u72B6\u6001",stat2:"\u89C2\u6D4B\u786E\u8BA4",value2:"\u672A\u786E\u8BA4",desc:"\u4E3A\u661F\u7CFB\u6F2B\u6E38\u521B\u4F5C\u7684\u865A\u6784\u5DE8\u884C\u661F\uFF0C\u84DD\u8272\u4E91\u5E26\u4E0E\u98CE\u66B4\u5747\u4E3A\u827A\u672F\u8BBE\u8BA1\u3002\u753B\u9762\u501F AF And \u4F5C\u4E3A\u5BFC\u822A\u90BB\u5C45\uFF0C\u4E0D\u4EE3\u8868\u5DF2\u5728\u8FD9\u9897\u6052\u661F\u5468\u56F4\u53D1\u73B0\u884C\u661F\uFF0C\u4E5F\u4E0D\u4EE3\u8868\u771F\u5B9E\u8F68\u9053\u3002",sourceUrl:"https://academic.oup.com/mnras/article/447/3/2459/988608",sourceLabel:"\u6052\u661F\u80CC\u666F\u8D44\u6599 \xB7 \u6B64\u884C\u661F\u4E3A\u865A\u6784\u793A\u610F",appearance:"\u84DD\u94F6\u4E91\u5E26\u4E0E\u6DF1\u6D77\u84DD\u98CE\u66B4"}),xn({id:"triangulum-giant-demo",parentStarId:"romano-star",cn:"\u4E09\u89D2\u5DE8\u884C\u661F\xB7\u793A\u610F",en:"TRIANGULUM GIANT \xB7 ILLUSTRATION",index:"SIM",type:"\u4E09\u89D2\u5EA7\u661F\u7CFB / \u865A\u6784\u5DE8\u884C\u661F\u793A\u610F",modelStatus:"illustration",r:3.9,orbitRadius:192,orbitalPeriod:145,phase:2.7,color:7852997,diameter:"\u827A\u672F\u793A\u610F",stat1:"\u5929\u4F53\u72B6\u6001",stat2:"\u89C2\u6D4B\u786E\u8BA4",value2:"\u672A\u786E\u8BA4",desc:"\u5728\u4E09\u89D2\u5EA7\u661F\u7CFB\u573A\u666F\u4E2D\u52A0\u5165\u7684\u865A\u6784\u5DE8\u884C\u661F\uFF0C\u9752\u7EFF\u8272\u5927\u6C14\u662F\u827A\u672F\u60F3\u8C61\u3002\u5B83\u5728\u7F57\u9A6C\u8BFA\u4E4B\u661F\u65C1\u7684\u8FD0\u884C\u4EC5\u4E3A\u6F14\u793A\uFF0C\u4E0D\u662F\u5DF2\u786E\u8BA4\u7684\u884C\u661F\u53D1\u73B0\u6216\u771F\u5B9E\u6052\u661F\u7CFB\u7EDF\u3002",sourceUrl:"https://academic.oup.com/mnras/article/419/2/1455/989195",sourceLabel:"\u6052\u661F\u80CC\u666F\u8D44\u6599 \xB7 \u6B64\u884C\u661F\u4E3A\u865A\u6784\u793A\u610F",appearance:"\u9752\u7EFF\u6761\u5E26\u4E0E\u767D\u8272\u957F\u98CE\u66B4"}),xn({id:"lmc-giant-demo",parentStarId:"r136a1",cn:"\u9EA6\u54F2\u4F26\u5DE8\u884C\u661F\xB7\u793A\u610F",en:"MAGELLANIC GIANT \xB7 ILLUSTRATION",index:"SIM",type:"\u5927\u9EA6\u54F2\u4F26\u661F\u4E91 / \u865A\u6784\u5DE8\u884C\u661F\u793A\u610F",modelStatus:"illustration",r:4.4,orbitRadius:224,orbitalPeriod:155,phase:4.2,color:14986703,diameter:"\u827A\u672F\u793A\u610F",stat1:"\u5929\u4F53\u72B6\u6001",stat2:"\u89C2\u6D4B\u786E\u8BA4",value2:"\u672A\u786E\u8BA4",desc:"\u73AB\u7470\u8272\u4E91\u5E26\u6784\u6210\u4E00\u9897\u4E3A\u6F2B\u6E38\u521B\u4F5C\u7684\u865A\u6784\u5DE8\u884C\u661F\u3002\u5B83\u4E0E R136a1 \u7684\u4F4D\u7F6E\u5173\u7CFB\u4EC5\u4E3A\u5BFC\u822A\u548C\u89C6\u89C9\u6F14\u793A\uFF0C\u4E0D\u8868\u793A\u5B58\u5728\u5DF2\u53D1\u73B0\u7684\u884C\u661F\uFF0C\u4E5F\u4E0D\u6A21\u62DF\u771F\u5B9E\u8F90\u5C04\u73AF\u5883\u3002",sourceUrl:"https://www.eso.org/public/news/eso1030/",sourceLabel:"\u6052\u661F\u80CC\u666F\u8D44\u6599 \xB7 \u6B64\u884C\u661F\u4E3A\u865A\u6784\u793A\u610F",appearance:"\u73AB\u7470\u8272\u4E91\u5C42\u4E0E\u6D45\u91D1\u8272\u98CE\u66B4\u5E26"}),xn({id:"smc-giant-demo",parentStarId:"hd5980",cn:"\u5C0F\u9EA6\u54F2\u4F26\u5DE8\u884C\u661F\xB7\u793A\u610F",en:"SMC GIANT \xB7 ILLUSTRATION",index:"SIM",type:"\u5C0F\u9EA6\u54F2\u4F26\u661F\u4E91 / \u865A\u6784\u5DE8\u884C\u661F\u793A\u610F",modelStatus:"illustration",r:3.4,orbitRadius:208,orbitalPeriod:135,phase:5.1,color:10792169,surfaceStyle:"ice-giant",diameter:"\u827A\u672F\u793A\u610F",stat1:"\u5929\u4F53\u72B6\u6001",stat2:"\u89C2\u6D4B\u786E\u8BA4",value2:"\u672A\u786E\u8BA4",desc:"\u4E3A\u5C0F\u9EA6\u54F2\u4F26\u661F\u4E91\u573A\u666F\u8BBE\u8BA1\u7684\u865A\u6784\u5DE8\u884C\u661F\uFF0C\u51B0\u84DD\u5916\u89C2\u4E0E\u73AF\u6D41\u662F\u827A\u672F\u60F3\u8C61\u3002\u5B83\u56F4\u7ED5 HD 5980 \u56FE\u6807\u7684\u8FD0\u52A8\u4EC5\u4F5C\u5C55\u793A\uFF0C\u4E0D\u4EE3\u8868\u8FD9\u5EA7\u591A\u661F\u7CFB\u7EDF\u4E2D\u5DF2\u63A2\u6D4B\u5230\u884C\u661F\u3002",sourceUrl:"https://ntrs.nasa.gov/citations/19950037141",sourceLabel:"\u6052\u661F\u80CC\u666F\u8D44\u6599 \xB7 \u6B64\u884C\u661F\u4E3A\u865A\u6784\u793A\u610F",appearance:"\u51B0\u84DD\u8584\u4E91\u4E0E\u67D4\u548C\u7D2B\u8272\u7EAC\u5411\u7EB9\u7406"})],Ip=[...Mh,...Kb,...Jb,...Qb];var gi=Math.PI*2,Sh=Se.smoothstep;function Dp(i){let e=2166136261;for(let t of i)e=Math.imul(e^t.charCodeAt(0),16777619);return()=>(e=Math.imul(e,1664525)+1013904223|0,(e>>>0)/4294967296)}function Lt(i){return Math.sqrt(-2*Math.log(Math.max(1e-7,i())))*Math.cos(gi*i())}function eM(i){let e=i.arms||2,t=i.armTwist??(i.id==="andromeda"?2.05:1.5);return Array.from({length:6},(n,s)=>{let r=.34+s%3*.21,a=s%e*gi/e+Math.log(r/.12)*t;return{x:Math.cos(a)*r,z:Math.sin(a)*r,size:.018+s%3*.007}})}function tM(i){if(i.profile==="cigar")return[{x:-.34,z:.015,size:.07},{x:.25,z:-.025,size:.055},{x:.02,z:.015,size:.09}];if(i.id==="lmc")return[{x:-.5,z:-.15,size:.11},{x:.48,z:.22,size:.095},{x:.1,z:-.38,size:.15},{x:-.26,z:.32,size:.17}];if(i.id==="smc")return[{x:-.3,z:-.16,size:.22},{x:.2,z:.12,size:.16},{x:.6,z:.3,size:.12}];let e=Dp(`${i.id}-associations`);return Array.from({length:5},(t,n)=>{let s=n*gi/5+(e()-.5)*.9,r=.25+e()*.43;return{x:Math.cos(s)*r+.08,z:Math.sin(s)*r*.7,size:.06+e()*.075}})}function nM(i,e,t){let n=Dp(i.id),s=i.shape==="spiral",r=i.shape==="elliptical",a=r&&(i.profile||(i.id==="m32"?"compact":"diffuse"))==="compact",o=r&&i.profile==="giant",l=r&&i.profile==="dust-lane",c=s&&i.profile==="lenticular",u=i.profile==="cigar",f=Se.clamp(i.axisRatio??(a?.76:.55),.35,1),h=i.id==="andromeda",d=i.id==="lmc",g=d||i.id==="smc",x=t?h?6800:s?5500:r?a?4200:3500:d?4600:g?4e3:2400:h?18e3:s?15e3:r?a?11e3:9e3:d?12e3:g?1e4:6200,m=new Float32Array(x*3),p=new Float32Array(x*3),_=new Float32Array(x),M=r||c?[]:s?eM(i):tM(i),y=new ge(r?a||o?16770494:15128509:h?16767394:15387550),b=new ge(h?9944555:9095157),S=new ge(15569341),w=new ge(r?16774373:15265791),v=new ge,E=i.radius;for(let C=0;C<x;C++){let R=n(),D,k,N,O,U=!1,W=!1,V=!1,B=1;if(u)if(R<.085){let $=.12+Math.pow(n(),.8)*.7;D=Lt(n)*(.035+$*.16),N=(n()<.5?-1:1)*$,k=Lt(n)*.025,O=Math.hypot(D,N),V=!0,B=.44*(1-$*.55)}else if(R<.45){let $=M[Math.floor(n()*M.length)];D=$.x+Lt(n)*$.size,N=$.z+Lt(n)*$.size*.7,k=Lt(n)*.035,O=Math.hypot(D,N),W=!0,U=!0}else D=(n()*2-1)*.94,N=Lt(n)*(.035+.065*(1-Math.abs(D))),k=Lt(n)*.045,O=Math.hypot(D,N),B=Math.abs(N+.025*Math.sin(D*12))<.018?.17:.8;else if(c)if(U=R<(i.bulgeFraction??.52),U){O=Math.pow(n(),1.18)*.55;let $=n()*gi,xe=n()*2-1,ee=Math.sqrt(1-xe*xe);D=Math.cos($)*ee*O,N=Math.sin($)*ee*O,k=xe*O*.72,B=Math.abs(k)<.028?.035:1}else{O=.18+Math.pow(n(),.72)*.82;let $=n()*gi;D=Math.cos($)*O,N=Math.sin($)*O,k=Lt(n)*.018,B=Math.abs(k)<.009?.08:.8}else if(r){U=R<(a?.4:o?.32:l?.23:.035),O=U?Math.pow(n(),1.55)*(a?.14:o||l?.23:.18):Math.pow(n(),a?1.1:o?.86:l?.8:.57)*.96;let $=n()*gi,xe=n()*2-1,ee=Math.sqrt(1-xe*xe);D=Math.cos($)*ee*O,N=Math.sin($)*ee*O*f,k=xe*O*f*(o?1:.78),B=a?.9:o?.94:l?.82:.62,l&&Math.abs(k)<.043+Math.abs(D)*.035&&(B*=.035)}else if(s){let $=i.bulgeFraction??(h?.26:.075);if(R<$){O=Math.pow(n(),1.4)*(h?.24:.13);let xe=n()*gi;D=Math.cos(xe)*O,N=Math.sin(xe)*O,k=Lt(n)*(h?.047:.022)*(1-O/.3),U=!0}else if(R>(h?.955:.9)){let xe=M[Math.floor(n()*M.length)];D=xe.x+Lt(n)*xe.size,N=xe.z+Lt(n)*xe.size,k=Lt(n)*.008,O=Math.hypot(D,N),W=!0}else{O=.1+Math.pow(n(),.69)*.9;let ee=Math.floor(n()*(i.arms||2))*gi/(i.arms||2)+Math.log(O/.12)*(i.armTwist??(h?2.05:1.5)),te=Lt(n)*(i.armSpread??(h?.115:.22)),q=R>(h?.48:.39),z=q?ee+te:n()*gi;D=Math.cos(z)*O+Lt(n)*.009,N=Math.sin(z)*O+Lt(n)*.009,k=Lt(n)*(.004+O*.012),q&&te<-.035&&te>-.115&&(B=h?.2:.48),q||(B*=.65)}}else if(g&&R<(d?.43:.2))D=(n()-.5)*(d?1.48:1.05),N=Lt(n)*.075+D*(d?.1:.28),k=Lt(n)*.035,O=Math.hypot(D,N),U=!0;else if(R<(g?d?.77:.79:.56)){let $=M[Math.floor(n()*M.length)];D=$.x+Lt(n)*$.size,N=$.z+Lt(n)*$.size*.74,k=Lt(n)*$.size*(g?.4:.62),O=Math.hypot(D,N),W=!0}else{O=Math.sqrt(n());let $=n()*gi;D=Math.cos($)*O*.88+Math.sin($*2)*.13,N=Math.sin($)*O*.58+D*.2,k=Lt(n)*.055,B=g?.63:.42}m[C*3]=D*E,m[C*3+1]=k*E,m[C*3+2]=N*E,v.copy(r||c||U?y:b),r?v.lerp(w,U?.42:.18+O*.28):!U&&!W&&v.lerp(y,Math.max(0,.42-O*.7)),W&&n()<(h?.22:g||s?.4:.12)&&v.copy(S),n()<.16&&v.lerp(w,.75),V&&v.setHex(16734066);let G=(.58+n()*.94)*B;p[C*3]=v.r*G,p[C*3+1]=v.g*G,p[C*3+2]=v.b*G,_[C]=(r?U?1.65:1.05:W?2.15:U?1.85:1.25)+n()*(r?1.05:1.4)}let T=qa(m,p,_,E*3.6,0,e);return T.name=`${i.id}-stars`,T.geometry.computeBoundingSphere(),{points:T,knots:M,count:x}}function Lp(i,e,t){let n=new Map,s=[],r=(globalThis.innerWidth??1024)<=600,a=[],o=!1;for(let u of t){let f=new ze;f.name=`nearby-${u.id}`,f.position.fromArray(u.position),f.rotation.fromArray(u.tilt||[0,0,0]),f.visible=!1;let{points:h,knots:d,count:g}=nM(u,e,r),x=u.shape==="spiral",m=u.shape==="elliptical",p=m&&(u.profile||(u.id==="m32"?"compact":"diffuse"))==="compact",_=m&&u.profile==="giant",M=u.profile==="dust-lane"||u.profile==="lenticular",y=u.profile==="cigar",b=u.id==="andromeda",S=!x&&!m&&u.id!=="lmc"&&u.id!=="smc",w=Kn(m?16769982:b?16766624:u.color||10668271,u.radius*(m?p?.42:_?.68:.6:b?.56:y?.18:.25),0);w.name=`${u.id}-core-glow`;let v=[w],E=[M?.015:m?p?.25:_?.22:.035:b?.31:x?.14:y?.065:S?.025:.09];if(f.add(h,w),!b)for(let C of d.slice(0,2)){let R=Kn(y?16751535:x?13146073:9353453,u.radius*(x?.14:y?.15:S?.2:.32),0);R.position.set(C.x*u.radius,0,C.z*u.radius),f.add(R),v.push(R),E.push(x?.1:y?.07:S?.045:.075)}i.add(f);let T={definition:u,group:f,points:h,halo:w};n.set(u.id,T),s.push(h),a.push({...T,accents:v,accentOpacities:E,count:g})}function l(u,{stage:f,activeGalaxyId:h,distance:d}={}){if(o)return;let g=f==="galaxy"||f==="local-group";for(let x of a){let{definition:m,group:p,points:_,count:M,accents:y,accentOpacities:b}=x;if(p.visible=g,!g)continue;let S=u.position.distanceTo(p.position),w=m.radius,v=h===m.id,E=Number.isFinite(d)?d:S,T=v?Sh(E,w*12e-5,w*.025):1,C=.18+.82*Sh(S,w*.1,w*1.15);_.material.uniforms.uPerspective.value=Math.min(w*3.6,Math.max(w*.025,S*.95));let R=Se.clamp(w*14/Math.max(S,1),.42,1);_.geometry.setDrawRange(0,Math.ceil(M*R));let D=T*C*(f==="local-group"||v?.92:.74);_.material.uniforms.uOpacity.value=D/Math.sqrt(R);let k=D*Sh(S,w*.18,w*1.25);for(let N=0;N<y.length;N++)y[N].material.opacity=k*b[N];p.visible=D>.001}}function c(){if(!o){o=!0;for(let{group:u,points:f,accents:h}of a){i.remove(u),f.geometry.dispose(),f.material.dispose();for(let d of h)d.material.dispose()}}}return{galaxies:n,starFields:s,update:l,dispose:c}}var iM=`
  varying vec3 vLocal;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vLocal = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    #include <logdepthbuf_vertex>
  }
`,sM=`
  uniform vec3 uColor, uViewDirection;
  uniform float uTime, uSeed, uOuterRadius;
  varying vec3 vLocal;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
      mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  void main() {
    vec2 p = vLocal.xz;
    float radius = length(p);
    float angle = atan(p.y, p.x);
    float flow = angle - uTime * 0.48 / pow(radius, 1.5) + uSeed;
    vec2 advected = vec2(cos(flow), sin(flow)) * radius;
    float turbulence = noise(advected * 7.0) * 0.55
      + noise(advected * 19.0) * 0.30 + noise(advected * 51.0) * 0.15;
    float filaments = 0.5 + 0.5 * sin(radius * 78.0
      + sin(flow * 7.0) * 0.8 + turbulence * 5.0);
    float wisps = 0.5 + 0.5 * sin(radius * 29.0 - flow * 5.0 + turbulence * 2.0);
    float heat = pow(clamp(1.0 - (radius - 1.24) / (uOuterRadius - 1.24), 0.0, 1.0), 1.35);
    vec3 outerColor = mix(vec3(0.25, 0.036, 0.008), uColor * 0.24, 0.38);
    vec3 innerColor = mix(uColor, vec3(1.0, 0.88, 0.65), heat * 0.70);
    vec3 color = mix(outerColor, innerColor, heat);
    vec3 tangent = normalize(vec3(-p.y, 0.0, p.x));
    float approach = dot(tangent, normalize(uViewDirection));
    float brightness = (0.48 + filaments * 0.46 + wisps * 0.22 + turbulence * 0.32)
      * (1.0 + approach * 0.38);
    float edge = smoothstep(1.24, 1.39, radius)
      * (1.0 - smoothstep(uOuterRadius * 0.79, uOuterRadius, radius));
    float alpha = edge * (0.52 + heat * 0.43);
    // Near the disk plane, the lens field below renders the whole visible disk
    // together. Rendering the physical front half too would fill the shadow
    // with a broad orange ellipse. Steeper views reveal the physical disk.
    float physicalDisk = smoothstep(0.16, 0.55, abs(uViewDirection.y));
    gl_FragColor = vec4(min(color * brightness * (0.62 + heat * 0.62), vec3(1.1)),
      alpha * physicalDisk);
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,rM=`
  uniform vec3 uColor;
  uniform vec2 uDiskAxis;
  uniform float uTime, uInclination;
  varying vec3 vLocal;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  void main() {
    vec2 p = vec2(dot(vLocal.xy, uDiskAxis),
      dot(vLocal.xy, vec2(-uDiskAxis.y, uDiskAxis.x)));
    // Only this hairline foreground image is allowed across the dark center.
    // Its width stays sub-percent of the shadow, with pixel antialiasing.
    float width = max(0.005, fwidth(p.y) * 0.48);
    float line = exp(-pow(p.y / width, 2.0));
    float ends = 1.0 - smoothstep(1.025, 1.15, abs(p.x));
    float lensStrength = 1.0 - smoothstep(0.16, 0.38, 1.0 - uInclination);
    float detail = 0.88 + 0.12 * sin(p.x * 21.0 - uTime * 0.1);
    float alpha = line * ends * lensStrength * detail * 0.83;
    if (alpha < 0.002) discard;
    gl_FragColor = vec4(mix(uColor, vec3(1.0, 0.83, 0.58), 0.85), alpha);
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,aM=`
  uniform vec3 uColor;
  uniform vec2 uDiskAxis;
  uniform float uTime, uInclination, uOuterRadius, uSeed;
  varying vec3 vLocal;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
      mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float smoothUnion(float a, float b, float softness) {
    float h = clamp(0.5 + 0.5 * (b - a) / softness, 0.0, 1.0);
    return mix(b, a, h) - softness * h * (1.0 - h);
  }
  void main() {
    vec2 p = vec2(dot(vLocal.xy, uDiskAxis),
      dot(vLocal.xy, vec2(-uDiskAxis.y, uDiskAxis.x)));
    float radius = length(p);
    // No transparent orange wash or procedural glow is drawn inside the
    // shadow. The separate, very thin foreground disk is its only crossing.
    if (radius < 1.005) discard;
    float faceOn = 1.0 - uInclination;
    float lensStrength = 1.0 - smoothstep(0.22, 0.55, faceOn);
    if (lensStrength < 0.002 || abs(p.x) > uOuterRadius * 0.98) discard;
    float opening = max(0.009, faceOn * mix(0.22, 1.0, smoothstep(0.12, 0.55, faceOn)));
    vec2 axes = vec2(uOuterRadius, max(0.035, uOuterRadius * opening));
    float ellipseRadius = length(p / axes);
    float ellipseGradient = length(p / (axes * axes));
    float diskDistance = ellipseRadius * (ellipseRadius - 1.0) / max(ellipseGradient, 0.001);
    float shadowDistance = radius - 1.065;
    // One smooth signed field produces both the upper/lower bending and the
    // narrow wings. The necks are continuous rather than overlapping circles.
    float field = smoothUnion(shadowDistance, diskDistance, 0.22);
    // Most of the enclosing camera plane is empty sky; skip its noise work.
    if (field > 0.72) discard;
    float width = mix(0.170, 0.023, smoothstep(0.85, 1.85, abs(p.x)));
    float layer = field / width;
    float angle = atan(p.y, p.x);
    float flow = angle - uTime * 0.08 / max(1.0, radius) + uSeed;
    vec2 advected = vec2(cos(flow), sin(flow)) * radius;
    float turbulence = noise(advected * 5.0) * 0.52 + noise(advected * 17.0) * 0.32
      + noise(advected * 43.0) * 0.16;
    float warpedLayer = layer + (turbulence - 0.5) * 0.28
      + sin(flow * 3.0 + layer * 1.8) * 0.085;
    float stream = pow(0.5 + 0.5 * sin(warpedLayer * 18.0
      + turbulence * 5.0 + sin(flow * 7.0) * 0.8), 0.72);
    float fine = 0.5 + 0.5 * sin(warpedLayer * 43.0 + turbulence * 8.0);
    float envelope = exp(-pow((layer - 0.32) / 1.03, 2.0));
    float layers = envelope * (0.52 + stream * 0.36 + fine * 0.12);

    // Uncompress the wings into disk coordinates: their interior shows
    // differential rotation and curled filaments, not two parallel outlines.
    vec2 diskPoint = vec2(p.x, p.y / opening);
    float diskRadius = max(1.0, length(diskPoint));
    float diskFlow = atan(diskPoint.y, diskPoint.x)
      - uTime * 0.32 / pow(diskRadius, 1.5) + uSeed;
    vec2 diskAdvection = vec2(cos(diskFlow), sin(diskFlow)) * diskRadius;
    float diskNoise = noise(diskAdvection * 5.0) * 0.65 + noise(diskAdvection * 19.0) * 0.35;
    float diskFilaments = 0.5 + 0.5 * sin(diskRadius * 25.0
      + diskNoise * 7.0 + sin(diskFlow * 5.0) * 1.4);
    float diskInterior = (1.0 - smoothstep(0.95, 1.01, ellipseRadius))
      * smoothstep(1.08, 1.50, abs(p.x)) * (0.18 + diskFilaments * 0.39 + diskNoise * 0.12);
    float haloWidth = mix(0.25, 0.045, smoothstep(0.85, 1.90, abs(p.x)));
    float halo = exp(-pow(max(field, 0.0) / haloWidth, 2.0))
      * smoothstep(0.1, 0.65, layer) * 0.15;
    float outerFade = 1.0 - smoothstep(uOuterRadius * 0.70, uOuterRadius * 0.98, abs(p.x));
    float shadowMask = smoothstep(1.005, 1.035, radius);
    float asymmetry = mix(0.77, 1.0, smoothstep(-0.3, 0.3, p.y))
      * (0.93 + 0.07 * sin(flow));
    float bandAlpha = min(0.98, layers + diskInterior) * asymmetry;
    float alpha = min(0.99, bandAlpha + halo) * lensStrength * outerFade * shadowMask;
    if (alpha < 0.002) discard;
    float heat = clamp(1.0 - (layer + 0.25) / 2.5, 0.0, 1.0);
    vec3 orange = mix(vec3(0.39, 0.072, 0.012), vec3(1.08, 0.56, 0.18), heat);
    float hotStrand = pow(clamp(heat * 0.55 + stream * 0.45, 0.0, 1.0), 1.3);
    vec3 color = mix(orange, vec3(1.12, 0.98, 0.77), hotStrand * 0.81);
    color = mix(color, color * mix(vec3(1.0), uColor, 0.25), 0.25);
    color = (color * bandAlpha + vec3(0.85, 0.28, 0.065) * halo)
      / max(bandAlpha + halo, 0.001);
    // Local soft edges provide the glow. Bounded energy keeps postprocessing
    // bloom from bleaching the layered filaments or washing the shadow brown.
    gl_FragColor = vec4(color, alpha);
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Eh(i,e){return new Je({vertexShader:iM,fragmentShader:i,uniforms:e,transparent:!0,depthWrite:!1,side:pt,forceSinglePass:!0})}function Fp(i){let e=i.r,t=Math.max(2,i.diskOuterRadius??4.5),n=new ge(i.color??16755286),s=new ze;s.name=i.id,s.userData.bodyId=i.id;let r=new We(new Pt(e,72,48),new on({color:0}));r.name=`${i.id}-shadow`,s.add(r);let a=new qn(1.24,t,180,32);a.rotateX(-Math.PI/2);let o=[...i.id].reduce((S,w)=>S*31+w.charCodeAt(0)>>>0,0),l=new We(a,Eh(sM,{uTime:{value:0},uSeed:{value:o/4294967296*Math.PI*2},uColor:{value:n.clone()},uOuterRadius:{value:t},uViewDirection:{value:new I(.45,.38,1).normalize()}}));l.name=`${i.id}-accretion-disk`,l.scale.setScalar(e),l.rotation.fromArray(i.diskTilt??[.12,0,-.22]),l.renderOrder=1,s.add(l);let c=new We(new ui(2.5,2.5),Eh(rM,{uTime:{value:0},uColor:{value:n.clone()},uDiskAxis:{value:new ce(1,0)},uInclination:{value:.94}}));c.name=`${i.id}-foreground-photon-image`,c.scale.setScalar(e),c.material.depthTest=!1,c.renderOrder=3,s.add(c);let u=new We(new ui((t+.4)*2,(t+.4)*2),Eh(aM,{uTime:{value:0},uColor:{value:n.clone()},uInclination:{value:.94},uDiskAxis:{value:new ce(1,0)},uOuterRadius:{value:t},uSeed:{value:o/4294967296*Math.PI*2}}));u.name=`${i.id}-lensed-light-illustration`,u.scale.setScalar(e),u.renderOrder=2,s.add(u),s.traverse(S=>{S.userData.bodyId=i.id});let f=new ot,h=new I,d=new _t,g=new _t,x=new _t,m=new I,p=!1;function _(S){if(!(p||!Number.isFinite(S)))for(let w of[l,c,u])w.material.uniforms.uTime.value=S}function M(S){if(p)return;s.updateWorldMatrix(!0,!0),S.getWorldPosition(h),f.copy(l.matrixWorld).invert();let w=l.material.uniforms.uViewDirection.value;w.copy(h).applyMatrix4(f).normalize(),u.material.uniforms.uInclination.value=1-Math.abs(w.y),c.material.uniforms.uInclination.value=1-Math.abs(w.y),S.getWorldQuaternion(d),x.copy(d).invert(),m.set(0,1,0).transformDirection(l.matrixWorld).applyQuaternion(x);let v=u.material.uniforms.uDiskAxis.value;Math.hypot(m.x,m.y)>1e-4&&v.set(m.y,-m.x).normalize(),c.material.uniforms.uDiskAxis.value.copy(v),s.getWorldQuaternion(g).invert(),c.quaternion.copy(g).multiply(d),u.quaternion.copy(c.quaternion)}function y(S,w,v){let E=[l,c,u],T=E.map(C=>({quaternion:C.quaternion.clone(),uniforms:Object.fromEntries(Object.entries(C.material.uniforms).map(([R,D])=>[R,D.value?.clone?D.value.clone():D.value]))}));try{return _(w),M(S),v()}finally{E.forEach((C,R)=>{C.quaternion.copy(T[R].quaternion);for(let[D,k]of Object.entries(T[R].uniforms)){let N=C.material.uniforms[D];N.value?.copy?N.value.copy(k):N.value=k}})}}function b(){if(!p){p=!0,s.removeFromParent();for(let S of[r,l,c,u])S.geometry.dispose(),S.material.dispose()}}return{group:s,mesh:r,accretionDisk:l,photonRing:c,lensedArcs:u,pickMeshes:[r,l],visualRadius:e*t,update:_,updateCamera:M,renderPreview:y,dispose:b}}var Mc=Math.PI*2,Up=`
  varying vec3 vSurface, vWorldNormal, vWorldPosition;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vSurface = position;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
    #include <logdepthbuf_vertex>
  }
`,Th=`
  float hash(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }
  float noise3(vec3 p) {
    vec3 cell = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(cell), hash(cell + vec3(1, 0, 0)), f.x),
          mix(hash(cell + vec3(0, 1, 0)), hash(cell + vec3(1, 1, 0)), f.x), f.y),
      mix(mix(hash(cell + vec3(0, 0, 1)), hash(cell + vec3(1, 0, 1)), f.x),
          mix(hash(cell + vec3(0, 1, 1)), hash(cell + vec3(1, 1, 1)), f.x), f.y), f.z);
  }
  float turbulence(vec3 p) {
    return noise3(p) * 0.58 + noise3(p * 2.07 + 13.7) * 0.28
      + noise3(p * 4.11 - 7.3) * 0.14;
  }
`,oM=`
  uniform vec3 uColor, uHotColor;
  uniform float uTime, uSeed, uCells, uEmission;
  varying vec3 vSurface, vWorldNormal, vWorldPosition;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  ${Th}
  void main() {
    vec3 p = normalize(vSurface);
    vec3 drift = vec3(uTime * 0.015, -uTime * 0.008, uSeed);
    float convection = turbulence(p * 5.0 + drift * 0.4);
    vec3 warped = p * uCells + convection * 2.5 + drift;
    float cells = noise3(warped);
    float grains = noise3(warped * 3.7 + 8.3);
    // Smooth dark seams and bright cell interiors, with larger convection
    // structures on red supergiants than on compact blue and gold stars.
    float seams = smoothstep(0.28, 0.58, cells);
    float granular = mix(0.42, 1.10, seams) + (grains - 0.5) * 0.20;
    float hotRegions = smoothstep(0.48, 0.82, convection);
    vec3 surface = mix(uColor, uHotColor, 0.15 + hotRegions * 0.48);
    float mu = clamp(dot(normalize(vWorldNormal),
      normalize(cameraPosition - vWorldPosition)), 0.0, 1.0);
    float limb = 0.42 + 0.58 * sqrt(mu);
    vec3 emitted = surface * granular * limb * uEmission;
    gl_FragColor = vec4(max(emitted, vec3(0.0)), 1.0);
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,lM=`
  uniform vec3 uColor, uBandColor, uLightDirection, uLightColor;
  uniform float uTime, uSeed, uIce;
  varying vec3 vSurface, vWorldNormal, vWorldPosition;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  ${Th}
  void main() {
    vec3 p = normalize(vSurface);
    float weather = turbulence(p * 7.0 + vec3(uSeed, uTime * 0.008, 0.0));
    float fine = noise3(p * 43.0 + weather * 1.2 + uSeed);
    float latitude = p.y + (weather - 0.5) * mix(0.070, 0.020, uIce);
    float bands = sin(latitude * mix(55.0, 29.0, uIce) + uSeed);
    float narrowBands = sin(latitude * 143.0 + fine * 1.3) * 0.12;
    float cloudBelt = smoothstep(-0.50, 0.60, bands + narrowBands);
    vec3 surface = mix(uColor, uBandColor, cloudBelt * mix(0.82, 0.42, uIce));
    surface *= 0.90 + weather * 0.17 + fine * 0.12;

    // One local oval cloud vortex, expressed on the sphere without a UV seam.
    // Its placement and palette are artistic, not claimed observations.
    float longitude = atan(p.z, abs(p.x) + abs(p.z) < 0.00001 ? 0.00001 : p.x);
    float stormLongitude = sin(longitude - uSeed * 0.73);
    float facingStorm = smoothstep(0.0, 0.35, cos(longitude - uSeed * 0.73));
    vec2 storm = vec2(stormLongitude * 6.0, (p.y + 0.23) * 15.0);
    float stormRadius = length(storm);
    float vortex = (1.0 - smoothstep(0.50, 1.0, stormRadius)) * facingStorm;
    float stormAngle = atan(storm.y,
      abs(storm.x) + abs(storm.y) < 0.00001 ? 0.00001 : storm.x);
    float spiral = 0.5 + 0.5 * sin(stormRadius * 23.0
      - stormAngle * 2.0 + weather * 4.0);
    vec3 stormColor = mix(uBandColor * 0.70, uColor * 1.20, spiral);
    surface = mix(surface, stormColor, vortex * mix(0.85, 0.48, uIce));

    vec3 n = normalize(vWorldNormal), viewDir = normalize(cameraPosition - vWorldPosition);
    float sunlight = dot(n, normalize(uLightDirection));
    float diffuse = max(sunlight, 0.0);
    // Each planet is lit by its own host. No scene-wide lights are introduced.
    vec3 illumination = vec3(0.012) + uLightColor * pow(diffuse, 0.82) * 1.28;
    float rim = pow(clamp(1.0 - dot(n, viewDir), 0.0, 1.0), 4.0);
    vec3 haze = mix(uColor, vec3(0.55, 0.76, 0.94), 0.45)
      * rim * smoothstep(-0.16, 0.45, sunlight) * 0.25;
    gl_FragColor = vec4(max(surface * illumination + haze, vec3(0.0)), 1.0);
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,cM=`
  uniform vec3 uColor, uLightDirection;
  uniform float uStrength, uStar, uTime;
  varying vec3 vSurface, vWorldNormal, vWorldPosition;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  void main() {
    vec3 n = normalize(vWorldNormal), v = normalize(cameraPosition - vWorldPosition);
    float rim = pow(clamp(1.0 - abs(dot(n, v)), 0.0, 1.0), 3.1);
    float sunward = smoothstep(-0.24, 0.62, dot(n, normalize(uLightDirection)));
    float light = mix(0.06 + sunward * 0.94, 1.0, uStar);
    float wisps = 0.9 + 0.1 * sin(vSurface.y * 31.0 + vSurface.x * 19.0 + uTime * 0.12);
    gl_FragColor = vec4(uColor * mix(1.1, 1.7, uStar),
      clamp(rim * uStrength * light * mix(1.0, wisps, uStar), 0.0, 1.0));
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,uM=`
  uniform vec3 uColor, uLightDirection, uLightColor;
  uniform float uTime, uSeed, uTerrain;
  varying vec3 vSurface, vWorldNormal, vWorldPosition;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  ${Th}
  void main() {
    vec3 p = normalize(vSurface);
    vec3 offset = vec3(uSeed, uSeed * 0.37, -uSeed * 0.61);
    float continental = turbulence(p * 3.8 + offset);
    float relief = turbulence(p * 17.0 + offset + continental * 2.5);
    float grains = noise3(p * 94.0 + offset);
    float ridges = 1.0 - abs(noise3(p * 29.0 + offset) * 2.0 - 1.0);
    float land = smoothstep(0.47, 0.55, continental);
    float polar = smoothstep(0.67, 0.94, abs(p.y) + (relief - 0.5) * 0.27);
    float water = 0.0;
    vec3 surface;
    if (uTerrain < 1.5) {
      vec3 stone = mix(uColor * 0.34, uColor * 1.1 + vec3(0.1, 0.08, 0.06), relief);
      float basins = smoothstep(0.37, 0.54, continental);
      surface = stone * (0.61 + basins * 0.52) * (0.81 + grains * 0.26);
      surface *= 1.0 - pow(ridges, 14.0) * 0.16;
      surface = mix(surface, vec3(0.54, 0.57, 0.58), polar * 0.30);
    } else if (uTerrain < 2.5) {
      vec3 ocean = mix(uColor * 0.22, uColor * 0.78, smoothstep(0.30, 0.49, continental));
      vec3 rock = mix(vec3(0.12, 0.18, 0.15), vec3(0.51, 0.44, 0.31), relief);
      rock *= 0.83 + grains * 0.25;
      surface = mix(ocean, rock, land);
      surface = mix(surface, vec3(0.77, 0.84, 0.83), polar);
      water = (1.0 - land) * (1.0 - polar);
    } else {
      vec3 ice = mix(uColor * 0.46, vec3(0.81, 0.88, 0.88), relief * 0.7 + polar * 0.3);
      float fractures = pow(ridges, 19.0) * (0.45 + continental * 0.55);
      surface = ice * (0.84 + grains * 0.15) * (1.0 - fractures * 0.31);
      surface = mix(surface, uColor * 0.25, (1.0 - land) * 0.24);
    }

    vec3 cloudPoint = p * 6.5 + vec3(uTime * 0.007, 0.0, -uTime * 0.004) + offset;
    float cloudNoise = turbulence(cloudPoint + turbulence(cloudPoint * 0.7) * 1.8);
    float clouds = smoothstep(0.54, 0.73, cloudNoise) * (uTerrain < 1.5 ? 0.12 : 0.8);
    surface = mix(surface, vec3(0.85, 0.88, 0.87), clouds);
    vec3 n = normalize(vWorldNormal), light = normalize(uLightDirection);
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    float sunlight = dot(n, light), diffuse = max(sunlight, 0.0);
    vec3 illumination = vec3(0.012) + uLightColor * pow(diffuse, 0.82) * 1.28;
    float rim = pow(clamp(1.0 - dot(n, viewDir), 0.0, 1.0), 4.0);
    vec3 haze = mix(uColor, vec3(0.55, 0.76, 0.94), 0.58)
      * rim * smoothstep(-0.16, 0.45, sunlight) * (uTerrain < 1.5 ? 0.08 : 0.25);
    vec3 halfDirection = normalize(light + viewDir + vec3(0.00001));
    float glint = pow(max(dot(n, halfDirection), 0.0), 65.0) * water * (1.0 - clouds) * diffuse;
    gl_FragColor = vec4(max(surface * illumination + haze + uLightColor * glint * 0.30, vec3(0.0)), 1.0);
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Np(i){let e=2166136261;for(let t of i)e=Math.imul(e^t.charCodeAt(0),16777619);return(e>>>0)/4294967296}function hM(){let e=new Uint8Array(16384);for(let n=0;n<64;n++)for(let s=0;s<64;s++){let r=Math.hypot((s+.5)/64*2-1,(n+.5)/64*2-1),a=Math.exp(-r*r*7.5)*(1-Se.smoothstep(r,.72,1)),o=(n*64+s)*4;e[o]=e[o+1]=e[o+2]=255,e[o+3]=Math.round(a*255)}let t=new pn(e,64,64);return t.magFilter=t.minFilter=Tt,t.needsUpdate=!0,t}function dM(i,e){let t=i.kind==="star",n=i.surfaceStyle==="red-star",s=i.surfaceStyle==="blue-star",r=i.surfaceStyle==="ice-giant",a=["rocky-world","temperate-world","ice-world"].indexOf(i.surfaceStyle)+1,o=new ge(i.color??(t?16757610:13213555)),l={uColor:{value:o},uTime:{value:0},uSeed:{value:e*19.7}};return t?Object.assign(l,{uHotColor:{value:new ge(s?15069951:n?16761461:16771508)},uCells:{value:n?19:s?52:38},uEmission:{value:s?1.65:n?2:2.15}}):Object.assign(l,{uBandColor:{value:o.clone().lerp(new ge(r?14153205:6372135),r?.48:.54)},uLightDirection:{value:new I(1,0,0)},uLightColor:{value:new ge(16777215)},uIce:{value:Number(r)},uTerrain:{value:a}}),new Je({uniforms:l,vertexShader:Up,fragmentShader:t?oM:a?uM:lM})}function Op(i,e,t=[]){let n=new ze;n.name="deep-space-bodies";let s=new Map,r=[],a=[],o=new Map,l=new Pt(1,80,48),c=hM(),u=Array.from({length:160},(M,y)=>{let b=y/160*Mc;return new I(Math.cos(b),0,Math.sin(b))}),f=new Ke().setFromPoints(u),h=globalThis.matchMedia?.("(prefers-reduced-motion: reduce)"),d=0,g=!1;i.add(n);for(let M of t){if(M.kind==="black-hole"){let R=Fp(M),{group:D,mesh:k,accretionDisk:N,photonRing:O,lensedArcs:U,pickMeshes:W,visualRadius:V}=R;Array.isArray(M.position)?D.position.fromArray(M.position):M.position?.isVector3?D.position.copy(M.position):M.position&&D.position.set(M.position.x,M.position.y,M.position.z),n.add(D),s.set(M.id,{...M,visualRadius:V,renderPreview:R.renderPreview,position:D.position,group:D,mesh:k,accretionDisk:N,photonRing:O,lensedArcs:U,pickMeshes:W}),o.set(M.id,R);continue}if(M.kind!=="star"&&M.kind!=="planet")continue;let y=Np(M.id),b=new ze;b.name=M.id;let S=dM(M,y),w=new We(l,S);w.name=`${M.id}-surface`,w.scale.setScalar(M.r),w.rotation.set(0,y*Mc,M.axialTilt??(M.kind==="planet"?.1+y*.24:0)),w.userData.bodyId=M.id,b.add(w),n.add(b);let v={...M,position:b.position,group:b,mesh:w};Array.isArray(M.position)?b.position.fromArray(M.position):M.position?.isVector3?b.position.copy(M.position):M.position&&b.position.set(M.position.x,M.position.y,M.position.z),s.set(v.id,v);let E=M.kind==="star",T=E&&M.surfaceStyle==="blue-star",C=new We(l,new Je({uniforms:{uColor:{value:new ge(M.color)},uStrength:{value:T?.32:E?.45:.48},uStar:{value:Number(E)},uTime:{value:0},uLightDirection:{value:new I(1,0,0)}},vertexShader:Up,fragmentShader:cM,side:Xt,transparent:!0,depthWrite:!1,blending:wt}));if(C.name=`${M.id}-${E?"corona":"atmosphere"}`,C.scale.setScalar(M.r*(T?1.03:E?1.065:1.035)),b.add(C),v.atmosphere=C,E){let R=new Ti(new oi({map:c,color:M.color,transparent:!0,opacity:.22,depthWrite:!1,blending:wt}));R.name=`${M.id}-halo`,R.scale.setScalar(M.r*5.1),b.add(R),v.halo=R}}for(let M of s.values()){if(M.kind!=="planet")continue;let y=s.get(M.parentStarId??M.parentId);if(!y||y.kind!=="star"){M.group.visible=M.mesh.visible=!1;continue}let b=Np(M.id),S=M.orbitalInclination??.06+b*.15,w=M.orbitRadius??y.r*7,v=new ps(f,new ln({color:M.color,transparent:!0,opacity:.15,depthWrite:!1}));v.name=`${M.id}-orbit`,v.rotation.x=S,v.scale.setScalar(w),v.userData.bodyId=M.id,v.userData.parentStarId=y.id,v.userData.baseOpacity=.15,v.visible=!1,n.add(v),r.push(v);let E=y.mesh.material.uniforms.uColor.value.clone().lerp(new ge(16777215),.72);M.mesh.material.uniforms.uLightColor.value.copy(E),a.push({body:M,host:y,line:v,radius:w,inclination:S,period:Math.max(1,M.orbitalPeriod??100),phase:M.phase??b*Mc})}function x(){for(let M of a){let{body:y,host:b,line:S,radius:w,inclination:v,period:E,phase:T}=M,C=T+d%E/E*Mc;y.position.set(Math.cos(C)*w,-Math.sin(C)*w*Math.sin(v),Math.sin(C)*w*Math.cos(v)).add(b.position),S.position.copy(b.position);let R=y.mesh.material.uniforms.uLightDirection.value;R.subVectors(b.position,y.position).normalize(),y.atmosphere.material.uniforms.uLightDirection.value.copy(R)}}function m(M,{paused:y=!1,speed:b=1}={}){if(g)return;let S=!y&&!h?.matches&&Number.isFinite(M)&&Number.isFinite(b)?Math.max(0,M)*Math.max(0,b):0;d+=S;for(let w of s.values()){if(w.kind==="black-hole"){o.get(w.id).update(d);continue}S>0&&(w.mesh.rotation.y+=S*(w.kind==="star"?.012:.036)),w.mesh.material.uniforms.uTime.value=d,w.atmosphere.material.uniforms.uTime.value=d}x()}function p(M,{focusBody:y=null,activeGalaxyId:b=null,stage:S=null,orbitsVisible:w=!0}={}){if(g)return;let v=typeof y=="string"?s.get(y):y,E=v?.id??(typeof y=="string"?y:null),T=v?.kind==="planet"?v.parentStarId??v.parentId:E,C=S==="universe"||S==="local-group";for(let R of s.values()){let D=M.position.distanceTo(R.position),k=R.id===T||(R.parentStarId??R.parentId)===T,N=!b||R.parentGalaxy===b,O=R.r*(R.kind==="black-hole"?1200:R.kind==="star"?900:260),U=R.id===E||D<O&&(N||k);if(R.group.visible=R.mesh.visible=U,R.kind==="black-hole"){U&&o.get(R.id).updateCamera(M);continue}R.atmosphere.visible=U&&D<R.r*95,R.halo&&(R.halo.material.opacity=(C?.14:.22)*Se.smoothstep(D/R.r,1.3,3))}for(let{body:R,host:D,line:k,radius:N}of a){let O=M.position.distanceTo(D.position);k.visible=w&&O<N*9&&(!b||D.parentGalaxy===b||D.id===T),k.material.opacity=(R.id===E?.23:.13)*(1-Se.smoothstep(O,N*5,N*9))}}function _(){if(!g){g=!0,n.removeFromParent();for(let M of o.values())M.dispose();l.dispose(),f.dispose(),c.dispose(),n.traverse(M=>M.material?.dispose())}}return x(),{bodies:s,orbitLines:r,update:m,updateVisibility:p,dispose:_}}function Bp(i,e,t){let n=new I(-18e3,0,0),s={...Ep(i,e),...Tp(i,t,n),galaxyCenter:n,flybys:Ap(i)},r={...lh.galaxy,kind:"galaxy",radius:3e4,viewDistance:68e3,position:n.toArray(),parentId:"local-group",color:10800361,modelStatus:"confirmed"};s.galaxyDefinitions=[r,...ns];let a=new Map([...Object.values(lh),r,Pp,Yh,...ns].map(l=>[l.id,l]));s.solarBodies=new Map(s.bodies);let o=wp({...s,bodies:s.solarBodies});s.jwst=gp(i,s.earth),s.bodies.set("jwst",s.jwst.body),s.voyager=xp(i),s.bodies.set(s.voyager.body.id,s.voyager.body),s.motionTrajectories=pc(i,e,t),s.motionTrajectories.group.position.fromArray(qh),s.nearbyGalaxies=Lp(i,t,ns),s.deepSpace=Op(i,e,Ip);for(let[l,c]of s.deepSpace.bodies)s.bodies.set(l,c);return s.starFields=[s.galaxy,s.backgroundStars,...s.nearbyGalaxies.starFields],s.getData=l=>s.bodies.get(l)||a.get(l),s.getPosition=(l,c=new I)=>{if(l==="galaxy")return c.copy(n);if(l==="solar")return c.set(0,0,0);if(l==="trajectory")return s.motionTrajectories.getCenter(c).add(s.motionTrajectories.group.position),c.y-=24,c;if(l==="iss")return c.copy(s.station.position);if(s.bodies.has(l))return c.copy(s.bodies.get(l).position);let u=a.get(l);return u?.position?c.fromArray(u.position):c.set(0,0,0)},s.update=(l,c)=>{o(l,c),s.jwst.update(l,c),s.voyager.update(l,c),s.deepSpace.update(l,c)},s}function zp(i,e,t,n,s={}){let{galaxy:r,solarMarker:a,earth:o,earthSatellites:l,station:c,earthOrbitGroup:u,orbitGroup:f}=i,h=e.position.distanceTo(t.target),d=s.stage==="trajectory",g=!d||s.flight;i.jwst.body.group.visible=g,i.voyager.updateVisibility(e,{...s,orbitsVisible:n});for(let _ of i.solarBodies.values())_.group.visible=g;let x=Ii(1400,18e3,h);r.material.uniforms.uOpacity.value=x*.85*(1-Ii(12e4,6e5,h)*.55),r.visible=g&&x>.001,a.visible=g&&h>2700,a.material.opacity=x*.8,a.scale.setScalar(Nn(h*.01,60,1200));let m=e.position.distanceTo(o.position);l.visible=g&&m<70,c.visible=g&&m<150,u.visible=g&&n&&m<60,f.visible=!d&&n&&h>8&&h<11e3;let p=Ii(8,35,h)*(1-Ii(1200,11e3,h));for(let _ of f.children)_.material.opacity=_.userData.baseOpacity*p;if(i.nearbyGalaxies?.update(e,{...s,distance:h,stage:d&&s.flight?h>2e5?"local-group":h>2600?"galaxy":"solar":s.stage}),i.deepSpace?.updateVisibility(e,{...s,orbitsVisible:n}),d&&!s.flight){for(let _ of i.deepSpace.bodies.values())_.group.visible=!1;for(let _ of i.deepSpace.orbitLines)_.visible=!1}}async function kp(i,e){let t={},n=new vs,s=[...new Set([...mi.map(a=>a.texture),"earth-night","earth-clouds","saturn-rings"])],r=0;return await Promise.all(s.map(async a=>{let o=await window.OrbitAssets.loadTexture(n,i[a]);o.colorSpace=a==="earth-clouds"?Zn:Ot,o.anisotropy=8,t[a]=o,e(++r/s.length)})),t}function Hp(){/* Local integration: upstream visit telemetry disabled. */}function Vp({getData:i}){let e=n=>document.getElementById(n);function t(n){let s=i(n);e("info-category").textContent=s.type,e("info-en").textContent=s.en,e("info-panel").classList.toggle("deep-space-info",!!(s.kind||s.parentGalaxy)),e("info-panel").classList.toggle("black-hole-info",s.kind==="black-hole"),e("info-name").classList.toggle("long-name",s.cn.length>=5||s.cn.length>=4&&!!(s.kind||s.parentGalaxy)),e("info-name").textContent=s.cn;let r=document.createElement("span");r.className="object-index",r.textContent=s.index,e("info-name").append(r),e("info-description").textContent=s.desc,e("stat-label-1").textContent=s.stat1||"\u5E73\u5747\u76F4\u5F84",e("stat-label-2").textContent=s.stat2||"\u516C\u8F6C\u5468\u671F",e("stat-value-1").replaceChildren(document.createTextNode(s.diameter));let a=document.createElement("small");a.textContent=" "+(s.unit1??"km"),e("stat-value-1").append(a),e("stat-value-2").replaceChildren(document.createTextNode(s.value2));let o=document.createElement("small");o.textContent=" "+s.unit2,e("stat-value-2").append(o),e("jwst-actions").hidden=n!=="jwst",e("info-panel").classList.toggle("jwst-info",n==="jwst"),e("earth-actions").style.display=n==="earth"||n==="iss"?"":"none",e("observation-text").textContent=s.kind==="spacecraft"?"\u4F4D\u7F6E\u3001\u59FF\u6001\u4E0E\u822A\u8FF9\u4E3A\u793A\u610F":s.kind==="galaxy"||s.kind==="group"?"\u661F\u7CFB\u7ED3\u6784\u4E0E\u8DDD\u79BB\u4E3A\u793A\u610F":s.kind==="black-hole"?"\u9ED1\u6D1E\u9634\u5F71\u3001\u5438\u79EF\u76D8\u4E0E\u5149\u73AF\u4E3A\u827A\u672F\u793A\u610F":n==="trajectory"?"\u53C2\u7167\u7CFB\u3001\u8DDD\u79BB\u4E0E\u65F6\u95F4\u5747\u4E3A\u793A\u610F":n==="solar"?"\u516B\u5927\u884C\u661F \xB7 \u8F68\u9053\u8FD0\u884C\u4E2D":"\u6B63\u5728\u8FFD\u8E2A"+s.cn;let l=e("info-evidence");l.hidden=!s.modelStatus,l.dataset.status=s.modelStatus||"",l.textContent=s.modelStatus==="illustration"?"\u521B\u4F5C\u793A\u610F \xB7 \u672A\u786E\u8BA4\u5B58\u5728":s.modelStatus==="candidate"?"\u5019\u9009\u5929\u4F53 \xB7 \u7B49\u5F85\u786E\u8BA4":s.kind==="spacecraft"?"\u771F\u5B9E\u63A2\u6D4B\u5668 \xB7 \u6A21\u578B\u793A\u610F":s.kind==="galaxy"||s.kind==="group"?"\u771F\u5B9E\u661F\u7CFB \xB7 \u7ED3\u6784\u793A\u610F":"\u5DF2\u77E5\u5929\u4F53 \xB7 \u5916\u89C2\u793A\u610F";let c=e("info-source");c.hidden=!s.sourceUrl,s.sourceUrl&&(c.href=s.sourceUrl,c.textContent=(s.modelStatus==="illustration"?"\u793A\u610F\u80CC\u666F\u8D44\u6599":s.sourceLabel||"\u5929\u4F53\u8D44\u6599")+" \u2197"),document.querySelectorAll(".planet-button").forEach(f=>{f.classList.toggle("active",f.dataset.id===n),f.setAttribute("aria-pressed",String(f.dataset.id===n))});let u=document.querySelector(".planet-button.active");u&&jt()&&u.scrollIntoView({behavior:Un?"instant":"smooth",block:"nearest",inline:"center"})}return{update:t}}function Gp({camera:i,controls:e,world:t,onSelect:n}){let{bodies:s,earth:r,station:a,getData:o,getPosition:l}=t,c=[],u=[],f=new I,h=new I,d=new I,g=new Map((t.galaxyDefinitions||[]).map(_=>[_.id,_]));function x(_,M,y="body"){let b=document.createElement("button");b.className="celestial-label"+(y==="station"?" station":y==="galaxy"?" galaxy-label":""),b.dataset.bodyId=_,b.innerHTML="<i></i><span></span>",b.querySelector("span").textContent=M,b.title="\u524D\u5F80"+M,b.tabIndex=-1,b.onclick=()=>n(_),document.getElementById("labels").appendChild(b),c.push({id:_,name:M,type:y,element:b})}for(let _ of s.values())_.parentGalaxy||x(_.id,_.cn);x("iss","ISS \xB7 \u56FD\u9645\u7A7A\u95F4\u7AD9","station"),x("solar","\u592A\u9633\u7CFB \xB7 \u4F60\u5728\u8FD9\u91CC");for(let _ of s.values())_.parentGalaxy&&x(_.id,_.cn);for(let _ of g.values())x(_.id,_.cn,"galaxy");function m(_){for(let M=_;M;M=M.parent)if(M.visible===!1)return!1;return!0}function p({labelsVisible:_,satellitesVisible:M=!0,selected:y,stage:b,activeGalaxyId:S,activeSystemId:w,galaxyViewDistance:v}){let E=i.position.distanceTo(e.target),T=innerWidth,C=innerHeight,R=jt(),D=o(y),k=S||D?.parentGalaxy||(D?.kind==="galaxy"?y:"galaxy"),N=w||D?.parentStarId||(D?.kind==="star"?y:"solar"),O=b||(E>2e5?"local-group":E>2600?"galaxy":E>28?"solar":"earth"),U=k==="galaxy"&&N==="solar"&&O!=="local-group",W=v||g.get(k)?.viewDistance||68e3;u.length=0;for(let V of c){let B=o(V.id),G=_,$=V.type==="galaxy"||!!B?.parentGalaxy;if(V.type==="galaxy")G=G&&(O==="local-group"||O==="galaxy"&&E>9e4&&V.id!==k);else if(B?.parentGalaxy&&(B.kind==="star"||B.kind==="black-hole")){let ue=O==="galaxy"&&E<W*1.7,ie=O!=="local-group"&&V.id===N&&i.position.distanceTo(B.position)<Math.max(1200,B.r*100);G=G&&B.parentGalaxy===k&&(ue||ie)&&V.id!==y}else B?.parentGalaxy&&B.kind==="planet"?G=G&&B.parentGalaxy===k&&B.parentStarId===N&&(O==="earth"||O==="solar")&&V.id!==y&&i.position.distanceTo(B.position)<Math.max(1400,(B.orbitRadius||0)*9):B?.kind==="spacecraft"?G=G&&U&&(O==="earth"||O==="solar")&&m(B.group)&&V.id!==y&&i.position.distanceTo(B.position)<1600:V.id==="solar"?G=G&&k==="galaxy"&&O==="galaxy"&&E>2800:V.id==="iss"?G=G&&M&&m(a)&&U&&i.position.distanceTo(a.position)<11:V.id==="moon"?G=G&&U&&i.position.distanceTo(r.position)<55&&y!=="iss":G=G&&U&&E<1400&&i.position.distanceTo(B.position)<1400&&V.id!==y;if(!G){V.element.style.opacity="0",V.element.style.pointerEvents="none";continue}let xe=l(V.id);f.copy(xe).project(i);let ee=(f.x*.5+.5)*T,te=(-f.y*.5+.5)*C,q=V.type==="galaxy"?18:65;if(G=f.z>-1&&f.z<1&&ee>18&&ee<T-q&&te>115&&te<C-180,G&&V.id!=="solar"&&V.type!=="galaxy"){d.copy(xe).sub(i.position);let ue=d.length();d.normalize();for(let ie of s.values()){if(ie.id===V.id||!m(ie.mesh)||!m(ie.group))continue;h.copy(ie.position).sub(i.position);let pe=h.dot(d);if(pe>0&&pe<ue&&h.lengthSq()-pe*pe<ie.r*ie.r*.99){G=!1;break}}}!R&&ee<340&&te>145&&te<innerHeight-215&&(G=!1);let z=V.id==="solar"||V.type==="galaxy"?4:(B.r||.13)/Math.max(.1,i.position.distanceTo(xe))*innerHeight/Math.tan(Se.degToRad(i.fov/2))*.5,L=Math.round(ee+Nn(z,5,110)+8),X=Math.round(te-5),ae=R?9:11,re=[...V.name].reduce((ue,ie)=>ue+(ie.charCodeAt(0)>255?ae:ae*.64)+1,28),ye=V.type==="galaxy"&&R&&te>C*.4-20&&te<C-180,fe=T-(ye?88:20);if(V.type==="galaxy"){let ue=L+re+4>=fe;ue&&(L=Math.round(Math.max(22,Math.min(ee-re-12,fe-re-8)))),V.element.style.flexDirection=ue?"row-reverse":""}let se={left:L-4,top:X-4,right:L+re+4,bottom:X+23};G&&$&&(G=se.right<fe&&!u.some(ue=>se.left<ue.right&&se.right>ue.left&&se.top<ue.bottom&&se.bottom>ue.top)),V.element.style.opacity=G?"1":"0",V.element.style.pointerEvents=G?"auto":"none",G&&(V.element.style.transform=`translate(${L}px,${X}px)`,u.push(se))}}return{update:p}}function Wp(i,{world:e,controls:t,navigation:n,view:s,setSpaceColor:r,setOrbitsVisible:a}){let o=U=>document.getElementById(U),l=o("wallpaper"),c=o("settings-dialog"),u=new Map,f=new Map,h=[...e.bodies.values()].filter(U=>U.mesh),d=[...h,...e.galaxyDefinitions],g=d.map(U=>U.id),x;try{x=Va(JSON.parse(localStorage.getItem("orbit.wallpaper")||"{}"))}catch{x=Va()}g.includes(x.selected)||(x.selected="earth");let m=!1,p=null,_=null,M=null,y=!1,b=null,S=0,w=null,v=null,E={universe:"\u4FDD\u7559\u5F53\u524D\u5B87\u5B99\u3001\u955C\u5934\u4E0E\u52A8\u753B\uFF0C\u4EC5\u9690\u85CF\u6587\u5B57\u548C\u63A7\u4EF6\u3002\u62D6\u52A8\u4E0E\u7F29\u653E\u7167\u5E38\uFF0C\u53CC\u51FB\u6062\u590D\u754C\u9762\u3002",focus:"\u53EA\u5C55\u793A\u4E00\u9897\u65CB\u8F6C\u661F\u4F53\u6216\u4E00\u4E2A\u5B8C\u6574\u661F\u7CFB\uFF0C\u4FDD\u7559\u5149\u6655\u4E0E\u661F\u73AF\u3002\u4E09\u51FB\u4E3B\u4F53\u5207\u6362\uFF0C\u53CC\u51FB\u6062\u590D\u754C\u9762\u3002",trajectory:"\u592A\u9633\u4E0E\u516B\u9897\u884C\u661F\u6301\u7EED\u7559\u4E0B\u8FD0\u52A8\u8F68\u8FF9\u3002\u9009\u62E9\u8FD0\u52A8\u53C2\u7167\u3001\u8F68\u8FF9\u957F\u5EA6\u548C\u5DE6\u4E2D\u53F3\u4F4D\u7F6E\uFF0C\u753B\u9762\u81EA\u52A8\u9002\u5E94\u5C4F\u5E55\u3002\u53CC\u51FB\u6062\u590D\u754C\u9762\u3002"};for(let[U,W]of[["\u661F\u4F53",h],["\u661F\u7CFB",e.galaxyDefinitions]]){let V=document.createElement("optgroup");V.label=U,V.replaceChildren(...W.map(B=>new Option(B.cn+(B.modelStatus==="illustration"?" \xB7 \u793A\u610F":""),B.id))),o("wallpaper-selected").append(V)}function T(){try{localStorage.setItem("orbit.wallpaper",JSON.stringify(x))}catch{}}function C(){for(let[U,W]of Object.entries(x)){let V=o(`wallpaper-${U}`);V&&(V.type==="checkbox"?V.checked=W:V.value=W)}document.querySelectorAll("[data-wallpaper-mode]").forEach(U=>{U.hidden=U.dataset.wallpaperMode!==x.mode}),document.querySelectorAll("[data-wallpaper-composition]").forEach(U=>{U.hidden=x.mode==="trajectory"}),o("wallpaper-mode-description").textContent=E[x.mode]}function R(){clearTimeout(M),M=null,_=null}function D(U){let W=m&&U.mode&&U.mode!==x.mode;W&&O(!1),x=Va({...x,...U}),g.includes(x.selected)||(x.selected="earth"),S=0,T(),C(),r(x.spaceColor),a(x.orbitsVisible),W&&O(!0)}function k(U){return g.includes(U)?(R(),s.resetRotation(),D({selected:U,focusYaw:0,focusPitch:0}),!0):!1}function N(U=1){x.mode==="focus"&&k(tp(g,x.selected,U))}function O(U){if(U===m)return;m=U,document.body.classList.toggle("immersive",U),l.setAttribute("aria-pressed",String(U)),R(),p=b=null,f.clear(),S=0,clearTimeout(v);let W=o("screen-mode-hint");if(W.classList.remove("show"),U){document.querySelectorAll("dialog[open]").forEach(V=>V.close()),x.mode!=="universe"&&(w=n.snapshot(),t.enabled=!1);for(let V of document.body.children)["universe","error","screen-mode-hint"].includes(V.id)||["SCRIPT","STYLE"].includes(V.tagName)||(u.set(V,V.inert),V.inert=!0);s.resize(x),o("universe").focus({preventScroll:!0}),W.textContent=x.mode==="focus"?"\u53CC\u51FB\u9000\u51FA \xB7 \u4E09\u51FB\u661F\u4F53\u5207\u6362":x.mode==="trajectory"?"\u53CC\u51FB\u9000\u51FA \xB7 \u4E09\u51FB\u5207\u6362\u53C2\u7167\u4E0E\u957F\u77ED\u8F68\u8FF9":"\u53CC\u51FB\u9000\u51FA",W.classList.add("show"),v=setTimeout(()=>W.classList.remove("show"),4500)}else W.textContent="",s.exit(),w&&(n.restore(w),w=null),u.forEach((V,B)=>{B.inert=V}),u.clear(),l.focus({preventScroll:!0})}l.setAttribute("aria-pressed","false"),l.onclick=()=>O(!0),o("settings-button").onclick=()=>{C(),c.showModal()},o("wallpaper-start").onclick=()=>O(!0);for(let U of Object.keys(x)){let W=o(`wallpaper-${U}`);W?.addEventListener("input",()=>{U==="selected"?k(W.value):D({[U]:W.type==="checkbox"?W.checked:W.value})})}return o("wallpaper-reset").onclick=()=>{s.resetRotation(),D(Va())},i.addEventListener("pointerdown",U=>{if(!(!m||U.button>0)){if(_?.count===2&&performance.now()-_.time<380&&clearTimeout(M),f.set(U.pointerId,{x:U.clientX,y:U.clientY}),i.setPointerCapture(U.pointerId),f.size>1){y=!0,p=null,R();let[W,V]=[...f.values()];b={distance:Math.hypot(W.x-V.x,W.y-V.y),zoom:x.zoom};return}y=!1,p={x:U.clientX,y:U.clientY,lastX:U.clientX,lastY:U.clientY,time:performance.now(),moved:!1}}}),i.addEventListener("pointermove",U=>{if(!(!m||!f.has(U.pointerId))){if(f.set(U.pointerId,{x:U.clientX,y:U.clientY}),b&&f.size===2){if(x.mode!=="universe"&&b.distance>0){let[W,V]=[...f.values()];x.zoom=oh(b.zoom*Math.hypot(W.x-V.x,W.y-V.y)/b.distance)}return}if(p){let W=U.clientX-p.lastX,V=U.clientY-p.lastY;if(x.mode!=="universe"){let B=x.mode==="trajectory"?"trajectoryDrag":"focus";x[`${B}Yaw`]=(x[`${B}Yaw`]-W*.45+540)%360-180,x[`${B}Pitch`]=Math.min(85,Math.max(-85,x[`${B}Pitch`]+V*.45))}p.lastX=U.clientX,p.lastY=U.clientY,Math.hypot(U.clientX-p.x,U.clientY-p.y)>8&&(p.moved=!0,R())}}}),i.addEventListener("pointerup",U=>{if(!m||!f.has(U.pointerId))return;if(f.delete(U.pointerId),y||!p){f.size||(b=null,T(),C());return}let W=performance.now(),V=p;if(p=null,T(),C(),V.moved||W-V.time>300){R();return}let B=_&&W-_.time<380&&Math.hypot(U.clientX-_.x,U.clientY-_.y)<28,G=x.mode==="focus"&&s.hitTest(U.clientX,U.clientY);if(_={x:U.clientX,y:U.clientY,time:W,count:B?_.count+1:1,subject:G&&(!B||_.subject)},_.count===3){let $=_.subject;R(),x.mode==="trajectory"?D(np(x.reference,x.trail)):$&&N();return}_.count===2&&(x.mode!=="universe"?M=setTimeout(()=>O(!1),380):O(!1))}),i.addEventListener("pointercancel",U=>{f.delete(U.pointerId),p=b=null,y=!0,R(),T()}),i.addEventListener("wheel",U=>{if(!m||x.mode==="universe")return;U.preventDefault();let W=U.deltaY*(U.deltaMode===1?16:U.deltaMode===2?innerHeight:1);D({zoom:oh(x.zoom*Math.exp(-Math.max(-200,Math.min(200,W))*.0015))})},{passive:!1}),T(),C(),r(x.spaceColor),a(x.orbitsVisible),{get satellitesVisible(){return x.satellitesVisible},get starsVisible(){return x.starsVisible},get active(){return m},get isolated(){return x.mode!=="universe"},configure:D,select:k,next:N,getState:()=>({active:m,...x,bodies:g,render:s.getState()}),enter:()=>O(!0),toggle:()=>O(!m),exit:()=>O(!1),resize:()=>s.resize(x),update(U){if(!m)return;let W=matchMedia("(prefers-reduced-motion: reduce)").matches;x.mode==="focus"&&x.autoplay&&!f.size&&!_&&!W&&(S+=U,S>=x.interval&&N()),_?.count===1&&performance.now()-_.time>380&&R(),s.render(W?0:U,x)}}}function Xp({renderer:i,camera:e,world:t,navigation:n,onPick:s,isEnabled:r=()=>!0}){let a=new _s,o=new ce,l=new Set,c=new Qt,u=new I,f=new I,h=null,d=!1;function g(x){for(let m=x;m;m=m.parent)if(m.visible===!1)return!1;return!0}i.domElement.addEventListener("pointerdown",x=>{r()&&(l.add(x.pointerId),l.size>1?(d=!0,h=null):(d=!1,h={x:x.clientX,y:x.clientY,t:performance.now()}),n.getState().flight&&n.cancelFlight())},{capture:!0}),i.domElement.addEventListener("pointerup",x=>{if(l.delete(x.pointerId),!r()||x.defaultPrevented||!h||d||Math.hypot(x.clientX-h.x,x.clientY-h.y)>5||performance.now()-h.t>450||(h=null,o.set(x.clientX/innerWidth*2-1,-x.clientY/innerHeight*2+1),a.setFromCamera(o,e),s?.(a,x))||n.getState().stage==="trajectory")return;let m=[...t.bodies.values()].filter(b=>g(b.group)).flatMap(b=>b.pickMeshes||(b.mesh?[b.mesh]:[])).filter(b=>g(b)),p=a.intersectObjects(m,!1),_=p[0]?.object.userData.bodyId,M=p[0]?.distance??1/0,y=n.getState();if(y.stage==="local-group"||y.stage==="galaxy")for(let b of t.galaxyDefinitions||[]){t.getPosition?u.copy(t.getPosition(b.id)):Array.isArray(b.position)?u.fromArray(b.position):u.copy(b.position);let S=e.position.distanceTo(u),w=Number.isFinite(y.distance)?y.distance:S;if(S<b.radius*1.1||b.id===y.activeGalaxyId&&y.stage==="galaxy"&&w<(y.galaxyViewDistance||b.viewDistance)*1.7||(c.set(u,b.radius*.75),!a.ray.intersectSphere(c,f)))continue;let v=e.position.distanceTo(f);v<M&&(M=v,_=b.id)}_&&n.flyTo(_)}),i.domElement.addEventListener("pointercancel",x=>{l.delete(x.pointerId),h=null}),i.domElement.addEventListener("wheel",()=>{r()&&n.getState().flight&&n.cancelFlight()},{passive:!0,capture:!0})}function fM(i,e=""){let t=s=>String(s||"").normalize("NFKC").toLowerCase().replace(/[\s\-‐‑–—·]/g,""),n=t(e);return n?i.filter(s=>[s.cn,s.en,s.id,s.index].some(r=>t(r).includes(n))):i}function pM(i,e){let t=e.getData(i.selected);if(i.stage==="local-group"||i.flight&&t?.kind==="group")return{key:"local-group",title:e.getData("local-group").cn,items:e.galaxyDefinitions,overviewId:"galaxy",overviewLabel:"\u56DE\u94F6\u6CB3\u7CFB"};if(i.activeGalaxyId!=="galaxy"){let n=e.getData(i.activeGalaxyId),s=[...e.bodies.values()].filter(r=>r.parentGalaxy===i.activeGalaxyId);return{key:i.activeGalaxyId,title:e.getData(i.activeGalaxyId).cn,items:s.length?s:[n],overviewId:i.activeGalaxyId,overviewLabel:"\u661F\u7CFB\u5168\u666F"}}if(i.stage==="galaxy"||i.activeSystemId!=="solar"){let n=[...e.bodies.values()].filter(s=>s.parentGalaxy==="galaxy");return{key:"galaxy",title:"\u94F6\u6CB3\u76EE\u7684\u5730",items:[e.getData("solar"),...n.filter(s=>s.kind==="spacecraft"),...n.filter(s=>s.kind==="planet"),...n.filter(s=>s.kind!=="spacecraft"&&s.kind!=="planet")],overviewId:"galaxy",overviewLabel:"\u94F6\u6CB3\u5168\u666F"}}return{key:"solar",title:"\u592A\u9633\u7CFB",items:[...mi,e.getData("jwst"),e.getData("voyager-1")].filter(Boolean),overviewId:"solar",overviewLabel:"\u5168\u666F"}}function mM(i,e){if(i.texture&&e[i.texture]){let n=document.createElement("img");return n.src=e[i.texture],n.alt="",n}let t=document.createElement("span");return t.className="destination-art "+(i.kind||(i.id==="solar"?"star":"galaxy")),i.surfaceStyle&&t.classList.add(i.surfaceStyle),i.kind==="galaxy"&&i.profile&&t.classList.add(i.profile),t.setAttribute("aria-hidden","true"),t.style.setProperty("--body-color","#"+(i.color??10476014).toString(16).padStart(6,"0")),(i.shape==="irregular"||i.shape==="elliptical")&&t.classList.add(i.shape),t}function qp({world:i,navigation:e,assets:t}){let n=c=>document.getElementById(c),s,r,a=n("destination-search");a.addEventListener("input",o),n("overview").onclick=()=>e.flyTo(r.overviewId),n("galaxy-return").onclick=()=>e.flyTo(e.getState().activeGalaxyId),n("group-return").onclick=()=>e.flyTo("local-group"),n("system-overview").onclick=()=>{let{activeSystemId:c}=e.getState();if(c==="solar")return e.flyTo("solar");let u=i.getData(c);if(u?.kind!=="star")return;let f=[...i.bodies.values()].filter(d=>d.parentStarId===c),h=Math.max(u.r*9,...f.map(d=>d.orbitRadius+d.r));e.flyTo(c,{distance:h*3.3})};function o(){let c=e.getState(),u=fM(r.items,a.value).map(f=>{let h=document.createElement("button");h.className="planet-button",h.dataset.id=f.id,h.title="\u524D\u5F80"+f.cn;let d=document.createElement("span");if(d.className="destination-name",d.textContent=f.id==="jwst"?"\u97E6\u5E03 JWST":f.cn,h.append(mM(f,t),d),f.modelStatus==="illustration"||f.modelStatus==="candidate"){let x=document.createElement("small");x.className="destination-status",x.textContent=f.modelStatus==="illustration"?"\u793A\u610F":"\u5019\u9009",h.append(x)}h.onclick=()=>e.flyTo(f.id);let g=f.id===c.selected;return h.classList.toggle("active",g),h.setAttribute("aria-pressed",String(g)),h});if(!u.length){let f=document.createElement("p");f.className="destination-empty",f.setAttribute("role","status"),f.textContent="\u6CA1\u6709\u5339\u914D\u7684\u5929\u4F53\uFF0C\u8BD5\u8BD5\u5176\u4ED6\u540D\u79F0\u6216\u7F16\u53F7",u.push(f)}n("planet-list").replaceChildren(...u),n("planet-list").scrollLeft=0}function l(){let c=e.getState();r=pM(c,i),r.key!==s&&(s=r.key,a.value="",o(),n("dock-context").textContent=r.title,n("overview").title=r.overviewLabel,n("overview").querySelector("span").textContent=r.overviewLabel,document.querySelector(".planet-dock").classList.toggle("deep-space-dock",r.key!=="solar"));for(let f of n("planet-list").querySelectorAll("button")){let h=f.dataset.id===c.selected;f.classList.toggle("active",h),f.setAttribute("aria-pressed",String(h))}let u=c.activeGalaxyId!=="galaxy"||c.activeSystemId!=="solar"||c.stage==="galaxy";n("deep-space-actions").hidden=!u||c.stage==="local-group",n("galaxy-return").hidden=c.stage==="galaxy",n("galaxy-return").textContent="\u2196 "+i.getData(c.activeGalaxyId).cn,n("system-overview").hidden=c.stage==="galaxy"||i.getData(c.activeSystemId)?.kind!=="star"||![...i.bodies.values()].some(f=>f.parentStarId===c.activeSystemId)}return l(),{update:l}}function en(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function Yp({world:i,navigation:e}){let t=en("section","trajectory-panel");t.id="trajectory-panel",t.inert=!0,t.setAttribute("aria-hidden","true"),t.setAttribute("aria-label","\u8FD0\u52A8\u8F68\u8FF9\u8BBE\u7F6E");let n=en("div","trajectory-controls");function s(v,E,T){let C=en("div","trajectory-segment");C.setAttribute("role","group"),C.setAttribute("aria-label",v);let R=E.map(([D,k,N])=>{let O=en("button","",k);return O.type="button",O.dataset.value=D,O.title=N,O.setAttribute("aria-pressed","false"),O.onclick=()=>{T(D),w()},C.append(O),O});return n.append(C),R}let r=s("\u8F68\u8FF9\u53C2\u7167\u7CFB",[["galactic","\u94F6\u6CB3\u53C2\u7167","\u540C\u65F6\u89C2\u5BDF\u592A\u9633\u7CFB\u7684\u6574\u4F53\u8FD0\u52A8\u4E0E\u884C\u661F\u516C\u8F6C"],["solar","\u592A\u9633\u53C2\u7167","\u8DDF\u968F\u592A\u9633\uFF0C\u6BD4\u8F83\u516B\u5927\u884C\u661F\u7684\u516C\u8F6C"]],v=>i.motionTrajectories?.setReferenceFrame(v)),a=s("\u8F68\u8FF9\u663E\u793A\u957F\u5EA6",[["short","\u77ED\u8F68\u8FF9","\u4FDD\u7559\u8F83\u77ED\u7684\u8FD0\u52A8\u8F68\u8FF9\uFF0C\u8BA9\u753B\u9762\u66F4\u6E05\u6670"],["long","\u957F\u8F68\u8FF9","\u5C55\u5F00\u66F4\u957F\u7684\u4E00\u6BB5\u8FD0\u52A8\u8FC7\u7A0B"]],v=>i.motionTrajectories?.setTrailLength(v)),o=en("div","trajectory-actions"),l=en("button","","\u91CD\u7F6E\u89C6\u89D2");l.type="button",l.title="\u56DE\u5230\u8FD0\u52A8\u8F68\u8FF9\u5168\u666F",l.onclick=()=>e.flyTo("trajectory");let c=en("button","trajectory-back","\u8FD4\u56DE\u592A\u9633\u7CFB \u2197");c.type="button",c.onclick=()=>e.flyTo("solar"),o.append(l,c),n.append(o);let u=en("div","trajectory-legend");u.setAttribute("aria-label","\u516B\u5927\u884C\u661F\u8F68\u8FF9\u989C\u8272");for(let v of uh.filter(E=>E.id!=="sun")){let E=en("span","trajectory-legend-item"),T=en("i");T.setAttribute("aria-hidden","true"),T.style.setProperty("--trajectory-color",`#${v.color.toString(16).padStart(6,"0")}`),E.append(T,en("span","",v.cn)),u.append(E)}let f=en("div","trajectory-note"),h=en("p","trajectory-intro","\u516C\u8F6C\u4E0E\u592A\u9633\u7CFB\u6574\u4F53\u8FD0\u52A8\u53E0\u52A0 \xB7 \u65F6\u95F4\u4E0E\u8DDD\u79BB\u538B\u7F29\u793A\u610F"),d=en("details","trajectory-explanation"),g=en("summary","","\u8BF4\u660E"),x=en("div","trajectory-explanation-content");x.append(en("p","","\u94F6\u6CB3\u53C2\u7167\u53E0\u52A0\u592A\u9633\u7CFB\u7684\u6574\u4F53\u8FD0\u52A8\uFF1B\u592A\u9633\u53C2\u7167\u8DDF\u968F\u592A\u9633\uFF0C\u65B9\u4FBF\u6BD4\u8F83\u884C\u661F\u516C\u8F6C\u3002\u6682\u505C\u4E0E\u65F6\u95F4\u500D\u901F\u6CBF\u7528\u4E0A\u65B9\u63A7\u5236\u3002"));let m=en("a","","NASA \xB7 \u592A\u9633\u7684\u8F68\u9053\u4E0E\u8FD0\u52A8 \u2197");m.href="https://science.nasa.gov/sun/facts/",m.target="_blank",m.rel="noopener noreferrer",m.setAttribute("aria-label","NASA\uFF1A\u592A\u9633\u7684\u8F68\u9053\u4E0E\u8FD0\u52A8\uFF08\u65B0\u6807\u7B7E\u9875\uFF09"),x.append(m),d.append(g,x),f.append(h,d),t.append(n,u,f);let p=document.querySelector(".bottom-ui");p?p.append(t):(t.classList.add("trajectory-panel-floating"),document.body.append(t)),t.addEventListener("keydown",v=>{v.key==="Escape"&&d.open&&(d.open=!1,g.focus({preventScroll:!0}),v.stopPropagation())});let _=["toggle-orbits","toggle-labels"].map(v=>document.getElementById(v)).filter(Boolean).map(v=>({node:v,inert:v.inert,ariaHidden:v.getAttribute("aria-hidden")}));function M(){for(let{node:v,inert:E,ariaHidden:T}of _)v.inert=E,T===null?v.removeAttribute("aria-hidden"):v.setAttribute("aria-hidden",T)}let y=null,b=null,S=!1;function w(){if(S)return;let v=e.getState().stage==="trajectory",E=document.body.classList.contains("earthsense-active"),T=v&&!E;if(document.body.classList.toggle("trajectory-active",v),v!==y)if(y=v,v){_.some(({node:D})=>D.contains(document.activeElement))&&document.getElementById("toggle-trajectories")?.focus({preventScroll:!0});for(let{node:D}of _)D.inert=!0,D.setAttribute("aria-hidden","true")}else M();if(T!==b&&(b=T,!T&&t.contains(document.activeElement)&&(E?document.querySelector('[data-mode="earthsense"]'):document.getElementById("toggle-trajectories"))?.focus({preventScroll:!0}),t.inert=!T,t.setAttribute("aria-hidden",String(!T)),T||(d.open=!1)),!T)return;let C=i.motionTrajectories,R=C?.getState()||{};for(let D of r)D.disabled=!C,D.setAttribute("aria-pressed",String(D.dataset.value===(R.referenceFrame||"galactic")));for(let D of a)D.disabled=!C,D.setAttribute("aria-pressed",String(D.dataset.value===(R.trailLength||"short")))}return w(),{update:w,dispose(){S||(S=!0,t.remove(),document.body.classList.remove("trajectory-active"),M())}}}function jp({renderer:i,camera:e,world:t,navigation:n,assets:s,toast:r,onPick:a,controls:o,wallpaperView:l,setSpaceColor:c}){let u=T=>document.getElementById(T),{flyTo:f,zoom:h}=n,d=Un,g=1,x=!0,m=!0,p,_;function M(T){d=T,u("pause").innerHTML=d?'<svg viewBox="0 0 24 24"><path d="m9 5 10 7-10 7Z"/></svg>':'<svg viewBox="0 0 24 24"><path d="M9 5v14M15 5v14"/></svg>',u("pause").setAttribute("aria-label",d?"\u7EE7\u7EED\u5929\u4F53\u8FD0\u52A8":"\u6682\u505C\u5929\u4F53\u8FD0\u52A8"),u("pause").title=d?"\u7EE7\u7EED\uFF08\u7A7A\u683C\uFF09":"\u6682\u505C\uFF08\u7A7A\u683C\uFF09"}function y(T){let{activeGalaxyId:C,activeSystemId:R}=n.getState();document.querySelectorAll("[data-view]").forEach(D=>{let k=D.dataset.view===T&&(T==="local-group"||C==="galaxy"&&(T==="galaxy"||R==="solar"));D.classList.toggle("active",k),D.setAttribute("aria-pressed",String(k))}),p?.update(),_?.update(),u("toggle-trajectories").setAttribute("aria-pressed",String(T==="trajectory"))}function b(T){M(T.paused),g=T.speed,m=T.labelsVisible,u("speed").firstChild.textContent=g+"\xD7",u("toggle-orbits").setAttribute("aria-pressed",String(x)),u("toggle-labels").setAttribute("aria-pressed",String(m))}function S(){let T=t.jwst.getState();u("jwst-deploy").textContent=T.targetExpanded?"\u6536\u62E2\u6A21\u578B \u2199":"\u5C55\u5F00\u6A21\u578B \u2197",u("jwst-deploy").setAttribute("aria-pressed",String(T.targetExpanded)),u("jwst-deployment-status").textContent=T.animating?`${T.targetExpanded?"\u6B63\u5728\u5C55\u5F00":"\u6B63\u5728\u6536\u62E2"} \xB7 ${T.phase} \xB7 \u90E8\u7F72\u52A8\u753B\u4E3A\u538B\u7F29\u793A\u610F`:T.progress===1?"\u5341\u516B\u7247\u66F2\u9762\u955C \xB7 \u4E94\u5C42\u8584\u819C \xB7 \u6536\u62E2\u4EC5\u4F5C\u90E8\u7F72\u6F14\u793A":"\u6A21\u578B\u5DF2\u6536\u62E2 \xB7 \u7B80\u5316\u90E8\u7F72\u56DE\u653E\uFF0C\u975E\u5728\u8F68\u64CD\u4F5C";let{stage:C,focusBody:R,activeGalaxyId:D,activeSystemId:k}=n.getState();if(y(C),C==="trajectory")u("view-caption").textContent="\u592A\u9633\u7CFB\u8FD0\u52A8\u8F68\u8FF9",u("view-distance").textContent=t.motionTrajectories.getState().referenceFrame==="solar"?"\u592A\u9633\u53C2\u7167 \xB7 \u89C2\u5BDF\u884C\u661F\u516C\u8F6C":"\u94F6\u6CB3\u53C2\u7167 \xB7 \u89C2\u5BDF\u524D\u8FDB\u4E0E\u516C\u8F6C";else if(C==="local-group")u("view-caption").textContent=t.getData("local-group").cn,u("view-distance").textContent=`${t.galaxyDefinitions.length} \u5EA7\u661F\u7CFB \xB7 \u70B9\u51FB\u5F00\u59CB\u661F\u9645\u822A\u884C`;else if(C==="galaxy")u("view-caption").textContent=t.getData(D).cn+"\u5168\u666F",u("view-distance").textContent="\u63A2\u7D22\u5929\u4F53 \xB7 \u7EE7\u7EED\u7F29\u5C0F\u6253\u5F00\u661F\u7CFB\u56FE\u9274";else if(C==="solar"){let N=[...t.bodies.values()].some(O=>O.parentStarId===k);u("view-caption").textContent=k==="solar"?"\u592A\u9633\u7CFB\u5168\u666F":t.getData(k).cn+(N?"\u7CFB\u7EDF":"\u5468\u8FB9"),u("view-distance").textContent=k==="solar"?"\u516B\u5927\u884C\u661F\u8FD0\u884C\u8F68\u9053":N?"\u6BCD\u661F\u4E0E\u884C\u661F \xB7 \u8F68\u9053\u4E3A\u793A\u610F":"\u6052\u661F\u5468\u8FB9 \xB7 \u7EE7\u7EED\u7F29\u5C0F\u524D\u5F80\u661F\u7CFB"}else{let N=t.getData(R);if(u("view-caption").textContent=R==="earth"?"\u5730\u7403\u8FD1\u8F68":N.cn+(R==="iss"?"\u8FD1\u666F":"\u89C2\u6D4B"),R==="jwst"){u("view-distance").textContent="\u65E5\u5730 L2 \u9644\u8FD1 \xB7 \u59FF\u6001\u3001\u8F68\u9053\u4E0E\u6BD4\u4F8B\u793A\u610F";return}if(N.kind==="spacecraft"){u("view-distance").textContent="\u661F\u9645\u7A7A\u95F4\u63A2\u6D4B\u5668 \xB7 \u4F4D\u7F6E\u4E0E\u822A\u8FF9\u793A\u610F";return}if(N.parentGalaxy){u("view-distance").textContent=N.kind==="black-hole"?"\u9ED1\u6D1E\u9634\u5F71\u4E0E\u5438\u79EF\u76D8 \xB7 \u827A\u672F\u793A\u610F":N.kind==="star"?"\u6052\u661F\u8868\u9762\u4E0E\u65E5\u5195\u793A\u610F":N.modelStatus==="illustration"?"\u521B\u4F5C\u793A\u610F \xB7 \u672A\u786E\u8BA4\u5B58\u5728":"\u5DF2\u786E\u8BA4\u884C\u661F \xB7 \u8868\u9762\u793A\u610F";return}let O=Math.max(0,e.position.distanceTo(t.getPosition(R))-(N.r||1)),U=Math.round(O/Math.max(.001,N.r)*Number((N.diameter||"12742").replaceAll(",",""))/2);u("view-distance").textContent=R==="iss"?"\u5730\u7403\u4F4E\u8F68\u9053":`\u8DDD\u8868\u9762\u7EA6 ${U.toLocaleString("zh-CN")} km`}}async function w(){try{document.fullscreenElement?await document.exitFullscreen():document.documentElement.requestFullscreen?await document.documentElement.requestFullscreen():r("\u6B64\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301\u5168\u5C4F\uFF0C\u53EF\u4F7F\u7528\u6D4F\u89C8\u5668\u7684\u5168\u5C4F\u6A21\u5F0F")}catch{r("\u5168\u5C4F\u672A\u5F00\u542F\uFF0C\u53EF\u4F7F\u7528\u6D4F\u89C8\u5668\u7684\u5168\u5C4F\u6A21\u5F0F")}}p=qp({world:t,navigation:n,assets:s}),_=Yp({world:t,navigation:n}),u("toggle-trajectories").onclick=()=>f(n.getState().stage==="trajectory"?"solar":"trajectory"),document.querySelectorAll("[data-view]").forEach(T=>T.onclick=()=>f(T.dataset.view)),u("home").onclick=T=>{T.preventDefault(),f("earth")},u("night-view").onclick=()=>f("earth",{night:!0}),u("station-view").onclick=()=>f("iss"),u("jwst-visit").onclick=()=>f("jwst"),u("jwst-deploy").onclick=()=>t.jwst.setDeployment(!t.jwst.getState().targetExpanded,{immediate:Un}),u("zoom-in").onclick=()=>h(.72),u("zoom-out").onclick=()=>h(1.45),u("pause").onclick=()=>M(!d),u("speed").onclick=()=>{let T=[.25,1,5,20];g=T[(T.indexOf(g)+1)%T.length],u("speed").firstChild.textContent=g+"\xD7",r("\u6F14\u793A\u65F6\u95F4\u6D41\u901F "+g+"\xD7")};function v(T){x=T,u("toggle-orbits").setAttribute("aria-pressed",String(x))}u("toggle-orbits").onclick=()=>E.configure({orbitsVisible:!x}),u("toggle-labels").onclick=()=>{m=!m,u("toggle-labels").setAttribute("aria-pressed",String(m))};let E=Wp(i.domElement,{world:t,controls:o,navigation:n,view:l,setSpaceColor:c,setOrbitsVisible:v});return u("fullscreen").onclick=w,u("help-button").onclick=()=>u("help-dialog").showModal(),u("credits-button").onclick=()=>u("credits-dialog").showModal(),document.querySelectorAll("[data-close]").forEach(T=>T.onclick=()=>T.closest("dialog").close()),document.querySelectorAll("dialog").forEach(T=>T.onclick=C=>{if(C.target===T){let R=T.getBoundingClientRect();(C.clientX<R.left||C.clientX>R.right||C.clientY<R.top||C.clientY>R.bottom)&&T.close()}}),addEventListener("keydown",T=>{if(document.querySelector("dialog[open]"))return;let C=T.target.tagName;if(!(["INPUT","TEXTAREA","SELECT"].includes(C)||T.target.isContentEditable)){if(E.active){["i","Escape"].includes(T.key)&&E.exit(),["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(T.key)&&(T.preventDefault(),E.next(["ArrowRight","ArrowDown"].includes(T.key)?1:-1));return}["BUTTON","A"].includes(C)&&T.code==="Space"||(T.code==="Space"&&(T.preventDefault(),M(!d)),(T.key==="+"||T.key==="=")&&h(.8),T.key==="-"&&h(1.25),T.key.toLowerCase()==="h"&&f("earth"),T.key.toLowerCase()==="f"&&w(),T.key.toLowerCase()==="i"&&E.toggle(),T.key==="Escape"&&E.exit(),T.key==="?"&&u("help-dialog").showModal())}}),Xp({renderer:i,camera:e,world:t,navigation:n,onPick:a,isEnabled:()=>!E.active}),M(d),{wallpaper:E,getState:()=>({paused:d,speed:g,orbitsVisible:x,labelsVisible:m}),setPaused:M,restoreState:b,updateStage:y,updateHud:S}}var Sr=i=>document.getElementById(i),$p;function wh(i){Sr("toast").textContent=i,Sr("toast").classList.add("show"),clearTimeout($p),$p=setTimeout(()=>Sr("toast").classList.remove("show"),2600)}function Sc(i){let e=Sr("loading");e&&(e.style.display="none"),Sr("error").hidden=!1,Sr("error-message").textContent=i}var gM={idle:"\u5F85\u8F7D\u5165",loading:"\u8FDE\u63A5\u4E2D",success:"\u5DF2\u66F4\u65B0",ready:"\u5DF2\u66F4\u65B0",live:"\u5DF2\u66F4\u65B0",error:"\u6682\u4E0D\u53EF\u7528",stale:"\u7F13\u5B58",partial:"\u90E8\u5206\u6765\u6E90\u4E0D\u53EF\u7528",simulated:"\u6A21\u62DF",empty:"\u6682\u65E0\u4E8B\u4EF6"};function ht(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function xM(i){let e=new Date(i);return i&&Number.isFinite(e.getTime())?e.toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"}):"\u5C1A\u672A\u66F4\u65B0"}function Zp({layers:i,onModeChange:e,onToggle:t,onRefresh:n,onSelect:s,onReturnEarth:r}){let a=ht("nav","earthsense-mode-switch ui");a.id="earthsense-mode-switch",a.setAttribute("aria-label","\u63A2\u7D22\u6A21\u5F0F");let o=["universe","earthsense"].map((te,q)=>{let z=ht("button","",q?"\u611F\u77E5\u5730\u7403":"\u5B87\u5B99\u6F2B\u6E38");return z.type="button",z.dataset.mode=te,z.setAttribute("aria-pressed",String(!q)),z.onclick=()=>e(te),a.append(z),z}),l=ht("aside","earthsense-panel ui");l.id="earthsense-panel",l.inert=!0,l.setAttribute("aria-hidden","true"),l.setAttribute("aria-label","\u611F\u77E5\u5730\u7403\u56FE\u5C42\u4E0E\u4E8B\u4EF6");let c=ht("div","eyebrow","+ EARTHSENSE"),u=ht("div","earthsense-title-row"),f=ht("h1","","\u611F\u77E5\u5730\u7403"),h=ht("button","earthsense-refresh","\u21BB");h.type="button",h.id="earthsense-refresh",h.setAttribute("aria-label","\u5237\u65B0\u5730\u7403\u6570\u636E"),h.title="\u5237\u65B0\u516C\u5F00\u6570\u636E",h.onclick=()=>n(),u.append(f,h);let d=ht("p","earthsense-intro","\u5FAA\u7740\u5730\u7403\u7684\u8109\u52A8\uFF0C\u770B\u89C1\u6B63\u5728\u53D1\u751F\u7684\u4E16\u754C\u3002"),g=ht("div","earthsense-layers");g.setAttribute("aria-label","\u72EC\u7ACB\u56FE\u5C42\u5F00\u5173");let x=new Map,m={layers:{},events:[]};for(let te of i){let q=ht("button","earthsense-layer");q.type="button",q.dataset.layer=te.id,q.style.setProperty("--layer-color",typeof te.color=="number"?`#${te.color.toString(16).padStart(6,"0")}`:te.color),q.setAttribute("aria-pressed","false");let z=ht("i","earthsense-layer-dot");z.setAttribute("aria-hidden","true");let L=ht("span","earthsense-layer-name",te.label),X=ht("span","earthsense-layer-count","\u2014");q.append(z,L,X),q.onclick=()=>t(te.id,!m.layers[te.id]?.enabled),x.set(te.id,{button:q,count:X,layer:te}),g.append(q)}let p=ht("p","earthsense-sampling","\u5929\u6C14\u4E3A\u91C7\u6837\u70B9\u6570\u636E \xB7 \u95EA\u7535\u4E3A\u6A21\u62DF\u6F14\u793A"),_=ht("div","earthsense-return"),M=ht("p","","\u5730\u7403\u56FE\u5C42\u5DF2\u6536\u8D77\uFF0C\u56DE\u5230\u5730\u7403\u8FD1\u666F\u7EE7\u7EED\u89C2\u5BDF\u3002"),y=ht("button","","\u8FD4\u56DE\u5730\u7403 \u2197");y.type="button",y.onclick=()=>r(),_.append(M,y);let b=ht("details","earthsense-events-section");b.open=!matchMedia("(max-width: 600px)").matches;let S=ht("summary","earthsense-events-heading"),w=ht("span","","\u89C2\u6D4B\u70B9\u4E0E\u4E8B\u4EF6"),v=ht("span","earthsense-total","0");S.append(w,v);let E=ht("div","earthsense-events");E.setAttribute("aria-label","\u5DF2\u5F00\u542F\u56FE\u5C42\u7684\u4E8B\u4EF6");let T=ht("input","earthsense-search");T.type="search",T.placeholder="\u641C\u7D22\u4E8B\u4EF6\u3001\u56FE\u5C42\u6216\u6765\u6E90",T.setAttribute("aria-label","\u641C\u7D22\u5730\u7403\u4E8B\u4EF6"),T.autocomplete="off",T.maxLength=150,T.oninput=()=>xe(m);let C=ht("p","earthsense-empty"),R=ht("p","earthsense-list-note");b.append(S,T,E,C,R);let D=ht("p","earthsense-update-status");D.setAttribute("role","status");let k=ht("p","earthsense-tagline","Explore the Universe. Sense the Earth.");l.append(c,u,d,g,p,_,b,D,k),document.body.append(a,l);let N=document.querySelector(".gesture-hint span:last-child"),O=document.querySelector(".live"),U=N?.textContent,W=O?[...O.childNodes].map(te=>te.cloneNode(!0)):[],V=[...document.querySelectorAll(".info-panel, .planet-dock, .time-control, .layer-toggles")].map(te=>({node:te,inert:te.inert,ariaHidden:te.getAttribute("aria-hidden")})),B=null,G="";function $(){for(let{node:te,inert:q,ariaHidden:z}of V)te.inert=q,z===null?te.removeAttribute("aria-hidden"):te.setAttribute("aria-hidden",z)}function xe(te){let q=T.value.trim().toLocaleLowerCase(),z={typhoon:0,lightning:1,weather:2},L=(te.events||[]).filter(fe=>te.layers[fe.layer]?.enabled).sort((fe,se)=>(z[fe.layer]??3)-(z[se.layer]??3)),X=L.filter(fe=>!q||[fe.title,fe.layer,fe.source,x.get(fe.layer)?.layer.label].join(" ").toLocaleLowerCase().includes(q)),ae=Object.values(te.layers).filter(fe=>fe.enabled),re=ae.length>0&&ae.every(fe=>["error","stale","partial"].includes(fe.status)),ye=JSON.stringify([X.map(fe=>[fe.id,fe.title,fe.time,fe.severity]),te.loading,q,re]);if(ye!==G){G=ye,v.textContent=q?`${X.length} / ${L.length}`:String(X.length),E.replaceChildren();for(let fe of X.slice(0,50)){let se=ht("button","earthsense-event");se.type="button",se.dataset.eventId=fe.id,se.title=fe.title;let ue=x.get(fe.layer)?.layer,ie=ht("span","earthsense-event-meta",`${ue?.label||fe.layer} \xB7 ${fe.source||"\u516C\u5F00\u6570\u636E"}`),pe=ht("span","earthsense-event-name",fe.title||"\u672A\u547D\u540D\u4E8B\u4EF6"),ve=ht("span","earthsense-event-arrow","\u2197");ve.setAttribute("aria-hidden","true"),se.append(ie,pe,ve),se.onclick=()=>s(fe),E.append(se)}C.hidden=X.length>0,C.textContent=te.loading?"\u6B63\u5728\u8FDE\u63A5\u516C\u5F00\u6570\u636E\u6E90\u2026":re&&!L.length?"\u5F53\u524D\u6570\u636E\u6682\u4E0D\u53EF\u7528\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5\u3002":q?"\u6CA1\u6709\u5339\u914D\u7684\u4E8B\u4EF6\u3002\u53EF\u66F4\u6362\u5173\u952E\u8BCD\u6216\u5F00\u542F\u5176\u4ED6\u56FE\u5C42\u3002":"\u5F53\u524D\u5F00\u542F\u7684\u56FE\u5C42\u6682\u65E0\u4E8B\u4EF6\u3002\u53EF\u4EE5\u5F00\u542F\u5176\u4ED6\u56FE\u5C42\uFF0C\u6216\u7A0D\u540E\u5237\u65B0\u3002",R.hidden=X.length<=50,R.textContent="\u5217\u51FA\u524D 50 \u6761 \xB7 \u5176\u4F59\u4E8B\u4EF6\u53EF\u5728\u5730\u7403\u4E0A\u70B9\u51FB\u67E5\u770B"}}function ee(te){if(m={...te,layers:te.layers||{},events:te.events||[]},document.body.classList.toggle("earthsense-active",!!te.active),B!==!!te.active){if(B=!!te.active,(te.active?V.map(({node:L})=>L):[l]).some(L=>L.contains(document.activeElement))&&o.find(L=>L.dataset.mode==="earthsense"==!!te.active)?.focus({preventScroll:!0}),l.inert=!te.active,l.setAttribute("aria-hidden",String(!te.active)),te.active)for(let{node:L}of V)L.inert=!0,L.setAttribute("aria-hidden","true");else $();N&&(N.textContent=te.active?"\u70B9\u51FB\u5730\u7403\u4E8B\u4EF6":U),O&&(O.replaceChildren(...W.map(L=>L.cloneNode(!0))),te.active&&O.replaceChildren(ht("i"),document.createTextNode("\u5730\u8868\u89C2\u6D4B")))}if(o.forEach(z=>z.setAttribute("aria-pressed",String(z.dataset.mode==="earthsense"==!!te.active))),!te.active)return;_.hidden=te.visible!==!1,l.classList.toggle("earthsense-away",te.visible===!1),h.disabled=!!te.loading;for(let[z,{button:L,count:X,layer:ae}]of x){let re=m.layers[z]||{};L.setAttribute("aria-pressed",String(!!re.enabled));let ye=gM[re.status]||re.status||"\u5F85\u8F7D\u5165";X.textContent=re.status==="loading"?"\u2026":re.status==="error"&&!re.count?"!":String(re.count??"\u2014"),L.classList.toggle("has-error",["error","stale","partial"].includes(re.status)),L.title=`${ae.label} \xB7 ${ye}${re.error?" \xB7 "+re.error:""}`,L.setAttribute("aria-label",`${ae.label}${z==="lightning"?"\uFF08\u6A21\u62DF\uFF09":""}\uFF1A${re.enabled?"\u5DF2\u5F00\u542F":"\u5DF2\u5173\u95ED"}\uFF0C${ye}\uFF0C${re.count??0} \u4E2A\u70B9\u4F4D`)}let q=Object.entries(m.layers).filter(([,z])=>z.enabled&&["error","stale","partial"].includes(z.status));D.textContent=te.loading?"\u6B63\u5728\u540C\u6B65\u516C\u5F00\u6570\u636E\u2026":q.length?`${q.length} \u4E2A\u56FE\u5C42\u6570\u636E\u4E0D\u5B8C\u6574\u6216\u4F7F\u7528\u7F13\u5B58 \xB7 \u53EF\u5237\u65B0\u91CD\u8BD5`:`\u66F4\u65B0\u4E8E ${xM(te.updatedAt)} \xB7 \u70B9\u51FB\u4E91\u5C42\u6216\u5217\u8868\u67E5\u770B`,xe(m)}return{update:ee,dispose(){l.remove(),a.remove(),document.body.classList.remove("earthsense-active"),$(),N&&(N.textContent=U),O?.replaceChildren(...W)}}}var Ec=i=>{let e=new Date(i);return i&&Number.isFinite(e.getTime())?e.toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}):"\u672A\u63D0\u4F9B"};function Kp(){let i=document.createElement("section");i.className="earthsense-route-info",i.setAttribute("aria-label","\u53F0\u98CE\u8DEF\u5F84\u4E0E\u98CE\u529B");function e(n,s=""){let r=document.createElement("p");return r.className=s,r.textContent=n,i.append(r),r}function t(n){if(i.hidden=n.layer!=="typhoon",i.replaceChildren(),i.hidden)return;let s=n.cyclone;if(Number.isFinite(s?.windSpeedKmh)){let c=s.windBasis==="observation";e(`${c?"\u6765\u6E90\u89C2\u6D4B\u98CE\u901F":"\u6765\u6E90\u4E8B\u4EF6\u6700\u5927\u98CE\u901F"} \xB7 ${s.windSpeedKmh.toFixed(1)} km/h`,"earthsense-route-wind"),c&&s.validTime&&e(`\u98CE\u529B\u8BB0\u5F55 \xB7 ${Ec(s.validTime)}`)}else e("\u6765\u6E90\u672A\u63D0\u4F9B\u98CE\u901F \xB7 \u4E91\u7CFB\u91C7\u7528\u9ED8\u8BA4\u793A\u610F\u5927\u5C0F");let r=n.trackData,a=r?.history||[],o=r?.forecast||[],l=document.createElement("div");l.className="earthsense-route-legend";for(let[c,u,f]of[["history","\u5386\u53F2\u8DEF\u5F84",a],["forecast","\u9884\u6D4B\u8DEF\u5F84",o]]){let h=document.createElement("span");h.className=`earthsense-route-${c}`,h.textContent=`${u} ${f.length}`,l.append(h)}if(i.append(l),!r||r.status==="loading"?e("\u6B63\u5728\u83B7\u53D6\u6765\u6E90\u8DEF\u5F84\u4E0E\u9884\u6D4B\u2026","earthsense-route-status"):r.status==="error"?e(r.message||"\u8DEF\u5F84\u6682\u4E0D\u53EF\u7528\uFF0C\u91CD\u65B0\u9009\u62E9\u6B64\u53F0\u98CE\u53EF\u91CD\u8BD5\u3002","earthsense-route-status"):o.length||e(r.message||"\u6765\u6E90\u6682\u65E0\u53EF\u7528\u9884\u6D4B\u8DEF\u5F84\u3002","earthsense-route-status"),r?.issuedAt&&e(`\u9884\u62A5\u65F6\u6B21 \xB7 ${Ec(r.issuedAt)}`),o.length){let c=o.at(-1);e(`\u9884\u6D4B\u81F3 \xB7 ${Ec(c.time||c.validTime)}`),Date.parse(c.time||c.validTime)<Date.now()&&e("\u8BE5\u6B21\u9884\u62A5\u5DF2\u5230\u671F \xB7 \u663E\u793A\u6765\u6E90\u4FDD\u7559\u7684\u8DEF\u5F84","earthsense-route-status")}if(n.trackPoint){let c=n.trackPoint;e(`${n.trackKind==="forecast"?"\u9884\u6D4B\u70B9":"\u5386\u53F2\u70B9"} \xB7 ${Ec(c.time||c.validTime)}`,"earthsense-route-point"),Number.isFinite(c.windSpeedKmh)&&e(`\u8BE5\u70B9\u98CE\u901F \xB7 ${c.windSpeedKmh.toFixed(1)} km/h`)}if(r?.source){let c=document.createElement("a");c.textContent=`\u8DEF\u5F84\u6765\u6E90 \xB7 ${r.source}`;try{let u=new URL(r.sourceUrl);u.protocol==="https:"&&!u.username&&!u.password&&(c.href=u.href,c.target="_blank",c.rel="noopener noreferrer")}catch{}i.append(c)}}return{element:i,update:t}}var vM={weather:"\u5929\u6C14",typhoon:"\u53F0\u98CE / \u98CE\u66B4",lightning:"\u95EA\u7535 \xB7 \u6A21\u62DF"},yM={unknown:"\u672A\u5206\u7EA7",high:"\u8F83\u9AD8",medium:"\u4E2D\u7B49",low:"\u8F83\u4F4E",red:"\u7EA2\u8272\u9884\u8B66",orange:"\u6A59\u8272\u9884\u8B66",green:"\u7EFF\u8272\u9884\u8B66"};function On(i,e,t){let n=document.createElement(i);return n.className=e,t!==void 0&&(n.textContent=t),n}function _M(i){let e=new Date(typeof i=="number"&&i<1e12?i*1e3:i);return i&&Number.isFinite(e.getTime())?e.toLocaleString("zh-CN",{hour12:!1}):"\u672A\u63D0\u4F9B"}function bM(i,e){return!Number.isFinite(i)||!Number.isFinite(e)?"\u5750\u6807\u672A\u63D0\u4F9B":`${Math.abs(i).toFixed(2)}\xB0${i>=0?"N":"S"} / ${Math.abs(e).toFixed(2)}\xB0${e>=0?"E":"W"}`}function Jp({onFocus:i,onClose:e}){let t=On("section","earthsense-popup ui");t.id="earthsense-event-popup",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","false"),t.setAttribute("aria-labelledby","earthsense-popup-title");let n=On("button","earthsense-popup-close","\xD7");n.type="button",n.setAttribute("aria-label","\u5173\u95ED\u4E8B\u4EF6\u8BE6\u60C5");let s=On("div","eyebrow"),r=On("h2","");r.id="earthsense-popup-title";let a=On("p","earthsense-popup-location"),o=On("p","earthsense-popup-description"),l=On("dl","earthsense-popup-metrics"),c=On("p","earthsense-popup-time"),u=On("a","earthsense-popup-source");u.target="_blank",u.rel="noopener noreferrer";let f=On("button","earthsense-popup-focus","\u653E\u5927\u67E5\u770B \u2197"),h=Kp();f.type="button",t.append(n,s,r,a,h.element,o,l,c,u,f),document.body.append(t);let d=null,g=null;function x(_=!1){let M=!t.hidden;t.hidden=!0,d=null,M&&t.contains(document.activeElement)&&g?.focus?.({preventScroll:!0}),_&&M&&e?.()}n.onclick=()=>x(!0),f.onclick=()=>{d&&i?.(d.trackPoint||d)};function m(_){_.key==="Escape"&&!t.hidden&&(_.preventDefault(),x(!0))}document.addEventListener("keydown",m);function p(_,M=!0){if(!_)return x();t.hidden&&(g=document.activeElement),d=_,s.textContent=`${vM[_.layer]||"\u5730\u7403\u4E8B\u4EF6"}${_.severity?" / "+(yM[_.severity]||_.severity):""}`,r.textContent=_.title||"\u5730\u7403\u4E8B\u4EF6";let y=_.trackPoint||_,b=_.trackPoint?`${_.trackKind==="forecast"?"\u9884\u6D4B\u70B9":"\u5386\u53F2\u70B9"} \xB7 `:"";a.textContent=b+bM(y.lat,y.lon),o.textContent=_.description||"",o.hidden=!_.description,l.replaceChildren();for(let v of _.metrics||[])l.append(On("dt","",v.label),On("dd","",String(v.value??"\u672A\u63D0\u4F9B")));l.hidden=!l.childElementCount,h.update(_);let S=_.time??_.timeISO;c.textContent=_.layer==="lightning"&&!S?"\u6A21\u62DF\u6F14\u793A \xB7 \u975E\u5B9E\u51B5\u89C2\u6D4B":`\u4E8B\u4EF6\u65F6\u95F4 \xB7 ${_M(S)}`;let w=null;try{let v=new URL(_.sourceUrl);(v.protocol==="https:"||v.protocol==="http:")&&(w=v.href)}catch{}u.textContent=`${_.source||"\u6570\u636E\u6765\u6E90"}${w?" \u2197":""}`,w?u.href=w:u.removeAttribute("href"),f.disabled=!Number.isFinite(y.lat)||!Number.isFinite(y.lon),t.hidden=!1,M&&n.focus({preventScroll:!0})}return{show:p,close:x,update(_){!t.hidden&&_&&p(_,!1)},dispose(){x(),document.removeEventListener("keydown",m),t.remove()}}}function Qp(i,e,{now:t=Date.now}={}){let n=new Map(i.map(d=>[d.id,{enabled:d.enabled,status:"idle",events:[],updatedAt:null,error:"",nextRefresh:0}])),s=new Map,r=!1,a;function o(){return Object.fromEntries([...n].map(([d,g])=>[d,{enabled:g.enabled,status:g.status,count:g.events.length,updatedAt:g.updatedAt,error:g.error}]))}async function l(d,g){let x=n.get(d.id);if(!r||!x.enabled||s.has(d.id)||!g&&t()<x.nextRefresh)return;let m=new AbortController;s.set(d.id,m),x.status="loading",e();try{let p=await d.load({signal:m.signal,force:g});if(m.signal.aborted||s.get(d.id)!==m)return;let _=Array.isArray(p)?p:p.events;if(!Array.isArray(_))throw new Error("\u6570\u636E\u683C\u5F0F\u4E0D\u53EF\u8BC6\u522B");x.events=_,x.error=Array.isArray(p)?"":p.warning||"",x.updatedAt=t(),x.status=x.error?"partial":_.length?"ready":"empty",x.nextRefresh=t()+(x.error?6e4:d.ttl)}catch(p){if(m.signal.aborted)return;x.error=p?.message||"\u6570\u636E\u6E90\u6682\u4E0D\u53EF\u7528",x.status=x.updatedAt?"stale":"error",x.nextRefresh=t()+6e4}finally{s.get(d.id)===m&&(s.delete(d.id),e())}}function c(d=!1){return Promise.all(i.map(g=>l(g,d)))}function u(d){let g=s.get(d);if(!g)return;s.delete(d),g.abort();let x=n.get(d);x.status=x.updatedAt?x.error?"stale":x.events.length?"ready":"empty":"idle"}function f(d){if(r!==d){if(r=d,clearInterval(a),r)c(),a=setInterval(()=>{globalThis.document?.hidden||c()},6e4);else for(let g of[...s.keys()])u(g);e()}}function h(d,g){let x=n.get(d),m=i.find(p=>p.id===d);x&&(x.enabled=!!g,g?l(m,!1):u(d),e())}return{setActive:f,setEnabled:h,refresh:c,snapshot:o,events:d=>n.get(d)?.events||[],visibleEvents:()=>[...n.values()].filter(d=>d.enabled).flatMap(d=>d.events),dispose(){f(!1)}}}function em(i,e){let t,n=!1;return{get active(){return n},enter(){n||(t={navigation:i.snapshot(),settings:e.getState()},n=!0,i.flyTo("earth"))},leave(){n&&(n=!1,e.restoreState(t.settings),i.restore(t.navigation,{animate:!0}),t=null)}}}var Ah=new WeakMap;function Tc(){return new DOMException("\u6570\u636E\u8BF7\u6C42\u5DF2\u53D6\u6D88","AbortError")}function MM(i){return Ah.has(i)||Ah.set(i,{cache:new Map,pending:new Map}),Ah.get(i)}function SM(i,{fetchImpl:e,timeoutMs:t,ttl:n,validate:s},r){let a=new AbortController,o={controller:a,subscribers:0,settled:!1,promise:null},l=!1,c=setTimeout(()=>{l=!0,a.abort()},t);return o.promise=Promise.resolve().then(async()=>{try{let u=await e(i,{signal:a.signal,mode:"cors",credentials:"omit",headers:{Accept:"application/json"}});if(!u.ok){let h=new Error(`\u6570\u636E\u6E90\u8FD4\u56DE HTTP ${u.status}`);throw h.name="HttpError",h.status=u.status,h}let f=await u.json();if(s?.(f),a.signal.aborted)throw Tc();return n>0&&r.cache.set(i,{value:f,expiresAt:Date.now()+n}),f}catch(u){if(l){let f=new Error("\u6570\u636E\u6E90\u54CD\u5E94\u8D85\u65F6\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");throw f.name="TimeoutError",f}throw a.signal.aborted?Tc():u}finally{clearTimeout(c),o.settled=!0,r.pending.get(i)===o&&r.pending.delete(i)}}),r.pending.set(i,o),o}function EM(i,e,t,n){return i.subscribers++,new Promise((s,r)=>{let a=!1,o=()=>a?!1:(a=!0,e?.removeEventListener("abort",l),i.subscribers--,!0),l=()=>{o()&&(r(Tc()),!i.settled&&i.subscribers===0&&(t.pending.get(n)===i&&t.pending.delete(n),i.controller.abort()))};e?.addEventListener("abort",l,{once:!0}),e?.aborted&&l(),i.promise.then(c=>{o()&&s(c)},c=>{o()&&r(c)})})}function Li(i,{signal:e,ttl:t=0,fetchImpl:n=globalThis.fetch,force:s=!1,timeoutMs:r=18e3,validate:a}={}){if(e?.aborted)return Promise.reject(Tc());if(typeof n!="function")return Promise.reject(new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u516C\u5F00\u6570\u636E\u8BF7\u6C42"));let o=MM(n),l=o.cache.get(i);if(!s&&l&&l.expiresAt>Date.now())try{return a?.(l.value),Promise.resolve(l.value)}catch(u){return o.cache.delete(i),Promise.reject(u)}l&&l.expiresAt<=Date.now()&&o.cache.delete(i);let c=o.pending.get(i)||SM(i,{fetchImpl:n,ttl:t,timeoutMs:r,validate:a},o);return EM(c,e,o,i)}function Ft(i){if(typeof i!="number"&&(typeof i!="string"||!i.trim()))return null;let e=Number(i);return Number.isFinite(e)?e:null}function Jn(i){if(!Array.isArray(i)||i.length<2)return null;let e=Ft(i[0]),t=Ft(i[1]);return e!==null&&t!==null&&Math.abs(e)<=180&&Math.abs(t)<=90?[e,t]:null}function bt(i,e="",t=700){return typeof i=="string"&&i.trim()?i.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g,"").trim().slice(0,t):e}function Qn(i,e=!1){if(i==null||i==="")return null;let t;if(typeof i=="number")t=Number.isFinite(i)?i*(e?1e3:1):NaN;else if(typeof i=="string"){let n=i.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?(?:Z|[+-]\d{2}:\d{2})?)?$/);if(!n)return null;let[,s,r,a,o="0",l="0",c="0"]=n;if(+r<1||+r>12||+a<1||+a>new Date(Date.UTC(+s,+r,0)).getUTCDate()||+o>23||+l>59||+c>59)return null;t=Date.parse(i.includes("T")&&!/(Z|[+-]\d{2}:\d{2})$/.test(i)?`${i}Z`:i)}return Number.isFinite(t)&&Math.abs(t)<=864e13?new Date(t).toISOString():null}function Bn(i,e=null){try{let t=new URL(i);if(t.protocol==="https:"&&!t.username&&!t.password)return t.href}catch{}return e}function wn(i,e,t="",n=1){let s=Ft(e);return s===null?null:{label:i,value:`${s.toLocaleString("zh-CN",{maximumFractionDigits:n})}${t?` ${t}`:""}`}}function tm(i){let e=new Map;for(let t of i)(!e.has(t.id)||t.time>e.get(t.id).time)&&e.set(t.id,t);return[...e.values()].sort((t,n)=>n.time.localeCompare(t.time))}function nm(i,e){if(i?.type!=="FeatureCollection"||!Array.isArray(i.features))throw new Error(`${e} \u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u6570\u636E\u683C\u5F0F`);return i.features}function im(i){return{red:"high",orange:"medium",yellow:"medium",green:"low"}[bt(i).toLowerCase()]||"unknown"}function sm(i){if(i?.type==="Point")return Jn(i.coordinates);if(i?.type!=="Polygon"||!Array.isArray(i.coordinates?.[0]))return null;let e=i.coordinates[0].map(Jn).filter(Boolean);if(e.length<3||(e[e.length-1].join(",")===e[0].join(",")&&e.pop(),e.length<3))return null;let t=0,n=0,s=0;for(let[r,a]of e){let o=r*Math.PI/180,l=a*Math.PI/180;t+=Math.cos(l)*Math.cos(o),n+=Math.cos(l)*Math.sin(o),s+=Math.sin(l)}return Math.hypot(t,n,s)<1e-10?e[0]:[Math.atan2(n,t)*180/Math.PI,Math.atan2(s,Math.hypot(t,n))*180/Math.PI]}function rm(i){let e=i?.type==="LineString"?[i.coordinates]:i?.type==="MultiLineString"?i.coordinates:[],t=[];for(let n of Array.isArray(e)?e:[]){if(!Array.isArray(n))continue;let s=[];for(let r of n){let a=Jn(r);a?s.push(a):(s.length>1&&t.push(s),s=[])}s.length>1&&t.push(s)}return t}var Rh=Object.freeze([-60,-30,0,30,60].flatMap(i=>Array.from({length:12},(e,t)=>Object.freeze({lat:i,lon:-180+t*30})))),TM="Open-Meteo \u5F53\u524D\u5929\u6C14\u6A21\u578B \xB7 \u5168\u7403 60 \u4E2A\u89C4\u5219\u91C7\u6837\u70B9\uFF0C\u975E\u8FDE\u7EED\u6C14\u8C61\u573A\uFF1B\u964D\u6C34\u4E3A\u6765\u6E90\u65F6\u95F4\u95F4\u9694\u5185\u7684\u7D2F\u8BA1\u91CF\u3002",wM=`https://api.open-meteo.com/v1/forecast?${new URLSearchParams({latitude:Rh.map(i=>i.lat).join(","),longitude:Rh.map(i=>i.lon).join(","),current:"temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m",timezone:"GMT",timeformat:"unixtime",forecast_days:"1",cell_selection:"nearest"})}`;function AM(i){return i===0?"\u6674":[1,2,3].includes(i)?["\u5927\u81F4\u6674\u6717","\u5C40\u90E8\u591A\u4E91","\u9634"][i-1]:[45,48].includes(i)?"\u96FE":[51,53,55,56,57].includes(i)?"\u6BDB\u6BDB\u96E8":[61,63,65,66,67].includes(i)?"\u964D\u96E8":[71,73,75,77,85,86].includes(i)?"\u964D\u96EA":[80,81,82].includes(i)?"\u9635\u96E8":[95,96,99].includes(i)?"\u96F7\u66B4":"\u5929\u6C14\u72B6\u6001\u672A\u77E5"}var RM=(i,e)=>`${Math.abs(i)}\xB0${i<0?"S":"N"} \xB7 ${Math.abs(e)}\xB0${e<0?"W":"E"}`,Er=i=>{let e=Ft(i);return e!==null&&e>=0?e:null},am=i=>{let e=Er(i);return e!==null&&e<=100?e:null};function om(i,e=Rh){let t=Array.isArray(i)?i:i?.current?[i]:null;if(!t||t.length!==e.length)throw new Error("Open-Meteo \u8FD4\u56DE\u7684\u91C7\u6837\u70B9\u6570\u91CF\u6216\u683C\u5F0F\u4E0D\u6B63\u786E");let n=t.flatMap((s,r)=>{let a=Jn([s?.longitude,s?.latitude]),o=s?.current,l=Qn(o?.time,!0);if(!a||!o||!l)return[];let c=Er(o.interval),u={temperature:Ft(o.temperature_2m),windSpeed:Er(o.wind_speed_10m),windDirection:Er(o.wind_direction_10m),precipitation:Er(o.precipitation),cloudCover:am(o.cloud_cover),interval:c>0?c:null,rain:Er(o.rain),humidity:am(o.relative_humidity_2m),code:Ft(o.weather_code)};u.windDirection>360&&(u.windDirection=null);let f=u.interval?`\u8FD1 ${u.interval/60} \u5206\u949F`:"\u6765\u6E90\u65F6\u6BB5",h=e[r];return[{id:`weather:${h.lat}:${h.lon}`,layer:"weather",title:`${RM(h.lat,h.lon)} \xB7 ${AM(u.code)}`,lon:a[0],lat:a[1],time:l,source:"Open-Meteo",sourceUrl:"https://open-meteo.com/en/docs",severity:"unknown",description:TM,weather:u,metrics:[wn("\u6C14\u6E29",u.temperature,"\xB0C"),wn("10 \u7C73\u98CE\u901F",u.windSpeed,"km/h"),wn("\u98CE\u5411\uFF08\u6765\u5411\uFF09",u.windDirection,"\xB0",0),wn("\u4E91\u91CF",u.cloudCover,"%",0),wn(`\u964D\u6C34\uFF08${f}\uFF09`,u.precipitation,"mm"),wn(`\u964D\u96E8\uFF08${f}\uFF09`,u.rain,"mm"),wn("\u76F8\u5BF9\u6E7F\u5EA6",u.humidity,"%",0)].filter(Boolean)}]});if(t.length&&!n.length)throw new Error("Open-Meteo \u672A\u8FD4\u56DE\u6709\u6548\u7684\u91C7\u6837\u4F4D\u7F6E\u548C\u65F6\u95F4");return n}async function lm(i={}){return om(await Li(wM,{ttl:900*1e3,...i,validate:om}))}function cm(i,e){let t=[];for(let s of i){let r=[...s.paths||[],...s.track?.length?[s.track]:[]];for(let a of r)for(let o=1;o<a.length;o++){let[l,c]=a[o-1],[u,f]=a[o];if(![l,c,u,f].every(Number.isFinite))continue;let h=fn(c,l),d=fn(f,u),g=Math.max(1,Math.ceil(h.angleTo(d)/.015));if(h.dot(d)<-.98)continue;let x=h.clone().multiplyScalar(1.018);for(let m=1;m<=g;m++){let p=h.clone().lerp(d,m/g).normalize().multiplyScalar(1.018);t.push(...x.toArray(),...p.toArray()),x=p}}}let n=new Ke;return n.setAttribute("position",new Pe(t,3)),new fs(n,new ln({color:e,transparent:!0,opacity:.5,depthWrite:!1}))}function wc({color:i,size:e=()=>1,colorFor:t,segments:n=32,paths:s=!1}){let r=new ze,a=new ot,o=new _t,l=new I(0,0,1),c=new I,u=new Pt(1,8,6),f=new qn(.7,1,n),h=new on({color:i,depthWrite:!1,toneMapped:!1}),d=new on({color:i,transparent:!0,opacity:.72,depthWrite:!1,side:pt,toneMapped:!1}),g=[],x,m,p,_=1;function M(E){_=E;for(let T=0;T<g.length;T++){let C=g[T],R=fn(C.lat,C.lon);o.setFromUnitVectors(l,R);let D=e(C)*E;a.compose(R.clone().multiplyScalar(1.023),o,c.setScalar(.009*D)),x.setMatrixAt(T,a),a.compose(R.clone().multiplyScalar(1.016),o,c.setScalar(.025*D)),m.setMatrixAt(T,a)}for(let T of[x,m])T.instanceMatrix.needsUpdate=!0,T.computeBoundingSphere()}function y(){for(let E of[x,m])E&&(r.remove(E),E.dispose());p&&(r.remove(p),p.geometry.dispose(),p.material.dispose(),p=null)}function b(E){y(),g=E,x=new Wi(u,h,g.length),m=new Wi(f,d,g.length);for(let T=0;T<g.length;T++){let C=g[T];if(t){let R=new ge(t(C));x.setColorAt(T,R),m.setColorAt(T,R)}}M(_),r.add(x,m),s&&(p=cm(g,i),r.add(p))}function S(E,T=1/0){if(!r.visible||!x)return null;let C=E.intersectObjects([x,m],!1).find(R=>R.distance<=T+.002);return C?{event:g[C.instanceId],distance:C.distance}:null}function w(E,{reducedMotion:T=!1,scaleFactor:C=1}={}){x&&Math.abs(C-_)>.002&&M(C),d.opacity=T?.72:.62+Math.sin(E*1.6)*.14}function v(){y(),u.dispose(),f.dispose(),h.dispose(),d.dispose(),r.removeFromParent()}return{group:r,setEvents:b,pick:S,update:w,dispose:v}}var CM=new Set([95,96,99]),PM=new Set([51,53,55,56,57,61,63,65,66,67,80,81,82]),IM=new Set([51,56,61,66,80]),DM=new Set([71,73,75,77,85,86]),um=Se.clamp,zn=Object.freeze({maxLocations:60,cloudRadius:.075,stormRadius:.09,cloudAltitude:.012,stormAltitude:.02,maxWeatherPuffs:11,stormPuffs:14,maxRainDrops:22,maxRainRate:50,minFlashPeriod:4,maxFlashPeriod:18});function hm(i){let e=[i.rain,i.precipitation].filter(t=>Number.isFinite(t)&&t>=0);return e.length?Math.max(...e):null}function LM(i={}){let e=hm(i);return e!==null&&Number.isFinite(i.interval)&&i.interval>0?e*(3600/i.interval):null}function ja(i,e=!1){let t=i.weather||{},n=t.code===0||t.code===1,s=!n&&CM.has(t.code),r=hm(t),a=LM(t),o=!n&&!DM.has(t.code)&&r!==0&&(r>0||PM.has(t.code)),l=o?a===null?.12:um(Math.log1p(a)/Math.log1p(zn.maxRainRate),0,1):0,c=t.code===0?0:t.code===1?.22:t.code===2?.55:t.code===3?1:[45,48].includes(t.code)?.65:0,u=Number.isFinite(t.cloudCover)?um(t.cloudCover/100,0,1):c,f=n?0:Math.max(u,s?1:o?.75:0),h=f<.12?0:f,d=s?zn.stormRadius*(.72+l*.28):zn.cloudRadius*(.65+h*.35);return{event:i,thunder:s,raining:o,rainfall:r,rainRate:a,rainIntensity:l,coverage:h,rainSpeed:.55+l*1.3,rainLength:.008+l*.019,rainSpread:d*(.35+l*.45),flashPeriod:s?Se.lerp(zn.maxFlashPeriod,zn.minFlashPeriod,Math.sqrt(l)):null,flashIntensity:s?.25+l*.75:0,darkness:s?.9:o?.65:h>.8?.35:.03,radius:d,altitude:s?zn.stormAltitude:zn.cloudAltitude,puffs:h&&!IM.has(t.code)?e?zn.stormPuffs:Math.ceil(3+h*(zn.maxWeatherPuffs-3)):0,drops:o?Math.min(zn.maxRainDrops,Math.ceil(3+l*(zn.maxRainDrops-3))):0}}function mt(i,e=0){let t=`${i.id}:${i.lat}:${i.lon}:${e}`,n=2166136261;for(let s=0;s<t.length;s++)n=Math.imul(n^t.charCodeAt(s),16777619);return(n>>>0)/4294967296}function Tr(i){let e=Se.degToRad(i.lat),t=Se.degToRad(i.lon);return{normal:fn(i.lat,i.lon),east:new I(-Math.sin(t),0,-Math.cos(t)),north:new I(-Math.sin(e)*Math.cos(t),Math.cos(e),Math.sin(e)*Math.sin(t))}}function ws(i,e,t,n,s=new I){return s.copy(i.normal).addScaledVector(i.east,e).addScaledVector(i.north,t).normalize().multiplyScalar(1+n)}function dm(i,e=!1){return i.filter(t=>Number.isFinite(t.lat)&&Number.isFinite(t.lon)).slice(0,zn.maxLocations).map(t=>ja(t,e))}var $a=Object.freeze({coreWidth:65e-5,haloWidth:.0028,segments:9,branches:3}),Ch=`
float stormFlash(float time, float phase, float period) {
  float t = mod(time + phase * max(period, 4.0), max(period, 4.0));
  return max(1.0 - smoothstep(0.025, 0.11, abs(t - 0.12)),
             (1.0 - smoothstep(0.018, 0.065, abs(t - 0.30))) * 0.75);
}`;function fm(){let i=new ze;i.name="Local branched lightning";let e=new Ke,t={uTime:{value:0},uReducedMotion:{value:0}},n=`
    attribute vec2 aStorm; varying vec2 vStorm;
    attribute vec3 aOther; attribute float aSide; attribute float aAcross; attribute float aPhase;
    uniform float uWidth; varying float vPhase; varying float vAcross;
    #include <common>
    #include <logdepthbuf_pars_vertex>
    void main() {
      vec4 world = modelMatrix * vec4(position, 1.0);
      vec3 other = (modelMatrix * vec4(aOther, 1.0)).xyz;
      vec3 along = normalize(other - world.xyz);
      vec3 view = normalize(cameraPosition - world.xyz);
      vec3 side = cross(along, view);
      float sideLength = length(side);
      side = sideLength > .001 ? side / sideLength : vec3(1.0, 0.0, 0.0);
      world.xyz += side * aSide * uWidth;
      vPhase = aPhase; vAcross = aAcross; vStorm = aStorm;
      gl_Position = projectionMatrix * viewMatrix * world;
      #include <logdepthbuf_vertex>
    }`,s=`
    uniform float uTime; uniform float uReducedMotion; uniform vec3 uColor;
    varying vec2 vStorm; uniform float uOpacity; varying float vPhase; varying float vAcross;
    #include <common>
    #include <logdepthbuf_pars_fragment>
    ${Ch}
    void main() {
      float pulse = (uReducedMotion > .5 ? .46 : stormFlash(uTime, vPhase, vStorm.x)) * vStorm.y;
      if (pulse < .02) discard;
      float softEdge = exp(-vAcross * vAcross * 3.8) * (1.0 - smoothstep(.65, 1.0, abs(vAcross)));
      gl_FragColor = vec4(uColor * (1.0 + pulse * 1.6), uOpacity * pulse * softEdge);
      #include <logdepthbuf_fragment>
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`;function r(c,u,f){return new Je({uniforms:{...t,uWidth:{value:c},uColor:{value:new ge(u)},uOpacity:{value:f}},vertexShader:n,fragmentShader:s,transparent:!0,depthWrite:!1,depthTest:!0,side:pt,blending:wt})}let a=new We(e,r($a.haloWidth,"#668fff",.38)),o=new We(e,r($a.coreWidth,"#dcefff",1));a.renderOrder=6,o.renderOrder=7,a.frustumCulled=o.frustumCulled=!1,i.add(a,o);function l(c){e.dispose();let u=[],f=[],h=[],d=[],g=[],x=[],m,p=0,_=0;function M(y,b,S){for(let[w,v,E,T]of[[y,b,-1,-1],[y,b,1,1],[b,y,1,-1],[b,y,1,-1],[y,b,1,1],[b,y,-1,1]])u.push(...w.toArray()),f.push(...v.toArray()),h.push(E),d.push(T),g.push(S),x.push(m.flashPeriod,m.flashIntensity)}for(let y of c.filter(b=>b.thunder)){m=y;let{event:b,altitude:S,radius:w}=y,v=Tr(b),E=mt(b,200),T=[],C=mt(b,1400)*Math.PI*2;for(let R=0;R<=18;R++){let D=R/18,k=(D-.5)*w*1.25,N=Math.sin(D*2.2+.7)*w*.13+(mt(b,1500+R)-.5)*.024,O=k*Math.cos(C)-N*Math.sin(C),U=k*Math.sin(C)+N*Math.cos(C),W=ws(v,O,U,S+.002+Math.sin(Math.PI*D)*.002);T.push(W),R&&M(T[R-1],W,E)}for(let R=0;R<4;R++){let D=T[3+R*4],k=D,N=w*(.23+mt(b,1550+R)*.38),O=C+(R%2?1:-1)*(.55+mt(b,1560+R)*.9),U=3+Math.floor(mt(b,1570+R)*4);for(let W=1;W<=U;W++){let V=W/U,B=(mt(b,1600+R*8+W)-.5)*.009,G=D.clone().addScaledVector(v.north,Math.sin(O)*N*V+Math.cos(O)*B).addScaledVector(v.east,Math.cos(O)*N*V-Math.sin(O)*B);G.setLength(1+S+.003),M(k,G,E),k=G}}_++;for(let R=0;R<2;R++){let D=(mt(b,210+R)-.5)*w,k=(mt(b,220+R)-.5)*w,N=[];for(let O=0;O<=$a.segments;O++){let U=O/$a.segments,W=Math.sin(Math.PI*U)*.011;N.push(ws(v,D+(mt(b,300+R*30+O)-.5)*W*2,k+(mt(b,400+R*30+O)-.5)*W*2,Se.lerp(S+.001,.003,U))),O&&M(N[O-1],N[O],E)}for(let O=0;O<$a.branches;O++){let U=N[2+O*2],W=U,V=mt(b,500+O+R*5)*Math.PI*2,B=.016+mt(b,550+O+R*5)*.022,G=3+Math.floor(mt(b,560+O+R*5)*3);for(let $=1;$<=G;$++){let xe=$/G,ee=U.clone().addScaledVector(v.east,Math.cos(V)*B*xe).addScaledVector(v.north,Math.sin(V)*B*xe).addScaledVector(v.normal,-B*.9*xe);$<G&&ee.addScaledVector(v.east,(mt(b,600+$+O*10)-.5)*.007),ee.length()<1.003&&ee.setLength(1.003),M(W,ee,E),W=ee}}p++}}e.setAttribute("position",new Pe(u,3)),e.setAttribute("aOther",new Pe(f,3)),e.setAttribute("aSide",new Pe(h,1)),e.setAttribute("aAcross",new Pe(d,1)),e.setAttribute("aStorm",new Pe(x,2)),e.setAttribute("aPhase",new Pe(g,1)),e.computeBoundingSphere(),i.visible=p>0,i.userData.strikes=p,i.userData.cloudTopArcs=_}return{group:i,setEvents:l,update(c,{reducedMotion:u=!1}={}){t.uTime.value=u?0:c,t.uReducedMotion.value=Number(u)},dispose(){e.dispose(),a.material.dispose(),o.material.dispose(),i.removeFromParent()}}}var pm=`
  attribute vec4 aCloud; attribute vec2 aStorm; attribute vec2 aSeed;
  varying vec4 vCloud; varying vec2 vStorm; varying vec2 vSeed; varying vec2 vPatch;
  varying vec3 vWorldPosition; varying vec3 vWorldNormal;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vCloud = aCloud; vStorm = aStorm; vSeed = aSeed; vPatch = uv * 2.0 - 1.0;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPosition = world.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normalize(position));
    gl_Position = projectionMatrix * viewMatrix * world;
    #include <logdepthbuf_vertex>
  }
`,mm=`
  uniform float uTime; uniform float uReducedMotion; uniform float uOpacity; uniform float uFlashStrength;
  uniform sampler2D uNoise;
  varying vec4 vCloud; varying vec2 vStorm; varying vec2 vSeed; varying vec2 vPatch;
  varying vec3 vWorldPosition; varying vec3 vWorldNormal;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return texture2D(uNoise, (i + f + .5) / 256.0).r;
  }
  float fbm(vec2 p) {
    float value = 0.0, amplitude = .53;
    for (int octave = 0; octave < 5; octave++) {
      value += noise(p) * amplitude;
      p = mat2(.86, -.5, .5, .86) * p * 2.07 + vec2(4.1, 2.7);
      amplitude *= .48;
    }
    return value;
  }
  ${Ch}
  void main() {
    vec2 p = vPatch;
    // The boundary dissolves into vapor well before the curved mesh ends.
    float boundary = 1.0 - smoothstep(.90, .99, max(abs(p.x), abs(p.y)));
    if (boundary < .002) discard;
    vec2 travel = vec2(uTime * .018, uTime * .004);
    vec2 q = p * vec2(3.1, 3.6) + vec2(vSeed.x, vSeed.x * .37) - travel;
    vec2 warp = vec2(fbm(q * .7), fbm(q * .7 + 7.3)) - .48;
    float broad = fbm(q + warp * 2.8);
    float fine = fbm(q * 3.9 + warp * 3.2);
    float filaments = fbm(q * vec2(1.5, 2.6) + warp * 3.0);
    float bend = sin(p.x * 3.0 + vSeed.x) * .22;
    vec2 outline = p + warp * .68 + vec2(0.0, bend);
    float raggedRadius = length(outline * vec2(.87, 1.12)) + (broad - .48) * .70 + (fine - .48) * .16;
    float edge = (1.0 - smoothstep(.28, .89, raggedRadius)) * boundary;
    float density = smoothstep(.35, .72, broad * .56 + fine * .27 + filaments * .17);
    density *= edge * (.42 + vCloud.x * .58);
    float alpha = (1.0 - exp(-density * 2.8)) * uOpacity * (vSeed.y < .5 ? 1.0 : .64);
    if (alpha < .006) discard;
    vec3 normal = normalize(vWorldNormal);
    float sun = dot(normal, normalize(-vWorldPosition));
    float daylight = smoothstep(-.16, .3, sun);
    // Texture relief shades cloud density rather than drawing inflated white balls.
    float relief = clamp(.52 + (fine - .42) * .85 + filaments * .18, .25, .9);
    vec3 lit = mix(vec3(.43, .53, .62), vec3(.88, .94, .98), relief);
    lit *= 1.0 - vCloud.y * .32;
    vec3 color = mix(vec3(.028, .051, .082), lit * (.35 + max(sun, 0.0) * .85), daylight);
    float pulse = vCloud.w * vStorm.y * (uReducedMotion > .5 ? .05 : stormFlash(uTime, vCloud.z, vStorm.x));
    float withinCloud = exp(-dot(p * vec2(1.0, 1.5), p * vec2(1.0, 1.5)) * 3.0);
    color += vec3(.16, .37, .72) * pulse * uFlashStrength * withinCloud;
    gl_FragColor = vec4(color, alpha);
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function gm(){let e=new Uint8Array(65536);for(let n=0;n<256;n++)for(let s=0;s<256;s++){let r=Math.sin(s*127.1+n*311.7)*43758.5453;e[n*256+s]=Math.round((r-Math.floor(r))*255)}let t=new pn(e,256,256,pr);return t.wrapS=t.wrapT=js,t.minFilter=t.magFilter=Tt,t.generateMipmaps=!1,t.needsUpdate=!0,t}var wr=Object.freeze({opacity:.54,sheetsPerLocation:3,segments:20,flashStrength:.52});function xm(){let i=new ze;i.name="Procedural weather clouds";let e=gm(),t=new Je({uniforms:{uTime:{value:0},uReducedMotion:{value:0},uOpacity:{value:wr.opacity},uFlashStrength:{value:wr.flashStrength},uNoise:{value:e}},vertexShader:pm,fragmentShader:mm,transparent:!0,depthWrite:!1,side:bn}),n=new We(new Ke,t);n.renderOrder=3,n.name="Cloud sheet patches",i.add(n);let s=[];function r(a){let o=[],l=[],c=[],u=[],f=[],h=[];s=[];let d=new I,g=wr.segments;for(let m of a.filter(p=>p.puffs>0)){let{event:p,radius:_,altitude:M,coverage:y,darkness:b,thunder:S}=m,w=Tr(p),v=mt(p,200),E=mt(p,2)*Math.PI*2;for(let T=0;T<wr.sheetsPerLocation;T++){let C=E+(mt(p,3+T)-.5)*.65,R=Math.cos(C),D=Math.sin(C),k=_*(T===0?1.9:1.25+mt(p,10+T)*.85),N=_*(T===0?1.2:.6+mt(p,20+T)*.45),O=T===0?0:(mt(p,30+T)-.5)*_*1.45,U=T===0?0:(T===1?-1:1)*_*.36,W=mt(p,40+T)*100,V=o.length/3;for(let B=0;B<=g;B++)for(let G=0;G<=g;G++){let $=G/g,xe=B/g,ee=($*2-1)*k+O,te=(xe*2-1)*N+U;if(ws(w,ee*R-te*D,ee*D+te*R,M+T*7e-4+.001*Math.sin($*Math.PI)*Math.sin(xe*Math.PI),d),o.push(...d.toArray()),l.push($,xe),c.push(y,b,v,Number(S)),u.push(m.flashPeriod||18,m.flashIntensity),f.push(W,T),G<g&&B<g){let q=V+B*(g+1)+G,z=q+1,L=q+g+1,X=L+1;h.push(q,z,X,q,X,L)}}s.push(p)}}let x=new Ke;x.setAttribute("position",new Pe(o,3)),x.setAttribute("uv",new Pe(l,2)),x.setAttribute("aCloud",new Pe(c,4)),x.setAttribute("aStorm",new Pe(u,2)),x.setAttribute("aSeed",new Pe(f,2)),x.setIndex(h),x.computeBoundingSphere(),n.geometry.dispose(),n.geometry=x,n.visible=s.length>0,i.userData.sheets=s.length,i.userData.locations=s.length/wr.sheetsPerLocation}return{group:i,setEvents:r,update(a,{reducedMotion:o=!1}={}){t.uniforms.uTime.value=o?0:a,t.uniforms.uReducedMotion.value=Number(o)},pick(a,o=1/0){if(!i.visible||!n.visible)return null;let l=a.intersectObject(n,!1).find(u=>{if(u.distance>o+.002)return!1;let f=u.uv.x*2-1,h=u.uv.y*2-1;return f*f+h*h<.52}),c=wr.segments**2*2;return l?{event:s[Math.floor(l.faceIndex/c)],distance:l.distance}:null},dispose(){n.geometry.dispose(),t.dispose(),e.dispose(),i.removeFromParent()}}}var Ar=Object.freeze({width:7e-4,opacity:.55,tint:"#9cd9ff",baseAltitude:.003,referenceColumnHeight:.05});function vm(){let i=new ze;i.name="Local weather rain";let e=new _a;e.setAttribute("position",new Pe([-.5,0,0,.5,0,0,-.5,1,0,-.5,1,0,.5,0,0,.5,1,0],3));let t=new Je({uniforms:{uTime:{value:0},uWidth:{value:Ar.width},uColor:{value:new ge(Ar.tint)},uOpacity:{value:Ar.opacity}},vertexShader:`
      attribute vec3 aBase; attribute vec3 aNormal; attribute vec3 aTangent; attribute vec4 aDrop;
      uniform float uTime; uniform float uWidth; varying float vAlpha; varying float vTrail;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main() {
        float phase = fract(uTime * aDrop.z + aDrop.y);
        // The bright head falls first; its trailing end never extends above the cloud base.
        float height = max(0.0, aDrop.x - aDrop.w) * (1.0 - phase);
        vec3 direction = normalize(aNormal + aTangent * .28);
        vec3 local = aBase + aNormal * height + aTangent * (height * .28);
        local += direction * position.y * aDrop.w;
        vec4 world = modelMatrix * vec4(local, 1.0);
        vec3 worldDirection = normalize(mat3(modelMatrix) * direction);
        vec3 side = cross(worldDirection, normalize(cameraPosition - world.xyz));
        side = length(side) > .02 ? normalize(side) : normalize(mat3(modelMatrix) * aTangent);
        world.xyz += side * position.x * uWidth;
        vTrail = position.y; vAlpha = sin(phase * 3.14159);
        gl_Position = projectionMatrix * viewMatrix * world;
        #include <logdepthbuf_vertex>
      }`,fragmentShader:`
      uniform vec3 uColor; uniform float uOpacity; varying float vTrail; varying float vAlpha;
      #include <common>
      #include <logdepthbuf_pars_fragment>
      void main() {
        gl_FragColor = vec4(uColor, (1.0 - vTrail * .7) * vAlpha * uOpacity);
        #include <logdepthbuf_fragment>
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1,side:pt,blending:wt}),n=new We(e,t);n.renderOrder=4,n.frustumCulled=!1,i.add(n);function s(r){e.dispose();let a=[],o=[],l=[],c=[];for(let{event:u,drops:f,altitude:h,rainSpread:d,rainSpeed:g,rainLength:x}of r){let m=Tr(u),p=Math.max(.004,h-Ar.baseAltitude);for(let _=0;_<f;_++){let M=mt(u,700+_)*Math.PI*2,y=Math.sqrt(mt(u,800+_))*d,b=ws(m,Math.cos(M)*y,Math.sin(M)*y,Ar.baseAltitude);a.push(...b.toArray()),o.push(...b.clone().normalize().toArray()),l.push(...m.east.toArray());let S=Math.min(p*.55,x*p/Ar.referenceColumnHeight*(.8+mt(u,1e3+_)*.4));c.push(p,mt(u,900+_),g,S)}}e.setAttribute("aBase",new li(new Float32Array(a),3)),e.setAttribute("aNormal",new li(new Float32Array(o),3)),e.setAttribute("aTangent",new li(new Float32Array(l),3)),e.setAttribute("aDrop",new li(new Float32Array(c),4)),e.instanceCount=c.length/4,i.userData.drops=e.instanceCount,i.visible=e.instanceCount>0}return{group:i,setEvents:s,update(r,{reducedMotion:a=!1}={}){t.uniforms.uTime.value=a?0:r},dispose(){e.dispose(),t.dispose(),i.removeFromParent()}}}function Ac({simulatedStorm:i=!1,colorFor:e}={}){let t=new ze;t.name=i?"Simulated lightning weather":"Observed weather illustrations";let n=wc({color:i?"#f3e7a1":"#ffffff",colorFor:e,segments:6,size:()=>.7});n.group.visible=!1;let s=xm(),r=vm(),a=fm(),o=[n,s,r,a];return t.add(...o.map(l=>l.group)),{group:t,setEvents(l){let c=dm(l,i);n.setEvents(c.map(u=>u.event));for(let u of[s,r,a])u.setEvents(c);t.userData.locations=c.length,t.userData.thunderstorms=c.filter(u=>u.thunder).length,t.userData.weatherEffects=c.map(({event:u,rainRate:f,rainIntensity:h,puffs:d,drops:g,flashPeriod:x,flashIntensity:m})=>({id:u.id,rainRate:f,rainIntensity:h,puffs:d,drops:g,flashPeriod:x,flashIntensity:m}))},update(l,c){for(let u of o)u.update(l,c)},diagnostics:()=>({effects:(t.userData.weatherEffects||[]).map(l=>({...l}))}),pick(l,c=1/0){return t.visible&&[n.pick(l,c),s.pick(l,c)].filter(Boolean).sort((u,f)=>u.distance-f.distance)[0]||null},dispose(){for(let l of o)l.dispose();t.removeFromParent()}}}function FM(i){let e=i.weather?.temperature;return Number.isFinite(e)?new ge("#64b8ff").lerp(new ge("#ffd08b"),Se.clamp((e+15)/55,0,1)):"#a6bacb"}var ym={id:"weather",label:"\u5929\u6C14",color:"#83bded",enabled:!0,ttl:15*6e4,load:async i=>(await lm(i)).map(e=>{let t=ja(e);return{...e,description:`${e.description} \u4E91\u56E2\u8F6E\u5ED3\u3001\u96E8\u4E1D\u4E0E\u96F7\u66B4\u7535\u5F27\u4E3A\u4F9D\u636E\u91C7\u6837\u5929\u6C14\u751F\u6210\u7684\u793A\u610F\u6548\u679C\uFF0C\u4E0D\u662F\u536B\u661F\u4E91\u56FE\u6216\u9010\u6B21\u95EA\u7535\u89C2\u6D4B\u3002`,metrics:[...e.metrics,...t.rainRate===null?[]:[{label:"\u65F6\u6BB5\u5E73\u5747\u96E8\u7387",value:`${t.rainRate.toFixed(2)} mm/h`}],...t.thunder?[{label:"\u96F7\u66B4\u5149\u6548\u5468\u671F\uFF08\u793A\u610F\uFF09",value:`\u7EA6 ${t.flashPeriod.toFixed(1)} \u79D2\uFF0C\u4E0D\u4EE3\u8868\u5B9E\u51B5\u96F7\u51FB\u9891\u7387`}]:[]]}}),createView:()=>Ac({colorFor:FM})};function Za(i,e){let t=Ft(i),n={"km/h":1,kmh:1,kph:1,"m/s":3.6,ms:3.6,kt:1.852,kts:1.852,knot:1.852,knots:1.852,mph:1.609344}[bt(e).toLowerCase().replace(/\s/g,"")];if(t===null||t<0||!n)return null;let s=t*n;return s<=500?s:null}function Rc(i,e,t,n=null){let s=Za(i,e);return{windSpeedKmh:s,windBasis:s===null?"unavailable":t,validTime:s===null||t!=="observation"?null:n}}var bm={volcanoes:{layer:"volcano",label:"\u706B\u5C71"},wildfires:{layer:"wildfire",label:"\u5C71\u706B"},floods:{layer:"flood",label:"\u6D2A\u6C34"},severeStorms:{layer:"typhoon",label:"\u98CE\u66B4"}},NM={volcano:"volcanoes",wildfire:"wildfires",flood:"floods",typhoon:"severeStorms"},UM=100,OM="NASA EONET \u6BCF\u7C7B\u6700\u591A 100 \u9879\u516C\u5F00\u672A\u5173\u95ED\u4E8B\u4EF6\uFF1B\u4E8B\u4EF6\u65F6\u95F4\u4E3A\u6700\u8FD1\u4E00\u6B21\u6765\u6E90\u8BB0\u5F55\uFF0C\u672A\u5173\u95ED\u4E0D\u4EE3\u8868\u521A\u521A\u53D1\u751F\u3002";function Mm(i){let e=NM[i]||i;if(!bm[e])throw new Error(`\u4E0D\u652F\u6301\u7684 EONET \u7C7B\u522B\uFF1A${i}`);return e}function BM(i){return`https://eonet.gsfc.nasa.gov/api/v3/events?status=open&category=${Mm(i)}&limit=${UM}`}function _m(i,e){let t=Mm(e),n=bm[t];if(!Array.isArray(i?.events))throw new Error("NASA EONET \u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u6570\u636E\u683C\u5F0F");return tm(i.events.flatMap(s=>{let r=bt(s?.id);if(!r||s.closed||!Array.isArray(s.categories)||!s.categories.some(g=>g?.id===t)||!Array.isArray(s.geometry))return[];let a=s.geometry.flatMap(g=>{let x=sm(g),m=Qn(g?.date);return x&&m?[{point:x,time:m,geometry:g}]:[]}).sort((g,x)=>g.time.localeCompare(x.time)),o=a[a.length-1];if(!o)return[];let l=Array.isArray(s.sources)?s.sources.map(g=>Bn(g?.url)):[],c=a.filter(g=>g.geometry.type==="Point").map(g=>Jn(g.geometry.coordinates)),u=o.geometry.type==="Polygon"?"\u6807\u8BB0\u4F4D\u7F6E\u4E3A\u6765\u6E90\u8303\u56F4\u7684\u793A\u610F\u4E2D\u5FC3\u3002":"",f=l.find(Boolean)||Bn(s.link,"https://eonet.gsfc.nasa.gov/"),h=Rc(o.geometry.magnitudeValue,o.geometry.magnitudeUnit,"observation",o.time),d=a.filter(g=>g.geometry.type==="Point").map(g=>({lon:g.point[0],lat:g.point[1],time:g.time,validTime:g.time,windSpeedKmh:Za(g.geometry.magnitudeValue,g.geometry.magnitudeUnit),source:"NASA EONET",sourceUrl:f}));return[{id:`eonet:${r}`,layer:n.layer,title:bt(s.title,`${n.label}\u4E8B\u4EF6`),lon:o.point[0],lat:o.point[1],time:o.time,source:"NASA EONET",sourceUrl:f,severity:"unknown",description:`${bt(s.description)}${s.description?" ":""}${u}${OM}`,metrics:[{label:"\u4E8B\u4EF6\u7C7B\u522B",value:n.label},{label:"\u6765\u6E90\u72B6\u6001",value:"\u672A\u5173\u95ED"},n.layer==="typhoon"?wn("\u6700\u8FD1\u8BB0\u5F55\u98CE\u901F",h.windSpeedKmh,"km/h"):wn("\u6765\u6E90\u8BB0\u5F55\u89C4\u6A21",o.geometry.magnitudeValue,bt(o.geometry.magnitudeUnit))].filter(Boolean),...n.layer==="typhoon"?{cyclone:h,trackData:{history:d,forecast:[],source:"NASA EONET",sourceUrl:f,issuedAt:null,status:d.length?"history-only":"unavailable",message:"NASA EONET \u63D0\u4F9B\u5386\u53F2\u4F4D\u7F6E\u8BB0\u5F55\uFF0C\u672A\u63D0\u4F9B\u5B98\u65B9\u9884\u6D4B\u8DEF\u5F84\u3002"}}:{},...n.layer==="typhoon"&&c.length>1?{track:c}:{}}]}))}async function Sm(i,e={}){return _m(await Li(BM(i),{ttl:900*1e3,...e,validate:t=>_m(t,i)}),i)}var wm={TC:"typhoon",FL:"flood",VO:"volcano",WF:"wildfire",EQ:"earthquake"},zM={red:"\u7EA2\u8272",orange:"\u6A59\u8272",yellow:"\u9EC4\u8272",green:"\u7EFF\u8272"},kM="GDACS \u5F53\u524D\u516C\u5F00\u707E\u5BB3\u5217\u8868\uFF1B\u62A5\u544A\u65F6\u95F4\u4E0E\u4E8B\u4EF6\u65E5\u671F\u6765\u81EA\u539F\u59CB\u6765\u6E90\uFF0C\u9884\u8B66\u7B49\u7EA7\u53EF\u80FD\u968F\u62A5\u544A\u66F4\u65B0\u3002";function Am(i){let e=String(i).toUpperCase();if(!wm[e])throw new Error(`\u4E0D\u652F\u6301\u7684 GDACS \u7C7B\u578B\uFF1A${i}`);return e}function HM(i="TC"){return`https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtype=${Am(i)}`}function Em(i,e){let t=Ft(i?.eventid);return bt(i?.eventtype).toUpperCase()!==e||!Number.isSafeInteger(t)||t<=0?null:`gdacs:${e}:${i.eventid}`}function Tm(i,e="TC"){let t=Am(e),n=nm(i,"GDACS"),s=new Map;for(let r of n){let a=r?.properties,o=Em(a,t);if(!o||r?.geometry?.type!=="Point"||a.Class&&a.Class!=="Point_Centroid")continue;let l=Jn(r.geometry.coordinates),c=Qn(a.todate)||Qn(a.datemodified);if(!l||!c)continue;let u=s.get(o),f=Qn(a.datemodified)||c;(!u||f>u.revision||f===u.revision&&Ft(a.episodeid)>Ft(u.props.episodeid))&&s.set(o,{id:o,props:a,point:l,time:c,revision:f,paths:[],pathKeys:new Set})}for(let r of n){let a=r?.properties,o=s.get(Em(a,t));if(!(!o||a.episodeid!=null&&o.props.episodeid!=null&&String(a.episodeid)!==String(o.props.episodeid)))for(let l of rm(r.geometry)){let c=JSON.stringify(l);o.pathKeys.has(c)||(o.paths.push(l),o.pathKeys.add(c))}}return[...s.values()].map(({id:r,props:a,point:o,time:l,paths:c})=>{let u=bt(a.episodealertlevel,bt(a.alertlevel)),f=g=>zM[bt(g).toLowerCase()]||bt(g,"\u672A\u63D0\u4F9B"),h=`https://www.gdacs.org/report.aspx?eventtype=${t}&eventid=${a.eventid}`,d=a.severitydata;return{id:r,layer:wm[t],title:bt(a.name,bt(a.description,bt(a.eventname,"\u707E\u5BB3\u9884\u8B66"))),lon:o[0],lat:o[1],time:l,source:"GDACS",sourceUrl:Bn(a.url?.report,h),severity:im(u),description:`${bt(a.description)}${a.description?"\u3002":""}${kM}`,metrics:[{label:"\u5F53\u524D\u62A5\u544A\u9884\u8B66",value:f(u)},{label:"\u4E8B\u4EF6\u603B\u4F53\u9884\u8B66",value:f(a.alertlevel)},a.country?{label:"\u5F71\u54CD\u56FD\u5BB6 / \u5730\u533A",value:bt(a.country)}:null,a.source?{label:"\u539F\u59CB\u6765\u6E90",value:bt(a.source)}:null,t==="TC"?wn("\u4E8B\u4EF6\u6700\u5927\u98CE\u901F",d?.severity,bt(d?.severityunit,"km/h")):null].filter(Boolean),...t==="TC"?{cyclone:Rc(d?.severity,d?.severityunit,"event-maximum"),gdacs:{eventId:Ft(a.eventid),episodeId:Ft(a.episodeid),eventType:"TC",source:bt(a.source),geometryUrl:Bn(a.url?.geometry),detailsUrl:`https://www.gdacs.org/gdacsapi/api/events/getepisodedata?eventtype=TC&eventid=${a.eventid}&episodeid=${a.episodeid}`}}:{},...c.length?{paths:c}:{}}}).sort((r,a)=>a.time.localeCompare(r.time))}async function Rm(i="TC",e={}){return Tm(await Li(HM(i),{ttl:900*1e3,...e,validate:t=>Tm(t,i)}),i)}async function Cm(i){let e=await Promise.allSettled(i.map(([,s])=>s())),t=[],n=[];if(e.forEach((s,r)=>{s.status==="fulfilled"?t.push(...s.value):n.push(`${i[r][0]}\uFF1A${s.reason?.message||"\u6682\u4E0D\u53EF\u7528"}`)}),e.every(s=>s.status==="rejected"))throw new Error(n.join("\uFF1B"));return{events:t,warning:n.join("\uFF1B")}}function Ph(i,e=20,t=80,n=0){let s=[],r=[],a=[],o=[],l=Se.clamp(i/.145,.45,1.25);for(let u=0;u<2;u++){let f=s.length/3;for(let h=0;h<=e;h++){let d=h/e,g=i*d,x=Math.exp(-(((d-.16)/.08)**2));for(let m=0;m<=t;m++){let p=m/t*Math.PI*2,_=x*(.0021+u*6e-4)*(.76+Math.sin(p*2+n)*.18)+Math.sin(p*3+d*8+n)*3e-4*d,M=1.01+(u*.0015+_)*l;if(s.push(Math.sin(g)*Math.cos(p)*M,Math.sin(g)*Math.sin(p)*M,Math.cos(g)*M),r.push(.5+Math.cos(p)*d*.5,.5+Math.sin(p)*d*.5),a.push(u),h<e&&m<t){let y=f+h*(t+1)+m,b=y+t+1;o.push(y,b,b+1,y,b+1,y+1)}}}}let c=new Ke;return c.setAttribute("position",new Pe(s,3)),c.setAttribute("uv",new Pe(r,2)),c.setAttribute("aLayer",new Pe(a,1)),c.setIndex(o),c.computeBoundingSphere(),c}function Pm(i){let e=2166136261;for(let t of String(i))e=Math.imul(e^t.charCodeAt(0),16777619);return(e>>>0)/4294967296}function Im(i,e,t=120){let n=[],s=[],r=Math.round(e*4294967295)>>>0,a=()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296);for(let l=0;l<t;l++){let c=a(),u=(a()-.5)*.34,f=l%3,h=a();s.push(c,u,f,h),n.push(0,0,1.014)}let o=new Ke;return o.setAttribute("position",new Pe(n,3)),o.setAttribute("aOrbit",new Pe(s,4)),o.boundingSphere=new Qt(new I(0,0,1.014),i+.025),o}var Dm=`
  attribute float aLayer;
  varying vec2 vPatch;
  varying float vLayer;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vPatch = uv * 2.0 - 1.0;
    vLayer = aLayer;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPosition = world.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normalize(position));
    gl_Position = projectionMatrix * viewMatrix * world;
    #include <logdepthbuf_vertex>
  }
`,Lm=`
  uniform float uTime;
  uniform float uSpin;
  uniform float uPhase;
  varying vec2 vPatch;
  varying float vLayer;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x),
      mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float value = 0.0, weight = .53;
    mat2 turn = mat2(.8, -.6, .6, .8);
    for (int octave = 0; octave < 4; octave++) {
      value += noise(p) * weight;
      p = turn * p * 2.09 + vec2(3.7, 1.9);
      weight *= .48;
    }
    return value;
  }
  vec2 rotate(vec2 p, float a) {
    float c = cos(a), s = sin(a);
    return mat2(c, s, -s, c) * p;
  }
  float band(float angle, float center, float width) {
    float distance = atan(sin(angle - center), cos(angle - center));
    return exp(-distance * distance / (width * width));
  }
  void main() {
    float radius = length(vPatch);
    if (radius > .998) discard;
    // Slow common rotation carries a different asymmetric structure for every real storm.
    vec2 p = rotate(vPatch, -uSpin * uTime * .045 - uPhase);
    p.x *= 1.0 + .12 * sin(uPhase * 2.3);
    p.y *= 1.0 - .07 * sin(uPhase * 2.3);
    float r = length(p), angle = atan(p.y, p.x);
    vec2 drift = vec2(uTime * .006, -uTime * .004);
    vec2 warp = vec2(fbm(p * 3.3 + uPhase + drift), fbm(p * 3.1 + 17.6 - drift)) - .48;
    vec2 flowing = rotate(p + warp * .06, uSpin * (1.0 - r) * .70);
    float broad = fbm(flowing * 5.0 + uPhase * 2.7);
    float detail = fbm(flowing * vec2(18.0, 16.0) + uPhase * 7.0 + vLayer * .08 + drift);
    float fine = noise(flowing * 70.0 + uPhase + drift * 1.7);
    float raggedR = r + warp.x * .13 + sin(angle * 3.0 + uPhase) * .028;
    float winding = r * (4.7 + .48 * sin(uPhase)) + .52 * log(.16 + r);
    float spiral = uSpin * angle + winding + warp.y * .64;
    float width = .29 + (1.0 - r) * .24 + .085 * sin(r * 9.0 + uPhase);
    float primary = band(spiral, 0.0, width) * (1.0 - smoothstep(.74, 1.02, raggedR));
    float secondary = band(spiral, 2.24 + .38 * sin(uPhase * 1.7), .20 + (1.0 - r) * .25)
      * (1.0 - smoothstep(.53, .88 + .05 * cos(uPhase), raggedR));
    float filament = band(spiral, 4.55 + .3 * cos(uPhase), .11 + (1.0 - r) * .13)
      * (1.0 - smoothstep(.43, .73, raggedR));
    // An irregular central overcast joins the spiral bands; no separate opaque torus.
    float core = (1.0 - smoothstep(.16, .46 + broad * .09, raggedR))
      * (.48 + broad * .53) * (.80 + .20 * sin(angle + r * 7.0 + uPhase));
    float structure = core + primary * .95 + secondary * .70 + filament * .22;
    float breakup = smoothstep(.18, .72, detail + structure * .19);
    breakup = mix(.65 + broad * .20, breakup, smoothstep(.17, .43, r));
    float wisps = smoothstep(.43, .72, detail) * (1.0 - smoothstep(.34, .80, raggedR)) * .10;
    vec2 eyeP = p - vec2(.012 * sin(uPhase), .010 * cos(uPhase * 1.3));
    float eyeR = length(eyeP * vec2(1.12, .9));
    float eye = smoothstep(.060 + broad * .016, .102 + broad * .012, eyeR);
    float outer = 1.0 - smoothstep(.87, .99, radius);
    float density = max(0.0, structure * (.24 + breakup * .82) + wisps - (1.0 - breakup) * .10);
    float alpha = min(.76, density * (vLayer < .5 ? .60 : .27)) * eye * outer;
    if (alpha < .012) discard;
    float daylight = max(dot(normalize(vWorldNormal), normalize(-vWorldPosition)), 0.0);
    float textureLight = clamp(.31 + detail * .88 + fine * .12, 0.0, 1.0);
    vec3 cloud = mix(vec3(.26, .40, .49), vec3(.91, .96, 1.0), textureLight);
    cloud *= .30 + daylight * .73;
    // Sparse internal illumination suggests convective activity without a glowing outline.
    float period = 7.0 + 2.7 * fract(uPhase * .71);
    float cycle = mod(uTime + uPhase * 3.1, period);
    float pulse = exp(-pow((cycle - .09) / .026, 2.0)) + .45 * exp(-pow((cycle - .23) / .045, 2.0));
    vec2 flashP = p - vec2(.24 * cos(uPhase * 2.0), .22 * sin(uPhase * 2.0));
    float flash = exp(-dot(flashP, flashP) * 190.0) * pulse * step(.001, uTime) * smoothstep(.3, .8, density);
    cloud += vec3(.12, .28, .38) * flash;
    gl_FragColor = vec4(cloud, alpha);
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Fm=`
  attribute vec4 aOrbit;
  uniform float uTime;
  uniform float uSpin;
  uniform float uPhase;
  uniform float uRadius;
  uniform float uHeightScale;
  uniform float uViewport;
  varying float vOpacity;
  varying vec2 vDirection;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  vec3 surface(float radius, float angle) {
    float arc = radius * uRadius;
    float altitude = 1.012 + (.0015 + exp(-pow((radius - .16) / .08, 2.0)) * .002) * uHeightScale;
    return vec3(sin(arc) * cos(angle), sin(arc) * sin(angle), cos(arc)) * altitude;
  }
  void main() {
    float r = .13 + fract(aOrbit.x - uTime * (.005 + aOrbit.w * .003)) * .81;
    float arm = aOrbit.z < .5 ? 0.0 : aOrbit.z < 1.5 ? 2.24 + .38 * sin(uPhase * 1.7) : 4.55 + .3 * cos(uPhase);
    float winding = r * (4.7 + .48 * sin(uPhase)) + .52 * log(.16 + r);
    float angle = uPhase + uSpin * (arm - winding + uTime * .045) + aOrbit.y;
    vec4 mv = modelViewMatrix * vec4(surface(r, angle), 1.0);
    vec4 next = projectionMatrix * modelViewMatrix * vec4(surface(r, angle + uSpin * .015), 1.0);
    gl_Position = projectionMatrix * mv;
    vDirection = normalize(next.xy / next.w - gl_Position.xy / gl_Position.w + vec2(.0000001));
    gl_PointSize = clamp((.0011 + aOrbit.w * .0006) * uViewport / max(.06, -mv.z), 1.0, 5.0);
    float reach = aOrbit.z < .5 ? .89 : aOrbit.z < 1.5 ? .75 : .58;
    vOpacity = smoothstep(.13, .24, r) * (1.0 - smoothstep(reach - .20, reach, r)) * (.075 + aOrbit.w * .075);
    #include <logdepthbuf_vertex>
  }
`,Nm=`
  varying float vOpacity;
  varying vec2 vDirection;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  void main() {
    vec2 p = gl_PointCoord - .5;
    vec2 along = vec2(dot(p, vDirection), dot(p, vec2(-vDirection.y, vDirection.x)));
    float shape = exp(-along.x * along.x * 10.0 - along.y * along.y * 85.0);
    float alpha = shape * vOpacity;
    if (alpha < .013) discard;
    gl_FragColor = vec4(vec3(.57, .79, .91), alpha);
    #include <logdepthbuf_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;var Cc=Object.freeze({minimum:.055,maximum:.18,unavailable:.075,maximumWindKmh:280});function Pc(i){let e=i?.cyclone?.windSpeedKmh,t=Number.isFinite(e)&&e>=0,n=t?Se.clamp(e/Cc.maximumWindKmh,0,1):null;return{radius:t?Se.lerp(Cc.minimum,Cc.maximum,n):Cc.unavailable,rotationRate:t?.7+n*.7:.8,windSpeedKmh:t?e:null,windBasis:t&&i.cyclone.windBasis||"unavailable"}}var Ic=Object.freeze({history:"#8ef0d0",forecast:"#ffc08a",altitude:1.023}),Rr=i=>Number.isFinite(i?.lon)&&Number.isFinite(i?.lat)&&Math.abs(i.lon)<=180&&Math.abs(i.lat)<=90;function VM(i,e=Ic.altitude){let t=[];for(let s=1;s<i.length;s++){if(!Rr(i[s-1])||!Rr(i[s]))continue;let r=fn(i[s-1].lat,i[s-1].lon),a=fn(i[s].lat,i[s].lon);if(r.dot(a)<-.98)continue;let o=Math.max(1,Math.ceil(r.angleTo(a)/.008)),l=r.clone().multiplyScalar(e);for(let c=1;c<=o;c++){let u=r.clone().lerp(a,c/o).normalize().multiplyScalar(e);t.push(...l.toArray(),...u.toArray()),l=u}}let n=new Ke;return n.setAttribute("position",new Pe(t,3)),n.computeBoundingSphere(),n}function Um(){let i=new ze;i.name="Selected cyclone history and forecast",i.visible=!1;let e=new Pt(1,8,6),t=new on({color:"#ffffff",transparent:!0,depthWrite:!1,toneMapped:!1}),n=new ln({color:Ic.history,transparent:!0,opacity:.95,depthWrite:!1,toneMapped:!1}),s=new xs({color:Ic.forecast,transparent:!0,opacity:.98,dashSize:.01,gapSize:.006,depthWrite:!1,toneMapped:!1}),r=[],a=[],o=new ot,l=new _t,c=new I,u=null,f=1;function h(){for(let y of r)y.geometry.dispose(),i.remove(y);for(let y of a)y.dispose(),i.remove(y);r.length=a.length=0}function d(y){let b=y.userData.trackPoints;b.forEach((S,w)=>{let v=y.userData.trackKind==="history"&&w===b.length-1;o.compose(fn(S.lat,S.lon,1.027),l,c.setScalar(.0055*(v?1.35:1)*Math.max(.12,f))),y.setMatrixAt(w,o)}),y.instanceMatrix.needsUpdate=!0,y.computeBoundingSphere()}function g(y,b){let S=y.filter(Rr);if(!S.length)return;let w=new Wi(e,t,S.length);w.name=b==="history"?"Observed track positions":"Forecast track positions",w.userData.trackPoints=S,w.userData.trackKind=b,w.renderOrder=12;let v=new ge(Ic[b]);S.forEach((E,T)=>w.setColorAt(T,v.clone().multiplyScalar(b==="history"?.6+T/Math.max(1,S.length-1)*.4:1))),d(w),a.push(w),i.add(w)}function x(y,b){let S=VM(y);if(!S.attributes.position.count){S.dispose();return}let w=new fs(S,b==="history"?n:s);w.name=b==="history"?"History \u2014 solid":"Forecast \u2014 dashed",w.userData.trackKind=b,w.renderOrder=11,b==="forecast"&&w.computeLineDistances(),r.push(w),i.add(w)}function m(y,b){h(),u=y||null;let S=Array.isArray(b?.history)?b.history:[],w=Array.isArray(b?.forecast)?b.forecast:[];if(i.userData={eventId:y?.id||null,source:b?.source||null,sourceUrl:b?.sourceUrl||null,issuedAt:b?.issuedAt||null,status:b?.status||"unavailable",historyCount:S.filter(Rr).length,forecastCount:w.filter(Rr).length},i.visible=!!(y&&(i.userData.historyCount||i.userData.forecastCount)),!y)return;x(S,"history");let v=S.filter(Rr).at(-1);x(v&&w.length?[v,...w]:w,"forecast"),g(S,"history"),g(w,"forecast")}function p(y,{scaleFactor:b=1}={}){let S=Se.clamp(b,.06,1);if(!(Math.abs(S-f)<.002)){f=S,s.dashSize=.01*Math.max(.12,f),s.gapSize=.006*Math.max(.12,f);for(let w of a)d(w)}}function _(y,b=1/0){if(!i.visible||!u)return null;let S=y.intersectObjects(a,!1).find(E=>E.distance<=b+.002);if(S)return{event:u,distance:S.distance,trackKind:S.object.userData.trackKind,trackPoint:S.object.userData.trackPoints[S.instanceId]};let w=y.params.Line.threshold,v;try{y.params.Line.threshold=.004*Math.max(.15,f),v=y.intersectObjects(r,!1).find(E=>E.distance<=b+.002)}finally{y.params.Line.threshold=w}return v?{event:u,distance:v.distance,trackKind:v.object.userData.trackKind}:null}function M(){h(),e.dispose(),t.dispose(),n.dispose(),s.dispose(),i.removeFromParent()}return{group:i,setData:m,update:p,pick:_,dispose:M}}var xi=(i,e,t)=>Se.smoothstep(t,i,e),Dh=i=>i-Math.floor(i),Dc=(i,e)=>Dh(Math.sin(i*127.1+e*311.7)*43758.5453);function GM(i,e){let t=Math.floor(i),n=Math.floor(e),s=Dh(i),r=Dh(e),a=s*s*(3-2*s),o=r*r*(3-2*r);return Se.lerp(Se.lerp(Dc(t,n),Dc(t+1,n),a),Se.lerp(Dc(t,n+1),Dc(t+1,n+1),a),o)}function Lc(i,e){let t=0,n=.53;for(let s=0;s<4;s++)t+=GM(i,e)*n,[i,e]=[(.8*i+.6*e)*2.09+3.7,(-.6*i+.8*e)*2.09+1.9],n*=.48;return t}function Om(i,e,t){let n=Math.cos(t),s=Math.sin(t);return[i*n-e*s,i*s+e*n]}function Ih(i,e,t){let n=Math.atan2(Math.sin(i-e),Math.cos(i-e));return Math.exp(-n*n/(t*t))}function Lh(i,{spin:e,phase:t,time:n=0}){let s=i.x*2-1,r=i.y*2-1,a=Math.hypot(s,r);if(a>.998)return 0;let[o,l]=Om(s,r,-e*n*.045-t);o*=1+.12*Math.sin(t*2.3),l*=1-.07*Math.sin(t*2.3);let c=Math.hypot(o,l),u=Math.atan2(l,o),f=n*.006,h=-n*.004,d=Lc(o*3.3+t+f,l*3.3+t+h)-.48,g=Lc(o*3.1+17.6-f,l*3.1+17.6-h)-.48,[x,m]=Om(o+d*.06,l+g*.06,e*(1-c)*.7),p=Lc(x*5+t*2.7,m*5+t*2.7),_=Lc(x*18+t*7+f,m*16+t*7+h),M=c+d*.13+Math.sin(u*3+t)*.028,y=e*u+c*(4.7+.48*Math.sin(t))+.52*Math.log(.16+c)+g*.64,b=Ih(y,0,.29+(1-c)*.24+.085*Math.sin(c*9+t))*(1-xi(.74,1.02,M)),S=Ih(y,2.24+.38*Math.sin(t*1.7),.2+(1-c)*.25)*(1-xi(.53,.88+.05*Math.cos(t),M)),w=Ih(y,4.55+.3*Math.cos(t),.11+(1-c)*.13)*(1-xi(.43,.73,M)),E=(1-xi(.16,.46+p*.09,M))*(.48+p*.53)*(.8+.2*Math.sin(u+c*7+t))+b*.95+S*.7+w*.22,T=Se.lerp(.65+p*.2,xi(.18,.72,_+E*.19),xi(.17,.43,c)),C=xi(.43,.72,_)*(1-xi(.34,.8,M))*.1,R=Math.hypot((o-.012*Math.sin(t))*1.12,(l-.01*Math.cos(t*1.3))*.9),D=xi(.06+p*.016,.102+p*.012,R),k=Math.max(0,E*(.24+T*.82)+C-(1-T)*.1);return Math.min(.76,k*.6)*D*(1-xi(.87,.99,a))}var WM=i=>i<0?-1:1;function Bm(){let i=new ze;i.name="Cyclone cloud systems";let e=wc({color:"#a9dfe9",size:()=>.32});e.group.name="Cyclone event anchors",e.group.visible=!1;let t=Um();i.add(e.group,t.group);let n=new I(0,0,1),s=[],r=0,a=null,o=null;function l(){for(let x of s){for(let m of[x.cloud,x.particles])m.geometry.dispose(),m.material.dispose();x.frame.removeFromParent()}s=[]}function c(x){l();let m=x.filter(_=>Number.isFinite(_.lat)&&Number.isFinite(_.lon)&&Math.abs(_.lat)<=90&&Math.abs(_.lon)<=180);e.setEvents(m);let p=globalThis.innerWidth<=600;for(let _ of m){let{radius:M,rotationRate:y,windSpeedKmh:b,windBasis:S}=Pc(_),w=Pm(_.id),v=w*Math.PI*2,E=WM(_.lat),T={uTime:{value:r*y},uSpin:{value:E},uPhase:{value:v}},C=new We(Ph(M,p?16:20,p?64:80,v),new Je({uniforms:T,vertexShader:Dm,fragmentShader:Lm,transparent:!0,depthWrite:!1,depthTest:!0}));C.name="Thin asymmetric spiral cloud sheets";let R=new ms(Im(M,w,p?72:120),new Je({uniforms:{...T,uRadius:{value:M},uHeightScale:{value:Se.clamp(M/.145,.45,1.25)},uViewport:{value:(globalThis.innerHeight||900)*1.5}},vertexShader:Fm,fragmentShader:Nm,transparent:!0,depthWrite:!1,depthTest:!0,blending:wt}));R.name="Cyclonic inflow tracers";let D=new ze;D.name=`Cyclone: ${_.title||_.id}`,D.userData.cyclone={radius:M,windSpeedKmh:b,windBasis:S,rotationRate:y},D.quaternion.setFromUnitVectors(n,fn(_.lat,_.lon)),D.add(C,R),i.add(D),s.push({event:_,frame:D,cloud:C,particles:R,spin:E,phase:v,rotationRate:y,radius:M,compact:p})}if(a){let _=m.find(M=>M.id===a.id);_&&(a={..._,cyclone:a.cyclone||_.cyclone}),u(a),t.setData(a,o)}}function u(x){let m=s.find(_=>_.event.id===x?.id);if(!m)return;let p=Pc(x);if(Math.abs(m.radius-p.radius)>1e-6){let _=m.cloud.geometry;m.cloud.geometry=Ph(p.radius,m.compact?16:20,m.compact?64:80,m.phase),_.dispose(),m.particles.material.uniforms.uRadius.value=p.radius,m.particles.material.uniforms.uHeightScale.value=Se.clamp(p.radius/.145,.45,1.25),m.particles.geometry.boundingSphere.radius=p.radius+.025}m.radius=p.radius,m.rotationRate=p.rotationRate,m.event=x,m.frame.userData.cyclone=p,m.cloud.material.uniforms.uTime.value=r*p.rotationRate}function f(x,m=x?.trackData){a=x||null,o=m||null,u(a),t.setData(a,o)}function h(x,{reducedMotion:m=!1,scaleFactor:p=1}={}){r=m?0:x,e.update(x,{reducedMotion:m,scaleFactor:p}),t.update(x,{scaleFactor:p});for(let _ of s)_.cloud.material.uniforms.uTime.value=r*_.rotationRate,_.particles.material.uniforms.uViewport.value=(globalThis.innerHeight||900)*Math.min(globalThis.devicePixelRatio||1,1.8)*1.5}function d(x,m=1/0){if(!i.visible)return null;let p=[],_=t.pick(x,m);_&&p.push(_);let M=e.pick(x,m);M&&p.push(M);for(let y of s){let b=x.intersectObject(y.cloud,!1).find(S=>S.distance<=m+.002&&Lh(S.uv,{spin:y.spin,phase:y.phase,time:r*y.rotationRate})>.035);b&&p.push({event:y.event,distance:b.distance})}return p.sort((y,b)=>y.distance-b.distance)[0]||null}function g(){l(),e.dispose(),t.dispose(),i.removeFromParent()}return{group:i,setEvents:c,setSelected:f,update:h,pick:d,dispose:g,diagnostics:()=>({storms:s.map(x=>({id:x.event.id,...x.frame.userData.cyclone})),track:{...t.group.userData,visible:t.group.visible}})}}function zm(i){return i.toLowerCase().replace(/tropical|cyclone|hurricane|typhoon|storm|\d{4}|[^a-z]/g,"")}async function XM(i){let e=await Cm([["GDACS",()=>Rm("TC",i)],["NASA EONET",()=>Sm("severeStorms",i)]]),t=e.events.filter(n=>n.source==="GDACS");return e.events=e.events.filter(n=>n.source==="GDACS"||!t.some(s=>{let r=zm(n.title),a=zm(s.title);return r.length>2&&a.length>2&&(r.includes(a)||a.includes(r))})),e.events=e.events.map(n=>({...n,description:`${n.description||""} \u6C14\u65CB\u4E91\u5E26\u3001\u98CE\u773C\u4E0E\u52A8\u753B\u6309\u4E8B\u4EF6\u4F4D\u7F6E\u751F\u6210\uFF0C\u7528\u4E8E\u793A\u610F\uFF1B\u4E0D\u8868\u793A\u536B\u661F\u5B9E\u51B5\u4E91\u56FE\u6216\u5B98\u65B9\u98CE\u5708\u8303\u56F4\u3002`})),e}var km={id:"typhoon",label:"\u53F0\u98CE",color:"#c2a5fb",enabled:!0,ttl:15*6e4,load:XM,createView:Bm};async function qM(){let i=[.6,4,16,1.5,8,32],e=[900,3600,1800,3600,900,1800],t=["\u5C0F\u96E8","\u4E2D\u96E8","\u5927\u96E8","\u5C0F\u96E8","\u4E2D\u96E8","\u5927\u96E8"];return[[-3,24],[-4,-61],[3,108],[24,-83],[9,13],[15,100]].map(([n,s],r)=>{let a=e[r],o=i[r]*a/3600,l={id:`simulated-lightning-${r}`,layer:"lightning",title:`\u6A21\u62DF\u95EA\u7535 \xB7 ${t[r]}\u793A\u610F`,lat:n,lon:s,time:null,source:"\u6A21\u62DF\u6570\u636E",sourceUrl:null,severity:"unknown",simulated:!0,weather:{rain:o,precipitation:o,interval:a,code:95,cloudCover:100},description:"\u4E91\u56E2\u3001\u964D\u96E8\u3001\u4E91\u5185\u8F89\u5149\u4E0E\u5206\u53C9\u95EA\u7535\u4E3A\u6A21\u62DF\u5929\u6C14\u6548\u679C\uFF0C\u4E0D\u4EE3\u8868\u6B64\u5904\u6B63\u5728\u53D1\u751F\u96F7\u66B4\u3002\u5B9E\u65F6\u6570\u636E\u63A5\u53E3\u5DF2\u9884\u7559\u3002"},c=ja(l,!0);return l.metrics=[{label:"\u6570\u636E\u7C7B\u578B",value:"\u6A21\u62DF \xB7 \u975E\u5B9E\u51B5"},{label:"\u6A21\u62DF\u964D\u96E8\u5F3A\u5EA6",value:`${t[r]}\u793A\u610F`},{label:"\u6A21\u62DF\u96E8\u7387",value:`${c.rainRate.toFixed(1)} mm/h`},{label:"\u6A21\u62DF\u7D2F\u8BA1\u96E8\u91CF",value:`${o.toFixed(2)} mm / ${a/60} \u5206\u949F`},{label:"\u95EA\u73B0\u793A\u610F\u8282\u594F",value:`\u7EA6\u6BCF ${c.flashPeriod.toFixed(1)} \u79D2\u4E00\u7EC4\u5149\u6548\uFF08\u975E\u5B9E\u51B5\u96F7\u51FB\u9891\u7387\uFF09`}],l})}var Hm={id:"lightning",label:"\u95EA\u7535",color:"#f3e7a1",enabled:!0,ttl:1/0,load:qM,createView:()=>Ac({simulatedStorm:!0})};var Vm=[ym,Hm,km];function Gm({loadTrack:i,onChange:e,now:t=Date.now}){let n=new Map,s=null,r=null,a=0,o=h=>`${h.id}:${h.gdacs?.episodeId??""}:${h.time??""}`;function l(h,d){let g=d.current,x=g?.windSpeedKmh;return{...h,trackData:d,...Number.isFinite(x)&&x>=0?{cyclone:{...h.cyclone,windSpeedKmh:x,windBasis:"observation",validTime:g.time}}:{}}}function c(){a++,r?.abort(),r=null}function u(){c(),s=null,e(null,!1)}async function f(h){if(c(),!h){u();return}if(h.layer!=="typhoon"){s=h,e(s,!0);return}let d=o(h),g=n.get(d);if(g&&t()-g.time<15*6e4){s=l(h,g.data),e(s,!0);return}s=l(h,{...h.trackData,status:"loading",history:h.trackData?.history||[],forecast:h.trackData?.forecast||[]}),e(s,!0),r=new AbortController;let x=r,m=a;try{let p=await i(h,{signal:x.signal});if(x.signal.aborted||m!==a)return;n.set(d,{data:p,time:t()}),s=l(h,p),e(s,!1)}catch(p){if(x.signal.aborted||m!==a)return;s=l(h,{...s.trackData,status:"error",message:p?.message||"\u8DEF\u5F84\u6682\u65F6\u65E0\u6CD5\u52A0\u8F7D\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6B64\u53F0\u98CE\u91CD\u8BD5\u3002"}),e(s,!1)}finally{r===x&&(r=null)}}return{select:f,clear:u,getEvent:()=>s,dispose(){u(),n.clear()}}}var YM=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Wm=i=>i===!0||String(i).toLowerCase()==="true",jM=i=>i===!1||String(i).toLowerCase()==="false";function $M(i){let e=bt(i).match(/^(\d{1,2}) ([A-Za-z]{3}) (\d{4}) (\d{2}):(\d{2})$/);if(!e)return Qn(i);let[,t,n,s,r,a]=e,o=YM.findIndex(l=>l.toLowerCase()===n.toLowerCase())+1;return o?Qn(`${s}-${String(o).padStart(2,"0")}-${t.padStart(2,"0")}T${r}:${a}:00Z`):null}function Xm(i){let e=Ft(i?.gdacs?.eventId),t=Ft(i?.gdacs?.episodeId);return Number.isSafeInteger(e)&&e>0&&Number.isSafeInteger(t)&&t>0?`https://www.gdacs.org/gdacsapi/api/events/getepisodedata?eventtype=TC&eventid=${e}&episodeid=${t}`:null}function Fh(i,e){let t=i?.properties;if(i?.type!=="Feature"||t?.eventtype!=="TC"||Ft(t.eventid)!==Ft(e?.gdacs?.eventId)||Ft(t.episodeid)!==Ft(e?.gdacs?.episodeId))throw new Error("GDACS \u8FD4\u56DE\u4E86\u4E0D\u5339\u914D\u7684\u53F0\u98CE\u516C\u544A");let n=(Array.isArray(t.impacts)?t.impacts:[]).flatMap(s=>{let r=Bn(s?.resource?.timeline);if(!r)return[];let a=new URL(r);return a.origin!=="https://www.gdacs.org"||a.pathname.toLowerCase()!=="/gdacsapi/api/export/gettimeline"||!/^\d+$/.test(a.searchParams.get("id")||"")?[]:[{url:r,source:bt(s.source,bt(t.source,"GDACS"))}]});return n.find(s=>s.source===t.source)||n[0]||null}function Nh(i,{eventId:e,source:t,sourceUrl:n,dataUrl:s}={}){if(!Array.isArray(i?.channel?.item))throw new Error("GDACS \u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u53F0\u98CE\u8DEF\u5F84\u683C\u5F0F");let r=new Map,a=new Map,o=[];for(let d of i.channel.item){if(e!=null&&String(d?.storm_id)!==String(e))continue;let g=Jn([d?.longitude,d?.latitude]),x=$M(d?.advisory_datetime),m=Wm(d?.actual),p=jM(d?.actual);if(!g||!x||!m&&!p)continue;let _={lon:g[0],lat:g[1],time:x,validTime:x,windSpeedKmh:Za(d.wind_speed,"m/s"),source:t,sourceUrl:n,advisoryNumber:bt(d.advisory_number)},M=`${m?"":_.advisoryNumber}:${x}:${_.lon}:${_.lat}`;(m?r:a).set(M,_),m&&Wm(d.current)&&o.push(_)}let l=d=>[...d].sort((g,x)=>g.time.localeCompare(x.time)),c=l(o).at(-1)||null,u=!!c?.advisoryNumber,f=u?l(a.values()).filter(d=>d.time>c.time&&d.advisoryNumber===c.advisoryNumber):[],h=l(r.values());return{history:h,forecast:f,current:c,source:t,sourceUrl:n,dataUrl:s,issuedAt:c?.time||null,status:f.length?"ready":h.length?"history-only":"unavailable",message:f.length?"\u9884\u6D4B\u8DEF\u5F84\u6765\u81EA\u8BE5\u6B21\u5B98\u65B9\u516C\u544A\uFF1B\u6709\u6548\u65F6\u95F4\u4EE5\u5404\u9884\u6D4B\u70B9\u6807\u6CE8\u4E3A\u51C6\u3002":a.size&&!u?"\u8BE5\u6B21\u516C\u544A\u7F3A\u5C11\u660E\u786E\u7684\u5F53\u524D\u89C2\u6D4B\u70B9\u6216\u516C\u544A\u7F16\u53F7\uFF0C\u6682\u4E0D\u5C55\u793A\u9884\u6D4B\u8DEF\u5F84\u3002":h.length?"\u8BE5\u6B21\u5B98\u65B9\u516C\u544A\u672A\u63D0\u4F9B\u9884\u6D4B\u8DEF\u5F84\u3002":"\u8BE5\u6B21\u5B98\u65B9\u516C\u544A\u672A\u63D0\u4F9B\u53EF\u7528\u7684\u8DEF\u5F84\u70B9\u3002"}}async function qm(i,e={}){if(e.signal?.aborted)throw new DOMException("\u6570\u636E\u8BF7\u6C42\u5DF2\u53D6\u6D88","AbortError");let t=Xm(i);if(!t)return i?.source==="NASA EONET"&&Array.isArray(i.trackData?.history)?i.trackData:{history:[],forecast:[],current:null,source:i?.source||"\u516C\u5F00\u6765\u6E90",sourceUrl:Bn(i?.sourceUrl),issuedAt:null,status:"unavailable",message:"\u5F53\u524D\u6765\u6E90\u672A\u63D0\u4F9B\u53EF\u52A0\u8F7D\u7684\u5B98\u65B9\u8DEF\u5F84\u3002"};let n={ttl:900*1e3,...e},s=await Li(t,{...n,validate:c=>Fh(c,i)}),r=Fh(s,i),a=Bn(s.properties.url?.report)||Bn(i.sourceUrl);if(!r)return{history:[],forecast:[],current:null,source:"GDACS",sourceUrl:a,issuedAt:null,status:"unavailable",message:"GDACS \u8BE5\u6B21\u516C\u544A\u672A\u63D0\u4F9B\u5B98\u65B9\u8DEF\u5F84\u6570\u636E\u3002"};let o={eventId:i.gdacs.eventId,source:`GDACS / ${r.source}`,sourceUrl:a,dataUrl:r.url},l=await Li(r.url,{...n,validate:c=>Nh(c,o)});return Nh(l,o)}function Ym({world:i,camera:e,controls:t,navigation:n,ui:s,layerDefinitions:r=Vm,createPanel:a=Zp,createPopup:o=Jp,loadTrack:l=qm}){let c=em(n,s),u=new ze;u.name="EarthSense surface layers",u.visible=!1,i.earth.mesh.add(u);let f=new Map,h=new Map,d=!1,g,x=Qp(r,M),m=o({onFocus:E=>n.focusEarth({lat:E.lat,lon:E.lon,distance:1.65}),onClose:()=>p.clear()}),p=Gm({loadTrack:l,onChange(E,T){for(let[C,R]of f)R.setSelected?.(C===E?.layer?E:null);E?T?m.show(E):m.update?.(E):m.close()}});g=a({layers:r,onModeChange:y,onToggle:b,onRefresh:()=>{x.refresh(!0)},onSelect:E=>S(E,!0),onReturnEarth:()=>n.flyTo("earth")});function _(){let E=x.snapshot(),T=Object.values(E).map(C=>C.updatedAt).filter(Boolean);return{active:c.active,visible:d,layers:E,loading:Object.values(E).some(C=>C.status==="loading"),events:x.visibleEvents(),updatedAt:T.length?Math.max(...T):null,selectedEvent:p.getEvent()}}function M(){let E=_();for(let T of r){let C=E.layers[T.id],R=x.events(T.id),D=f.get(T.id);if(d&&C.enabled&&R.length&&!D&&(D=T.createView(),f.set(T.id,D),u.add(D.group)),D){h.get(T.id)!==R&&(D.setEvents(R),h.set(T.id,R)),D.group.visible=C.enabled;let k=p.getEvent();D.setSelected?.(C.enabled&&T.id===k?.layer?k:null)}}g?.update(E)}function y(E){let T=E==="earthsense";T!==c.active&&(T?c.enter():c.leave(),d=!1,u.visible=!1,p.clear(),document.body.classList.toggle("earthsense-active",T),x.setActive(T),M())}function b(E,T){x.setEnabled(E,T),!T&&p.getEvent()?.layer===E&&p.clear()}function S(E,T=!1){!c.active||!x.snapshot()[E.layer]?.enabled||(p.select(E),T&&n.focusEarth({lat:E.lat,lon:E.lon,distance:2.2}))}function w(E,{scaleFactor:T=1}={}){let C=n.getState(),R=c.active&&C.focusBody==="earth"&&C.stage==="earth"&&e.position.distanceTo(i.earth.position)<12&&t.target.distanceTo(i.earth.position)<2;if(d!==R&&(d=R,u.visible=d,d||p.clear(),M()),d)for(let D of f.values())D.group.visible&&D.update(E,{reducedMotion:Un,scaleFactor:T})}function v(E){if(!d)return!1;i.earth.mesh.updateWorldMatrix(!0,!0);let T=E.intersectObject(i.earth.mesh,!1)[0],C=[...f.values()].filter(R=>R.group.visible).map(R=>R.pick(E,T?.distance??1/0)).filter(Boolean).sort((R,D)=>R.distance-D.distance);if(C.length){let R=C[0],D=p.getEvent();return R.trackPoint&&D?.id===R.event.id?m.show({...D,trackPoint:R.trackPoint,trackKind:R.trackKind}):S(R.event),!0}return T?(p.clear(),!0):!1}return M(),{get active(){return c.active},get visible(){return d},update:w,pick:v,setMode:y,getState:_,toggleLayer:b,diagnostics:()=>({..._(),eventCount:x.visibleEvents().length,renderedLayers:[...f.keys()],visuals:Object.fromEntries([...f].map(([E,T])=>[E,T.diagnostics?.()||{}]))}),dispose(){p.dispose(),x.dispose();for(let E of f.values())E.dispose();u.removeFromParent(),g.dispose?.(),m.dispose?.()}}}function jm({maxTextureSize:i=8192,compact:e=!1,deviceMemory:t=8}={}){let n=e||t<=4?4096:8192,s=Math.min(n,i);return 2**Math.floor(Math.log2(Math.max(1,s)))}async function $m(i,e,t){let n=new vs,s=[];try{for(let r of["earth-day-8k","earth-night-8k"]){if(!i[r])throw new Error("\u9AD8\u6E05\u5730\u7403\u7EB9\u7406\u4E0D\u53EF\u7528");let a=await window.OrbitAssets.loadTexture(n,i[r]);if(s.push(a),a.image.width>t){let o=document.createElement("canvas");o.width=t,o.height=t/2;let l=o.getContext("2d");if(!l)throw new Error("\u65E0\u6CD5\u51C6\u5907\u9AD8\u6E05\u5730\u7403\u7EB9\u7406");l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(a.image,0,0,o.width,o.height),a.image=o}a.colorSpace=Ot,a.anisotropy=e.capabilities.getMaxAnisotropy(),a.minFilter=di,a.magFilter=Tt,a.needsUpdate=!0,e.initTexture(a)}return{day:s[0],night:s[1],width:s[0].image.width}}catch(r){throw s.forEach(a=>a.dispose()),r}}function Zm({world:i,renderer:e,assets:t,compact:n=!1,deviceMemory:s=globalThis.navigator?.deviceMemory??8,load:r=$m}){let{earth:a,clouds:o}=i,l=a.mesh.material,c=a.atmosphere,u={day:l.uniforms.uDay.value,night:l.uniforms.uNight.value,geometry:a.mesh.geometry,cloudGeometry:o.geometry,cloudVisible:o.visible,atmosphereGeometry:c?.geometry},f=jm({maxTextureSize:e.capabilities.maxTextureSize,compact:n,deviceMemory:s}),h=!1,d=!1,g,x,m,p="idle",_="";function M(){l.uniforms.uDay.value=g?g.day:u.day,l.uniforms.uNight.value=g?g.night:u.night,a.mesh.geometry=x||u.geometry,o.geometry=x||u.cloudGeometry,o.visible=u.cloudVisible&&!h,c&&(c.geometry=x||u.atmosphereGeometry)}function y(){if(d||m||g)return m;if(x||(x=new Pt(1,256,160)),M(),f<=2048){p="fallback";return}return p="loading",m=r(t,e,f).then(S=>{if(d){S.day.dispose(),S.night.dispose();return}g=S,p="ready",M()}).catch(S=>{d||(p="fallback",_=S.message)}).finally(()=>{m=null}),m}function b(S){d||h===S||(h=S,M())}return{prepare:y,setObservation:b,ready:()=>m??Promise.resolve(),getState:()=>({shared:!0,observation:h,status:p,textureWidth:g?g.width:2048,decorativeCloudsVisible:o.visible,error:_}),dispose(){d||(d=!0,h=!1,x?.dispose(),g?.day.dispose(),g?.night.dispose(),x=null,g=null,M())}}}async function Km(){let i;window.addEventListener("error",e=>{console.error(e.error||e.message),i||Sc("\u52A0\u8F7D\u51FA\u73B0\u95EE\u9898\u3002\u8BF7\u4F7F\u7528\u652F\u6301 WebGL 2 \u7684\u65B0\u7248 Chrome\u3001Edge \u6216 Safari \u6253\u5F00\u6B64\u6587\u4EF6\u3002")}),Hp();try{let S=function(w){requestAnimationFrame(S);let v=Math.min((w-_)/1e3,.05);if(_=w,p)return;if(d.wallpaper.active&&d.wallpaper.isolated){d.wallpaper.update(v);return}let E=d.getState(),T=x.getState(),C=T.flight,R=T.stage==="trajectory";if(R?b=!0:C||(b=!1),x.update(v,w,()=>u.update(v,{...E,paused:g.active||T.returning||b||E.paused})),u.motionTrajectories.update(C||g.active||!R?0:v,{active:b,speed:E.speed,paused:E.paused||C||g.active||!R}),u.backgroundStars.position.copy(t.position),u.backgroundStars.visible=d.wallpaper.starsVisible,u.flybys.update(v,t,{paused:E.paused,enabled:!g.active&&!b,navigating:C}),zp(u,t,n,E.orbitsVisible,x.getState()),d.wallpaper.satellitesVisible||(u.earthSatellites.visible=!1,u.station.visible=!1,u.earthOrbitGroup.visible=!1),u.motionTrajectories.group.traverse(D=>{D.name.startsWith("trajectory-trail-")&&(D.visible=E.orbitsVisible&&(D.material.uniforms.uGalactic.value>0||D.material.uniforms.uRadius.value>0))}),x.updateStage(),g.update(w/1e3,{scaleFactor:Se.clamp((t.position.distanceTo(u.earth.position)-1)/3.65,.06,1)}),y!==g.visible&&(y=g.visible,f.setObservation(y)),a(y,v),g.visible&&(u.earthSatellites.visible=!1,u.station.visible=!1,u.earthOrbitGroup.visible=!1,u.orbitGroup.visible=!1),++M%2===0&&m.update({...E,...x.getState(),satellitesVisible:d.wallpaper.satellitesVisible,labelsVisible:E.labelsVisible&&!g.visible&&!b}),M%10===0)if(d.updateHud(),g.visible){let D=f.getState();document.getElementById("view-caption").textContent=D.status==="ready"?`EARTHSENSE \xB7 ${D.textureWidth/1024}K \u5730\u8868`:"EARTHSENSE \xB7 \u5730\u8868\u89C2\u6D4B"}else x.getState().focusBody==="earth"&&x.getState().stage==="earth"&&f.getState().status==="ready"&&(document.getElementById("view-caption").textContent+=` \xB7 ${f.getState().textureWidth/1024}K \u5730\u8868`);d.wallpaper.active?d.wallpaper.update(v):s.render()};i=op(document.getElementById("universe"),()=>Sc("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931\u3002\u8BF7\u5173\u95ED\u5360\u7528\u663E\u5361\u7684\u9875\u9762\u540E\uFF0C\u91CD\u65B0\u52A0\u8F7D\u661F\u7A7A\u3002"));let e=new $r,{camera:t,controls:n}=pp(i),{composer:s,resize:r,updateFraming:a}=lp(i,e,t),o=r(),l=window.ORBIT_ASSETS,c=await kp(l,w=>{document.getElementById("load-progress").style.width=`${w*90}%`}),u=Bp(e,c,o),f=Zm({world:u,renderer:i,assets:l,compact:jt()}),h=Vp({getData:u.getData}),d,g,x=mp({camera:t,controls:n,world:u,onInfo:h.update,toast:wh,onStage:w=>d?.updateStage(w)}),m=Gp({camera:t,controls:n,world:u,onSelect:x.flyTo});d=jp({renderer:i,camera:t,world:u,navigation:x,assets:l,toast:wh,controls:n,wallpaperView:rp({renderer:i,composer:s,scene:e,world:u,textures:c,mainCamera:t,resizeMain:()=>r(u)}),setSpaceColor:w=>{e.background=new ge(w),i.setClearColor(w),document.documentElement.style.setProperty("--space-color",w)},onPick:(w,v)=>g?.pick(w,v)||!1}),u.update(0,d.getState()),x.initialize(),g=Ym({world:u,camera:t,controls:n,navigation:x,ui:d}),Xh(),r(u),document.getElementById("load-progress").style.width="100%",document.getElementById("load-text").textContent="\u6B22\u8FCE\u56DE\u5230\u5730\u7403",await i.compileAsync(e,t),s.render(),f.prepare(),document.getElementById("loading").classList.add("done"),setTimeout(()=>document.getElementById("loading")?.remove(),900);let p=!1,_=performance.now(),M=0,y=!1,b=!1;addEventListener("resize",()=>d.wallpaper.active?d.wallpaper.resize():r(u)),document.addEventListener("visibilitychange",()=>{p=document.hidden,_=performance.now()}),requestAnimationFrame(S),window.ORBIT={version:"1.9.0",wallpaper:d.wallpaper,getState:()=>({...x.getState(),...d.getState(),planetCount:mi.filter(w=>w.orbit&&w.id!=="moon").length,satelliteCount:u.satellites.length,galaxyStars:u.galaxy.geometry.attributes.position.count,galaxyCount:u.galaxyDefinitions.length,deepSpaceBodyCount:u.deepSpace.bodies.size,flybys:u.flybys.getState(),trajectories:u.motionTrajectories.getState(),drawCalls:i.info.render.calls,triangles:i.info.render.triangles,mode:g.active?"earthsense":"universe",earthDetail:f.getState(),pixelRatio:i.getPixelRatio()}),goTo:x.flyTo,zoom:x.zoom,setPaused:d.setPaused,setMode:g.setMode,earthsense:{getState:g.diagnostics,setLayer:g.toggleLayer},trajectories:{getState:u.motionTrajectories.getState,setReferenceFrame:u.motionTrajectories.setReferenceFrame,setTrailLength:u.motionTrajectories.setTrailLength},destinations:()=>[...u.galaxyDefinitions,...u.deepSpace.bodies.values()].map(w=>({id:w.id,name:w.cn,kind:w.kind,parentGalaxy:w.parentGalaxy,parentStarId:w.parentStarId,modelStatus:w.modelStatus}))}}catch(e){console.error(e),Sc("\u65E0\u6CD5\u521D\u59CB\u5316\u4E09\u7EF4\u573A\u666F\u3002\u8BF7\u786E\u8BA4\u6D4F\u89C8\u5668\u5DF2\u5F00\u542F\u786C\u4EF6\u52A0\u901F\uFF0C\u6216\u4F7F\u7528\u65B0\u7248 Chrome\u3001Edge\u3001Safari \u91CD\u8BD5\u3002")}}Km();})();
})();