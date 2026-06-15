import React from 'react';
import ServiceDetailPage from '../components/services/ServiceDetailPage';

export default function AIService() {
  return (
    <ServiceDetailPage
      badge="AI Services"
      title="AI Services"
      intro="We help organizations move from AI ambition to practical adoption through readiness assessments, opportunity discovery, governance guidance, and clear roadmaps connected to measurable business outcomes."
      sections={[
        {
          title: 'AI Readiness & Strategy',
          description: 'We evaluate your business goals, data environment, systems, people, and processes to identify where AI can create realistic value.',
          items: ['AI maturity and readiness assessment', 'Business objective alignment', 'Data and process readiness review', 'AI adoption priorities and roadmap']
        },
        {
          title: 'Use Case Discovery',
          description: 'We work with leadership and operational teams to identify, prioritize, and shape AI use cases that solve real business problems.',
          items: ['Opportunity mapping workshops', 'Use-case scoring and prioritization', 'Impact and feasibility assessment', 'Pilot initiative planning']
        },
        {
          title: 'Governance & Responsible AI',
          description: 'We help establish responsible AI practices that support trust, security, compliance, and sustainable adoption.',
          items: ['Governance principles', 'Risk and compliance considerations', 'Human oversight models', 'Success metrics and adoption controls']
        },
        {
          title: 'Implementation Planning',
          description: 'We translate AI opportunities into practical execution plans with clear phases, stakeholders, dependencies, and expected outcomes.',
          items: ['Adoption roadmap', 'Solution requirements', 'Technology and integration planning', 'Executive decision support']
        }
      ]}
      benefits={[
        { title: 'Clear Direction', description: 'Know where AI fits your business before investing heavily.' },
        { title: 'Practical Priorities', description: 'Focus on high-value use cases that are realistic to implement.' },
        { title: 'Measured Impact', description: 'Connect AI initiatives to business results and success metrics.' }
      ]}
    />
  );
}