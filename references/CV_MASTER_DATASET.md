# CV MASTER DATASET — Pablo (reporte bruto para generar CV LaTeX + Portfolio)

> **Objetivo:** Este documento recopila TODA la información “vendible” (experiencia, skills, logros, keywords y narrativa) para que un agente posterior genere CVs en LaTeX (ES/EN) y otro agente genere el portfolio web.
> **Nota:** Mantener todo **honesto**. Donde haya dudas, se marca como “(confirmar)”.

---

## 0) Identidad y contacto (placeholders)

- **Nombre y apellidos (según usuario):** Pablo Samuel García-Zarandieta Martínez
- **Ubicación:** Madrid, España
- **Email:** pgzarandieta@hotmail.com
- **Teléfono:** +34 608540496
- **LinkedIn:** www.linkedin.com/in/pablo-samuel-garcía-zarandieta-martínez-940240137
- **Portfolio:** {{PORTFOLIO_URL}} _(pendiente de crear)_

---

## 1) Perfiles objetivo (prioridad) + enfoque

1. **Ingeniería de Sistemas (Aeroespacial / Drones)**
2. **DevOps / Platform orientado a despliegue e integración de agentes IA**
3. **Ingeniero Mecánico (diseño / prototipado / industrialización)**
4. **Analista de Datos (ETL / dashboards / BI)**
5. **Gestión de Configuración (CM / Change process / PLM)**

---

## 2) Situación actual y disponibilidad

- **Formación:** Grado en Ingeniería Aeroespacial (UPM), fin previsto **09–10/2026**.
- **Disponibilidad:** Puede empezar **ya** a tiempo completo (compatible con cierre de carrera).
- **Relocalización:** Disponible desde **sep–oct** (Europa + grandes ciudades de España + abierto a internacional global).
- **Modalidad:** Presencial OK; híbrido/remoto también deseable.
- **Permiso de trabajo:** Ciudadano de España → puede trabajar en la **UE** sin visado/sponsorship. Para fuera de la UE: por definir según país.

---

## 3) Elevator pitch (material base) — ES / EN

### ES (base)

Ingeniero aeroespacial (fin 2026) con **~2 años de experiencia** en **gestión de configuración y procesos de cambio** en un entorno Airbus altamente exigente (programa Eurodrone), y participación como “cliente” en el desarrollo/rollout de una plataforma interna basada en 3DEXPERIENCE: definición de requisitos, validación/UAT, formación y soporte post-despliegue. También hice prácticas de **data analytics** (Skywise/Foundry) construyendo un data product (pipeline + dashboard) para análisis de BOM y trade-offs, y mantengo un proyecto personal de **platform engineering self-hosted** (SSO, reverse proxy, CI/CD y agentes LLM). Perfil muy curioso, proactivo y orientado a mejorar procesos/herramientas; cómodo aprendiendo rápido y entrando en dominios nuevos (datos, infra, automatización).

### EN (base)

Aerospace engineering graduate (expected 09–10/2026) with ~2 years of experience in configuration management and change processes in a high-rigor Airbus environment (Eurodrone), including a “customer-side” role for an internal platform rollout (requirements, UAT/validation, training and hypercare). I also completed a data analytics internship (Skywise/Foundry) building a BOM trade-off data product (pipeline + dashboard), and I run a self-hosted platform engineering homelab (SSO, reverse proxy, CI/CD and LLM agents). Highly curious and proactive; enjoys improving tools and processes and is comfortable ramping up fast across domains (data, infra, automation).

---

## 4) Experiencia profesional (CV-ready, con bullets y logros)

### 4.1 Airbus (contractor via ALTEN) — Configuration Management / Change Process (Eurodrone + One Platform / 3DEXPERIENCE) | Getafe (Madrid) | 08/2023–09/2025

