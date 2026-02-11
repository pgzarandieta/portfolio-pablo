import type { Project } from '../../content/schema';
import type { Locale } from './locale';

type ProjectCopy = Pick<Project, 'title' | 'summary' | 'tags'>;

const projectOverrides: Partial<Record<Locale, Record<string, ProjectCopy>>> = {
  es: {
    'one-platform': {
      title: 'Despliegue MVP1 One Platform',
      summary: 'Requisitos cliente, UAT y formación para tooling de CM.',
      tags: ['CM', 'UAT', '3DEXPERIENCE'],
    },
    'eurodrone-cm': {
      title: 'Gestión de Configuración Eurodrone',
      summary: 'Soporte CM del programa, readiness de cambios y trazabilidad documental.',
      tags: ['CM', 'Control de Cambios', 'Trazabilidad'],
    },
    'homelab-platform': {
      title: 'Plataforma self-hosted',
      summary: 'SSO + Forgejo + automatización CI en servidor doméstico.',
      tags: ['DevOps', 'Contenedores', 'SSO'],
    },
    'ai-agents-ci': {
      title: 'Agentes IA en CI',
      summary: 'Automatización issue→PR con bots y workflows.',
      tags: ['Automatización', 'CI/CD', 'Agentes'],
    },
    'finance-etl-console': {
      title: 'Consola ETL de Finanzas',
      summary: 'Importaciones bancarias automáticas en Firefly III con dedupe y OIDC.',
      tags: ['ETL', 'Finanzas', 'FastAPI'],
    },
    'airbus-data': {
      title: 'Prácticas de datos en Airbus',
      summary: 'Analítica de BOM/estructura de producto con pipelines ETL.',
      tags: ['ETL', 'Dashboards', 'Skywise'],
    },
    'formula-student': {
      title: 'Formula Student',
      summary: 'Coordinación CAD, control de configuración y defensa en competición.',
      tags: ['CAD', 'Configuración', 'Motorsport'],
    },
    'formula-brake-redesign': {
      title: 'Formula Student — Rediseño de freno',
      summary: 'Rediseño crítico del sistema de freno para fabricar y fiabilidad.',
      tags: ['Frenos', 'CAD', 'Fabricación'],
    },
    'iot-home': {
      title: 'Automatización del hogar + IoT',
      summary: 'Home Assistant, ESPHome y monitorización de inversor solar.',
      tags: ['IoT', 'Home Assistant', 'ESP32'],
    },
  },
  zh: {
    'one-platform': {
      title: 'One Platform MVP1 上线',
      summary: '客户侧需求、UAT 与 CM 工具培训。',
      tags: ['配置管理', 'UAT', '3DEXPERIENCE'],
    },
    'eurodrone-cm': {
      title: 'Eurodrone 配置管理',
      summary: '项目 CM 支持、变更就绪度与文档可追溯性。',
      tags: ['配置管理', '变更控制', '可追溯性'],
    },
    'homelab-platform': {
      title: '自建平台（Homelab）',
      summary: '家庭服务器上的 SSO + Forgejo + CI 自动化。',
      tags: ['DevOps', '容器', 'SSO'],
    },
    'ai-agents-ci': {
      title: 'CI 中的 AI 代理',
      summary: '基于机器人和工作流的 Issue→PR 自动化。',
      tags: ['自动化', 'CI/CD', '代理'],
    },
    'finance-etl-console': {
      title: '财务 ETL 控制台',
      summary: '面向 Firefly III 的自动银行导入，含去重与 OIDC。',
      tags: ['ETL', '财务', 'FastAPI'],
    },
    'airbus-data': {
      title: 'Airbus 数据实习',
      summary: '基于 ETL 的 BOM/产品结构分析。',
      tags: ['ETL', '仪表盘', 'Skywise'],
    },
    'formula-student': {
      title: 'Formula Student',
      summary: 'CAD 协调、配置控制与竞赛答辩。',
      tags: ['CAD', '配置', '赛车'],
    },
    'formula-brake-redesign': {
      title: 'Formula Student — 制动系统改造',
      summary: '关键制动系统重设计，提升可制造性与可靠性。',
      tags: ['制动', 'CAD', '制造'],
    },
    'iot-home': {
      title: '家庭自动化 + 物联网',
      summary: 'Home Assistant、ESPHome 与太阳能逆变器监控。',
      tags: ['物联网', 'Home Assistant', 'ESP32'],
    },
  },
};

export const getProjectCopy = (project: Project, locale: Locale) => {
  const override = projectOverrides[locale]?.[project.id];
  if (!override) {
    return project;
  }

  return {
    ...project,
    ...override,
  };
};
