import React from 'react';
import ServiceDetailPage from '../components/services/ServiceDetailPage';

export default function ITNetworkServices() {
  return (
    <ServiceDetailPage
      badge="IT Network Services"
      title="IT Network Services"
      intro="We design, deploy, document, and optimize reliable network foundations that combine passive infrastructure with active switching, routing, wireless, segmentation, and high-availability capabilities."
      sections={[
        {
          title: 'Passive Network Infrastructure',
          description: 'A strong physical foundation for reliable connectivity, designed and installed according to global standards.',
          items: ['Structured copper and fiber cabling', 'Backbone and horizontal cabling', 'Data center and rack cabling', 'Testing, certification, labeling, and documentation']
        },
        {
          title: 'Active Network Infrastructure',
          description: 'Secure, high-performing network components that keep users, sites, systems, and applications connected.',
          items: ['LAN/WAN architecture and deployment', 'Switching, routing, and VLAN configuration', 'Wireless infrastructure and access point planning', 'Quality of Service and traffic optimization']
        },
        {
          title: 'High Availability & Performance',
          description: 'Network designs that reduce downtime, improve resilience, and support business-critical workloads.',
          items: ['Redundancy and failover planning', 'Link aggregation and load balancing', 'Network segmentation', 'Performance testing and tuning']
        },
        {
          title: 'Documentation & Support',
          description: 'Clear network documentation and operational support that make maintenance and future expansion easier.',
          items: ['Network topology documentation', 'Configuration review', 'Monitoring recommendations', 'Ongoing optimization and support']
        }
      ]}
      benefits={[
        { title: 'Reliable Connectivity', description: 'Well-designed passive and active networks reduce downtime and connectivity issues.' },
        { title: 'Scalable Foundation', description: 'Network designs that support current operations and future expansion.' },
        { title: 'Better Performance', description: 'Optimized switching, routing, wireless, and segmentation improve user experience.' }
      ]}
    />
  );
}