**Contexto:** Programa Eurodrone + iniciativa interna "One Platform" (transformación de procesos). Entorno de alta exigencia (rigor, trazabilidad, compliance).  
**Scope personal:** Change Process + configuración + Equipment Release / teams management + UAT + training/adoption.

**Rol real (honesto):**

- Inicio: soporte directo a Configuration Manager del programa (day-to-day CM + preparación de artefactos/documentación para change process).
- Evolución: rol "customer-side" en One Platform para aterrizar procesos (change/equipment release) a reglas implementables en 3DEXPERIENCE, validar entregas (UAT) y formar usuarios.

**Responsabilidades clave (bullets para CV):**

- Convertir procesos de alto nivel (change process, equipment release) en **use cases**, requisitos verificables y **criterios de aceptación** (dossiers/Confluence), alineando con functional architects/expertos 3DEXPERIENCE.
- Ejecutar **UAT end-to-end** como cliente (incl. **negative testing** y escenarios de bypass), reportando defects/IRs en Jira y retesteando en releases sucesivas.
- Contribuir al hardening del Equipment Release: revisiones, states/gates, atributos obligatorios y reglas para evitar releases "hackeables" y preservar trazabilidad entre vistas.
- Exposición práctica a enfoque **multi-view** (requirements/logical/equipment/technical/design/service views) y a cómo se gobierna con baselines + change process. _(sin rol formal puro de SysEng)_
- Participar en el paso de un flujo **doc-centric** (PPT/SharePoint + duplicidades) a un flujo **data-centric** integrado en herramienta (objetos + visualización), mejorando trazabilidad y consistencia.
- Soporte operativo ("hypercare"): desbloqueo de usuarios y resolución de incidencias funcionales durante la adopción en Getafe.
- Diseñar e impartir formaciones prácticas (entorno de práctica + ejercicios guiados) para ingeniería de sistemas, diseño y CM.

**Impacto / logros (con escala):**

- Participación en el **go-live inicial** (primeras funcionalidades desplegadas en productivo) dentro del rollout de One Platform.
- Slice representativo (Equipment Release): **15+** bugs/IRs detectados/gestionados; ciclo fix→retest a lo largo de **~4–5 releases**. _(cifras aprox.; sin inflar)_
- Formación y adopción en Getafe: **~175 personas** (≈80 SysEng + ≈80 Design + ≈15 CM), en grupos de **10–15**; **~32 sesiones** en fase intensiva **sep 2024 → mar 2025** + sesiones bajo demanda posteriores.
- Punto de contacto local para acelerar adopción y reducir resistencia inicial (señales claras de mejora en ~2 meses tras go-live).

**Herramientas / entorno:**

- 3DEXPERIENCE (PLM) + app de change process altamente customizada (describir sin detalles sensibles).
- Jira / Confluence.
- Entorno Scaled Agile / SAFe (epic → business release → dossier → UAT/test campaign → release). _(mencionar SAFe solo si conviene)_

**Cómo contarlo públicamente (safe):**  
"Customer-side CM/Change en un rollout de plataforma PLM (3DEXPERIENCE) dentro de una iniciativa corporativa de transformación; foco en requisitos, UAT end-to-end, training y adopción."

**Tamaño de entorno (para contexto):**

- Subentorno de trabajo directo (config + "teams management"): ~14 personas (7 internos + 7 externos).
- Programa global: multi-dominio (sistemas, diseño, manufacturing, work prep, customer services, ERP, etc.).

---

### 4.2 Airbus — Data Analytics Intern (Skywise / Palantir Foundry) | Getafe (Madrid) | 02/2023–08/2023

**Contexto:** Data analytics orientado a toma de decisiones de ingeniería (trade-off analysis de cambios / campañas de reducción de peso) sobre estructuras de producto/BOM del A320 (HTP/VTP), filtradas por **MSN** o por **aplicabilidad/configuración**.

**Stack (alto nivel):** Airbus Skywise (Palantir Foundry) — pipelines tipo "bloques" + **PySpark/SQL** + dashboards.

