#!/usr/bin/env node
// =============================================================================
// NEW LINK — genera un link trackeado (y opcionalmente personalizado) por
// aplicación, y lo registra en tracking-registry.md (privado, gitignoreado).
//
//   node scripts/new-link.js "<empresa>" [--quien "..."] [--canal "..."]
//                            [--focus payments|ai|conversion] [--dry]
//
// Hace lo que antes era manual:
//   1. Genera un código opaco con el formato que parsea go.html
//      (MMDD + letra + dígito 2-9, ej. 0705k3), chequeando colisiones
//      contra el registro.
//   2. Arma las dos URLs (sufijo P = link al portfolio, L = a LinkedIn)
//      con &focus=<perfil> si se pidió personalización (el perfil solo
//      revela industria, nunca la empresa — ver data/profiles.js).
//   3. Agrega la fila al registro privado. --dry imprime sin escribir.
//
// El código es lo ÚNICO que viaja en la URL y en el mail de tracking;
// la empresa solo existe en tracking-registry.md (local).
// =============================================================================

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
// Mantener igual a BASE de scripts/seo-build.js (docs/seo.md §cambio de dominio)
const BASE = 'https://lenincuadra.github.io/portfolio/';
const REGISTRY = path.join(ROOT, 'tracking-registry.md');

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf('--' + name);
  return i !== -1 ? args[i + 1] : '';
};
const dry = args.includes('--dry');
const company = args.find((a) => !a.startsWith('--') && args[args.indexOf(a) - 1] !== '--quien'
  && args[args.indexOf(a) - 1] !== '--canal' && args[args.indexOf(a) - 1] !== '--focus');

if (!company) {
  console.log('Uso: node scripts/new-link.js "<empresa>" [--quien "..."] [--canal "..."] [--focus payments|ai|conversion] [--dry]');
  process.exit(1);
}
if (!fs.existsSync(REGISTRY)) {
  console.log('✗ No existe tracking-registry.md (es privado y local; ver .gitignore).');
  process.exit(1);
}

const focus = flag('focus');
if (focus) {
  const P = new Function(fs.readFileSync(path.join(ROOT, 'data', 'profiles.js'), 'utf8') + '; return PORTFOLIO_PROFILES;')();
  if (!P.profiles[focus]) {
    console.log(`✗ Perfil "${focus}" no existe en data/profiles.js. Válidos: ${Object.keys(P.profiles).join(', ')}`);
    process.exit(1);
  }
}

// Código opaco: MMDD + letra + dígito 2-9 (formato que parsea go.html).
const registry = fs.readFileSync(REGISTRY, 'utf8');
const now = new Date();
const mmdd = String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
let code;
do {
  const letter = 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
  const digit = '23456789'[Math.floor(Math.random() * 8)];
  code = mmdd + letter + digit;
} while (registry.includes(code));

const urlPortfolio = `${BASE}go.html?ref=${code}P${focus ? `&focus=${focus}` : ''}`;
const urlLinkedIn = `${BASE}go.html?ref=${code}L&dest=linkedin`;

const fecha = now.toISOString().slice(0, 10);
const row = `| ${code} | ${company} | ${flag('quien') || '—'} | ${flag('canal') || '—'} | ${fecha} | P/L | ${urlPortfolio} | activo |`;

console.log(`Código:    ${code}  (empresa solo en el registro privado)`);
console.log(`Portfolio: ${urlPortfolio}`);
console.log(`LinkedIn:  ${urlLinkedIn}`);
if (focus) console.log(`Perfil:    ${focus} (el que entra ve esa primera pantalla)`);
console.log('');

if (dry) {
  console.log('(--dry: no se escribió el registro)');
} else {
  fs.appendFileSync(REGISTRY, row + '\n');
  console.log('✓ Registrado en tracking-registry.md. Acortar con bit.ly si va en un CV.');
  console.log('  El mail de tracking va a mostrar el código; la empresa se busca acá.');
}
