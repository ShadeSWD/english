/* Мини-иллюстрации для тренажёра «слово и картинка».
 * Каждый значок — самостоятельный SVG 120 × 90, штриховой, в палитре кластера.
 * Ключ объекта совпадает с заголовочным словом в словаре курса (vocab.js).
 */
'use strict';
var PICS = {

anchor: `<svg viewBox="0 0 120 90" role="img" aria-label="anchor">
  <g class="ln"><circle cx="60" cy="15" r="7"/><path d="M60 22 V74"/><path d="M40 32 H80"/>
  <path d="M26 48 c0 18 15 28 34 28 s34-10 34-28"/>
  <path d="M20 42 l6 8 8-5 M100 42 l-6 8 -8-5"/></g></svg>`,

propeller: `<svg viewBox="0 0 120 90" role="img" aria-label="propeller">
  <g class="ln"><circle cx="60" cy="45" r="9"/>
  <g transform="rotate(0 60 45)"><path d="M60 36 c16-16 28-10 25 6 c-2 12-14 14-25 5z"/></g>
  <g transform="rotate(120 60 45)"><path d="M60 36 c16-16 28-10 25 6 c-2 12-14 14-25 5z"/></g>
  <g transform="rotate(240 60 45)"><path d="M60 36 c16-16 28-10 25 6 c-2 12-14 14-25 5z"/></g>
  <circle cx="60" cy="45" r="3" fill="#16161a"/></g></svg>`,

rudder: `<svg viewBox="0 0 120 90" role="img" aria-label="rudder">
  <g class="ln"><path d="M44 10 V80"/>
  <path d="M44 26 h26 c10 8 12 30 2 40 H44z"/>
  <circle cx="44" cy="20" r="4"/><circle cx="44" cy="72" r="4"/>
  <path d="M32 14 H44 M32 78 H44"/></g></svg>`,

hammer: `<svg viewBox="0 0 120 90" role="img" aria-label="hammer">
  <g class="ln"><path d="M54 32 V80" stroke-width="5"/>
  <path d="M32 18 h44 a4 4 0 0 1 4 4 v10 a4 4 0 0 1-4 4 H32z"/>
  <path d="M32 18 q-16 4 -18 16 q8 6 18 2"/>
  <path d="M46 36 h16 v8 h-16z"/></g></svg>`,

spanner: `<svg viewBox="0 0 120 90" role="img" aria-label="spanner">
  <g class="ln"><path d="M34 39 h52 v12 H34z"/>
  <path d="M34 31 H18 v9 h9 v10 h-9 v9 h16z"/>
  <path d="M86 31 h16 v9 h-9 v10 h9 v9 H86z"/></g></svg>`,

screwdriver: `<svg viewBox="0 0 120 90" role="img" aria-label="screwdriver">
  <g class="ln"><path d="M14 34 h30 a6 6 0 0 1 0 22 H14 a6 6 0 0 1 0-22z"/>
  <path d="M20 34 v22 M28 34 v22 M36 34 v22"/>
  <path d="M44 40 h18 v10 H44z"/><path d="M62 42 h32 v6 H62z"/>
  <path d="M94 39 h10 v12 h-10z"/></g></svg>`,

saw: `<svg viewBox="0 0 120 90" role="img" aria-label="saw">
  <g class="ln"><path d="M42 24 h64 l-10 22 H42z" fill="#fff"/>
  <path d="M42 46 l6 8 6-8 6 8 6-8 6 8 6-8 6 8 6-8 6 8 6-8"/>
  <path d="M42 18 h-10 a18 18 0 0 0-14 28 a12 12 0 0 0 14 8 h10z" fill="#fff"/>
  <path d="M32 28 a11 11 0 0 0-7 16"/></g></svg>`,

bolt: `<svg viewBox="0 0 120 90" role="img" aria-label="bolt">
  <g class="ln"><path d="M22 30 l10-8 h20 l10 8 v30 l-10 8 H32 l-10-8z"/>
  <path d="M62 34 h38 v22 H62z"/>
  <path d="M68 34 v22 M76 34 v22 M84 34 v22 M92 34 v22"/></g></svg>`,

nut: `<svg viewBox="0 0 120 90" role="img" aria-label="nut">
  <g class="ln"><path d="M60 12 l30 17 v34 l-30 17 -30-17 V29z"/>
  <circle cx="60" cy="46" r="15"/></g></svg>`,

crane: `<svg viewBox="0 0 120 90" role="img" aria-label="gantry crane">
  <g class="ln"><path d="M14 78 V26 h92 v52"/><path d="M8 78 h104"/>
  <path d="M14 26 L60 12 L106 26"/>
  <path d="M60 26 v14"/><path d="M52 40 h16 v8 H52z"/><path d="M60 48 v12"/>
  <path d="M54 60 h12 v8 H54z"/></g></svg>`,

lighthouse: `<svg viewBox="0 0 120 90" role="img" aria-label="lighthouse">
  <g class="ln"><path d="M46 78 L52 30 h16 l6 48z"/><path d="M36 78 h48"/>
  <path d="M50 22 h20 v8 H50z"/><path d="M54 14 h12 l4 8 H50z"/>
  <path d="M50 44 h20 M48 58 h24"/>
  <path d="M42 24 L26 18 M78 24 L94 18"/></g></svg>`,

buoy: `<svg viewBox="0 0 120 90" role="img" aria-label="buoy">
  <g class="ln"><path d="M46 60 l4-26 h20 l4 26z"/><path d="M50 34 l4-12 h12 l4 12"/>
  <path d="M60 22 V10"/><circle cx="60" cy="8" r="4"/>
  <path d="M42 60 h36"/>
  <path d="M12 70 c10-6 18 6 28 0 s18 6 28 0 18 6 28 0 12 2 12 2"/></g></svg>`,

valve: `<svg viewBox="0 0 120 90" role="img" aria-label="valve">
  <g class="ln"><path d="M34 34 l26 14 -26 14z"/><path d="M86 34 l-26 14 26 14z"/>
  <path d="M60 48 V24"/><path d="M42 20 h36"/><path d="M52 14 h16"/>
  <path d="M16 48 h18 M86 48 h18"/></g></svg>`,

pipe: `<svg viewBox="0 0 120 90" role="img" aria-label="pipe">
  <g class="ln"><path d="M28 34 h64 v22 H28z"/>
  <path d="M24 28 h8 v34 h-8z"/><path d="M88 28 h8 v34 h-8z"/>
  <path d="M28 40 h64 M28 50 h64" stroke-dasharray="5 5"/></g></svg>`,

compass: `<svg viewBox="0 0 120 90" role="img" aria-label="compass">
  <g class="ln"><circle cx="60" cy="45" r="30"/><circle cx="60" cy="45" r="24"/>
  <path d="M60 24 l8 21 -8 21 -8-21z"/>
  <path d="M60 15 v6 M60 69 v6 M30 45 h6 M84 45 h6"/></g></svg>`,

lifeboat: `<svg viewBox="0 0 120 90" role="img" aria-label="lifeboat">
  <g class="ln"><path d="M18 46 h84 l-12 22 H30z"/><path d="M18 46 l6-8 h72 l6 8"/>
  <path d="M40 38 v8 M60 38 v8 M80 38 v8"/>
  <path d="M10 76 c10-5 18 5 28 0 s18 5 28 0 18 5 28 0 12 1 12 1"/></g></svg>`,

funnel: `<svg viewBox="0 0 120 90" role="img" aria-label="funnel">
  <g class="ln"><path d="M44 78 l4-46 h24 l4 46z"/><path d="M46 32 h28"/>
  <path d="M36 78 h48"/><path d="M48 48 h24"/>
  <path d="M58 26 c-6-8 6-10 0-18" class="gray"/>
  <path d="M70 24 c-6-6 5-9 0-14" class="gray"/></g></svg>`,

piston: `<svg viewBox="0 0 120 90" role="img" aria-label="piston">
  <g class="ln"><path d="M32 14 h44 v62 H32z"/>
  <path d="M38 24 h32 v20 H38z"/>
  <path d="M38 30 h32 M38 36 h32"/>
  <path d="M54 44 v22"/><circle cx="54" cy="70" r="6"/></g></svg>`,

hatch: `<svg viewBox="0 0 120 90" role="img" aria-label="hatch">
  <g class="ln"><path d="M18 58 h84 v14 H18z"/>
  <path d="M24 30 h72 v28 H24z"/>
  <path d="M42 30 v28 M60 30 v28 M78 30 v28"/>
  <path d="M24 30 l8-10 h56 l8 10"/></g></svg>`,

boiler: `<svg viewBox="0 0 120 90" role="img" aria-label="boiler">
  <g class="ln"><rect x="30" y="22" width="60" height="48" rx="10"/>
  <path d="M30 34 h60 M30 58 h60"/>
  <path d="M60 22 V12"/><path d="M50 12 h20"/>
  <path d="M26 70 h68"/><circle cx="60" cy="46" r="7"/></g></svg>`,

deck: `<svg viewBox="0 0 120 90" role="img" aria-label="deck">
  <g class="ln"><path d="M12 52 h96"/><path d="M12 52 l10 20 h76 l10-20"/>
  <path d="M24 52 V38 h16 v14 M56 52 V32 h20 v20"/>
  <path d="M12 60 h96" class="gray"/></g></svg>`,

pliers: `<svg viewBox="0 0 120 90" role="img" aria-label="pliers">
  <g class="ln"><path d="M22 22 L58 42 M22 68 L58 48"/>
  <path d="M62 40 L102 28 M62 50 L102 62"/>
  <circle cx="60" cy="45" r="5"/>
  <path d="M22 22 a7 7 0 0 0-8 10 M22 68 a7 7 0 0 1-8-10"/></g></svg>`,

file: `<svg viewBox="0 0 120 90" role="img" aria-label="file">
  <g class="ln"><path d="M10 36 h26 v18 H10z"/>
  <path d="M36 34 h58 l12 11 -12 11 H36z"/>
  <path d="M46 34 l-6 22 M58 34 l-6 22 M70 34 l-6 22 M82 34 l-6 22 M94 34 l-6 22"/></g></svg>`,

chisel: `<svg viewBox="0 0 120 90" role="img" aria-label="chisel">
  <g class="ln"><path d="M12 30 h34 v30 H12z"/>
  <path d="M20 30 v30 M28 30 v30 M36 30 v30"/>
  <path d="M46 36 h30 v18 H46z"/>
  <path d="M76 38 l26 7 -26 7z"/></g></svg>`,

drill: `<svg viewBox="0 0 120 90" role="img" aria-label="drill">
  <g class="ln"><path d="M22 26 h50 v24 H22z"/>
  <path d="M72 30 h12 v16 H72z"/><path d="M84 34 h8 v8 h-8z"/>
  <path d="M92 36 h16 M92 40 h16"/>
  <path d="M30 50 h20 l-4 26 H26z"/>
  <path d="M50 40 h8 v6 h-8z"/></g></svg>`,

grinder: `<svg viewBox="0 0 120 90" role="img" aria-label="grinder">
  <g class="ln"><path d="M10 34 h48 a8 8 0 0 1 0 22 H10z"/>
  <path d="M20 34 v22 M30 34 v22"/>
  <path d="M58 36 h16 v18 H58z"/>
  <circle cx="90" cy="45" r="18"/>
  <path d="M74 27 a22 22 0 0 1 32 0"/></g></svg>`,

'vernier caliper': `<svg viewBox="0 0 120 90" role="img" aria-label="vernier caliper">
  <g class="ln"><path d="M18 40 h88 v10 H18z" fill="#fff"/>
  <path d="M18 40 v-20 h9 v20z" fill="#fff"/><path d="M18 50 v18 h9 v-18z" fill="#fff"/>
  <path d="M56 34 h22 v22 H56z" fill="#fff"/>
  <path d="M60 34 v-14 h8 v14z" fill="#fff"/><path d="M60 56 v14 h8 v-14z" fill="#fff"/>
  <path d="M34 40 v4 M42 40 v4 M50 40 v4 M86 40 v4 M94 40 v4"/></g></svg>`,

micrometer: `<svg viewBox="0 0 120 90" role="img" aria-label="micrometer">
  <g class="ln"><path d="M40 22 a26 26 0 0 0 0 44"/>
  <path d="M40 22 h8 v10 h-8z"/><path d="M40 56 h8 v10 h-8z"/>
  <path d="M48 41 h10 v6 H48z"/>
  <path d="M58 38 h14 v12 H58z"/>
  <path d="M72 34 h30 v20 H72z"/>
  <path d="M80 34 v20 M88 34 v20 M96 34 v20"/></g></svg>`,

'tape measure': `<svg viewBox="0 0 120 90" role="img" aria-label="tape measure">
  <g class="ln"><path d="M20 28 h46 a6 6 0 0 1 6 6 v22 a6 6 0 0 1-6 6 H20 a6 6 0 0 1-6-6 V34 a6 6 0 0 1 6-6z"/>
  <circle cx="42" cy="45" r="13"/><circle cx="42" cy="45" r="4"/>
  <path d="M72 40 h30 v10 H72z"/>
  <path d="M80 40 v5 M88 40 v5 M96 40 v5"/>
  <path d="M102 36 h6 v18 h-6z"/></g></svg>`,

rivet: `<svg viewBox="0 0 120 90" role="img" aria-label="rivet">
  <g class="ln"><path d="M38 34 a22 12 0 0 1 44 0z"/>
  <path d="M52 34 h16 v34 H52z"/>
  <path d="M46 68 h28"/>
  <path d="M20 56 h32 M68 56 h32" class="gray"/></g></svg>`,

screw: `<svg viewBox="0 0 120 90" role="img" aria-label="screw">
  <g class="ln"><path d="M34 24 h22 v14 H34z"/>
  <path d="M38 31 h14"/>
  <path d="M40 38 h10 v28 l-5 10 -5-10z"/>
  <path d="M40 44 h10 M40 51 h10 M40 58 h10"/></g></svg>`,

anchorless: '',
};
delete PICS.anchorless;