**Entregables tangibles (para CV):**

- Construí un **data product** (pipeline + dashboard) para filtrar por **MSN** o **aplicabilidad/configuración**, reconstruir y navegar la **BOM** del HTP/VTP, contar instancias de **standard parts** (por código) y calcular **peso total** y **delta de peso** en escenarios antes/después (sustitución estándar A→B).
- Reverse-engineering del modelo de datos legacy: exploración de tablas/relaciones y cómo reconstruir la BOM (assembly → subassembly → part → standard part).
- Implementación de pipeline en Foundry/Skywise: filtros, joins y agregaciones; publicación de datasets listos para consumo por dashboard.
- Integración con catálogo de estándares (peso unitario/material) para enriquecer el análisis.

**Calidad de datos / validación (STAR):**

- Validé resultados contra fuente legacy (export CSV) y generé un **reporte de diferencias** con script reproducible.
- Caso representativo: BOM ~**1000** ítems; detecté falta de **~10–15** instancias de un estándar, suficiente para sesgar conteos/peso; escalado al equipo dueño del DB bank con repro + scripts.

**Colaboración / delivery:**

- Trabajo en tándem con product owner/mentor (modelo ~50/50): yo implementé primeras versiones + validación; el owner revisaba/estandarizaba.
- Demos internas y presentación al departamento; entregable **implementado, testeado y listo para pilotaje**. _(Mi etapa terminó antes de recibir feedback sostenido de usuarios finales.)_
- Nota TFG: parte del trabajo se planteó como base de TFG pero no se completó. _(confirmar si conviene mencionarlo en CV)_

---

## 5) Experiencia universitaria relevante

### 5.1 Universidad Politécnica de Madrid (UPM) — Grado en Ingeniería Aeroespacial | fin previsto 09–10/2026

- **Especialidad:** Propulsión.
- **Áreas fuertes:** termodinámica, transporte de calor y masa, materiales/superaleaciones, fundamentos de propulsión.
- **Iniciativa personal:** proyectos prácticos extra (MATLAB, librerías de ecuaciones diferenciales, etc.).
- **Programación:** base sólida; cómodo entrando en Python / C / C++ y MATLAB.
- **Interés/hands-on:** proyectos Arduino/ESP32/Raspberry Pi; montaje de dron por componentes (tuneo de parámetros pendiente).

### 5.2 UPM Racing (Formula Student) — Equipo Formula Student | 09/2020–12/2023

**Contexto:** Equipo (~20–25 personas) que diseña, fabrica y valida un monoplaza bajo normativa Formula Student; ciclo anual end-to-end (requisitos → diseño → fabricación → ensayos → competición).

**Etapas y roles (CV-ready):**

- 09/2020–09/2021: Cantera — coche RC (Arduino + Bluetooth): integración hardware/software, máquina de estados, impresión 3D; introduje Git/source control en el grupo.
- 09/2021–09/2022: Suspension & Dynamics — rodajes, pre/post checklists, setups (balance bar, anti-roll bar, etc.), mantenimiento frenos; diseño conceptual de actuadores driverless (dirección/freno).
- 09/2022–08/2023: Vehicle CAD/3D + "Change/Config" coordinator — gobernanza CAD en 3DEXPERIENCE cloud (skeleton, permisos por divisiones, revisiones, impacto, interfaces) + soporte fabricación/planos.
- 09/2023–12/2023: Handoff / mentor — formación práctica (sept–dic) + documentación + workflow (release + change process simplificado).

**Highlights (mecánico / DFM):**

- Rediseño del sistema pedal/freno tras fallo crítico en "stomp test": CAD, interfaces/tolerancias desde datasheets, planos; adaptación a diseño fabricable en mecanizado **3 ejes** y coordinación de anclajes permitidos con chasis (integridad estructural).
- Colaboración con compañero en análisis/optimización (FEA + topología básica) para iterar geometría → fabricación → montaje → re-ensayo.

