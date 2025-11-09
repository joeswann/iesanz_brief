# Security & Compliance Reverse Brief

- **Objectives**
  - Protect member data, financial transactions, and proprietary content across CMS, CRM, store, and analytics systems.
  - Reduce attack surface by leveraging headless architecture (non-public CMS, static/frontend separation) as argued in context.md.
  - Meet governance expectations from board/treasurer, including incident response readiness and auditability.

- **Security Posture**
  - Apply MFA/SSO across admin portals, RBAC with least privilege, and centralized identity management.
  - Implement WAF/firewall, malware protection, intrusion monitoring, and routine penetration tests.
  - Ensure secure integration patterns: encrypted API communication, key rotation, service accounts per integration (Stripe, Xero, Eventbrite, Shopify, Mailchimp, OneDrive, Buffer, analytics tools).

- **Compliance & Privacy**
  - Align with Australian/NZ privacy laws, Spam Act/GDPR for communications consent, and relevant financial regulations (PCI DSS for payments).
  - Maintain audit logs, data retention policies, backup/restore procedures, and documented runbooks for incidents.
  - Support ESG commitments (social/governance) by highlighting inclusion, accessibility, and transparent reporting.

- **Risk Management**
  - Address plugin sprawl risk by prioritizing headless services; evaluate third-party plugins for vulnerabilities (per WordPress critique in context).
  - Monitor integrations for stale credentials, failed syncs, or abnormal activity; set up alerting and automated lockdown procedures.
  - Embed membership-specific controls (duplicate email detection, suspicious signup patterns, special-case workflows) to prevent fraud highlighted in context.
  - Provide contingency plans for vendor outages, including fallback processes for payments, communications, and content updates.

- **Training & Governance**
  - Educate staff/volunteers on phishing, social engineering, secure document handling, and incident escalation.
  - Document compliance obligations, schedule drills (disaster recovery, breach response), and track remediation actions.
  - Coordinate with super-admin for periodic security reviews tied to BOT handover milestones and maintenance windows.
