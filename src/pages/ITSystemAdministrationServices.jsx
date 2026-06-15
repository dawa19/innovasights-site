import React from 'react';
import ServiceDetailPage from '../components/services/ServiceDetailPage';

export default function ITSystemAdministrationServices() {
  return (
    <ServiceDetailPage
      badge="IT System Administration Services"
      title="IT System Administration Services"
      intro="We manage and support the servers, storage, backup, virtualization, and productivity systems that keep your organization stable, available, and ready for digital transformation."
      sections={[
        {
          title: 'Server & Platform Administration',
          description: 'Administration and support for core business platforms across physical, virtual, and cloud-connected environments.',
          items: ['Windows Server administration', 'Active Directory and identity services', 'Microsoft 365 administration', 'Patch management and system maintenance']
        },
        {
          title: 'Virtualization & Monitoring',
          description: 'Reliable virtual environments supported by monitoring, performance review, and capacity planning.',
          items: ['VMware and Hyper-V administration', 'Resource and performance monitoring', 'Capacity planning', 'Availability and health checks']
        },
        {
          title: 'Storage & Backup',
          description: 'Storage and backup services that protect business data and support continuity requirements.',
          items: ['Storage architecture and planning', 'Backup policy design', 'Replication and retention planning', 'Recovery testing and documentation']
        },
        {
          title: 'Disaster Recovery & Support',
          description: 'Operational support and recovery planning to minimize disruption and improve resilience.',
          items: ['Disaster recovery planning', 'Incident response support', 'System documentation', 'Ongoing administration and managed support']
        }
      ]}
      benefits={[
        { title: 'Stable Operations', description: 'Keep core systems monitored, maintained, and available.' },
        { title: 'Protected Data', description: 'Backup and recovery practices reduce business risk.' },
        { title: 'Ready to Scale', description: 'Well-managed systems create a strong base for growth and transformation.' }
      ]}
    />
  );
}