**Highlights (CAD / configuración / proceso):**

- Definí reglas de trabajo para evitar "romper el CAD" y habilitar colaboración: impact analysis obligatorio, metodología skeleton, trabajo en contexto, permisos, revisiones y flujo de integración tipo ramas→merge.
- Lección aprendida y corrección de naming policy (evitar renombrados por año); campaña de actualización de planos/cajetines con plantilla común.
- Gestión de interfaces: detección de interferencia Aero vs Chasis por falta de visibilidad cross-división; ajuste del workflow para coordinación durante rediseños.
- Diseñé un "change process" simplificado (decision gates + impacto cross-división) inspirado en prácticas industriales.

**Competición / comunicación:**

- Participación en competiciones internacionales (Hungría 2022, Rep. Checa 2023): inspección técnica, pruebas y operación/logística de despliegue.
- Defensa ante jueces: Design Event (suspensión/dinámica) y Cost Event (modelo de costes con manufacturing BOM: operaciones, tiempos, perfiles).
- Nota honesta: los bloqueos del accumulator en scrutineering 2022/2023 no estaban bajo mi ownership técnico directo.

**Stack / herramientas:**  
3DEXPERIENCE (CAD/PLM) · Altair Inspire (FEA/topología básica) · Inkscape (planos/cajetín) · Arduino · Git · Taller (soldadura, torno, fresadora) · Impresión 3D

---

## 6) Formación extra (Data)

- LSE (London School of Economics) _(confirmar nombre exacto)_ — Summer Intensive (1 mes): **Introducción a Data Science**
  - Programación en **R**, fundamentos de **SQL**, procesado de datos, regresión lineal, introducción a ML (incl. mención muy superficial de NN para dígitos).
  - Posicionamiento recomendado: “foundations / data analytics basics”, no “ML engineer”.

---

## 7) Idiomas

- Español: Nativo.
- Inglés: **C2 (Cambridge Proficiency)** + trabajo diario en entorno internacional (reuniones/documentación).
- Francés: ~B1 (oxidado; vender como “intermedio” con nota de poca práctica reciente).
- Portugués: básico (cuatrimestre online con Brasil durante COVID).

---

## 8) Skills y herramientas (inventario honesto + nivel)

### 8.1 Datos / programación

- Python: pandas, ETL (incl. extracción PDF→tabla), scripting para validación/diffs, FastAPI (APIs), visualización básica. **Nivel: Intermedio.**
- Jinja2 + HTMX: UI server-rendered (proyecto personal). **Nivel: Básico–Intermedio.**
- PySpark: transforms/joins/aggregations en Skywise/Foundry. **Nivel: Básico–Intermedio.**
- Palantir Foundry / Skywise: pipelines + datasets + dashboards (data product). **Nivel: Básico–Intermedio.**
- SQL: uso práctico (vía proyectos / plataformas), modelado básico. **Nivel: Básico–Intermedio.**
- R: fundamentos (curso LSE). **Nivel: Básico.**
- MATLAB: scripts, librerías (ODEs, etc.). **Nivel: Intermedio.**
- C/C++: base sin miedo a entrar; uso por proyectos. **Nivel: Básico.**

### 8.2 Ingeniería (CAD / simulación / fabricación)

- 3DEXPERIENCE / CATIA (colaborativo, revisiones, assemblies; contexto PLM). **Nivel: Intermedio.**
- Diseño CAD paramétrico + metodología skeleton. **Nivel: Intermedio.**
- Simulink: modelos básicos; algo de Simscape/physical modelling; integración básica con hardware (Raspberry). **Nivel: Básico.**
- FEA + optimización topológica (Altair Inspire): experiencia básica aplicada. **Nivel: Básico.**
- Fabricación (taller): soldadura, torno, fresadora (nivel práctico). **Nivel: Básico–Intermedio.**
- Impresión 3D: experiencia personal desde los 18 años. **Nivel: Intermedio.**

