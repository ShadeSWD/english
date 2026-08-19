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
  <g class="ln"><path d="M26 78 L66 38" stroke-width="5"/>
  <path d="M60 20 h22 a4 4 0 0 1 4 4 v14 a4 4 0 0 1-4 4 H60z"/>
  <path d="M60 20 l-14 8 v10 l14 8z"/></g></svg>`,

spanner: `<svg viewBox="0 0 120 90" role="img" aria-label="spanner">
  <g class="ln"><path d="M40 62 L80 24" stroke-width="6"/>
  <path d="M34 78 a12 12 0 1 1-14-16 l8 8 -3 6 6 -3z"/>
  <path d="M86 12 a12 12 0 1 1 14 16 l-8-8 3-6 -6 3z"/></g></svg>`,

screwdriver: `<svg viewBox="0 0 120 90" role="img" aria-label="screwdriver">
  <g class="ln"><rect x="16" y="34" width="34" height="22" rx="7"/>
  <path d="M50 40 h16 v10 H50z"/><path d="M66 41 h26 v8 H66z"/>
  <path d="M92 40 l12 5 -12 5z"/><path d="M24 34 v22 M32 34 v22 M40 34 v22"/></g></svg>`,

saw: `<svg viewBox="0 0 120 90" role="img" aria-label="saw">
  <g class="ln"><path d="M18 26 h64 l14 12 -14 12 H18z" fill="none"/>
  <path d="M18 50 l7 8 7-8 7 8 7-8 7 8 7-8 7 8 7-8 7 8 7-8"/>
  <path d="M96 38 h8 a6 6 0 0 1 0 12 h-8"/></g></svg>`,

bolt: `<svg viewBox="0 0 120 90" role="img" aria-label="bolt">
  <g class="ln"><path d="M24 30 l10-8 h20 l10 8 v30 l-10 8 H34 l-10-8z"/>
  <path d="M64 34 h34 v22 H64z"/>
  <path d="M70 34 v22 M78 34 v22 M86 34 v22 M94 34 v22"/></g></svg>`,

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

anchorless: '',
};
delete PICS.anchorless;
