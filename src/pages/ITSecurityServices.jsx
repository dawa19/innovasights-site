import React from 'react';
import ServiceDetailPage from '../components/services/ServiceDetailPage';

export default function ITSecurityServices() {
  return (
    <ServiceDetailPage
      badge="IT Security Services"
      title="IT Security Services"
      intro="We provide layered security services covering firewall and perimeter protection, endpoint security, email security, monitoring, policy management, and penetration testing with practical remediation guidance."
      sections={[
        {
          title: 'Firewall & Perimeter Security',
          description: 'Security controls that protect the network edge and manage secure access between users, sites, systems, and the internet.',
          items: ['Next-generation firewall deployment', 'VPN and secure remote access', 'Threat prevention and filtering', 'Policy review and optimization']
        },
        {
          title: 'Endpoint Security',
          description: 'Protection for laptops, desktops, and servers against malware, ransomware, and advanced threats.',
          items: ['Endpoint protection deployment', 'EDR/XDR planning', 'Device control and hardening', 'Vulnerability and patching recommendations']
        },
        {
          title: 'Email Security',
          description: 'Protection against phishing, malware, impersonation, spam, and email-based attacks targeting users and business communications.',
          items: ['Anti-phishing and anti-malware protection', 'Email filtering and policy configuration', 'Impersonation and spoofing protection', 'Awareness and reporting recommendations']
        },
        {
          title: 'Penetration Testing',
          description: 'Real-world security testing that identifies vulnerabilities before attackers exploit them, followed by clear remediation guidance.',
          items: ['Network and application penetration testing', 'Cloud and configuration assessment', 'Attack simulation and vulnerability validation', 'Detailed findings and remediation roadmap']
        }
      ]}
      benefits={[
        { title: 'Reduced Risk', description: 'Layered protection decreases exposure to modern cyber threats.' },
        { title: 'Better Visibility', description: 'Security reviews and controls improve awareness of vulnerabilities and threats.' },
        { title: 'Actionable Remediation', description: 'Testing and assessments provide clear next steps to strengthen security.' }
      ]}
    />
  );
}