### 8.3 Configuración / procesos

- Configuration Management (CM) + Change Process: experiencia real 2 años (soporte + cliente de herramienta + adopción). **Nivel: Intermedio (con contexto exigente).**
- Requisitos/ingeniería de sistemas: exposición práctica por CM y “teams management”, sin rol formal puro de SysEng. **Nivel: Básico–Intermedio.**
- Formación / enablement: preparación de material, demos, ejercicios, soporte a usuarios. **Nivel: Avanzado (por volumen).**
- Gestión de stakeholders: coordinación con perfiles técnicos y usuarios; contexto Agile/SAFe. **Nivel: Intermedio.**

### 8.4 Dev / infra / platform (proyectos personales)

- Git: uso continuo (repos personales, flujos de trabajo). **Nivel: Intermedio.**
- Linux: uso diario; troubleshooting; compilación desde source (ej. kernel/driver). **Nivel: Intermedio.**
- Contenedores: Podman + Podman-Compose por stacks; Dockerfiles cuando toca. **Nivel: Intermedio.**
- Reverse proxy (Nginx): publicación por subpaths, routing básico. **Nivel: Básico–Intermedio.**
- Acceso remoto: Tailscale (tailnet) + TLS con certificados Tailscale. **Nivel: Intermedio.**
- SSO/IAM: Authentik (OIDC; SAML/Forward Auth planificado). **Nivel: Básico–Intermedio.**
- CI/CD self-hosted: Forgejo workflows, registry, runners (incl. automatización con bots). **Nivel: Básico–Intermedio.**
- IoT: Arduino, ESP32, Raspberry Pi GPIO; Home Assistant + ESPHome (despliegues y pruebas). **Nivel: Básico–Intermedio.**

---

## 9) Proyecto personal principal (DevOps/Platform + agentes) — Homelab / Platform Engineering (self-hosted)

**Periodo:** 06/2025–presente _(activo a 02/2026)._  
**Descripción vendible:** Homelab self-hosted con SSO, publicación segura (HTTPS), despliegues reproducibles por stacks y automatización con CI/CD; incluye integración de agentes LLM en el workflow de Forgejo (issue → PR → review → patch).

**Plataforma:**

- Host: PC sobremesa (AMD Ryzen 7 5700G, ~32 GB RAM, ASRock B550M Pro4).
- OS: Fedora Server.
- Runtime: Podman + Podman-Compose.
- Storage: OS en SSD M.2; `infra+data` en SSD externo 1 TB; segundo SSD externo 1 TB reservado para backups futuros (aun no implementados).

**Networking / seguridad:**

- Acceso remoto: Tailscale (tailnet).
- TLS: certificados Tailscale.
- Reverse proxy: Nginx (publicación por subpaths).
- DNS local: Pi-hole para resolver URLs HTTPS del tailnet dentro de la red local.

**SSO / IAM:**

- Authentik como IdP: OIDC (actual), SAML (planificado), Forward Auth/Outpost (para apps detrás de proxy).
- Control de acceso por grupos + scope mappings (admin/user).

**Suites / servicios (uso real multiusuario):**

- Office suite: Nextcloud + Collabora (SSO; 3 usuarios) y Joplin Server (4 usuarios; SSO pendiente).
- DevTools suite: Forgejo + registry + runners (2); entornos code-server (IDE general y LaTeX) protegidos por Forward Auth.
- Finance suite: Firefly III + Metabase; app propia "Finance ETL Console" para importar extractos y evitar duplicados (SSO OIDC + integración API con Firefly).

**Proyecto propio destacado — Finance ETL Console:**

