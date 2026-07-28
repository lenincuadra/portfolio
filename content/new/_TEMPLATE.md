# [Nombre del feature o proyecto] — bitácora de input

> Instrucciones: este doc es la materia prima que yo (Claude) destilo al objeto v3.
> Escribí crudo — decisiones, citas, pivotes, frustraciones, errores, momentos de insight.
> NO es el case: es lo que me permite escribirlo bien sin inventar nada.
> Cuando esté listo, decime "destilá esto a un draft v3" y arrancamos.

---

## 1. Qué es y para quién

**Una oración:** [Qué es el feature/proyecto en lenguaje de diseño, no de ingeniería.]

**Audiencia del case:** [design/hiring | clientes | mixto]

**Tesis/ángulo elegido:** [La idea central que hace que este case valga la pena leer.
Ej: "la diana es tu embudo" — cada cv enviado = una flecha, cada anillo = una etapa.]

**Por qué no es técnico:** [Qué aspecto de diseño/craft/decisión se va a contar en vez del cómo fue implementado.]

---

## 2. Cronología — decisiones, pivotes, errores, insights

Escribí en orden cronológico. Para cada momento importante:

### [Fecha o etapa] — [nombre corto del momento]

**Qué pasaba:**
[El contexto. Qué problema o restricción tenías en ese momento.]

**Qué decidiste / hiciste:**
[La decisión, el experimento, el movimiento.]

**Por qué:**
[La razón real — no la racionalización posterior. Podés incluir citas textuales de lo que dijiste/pensaste.]

**Qué salió:**
[El resultado inmediato — funcionó, no funcionó, sorprendió.]

**Si hubo pivote:**
[Qué cambió de rumbo y por qué. Esto es oro para el case.]

> Repetí este bloque para cada momento que vale la pena contar.
> No hay mínimo ni máximo. Más contexto = mejor case.

---

## 3. Assets — inventario antes de escribir

Llenás esta tabla **antes de escribir la sección**. Si el asset no existe todavía, es una señal de que falta capturarlo o exportarlo — no de que podés escribir la sección igual y ver después.

**Cover** (obligatorio):
- Muestra: [el artefacto principal en su estado más acabado — NO el loading state, NOT el before]
- Archivo destino: `assets/images/<slug>/cover.webp`
- Estado: [existe | pendiente exportar | pendiente capturar]

**Secciones** (una fila por sección que necesite imagen o video):

| Sección | Tipo | Qué muestra / qué afirmación prueba | Nombre destino | Estado |
|---------|------|--------------------------------------|----------------|--------|
| [id de sección] | image/video/slider | [qué se ve + qué afirmación del h3 soporta] | `<slug>/<nombre-semántico>.webp` | existe / pendiente |

> **Reglas de nombre**: semántico, sin hashes de commit, sin números de paso internos. `funnel-legend.webp`, no `08-funnel-legend-real-app-use-01a29b9-playground.png`. Minúsculas, guiones.
>
> **Formatos**: WebP para imágenes/screenshots. Video: `.webm` + `.mp4` (mismo nombre base) + poster `.png`. Si tenés un `.png` crudo, convertí con `sips -s format webp <archivo>.png --out <nombre>.webp` antes de moverlo.
>
> **Carpeta destino**: `assets/images/<slug>/` — nunca dejar assets en la carpeta de trabajo cruda.

---

## 4. Resultado final

**Qué existe hoy** (lo que se puede ver/mostrar):
[El output concreto — pantalla, video, flujo, métrica.]

**Qué cambió para el usuario/equipo:**
[El impacto. No necesita ser una métrica dura si no la tenés. "Antes X, ahora Y" alcanza.]

---

## 5. Lo que NO va en el case

[Listá aquí cualquier cosa técnica, interna o confusa que sabés que está en la bitácora pero no tiene lugar en el case. Me ayuda a no incluirla aunque aparezca en el material.]

---

## Notas sueltas / citas / capturas de pantalla

[Cualquier cosa que no encaje arriba pero puede ser útil. Capturas de conversaciones, comentarios del equipo, textos de error, etc.]
