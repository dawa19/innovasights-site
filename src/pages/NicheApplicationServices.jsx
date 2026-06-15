import React from 'react';
import ServiceDetailPage from '../components/services/ServiceDetailPage';

export default function NicheApplicationServices() {
  return (
    <ServiceDetailPage
      badge="Niche Application Services"
      title="Niche Application Services"
      intro="We help organizations define focused digital applications for specialized workflows, operational gaps, and industry-specific needs, turning business requirements into practical application plans."
      sections={[
        {
          title: 'Workflow & Requirements Analysis',
          description: 'We study how your teams work today and identify where a focused application can improve visibility, speed, and control.',
          items: ['Business process discovery', 'Operational pain-point mapping', 'User role and workflow definition', 'Application requirements documentation']
        },
        {
          title: 'Custom Portals & Dashboards',
          description: 'We shape portals and dashboards that centralize data, tasks, approvals, and reporting around specific business functions.',
          items: ['Internal business portals', 'Operational dashboards', 'Approval and task workflows', 'Management reporting views']
        },
        {
          title: 'Integration & Automation Planning',
          description: 'We plan how niche applications connect with your existing systems to reduce manual work and improve data flow.',
          items: ['System integration mapping', 'Automation opportunity discovery', 'Data flow planning', 'API and workflow recommendations']
        },
        {
          title: 'Solution Roadmapping',
          description: 'We help prioritize features and define a practical delivery roadmap that supports quick value and long-term scalability.',
          items: ['Feature prioritization', 'MVP planning', 'Scalability considerations', 'Implementation roadmap']
        }
      ]}
      benefits={[
        { title: 'Built Around Your Work', description: 'Applications shaped around real teams, processes, and operational needs.' },
        { title: 'Better Visibility', description: 'Centralize information and reporting for faster decisions.' },
        { title: 'Less Manual Effort', description: 'Reduce repetitive work through focused automation and integration planning.' }
      ]}
    />
  );
}