- Stack: FastAPI (API) + Jinja2/HTMX (UI) + core Python + SQLite (estado de runs).
- Parsers (según soporte actual): Trade Republic (PDF), MyInvestor (CSV), Imagin/Caixa (CSV).
- Funcionalidad: upload extracto → validar + deduplicar (local + contra Firefly vía API) → "finalize" y push a Firefly → trazabilidad para siguientes runs.
- Release/deploy: tag → build → publish a registry de Forgejo → update de tag en compose.

**Agentes LLM integrados en Forgejo (Dev workflow):**

- 2 bots: implementador + revisor; activación por comentarios (`run/plan`, `run/exec`, `run/review`, `run/patch`) y ejecución en runners.
- Flujo: epic/issues → plan → exec (PR) → review → patch iterativo → merge humano final.
- Gaps honestos (ya detectados): guardrails de coste (hubo un runaway loop ~20€ en una noche), bug en contador de iteraciones, hardening de runners y backups aún sin implementar.

**Roadmap técnico (prioridades para "hacerlo vendible" fuerte):**

- Backups (MVP) + restore test documentado; evolucionar hacia 3-2-1.
- Autostart (systemd/quadlets) + estandarizar redes Podman para proxying consistente.
- Unificar secrets/vars (org vs repo) y documentar estándar.
- Cerrar puertos directos IP:puerto y pasar todo por Nginx.
- Observabilidad ligera (logs/alertas básicas) + hardening runners (mínimo privilegio).

**Ideas futuras (opcional):**

- Smart Home stack (no desplegado actualmente): Home Assistant + ESPHome + MQTT; control puerta garaje con ESP32.
- Asistente IA para FreeCAD orientado a buenas prácticas de diseño paramétrico.
- Mini-PLM/gestión de cambios para FreeCAD (trazabilidad, revisiones, configuración).

---

## 10) Actividades extra / deporte (alto rendimiento)

- Hockey (alto rendimiento):
  - Selección nacional: 1 vez U18, 2 veces U20, 1 vez senior + preolímpico.
  - Evento internacional en Belgrado: oro y ascenso (categoría).
  - Rol habitual: “2º asistente” (liderazgo de apoyo, comportamiento ejemplar, soporte a capitanía).
  - Disciplina: entrenos 3–4/semana (horario nocturno exigente) + viajes por España (fines de semana).
  - Valor vendible: resiliencia, trabajo en equipo, presión, feedback de entrenador, constancia.

---

## 11) Voluntariado (opcional en CV)

- Acciones puntuales (varias ocasiones): recogida de alimentos (supermercado), apoyo en centro de día / personas sin techo, campañas de recogida (iglesia).

> Recomendación: incluir solo si el CV necesita “humanidad” o si el puesto lo valora; si no, omitir para priorizar densidad técnica.

---

## 12) Keywords ATS por perfil (para versiones de CV)

### 12.1 Ingeniería de Sistemas (Aero/drones)

- Systems engineering, requirements, traceability, multi-view (requirements/logical/equipment/design/service), configuration baselines, change control, interface management, stakeholders, verification & validation (V&V), process compliance, safety/rigor, multi-domain integration, PLM.

### 12.2 DevOps / Platform + agentes IA

- Self-hosted platform, platform engineering, containers (Podman/Docker), compose stacks, reverse proxy (Nginx), SSO/IdP (Authentik), OIDC, SAML, CI runners, container registry, automation workflows, Infrastructure as Code, secure remote access (Tailscale/VPN), AI agents integration, PR automation.

### 12.3 Ingeniero Mecánico

- CAD parametric design, skeleton methodology, assemblies, design reviews, design for manufacturing, tolerancing & interfaces, 3-axis machining constraints, FEA basics, topology optimization, manufacturing (welding/lathe/mill), testing/track data, mechanisms, brake system, suspension setup.

### 12.4 Data analyst

- ETL, data cleaning, SQL, Python (pandas), PySpark, dashboards, data pipelines, data validation/data quality, R basics, product structure/BOM analytics, applicability/MSN filtering, weight/delta analysis, Palantir Foundry / Skywise.

