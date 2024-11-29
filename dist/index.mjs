#!/usr/bin/env node
var Y=t=>{throw TypeError(t)};var gt=(t,e,n)=>e.has(t)||Y("Cannot "+n);var E=(t,e,n)=>(gt(t,e,"read from private field"),n?n.call(t):e.get(t)),H=(t,e,n)=>e.has(t)?Y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import Ct from"@parcel/watcher";import{compile as Bt,env as u}from"@tailwindcss/node";import{clearRequireCache as Et}from"@tailwindcss/node/require-cache";import{Scanner as Dt}from"@tailwindcss/oxide";import{Features as ot,transform as Rt}from"lightningcss";import{existsSync as vt}from"node:fs";import q from"node:fs/promises";import C from"node:path";var $,D=class{constructor(){H(this,$,new Set([]))}queueMacrotask(e){let n=setTimeout(e,0);return this.add(()=>{clearTimeout(n)})}add(e){return E(this,$).add(e),()=>{E(this,$).delete(e),e()}}async dispose(){for(let e of E(this,$))await e();E(this,$).clear()}};$=new WeakMap;import St from"node:fs";import et from"node:path";import{stripVTControlCharacters as xt}from"node:util";import h from"picocolors";import X from"enhanced-resolve";import yt from"node:fs";import{createRequire as wt}from"node:module";var bt=wt(import.meta.url).resolve;function Z(t){return bt(t)}var Mt=X.ResolverFactory.createResolver({fileSystem:new X.CachedInputFileSystem(yt,4e3),useSyncFileSystemCalls:!0,extensions:[".css"],mainFields:["style"],conditionNames:["style"]});function tt(t){let e=typeof t=="number"?BigInt(t):t;return e<1000n?`${e}ns`:(e/=1000n,e<1000n?`${e}\xB5s`:(e/=1000n,e<1000n?`${e}ms`:(e/=1000n,e<60n?`${e}s`:(e/=60n,e<60n?`${e}m`:(e/=60n,e<24n?`${e}h`:(e/=24n,`${e}d`))))))}var k={indent:2};function R(){return`${h.italic(h.bold(h.blue("\u2248")))} tailwind-plugin-theme ${h.blue(`v${Tt()}`)}`}function G(t){return`${h.dim(h.blue("`"))}${h.blue(t)}${h.dim(h.blue("`"))}`}function nt(t,e=process.cwd(),{preferAbsoluteIfShorter:n=!0}={}){let i=et.relative(e,t);return i.startsWith("..")||(i=`.${et.sep}${i}`),n&&i.length>t.length?t:i}function M(t,e){let n=t.split(" "),i=[],o="",s=0;for(let c of n){let a=xt(c).length;s+a+1>e&&(i.push(o),o="",s=0),o+=(s?" ":"")+c,s+=a+(s?1:0)}return s&&i.push(o),i}function A(t){let e=tt(t);return t<=50*1e6?h.green(e):t<=300*1e6?h.blue(e):t<=1e3*1e6?h.yellow(e):h.red(e)}function v(t,e=0){return`${" ".repeat(e+k.indent)}${t}`}function g(t=""){process.stderr.write(`${t}
`)}function f(t=""){process.stdout.write(`${t}
`)}function Tt(){let{version:t}=JSON.parse(St.readFileSync(Z("@rymcu/tailwind-plugin-theme/package.json"),"utf-8"));return t}import L from"node:fs/promises";import $t from"node:path";function U(){return new Promise((t,e)=>{let n="";process.stdin.on("data",i=>{n+=i}),process.stdin.on("end",()=>t(n)),process.stdin.on("error",i=>e(i))})}async function it(t,e){try{if(await L.readFile(t,"utf8")===e)return}catch{}await L.mkdir($t.dirname(t),{recursive:!0}),await L.writeFile(t,e,"utf8")}function O(){return{"--input":{type:"string",description:"Input json file",alias:"-i"},"--output":{type:"string",description:"Output path",alias:"-o"},"--watch":{type:"boolean | string",description:"Watch for changes and rebuild as needed",alias:"-w"},"--minify":{type:"boolean",description:"Optimize and minify the output",alias:"-m"},"--optimize":{type:"boolean",description:"Optimize the output without minifying"},"--cwd":{type:"string",description:"The current working directory",default:"."}}}var rt=String.raw;async function st(t){try{return await t()}catch(e){e instanceof Error&&g(e.toString()),process.exit(1)}}async function lt(t){let e=C.resolve(t["--cwd"]);t["--output"]&&(t["--output"]=C.resolve(e,t["--output"])),t["--input"]&&t["--input"]!=="-"&&(t["--input"]=C.resolve(e,t["--input"]),vt(t["--input"])||(g(R()),g(),g(`Specified input file ${G(nt(t["--input"]))} does not exist.`),process.exit(1)));let n=process.hrtime.bigint(),i=t["--input"]?t["--input"]==="-"?await U():await q.readFile(t["--input"],"utf-8"):rt`
        @import 'tailwindcss';
      `,o={css:"",optimizedCss:""};async function s(y,d){let w=y;if(d["--minify"]||d["--optimize"])if(y!==o.css){u.DEBUG&&console.time("[@tailwindcss/cli] Optimize CSS");let b=Ut(y,{file:d["--input"]??"input.css",minify:d["--minify"]??!1});u.DEBUG&&console.timeEnd("[@tailwindcss/cli] Optimize CSS"),o.css=y,o.optimizedCss=b,w=b}else w=o.optimizedCss;u.DEBUG&&console.time("[@tailwindcss/cli] Write output"),d["--output"]?await it(d["--output"],w):f(w),u.DEBUG&&console.timeEnd("[@tailwindcss/cli] Write output")}let c=t["--input"]&&t["--input"]!=="-"?C.resolve(t["--input"]):null,a=c?C.dirname(c):process.cwd(),r=c?[c]:[];async function p(y){u.DEBUG&&console.time("[@tailwindcss/cli] Setup compiler");let d=await Bt(y,{base:a,onDependency(B){r.push(B)}}),w=(d.root==="none"?[]:d.root===null?[{base:e,pattern:"**/*"}]:[d.root]).concat(d.globs),b=new Dt({sources:w});return u.DEBUG&&console.timeEnd("[@tailwindcss/cli] Setup compiler"),[d,b]}let[l,m]=await st(()=>p(i));if(t["--watch"]){let y=await ct(at(m),async function d(w){try{if(w.length===1&&w[0]===t["--output"])return;let b=[],B="incremental",V=r;for(let x of w){if(V.includes(x)){B="full";break}b.push({file:x,extension:C.extname(x).slice(1)})}let Q=process.hrtime.bigint(),j="";if(B==="full"){let x=t["--input"]?t["--input"]==="-"?await U():await q.readFile(t["--input"],"utf-8"):rt`
                  @import 'tailwindcss';
                `;Et(V),r=c?[c]:[],[l,m]=await p(x),u.DEBUG&&console.time("[@tailwindcss/cli] Scan for candidates");let I=m.scan();u.DEBUG&&console.timeEnd("[@tailwindcss/cli] Scan for candidates");let ht=await ct(at(m),d);await y(),y=ht,u.DEBUG&&console.time("[@tailwindcss/cli] Build CSS"),j=l.build(I),u.DEBUG&&console.timeEnd("[@tailwindcss/cli] Build CSS")}else if(B==="incremental"){u.DEBUG&&console.time("[@tailwindcss/cli] Scan for candidates");let x=m.scanFiles(b);if(u.DEBUG&&console.timeEnd("[@tailwindcss/cli] Scan for candidates"),x.length<=0){let I=process.hrtime.bigint();g(`Done in ${A(I-Q)}`);return}u.DEBUG&&console.time("[@tailwindcss/cli] Build CSS"),j=l.build(x),u.DEBUG&&console.timeEnd("[@tailwindcss/cli] Build CSS")}await s(j,t);let dt=process.hrtime.bigint();g(`Done in ${A(dt-Q)}`)}catch(b){b instanceof Error&&g(b.toString())}});t["--watch"]!=="always"&&process.stdin.on("end",()=>{y().then(()=>process.exit(0),()=>process.exit(1))}),process.stdin.resume()}u.DEBUG&&console.time("[@tailwindcss/cli] Scan for candidates");let S=m.scan();u.DEBUG&&console.timeEnd("[@tailwindcss/cli] Scan for candidates"),u.DEBUG&&console.time("[@tailwindcss/cli] Build CSS");let P=await st(()=>l.build(S));u.DEBUG&&console.timeEnd("[@tailwindcss/cli] Build CSS"),await s(P,t);let F=process.hrtime.bigint();g(R()),g(),g(`Done in ${A(F-n)}`)}function at(t){return t.globs.flatMap(e=>e.pattern[0]==="!"?[]:e.pattern===""?[]:e.base)}async function ct(t,e){t=t.sort((a,r)=>a.length-r.length);let n=[];for(let a=0;a<t.length;++a)for(let r=0;r<a;++r)t[a].startsWith(`${t[r]}/`)&&n.push(t[a]);t=t.filter(a=>!n.includes(a));let i=new D,o=new Set,s=new D;async function c(){await s.dispose(),s.queueMacrotask(()=>{e(Array.from(o)),o.clear()})}for(let a of t){let{unsubscribe:r}=await Ct.subscribe(a,async(p,l)=>{if(p){console.error(p);return}await Promise.all(l.map(async m=>{if(m.type==="delete")return;let S=null;try{S=await q.lstat(m.path)}catch{}!S?.isFile()&&!S?.isSymbolicLink()||o.add(m.path)})),await c()});i.add(r)}return async()=>{await i.dispose(),await s.dispose()}}function Ut(t,{file:e="input.css",minify:n=!1}={}){function i(o){return Rt({filename:e,code:o,minify:n,sourceMap:!1,drafts:{customMedia:!0},nonStandard:{deepSelectorCombinator:!0},include:ot.Nesting,exclude:ot.LogicalProperties,targets:{safari:16<<16|1024,ios_saf:16<<16|1024,firefox:8388608,chrome:7864320},errorRecovery:!0}).code}return i(i(Buffer.from(t))).toString()}import kt from"mri";function pt(t,e=process.argv.slice(2)){let n=kt(e),i={_:n._};for(let[o,{type:s,alias:c,default:a=s==="boolean"?!1:null}]of Object.entries(t)){if(i[o]=a,c){let r=c.slice(1);n[r]!==void 0&&(i[o]=ut(n[r],s))}{let r=o.slice(2);n[r]!==void 0&&(i[o]=ut(n[r],s))}}return i}function ut(t,e){switch(e){case"string":return z(t);case"boolean":return N(t);case"number":return W(t);case"boolean | string":return N(t)??z(t);case"number | string":return W(t)??z(t);case"boolean | number":return N(t)??W(t);case"boolean | number | string":return N(t)??W(t)??z(t);default:throw new Error(`Unhandled type: ${e}`)}}function N(t){if(t===!0||t===!1)return t;if(t==="true")return!0;if(t==="false")return!1}function W(t){if(typeof t=="number")return t;{let e=Number(t);if(!Number.isNaN(e))return e}}function z(t){return`${t}`}import T from"picocolors";function K({invalid:t,usage:e,options:n}){let i=process.stdout.columns;if(f(R()),t&&(f(),f(`${T.dim("Invalid command:")} ${t}`)),e&&e.length>0){f(),f(T.dim("Usage:"));for(let[o,s]of e.entries()){let c=s.slice(0,s.indexOf("[")),a=s.slice(s.indexOf("["));a=a.replace(/\[.*?\]/g,l=>T.dim(l));let p=M(a,i-k.indent-c.length-1);p.length>1&&o!==0&&f(),f(v(`${c}${p.shift()}`));for(let l of p)f(v(l,c.length))}}if(n){let o=0;for(let{alias:r}of Object.values(n))r&&(o=Math.max(o,r.length));let s=[],c=0;for(let[r,{alias:p}]of Object.entries(n)){let l=[p&&`${p.padStart(o)}`,p?r:" ".repeat(o+2)+r].filter(Boolean).join(", ");s.push(l),c=Math.max(c,l.length)}f(),f(T.dim("Options:"));let a=8;for(let{description:r,default:p=null}of Object.values(n)){let l=s.shift(),m=a+(c-l.length),S=2,P=i-l.length-m-S-k.indent,F=M(p!==null?`${r} ${T.dim(`[default:\u202F${G(`${p}`)}]`)}`:r,P);f(v(`${T.blue(l)} ${T.dim(T.gray("\xB7")).repeat(m)} ${F.shift()}`));for(let y of F)f(v(`${" ".repeat(l.length+m+S)}${y}`))}}}import Gt from"node:fs";var At=String.raw;async function Ot(t){let e=At`{}`;t&&(t==="-"?e=await U():e=await Gt.promises.readFile(t,"utf-8"));let n=JSON.parse(e);return n.themes||(g("Invalid theme file. Please check if the file is a valid JSON file."),process.exit(1)),n.themes}async function ft(t){let e=await Ot(t["--input"]),n=Nt(e,t);await Promise.all(n.map(async i=>{await lt(i)}))}function Nt(t,e){return t.map(n=>({...e,"--input":n.input,"--output":`${e["--output"]}/${n.name}.css`}))}var J={"--help":{type:"boolean",description:"Display usage information",alias:"-h"}},_=pt({...O(),...J}),mt=_._[0];mt&&(K({invalid:mt,usage:["tailwind-plugin-theme [options]"],options:{...O(),...J}}),process.exit(1));(process.stdout.isTTY&&!_["--output"]||_["--help"])&&(K({usage:["tailwind-plugin-theme [--input input.css] [--output output.css] [--watch] [options\u2026]"],options:{...O(),...J}}),process.exit(0));ft(_);
//# sourceMappingURL=index.mjs.map