### 12.5 Configuration Management

- CM, change process, PLM (3DEXPERIENCE), product configuration, baselines, release gates, documentation readiness, UAT end-to-end, negative testing, defects/IRs tracking, audits/compliance mindset, training & adoption, customer-side requirements for CM tooling.

---

## 13) Portfolio web — plan recomendado (para agente web)

### 13.1 Estructura del sitio (simple y potente)

- Home: “Systems / CM / Platform” tagline + 3 highlights + CTA a LinkedIn.
- About: historia corta (Airbus Eurodrone CM + platform rollout + Formula Student + homelab).
- Projects (case studies, 5–7):
  1. “Eurodrone CM + One Platform (customer-side)” — requisitos → UAT end-to-end → training (~175 personas).
  2. “Homelab / Platform Engineering (self-hosted)” — SSO + reverse proxy + CI/CD + suites (Office/DevTools/Finance).
  3. “LLM agents in Forgejo” — issue → plan/exec/review/patch → PR (guardrails de coste + lecciones aprendidas).
  4. “Airbus data internship” — trade-off analysis sobre BOM A320 (HTP/VTP): pipeline PySpark/SQL + dashboard.
  5. “Formula Student” — brake redesign (DFM + tolerancias) + gobernanza CAD (3DEXPERIENCE cloud) + handoff/training.
  6. “Finance ETL Console” — parsers CSV/PDF + dedupe + integración API con Firefly + despliegue en homelab.
  7. (Opcional) “IoT / Smart Home” — Home Assistant + ESPHome + ESP32 (cuando haya prototipo sólido).
  8. (Opcional) “FreeCAD AI assistant / mini-PLM concept” — visión + prototipo (cuando exista).
- Resume: link a PDF (ES/EN) generado por agente.
- Contact: email + LinkedIn.

### 13.2 Qué debe incluir cada case study (plantilla)

- Contexto (problema real)
- Mi rol y responsabilidades
- Stack (tools)
- Decisiones / tradeoffs
- Resultado e impacto (números si hay)
- Screenshots/diagramas
- Lo que aprendí + próximos pasos

**Fuentes (case studies en repo):**

- `Case studies/EURODORNE - CM & OnePlatform/Case Study — Eurodrone CM + One Platform (3DEXPERI.md`
- `Case studies/Airbus Internship - Data Analytics/Case Study — Airbus Internship_ Data Analytics for.md`
- `Case studies/Homelab & Platform Engineering/Case Study — Homelab & Platform Engineering (Sabar.md`
- `Case studies/UPM Racing (Formula Student)/Case Study — UPM Racing (Formula Student) _ 09_202.md`

---

## 14) Confirmaciones (cerrado)

- **Nombre legal:** Pablo Samuel García-Zarandieta Martínez (confirmado).
- **Experiencia Airbus (08/2023–09/2025):** listar como `Airbus (contractor via ALTEN)` (confirmado).
- **Nombres publicables:** se puede mencionar `Eurodrone` y `One Platform`; evitar `MVP1` (confirmado).
- **Training/adopción (Getafe):** ~175 personas, ~32 sesiones, periodo intensivo `sep 2024 → mar 2025` (confirmado).
- **UAT (slice Equipment Release):** `15+` bugs/IRs y ~4–5 releases (confirmado).
- **Internship datos (02/2023–08/2023):** PySpark uso real; se puede mencionar `Airbus Skywise (Palantir Foundry)` y `A320 (HTP/VTP)` (confirmado).
- **Homelab:** inicio `06/2025`; OS en SSD M.2; `infra+data` en SSD externo 1 TB; segundo SSD externo 1 TB reservado para backups futuros; Firefly/Joplin sin SSO actualmente (confirmado).
- **Smart Home / inversor solar:** describir genérico y como no desplegado actualmente (confirmado).

---
