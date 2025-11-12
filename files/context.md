## Previous Discussions

- Client brief (07/24)
    
    Website Specs
    
    We are looking for an agency to implement a website from scratch, for a professional organisation in Australia, with about 1000 members. It should be implemented on an industry standard framework, such as Wordpress. Backend customisation should be minimised, when required use existing plugins, preferably. A brief description of our requirements is provided below and I look forward to your reply to discuss this further.
    
    The content will be varied and yet standard. We anticipate the following functionality will be required, and is open to further discussion. https://www.cibse.org/ is a site for a similar organisation. The functionality required will be similar, though the graphics, layout, typography shall have to be superior.
    
    **Key considerations**
    
    - Hierarchical access structure-
        1. Public content
        2. Private Content accessed by individual regional Chapters – meeting minutes etc
        3. Private Content for individual Members – Profile info, Account info, Entries to Awards etc
    - Responsive across the full range of current access devices – desktop to mobile
    - Muti-currency multiple taxation payment gateway, accepting Online Credit Card transactions
    - Pages will be broadly classified as
    1. **Static Pages** for Objectives, FAQ, Conditions of Entry, etc [*Benchmarks – Cosmetic, Layout, Typography*]
        1. These pages will contain static text and maybe a carousel of selected images in a template determined location. The styling of the fonts and headings should be consistent across the site.
    2. **Form Pages** for Award Entries, Juror Empanelment, Adjudication results, etc [*Benchmarks – Functionality, Automation, Debugged*]
        1. These would be a key element, and will need shopping cart integration to allow payment for services, products and ticketing. It will have to handle multicurrency payments with different taxations. The ability to use multipage or tabbed forms is important.
        2. Juror empanelment forms would allow for nomination and selection, probably single page form
        3. Adjudication forms would be created prior to adjudication and would allow jurors to enter comments and rankings through the multi stage adjudication process. These inputs should be exported to a spreadsheet for collation.
    3. **Administrator pages**
        1. The website should also have an administrator panel that allows the association to manage the award entries, including reviewing and approving submissions, managing the judging process, and announcing the winners.
        2. Membership Admin pages to monitor status and financial details
    4. **Payment Pages** for Award Entries, Award dinner tickets, etc [*Benchmarks – Functionality, Security, Responsiveness*]
        1. Entry payment pages should allow auto-generation and despatch of invoice when requested by the entrant. Online payment option.
        2. Handling of payment for multiple entries with a streamlined approach, allowing entrants to pay in one transaction for multiple entries.
        3. Payment for award dinner tickets – tables and seats, multiples and singles
    5. **Gallery Pages** for Awards Showcase, Awards Events, etc [*Benchmarks – Load Speed, Live Load, Layout*]
        1. Carousel of selected images followed by tag checklist filtered dynamic grid of images
    6. **Social Media** pages/widgets for tagged tweets, fb posts, insta posts [*Benchmarks – integration, editing*]
    - Backend Integration
    1. The Payment gateway needs to be integrated with Xero
    2. Award entry and adjudication modules shall need integration with One Drive, to save incoming information into the appropriate folders
    3. Integration with a Newsletter mailing system – Mailchimp or Campaign Monitor eg
    - Download Portal
        1. Controlled access to downloadable publications – free and paid
    - Blog Section
        1. Provision for a blog section for blogs – free and paid
        2. This will have a separate category for media and other updates as well, besides those mentioned above.
    
    This website has to be built keeping a BOT (Build Operate Transfer) model, and quotes will be needed for both a complete and also a hybrid model. By hybrid model we mean that our central and regional teams will need to be handed over the content updates (including training) and the core / plugin updates will need to be managed by the vendor.
    
    Appropriate Firewall and Malware protection needs to be built into the website.
    
    Website optimization modules may be added, and the cost needs to be separately mentioned in the offer.
    
    Annual maintenance offers should include separate segments for content updates (if handed over to the vendor) and for backend maintenance, including recoveries from and hacking or compromise.
    
    Any other feature may also be recommended.
    
- Outline draft (07/24)
    
    If I were to take on something like this:
    
    - Headless Frontend
        - Use a modern but well supported platform, for example Vercel + Next JS. If using Shopify then Hydrogen is also an option.
        - This allows for loading and handling content cleanly across multiple services at the API level, instead of relying on multiple third party plugins working well with each other (eg finding a Xero plugin for Woocommerce that can handle subscriptions).
    - Sanity CMS
        - A powerful and modern CMS with a highly customisable admin section, live preview etc.
    - Shopify Ecommerce
        - Hard to beat as an ecommerce platform, and works well with the platforms above. Shopify has very powerful functionality around tax and subscriptions that can be hard to replicate without a SaaS store.
        - Xero can be a direct plugin for Shopify
    - Klaviyo for newsletters (optional)
    
    ## Other Quotes
    
    - Markvis
        - Wordpress is fundamentally a blogging platform which comes with some baggage
        - JQuery is quite ancient at this point
        - Yearly maintenance fee seems a bit high
    - Webtrix
        - Wordpress (as above)
        - Custom CMS - single point of failure if there is vendor lock-in, also subject to requiring them to manage all maintenance + fixes + etc
    
    ## General Requirements
    
    - Xero Integration
    - Customisable Newsletter
    - Calendar
    - Awards
    - Form submissions
    - Conference Ticketing
    
    ## Sitemap
    
    - Home
    - About
    - Objectives
    - Governance
    - Board Profiles
    - Code of Ethics
    - Advocacy
    - History
    - Jobs
    - Contacts
    - Membership
        - Login
        - Reset Password
        - Register
        - Dashboard
        - Upgrade
        - Registered lighting practitioner application
        - Tech page
        - MIES Page
        - Renewals
        - Orders
        - IESNZ Membership
    - Memberships
        - Why Join
        - About
        - Search
        - Corporate Search
    - Upcoming Webinars
    - Past Webinars
    - Upcoming Events
    - Other Endorsed Education
    - Conference
    - Online Store
        - Categories
        - Product
        - Cart
        - Checkout
    - Publications
    - Job Adverts
    - Continuing professional development
    - Entry to awards
    - Past awards
    - Award tickets
    - Chapters (NSW, SA, QLD, WA, VIC, NZ)
        - Local Events
        - News
    - Links
    - Privacy Policy
    
    ## General Functionality
    
    - CMS for content types
        - Pages
        - Products
        - Categories
        - Awards
        - Articles
        - Jobs
        - Etc
    - Memberships
        - Account Management
        - Access Control for features
        - Logged in content (eg articles)
        - Bulletin board
        - Reporting
        - Xero Integration
        - Events
    - Ecommerce
        - Digital products
        - Physical products
        - Subscriptions
        - Account integration
        - Validation (eg buying the right account type)
    - Form Submission & Processing
    - Transactional Emails
    - Calendar
    - Search functionality
    - Payment (& Subscription) management
    - Service Integrations
    - Analytics + Reporting
    - Content Lake (eg easy navigation of membership data)
    
    ## Memberships
    
    - Issues with accuracy of members register
    - Issues with Xero / Webforce 5 Integration
    - No current membership ‘flow’ control
    - No automation / validation
    - Limited reporting
    - Limited functionality
- Proposal draft (01/25)
    
    ## Introduction
    
    Thank you for considering us for this project. This is a proposal for a comprehensive technical consulting & process management project with the aim of facilitating the production of a modern and effective web platform. As your point of contact for digital production we will coordinate suppliers to execute the website design, development, and associated services on your behalf. 
    
    ## About Us
    
    ---
    
    We have well over a decade of experience developing and producing a wide range of high performing websites at a global scale. In our role as technical consultants, we specialise in aligning vendors and stakeholders across the many facets of a successful online presence. Our well tested approach to the web production process ensures smooth collaboration and a successful and futureproof digital product.
    
    ## Our Approach
    
    ---
    
    1. **Clear Ownership**
        - We represent your interests as the primary stakeholder, directing updates and questions through a single channel. This one point of contact approach saves time and reduces confusion when working with multiple external suppliers.
    2. **Integrated Oversight**
        - We coordinate with each supplier—design, development, hosting, marketing—keeping everyone informed of progress and deadlines. Our goal is to maintain consistent communication, ensuring that each supplier’s tasks align with your overall vision.
    3. **Architecture**
        - Using a headless platform (our recommendation), the frontend user experience is separated from the backend services. We select platforms that allow for straightforward maintenance, a good track record of support, and a wide selection of options for every use case. This approach also allows for the integration of additional services (e.g., CRM, CMS, Analytics) into one user-facing experience without worrying about vendor lock in.
    4. **Best Practices**
        - Our in-house process includes a laundry list of details for ensuring a high performing website, including best practises for accessibility, fast loading times, code management, and up to date SEO considerations.
    5. **Future-Proofing**
        - Our recommended architecture and workflows support new features and integrations without needing expensive rebuilds or upgrades.
        - We encourage modular development, which allows for agile adaptations to evolving market demands.
    
    ---
    
    # Project Stages
    
    Below is an overview of each stage, along with explanations of how we manage them. This timeline is a rough estimate and may change depending on circumstances, we will continue to refine the timeline and roadmap as the overall project is clarified.
    
    1. **Discovery & Planning** (4 weeks)
        - **Goal Alignment**: We clarify project objectives, target audiences, and success metrics.
        - **Roadmap & Timeline**: We prepare a comprehensive project schedule to ensure realistic milestones and stakeholder visibility.
        - **Technical Strategy**: We establish the architecture (e.g., Next.js, headless CMS, external integrations) that best meet your requirements.
        - **Supplier Selection**: We evaluate design and development teams, choosing the best fit based on required skills, budget, and timeline.
    2. **Design & Architecture** (8 weeks)
        - **Collaboration with Designers**: We coordinate with external design suppliers to develop project requirements into prototypes.
        - **Technical Requirements**: We refine architecture documentation to outline how designs will be implemented.
        - **Integration Planning**: We confirm how e-commerce, CMS, and other APIs will communicate with each other.
        - **Approvals**: We gather stakeholder feedback to finalize the design phase before moving to development.
    3. **Development** (12 weeks)
        - **Supplier Coordination**: We manage the day-to-day activities of the development team, ensuring they follow the design specifications and technical guidelines.
        - **Feature Implementation**: The development team builds the core functionalities (frontend, CMS, integrations).
        - **Regular Checkpoints**: We schedule milestone reviews and demos for your feedback and approval.
        - **Issue Tracking**: We maintain a transparent log of bugs, change requests, and improvements.
    4. **Testing & Quality Assurance** (4 weeks)
        - **Function & Design QA**: We verify that all features match the approved designs and function correctly across different devices and browsers.
        - **Performance Testing**: We identify potential bottlenecks and optimize load times, ensuring a smooth user experience.
        - **Issue Resolution**: We collaborate with developers to prioritize and fix any discovered defects.
    5. **Deployment** (4 weeks)
        - **Production Environment Setup**: We work with hosting providers (e.g., Vercel, or your preferred platform) to ensure a secure and efficient live environment.
        - **Content Migration**: We assist with the coordination of final content upload, using existing assets and content.
        - **Go-Live Checklist**: We finalize domain configuration, SSL certificates, and other deployment tasks to ensure a smooth launch.
    6. **Post-Launch Support**
        - **Monitoring & Tweaks**: We monitor site performance and address post-launch issues if and when they arise within the acceptance period.
    
    ---
    
    ## Project Management Deliverables
    
    - **Project Plan & Timeline**
        - A detailed roadmap showing milestones, dependencies, and key deadlines.
    - **Status Updates**
        - Summaries of progress, blockers, next steps, and recent milestones.
    - **Change management**
        - Centralized documentation of any obstacles, prioritizing resolution in collaboration with suppliers.
    - **Supplier Evaluations**
        - Documentation of potential and chosen vendors for design, development, etc.
    - **Technical Architecture Docs**
        - Outlining how APIs, services, and other components fit together.
    - **Testing & QA Plans**
        - Detailed checklists for functional and design verification.
    - **Training**
        - Calls or quick guides to help you navigate the CMS or other admin tools.
    - **Deployment Plan**
        - A go-live checklist covering DNS changes, SSL certificates, and final sanity checks.
    - **Post-Launch Support Plan**
        - A schedule or blueprint for ongoing maintenance, updates, and performance monitoring.
    
    ---
    
    ## Investment
    
    Our project management and technical consulting services run on a **time-and-materials basis**, ensuring flexibility and transparency. Below is an estimate based on our current understanding of the scale and scope of the requirements, along with an explanation of which deliverables these estimates align with.
    
    1. **Phase Management**
        - **Discovery & Vendor Selection (40 hours)**: In-depth research, soliciting proposals, and vetting of potential design/development teams in line with your project goals.
        - **Requirement Consultation (40 hours)**: Ongoing clarification and validation of functional requirements, bridging the gap between stakeholder vision and technical execution at each step of the process.
        - **Launch Management (40 hours)**: Clarifying final decisions, coordinating final QA and acceptance testing, finalising deployment tasks, coordinating handovers, and being available to oversee a successful launch day.
    2. **Ongoing Management**
        - **Weekly Vendor Coordination (4 hours/week)**: Regular check-ins with your design & development suppliers to assess progress and address any blockers.
        - **Monthly Planning & Review (8–10 hours/month)**: Broader strategic discussions, performance audits, and milestone planning for upcoming phases.
    
    **Hourly Rate**: $250/hour
    
    - This rate covers both technical consulting (architecture, integrations, feasibility assessments) and dedicated project management (communication, timelines, reporting).
    
    **Initial Engagement**: 6 months (renewable or adjusted based on project progress)
    
    - This term covers the entire estimated process, planning for continuity throughout the full development cycle, from discovery to post-launch.
- Proposal draft (02/25)
    
    # **Proposal for Digital Platform Discovery, Planning & Developer Onboarding**
    
    ## **Table of Contents**
    
    ---
    
    1. Introduction
    2. Background & Credentials
    3. Scope of Work
        
        3.1. Discovery Process (40 Hours) 
        
        3.2. Planning Process (40 Hours) 
        
        3.3. Developer Kickoff Meeting
        
    4. Deliverables & Timeline
    5. Investment & Payment Terms
    6. Terms & Conditions
    7. Acceptance
    
    ## Introduction
    
    ---
    
    This proposal outlines an initial fixed-scope engagement to deliver comprehensive Discovery, Planning, and Developer Onboarding services for your upcoming website build. 
    
    Our role is to coordinate stakeholders, align requirements and prepare a technical roadmap, ending with a formal Development Kickoff Meeting. 
    
    Subsequent phases, including design iteration, development, testing and deployment are not covered within this proposal.
    
    ## Background & Credentials
    
    ---
    
    PXL is a web development business founded by Joe Swann, who also owns and serves as the Technical Director for 1/1 Studio ([1of1studio.com](http://1of1studio.com/)). 
    
    Development credentials include over a decade of award-winning work on local and overseas projects including [yumeibrand.com](http://yumeibrand.com/) [pantograph-punch.com](https://www.pantograph-punch.com/), and [dannykaplanstudio.com](https://www.dannykaplanstudio.com/). Our expertise covers development in modern standards and tailoring wbsites for high performance on global scale platforms.
    
    ## Scope of Work
    
    ---
    
    This proposal includes a fixed 80 hours of engagement covering the following phases:
    
    ### Discovery Process
    
    - **Initial Stakeholder Discussions**
        - Engage with all key parties to clarify objectives
    - **Requirements Identification**
        - Identify explicit and hidden specifications, including comprehensive feature requirements, integrations and site map
    - **Reverse Brief Development**
        - Develop, present and validate a reverse brief that documents all requirements
    
    ### Planning Process
    
    - **Technical Planning**
        - Translate and expand the business brief into a detailed technical plan and architectural outline as a foundation for design and development
    - **Vendor Tendering**
        - Research and refine a vendor shortlist based on suitability for the project
        - Contact and solicit proposals from up to four potential design/development vendors
    - **Q&A and Clarifications**
        - Co-ordinate across vendor and stakeholder parties to ensure alignment of deliverable requirements and planned execution
    - **Vendor Onboarding**
        - Prepare documentation and recommendations for selected vendor
    
    ### Developer Handover Meeting
    
    - **Handover Coordination**
        - Facilitate a formal workshop for project handover to chosen vendor, including technical documentation
    - **Meeting Outcomes**
        - Ensure all stakeholders have a clear understanding of the technical strategy, including a full briefing with vendor
    
    *This proposal covers a scope of work up to the Developer Handover Meeting. Any subsequent phases (e.g., detailed design, development, testing, and deployment) will be scoped and agreed upon separately.*
    
    ## Deliverables & Timeline
    
    ---
    
    - **Project Roadmap**
        - Detailed milestones and timeline covering the Discovery and Planning phases
    - **Documentation:**
        - Validated Reverse Brief
        - Technical Plan and Architecture Outline
        - Vendor Evaluation Summary and Onboarding Preparation
    - **Developer Handover Meeting**
    
    **Estimated Timeline:**
    
    - **Discovery & Planning Phases:** 4 weeks
    - **Developer Handover Meeting:** Scheduled immediately following the Planning phase
    
    ## Investment & Payment Terms
    
    ---
    
    - **Fixed Engagement:** 80 hours at **$250/hour ex. GST**
    - **Total Fixed Price:** **$20,000 NZD ex. GST**
    - **Payment Schedule:**
        - **Deposit:** 25% ($5,000) upon proposal acceptance
        - **Midpoint Payment:** 50% ($10,000) upon handover of the Discovery & Planning deliverables
        - **Final Payment:** 25% ($5,000) upon completion of the Developer Handover Meeting
    
    ## Terms & Conditions
    
    ---
    
    - The engagement is scoped to 80 hours of work ending with the Developer Handover Meeting. Any work beyond this scope will require a separate proposal, or be billed at the standard hourly rate.
    - Should project requirements change significantly at any stage during the engagement, you will be notified to discuss scope and budget adjustments.
    - This proposal is valid for 30 days from the date of issuance.
    
    ## Acceptance
    
    ---
    
    Should you agree with the terms and scope outlined above, please sign below. Upon receipt of your acceptance and initial deposit, we will schedule an initial meeting to commence the Discovery Process.
    
- PM Skillset recommendation (02/25)
    
    This role requires someone who can effectively bridge technical and business requirements while facilitating successful project delivery.
    
    Technical Knowledge:
    
    - Modern headless architecture and decoupled system design, including API design and management best practices
    - Enterprise content management, commerce systems, and bespoke platform development
    - System integration patterns and best practices for scalable, modular systems
    - Performance optimization and scalability, including cloud deployment strategies and continuous integration practices
    - Security and data privacy requirements, ensuring compliance with modern standards
    - Modern SEO, analytics, and user experience considerations
    
    Project Management:
    
    - Vendor selection and management with a focus on aligning technical capabilities
    - Technical documentation and specification writing to preserve architectural integrity
    - Budget and timeline management across multiple project phases
    - Quality assurance oversight through rigorous testing and validation
    - Risk assessment and mitigation, emphasizing technical risks and change management
    - Stakeholder communication and coordination to effectively bridge business and technical needs
    
    Required Experience:
    
    - Proven delivery of large-scale web projects with complex technical requirements
    - Experience managing multiple vendors and stakeholders in a technical context
    - Demonstrated technical leadership in web development projects
    - Background in professional websites and integration solutions
    - Expertise in training, documentation development, and technical team alignment
    - Experience in deployment planning and execution, including cloud and continuous integration environments
- Process draft (02/25)
    
    ## 1. Discovery
    
    ### 1.1 Initial Stakeholder Analysis
    
    - **Objective**: Understand all business goals, user needs, and overall project requirements in depth.
    - **Actions**:
        1. Conduct short interviews (or written Q&A) with key stakeholders and user representatives.
        2. Gather existing documentation (legacy processes, competitor analyses, example websites) to contextualise objectives.
        3. Identify initial success metrics (e.g., increased membership signups, improved user satisfaction).
    
    ### 1.2 Requirements Gathering & Documentation
    
    - **Objective**: Capture explicit and hidden requirements that might not be obvious at first.
    - **Actions**:
        1. **Requirement Sorting**: Categorise into functional (e.g., membership portal features, e-commerce transactions), non-functional (performance, security, data privacy), and project constraints (timeline, budget).
        2. **Integration Mapping**: List all third-party services (e.g., CRM, OneDrive, Shopify, Klaviyo) with reasons for each.
        3. **Reverse Brief**: Summarise the entire requirement set into a cohesive brief that is re-confirmed with stakeholders.
    
    ### 1.3 Reverse Brief Validation
    
    - **Objective**: Ensure the documented requirements accurately reflect the entire scope.
    - **Actions**:
        1. Present the compiled reverse brief to stakeholders in a meeting or a collaborative document.
        2. Solicit feedback for clarifications, additions, or corrections.
        3. Incorporate changes and gain formal sign-off, so all parties agree on the initial scope.
    
    ### 1.4 Preliminary Feasibility & Risk Assessment
    
    - **Objective**: Identify potential blockers or complexities early.
    - **Actions**:
        1. Technical feasibility check (confirm the synergy between recommended frameworks and required integrations).
        2. Business feasibility check (ensure project scope and budget align).
        3. Risk analysis (list potential areas of scope creep, data compliance issues, or vendor constraints).
        4. Document proposed mitigation strategies.
    
    **Outcome of Discovery**:
    
    1. Reverse brief, capturing all essential functional and non-functional requirements.
    2. Stakeholder alignment on scope, with sign-off on the planned features and objectives.
    3. Preliminary risk management plan to feed into more detailed Planning.
    
    ---
    
    ## 2. Planning
    
    ### 2.1 Technical Architecture Planning
    
    - **Objective**: Translate the validated business and functional requirements into a structured, technical design.
    - **Actions**:
        1. **Architectural Outline**:
            - Confirm front-end choice (e.g., Next.js) for server-side rendering, performance, and SEO.
            - Confirm headless CMS selection (e.g., Sanity) for flexible content management.
            - Confirm e-commerce approach (Shopify integration, multi-currency, Xero integration).
            - Confirm any additional services (OneDrive for awards submission, Klaviyo for newsletters, etc.).
        2. **Data Flow & Diagramming**:
            - Map out how data moves between the membership portal, CMS, Shopify, CRM, and any analytics.
            - Specify architectural diagrams with each microservice or integration.
        3. **Performance & Scalability Considerations**:
            - Outline usage estimates (peak traffic, data volumes).
            - Note potential caching strategies or content delivery networks (CDNs).
        4. **Security & Compliance**:
            - Document compliance with relevant data privacy standards (NZ, Australia, GDPR if relevant).
            - Discuss secure token handling, encryption at rest, data residency if needed.
    
    ### 2.2 Roadmap & Timeline
    
    - **Objective**: Establish a schedule for the design, development, testing, and deployment phases.
    - **Actions**:
        1. Identify major milestones (e.g., UI wireframes complete, alpha build, user acceptance testing).
        2. Map tasks to approximate durations with buffer times for reviews and sign-offs.
        3. Set up recurring check-in points with internal teams (e.g., weekly project reviews).
    
    ### 2.3 Vendor Tendering & Selection
    
    - **Objective**: Solicit and evaluate proposals from third-party design or development agencies as needed.
    - **Actions**:
        1. **Vendor Identification**: Use personal networks, references, or online directories to shortlist potential agencies with relevant skill sets (e.g., Next.js, Shopify, headless CMS expertise).
        2. **RFP/Brief Distribution**: Provide each potential vendor with a standard summary of project scope, timeline, and high-level deliverables.
        3. **Evaluation Criteria**:
            - Technical skill alignment (framework experience, references).
            - Budgetary alignment (hourly rates, fixed quotes, or retainer proposals).
            - Cultural fit, communication style, time zone differences.
            - Past performance (portfolios, testimonials).
        4. **Q&A**: Host a group Q&A session or individual Q&A sessions with each vendor so they can clarify specific complexities.
        5. **Proposal Review**: Score proposals against weighting factors (price, timeline, relevant experience).
        6. **Shortlisting & Interviews**: Conduct deeper interviews with top 2–4 vendors to confirm alignment with project goals.
    
    ### 2.4 Vendor Onboarding Strategy
    
    - **Objective**: Outline how the selected vendor(s) will integrate into the project.
    - **Actions**:
        1. **Contract & Scope**: Provide final scope documents, including key deliverables, acceptance criteria, and payment terms.
        2. **Access & Environment Setup**:
            - Provide relevant documentation (the final technical architecture plan).
            - Grant access to any shared repositories (e.g., GitHub or GitLab), a project management tool (e.g., Jira, Trello), or any cloud environment (e.g., Vercel, AWS).
        3. **Communication Channels**:
            - Define meeting schedules (e.g., weekly sync calls, Slack channels).
            - Clarify escalation paths (if issues arise, who is the main point of contact?).
        4. **Milestone & QA Agreement**:
            - Confirm how and when each milestone is verified, including design reviews, feature sign-offs, testing phases.
    
    ### 2.5 Detailed Documentation & Final Handover Prep
    
    - **Objective**: Create a complete suite of planning documents ready to hand over to the development team.
    - **Actions**:
        1. **Technical Documentation**: Include system diagrams, data flow diagrams, user stories, acceptance criteria.
        2. **Meeting with Internal Stakeholders**: Present final architectural plan, timeline, vendor picks, and QA approach.
        3. **Review & Approvals**: Confirm that all internal and external parties sign off.
    
    **Outcome of Planning**:
    
    1. A final technical plan (architecture, data flows, security guidelines).
    2. A fully-developed project roadmap with key milestones and timelines.
    3. Formal vendor selection and onboarding readiness.
    
    ---
    
    ## 3. Developer Handover Meeting
    
    ### 3.1 Meeting Objectives
    
    - **Objective**: Formally transition from the planning phase to the active development phase by briefing the chosen development partner(s).
    - **Key Topics**:
        1. **High-Level Scope Review**: Present the final scope and timeline to ensure clarity.
        2. **Technical Architecture Walkthrough**: Go over diagrams, data flow, and integration endpoints.
        3. **Vendor Onboarding Checklist**: Confirm all accounts, access, code repository structures, and environment setups are finalised.
        4. **Milestone & QA**: Outline the schedule of deliverables, code reviews, testing cycles, and sign-off steps.
        5. **Risk & Issue Management**: Clarify how to raise concerns or request changes.
    
    ### 3.2 Post-Handover Follow-Up
    
    - **Objective**: Ensure no gaps remain after the meeting and the development team can start efficiently.
    - **Actions**:
        1. Provide meeting minutes summarising any final clarifications.
        2. Offer a short window for additional Q&A or requests for extra documentation.
        3. Confirm the next official checkpoint date (e.g., initial dev progress demo in 2–3 weeks).
    
    ---
    
    ## Additional Considerations
    
    ### A. Evaluation Methodology
    
    - **Detailed Scoring Matrix**:
        1. **Technical Expertise (40%)** – Depth of Next.js/React experience, references, performance track record.
        2. **Design Proficiency (25%)** – UI/UX, brand synergy, portfolio alignment with your needs.
        3. **Budget & Timeline (25%)** – Feasibility of quotes relative to project scope, ability to meet deadlines.
        4. **Communication & Cultural Fit (10%)** – Responsiveness, clarity, shared working hours, general approach to support.
    
    ### B. Coordination with Vendors
    
    - **Weekly Status Calls**: A recurring 30-minute sync with the main project manager, vendor lead, and any crucial stakeholder.
    - **Shared Project Board**: A Kanban or Scrum board for ongoing tasks, progress tracking, and quick updates.
    - **Escalation Path**: If blockers arise, immediate notice is sent to the project manager or stakeholder group, specifying the impact on budget or timeline.
    
    ### C. Architecture & Planning Details
    
    - **Modular System Design**: Each integration (CMS, e-commerce, awards submission) is treated as a separate module or microservice.
    - **API Gateways**: Where relevant, consider an API gateway for improved security and simplified integration management.
    - **Testing Approach**: Outline environment tiers (dev, staging, production) with consistent continuous integration (CI) pipelines.
    - **Documentation Tools**: Some teams use Notion, Confluence, or GitHub Wikis for always up-to-date architecture references.
    
    ### D. Onboarding of Selected Vendor
    
    - **Contract Finalisation**: Include a statement of work (SOW), acceptance criteria, payment schedules (could be milestone-based or monthly retainer).
    - **Access & Permissions**: Provide vendor with test or staging environment credentials, read-only or limited production access until final launch.
    - **Knowledge Transfer**: If prior code or partial prototypes exist, walk the vendor through code structure, naming conventions, or environment secrets.
    
    ---
    
    ## Summary
    
    By following this multi-phase approach—Discovery, Planning, and a formal Handover Meeting—you achieve:
    
    1. **Clear, validated requirements** with no major assumptions left undocumented.
    2. **A robust technical roadmap** ensuring alignment among all stakeholder groups and chosen vendors.
    3. **Efficient vendor onboarding** so external partners can begin development quickly and effectively.
    4. **A foundation for seamless development** that reduces scope creep, minimises risk, and maximises the likelihood of delivering on time and within budget.
    
    If you require further elaboration on any step, just let me know, and I’ll be happy to clarify.
    
    Regards,
    
    Joe
    
- Wordpress recommendation (02/25)
    
    # Top Line Issues
    
    1. **High Maintenance & Security Risks**
        - The proposal relies on a **stack of 7+ major WordPress plugins** (Paid Memberships Pro, LearnDash, Event Espresso, WP Job Manager, WooCommerce, etc.), each requiring constant updates to patch security vulnerabilities.
        - **Many of these plugins have had past security breaches**, including critical SQL injection vulnerabilities and privilege escalation exploits. If even one plugin isn’t patched in time, it could expose the entire system.
        - Security plugins (Wordfence, iThemes) add protection, but they also increase system load and must be actively managed.
    2. **Performance Bottlenecks & Scalability Issues**
        - WordPress is not optimized for high-performance **logged-in user traffic**. Membership sites, e-learning platforms, and event management systems generate **heavy database queries**, which slow down load times as user numbers grow.
        - Each plugin operates independently, often creating **redundant database queries** that can bog down the site, especially under high-traffic events like an awards submission period.
    3. **Plugin Conflicts & Integration Challenges**
        - These plugins were not designed to work seamlessly together—users may experience **account inconsistencies**, redundant login flows, and fragmented user dashboards.
        - For example, Event Espresso and Paid Memberships Pro **do not integrate natively**, meaning users registering for an event might have to create a separate membership manually.
        - Updates to one plugin may break another, requiring ongoing troubleshooting and fixes.
    4. **Customization Limitations**
        - WordPress plugins have **fixed templates and workflows**. While small design changes can be made, deep functional customizations (e.g., a tailored membership workflow or custom event pricing logic) require **custom plugin integration**, which is costly and can break during updates.
        - A **disjointed user experience** is a real concern—each plugin has its own look and feel, leading to inconsistencies across the site.
    5. **Long-Term Costs & Vendor Lock-in**
        - Licensing fees for multiple premium plugins, plus **increased hosting costs** for a performance-heavy WordPress site, result in higher costs over time.
        - The reliance on WordPress plugins means IESANZ is **tied to third-party vendors** who may change pricing, discontinue features, or stop maintaining their software.
        - Many organizations that start with a plugin-heavy WordPress build **end up migrating to a more modern solution** after encountering these scalability and maintenance problems.
    
    ### **Why a Headless Approach is the Smarter Long-Term Investment**
    
    A **headless CMS + Next.js architecture** avoids all of these issues by separating the front-end from the back-end, using modern APIs instead of a plugin-based system. This provides:
    
    **Security & Stability:** No reliance on vulnerable plugins; a statically generated front-end with locked-down APIs greatly reduces the risk of hacking.
    
    **Performance & Scalability:** Faster page loads, better handling of traffic spikes, and significantly reduced server load compared to WordPress’s dynamic rendering.
    
    **Full Design & Functional Flexibility:** Every part of the site can be custom-designed without being limited by a plugin’s structure.
    
    **Seamless Integrations:** Direct API connections to services like Xero, Shopify (for payments/e-commerce), and a robust CMS ensure smooth data flow.
    
    **Lower Long-Term Costs:** Eliminates ongoing plugin fees, reduces the need for maintenance, and ensures that the platform remains adaptable to future needs.
    
    I completely understand that upfront cost is a major factor, and the competitor’s approach **may appear simpler at first glance**. However, given IESANZ’s need for a professional-grade website that will last for years without becoming a technical burden, I strongly believe that investing in the right architecture now will **prevent costly rework, security incidents, and performance problems down the line**.
    
    # Report
    
    The competitor’s proposal suggests building the IESANZ website on WordPress using a suite of plugins for memberships, learning management, events, jobs board, email marketing, e-commerce, accounting, and security. While this approach leverages off-the-shelf functionality, it raises concerns around security, maintenance, integration complexity, customization flexibility, performance scalability, user experience consistency, and long-term costs. Below, we evaluate each of these areas for the recommended plugins (Paid Memberships Pro, LearnDash, Event Espresso, WP Job Manager, a Campaign Monitor integration, WooCommerce with Xero integration, and security plugins like Wordfence/iThemes Security). We then compare this plugin-heavy strategy with a modern headless architecture (e.g. Next.js frontend with Sanity CMS, Shopify, and Xero API integrations), highlighting why a headless solution offers superior long-term value and future-proofing.
    
    ## 1. Security Risks of the WordPress Plugin Stack
    
    **Known Vulnerabilities:** Every plugin in the proposed stack has its own codebase and attack surface, and many have a history of security issues. For example, Paid Memberships Pro has had over 20 security vulnerabilities patched, including serious flaws like SQL injection and improper access control ([Paid Memberships Pro Vulnerabilities - Patchstack](https://patchstack.com/database/wordpress/plugin/paid-memberships-pro#:~:text=Image%3A%20Fixed%2023%20patched)). The LearnDash LMS plugin similarly saw critical issues (e.g. an unauthenticated SQL Injection exploit rated 9.8/10 in severity) and multiple leaks of sensitive information before patches ([LearnDash LMS WordPress Plugin Security Vulnerabilities | WPScan](https://wpscan.com/plugin/sfwd-lms/#:~:text=Title)). Even WP Job Manager had a critical file upload vulnerability (CVSS 10.0) in the past, which could let attackers upload arbitrary files ([WP Job Manager WordPress Plugin Security Vulnerabilities | WPScan](https://wpscan.com/plugin/wp-job-manager/#:~:text=WP%20Job%20Manager%20,Unauthenticated%20Arbitrary%20File%20Upload)). These examples illustrate that **membership, LMS, and job board plugins are frequent targets** for hackers; if any are not promptly updated when a new exploit is discovered, the site could be compromised.
    
    **Security Plugins Are Not Immune:** It’s worth noting that even the security plugins proposed (Wordfence and iThemes Security) have experienced vulnerabilities of their own. Wordfence had an XSS issue in 2022 that required an urgent update ([WordPress Wordfence Security – Firewall & Malware Scan plugin <= 7.6.0 - Authenticated Stored Cross-Site Scripting (XSS) vulnerability - Patchstack](https://patchstack.com/database/wordpress/plugin/wordfence/vulnerability/wordpress-wordfence-security-firewall-malware-scan-plugin-7-6-0-authenticated-stored-cross-site-scripting-xss-vulnerability#:~:text=Image%3A%20Patch%20priority%3A%20low)), and iThemes Security (Solid Security) had an open redirect flaw up to version 8.1.4 ([iThemes Security <= 8.1.4 - Open Redirection via redirect_to_https](https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/better-wp-security/ithemes-security-814-open-redirection-via-redirect-to-https#:~:text=iThemes%20Security%20%3C%3D%208.1.4%20,to%20the%20use%20of)). While these companies are quick to patch, it underscores that relying on plugins (even for security) means **continuous vigilance**. No plugin is perfectly secure; a complex plugin ecosystem inherently increases the “attack surface” of the site. By contrast, a headless architecture would significantly shrink the exposed surface – the CMS backend isn’t public, and the frontend would primarily serve static assets or limited APIs, making common WordPress exploits largely moot ([Navigating the Shift to WordPress as a Headless CMS](https://udx.io/guidance/navigating-the-shift-to-wordpress-as-a-headless-cms#:~:text=users%20interact%20with,without%20impacting%20the%20content%20layer)).
    
    **Common Attack Vectors:** With a traditional WordPress setup, typical attacks include SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), and privilege escalation. Unfortunately, the recommended plugins have seen all of these: e.g. Paid Memberships Pro had an unauthenticated insecure direct object reference (IDOR) bug allowing non-admins to alter order statuses ([Paid Memberships Pro Vulnerabilities - Patchstack](https://patchstack.com/database/wordpress/plugin/paid-memberships-pro#:~:text=Image%3A%20Fixed%2023%20patched)), and LearnDash had an insecure direct object reference allowing account takeover by subscribers ([LearnDash LMS WordPress Plugin Security Vulnerabilities | WPScan](https://wpscan.com/plugin/sfwd-lms/#:~:text=Title)). WooCommerce itself had a notorious SQL injection vulnerability in 2021 that forced an emergency update on over 5 million sites ([Critical Vulnerability Detected in WooCommerce on July 13, 2021](https://woocommerce.com/posts/critical-vulnerability-detected-july-2021/#:~:text=Critical%20Vulnerability%20Detected%20in%20WooCommerce,was%20identified%20and%20responsibly%20disclosed)). This history means the **risk of breaches is real** – if any plugin in the chain is compromised, attackers can potentially pivot to access member data, course content, payment info, etc. Indeed, a recent 2023 zero-day in a popular membership plugin (Ultimate Member) allowed hackers to create rogue admin accounts on 200,000+ WordPress sites ([Hackers exploit zero-day in Ultimate Member WordPress plugin with 200K installs](https://www.bleepingcomputer.com/news/security/hackers-exploit-zero-day-in-ultimate-member-wordpress-plugin-with-200k-installs/#:~:text=Hackers%20exploit%20a%20zero,and%20registering%20rogue%20administrator%20accounts)). This kind of scenario is a nightmare for any membership-based organization, as it can lead to data breaches or defacement.
    
    In summary, maintaining a **secure WordPress plugin stack requires constant updates and monitoring**. One missed patch can open a critical hole. Each additional plugin is another piece of code that could contain a vulnerability, so the stacked approach multiplies the security risk compared to a leaner or headless solution. A headless architecture, on the other hand, minimizes publicly exposed code (no PHP plugins running for each page request), dramatically reducing such risks ([Headless CMS vs WordPress | Hygraph](https://hygraph.com/learn/headless-cms/headless-cms-vs-wordpress#:~:text=,plugins%20for%20extended%20features%2C%20even)).
    
    ## 2. Maintenance and Updates
    
    **Update Frequency:** The flip side of the above security discussion is that all these plugins need regular updates – not only for security fixes but also for compatibility with each other and with core WordPress. For instance, Paid Memberships Pro issued multiple critical security patches in 2024 alone ([Paid Memberships Pro Vulnerabilities - Patchstack](https://patchstack.com/database/wordpress/plugin/paid-memberships-pro#:~:text=Image%3A%20Fixed%2023%20patched)), and WooCommerce and LearnDash also push out frequent releases. Site admins will need to apply these updates promptly to stay secure, which can be a significant ongoing effort. With 7+ major plugins (many with their own add-ons), you’re potentially looking at updates every few weeks. Each update must be tested to ensure it doesn’t break any integration or custom tweak on the site. This **constant maintenance cycle** can become a heavy burden on the web team.
    
    **Compatibility and Plugin Conflicts:** A major concern is ensuring all plugins continue to work well together after updates. In a multi-plugin setup, it’s common that one update can introduce a conflict with another plugin or with the theme. We have a telling example from a developer who managed a site with Paid Memberships Pro, LearnDash, WooCommerce (plus various extension add-ons for each). They noted the combination became *“a bit of a problem maintaining... with all the new updates and deprecations”* ([Paid Memberships Pro, LearDash, WooCommerce integration.  : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=I%20have%20written%20a%20custom,the%20new%20updates%20and%20deprecations)). In fact, even WooCommerce’s own ecosystem can conflict – a long-time WooCommerce developer lamented that the core plugin *“still can’t integrate smoothly with its own first-party plugins,”* noting some official extensions seemed abandoned and buggy ([Longtime Developer: I’m Out - [WooCommerce] Review | WordPress.org](https://wordpress.org/support/topic/longtime-developer-im-out/#:~:text=I%E2%80%99ve%20followed%20all%20best%20practices%3A,never%20properly%20checked%20for%20issues)). This highlights the **fragility** of a plugin-reliant system: you are effectively tying the site’s stability to the release cycles and quality control of numerous independent developers. Any lapse can cause plugin breakages, errors, or white-screen downtime after an update.
    
    **Abandonment Risk:** Over a multi-year span, there’s also the question of whether all these plugins will continue to be actively maintained. Some plugins (e.g. Paid Memberships Pro, WooCommerce) are backed by sizable teams and communities, so that risk is low. But others could stagnate – for example, if the third-party Campaign Monitor integration plugin isn’t maintained diligently, it might lag behind WordPress updates or PHP version changes. Event Espresso is a niche product; if its developers shift focus, the IESANZ site could be stuck on an outdated plugin with no easy replacement. An abandoned plugin becomes a security liability and may force an expensive rework to swap it out later. **In contrast, a headless approach uses more stable, general-purpose components** (like a CMS API and custom code) that you control. There’s no dependence on a single third-party plugin author to keep your site running; you have the codebase and can maintain it or swap out services as needed.
    
    **Maintenance Overhead:** All told, keeping a WordPress plugin stack healthy requires significant ongoing investment. One analysis notes that *“maintenance costs add up quickly with WordPress”* – as sites grow, free plugins often need paid upgrades, more robust hosting is required, and frequent fixes after updates are needed ([Headless CMS vs WordPress | Hygraph](https://hygraph.com/learn/headless-cms/headless-cms-vs-wordpress#:~:text=,which%20add%20up%20over%20time)) ([Headless CMS vs WordPress | Hygraph](https://hygraph.com/learn/headless-cms/headless-cms-vs-wordpress#:~:text=,that%20support%20faster%20loading%20times)). This overhead can drain resources that could be better spent on improving the site’s features or content. Many organizations find that by migrating off such a stack, they **free themselves from constant plugin babysitting**. For example, companies often move from WordPress to headless specifically to solve these maintenance headaches – WordPress might be easy to start, but it *“struggles with performance for large or complex sites”* and demands continuous tweaking, whereas headless setups offer stability with far fewer emergency updates ([WordPress to Headless CMS Migration | FocusReactive](https://focusreactive.com/migration-from-wordpress-to-headless-cms/#:~:text=Companies%20often%20migrate%20from%20WordPress,offers%20more%20dynamic%20content%20management)).
    
    ## 3. Integration Issues
    
    One of the biggest challenges with the proposed approach is making all these disparate plugins work together seamlessly. Each plugin manages its own domain (membership, LMS, events, jobs, etc.), and out-of-the-box they don’t automatically share data or user states with each other. **Integrating them is non-trivial and often fragile.**
    
    **Multiple Systems, One Userbase:** Ideally, a member logging into the IESANZ site should be able to access their membership profile, enroll in courses, sign up for events, post or view jobs, and manage email preferences **with one account and one coherent experience**. The WordPress plan attempts this by using a common user database (WordPress users) for all plugins, but in practice, stitching together the workflows can get messy. For example, Event Espresso (events plugin) doesn’t natively recognize Paid Memberships Pro memberships or roles. In their support forum, an Event Espresso staff member admitted *“we currently do not have an integration with Paid Memberships Pro”* ([PaidMemberships Pro - LearnDash and EE4 | Event Espresso](https://eventespresso.com/topic/paidmemberships-pro-learndash-and-ee4/#:~:text=Hi%20James%2C)) and suggested custom development to bridge them. In that same thread, a user described how registering through an event caused a new WordPress user to be created with an email as username and **not linked to the membership system** – meaning the person had to register again via PMPro to access member content ([PaidMemberships Pro - LearnDash and EE4 | Event Espresso](https://eventespresso.com/topic/paidmemberships-pro-learndash-and-ee4/#:~:text=2,PaidMembershipsPro%20to%20access%20the%20course)). This is a poor user experience (and a data synchronization headache). Without custom coding, someone who joins via an event signup might not count as a “member” in PMPro, or vice versa, highlighting how **siloed the plugins are by default**.
    
    **Workarounds and Glue Code:** To make these plugins talk to each other, developers often resort to custom “glue” code or additional connector plugins. Paid Memberships Pro, for instance, provides a *“Courses for Membership”* add-on to integrate with LearnDash, and a separate WooCommerce add-on, etc. – so you’d be layering even more plugins to tie these pieces together. The Reddit post mentioned earlier is illustrative: the site had PMPro, LearnDash, WooCommerce, and WooCommerce Subscriptions, plus the PMPro WooCommerce add-on and LearnDash PMPro add-on. The developer ended up writing a custom plugin to handle specific membership/course access logic and another for custom WooCommerce integration, because managing bundles like “Buy a course + membership combo” was otherwise impossible ([Paid Memberships Pro, LearDash, WooCommerce integration.  : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=Has%20anyone%20ever%20tried%20the,On%20and%20WooCommerce%20Subscriptions)) ([Paid Memberships Pro, LearDash, WooCommerce integration.  : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=I%20have%20written%20a%20custom,the%20new%20updates%20and%20deprecations)). This kind of **custom integration code can be hard to maintain** as plugins update (the developer noted maintenance was problematic as updates rolled out). Even the co-founder of Paid Memberships Pro chimed in to advise caution, saying *“I would hesitate to add WooCommerce to the mix if you can avoid it”* because of the complexity it introduces ([Paid Memberships Pro, LearDash, WooCommerce integration.  : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=%E2%80%A2)). His recommendation was to possibly **drop PMPro entirely and just use WooCommerce** for selling course access, or conversely avoid WooCommerce if PMPro can handle the transactions ([Paid Memberships Pro, LearDash, WooCommerce integration.  : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=If%20you%20choose%20to%20go,for%20a%20good%20WC%20dev)) ([Paid Memberships Pro, LearDash, WooCommerce integration.  : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=,if%20you%20can%20avoid%20it)). Neither option is ideal if you truly need both ecommerce flexibility and robust membership management – it shows that **these systems overlap and conflict in design**. In short, achieving the desired functionality requires bending plugins in ways they weren’t intended to be bent.
    
    **Potential Conflicts:** Combining many plugins also raises the chance of outright conflicts – e.g., two plugins might try to load a different version of the same JS library, or one might override a URL endpoint used by another. Even user roles and capabilities can conflict: WP Job Manager might add roles or capabilities for job posters, while PMPro manages member roles – one could inadvertently lock out capabilities needed for another. There are known cases where membership plugins and LMS plugins overlap on access control. Without careful testing, one plugin’s security rules could accidentally block content from another plugin. The competitor’s proposal will need thorough QA to catch issues like, “Does registering via the membership form automatically enroll you in the site’s LMS? If not, do we need to force the user through additional steps?” All these integrations have to be custom-tailored.
    
    Overall, the **operational risk is high** – there are more potential points of failure when multiple plugins must operate in concert. As one developer frankly put it after wrestling with PMPro, LearnDash, and WooCommerce, *“it seems like I’m stuck with a custom integration [for] either the payment gateways or the access management”* ([Paid Memberships Pro, LearDash, WooCommerce integration.  : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=,for%20a%20good%20WC%20dev)). This complexity is largely eliminated in a headless/API-driven architecture, where you design the data flows up front and use unified systems (e.g., one user database and API) to handle all functions. The headless approach would avoid the scenario of “plugin A doesn’t know about plugin B,” because your front-end and back-end code would explicitly ensure that, say, an event signup triggers the same member creation process as a normal registration.
    
    ## 4. Customization Limitations
    
    Using off-the-shelf plugins means accepting their way of doing things – and each plugin has its own templates, forms, and interface. **Altering the default behavior or look-and-feel can be difficult and risky.**
    
    **Rigid Structures:** Each of these plugins provides certain frontend pages/shortcodes (e.g., PMPro’s checkout page, LearnDash course pages, Event Espresso event listings, etc.) that are generated with specific HTML and styling. If the out-of-box UI doesn’t match IESANZ’s branding or user experience needs, developers will need to override templates or inject custom CSS/JS. This is possible – for example, Paid Memberships Pro allows overriding its page templates by copying them to a special folder – but the PMPro team itself warns that *“using a custom template will not automatically inherit bug fixes or new features”* from plugin updates ([Customizing via a Custom Plugin](https://www.paidmembershipspro.com/documentation/templates/customizing-via-a-custom-plugin/#:~:text=Using%20a%20custom%20template%20will,and%20merge%20in%20updates%20manually)). Essentially, once you override, you assume responsibility to merge future changes. This **increases maintenance work** and risks missing important updates (like a security fix in a template). Similar processes would be needed to customize LearnDash’s course layouts or Event Espresso’s ticketing pages. Each plugin’s customization paradigm is different (some use template files, others use hooks/filters), so your developers must learn and manage multiple approaches. The more customizations layered on, the harder it becomes to apply updates without breaking those custom tweaks.
    
    **Feature Modification Limits:** There are also functional limitations that may be hard to work around without hacking plugin code. For example, until recently, Paid Memberships Pro only allowed one membership level per user – if you wanted a user to have multiple memberships (say, for different chapters or programs), you couldn’t do it. (This was cited as a major limitation by users ([Do you use a free or paid membership plugin for your website ...](https://www.reddit.com/r/Wordpress/comments/juabbd/do_you_use_a_free_or_paid_membership_plugin_for/#:~:text=,plugin%20lacking%20if%20I)), and PMPro introduced a “Multiple Memberships per User” feature later to address it.) If down the line IESANZ needs some custom rule – like tiered event pricing based on membership seniority, or a course that’s only available to members who attended a certain event – such cross-cutting logic is **not straightforward with separate plugins**. Implementing that might involve writing a custom plugin or code snippet that hooks into each system (one to tag the user from the event plugin and another to check that tag in the LMS plugin, etc.). This approach is prone to breaking as plugins evolve.
    
    **UI Consistency:** From a design perspective, having so many plugins can lead to a fragmented user interface. The membership pages, the course dashboard, the event registration form, and the job board may all have different design patterns or form styles (since each plugin comes with its own UI). Achieving a consistent look likely means a lot of custom CSS overrides or template edits. And if the plugin outputs are not easily changeable, there may be **UI elements you’re stuck with**. For instance, some plugins hard-code certain form flows – the LMS might insist on a certain navigation for courses, or Event Espresso might have a multi-step registration form that’s hard to simplify. You can only customize within the bounds the plugin authors anticipated. This could make it challenging to deliver a smooth, unified experience. In contrast, a custom-built front end (as in a headless solution) lets you design every screen exactly as you want, without wrestling with predefined structures.
    
    **Risk of Breaking Functionality:** A big worry with deep customizations is inadvertently breaking plugin functionality. If you modify templates or use hooks incorrectly, you might disable validation on a payment form or cause membership status not to update. And when the plugin updates, your customization might become incompatible. In summary, **there’s an inherent trade-off between customization and stability** in the plugin approach. You often have to choose between living with a plugin’s limitations or venturing into custom modifications that raise the risk of errors. Neither is ideal. By comparison, with a headless build you start from a blank slate for the front-end, so you can build exactly the features and flows needed rather than bending pre-built components to fit the vision.
    
    ## 5. Scalability and Performance Concerns
    
    A WordPress site running **seven large plugins** (plus additional add-ons) is going to be much heavier than a vanilla site. Each plugin adds database tables, queries, and processing on each page load, which can significantly impact performance – especially under the load of many users.
    
    **Database Load:** Consider the operations happening in a scenario: A logged-in member browses the site. On a page load, WordPress must authenticate the user, then PMPro might check their membership level to restrict content, LearnDash might load their course progress, Event Espresso might check upcoming events they registered for, WP Job Manager might fetch any saved job alerts, WooCommerce might load cart/session data, etc. This could result in *dozens of database queries per page*. One developer’s review of PMPro noted *“the plugin makes so many unnecessary queries, you’d better have a very good server if you have a lot of users!”* ([Awfully bad performance - [Paid Memberships Pro - Content Restriction, User Registration, & Paid Subscriptions] Review | WordPress.org](https://wordpress.org/support/topic/awfully-bad-performance/#:~:text=BUT%3A%20The%20performance%20is%20just,have%20a%20lot%20of%20users)). The PMPro author responded acknowledging that *“this is a complicated plugin... [with] an outsized impact on performance”* and pointed users to caching and beefy hosting solutions to cope ([Awfully bad performance - [Paid Memberships Pro - Content Restriction, User Registration, & Paid Subscriptions] Review | WordPress.org](https://wordpress.org/support/topic/awfully-bad-performance/#:~:text=Hi%20there,out%20PMPro)). In other words, the plugin makers themselves recognize that **these features come at a cost in speed**. If IESANZ expects a growing member base (say thousands of members accessing resources concurrently), the site must be optimized carefully to avoid slow page loads or timeouts.
    
    **Logged-In Users and Caching:** Performance tuning for WordPress often relies on caching, but caching is far less effective for logged-in personalized content. Since members will be logging in to access member-only content and courses, many pages cannot be fully served from a cache (because they show user-specific info like “My Courses” or “My Membership status”). This means each request hits PHP and MySQL, exercising all those plugins’ logic. Under high traffic (e.g., an event registration opening or a new course launch where many members are active), the server CPU and database will be under strain. A comment in a performance forum put it bluntly: *“if you’re using LearnDash, prepare to throw more server hardware at your hosting when you have more concurrent logged-in users.”* ([LearnDash Plugin Really Slow - Website, Application, Performance](https://community.cloudflare.com/t/learndash-plugin-really-slow/177034#:~:text=LearnDash%20Plugin%20Really%20Slow%20,1)). The same applies to WooCommerce – an online store with heavy traffic needs careful scaling. The Woo team provides scaling tips, but it’s known that large WooCommerce sites can struggle without custom optimization (one reason some enterprises outgrow WooCommerce).
    
    **Concurrent Activities:** Imagine an IESANZ conference opens for registrations (Event Espresso) at the same time a new certification course is published (LearnDash) and job listings are active – the site could see spikes of usage in different sections. Each plugin might be efficient on its own, but together their resource usage stacks up. There have been cases of membership sites with LMS components where the page load times became unacceptable as user counts grew, forcing a move to more powerful servers or application-level refactoring. Without proactive testing and possibly a dedicated server or high-performance hosting, this stack may face **scalability bottlenecks**. The “awfully bad performance” review of PMPro mentioned earlier gave it 1 star due to slowdowns, which the author only mitigated by manually removing certain hooks and functionality ([Awfully bad performance - [Paid Memberships Pro - Content Restriction, User Registration, & Paid Subscriptions] Review | WordPress.org](https://wordpress.org/support/topic/awfully-bad-performance/#:~:text=The%20plugin%20has%20a%20lot,Great)). That kind of low-level tweaking is not sustainable for the long run.
    
    **Security Plugin Overhead:** Adding Wordfence or iThemes on top of all this will further tax performance. Wordfence, for example, does real-time firewall filtering and malware scanning; one drawback noted is its *“impact on the overall performance of your WordPress website”*, given the heavy scanning it performs ([3 Best WordPress Security Plugins to Lock Down Your Site](https://wplift.com/best-wordpress-security-plugins/#:~:text=3%20Best%20WordPress%20Security%20Plugins,Make%20no)). These security measures are necessary with WordPress, but they add CPU and memory usage. So we’re layering security processing on an already complex, dynamic page build. This could slow down response times for users, unless the hosting environment is scaled up significantly. It’s a bit of a Catch-22: you need security plugins to protect a large WordPress site, but those plugins then make the site heavier and sometimes can conflict (for instance, they might block an AJAX call from an event plugin if not configured properly).
    
    **Headless Performance Benefits:** It’s worth contrasting this with the headless approach. In a headless architecture, you’d typically have a **static or statically generated frontend** (Next.js can prerender pages) served via CDN, and use APIs for dynamic data. That means most users (especially anonymous visitors) get extremely fast page loads, and even logged-in interactions can be optimized via client-side fetching. You wouldn’t be invoking an entire CMS stack on each page view. The difference is stark – headless sites often see *much* faster page speed, since WordPress’s server-side rendering and plugin overhead are removed ([Headless CMS vs WordPress | Hygraph](https://hygraph.com/learn/headless-cms/headless-cms-vs-wordpress#:~:text=,without%20tying%20users%20to%20WordPress)). The Hygraph report explicitly notes *“numerous plugins can slow site performance”* on WordPress, whereas headless CMSs with modern frontends are *“optimized for speed”* ([Headless CMS vs WordPress | Hygraph](https://hygraph.com/learn/headless-cms/headless-cms-vs-wordpress#:~:text=,without%20tying%20users%20to%20WordPress)). In terms of scalability, a Next.js app can scale horizontally or utilize serverless functions for specific tasks, and Shopify (for e-commerce) and Xero’s API (for accounting) are cloud services built to scale on their end. This means the **heavy lifting is offloaded from your server**. The WordPress approach, in contrast, concentrates all load on your WordPress server (courses, members, orders, etc.), which must be scaled vertically (bigger CPU, more RAM, etc.) and tuned carefully. In summary, while it’s possible to scale WordPress to handle high traffic, it often requires significant investment in infrastructure and sometimes architectural workarounds – essentially fighting against the grain of the monolithic approach. A headless solution is architected from the start for performance and can handle growth more gracefully.
    
    ## 6. User Experience Issues
    
    With the plugin stack approach, **providing a seamless user experience across all site sections is challenging**. Users may encounter inconsistent login flows, redundant profile sections, or confusion navigating between features.
    
    **Multiple Login/Registration Points:** Ideally, a user would sign up once and have one login for everything. In WordPress, the user accounts are shared globally, but plugins often introduce their own registration or login forms. For example, a “register for an event” form in Event Espresso can create a WordPress user behind the scenes, but as mentioned earlier, it might not assign the proper membership level or profile info in PMPro ([PaidMemberships Pro - LearnDash and EE4 | Event Espresso](https://eventespresso.com/topic/paidmemberships-pro-learndash-and-ee4/#:~:text=2,PaidMembershipsPro%20to%20access%20the%20course)). Similarly, LearnDash might have a frontend login widget for course access, while Paid Memberships Pro has its own membership sign-up form. Without careful unification, members might see separate prompts like “Login to access courses” vs “Login to manage membership” that technically do the same thing but appear different. This is not just theoretical: the Event Espresso + PMPro case showed a user had to *re-register* to get membership access after signing up through an event ([PaidMemberships Pro - LearnDash and EE4 | Event Espresso](https://eventespresso.com/topic/paidmemberships-pro-learndash-and-ee4/#:~:text=2,PaidMembershipsPro%20to%20access%20the%20course)). Such hiccups would frustrate users and make the site feel cobbled together. Achieving a single sign-on flow requires customizing all those forms to funnel into one process (e.g., disable plugin-specific registration pages in favor of one unified registration). It’s doable, but requires meticulous work and testing.
    
    **Inconsistent Account Interfaces:** Once logged in, what does the user’s “Account” area look like? Each plugin may add a menu in the WordPress admin bar or a frontend “dashboard” page for its portion: e.g. LearnDash has a student profile page listing courses, WP Job Manager might have a “[Job Dashboard]” page for managing job listings, PMPro has a shortcode for membership account details, WooCommerce has a “My Account” section for orders. Without integration, the user might have to jump between these sections, each with a different layout. There could be **redundant profile pages** – for instance, WordPress has the default Profile page (in /wp-admin for users) which is usually not used on the frontend, PMPro might provide a frontend “edit profile” for members, and perhaps the site’s theme has a custom profile area too. It all needs unification to avoid confusion. As an admin, you’d want to aggregate relevant info in one dashboard (“My IESANZ Account” that shows membership status, enrolled courses, event registrations, job posts, etc.). Achieving that means custom development because no plugin alone will produce such a composite view. The default is disjointed: e.g., a user might click “My Courses” and not see anything about their membership renewal, or go to “My Membership” and not see the events they registered for. These **UX inconsistencies can lead to support issues** (“Where do I find the event I booked?”).
    
    **Differing UI/Design Patterns:** Each plugin was built in isolation, so the terminology and workflow in each section might differ. The LMS might talk about “Profile” and “Certificates”, the membership plugin about “Account” and “Invoices”, the event plugin about “Registrations” and “Tickets”. Users could feel like they are moving between separate mini-sites. It requires a concerted content strategy to label and design things consistently (e.g., maybe rename some sections or customize text via translation files). If not, the site can feel patchwork. There’s also potential inconsistency in email communications – each plugin might send its own emails (welcome emails, event reminders, course completion, etc.) with varying templates and styles. Without customization, a user could get a membership welcome email that looks one way and an event registration confirmation that looks completely different. This weakens the branding and professionalism of the site’s user experience.
    
    **Potential Errors in Flow:** When combining functionalities, edge cases must be handled: What if a user’s membership lapses – do they lose access to courses immediately? Does LearnDash communicate that gracefully or does the user just start seeing “permission denied”? If someone signs up for a course (via WooCommerce perhaps) and that includes membership, is their account properly flagged in all systems? These are user experience questions as much as integration questions. If not handled, users might hit dead ends or confusing messages (e.g., “You must be a member to view this page” even if they *are* a member, simply because one plugin didn’t update another plugin’s status). In the earlier Reddit example, the lack of a cart in PMPro meant the organization had to use WooCommerce for selling multiple courses, but that introduced complexity in keeping PMPro and WooCommerce in sync for access control ([Paid Memberships Pro, LearDash, WooCommerce integration.  : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=popular%20payment%20gateway%20in%20The,Mollie%20iDeal)). The user there described PMPro’s one-by-one checkout limitation as *“nowhere close to user friendliness”* when many courses are involved ([Paid Memberships Pro, LearDash, WooCommerce integration.  : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=popular%20payment%20gateway%20in%20The,Mollie%20iDeal)). These kinds of limitations can directly translate to a clunky UX: e.g., needing to check out separately for each item because the membership plugin can’t handle bundling.
    
    In contrast, a custom headless solution can be planned with a **holistic user journey** in mind – you design the flows so that the user never knows that, say, courses and events are powered by different systems on the back end. The headless front-end can present one unified account area and orchestrate all the API calls necessary behind the scenes. This typically results in a cleaner, more intuitive experience, because you’re not constrained by the seams between plugins.
    
    ## 7. Long-Term Cost Considerations
    
    At first glance, using WordPress plugins might seem cost-effective – many are free or low-cost to start with. However, the **total cost of ownership** of this approach over the years can be quite high, due to several factors:
    
    **Licensing and Subscription Fees:** Several of the recommended plugins require paid licenses for full functionality or support:
    
    - **LearnDash** – This is a premium plugin (currently around US$199+ per year for a basic license). That’s a recurring annual fee to receive updates and support.
    - **Event Espresso** – The “Decaf” version is free, but for advanced features (ticketing, payment gateways, etc.) you likely need a premium license. Their packages can run a couple of hundred dollars annually for support and add-ons.
    - **Paid Memberships Pro** – The core is free, but many useful add-ons (for integration, content dripping, etc.) require a PMPro Plus membership (about US$297/year for unlimited sites). To use it with LearnDash, you’d need their integration add-on (available with the Plus plan) ([LearnDash Add On Plugin for Paid Memberships Pro](https://www.paidmembershipspro.com/add-ons/learndash-integration/#:~:text=LearnDash%20Add%20On%20Plugin%20for,and%20LearnDash%20installed%20and)).
    - **WP Job Manager** – The base plugin is free, but if IESANZ needs features like resume uploads, job alerts, or applications, those are paid add-ons. This could be an additional few dozen dollars per add-on per year, or bundle pricing.
    - **Campaign Monitor integration** – If using an official plugin, it might be free, but Campaign Monitor as a service charges for subscriber count and emails sent. Additionally, if a third-party integration service is used (like Zapier or WP Fusion), that could introduce subscription costs.
    - **WooCommerce** – The core is free, but extensions are often paid. Crucially, the **Xero integration** likely incurs cost. For example, a popular solution is MyWorks Sync for WooCommerce+Xero, which starts at ~$19/month (billed annually) for modest order volume ([MyWorks Sync Pricing, Alternatives & More 2025 | Capterra](https://www.capterra.com/p/178702/MyWorks-Sync/#:~:text=MyWorks%20Sync%20Pricing%2C%20Alternatives%20%26,Starting%20from%3A%20%2424%2FPer%20Month)). Alternatively, the WooCommerce official Xero plugin is about $79 per year. Either way, connecting to Xero is not free at scale.
    - **Security plugins** – Wordfence’s premium plan (for real-time firewall rules and country blocking etc.) is ~$99/year per site. iThemes Security Pro is around $80/year for 2 sites or $199/year for unlimited. One might stick to free versions, but then you invest more time manually managing security.
    
    So in pure licensing, we could easily be looking at **several hundred to a thousand dollars per year** in plugin fees to keep everything updated and supported. Over, say, 5 years, that’s $5K+ just in licenses, not including hosting.
    
    **Hosting and Infrastructure:** A site with this many moving parts will require a robust hosting plan. It’s likely not going to run well on a basic shared host. You’d want a high-performance managed WordPress host (which might cost $50-$100+ per month for a business plan) or perhaps a VPS/cloud server with sufficient resources (plus management costs). Additionally, as traffic grows, you may need to scale up the server, use a CDN, and invest in performance optimization plugins or services. These costs can add up, whereas a headless approach could offload much of the traffic to CDN (for static assets) and leverage scalable services (with costs more directly tied to usage).
    
    **Development & Maintenance Labor:** This is often the biggest hidden cost. As detailed, significant developer effort will be needed to integrate and customize the plugins to meet all requirements. That initial build cost might be comparable to building a custom headless site. But beyond initial development, there’s the ongoing maintenance labor: applying updates, troubleshooting issues when something breaks, adjusting custom code to accommodate plugin changes, etc. One source sums it up by saying organizations often *“invest heavily in ongoing adjustments [with WordPress], limiting innovation and draining resources”* ([Headless CMS vs WordPress | Hygraph](https://hygraph.com/learn/headless-cms/headless-cms-vs-wordpress#:~:text=from%20varied%20sources%2C%20vulnerabilities%20often,built%20integrations%2C%20offering%20cleaner%2C%20simpler)). Every hour a developer spends diffing plugin update code to merge custom template changes, or fixing a conflict after an update, is a cost. Similarly, if a vulnerability pops up and emergency patching is needed off-cycle, that’s unplanned cost. **These ongoing costs can eclipse the initial build savings of using plugins.**
    
    **Opportunity Cost:** There’s also a less tangible cost: by committing to this plugin architecture, the organization may find it harder to adopt new features or technologies in the future. For example, if in two years IESANZ wants a mobile app, with the current approach they might need to retrofit an API onto WordPress or find ways to connect the plugins to the app – not impossible, but more complex than if they had a headless API from the start. If the WordPress site runs into performance issues or needs a partial rebuild to accommodate a new requirement, that’s a cost triggered by the limitations of the approach. Many businesses end up **migrating away from complex WordPress setups** when they hit a growth ceiling, essentially paying twice (once for the WP solution, then again to rebuild elsewhere). A headless solution, being modular, is more adaptable and can often evolve without complete rewrites. That future flexibility has real monetary value.
    
    In contrast, while a headless architecture might require more upfront development investment, it **saves costs in the long run** by avoiding plugin license fees, reducing maintenance workload, and preventing costly failures. It also tends to have costs scale more linearly with usage (e.g., you pay for what you use on a platform like Shopify or a cloud service, and if usage is high it hopefully correlates with organizational growth/revenue). The WordPress plugin route can introduce “surprise” costs – for instance, a security breach due to a plugin flaw could incur huge costs in emergency response and reputational damage. We have seen incidents where millions of WordPress sites were suddenly at risk due to a plugin, necessitating rapid action ([Critical Vulnerability Detected in WooCommerce on July 13, 2021](https://woocommerce.com/posts/critical-vulnerability-detected-july-2021/#:~:text=Critical%20Vulnerability%20Detected%20in%20WooCommerce,was%20identified%20and%20responsibly%20disclosed)). That risk itself is a cost (insurance, contingency planning, etc.). A modern headless setup greatly reduces the likelihood of such catastrophic plugin failures impacting the site, thereby protecting the organization from those hidden costs.
    
    ---
    
    Having examined the WordPress plugin approach in detail, we can see a pattern: **the more the site leans on numerous plugins, the more it incurs in security risk, maintenance overhead, integration complexity, performance load, and long-term costs**. Now, let’s compare this with a headless CMS and API-driven approach, which takes an almost opposite philosophy – custom-build the key features and integrate via robust APIs, rather than pile on plugins.
    
    # Advantages of a Headless CMS & API-Driven Approach (Next.js + Sanity + Shopify + Xero API)
    
    A headless architecture means the front-end is decoupled from the back-end. For IESANZ, we envision using modern frameworks and services: for example, a **Next.js** front-end (React-based) that consumes content from **Sanity CMS** (a headless content repository), handles e-commerce via **Shopify** (for payments, product/catalog management), and communicates with the **Xero API** for accounting. User authentication and membership logic could be custom-built or use an Auth-as-a-Service (like Auth0 or Firebase Auth), and events/courses can be managed in the CMS or via custom microservices. This approach offers numerous benefits:
    
    - **Stronger Security:** The attack surface is dramatically reduced. In a headless setup, your CMS (Sanity) is not publicly accessible – it’s usually a cloud service or runs on a server only your application talks to. The public-facing site is a Next.js app that mainly serves static pages or limited API endpoints. This means common WordPress attacks (SQL injections, XMLRPC abuses, etc.) simply don’t apply. There are no generic plugins for hackers to exploit. As one analysis puts it, headless CMS platforms *“have stronger security frameworks without plugins or themes, reducing the attack surface”* ([Like a glass hammer, headless WordPress is a bad idea | Glide](https://www.gpp.io/expert-guides/like-a-glass-hammer-headless-wordpress-is-a-bad-idea-a9AoT5r4BW7g#:~:text=Like%20a%20glass%20hammer%2C%20headless,reduces%20the%20attack%20surface)). Any dynamic functionality is implemented via secure API calls and custom code, which you control and can lock down. For example, instead of a PHP form vulnerable to injection, you have an API endpoint that validates input and uses parameterized database queries or external services – inherently more secure when done properly. You also avoid the need for bulky security plugins, because an attacker cannot just upload a script or SQL inject your site – there’s no direct database connectivity exposed to them in a well-designed headless app. Overall, the headless architecture is **far less prone to the constant stream of CVEs** that plague WordPress plugins ([Headless CMS vs WordPress | Hygraph](https://hygraph.com/learn/headless-cms/headless-cms-vs-wordpress#:~:text=,plugins%20for%20extended%20features%2C%20even)). You still follow security best practices, but you’re dealing with a narrower threat profile (mostly protecting API endpoints and ensuring cloud services are configured securely). This translates to peace of mind and lower likelihood of emergency security incidents.
    - **Better Performance & Scalability:** Next.js can pre-render pages (SSG or SSR) and leverage CDN caching, meaning lightning-fast load times. The bulk of content (e.g., public pages, course descriptions, event info) can be served as static HTML/JS, which is extremely quick and can handle heavy traffic easily. For logged-in functionality, Next.js can use client-side rendering and selective serverless functions – again very scalable, as you can deploy on serverless platforms that auto-scale with load. The result is a site that can handle spikes of traffic or high concurrent usage much more gracefully than a single WordPress/PHP server. Because the back-end and front-end are separate, each can scale independently: if the front-end needs more instances, you add them; if the CMS needs more API throughput, you adjust its plan. **No single server is bearing the whole load**. Also, services like Shopify are built to handle enterprise-level loads, so offloading e-commerce transactions to Shopify means that part of the system is already highly optimized. Users will experience a snappy site – no WordPress theme bloat or plugin lag. Clean, purpose-built code tends to run faster than generalized plugin code. Empirical evidence shows headless sites often significantly outperform their monolithic counterparts in speed. One web agency noted that switching to headless *“improved [their] website greatly in both increasing performance and delivering a richer experience”* ([From WordPress to Headless: the complete before/after ... - CREAM](https://www.cream-touch.com/blog/headless-migration-case-study#:~:text=From%20WordPress%20to%20Headless%3A%20the,While%20we%20already)). Similarly, TechHero states headless CMS beats WordPress for speed and scalability due to the lightweight front-end and reduced server work ([Why Headless CMS Beats WordPress for Speed, Security & Scalability](https://www.techhero.com.au/resources/insights/headless-cms-vs.-wordpress-pros--cons-explained#:~:text=Why%20Headless%20CMS%20Beats%20WordPress,flexibility%20and%20performance%20to)). In summary, **performance is a major win** for headless – faster pages, better SEO (Core Web Vitals), and the capacity to handle growth without a complete re-architecture.
    - **Unlimited Customization & Flexibility:** A headless (or JAMstack) approach is essentially a custom application. You have full freedom to design the data models and user flows to exact business needs. Want a custom membership onboarding wizard? You can build it exactly so. Need the events registration to do something unique (like group registrations or complex pricing rules)? You have the freedom to code that logic, rather than trying to contort a plugin. The front-end can be made to match IESANZ’s branding and UX guidelines perfectly – no patchwork of plugin UIs. **Design consistency is guaranteed** because one team is building the whole front-end. Moreover, you can use any modern UI component or library in a React framework, enabling a polished, contemporary feel (as opposed to some WordPress plugins which might output dated-looking interfaces). On the back-end, a headless CMS like Sanity provides a flexible schema for content – you can model content types for courses, events, etc. in a way that makes sense, without being tied to WordPress’s post types or a plugin’s fixed fields. This also means future enhancements are easier: if you decide to introduce, say, a mentorship program section, you just create new content types or microservices and integrate – no worrying *“can plugin X handle this?*”. As CleanCommit puts it, *“performance is [one] thing that sets headless apart… by separating backend and frontend, you also break free from WordPress’s limitations”* ([Headless CMS vs WordPress - Which One Is Better? - Clean Commit](https://cleancommit.io/blog/headless-cms-vs-wordpress-which-one-is-better/#:~:text=Headless%20CMS%20vs%20WordPress%20,that%20dynamically%20generates%20pages)). Front-end flexibility is highlighted as a key advantage: traditional WordPress is limited to PHP themes, whereas headless allows any technology or custom feature ([Navigating the Shift to WordPress as a Headless CMS](https://udx.io/guidance/navigating-the-shift-to-wordpress-as-a-headless-cms#:~:text=Traditional%20WordPress%20limits%20front,creativity%20and%20innovation%20in%20design)) ([Navigating the Shift to WordPress as a Headless CMS](https://udx.io/guidance/navigating-the-shift-to-wordpress-as-a-headless-cms#:~:text=applications)). This flexibility is not just for developers’ sake – it translates to the business being able to **innovate faster**. You’re not waiting on a plugin update or held back by “that’s just how the plugin works” – if you want a change, your devs can implement it directly. In the long run, this adaptability is priceless because the site can evolve with the organization’s needs and with web technology trends.
    - **Seamless Third-Party Integration:** Headless architecture is *designed* for integrations – everything communicates via APIs. This tends to be more robust than plugin integrations within WordPress. For example, instead of relying on a WooCommerce Xero plugin (which could fail if WooCommerce changes internals or if the plugin hits a bug), you can write a small integration service that listens for Shopify orders (via webhook) or uses Shopify’s API, and then directly pushes invoices to Xero through Xero’s official API. This approach is more straightforward to monitor and maintain. Each third-party service (Sanity, Shopify, Xero, Campaign Monitor, etc.) has well-documented APIs meant for integration. By leveraging them, you avoid the middleman of a WordPress plugin that tries to map one system to another. This usually means **fewer points of failure** and more exact control. For instance, if a certain membership field needs to sync to Campaign Monitor as a subscriber tag, you can script that precisely, rather than hoping a generic plugin sync covers that field. The Hygraph article notes WordPress relies on plugins for integrations, whereas headless CMSs use cleaner pre-built integrations or direct API use, avoiding the bloat and maintenance of plugins ([Headless CMS vs WordPress | Hygraph](https://hygraph.com/learn/headless-cms/headless-cms-vs-wordpress#:~:text=,which%20add%20up%20over%20time)). In our context: using Shopify for payments means we inherently support a wide range of payment gateways (including ones like iDEAL for NL, which the Reddit user struggled with in WooCommerce ([Paid Memberships Pro, LearDash, WooCommerce integration. : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=,if%20you%20can%20avoid%20it))). We wouldn’t have to install separate plugins for payment gateways – Shopify handles it. Sending emails via Campaign Monitor can be done by calling Campaign Monitor’s API from our code when certain events happen (user registered, etc.), eliminating the need for a WordPress plugin that might duplicate that. **In short, integrations in a headless model are more direct and often more reliable**, because they’re under your control and use standard protocols. This also makes debugging easier – you can see the requests to external APIs and handle errors as you choose, rather than a black-box plugin failing silently.
    - **Lower Maintenance Overhead:** While a headless project does involve maintaining custom code, it spares you from the constant churn of plugin updates. The divisions are clearer: you’ll update your front-end framework (Next.js) maybe when you choose to adopt a new version, and update any library dependencies on your own schedule. The CMS (Sanity) and Shopify will update themselves in a SaaS model, but those updates don’t break your integration since they maintain API backward compatibility. There’s no weekly “patch Tuesday” for 10 plugins. You won’t be reading changelogs of five different vendors to see if your site will break. Many of the maintenance tasks (e.g., server updates, scaling) can be handled by platform services – for example, Vercel or Netlify can host Next.js with minimal ops work, and Sanity is cloud-hosted (no DB to patch). This means the ongoing effort is focused on purposeful improvements rather than firefighting. WordPress, by contrast, needs frequent hands-on care – as we discussed, failing to update constantly is dangerous, but updating often causes issues that need fixing. A headless setup avoids this treadmill. A study by UDX highlighted that in a traditional WordPress setup, you face *“maintenance and updates”* drawbacks, whereas headless reduces those significantly ([Navigating the Shift to WordPress as a Headless CMS](https://udx.io/guidance/navigating-the-shift-to-wordpress-as-a-headless-cms#:~:text=1.%20Front,Plugin%20Dependency)) ([Navigating the Shift to WordPress as a Headless CMS](https://udx.io/guidance/navigating-the-shift-to-wordpress-as-a-headless-cms#:~:text=Traditional%20WordPress%20can%20experience%20slower,side%20rendering%20techniques)). Realistically, you will have some maintenance on a headless app (e.g., ensure packages are updated for security, monitor the services), but you control the timing and scope. If it ain’t broke, you don’t have to touch it – whereas in WordPress, even if your features are fine, you must update to patch security holes in underlying plugins. The reduced maintenance frees up the team to focus on content and new features, rather than constant system upkeep.
    - **Long-Term Cost Efficiency:** Although a headless approach may involve some subscription costs (Sanity has usage-based pricing, Shopify has a plan percentage, etc.) and requires custom development (initial build investment), it often **pays off over time**. You save on many plugin licensing fees. You likely can opt for simpler hosting (static hosting is cheap; you won’t need an expensive managed WP host). More importantly, you save the “soft costs” of not having as many outages or redevelopment efforts. For example, the WooCommerce developer who abandoned it noted that for high-volume businesses, those small hiccups in WooCommerce led to real revenue loss ([Longtime Developer: I’m Out - [WooCommerce] Review | WordPress.org](https://wordpress.org/support/topic/longtime-developer-im-out/#:~:text=For%20small%20to%20medium,a%20significant%20loss%20in%20revenue)). By using more robust, scalable services, you avoid those revenue hits. Also, with headless you avoid getting tied into a single monolithic system – you’re free to swap out components if a better option comes along (e.g., if in 5 years Shopify is replaced by something else, you can integrate that without rebuilding the entire site). This future-proofing means you **won’t need a ground-up rebuild** as soon as you might with WordPress. WordPress sites often require a major overhaul every few years (due to accumulated plugin debt or new requirements that the old setup can’t handle). A well-architected headless solution can evolve continuously with much less friction. All these factors contribute to a lower total cost of ownership in the long run. Indeed, companies migrating off WordPress cite scalability and flexibility as reasons – they foresee fewer costly issues down the road ([WordPress to Headless CMS Migration | FocusReactive](https://focusreactive.com/migration-from-wordpress-to-headless-cms/#:~:text=Companies%20often%20migrate%20from%20WordPress,offers%20more%20dynamic%20content%20management)).
    
    # Conclusion: Headless Architecture vs. WordPress Plugins – Long-Term Business Value
    
    In comparing the two approaches, it’s clear that **the headless CMS/API-driven architecture offers superior long-term value and future-proofing** for an organization like IESANZ. The WordPress plugin method may achieve functional goals in the short term, but it does so with significant baggage: security vulnerabilities to monitor, frequent updates and potential breakages, complex integrations that require custom patches, performance that will degrade as the member base grows, and a patchwork user experience that must be constantly refined. This can hamstring the organization – instead of focusing on serving members and delivering new digital initiatives, the team could get caught up in a cycle of plugin management and troubleshooting. Moreover, the **risks of failure** in the plugin approach are not just hypothetical; we have real examples: a membership site with a similar plugin stack needed continual custom fixes to keep things together ([Paid Memberships Pro, LearDash, WooCommerce integration.  : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=I%20have%20written%20a%20custom,the%20new%20updates%20and%20deprecations)) ([Paid Memberships Pro, LearDash, WooCommerce integration.  : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=,for%20a%20good%20WC%20dev)), and a developer handling a high-traffic WooCommerce site finally gave up because the platform couldn’t reliably scale without issues ([Longtime Developer: I’m Out - [WooCommerce] Review | WordPress.org](https://wordpress.org/support/topic/longtime-developer-im-out/#:~:text=For%20small%20to%20medium,a%20significant%20loss%20in%20revenue)) ([Longtime Developer: I’m Out - [WooCommerce] Review | WordPress.org](https://wordpress.org/support/topic/longtime-developer-im-out/#:~:text=I%E2%80%99ve%20followed%20all%20best%20practices%3A,never%20properly%20checked%20for%20issues)). These scenarios illustrate that as an organization’s needs grow, the WordPress plugin approach can become a bottleneck – or even a liability – prompting an eventual rebuild.
    
    A modern headless architecture, by contrast, positions the IESANZ website as a **flexible, scalable platform**. It emphasizes strong foundations: clean separation of concerns, best-in-class services for each need (CMS, e-commerce, etc.), and a bespoke front-end that can adapt to any requirement. In terms of security, a headless setup dramatically reduces exposure, sparing IESANZ from the constant worry of plugin exploits and providing greater peace of mind ([Headless CMS vs WordPress | Hygraph](https://hygraph.com/learn/headless-cms/headless-cms-vs-wordpress#:~:text=,plugins%20for%20extended%20features%2C%20even)). In terms of performance and reliability, headless leverages cutting-edge tech and global infrastructure, delivering fast load times and the ability to handle surges (for example, a static-site approach could handle traffic spikes around big events effortlessly, where a WordPress site might crash without aggressive caching). This translates directly to **better member satisfaction and engagement** – users get a snappier, smoother experience, which reflects well on the organization’s professionalism.
    
    When it comes to **future-proofing**, the headless model really shines. The digital landscape is always evolving: new devices, new channels (imagine AR/VR meetings or an IoT integration for lighting professionals, etc.), or simply new features the organization may want. A headless architecture is inherently omni-channel – content is accessible via API, so you can reuse it on a website, a mobile app, or any other platform with ease. WordPress, in a traditional sense, is web-first and page-oriented, making it harder to repurpose content elsewhere without additional plugins or services. By investing in an API-driven system, IESANZ ensures that its data and content are portable and ready for whatever comes next. Need a mobile app for members? The same API that serves the website can feed the app. Want to integrate directly with other industry systems? Exposing certain APIs or using webhooks is straightforward. In essence, headless architecture provides **agility** – the ability to pivot or extend functionality without being locked into a specific CMS’s way of doing things ([Headless CMS vs WordPress | Hygraph](https://hygraph.com/learn/headless-cms/headless-cms-vs-wordpress#:~:text=palette%2C%20supporting%20diverse%20tech%20stacks,Headless%20CMS)) ([WordPress to Headless CMS Migration | FocusReactive](https://focusreactive.com/migration-from-wordpress-to-headless-cms/#:~:text=Companies%20often%20migrate%20from%20WordPress,offers%20more%20dynamic%20content%20management)).
    
    Finally, it’s important to underscore the **long-term cost savings and business continuity** aspect. While a headless rebuild might seem like a larger up-front project than configuring plugins, it avoids the potential hidden costs we identified with the plugin route (license fees, expensive emergencies, lost opportunities due to inflexibility). The total cost of ownership over, say, a 5-10 year horizon is likely lower with headless because you won’t face as many reimplementation or patchwork integration costs. Each year the headless site can be incrementally improved without the need for wholesale reworking. Many organizations that depend on their website as a core business asset have already made this shift, recognizing that the resilience and scalability of a headless architecture protect their investment in the long run. For IESANZ, whose website serves a professional community, making that investment now means the site will be equipped to grow and adapt for years to come, without being hamstrung by outdated plugins or hacks.
    
    In summary, while the WordPress plugin-based approach might check the boxes initially, it comes with substantial baggage and risk. A headless CMS + Next.js solution offers **robust security, high performance, rich customization, smoother integrations, lower maintenance, and adaptability**, all of which provide greater business value over time. It’s a solution built for growth, not just for the present. Given these points, a modern headless architecture is the superior choice to ensure IESANZ’s web presence remains secure, efficient, and capable of evolving with the organization’s needs – providing a solid foundation for the future rather than technical debt. The evidence from industry trends and cautionary tales of plugin failures strongly supports making this strategic leap now, rather than later when the costs or consequences of the plugin route might force the decision under less favorable circumstances.
    
    **Sources:**
    
    1. Patchstack Vulnerability Database – *Paid Memberships Pro*: List of recent security issues (SQL injection, access bypass) ([Paid Memberships Pro Vulnerabilities - Patchstack](https://patchstack.com/database/wordpress/plugin/paid-memberships-pro#:~:text=Image%3A%20Fixed%2023%20patched)).
    2. WPScan Vulnerability Report – *LearnDash LMS*: History of exploits including critical SQL injection (CVSS 9.8) ([LearnDash LMS WordPress Plugin Security Vulnerabilities | WPScan](https://wpscan.com/plugin/sfwd-lms/#:~:text=Title)).
    3. WPScan Vulnerability Report – *WP Job Manager*: Notable vulnerabilities like arbitrary file upload (CVSS 10.0) ([WP Job Manager WordPress Plugin Security Vulnerabilities | WPScan](https://wpscan.com/plugin/wp-job-manager/#:~:text=WP%20Job%20Manager%20,Unauthenticated%20Arbitrary%20File%20Upload)).
    4. Patchstack – *Wordfence Security Plugin*: Authenticated stored XSS issue in 2022 (fixed in 7.6.1) ([WordPress Wordfence Security – Firewall & Malware Scan plugin <= 7.6.0 - Authenticated Stored Cross-Site Scripting (XSS) vulnerability - Patchstack](https://patchstack.com/database/wordpress/plugin/wordfence/vulnerability/wordpress-wordfence-security-firewall-malware-scan-plugin-7-6-0-authenticated-stored-cross-site-scripting-xss-vulnerability#:~:text=Image%3A%20Patch%20priority%3A%20low)).
    5. Wordfence Advisory – *iThemes Security*: Open redirect vulnerability in versions ≤8.1.4 ([iThemes Security <= 8.1.4 - Open Redirection via redirect_to_https](https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/better-wp-security/ithemes-security-814-open-redirection-via-redirect-to-https#:~:text=iThemes%20Security%20%3C%3D%208.1.4%20,to%20the%20use%20of)).
    6. Reddit (r/WordPress) – *Discussion by developer managing PMPro+LearnDash+WooCommerce site*: custom integration required and maintenance challenges ([Paid Memberships Pro, LearDash, WooCommerce integration. : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=I%20have%20written%20a%20custom,the%20new%20updates%20and%20deprecations)) ([Paid Memberships Pro, LearDash, WooCommerce integration. : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=,for%20a%20good%20WC%20dev)).
    7. Reddit – *Comment by PMPro co-founder (“ideadude”)*: Advising against stacking WooCommerce and PMPro due to complexity ([Paid Memberships Pro, LearDash, WooCommerce integration. : r/Wordpress](https://www.reddit.com/r/Wordpress/comments/1bxz1kr/paid_memberships_pro_leardash_woocommerce/#:~:text=%E2%80%A2)).
    8. Event Espresso Support Forum: No official integration with PMPro; users have to re-register to gain membership access after event signup ([PaidMemberships Pro - LearnDash and EE4 | Event Espresso](https://eventespresso.com/topic/paidmemberships-pro-learndash-and-ee4/#:~:text=2,PaidMembershipsPro%20to%20access%20the%20course)) ([PaidMemberships Pro - LearnDash and EE4 | Event Espresso](https://eventespresso.com/topic/paidmemberships-pro-learndash-and-ee4/#:~:text=Hi%20James%2C)).
    9. WordPress.org Review – *“Awfully bad performance” (PMPro)*: User feedback on severe performance issues and many DB queries with PMPro on large user base ([Awfully bad performance - [Paid Memberships Pro - Content Restriction, User Registration, & Paid Subscriptions] Review | WordPress.org](https://wordpress.org/support/topic/awfully-bad-performance/#:~:text=The%20plugin%20has%20a%20lot,Great)).
    10. Response from PMPro Lead Developer: Acknowledging heavy performance footprint and need for strong hosting/caching ([Awfully bad performance - [Paid Memberships Pro - Content Restriction, User Registration, & Paid Subscriptions] Review | WordPress.org](https://wordpress.org/support/topic/awfully-bad-performance/#:~:text=Hi%20there,out%20PMPro)).
    11. Cloudflare Community – *LearnDash Slow Performance*: Advice that large LearnDash usage requires significant server resources ([LearnDash Plugin Really Slow - Website, Application, Performance](https://community.cloudflare.com/t/learndash-plugin-really-slow/177034#:~:text=LearnDash%20Plugin%20Really%20Slow%20,1)).
    12. WordPress.org Review – *“Longtime Developer: I’m Out” (WooCommerce)*: Developer cites inability to smoothly integrate even official extensions, slow issue resolution, and scalability problems for high-volume store ([Longtime Developer: I’m Out - [WooCommerce] Review | WordPress.org](https://wordpress.org/support/topic/longtime-developer-im-out/#:~:text=For%20small%20to%20medium,a%20significant%20loss%20in%20revenue)) ([Longtime Developer: I’m Out - [WooCommerce] Review | WordPress.org](https://wordpress.org/support/topic/longtime-developer-im-out/#:~:text=I%E2%80%99ve%20followed%20all%20best%20practices%3A,never%20properly%20checked%20for%20issues)).
    13. Hygraph (Headless CMS vendor) – *Headless CMS vs WordPress*: Outlines WordPress disadvantages: frequent security issues, high maintenance, plugin dependency, slower speeds, limited flexibility ([Headless CMS vs WordPress | Hygraph](https://hygraph.com/learn/headless-cms/headless-cms-vs-wordpress#:~:text=,plugins%20for%20extended%20features%2C%20even)) ([Headless CMS vs WordPress | Hygraph](https://hygraph.com/learn/headless-cms/headless-cms-vs-wordpress#:~:text=,that%20support%20faster%20loading%20times)).
    14. FocusReactive (Web agency) – *Migration from WordPress to Headless*: States companies migrate to headless to solve scalability, security, and performance problems; headless enhances site performance and security ([WordPress to Headless CMS Migration | FocusReactive](https://focusreactive.com/migration-from-wordpress-to-headless-cms/#:~:text=Companies%20often%20migrate%20from%20WordPress,offers%20more%20dynamic%20content%20management)).
    15. BleepingComputer News – *Ultimate Member Plugin Zero-day*: Example of a membership plugin exploit allowing admin takeover (CVE-2023-3460, critical 9.8) ([Hackers exploit zero-day in Ultimate Member WordPress plugin with 200K installs](https://www.bleepingcomputer.com/news/security/hackers-exploit-zero-day-in-ultimate-member-wordpress-plugin-with-200k-installs/#:~:text=Hackers%20exploit%20a%20zero,and%20registering%20rogue%20administrator%20accounts)).
    16. UDX Tech – *Headless WordPress advantages*: Notes that decoupling front-end improves performance and security by minimizing direct exposure of CMS ([Navigating the Shift to WordPress as a Headless CMS](https://udx.io/guidance/navigating-the-shift-to-wordpress-as-a-headless-cms#:~:text=users%20interact%20with,without%20impacting%20the%20content%20layer)).
- Recommended approach (03/25)
    
    **Summary & Risks:**
    
    The WordPress-based approach championed by Purple Giraffe/Hannans360 relies on a rapid, prototype-driven model that uses a suite of off-the-shelf plugins. Their team – while strong in project management and marketing – primarily specialises in utilising less modern platforms like WordPress, Squarespace, and similar systems. This approach promises a low initial cost (around $10K) and quick delivery, which may be appealing given past budget constraints. However, it brings significant risks. Relying on numerous plugins increases the chance of security vulnerabilities, integration conflicts, and cost blowouts as each plugin introduces its own dependencies and potential conflicts. There is also the challenge of maintaining a complex website with disjointed systems and managing ongoing maintenance costs—risks that can result in technical debt if the prototype isn’t constantly maintained to keep up with plugin updates.
    
    **PXL’s Headless & Structured Approach:**
    
    In contrast, the PXL proposal recommends a more precise project management model paired with a modern headless, API-driven architecture. This strategy has been battle tested across a large number of high traffic ecommerce websites to ensure a high level of maintainability, security, scalability, and customisation, and was also used at a small scale in the Awards app. A headless solution enables a fully tailored front end that delivers a consistent, high-performance user experience, and a hosted backend that significantly reduces the long-term maintenance burden associated with hosted platforms. Ongoing costs will also be competitive as plugins will not be necessary. With thorough upfront planning and rigorous testing, this approach minimizes the risks of technical debt and system instability as membership numbers grow.
    
    **Recommendations:**
    
    It’s important for the client to be aware of the trade-offs: while the prototype-based method might appear cost-effective at first blush, the hidden risks in security, integration, and scalability could lead to spiraling costs and challenges later on. 
    
    A phased approach with detailed technical planning and vendor management will help mitigate these risks while ensuring that the final platform is both resilient and future-proof.
    
- Final statement of work (05/25)
    
    # Digital Platform Discovery, Planning & Developer Onboarding
    
    This SOW is issued pursuant to and forms part of the **PXL Master Services Agreement & General Terms** (the "**Agreement**") between J SWANN LTD (trading as PXL), New Zealand Business Number 9429030153844 of 57a Colwill Rd, Massey, Auckland, NZ 0614 ("Provider"); and The Illuminating Engineering Society of Australia and New Zealand Ltd  ("Client"). 
    
    Unless stated otherwise, capitalised terms have the meaning given in the Agreement.
    
    ## 1. Purpose & Objectives
    
    ---
    
    Coordinate discovery, technical planning and third‑party vendor onboarding for the Client’s website build, ending with a Developer Handover Meeting.
    
    ## 2. Scope of Services
    
    ---
    
    | Phase | Est. Hours | Key Activities |
    | --- | --- | --- |
    | **Discovery** | 40 h | Stakeholder interviews; requirements identification; Reverse Brief creation |
    | **Planning** | 36 h | Technical plan & architecture; vendor tendering; vendor evaluation & onboarding docs |
    | **Developer Handover** | 4 h | Facilitate workshop; transfer docs; confirm roadmap |
    | **Total** | **80 h** |  |
    
    > Out‑of‑Scope: detailed design, development, copywriting, hosting, QA/testing and any service not listed above (see Agreement clause 9 – Consulting & Additional Services).
    > 
    
    ## 3. Deliverables
    
    ---
    
    1. Reverse Brief (PDF)
    2. Technical Plan & Architecture Outline
    3. Vendor Evaluation Summary
    4. Project Roadmap
    5. Vendor Onboarding Package
    6. Developer Handover Meeting artefacts
    
    ## 4. Timeline & Milestones
    
    ---
    
    1. Stakeholder interviews completed
    2. Reverse brief approved
    3. Architecture & Technical plan approved
    4. Vendor short list approved
    5. Vendor selected & onboarded
    6. Developer handover meeting & final acceptance
    
    Dates assume project start on **[Commencement Date]** and Client feedback within five (5) Working Days per Agreement clause 13 (Timelines & Deadlines).
    
    ## 5. Fees & Payment
    
    ---
    
    **Payment Schedule**
    
    • 25 % ($5,000) deposit on SOW signature
    
    • 25 % ($5,000) on completion of milestone ‘c’
    
    • 25 % ($5,000) deposit prior to milestone ‘d’
    
    • 25 % ($5,000) on completion of milestone ‘f’
    
    Late payment, urgency and after‑hours premiums apply per MSA clause 10 (Fees, Expenses & Payment Terms).
    
    ## 6. Client Responsibilities
    
    ---
    
    The Client will:
    
    1. Nominate a single authorised representative for approvals;
    2. Provide information and access promptly;
    3. Review deliverables within five (5) Working Days;
    4. Contract directly with any selected vendors and pay them on time;
    5. Honour the payment schedule or notify Provider in advance of any delay.
    
    ## 7. Assumptions
    
    ---
    
    - Services delivered remotely during Hours of Service (Agreement clause 8).
    - Total effort not to exceed 80 hours without a signed Change Request (Agreement clause 6).
    - Provider’s liability is limited per Agreement clause 12.
    - IP transfers on full payment per Agreement clause 7.
    
    ## 8. Acceptance Criteria
    
    ---
    
    Deliverables are accepted when approved in writing or after five (5) Working Days without rejection. Final Acceptance occurs on completion of Milestone ’f’.
    
    ## 9. Change Control
    
    ---
    
    Changes to scope, timeline or Fees require a signed variation per Agreement clause 6.
    
    ## 10. Key Personnel
    
    ---
    
    | Role | Name |
    | --- | --- |
    | Project Manager | Joe Swann |
    | Client Representative | Deepak Chandra |
    
    ## 11. Sign‑off
    
    ---
    
    Signed for and on behalf of J SWANN LTD (PXL)
    
    Signature: __________________________
    
    Name: __________________________
    
    Position: __________________________
    
    Date: ___ / ___ / 20__
    
    Signed for and on behalf of **[Client Legal Name]**
    
    Signature: __________________________
    
    Name: __________________________
    
    Position: __________________________
    
    Date: ___ / ___ / 20__
    
    ---
    
    *End of Statement of Work*
    

## Resources

[IESANZ - New Website Specifications v3.pdf](attachment:169d41b4-6d42-4b4d-bc7d-e86d4ada0c9f:IESANZ_-_New_Website_Specifications_v3.pdf)

[Edu website_250220_091356.PDF](attachment:a71818da-0a5d-4591-8eb2-54d160fcc4a3:Edu_website_250220_091356.pdf)

[6.1.2 - Purple Giraffe Marketing Strategy - DRAFT.pdf](attachment:10a68b56-13df-43ad-8d2d-de31ae85313c:6.1.2_-_Purple_Giraffe_Marketing_Strategy_-_DRAFT.pdf)

## Andrew (Strategy)

- Notes
    - Speak to Jeff Van Deeren from Hannans 360 asap
    
    ## High level
    
    - Personalise based on location maybe, on the fence about this
        - Currently 6 chapters
            - Awards
            - etc
            - Currently chapters edit their own section,  one puts information and another doesnt
            - Should ideally have a diary of all events
        - Question is what is relevant to a visitor, should they filter
    - Educational program business
    - See organisation standpoint on issues)
    - Educational content / library (Doesn’t exist yet)
        - General Knowledge
        - Broken down by Chapter
            - White papers etc
        - Do other bodies have a standard for sharing information
    - Event System
        - 
    - Membership System
        - 2fa etc
        - Sell memberships
    - Member Directory
        - Shows financial MIES members (opt in)
        - Also shows RLP Registered lighting practicioner
        - Fellows
        - Honorary Member
        - Honorary Fellow
        - Currently taken from Monday
    - Sponsors System
        - Sell and manage sponsorships
    - No longer using Shopping
    - Marketing system inactive inside admin
    - SEO not working
    - Analytics not working
    - Social integrations TBD (currently using Buffer)
    - Currently not advertising
    - Klaviyo is a maybe
    
    - Website
        - Look great
        - Ease of use
        - Integrate Services
            - Renew membership
            - See award entry
            - Approval Max
                - Budget approvals - request for payment goes to authorized individuals,
                - Ask accountants
                - See if this can be used for member
            - etc
        - Site Integrations
            - Buffer currently used to post across all channels
            - Monday - source of truth
                - Dataset for current members
                - Used to be overlap between secretariat and hannans
                - 2 buckets
                    - Sign ups can only be associate
                        - Name and Email
                        - Pay fee
                        - Goes as an email to Secretariat (check this)
                        - All renewals EOFY (June), calculation of months used + following year.
                    - Membership renewals (aiming for 1000 in 2-3 years)
                        - Once a year
                        - Ask if accountants are updating monday based on renewal data
                    - Membership upgrades
                        - Streamlining this - important! Taking 6-12 months
                        - Can occur any time during the year
                        - Go on the website, download an application form (which sells th benefits) or ideally fill in a live form with resume functionality,  pay fee,
                        - 9 steps in the process upgrade program
                            - name creds
                            - academic data
                            - project portfolio
                            - referees
                            - continued professional development log (2 years)
                        - goes to local chapter, which signs off after auditing, goes to international committee to sign off, then board of directors,
                        - Currently about 20-30 a year
                        - Applicant cant see any progress, no one has accountability (eg no feedback to say applicant needs to provide referees)
                        - If society could say eg 10 day turnaround, solved the biggest headache
                - Secretariat was using excel, contacting accountants to send invoice and update excel
                - Hannans monday integration allowed accountants to manage directly
            - Xero - GST (aus + nz? ask Hannans)
    - Current processes
        - Someone submits a form
            - Manually send a stripe link + update xero + monday
        - Automate as much as possible, simplifying is good
    - Integration processes
    - Not a rolls royce website
    - 1.5m conference rev
    - 1m rev generally
    - Personas
        - In market analysis
        - Architects
        - Interior Designers
        - Consulting Engineers
        - Lighting MAnufacturers
        - Govt Organisations
            - Member directory, see grade (MIES or higher, RLP Fellow, Honorary Fellow)
            - Rio Tinto etc, searching if these members are accredited
    - User Stories
        - Enter a lighting design award
        - Sign up for a membership
        - Renew membership
        - Upgrade membership
        - Voting on lighting awards (peoples choice)
    - Corporate member
        - Businesses
            - Individuals underneath
    - Member
        - Associate → Student → Tech IES → etc
        - Automatic certificate for Tech IES (ideally from website using Xero + Monday, currently not connected)
        - Monday is a bandaid, Hannans is the gate keeper
    - Deepak - steering committee
    - Branding - hasnt started yet
    - Deepaks replacement - marketing replacement
    - Purple giraffe - marketing strategy
    - CRM - not used (lots of nay saying about wf5, pro wordpress)
    - Document from Purple Giraffe (very large)
        - Marketing
            - Socials
        - Brand guidelines
- Transcript
    
    # PXL x IESANZ - Stakeholder Scope Meeting Schedule (Andrew Ferreira)
    
    Meeting started: 07/10/2025, 12:00:11
    Duration: 62 minutes
    Participants: Andrew Ferreira, Joe S
    
    [View original transcript](https://app.tactiq.io/api/2/u/m/r/KaPauJtVD1pehO7n3g83?o=txt)
    
    ```
    ## Highlights
    
    > 04:29 Andrew Ferreira: And then when you meet our other contractor which is the counting function of obviously the financial function of the business which is really important. They'll also have quite a bit of input for you to share. There's a lot of
    
    ```
    
    > 05:07 Joe S: Yeah, yeah, essentially an interface between yeah, what your goals are and how to get that because yeah, otherwise you're kind of going. I think we should get here this way and that may or may not achieve the goal so like yeah, WordPress
    05:21 Joe S: is a good example of going. I think we should get here this way, but the goal might be we just need a better interface.
    17:42 Andrew Ferreira: new etc, but we're going to have to try and mitigate that and understand what that risk looks like to.
    26:22 Andrew Ferreira: knowledge of the work that you submit in. Yeah. Do you need what they call the continued professional development log you have to show an activity over the last two years? How you've logged back.
    34:36 Andrew Ferreira: Two board director or two Farm people that have signed off on it which is the finance and risk management, that's just the app that's on our phones. We we
    35:21 Andrew Ferreira: place for good financial management and we would make sure that whatever I mean is that something that's important in the background of the website you might want to ask our accountants that yeah, or is that manual? I don't know how they integrating or utilize in that at the moment.
    38:43 Andrew Ferreira: doing business and You know thinking about the personas of the individuals that are getting in there so number one. if if we could streamline that upgrade process or people to become Mis and You know ensure that. It's not taking six months to Upper and it's been the case has been up to 12 months before that's the headache of the organisation and there's a combination of issues there that's sometimes because the resource at the chapters not either educated or competent enough or understanding of the process. They are a non-for-profit. We are non-for-profit organizations, so as a resource issue whatever but whatever the complexes are.
    47:58 Andrew Ferreira: important part of the society the networking effect yeah.
    56:21 Andrew Ferreira: traffic is heading our website and when it is and how it is and what people are looking for so that is crucial from a marketing perspective. I don't know if we need integration into social medias. I mean it's a common practice nowadays, but again I'll leave you as the consultant within that space to advise, but yes, I mean there's obviously linkedins and depending on your personas. I'm old Facebook is that tiktok required is the I don't know whatever is required within that space should should we be having that from a marketing perspective quite important.
    57:52 Andrew Ferreira: Yes, it's important that you are supposing some way the website allows for what's going on there. So that you know if people do want we do want to integrate. We do want to build the Followers we do want to get more likes we do want to get more engagement very very important. Yeah.
    01:01:16 Andrew Ferreira: Is catastrophic it is deemed to high high risk of disruption if we revent the
    01:02:24 Andrew Ferreira: please any time and good luck have a chat with Jeff and then feel free to chat tomorrow colleagues in the board and see what the
    > 
    
    ## Transcript
    
    00:00 Joe S: We're going.
    00:02 Andrew Ferreira: Are you getting good?
    00:03 Joe S: I'm good, just come off the back of two other leading so I think if my braid is mildly fried. we should
    00:11 Andrew Ferreira: it was is it with IES related stuff for I mean I was
    00:14 Joe S: No, no, it's just all happening at once. I've got a site launch happening so
    00:21 Andrew Ferreira: too easy
    00:22 Joe S: Such as the way yes, so hi nice to meet you. I'm Joe I don't know how much you've heard about me were you on the board when I called in that one time.
    00:30 Andrew Ferreira: To yeah, I think I was on the board when you called in Joe so that was good. Thanks for that. Yeah and Jeff and you heard but good things from from the
    00:36 Joe S: all good
    00:42 Andrew Ferreira: inverine NZ so.
    00:44 Joe S: Glad to hear it awesome, so you've basically just fed labeled strategy at the
    00:45 Andrew Ferreira: yeah
    00:51 Joe S: mlpaccent. So I was thinking maybe let's start with. Who you are your role? How you interact with the website and we'll go from there if that works.
    01:02 Andrew Ferreira: Cool so I am the president of the society have been for a while and I will also been part of the board for probably the last 10 years now, so I've taken on portfolias where the comes to marketing comes to membership. Whether it comes to Awards or whatever the case might be of most probably been through. I would say at least 60 or 70% of the portfolias of the board too so in the role as president at the moment. We've been very much all about the operation side of the business so putting together the stuff that unfortunately members don't see but operating systems that will have a legacy so you know in 20 30 40 years time we've got some robust systems with a little bit of continued improvement. We'll hopefully just keep keep the Keep the society at bay. I've also been part of two website development programs so
    02:04 Joe S: Yeah, as this rebuilt it this one also separate one's.
    02:07 Andrew Ferreira: So this one year part of the society done through web force 5 currency CEO that was current at the stage Leanne Knowles put me out to web force 5. Had a lot of meetings with them and I was obviously instrumental in trying to get that off the ground and put in a front-facing in place and then obviously a CRM system in the background. That is really never taken off never been integrated into our systems.
    02:37 Joe S: All right yeah, because I did have a look I'm currently provided with a having a login so I had a look and I did see that there's a CRM system, so are you saying
    02:46 Andrew Ferreira: yeah
    02:47 Joe S: that it's not really use all that much.
    02:50 Andrew Ferreira: Well, it when we developed it or when it was basically a bio of the shelf and could be tailored to IES we just never had the uptake within the society so the training and it relevant skills just would never ever carried over it's problem in a non-for-profit. We have very few paid remunerated employees or contract
    03:13 Joe S: hmm
    03:14 Andrew Ferreira: should I say?
    03:14 Joe S: yeah
    03:15 Andrew Ferreira: The secretary at rarely took the the lead and the March on that, but really never ever push the envelope in fact the country. They just became they say is
    03:23 Joe S: right, yeah
    03:27 Andrew Ferreira: so inspiring into the technology and I understand it's not wordpressed and blah blah and it's sticky forms and blah blah blah, they just they say so with any of
    03:36 Joe S: hmm
    03:39 Andrew Ferreira: the project within any business if you don't have advocates and you don't have buy-in from individuals you pretty much screwed as an external vendor because
    03:44 Joe S: yeah
    03:48 Andrew Ferreira: people just won't look at. It so they've had half the site so much that it's forced our hand at board level now to to get like yourself and to change it. Yeah.
    03:57 Joe S: To change it. Yeah okay, so what I'm like a little hent. I'm hearing here. Is that they all kind of wanted to go back to woodpress, is that right?
    04:10 Andrew Ferreira: Not necessarily wanted to go back to WordPress but that was they believe that it had a lot more functionality or you know compared to to what they were currently using or etc. So when you have a meeting with them. They'll give you their desires and once and needs etc.
    04:28 Joe S: hmm
    04:29 Andrew Ferreira: And then when you meet our other contractor which is the counting function of obviously the financial function of the business which is really important. They'll also have quite a bit of input for you to share. There's a lot of
    04:41 Andrew Ferreira: detailed analysis. I don't know how much deeper has shared with you, but there's been a lot of internal investigation analysis on everything etc, and then it just got to a point, where well you know. What do we know let's get the expert in and rather than us trying to tell the world what we want to let's get an expert into to actually write us and write us a specification and tell us what what we actually do need yeah.
    05:07 Joe S: Yeah, yeah, essentially an interface between yeah, what your goals are and how to get that because yeah, otherwise you're kind of going. I think we should get here this way and that may or may not achieve the goal so like yeah, WordPress
    05:18 Andrew Ferreira: yeah yeah
    05:21 Joe S: is a good example of going. I think we should get here this way, but the goal might be we just need a better interface.
    05:26 Andrew Ferreira: 100% now I'm a very pragmatic and very some simplistic person and my desire is purely front of house to make sure that one. I've got two two main objectives of the website build the one is that it's clearly our number one differentiator when it comes to our brand and our interface for the user experience so we need
    05:53 Joe S: Yes, yes.
    05:54 Andrew Ferreira: simplicity. We need a wow factor. Where people go on that looks like it's been brought up to date. It's in the new generation it fits without brand which we try to re-identify with and rewrite branding guidelines etc, but and that's going to be a little bit of a challenge for yourself because you don't you'll have an old set of branded guidelines, but that we updated into a new set of branded up.
    06:21 Andrew Ferreira: So you areography or fun etc like that. You're not going to be able to define until you know the brand identity has been uniquely propositioned again and put together yeah.
    06:33 Joe S: Right, yes, do you have a timeline on that?
    06:36 Andrew Ferreira: And no, it's not even a project that's underway at the moment. So it's it's
    06:39 Joe S: okay
    06:41 Andrew Ferreira: literally when we've got a bucket of money. We can spend it. I'm bringing on a new director in place of Deepak at the moment. So Deepak will still be your primary contact he's going to head up a committee steering committee that but he won't be sitting on the board anymore, so he's going to run with you on this project, but I bought on another director who has a marketing background that will undertake that as a portfolio to us so
    07:12 Joe S: okay
    07:12 Andrew Ferreira: We we had a company and it's worthwhile sharing the document with you. If you don't have it yet a company by the name of purple giraffe took on a very in-depth market analysis and marketing strategy for the organisation with it
    07:25 Joe S: yeah yeah
    07:29 Andrew Ferreira: marketing strategy. They've identified key points that are focus of the board and the strate. You have the society to focus on we just now need to put an appoint an appropriate board director that can start implementing and execute in on that strategic plan, so that is detailed in a very very precise document. I think it's about two or three hundred pages. So you can read that at leisure on the toilet.
    07:56 Joe S: So I was like it would be a good to have.
    07:58 Andrew Ferreira: Very good because it's it's I've seen a lot of in-depth analysis and a lot of
    07:59 Joe S: access to that, yeah
    08:05 Andrew Ferreira: different Industries and they've they've done a Sterling job of putting that together. So that's for me for you as as someone that is put in something together is a critical document to get your hands on and to make yourself well adversed with it because that is the direction of the organisation so when it comes to branded guidelines. I think it might be step four step five in what they do in but baby steps. I mean we still got to try and get our socials up and go in we've still and that is why the web file the the website to me is the first and foremost.
    08:42 Andrew Ferreira: Point for any of our individuals and members to get involved with so that has to look schmick. It has to look great and it has to have great ease of
    08:52 Joe S: Yep.
    08:55 Andrew Ferreira: functionality in it and that is the segue into the second. Vertical where we have to tie the operational part into it. Yeah, so a lot of
    09:03 Joe S: yeah
    09:03 Andrew Ferreira: work has been done in the operations to get it into a firm Foundation now. We've got to integrate all of that in and that will become a massive challenge because you know it's Ease of doing business with someone is always critical to the success of an organisation and if people go on to a website that looks good.
    09:23 Joe S: Yep.
    09:26 Andrew Ferreira: But the ease of clicking yeah and not being able to renew your membership or click here and not be able to sign up for an award entry or click here to see what you trying to look for or you know that. Diminishes everything and it just parks in a too hard basket and I'll just look somewhere else.
    09:47 Joe S: Yeah, yeah totally I mean that that's like he has to use it but he has the same kind of view on it where it's like it's quite hard to use.
    09:57 Andrew Ferreira: Yeah, yeah, it's it's the ease of doing business and and that you don't you want to have that simplistic. Whilst there's a lot of mechanical and functionality parts that need to operate in the background. fundamentally, we wanted ease of doing business for the customers so We're dealing with lighting designers and Engineers so very much left-hand side thinkers so for them. It should be common sense or sensible so understanding your audience and designing a website for that audience base is key because you
    10:33 Joe S: Yep.
    10:33 Andrew Ferreira: are not you're not creating a website for. Mrs Joe blog, who's who works in a banana factory that's going to be coming on to our website you know it's very very different persona of an individual that
    10:44 Joe S: yeah
    10:49 Andrew Ferreira: comes in there so
    10:50 Joe S: Yeah, personas is a good way to put it. What do you say aside from your membership? So you've got chapters like do you think there would be a list of the different kinds of people who would be coming because basically the way I say is you would have these different personas and you want to tailor it so that each persona can do what they're trying to do quite easily whereas if you give all the information at once then everyone's lost because they seeing stuff that doesn't matter to them right.
    11:19 Andrew Ferreira: Correct 100% so yes in that market analysis, you'll see there has been a persona demographic. That's been set up. So we just go into the personas. We also going to the age demographic. So you'll
    11:27 Joe S: yeah
    11:31 Andrew Ferreira: want to take a closer look at that but in a very very simplistic form. You have architects you have interior designers. You have consulting engineers and then you have lighting manufacturers people that manufacturality and the fifth one
    11:47 Joe S: yeah
    11:49 Andrew Ferreira: would be government organisations because they really want to tap into the website to check the credentials of the members. Are they associated and the financial member of this organization there's professional body because if they not we're not using them. Yeah.
    12:06 Joe S: I see so it's almost like you need a public member directory with almost profiles for people is that.
    12:14 Andrew Ferreira: That's exactly the most tangible benefit to any member right now is if you hold
    12:15 Joe S: okay
    12:20 Andrew Ferreira: a grade within the society which is typically mies or higher which is an rlp or fellow or honorary member or honorary fellow those individuals need to be at the forefront for government organisations for big commercial entities like BHP billiton Rio Tinto etc. Because they go on to the website and they'll be searching and they'll be going is this person accredited with this body and do they have the professional acumen? If they do we can appoint them onto the job.
    13:00 Joe S: Cool okay, so is that something your site currently does I don't actually have member login access and what you have finally got admin.
    13:07 Andrew Ferreira: So if you go on to the website right now, you will be able to go to a function which is not updated because that one is updating it, but there should yeah
    13:18 Joe S: membersearch
    13:19 Andrew Ferreira: there's under members and you should be able to search for members within your chapter or within the Society of a specific grade.
    13:27 Joe S: Cool and what is the difference between member and corporate member?
    13:31 Andrew Ferreira: Yeah, so a corporate member is typically lighting manufacturers or businesses corporate relates to businesses, so they take out a business membership and underneath that they'll have individuals that represent their business of different grades.
    13:46 Joe S: yeah
    13:48 Andrew Ferreira: So that's typically what we call a corporate membership.
    13:52 Joe S: Cool yep. And then a normal member, would you still be searching that if you're a government or is that going to be?
    13:59 Andrew Ferreira: And no because everybody every Tom Dick and Harry who wants to join the society joins as an associate, so that is the very entry level into the society you need no knowledge. You can just have a little bit of passion for the lighting industry.
    14:15 Joe S: Yep.
    14:16 Andrew Ferreira: but um then from associate you you either become a student of the society so student grade where you'll be studying and carrying out some formal education within that space that is endorsed both Society
    14:29 Joe S: Yep.
    14:29 Andrew Ferreira: you then have a grade once you finish that student studies you become what they call a technical grade at tech IES And that's a relatively easy upgrade system you just show your qualifications and produce your evidence of your certificate. Which I'm hoping would be automated in the background in the functionality of the website.
    14:52 Joe S: Yep.
    14:53 Andrew Ferreira: for either zero or we currently using [monday.com](http://monday.com/) which is which is really good in terms of having a sense of Truth data because we used to operate off the old Excel worksheets and typical stuff that needs to be a manually inputed so
    15:09 Joe S: Yeah, yeah. So, sorry, I used mentioned Monday and zero do you link the two or is it like a manual like someone has to work in both of those?
    15:21 Andrew Ferreira: Someone needs to work both in those so when you speak to hannans who are counted they will explain to you the process of [monday.com](http://monday.com/) which is our membership Database That's from a governance perspective as it requirements is almost 98% accurate we want to strive for if you ask me a year ago. It was about 20% ACC yeah, so
    15:46 Joe S: Oh well, that's good.
    15:47 Andrew Ferreira: Back that we have that percentage of accuracy now is crucial now. [Monday.com](http://monday.com/) is just being the band Aid on something that we've put on there to accurately record that for us and hannon's are the Gatekeeper of them a lot of us have access to it, but they've implemented on their end which is a truth you can use other things like Menzies or perhaps any other sort of membership stuff. That's you know pretty good but that will.
    16:18 Andrew Ferreira: Need some sort of crossover integration or transfer transfer over but [monday.com](http://monday.com/) is that sense of data?
    16:26 Joe S: Yeah, yep.
    16:26 Andrew Ferreira: And then zero is the accounting piece of it. Yes, where it it's an absolute must that it has to be integrated.
    16:36 Joe S: Yep.
    16:37 Andrew Ferreira: It's where I invoicing our financial tracking is and then with the integration of being able to have the New Zealand GST component of it.
    16:48 Joe S: yeah
    16:48 Andrew Ferreira: and the Australian so that is a challenge in itself because we are training
    16:53 Joe S: Oh of course, yes.
    16:54 Andrew Ferreira: across Australia and New Zealand
    16:56 Joe S: so, do you have two zero accounts or
    17:01 Andrew Ferreira: I don't know if we do. I think we might just have one but I don't know you'll have to speak to Hannah's great question I don't I don't have the answer but I don't know how they managing that at the moment, but it it doesn't allow anybody to go into the website and updates. They membership and pay etc. So there's no basket in there PayPal or anything like edits. Had has to be done through zero which is then invoice to the members and then there's a either strike or some sort of payment link that they have to go in and integrate, but that's the functionality piece that is critical for the organization and I acknowledge is going to be a disruption in anything that's
    17:38 Joe S: yeah
    17:42 Andrew Ferreira: new etc, but we're going to have to try and mitigate that and understand what that risk looks like to.
    17:48 Joe S: Yeah, I would so at a super high level what I think I would well what I would be trying to do is simplify it so ideally a result for you would be that you don't have to manually update zero Monday and send manual links someone would do something on the side and then yeah, it would do all of those things automatically the flip side is if you've got about yet. Everyone has their own process everyone's got their little Edge cases those have to be.
    18:16 Joe S: Slow down because if someone's like oh, but I use zero this way and then all of a sudden you're replacing that with the process you do need to simplify it and say okay. It might not be perfect for you individually but it's gonna work this way now.
    18:28 Andrew Ferreira: Correct and we we very happy to implement that because you either get on the bus or you jump off the bus as far as we go to yeah.
    18:37 Joe S: Cool yeah, so what yeah the reason I'm having this conversations is to try and capture as many of those ahead of time because it's so easy to get so far down the line that everyone goes. Oh, but I thought it would do XYZ so yeah.
    18:49 Andrew Ferreira: yeah
    18:50 Joe S: cool
    18:51 Andrew Ferreira: now The trick is you know I often use the analogy well. Let's just be very very clear in the top revenue for a year. This is a one and a half million dollar organisation when we run in a big conference in revenue all right.
    19:08 Joe S: yeah
    19:09 Andrew Ferreira: On average, we typically a million dollar. Organisation in revenue not 100 mil not a billion not 500 mil not even 20 mil. Yeah. Not need a Rolls-Royce into what we do in my take is very simple we engage someone like yourself whatever you're gonna give us and specify will be better but fit for purpose. Yeah. Yeah can be robust, but these things always move they are always invested in etc. So as the organization grows the tools for the
    19:42 Joe S: Yep, yep.
    19:46 Andrew Ferreira: organization need to grow with that. Yeah.
    19:49 Joe S: Yeah, yeah, so that's the idea of having a foundation where you go okay this solves your core needs. We have got here. Without making anything so complicated that it can't grow in future or change in future and then yeah, just keeping that rolling. So yes, I mean I don't know if you know but I've basically run. I'm a developer. I've been director of an agency for seven years prayer to that I was freelance so I I've done this hundreds of times the different people and yeah, you're absolutely right in that like simple is good. You don't want to second guess what people do or don't want down the line and you don't want to put people in a box so.
    20:31 Andrew Ferreira: correct
    20:31 Joe S: I think we're aligned so that's really good. I was going to ask so at the moment. You've got you were mentioning current processes right length or all of us, but there's I'm guessing a few key things that people will be able to do that will involve these Monday for example like what process. Is involve Monday specifically in zero? Do you have them top of mind?
    20:55 Andrew Ferreira: um so There's no integration into the website at the moment with [monday.com](http://monday.com/). Yeah, so
    21:02 Joe S: yeah
    21:02 Andrew Ferreira: it just purely a platform that has been created as a sense of data for our current members now in the past. We had a lot of crossover between what our accountants hands did and our secretary it.
    21:17 Joe S: yeah
    21:20 Andrew Ferreira: Fundamentally the Secretary was supposed to be the Gatekeeper and owner of that membership data, but they were doing it via. Sort of Excel documents people would phone up. They would want to renew their membership. They couldn't do it through the website. Then they the Secretary had would get hold of the accountants and so please send these people an invoice. And with a payment link once the accountants received that they then send an email across the secretary to the secretary updates the Exile sheet.
    21:58 Andrew Ferreira: Okay quite slow therefore the introduction into [monday.com](http://monday.com/) well, let's just
    21:59 Joe S: okay quite slow
    22:05 Andrew Ferreira: remove all of the functionality away from the secretariat and let the accountants manage that individually themselves which they've done a Sterling job like I say the accuracy now is basically almost to a t now that just in terms of. If we look at a shopping cart. That is primary the biggest business of the organisation in terms of transact transactions that occur because you've got.
    22:34 Joe S: So that was membership sign up to renewals right.
    22:38 Andrew Ferreira: Yeah, so this two buckets there one is the renewals which is you know seven to eight hundred invoices being processed with a growth aspiration of getting to a thousand in the next two to three years. Yeah. It's a very well. It's not it's
    22:49 Joe S: yeah
    22:52 Andrew Ferreira: automated now because what happens is in zero. You just choose the names send invoice renew your money. Yeah linguenewed as it gets rid nude. I'm assuming the
    22:59 Joe S: yeah
    23:04 Andrew Ferreira: the accountants take that and update [monday.com](http://monday.com/). I don't know if there's any integration there you might want to them all right.
    23:09 Joe S: Okay, yeah, I will ask I will ask them about that.
    23:12 Andrew Ferreira: But I know they attached the invoice there. I know there's paint you can actually see activity going on there at the moment. I'm not. A I'm not an expert [inmonday.com](http://inmonday.com/) so there's they might be some integration there might be manually input from their side now. membership renewals is a different bucket because Sort of when someone updates their membership which is a yearly thing saying July the first.
    23:42 Joe S: Yep.
    23:43 Andrew Ferreira: That's pretty much. Well. I have to renew my renew my membership. So let's let's do it. Yeah. But when someone gets upgraded in the society that's a different process.
    23:57 Joe S: All right, yeah.
    23:58 Andrew Ferreira: Because anyone can upgrade throughout any period of the Year yeah?
    24:02 Joe S: Yes, yeah.
    24:03 Andrew Ferreira: So renew renewals are once a year but upgrades can occur anytime during the year. So depending on when they get joining etc now. That's a process that needs to be unpacked and understood for you to be able to implement any system because it's Convoluted if you haven't if you don't know the process.
    24:27 Joe S: Yep.
    24:28 Andrew Ferreira: And you really need to put out a little bit of a mind map or process flow to understand that and it let the organization agree and alone on that because some
    24:37 Joe S: Yep.
    24:37 Andrew Ferreira: people that different interpretations.
    24:39 Joe S: Yep.
    24:40 Andrew Ferreira: I'm not going to throw our constitution and bylaw, is that you will show you our membership guide but it's very explanatory, but I'll try touching it very
    24:47 Joe S: Yeah, yeah.
    24:49 Andrew Ferreira: briefly for you. My name is Andrew I'm an associate of the member of the society during the year. I want to upgrade to become a mis a full-blown member of the society. I get hold of the second dread or in fact no, I go on the website and our download an application form should be there should be a pretty good. It should be something the website that tells me all the benefits of becoming a member too. Yeah, what should I become a member? I download the application form or I have a live form that I can fill in and save and come back to because I'm I am a financial associate member I should have do I have a login do I have access to that form you know question for you.
    25:36 Andrew Ferreira: You know do people even download nowadays and do it in Adobe printed off right it. You've got to look at personas.
    25:44 Joe S: yeah
    25:44 Andrew Ferreira: Being a perfect world, I would just like to open up an application form. Save it and come back to it because if I'm upgrading so. There is Nine Steps in the upgrade program. It's at 9 9 details tips first one very simple your name your credentials where you live etc next is all your academic data. So, where is all your certifications? Where is everything? Where's your projects? You've got to upload all your projects that you've been involved in who are your referees. You need financial referees. You know that have active
    26:20 Joe S: yeah
    26:22 Andrew Ferreira: knowledge of the work that you submit in. Yeah. Do you need what they call the continued professional development log you have to show an activity over the last two years? How you've logged back.
    26:34 Andrew Ferreira: Now if you try and do that on our current website, that's not that I don't even think that form. Is that working and where it's going to it's not.
    26:40 Joe S: okay, yeah
    26:43 Andrew Ferreira: But by the letter of the law we should be auditing individuals at least those
    26:47 Joe S: Hmm. Yeah
    26:48 Andrew Ferreira: that are registered lighting practitioners. Yeah. But we don't do that, don't tell anyone but yeah.
    26:52 Joe S: yeah
    26:57 Andrew Ferreira: So in that renewal process it then has to go to the local chapter because they have a status and qualifications committee and a membership officer at the local chapter. That local chapter signs off on it once they've ticked and checked everything it then goes to what we call an international status and qualifications committee. That is three old men that smoke. There's a guys and drink that off once they've signed that off it then goes to the board of directors for ratification.
    27:31 Andrew Ferreira: Every board director sansador that happened during out the year how many of these do we have well not as many as we'd like but we could have up to about 20 or 30 of these a year.
    27:42 Joe S: yeah, so that's a
    27:43 Andrew Ferreira: which is yeah, and they
    27:46 Joe S: Yep.
    27:49 Andrew Ferreira: In that process flow very simplistic form. From process well you hand in application. You need to pay your fee first because while the f*** are we looking at your all the documentation where we'd unpaid people you should pay a fee so that we can look at it. Yeah, or you know and if you're not successful. We reimburse you but nevertheless that's let's let's get a fee underway.
    28:13 Joe S: yeah
    28:14 Andrew Ferreira: In that process as an applicant, I've got no idea what I've just explained to you. They have no idea as the applicant or where this process is are they
    28:23 Joe S: yeah
    28:24 Andrew Ferreira: receiving any Comms Are they receiving any updates are they moving it from stage gate to one to two who's got accountability. Well is if no one's looking at it because it's in a black hole because no one's told you you are the responsible person to get hold of your referees for them to write you a statement and submitted. Where is that?
    28:47 Joe S: So sometimes they put their referees in the form and then you need to go back to them and say you actually need to give us more information. Is that that example?
    28:56 Andrew Ferreira: Yeah, 100% now if you speak to anyone that is in the society that has been through this process. They will tell you it's the number one headache. of the organisation
    29:10 Joe S: Yeah, I can see I can see why for sure.
    29:13 Andrew Ferreira: And if we had a process around that that made it easy and turned it around with a promise to customer. Like bunnings is we'll price match whatever if the society could come out and
    29:24 Joe S: yeah
    29:25 Andrew Ferreira: say we will do this within 10 days.
    29:30 Joe S: yeah
    29:30 Andrew Ferreira: Shorten the camera or guarantee around how you can get that right. We have literally. Solve the biggest headache of the society which is the upgrade process.
    29:45 Joe S: Okay actually have a couple thoughts already that I'd like for everybody but before I do that. What do you say can I just check the membership sign up is that completely different and that it's a lot like you only have a sign up as a
    29:58 Andrew Ferreira: associate
    29:59 Joe S: And associate and you never do you don't do all of this sign up the first time. It's only you you have to sign up and then later upgrade.
    30:07 Andrew Ferreira: Correct part of the constitution so doesn't matter if you are upgrading to an
    30:08 Joe S: okay
    30:13 Andrew Ferreira: Mis or whatever grade you trying to go to our constitution clearly stipulates you have to become financial at an associate level.
    30:22 Joe S: I think that actually solves a lot of problems because you less worried about onboarding because it's up to them to onboard themselves as related date.
    30:30 Andrew Ferreira: correct
    30:31 Joe S: Um cool, so when you sign up as an associate is that just like name email not really that much.
    30:36 Andrew Ferreira: That's it. Yeah there should be an application form as an associate on the website that goes to as an email to the secretary Ed
    30:42 Joe S: No payment. yeah
    30:48 Andrew Ferreira: But you want to chat to them and you want to make sure that that is correct because again. This should be automated if it's an associate member it should be entered into well, whether it's zero that is doing the counting for it and then [monday.com](http://monday.com/) that has been updated to reflect that associate member that's perfect fine. It doesn't need any ratification it just needs your money.
    31:13 Joe S: cool Okay, I think I think I've understood that so so there is and I'm guessing the payments at annual from that initial payment. So you give your name an email goes there's an email to the secretariat. Do you pay before you send that to the secretary or do you pay after its fruit?
    31:30 Andrew Ferreira: We've requested that it's paid straight away before it's approved.
    31:35 Joe S: So pay fee then it goes to the secretary and then that renews like from there on every news annually on that date no matter what happens.
    31:43 Andrew Ferreira: no the financial year, so it will be from until the 30th of June so there could be a pro-writered fee applicable depending you know if they join in March Do they prior to march June July pay for April May June three months prioritis and then get a new in the first of July yeah?
    32:07 Joe S: Right, so there is a calculation that is I'm guessing currently manually.
    32:11 Andrew Ferreira: correct yeah
    32:13 Joe S: okay, so they pay their fee and then end of that financial year they basically get the New bill and then that bill is calculated based on how many months they've used
    32:22 Andrew Ferreira: correct
    32:26 Joe S: and the next year?
    32:27 Andrew Ferreira: 100% correct, but if so if I join the society as an associate in January
    32:28 Joe S: okay
    32:35 Andrew Ferreira: There will be something there. That's a calculation that says you don't pay the full associate fee for the remainder of the end till 30th of June it will be if it's normally $300 you pay a hundred dollars until 30th of June they're not then
    32:49 Joe S: and then you pay
    32:50 Andrew Ferreira: on the first of July I'll get an invoice for $300.
    32:54 Joe S: so is that
    32:54 Andrew Ferreira: For that yeah ahead.
    32:56 Joe S: Yeah, so yeah okay. Yeah gotcha, so you pay for both and then it's a year ahead from that on.
    33:02 Andrew Ferreira: correct
    33:03 Joe S: Cool gotcha okay, the other thing I was gonna run by is I I actually have a fair amount of experience with membership directories and subscriptions funnily enough so something I did at one point for my own business was set up on a it's an app called chargebeat and it basically does a lot of this like pro rata stuff. It checks. If people's credit cards about seeing it integrates with zero.
    33:27 Joe S: It's got the full list of clients and all of that stuff. I'm not saying that that's something I would recommend but that sounds like the Sword of system that you would be looking at.
    33:37 Andrew Ferreira: yeah, yeah 100% definitely
    33:39 Joe S: Cool and then also where you're you have an application flow that involves a lot of approvals. I don't know if you've worked with docusign for example, but they have these forms that are multi-step approvals. I mean you sent me want to sign in fact so it seems like.
    33:53 Andrew Ferreira: yeah yeah, so
    33:56 Joe S: Between those two you could automate probably 60 70% of this process.
    34:00 Andrew Ferreira: Well 100% and we also use financially approval Max we are also users of that because we get given we set an operational budget for the year and that empowers individuals to work within the budget, but every time a payment is a request for payment is requested. It goes to the authorized individuals in a step-by-step process. It's also needs to be checked that it's within budget and if it's in budget it gets approved all right and once we've had.
    34:33 Joe S: yeah
    34:36 Andrew Ferreira: Two board director or two Farm people that have signed off on it which is the finance and risk management, that's just the app that's on our phones. We we
    34:45 Joe S: Oh, yeah.
    34:47 Andrew Ferreira: then approve it and then it gets loaded into Westpac Westpac for the payment run and then we need Two directors jumping in there and approving it in Westpac as well.
    34:56 Joe S: Cool and that one does work with zero.
    34:59 Andrew Ferreira: That works you'll need to check that with.
    35:04 Joe S: I've just went to the home pages says it works with zero. I don't know what that means. It looks like you could actually send it invoice with it. I wonder if that means that you can pay with it, but if that's something you would want to not I don't know at this stage.
    35:15 Andrew Ferreira: Approval Max is the Audit requirement from our auditors, so it had to be putting
    35:19 Joe S: hmm
    35:21 Andrew Ferreira: place for good financial management and we would make sure that whatever I mean is that something that's important in the background of the website you might want to ask our accountants that yeah, or is that manual? I don't know how they integrating or utilize in that at the moment.
    35:39 Joe S: Yeah, I mean I'm kind of on the side of saying well, if you already using this for one process. I use this budget requirement internally then and if everyone's comfortable with that then you could probably solve a lot of what you could solve your pavement thing you're not sending manual stripe links you could solve your approval flow by using something you're already using have a great believer in a not over complicating things so yeah, I'll ask the accountants about that
    36:02 Andrew Ferreira: yeah
    36:06 Joe S: but from your perspective. It makes sense to use that if that's an option.
    36:10 Andrew Ferreira: 100% yes
    36:11 Joe S: cool awesome, so I'll just make that and see if
    36:15 Andrew Ferreira: Jeff from hannan's locked in a time with you yet.
    36:20 Joe S: Jeff sorry, I had a few emails come back yesterday.
    36:22 Andrew Ferreira: If I'm dearen from hannans. as he locked in a time with you or you only started with board directors and not
    36:30 Joe S: Oh, that's right. I've started with board directors and I was gonna talk to 360. I think it's called.
    36:36 Andrew Ferreira: Yeah, so hannon's 360. Even before you speak to other directors. I would highly recommend. Joe that you speak to Jeff van deren because he will give you a very very good over. view of of process
    36:53 Joe S: Yeah, so that's Jeff from how to 360.
    36:55 Andrew Ferreira: and yeah and and
    36:58 Joe S: What was this last name again sir?
    37:00 Andrew Ferreira: Van deren so va yeah, I might just send an email right now.
    37:02 Joe S: v n
    37:10 Andrew Ferreira: Let's do that while I'm talking to you.
    37:13 Joe S: I was also going to speak to web force 5 but I think that's gonna be more of a
    37:14 Andrew Ferreira: just
    37:18 Joe S: like collecting what they know
    37:19 Andrew Ferreira: Went Joe what does your email address j. O
    37:24 Joe S: e at [pxl.nz](http://pxl.nz/)
    37:28 Andrew Ferreira: n e XL
    37:32 Joe S: Pxl like pixel but with the iron that you removed yeah.
    37:35 Andrew Ferreira: XP p XL yeah
    37:39 Joe S: .nz yeah
    37:41 Andrew Ferreira: It's easier said Joe and [pxl.nz](http://pxl.nz/).
    37:45 Joe S: nice and short
    37:45 Andrew Ferreira: well yes Jeff
    38:06 Joe S: It's a good thing I talk to you first. There's a very good overview here.
    38:09 Andrew Ferreira: yeah, just
    38:13 Joe S: Yeah, let me know if you have. Actually off the end of this is my last meeting so I'm okay.
    38:25 Andrew Ferreira: Okay all good. I've sent him an email with you and so yeah good to chat to him.
    38:29 Joe S: Thank you.
    38:32 Andrew Ferreira: Yeah, lots of moving parts there in terms of the the run in the organisational running. I just want to try and zoom back if you don't mind into that ease of
    38:42 Joe S: Yep.
    38:43 Andrew Ferreira: doing business and You know thinking about the personas of the individuals that are getting in there so number one. if if we could streamline that upgrade process or people to become Mis and You know ensure that. It's not taking six months to Upper and it's been the case has been up to 12 months before that's the headache of the organisation and there's a combination of issues there that's sometimes because the resource at the chapters not either educated or competent enough or understanding of the process. They are a non-for-profit. We are non-for-profit organizations, so as a resource issue whatever but whatever the complexes are.
    39:36 Joe S: Yep.
    39:37 Andrew Ferreira: that is fundamental to the organisation from from a user interface and being able to get onto a website that is easy that if my job of visiting the website today which is another bucket in the organisation is to enter a Lighting Design Award because Our business is all about we're dealing with when you look at these personas they all about. Feeling good about themselves. They all about self appraisal. They are very much individuals that love status they love the no matter what you want to say, that's what they love. They are individual so for them. We have a lighting design awards entry program where every year they'll be three four five hundred people sitting at the different chapters depending on the size.
    40:29 Joe S: yeah
    40:30 Andrew Ferreira: That will have a massive piss up they'll drink a lot of stake in whiskey, and then their project will be put up in the spotlight with their company name and their hope to get an excellence award.
    40:42 Joe S: Yeah, I was actually at the one last year. It was very it was a good buy. I really enjoyed it.
    40:46 Andrew Ferreira: Yeah good, so I'm glad you've been to one now. The ease of doing business that application form should be really dead simple and easy for them too. It should be something that is pretty easy for them to log onto a website and do.
    40:59 Joe S: Yep, yeah, yeah actually built I built the what did I build oh I built the
    41:00 Andrew Ferreira: and again
    41:04 Joe S: voting platform.
    41:05 Andrew Ferreira: You did you did you did people's Choice Award which was fantastic. I believe and
    41:06 Joe S: Yeah, yeah.
    41:10 Andrew Ferreira: went off really well in NZ
    41:12 Joe S: I'm glad to hear it. Yeah. I think I mean we could easily integrate something like that into the new build. I'm sure.
    41:16 Andrew Ferreira: yeah So you know that to me from a customer perspective is imperative just the ease of doing business membership upgrade membership renewal being able to put a sense of. You know an award entry in which is nice and easy. and last but not least is this is An industry body that talks about the science and art of bringing light together. it's very much an educational program business it runs a lot of Educational programs and it's a source of Truth a resource of truth for people to go have a look at white papers to understand what the organisation standpoint is on something or a library which is not in existence at the moment, but if I'm doing my job and I have a problem with light that is too much like that's coming in through daylight. I want to go to this body. I want to see if there's anything available there. That's going to help me do my day-to-day job quickly and that's the
    42:32 Joe S: yeah
    42:32 Andrew Ferreira: society's. Real value proposition and unlocked and our website does not offer them.
    42:41 Joe S: Yeah, yeah.
    42:41 Andrew Ferreira: It's it's a free for all right now. Where people are going all over the place now that needs to change and the website needs to cater for that because Do we have data? Yes, we do a truckload of it. We've got to go in search for it and we're going to find it. But it's to be it needs to be basically put into a bucket and needs to be suffered. It needs to be looked at it needs to be approved and it needs to be loaded to individuals that are looking for that resource.
    43:15 Joe S: I'm kind of getting the appropriate need to like a data pool. Essentially which currently is partly being served by Monday but I'm sure a lot of it is very then the dashboard as well.
    43:27 Andrew Ferreira: Correct and and in there we need to have educational content.
    43:28 Joe S: yeah Yeah, so that's what the library would be or is the that two set thing okay.
    43:38 Andrew Ferreira: Yeah, that would be the library and in that educational content it goes further than just Australian New Zealand we're now talking on a global level like think of NATO for the lighting industry. We have all these peak bodies around the world that are getting together which we gonna invest in which is going to put a platform in place for resource so we want to make sure that it's linked or it's accessible because If you came to me today, and you joined as an associate and our charged you 500 New Zealand dollars and I said and I said to you well, you are now part of the global affiliate program and we have the Big Brother in IES America total different entity but you have access to their data so to their library and their resource because they do a lot of Educational white papers a lot of research yet to be pub. The published and some are published that really allow our engineers and Architects and interior designers to go have a look at to see if there's any correspondence, but if I told you.
    44:43 Andrew Ferreira: that's part of your membership with Australian New Zealand Then on the first of July you become that but on the first of January next year they've changed the login so you you now got to go and try and log in they've kicked you out because you're username and password as incorrect. It's you have a problem with signing into that resource etc. You've got to send an email to the secretary at the Secretary it doesn't know what's going on so that gets older the membership director three months later. No one's come back to me. I can't access this information. What the f***.
    45:17 Joe S: The current system is a bit like that.
    45:18 Andrew Ferreira: that's exactly it so
    45:20 Joe S: right, yeah
    45:21 Andrew Ferreira: That is something that as a user we need to be mindful of because if there's access to Global affiliation stuff. Ease of doing business are are we going to be giving them a membership blog in with two Factor thought authentication and I'll get on to security later, but you know what are we doing as an ease of business because also it's a value proposition potentially do we just make that open to every Tom and deccan Harry that visit the website or is it uniquely to the membership that goes in there?
    45:55 Joe S: Yes, and I'm getting the sense that you'll have tears right like you probably wouldn't as an associate wouldn't be able to go see a white paper. That's free publishing so you probably will want a fair amount of granularity. I'm guessing.
    46:07 Andrew Ferreira: correct correct
    46:08 Joe S: Okay yeah okay, that's cool. So the other things I did notice in the advent that I did want to touch on is you have a shopping section is that just for memberships or that other things that you would be silly.
    46:20 Andrew Ferreira: That used to equal membership, but yeah, we've we've switched that off we've
    46:22 Joe S: Yep.
    46:26 Andrew Ferreira: switched off because of the integration which is simplicity through zero and [monday.com](http://monday.com/).
    46:33 Joe S: Right, so you don't actually need a shop for anything. You're not selling memorabilia. You're not selling anything else.
    46:37 Andrew Ferreira: Now we don't have artefacts to sell.
    46:41 Joe S: right
    46:43 Andrew Ferreira: But yeah, we we literally sell membership and when it comes to corporate members we sell sponsorship sponsorship is the biggest thing of the society so out of that million dollars? Three hundred thousand dollars of it is in membership renewals. 700,000 of that is in sponsorship, when you go and speak to our companies our
    47:08 Joe S: I see.
    47:10 Andrew Ferreira: corporates, they say it's a donation they feel that they just doing good for The Society our f****** hate that.
    47:16 Joe S: This is a reminder it's not anniversary, sorry.
    47:16 Andrew Ferreira: excuse Mark anniversary anniversary right
    47:22 Joe S: This is I'm not actually sure why that's doing that let me just unplug that it's sorry. I got a little Alexa right here on the desk and it can be some weird things.
    47:31 Andrew Ferreira: You'll walk your wife is reminding you that as your anniversary or your part.
    47:35 Joe S: Yeah, she must be.
    47:38 Andrew Ferreira: Yeah, so back to my points 70% of the organisations revenues countries sponsorship. That's the sponsorship that buys the tables that people are able to network with and corporate dinners or these Annual Awards dinners that you go
    47:49 Joe S: Yep.
    47:52 Andrew Ferreira: and these technical events throughout the year that is number one also a very
    47:53 Joe S: Yep. Yep.
    47:58 Andrew Ferreira: important part of the society the networking effect yeah.
    48:02 Joe S: Yes, yes, I'm Gathering that so I was going to ask so your sponsors. They currently log in as members. Is it all kind of glomed together into the same system or do they have a separate system or
    48:12 Andrew Ferreira: So convoluted mate right now. It's a free fall. It's literally. The local chapter will go and approach a business and say please. Can you sponsor our event these are dinner tickets? These are you know whatever? you know it's going to cost 10,000 and we'll have your name up in spotlights and we'll put you as blacksmen every chapter works differently there's no synchronization that
    48:38 Joe S: Yes, okay, I think there's a bit of high level architecture which I'd suppose
    48:40 Andrew Ferreira: yeah
    48:44 Joe S: I'm putting together but like you you're gonna have an event system which will want to link to members. It'll want to link to sponsors. You'll want to be out.
    48:53 Andrew Ferreira: things like
    48:54 Joe S: Yeah okay. Yes you've got a few cool things going on you've got your sponsor
    48:55 Andrew Ferreira: yeah
    48:58 Joe S: system your members system your event system. And I was gonna ask do you think it would make sense to have essentially your website personalized depending on what chapter your logging or viewing from IE like. Kind of having an NZ dot ias or ISO or slash NZ or slash au and then it kind of Focuses on your location for the rest of the content.
    49:25 Andrew Ferreira: yeah So I'd hardly. It would be highly advisable that it is tailored for the individual dialing in from a location most definitely.
    49:37 Joe S: yeah
    49:38 Andrew Ferreira: what are I'm on the fence about this and I'm talking out loud what we've traditionally always done is gone. There's the society and then we have our six chapters.
    49:50 Joe S: yeah
    49:50 Andrew Ferreira: And then within that six chapters you have all the events you have the wards you have blah blah blah blah and people go click click click click and they go into their own chapter to see what's going on. is that real my challenge or my my question to the society is that really relevant into today's terms like because traditionally in the past we would give the Chapter The administration login for that part of the website and they were responsible and accountable for updating all the data the calendar of events the technical events etc.
    50:30 Andrew Ferreira: I firmly believe because we've been down this path and it just gets so messy one chapter puts information in and other chapter puts nothing in so it's like Oh f*** with you know what's going on. I firmly believe we should have a diary of the society events. Say everyone can see what's going on and if you really want to get granular well, let's not over complicated, but let's have some sort of subsection that you can go to but again. It's going to be limited to the data that people are putting in and who's updating it etc.
    51:04 Joe S: Yes, and because he said that was really being paid to do any of this you don't really have a centralized system. You could rely on to manage say the diary overall instead of having the chapters done.
    51:16 Andrew Ferreira: 100% so I mean for
    51:17 Joe S: yeah
    51:19 Andrew Ferreira: For the user let's remember the user yeah the customer it's referred to the customer. Am I really concerned about understanding what's going on in wa and NZ no I'd like to see a diary of events. Just what's happening is the activity in the society. Oh this one happens to be in New South Wales well. I'm traveling for business. I might be there in New South if I want to have a look at so everyone and even as a customer, am I really concerned who the chapter president is of New Zealand cedric's a nice guy, but f*** are other Kid Ink do I really want to know who the
    51:53 Joe S: Yep.
    51:56 Andrew Ferreira: committee is there may be maybe not these are all questions you might want to ask people you know or customers like
    52:03 Joe S: hey
    52:05 Andrew Ferreira: You know and and if I want to know something specific within the chapter. Who do I reach out to who'd I speak to you know?
    52:13 Joe S: Yeah, yeah, I think it seems almost like when it comes to things like events. You would want to have filters. So you would basically choose whether you see all of them by default your location by default but you would be able to choose if you wanted to go to the other one.
    52:32 Andrew Ferreira: exactly 100%
    52:34 Joe S: Cool and I don't know if we would do that throughout so for example if you're looking at the membership directory, would you have would you filter it or would you lock it to your location? I guess those are all questions to organize but
    52:47 Andrew Ferreira: So just remember no one has access to the membership directory in terms of full
    52:47 Joe S: yeah.
    52:54 Andrew Ferreira: data because that's a data breach and security the only thing website. Will articulate and needs to always update in the background is if someone all our financial Mis members.
    53:07 Joe S: yeah
    53:08 Andrew Ferreira: And again, this is a question to the individual member. Do you want to be shown or not? In the application form, yeah.
    53:15 Joe S: So that's up 10, yeah.
    53:18 Andrew Ferreira: Yeah, because some people are financial, but they don't want to be visible on
    53:19 Joe S: yeah
    53:21 Andrew Ferreira: the website.
    53:24 Joe S: Yeah, I got you.
    53:24 Andrew Ferreira: So and when I say visible it's literally a directory a membership directory that people organizations will search to see if that individual is an accredited member of the society. Yeah.
    53:41 Joe S: Yes, so does it show their accreditations is that the idea because I thought you would say before that the government agencies might look at this person and they might be trying to vet them so it needsly the data that vetting right.
    53:54 Andrew Ferreira: Yeah, so only needs to show in my years and rlp. It does not show associate Associates or text or students or anything like that.
    54:04 Joe S: So it shows their memberships status more than anything else.
    54:08 Andrew Ferreira: correct
    54:11 Joe S: rlp okay, yeah
    54:13 Andrew Ferreira: registered lighting practitioner and mies and fellows if IES Will show Honor remember?
    54:22 Joe S: yeah
    54:26 Andrew Ferreira: And honorary fellow.
    54:29 Joe S: honorary cooked so honorary plumbing So shows misrlp fellows honorary member orifello and they're all in the membership directory, that's not.
    54:39 Andrew Ferreira: That's correct that that information. That's taken out of [monday.com](http://monday.com/) and visible
    54:40 Joe S: okay
    54:44 Andrew Ferreira: on the website or whether you want to change it up.
    54:51 Joe S: yeah So I was gonna say so what's mi here stand for?
    54:56 Andrew Ferreira: member
    54:58 Joe S: Just it stands for member.
    54:58 Andrew Ferreira: And yeah, just a full full member of the society.
    55:03 Joe S: Okay, it's not an acronym per se.
    55:06 Andrew Ferreira: m i e s
    55:07 Joe S: Oh, I see. It's the member of IES I get
    55:09 Andrew Ferreira: right, yeah
    55:11 Joe S: It's like a double acronym okay. Got it cool. So we talked about the jump around a little bit event system membership members sponsors. Not using shopping there's also marketing system in here. Is that active and do would you want to keep it in there?
    55:27 Andrew Ferreira: It's not active, but let's just talk about marketing very quickly again. I need you to access the marketing strategy of the organisation and when you speak to a director called Jake Wood who will take. These position after AGM which is end of November I think when you speak to him. He will explain to you where he wants to implement on that marketing strategy now in terms of websites. We have no information who's visiting us.
    56:00 Andrew Ferreira: Where they're coming from?
    56:01 Joe S: yeah
    56:02 Andrew Ferreira: There's no SEO set up well, maybe these but it's all not active and no one's accessing it to let us know how many hits we have in etc. So that is key and fundamental we have to bring that up into the new age.
    56:15 Joe S: Yep.
    56:16 Andrew Ferreira: And our marketing director has to be all over that we want to know what sort of
    56:19 Joe S: Yep.
    56:21 Andrew Ferreira: traffic is heading our website and when it is and how it is and what people are looking for so that is crucial from a marketing perspective. I don't know if we need integration into social medias. I mean it's a common practice nowadays, but again I'll leave you as the consultant within that space to advise, but yes, I mean there's obviously linkedins and depending on your personas. I'm old Facebook is that tiktok required is the I don't know whatever is required within that space should should we be having that from a marketing perspective quite important.
    56:57 Joe S: Yes, I think there's like a question around how integrated that is because you can just run them separately if you're running adverts then that usually requires quite a high level of integration which is a question. Would you be running adverts on these platforms?
    57:10 Andrew Ferreira: Well, typically, what we do is we utilize in buffer at the moment buffer? To post across all different channels of the society.
    57:17 Joe S: Yep.
    57:23 Andrew Ferreira: We are still at the stage where our committee is putting together a diary of events for the years so a pre-programmed event so in a sliding Awards time you know advertising for lighting Awards when it's membership renewal time renewing for membership. If there's a specific technical event within a chapter. We post something across there across the social medias to allow so.
    57:50 Joe S: Yep.
    57:52 Andrew Ferreira: Yes, it's important that you are supposing some way the website allows for what's going on there. So that you know if people do want we do want to integrate. We do want to build the Followers we do want to get more likes we do want to get more engagement very very important. Yeah.
    58:07 Joe S: yeah Yeah, but are you I guess the question is are you actually advertising on these platforms like would you be doing sponsor posts or would you be doing any kind of campaigns on meta Instagram anything like that?
    58:21 Andrew Ferreira: Not at the stage now.
    58:22 Joe S: Okay just because that's something that's kind of increased a lot lately from my point of view and that work that I've been doing and there's quite a bit of work.
    58:33 Andrew Ferreira: yeah And and to be honest.
    58:36 Joe S: I was yep.
    58:40 Andrew Ferreira: I explain to you out of the million dollar revenue 70% of that comes from corporates for me to go sit down with the marketing director of a company a big corporate that turns over 300 million a year and say I want to 100,000 for you in sponsorship, but yes you return on business which is going to be 14 to 1 year is my paid marketing scheme. This is my program of events. This is where you going to be listed? This is where you're going to be checked and posted and we will give you all the engagement statistics after that. Would you spend a
    59:11 Joe S: yeah
    59:12 Andrew Ferreira: hundred thousand dollars with me?
    59:13 Joe S: Right, yes, so that's kind of level you're operating on.
    59:16 Andrew Ferreira: I would need something pretty concrete for them. Yeah.
    59:20 Joe S: yeah, yeah cool
    59:21 Andrew Ferreira: They want to justify their 100 grand spend in terms of a 14-1 return onto their business, so I've got a generate and show 1.4 million dollars worth of return to that market indirect defense spent 100 grand with me.
    59:36 Joe S: Yes, yeah. Yeah, I got you. I think yeah, it'll be it's yeah. Internet advertising is usually pretty vague. So seems like currently that would be table to just keep in mind the later. So you're getting a call.
    59:51 Andrew Ferreira: Yeah, I am one minute late. So they can wait.
    59:55 Joe S: okay That was gonna say I can hop off in a second you do seem to easily your e marketing through the site for things like you know act chapter Country Connection lighting roundtable like these are sent three weeks ago things like this so. I was wondering I might propose something like dino clavio. Have you heard of?
    01:00:17 Andrew Ferreira: Have yeah.
    01:00:19 Joe S: So that's something that I mean, I work more in the e-commerce commercial space everyone uses clavio, it's pretty good for like membership directory flows so you can you can segment out your groups of people and things like that. I might just keep that in mind if that's something you're comfortable with so
    01:00:36 Andrew Ferreira: yeah
    01:00:39 Joe S: that kind of leads back to another one last question which is do you want to One Stop Shop currently you've got quite a few services or would you prefer best of breed like zero is best accounting software for example, but they're all integrated together.
    01:00:54 Andrew Ferreira: I am A firm Believer of the hard work that we've done in the last 10 years that utilizing what we have to the best ability and less. There's a strong business
    01:01:04 Joe S: Yep.
    01:01:07 Andrew Ferreira: case because the disruption of Us To the organisation given that we do not have paid employees.
    01:01:16 Joe S: Yep.
    01:01:16 Andrew Ferreira: Is catastrophic it is deemed to high high risk of disruption if we revent the
    01:01:23 Andrew Ferreira: wheel completely without the relevant training without you know so where
    01:01:28 Joe S: Yeah, yeah.
    01:01:30 Andrew Ferreira: possible unless it is like something that you flagged and don't know that is completely wrong. You know we should try utilize it as a one integrated system.
    01:01:41 Joe S: Yes, I suppose I'm asking this because the web force 5 interface that is currently managing the e-marketing will be going away so it'll have to be
    01:01:49 Andrew Ferreira: yeah
    01:01:51 Joe S: replaced by something whether that's something is built into whatever platform we end up on or if it's simply something like say clavio because that's the best option if that turns out to be the best option there might be something else. I
    01:02:04 Andrew Ferreira: I would prefer that way yeah, yeah.
    01:02:04 Joe S: guess the question is like yeah. Okay, so it's basically whatever the best thing is for the job, but if we can keep it where it is say Monday for example. Let's do that.
    01:02:16 Andrew Ferreira: correct correct, yeah
    01:02:18 Joe S: Perfect I think that was that's really nice way to and that thank you for your time. This has been really insightful. Yeah a lot from that.
    01:02:24 Andrew Ferreira: please any time and good luck have a chat with Jeff and then feel free to chat tomorrow colleagues in the board and see what the
    01:02:33 Joe S: Awesome yeah, I'll message him straight after this cool. Thanks so much.
    01:02:36 Andrew Ferreira: Well, they'll all have strong thoughts so good luck.
    01:02:38 Joe S: I'm sure I'll be very like neutral. I'll be like I'm listening alright. Catch you later. Thanks.
    01:02:43 Andrew Ferreira: okay
    

## Jeff (Accounting)

- Notes
    - Greg + Luchka
    - Main priority list
        - Better membership status management
            - Linking monday + wff a bit better
        - Better subscription payment management
        - Allowing members and non members to buy tickets to events
        - Easier updates by members
    - Goal is to get away from monday.com
        - Copying from one year to the next
        - When members lapse
            - they can pay the years missed or start again
            - previous tier is lost
    - [Monday.com](http://Monday.com) is current source of truth
        - But we might need to extract previous profiles and manually add
    - Try to prevent the same *person* signing up again but not necessarily the same email
    - Associate corporations with the domain address
    - Power BI for dashboards?
    - New member, gets entered in monday, payment comes through automatically from xero to monday and is manually confirmed
    - Database is copied from year to year
    - Approval max - unsure, not sure if it does most of what is needed
        - People like the tool but hate the 2fa
            - chapters reuse email addresses
    - Web force five doesnt support different taxes
    - Stripe expensive
    - Ledger database
    - Ideal solution
        - Multiple currencies / taxes rates
            - Tied to Xero
        - Store
            - Buy publications
            - Job ads
        - Members
            - Ongoing tracking of education / professional development
            - Tickets
                - Linked to members
                    - Discounts based on if they are a member ot the society
    - Terminated members are different from resigned
        - Terminated members need to pay intervening years to come back
        - Resigned not a going concern’
        - ‘Strike offing’
        - Yearly AGM reviews active vs non active members (financial vs non financia)
    - Individual, multiple individuals, covered by corporate, concessionals, honorary / life (non paying)
        - Corporate can pay multiples of 2 members, different tiers
        - Individuals can buy vouchers
    - Cancelling membership = staying a member to the end of the year
    - Finalising student processes
        - Associate → Student
    - Most member changes may need approval / confirmation (eg ongoing education)
- Transcript
    
    # PXL x IESANZ - Stakeholder Scope Meeting Schedule (Jeffrey van Duuren)
    
    Meeting started: 08/10/2025, 13:01:59
    Duration: 78 minutes
    Participants: Jeff, Jeff V, Joe S
    
    [View original transcript](https://app.tactiq.io/api/2/u/m/r/skyuM3qQuZdaMIZYyz34?o=txt)
    
    ```
    ## Highlights
    
    > 06:45 Jeff: honestly, I think I'll be honest the general goal is to get away from Monday
    
    ```
    
    > 10:05 Jeff: big risk we simply provide a New Zealand they're going to link to PayPal and for
    10:33 Jeff: Issue with it was members we did start doing all manual last year because
    16:13 Jeff: I think that's an important part. I think they want to lose their path of the engine useless.
    26:57 Jeff: Yes. And really can't get around and said the issue is obviously.
    33:53 Jeff: Sorry, um this has become Ranger this yourself all details are obviously got pain point of Australian New Zealand and other. So we need a way to do that. That's the biggest issue the reason the website
    34:57 Jeff: The idea being that we should be tying it to zero in some way. Like we it's the main thing is not the biggest issue on the website is if
    36:04 Jeff: marketing someone that's financial and manual. There's always the risk that it's wrong and if you don't have a quick across Check available.
    38:59 Jeff: people aren't paid they can cover. members in groups two but not guaranteed to be too people can do odd numbers that have to still pay a Even things so two four six eight ten and then it increasing fee for every two members after that we have no one who born beyond. obviously, but the biggest issue with this is We have to add people to it.
    40:23 Jeff: And then they get a risk and done build because I might not. I mean pick up in this year. I would say that they don't exist people in.
    45:15 Jeff: the double track history which is probably its biggest issue, so
    47:27 Jeff: so small like corporate number two four six eight etc members the issue with
    51:57 Jeff: show you Um sorry Sam Smith stack up your basic basic details very straightforward stuff. They can then choose their contact preferences actually choose. Kind of important to know if they want to they can unsubscribe to.
    54:03 Jeff: we'll have to add those profiles here. But as banular adjustments, I don't think it will be important anything with it.
    59:28 Jeff: And then also more important. They can simply also flag. If they know who their members are they can then add people to their organization? And obviously someone will proverb they can also remove people and that way we can flag when people are leaving organisations because I think one of the
    01:00:19 Jeff: and they Yeah three using email address. So, I think like you know making sure that people have a profile for like scenario is kind of the goal.
    01:00:39 Jeff: Because we have an issue right now where members are sporting system.
    01:04:43 Jeff: Yeah, I think it could be it is an option. I think the end of the day the goal is for me to stop sending voices.
    01:07:26 Jeff: yeah, I I'm very quick adoring manual processes, so I'm less worried. I would love it to be automated, but I understand that. I think the main thing was the society is main goal here is providing value to
    01:10:18 Jeff: This way to do that integration. It's not that one's not new that's a solvable separate issue. It needs to move account the feature on the website that we get
    01:11:36 Jeff: I hate that it's too versions, but the issue was we hit a point we could no longer trust the website.
    > 
    
    ## Transcript
    
    00:00 Joe S: Hello. Did you go?
    00:50 Joe S: Hey, how's it going?
    00:51 Jeff V: Good morning.
    00:52 Joe S: What day sorry about that? Yeah? I thought I did invited you yesterday that I just checked like oh no.
    00:59 Jeff V: I cannot hear.
    01:01 Joe S: okay any yeah no Yes. Yeah, I've got you. Do you have me? oh
    01:38 Joe S: i can year you hear*
    02:47 Joe S: good
    03:52 Joe S: this time 11
    03:56 Jeff: Hello.
    03:56 Joe S: Hello. What are we trying? no
    04:20 Jeff: single thing Any oh, that's when this.
    04:30 Joe S: check volume for app specifically? maybe?
    04:34 Jeff: Yeah, I'll try that one. Yeah, it's got Max oh, yeah.
    04:44 Joe S: That's weird.
    04:52 Joe S: working for me, can try teams if thats easier
    04:52 Jeff: okay
    04:55 Joe S: Yeah, did that way?
    04:57 Jeff: Yeah, not going on.
    05:02 Joe S: Okay as I work in. Cool all good.
    05:06 Jeff: yeah
    05:11 Joe S: yeah headphones can be a bit Fe are you on Windows Yeah, yeah, I don't mess windows for that particular thing cool. Hi nice to meet you. I don't know have you heard. About me at all what I'm doing all of that.
    05:30 Jeff: been trying to get that off the ground for rent two years now, so
    05:33 Joe S: Yeah, bit of a process. Yeah, so sounds like if well. We finally got go ahead a
    05:36 Jeff: yeah
    05:38 Joe S: little while ago, so I'm thinking that up and just interviewing everyone I was talking to Andrew yesterday and he basically said that I should talk to you before basically talking to anyone else as I understand it. You're looking after the membership renewal system with the combination of is it Monday comment zero
    06:01 Jeff: Yes. It's look I actually trying to be a software developer never really into the
    06:08 Joe S: yeah
    06:12 Jeff: industry. It's the worst way to do it, but it is they're only way to do it and to have any level of confidence in what they're doing.
    06:25 Joe S: Yes, yeah, I mean I understand the use of Monday given that at least gives you the flexibility to do it without having to reprogram it if something needs to change yeah, so yeah, I'm gonna try not to break anything that's working unless
    06:35 Jeff: yeah
    06:41 Joe S: there's like a clear win. So what I wanted to kind of know.
    06:45 Jeff: honestly, I think I'll be honest the general goal is to get away from Monday
    06:49 Joe S: Okay get away from Monday go okay.
    06:51 Jeff: Really solution that we and my boss jacket we build it like a year ago terrible. And it's been working really well, but the idea it's not it should be needed.
    07:06 Joe S: yeah right
    07:10 Jeff: everything's manual
    07:12 Joe S: Yeah, I was going to ask about that. So what so with Andrew we kind of went through there's two three three processes, so there's memberships sign up. So the initial membership signed up is Monday involved in there.
    07:23 Jeff: Yep. Um no sorry currently the website has a bunch of forms one of them being new member form like.
    07:35 Joe S: yeah
    07:38 Jeff: The secretariat they do that processes on the website. I simply enter some really basic information into [mono.com](http://mono.com/) and I can send an invoice and then
    07:45 Joe S: yeah
    07:48 Jeff: actually pay either match it against that and then we have like we know.
    07:54 Joe S: So that's manually you see a payment come into zero and then you update Monday is that how that works.
    08:00 Jeff: I reconcile it in zero it automatic comes across to Monday calm and under and
    08:06 Joe S: Well, that's cool. yeah
    08:08 Jeff: then I just really quickly against all the board that I know who's paid and not pay it on and spot variances.
    08:15 Joe S: Right, so it's semi manual then like it automatically comes from zero b. So I'll have to work on it and Monday okay, and that's so that's creating an account the
    08:21 Jeff: Yes.
    08:26 Joe S: next one is just as simple renewal which is. I guess once a year they get centered invoice and then kind of similar to do.
    08:35 Jeff: I so the way society works there, we're gonna fix membership Gear one July
    08:37 Joe S: yeah yeah
    08:44 Jeff: If there is a good change if they did it because members were it was very unclear to members and to them who was a member of and when they were a member and how long they'll remember before.
    08:57 Joe S: Yes, yeah.
    08:57 Jeff: the board of the last year and also want that snapshot on the time which
    09:00 Joe S: So that's something that could be improved on I'm guessing Monday doesn't really keep track of dates that specifically.
    09:20 Jeff: obviously since it's not a proper database solution, I have to keep copies of each year to know who was wet financial and
    09:30 Joe S: Yeah, yeah okay, I got you something I will get onto the next step because that
    09:31 Jeff: not
    09:35 Joe S: sounded like the most complicated one but something I've got some experience and is using in this case it was a company called charge, but there's basically a subscription software that does things like monitor of someone's credit card is expired before the even attempted to payment just kind of automating a lot of the subscription stuff. I don't know if that has value here because of how much manual.
    10:00 Jeff: While we keep anyone's payment details on fire because that's a really.
    10:01 Joe S: alternative stuff there is
    10:05 Jeff: big risk we simply provide a New Zealand they're going to link to PayPal and for
    10:08 Joe S: yeah
    10:13 Jeff: Australia
    10:16 Joe S: Yeah, so this stuff integrates with stripe. It doesn't keep anything on file. But it does like use stripes ability to keep people's data on filed to do translate like to do repeating payments without having to manually send people invoices all the time which is why I used it.
    10:33 Jeff: Issue with it was members we did start doing all manual last year because
    10:37 Joe S: all right
    10:45 Jeff: members just randomly paying them and think all they thought they had paid and then we had no proof that they actually get done. We knew when they had a pay, but they're like also proof that they had even redacted with the system to actually do it the things that they'll suppose do bye I guess us sending it
    10:57 Joe S: yeah
    11:03 Jeff: directly we initiated we know that we've tried to reach out. I'm just makes the timeline for that part very clear.
    11:11 Joe S: Yeah, so I mean this kind of sounds to me like it's if anything it's even less automatic that it was a couple years ago because the visibility and auditing simply didn't exist right.
    11:22 Jeff: That's the problem. It's a whole reason we it's more Matt it's more manual so we could it could be audible.
    11:29 Joe S: Right, yeah okay cool then okay, so I guess the next thing I wanted to ask is so there's this upgrade process while there's two actually the buy-in process the initial sign-up process. There's this weird difference thing where if they sign up three months before is it June 31st, then they pay with they pay a deposit and then on June 31st. They get invoice for the last few months and the Year ahead is that correct?
    11:59 Jeff: Nice not white so if you sign up between 1st of April 32, you only pay for those groups. And then it gets then they get set to review all the first.
    12:13 Joe S: Okay, so they always pay from their whatever month it. Is they pay from that until the end of the year as well as so it's not a deposit okay.
    12:19 Jeff: Yes.
    12:23 Joe S: Okay, I I yeah okay, that's good to know Andrew specifically said it was a deposit so I wasn't sure okay cool.
    12:31 Jeff: It could be yeah possibly start from my perspective about how I can told it works.
    12:37 Joe S: It's more like paying the remainder of the year that you're currently on.
    12:40 Jeff: Yeah, you want to try to say like if people need to join for whatever reason
    12:40 Joe S: Yeah, okay.
    12:47 Jeff: they're not paying for a full year for three months.
    12:49 Joe S: Yeah totally and you would prefer presumably to keep the system where they are paying everyone pays at the same time.
    12:59 Jeff: Ideally it I think I think unless I hear anything otherwise I think.
    13:05 Joe S: Okay okay, that's fine. Okay good so the next one is there's this rather? Crazy upgrade process from what I've gathered where there's a you know different board meetings. There's different sign-offs. There's auditing there's a
    13:22 Jeff: Yes.
    13:23 Joe S: multi-step form for the people to fill in. And there's also I'm guessing they pay for that as well.
    13:31 Jeff: Sorry, I'll tell you how it works so members. Can I go upgrade to a couple of different levels so they can. Associate to tech hear from associate to Mars here from tech to mys and Myers can go to fires so I just need to fellow Stephen more for that, but they're kind of like. Basically, they give lifetime premium memberships to people who've been with the Society for 20 minutes. So basically they're vegan swayed.
    14:04 Joe S: yeah Yeah okay, so I just got something stuck by throw.
    14:13 Jeff: Any of those steps so let's have a different costs annoyingly and some of them
    14:14 Joe S: yeah
    14:20 Jeff: do will so like if you go.
    14:21 Joe S: wait, sorry, just so does that mean they can go from any step to any other step or does that mean like it only go One Step Up
    14:29 Jeff: no, you can go from taking
    14:32 Joe S: So they could go straight from a what the initial one called like an associate.
    14:35 Jeff: The search member but they could also sorry it to tech and tech.
    14:39 Joe S: right So they could.
    14:42 Jeff: But it's always always remember to fellow.
    14:47 Joe S: Okay, so wait, there's the member to fellow is always one step.
    14:50 Jeff: It's always one step that's a separate step.
    14:53 Joe S: Right, but once they've done that or is yeah once they've done that. They can go to at a time or is it two at a time and then they can do that as the last step?
    15:03 Jeff: They can do you at a time? I you have fellas is always its own staff at the end. And then there's one sound there's one separate thing to all that it's called
    15:13 Joe S: okay
    15:15 Jeff: registered lighting practitioner. It's set about bowls on.
    15:18 Joe S: Yes, yeah.
    15:21 Jeff: It's not a membership rate in itself. It's it's just it's like an actual Tag it's just
    15:27 Joe S: Right and does that have its own price or is that?
    15:31 Jeff: understanding of
    15:32 Joe S: Okay, would you have to have a document like a flow chart or something for this because that would be very useful. yeah yeah, that would be really good because I've
    15:49 Jeff: Think I'm inside.
    15:53 Joe S: Sorry, what was that?
    15:54 Jeff: I'll give you lots of insight into like how it kind of flows.
    15:57 Joe S: Yeah, yeah, it sounds like this is the main business like the core of the business in a way, so I think it's that.
    16:04 Jeff: the thing
    16:05 Joe S: Yeah, it's the thing to get right most of all and things like I don't know setting out newsletters is probably just nice to.
    16:13 Jeff: I think that's an important part. I think they want to lose their path of the engine useless.
    16:18 Joe S: Oh, yeah, no no totally not I'm just kind of like prioritizing. What what needs to get you know Pixel Perfect I suppose?
    16:28 Jeff: I want to explain you the pain points we originally offered to do like a half solution, so we ended up doing up a giant.
    16:37 Joe S: yeah
    16:38 Jeff: I'll give to you as well doesn't help you understand a little bit.
    16:41 Joe S: Oh yeah, yeah that would be amazing.
    16:43 Jeff: so the main pain points are memberships can lacks So if someone say doesn't pay for last year The Motion blasts and say they won't
    16:50 Joe S: Yes. Yep.
    16:54 Jeff: rejoin. In two years A we need to know that their membership last two they have the
    16:57 Joe S: Yep.
    17:03 Jeff: option there of rejoining at the base rate or paying all the years they missed. and
    17:11 Joe S: I would like sorry the not the base rate, but the base tier right. So they would go all the way back to the beginning.
    17:15 Jeff: All the way back down, but we don't want to lose that information. We want to
    17:17 Joe S: yeah
    17:19 Jeff: know that they were saying you know a fellow four years ago.
    17:25 Joe S: I say yeah.
    17:26 Jeff: Moving and so currently the way it works on the website is they just duplicate.
    17:33 Joe S: yeah
    17:33 Jeff: Their profile and very clunky because then the date all their data is not kept all in one spot then membership not changes. You don't have a nice historical record.
    17:47 Joe S: It's totally one question I guess which would probably be good to know is how
    17:50 Jeff: that's
    17:53 Joe S: tied are you to PayPal versus stripe like this paypalot.
    17:57 Jeff: Our merchant cost keep going up and up. So we're open to any other solution.
    18:06 Joe S: Right, so you're not even a fan of stripe kind of here.
    18:09 Jeff: Stripes efficient it's very expensive we like doubled we doubled up action phase since.
    18:16 Joe S: Yeah, yeah, I mean yeah. I'm with the credit card fees are not fun. It's like
    18:18 Jeff: We used all on the website and the problem was.
    18:22 Joe S: through.
    18:28 Jeff: Just it was just people renewing at the wrong right that we're doing it old grades. They were renewing without knowing that that we'd like to relax and just bring you that they're all right. Let's keep doing the whole. laps process entirely
    18:45 Joe S: Yeah, yeah.
    18:46 Jeff: So some of that I guess might have been like mismanagement, but also sometimes is the website what is actually going on.
    18:56 Joe S: okay, I think I'm So what I was gonna suggest if you were a fan of strife was that stripe itself has pretty good subscription and product tools and customer tools, but if it makes more sense to have a separate database. Honestly, I'm leading towards not having it buried inside something else like you don't want to use hubspot. You don't want to use any of these because if you don't have ownership of it.
    19:26 Joe S: Then your data lake is basically embedded in something that you can't you could never leave right. So yeah, it seems like it would make the most sense give it how broad this is.
    19:36 Jeff: yeah
    19:40 Joe S: To have a database that kind of lives on its own and then it's updated by whichever services like Saint essentially.
    19:48 Jeff: It will be better. It was independent that way could just tie into a service and then. work and we would like we have to change services it's
    19:58 Joe S: Yeah, and then I suppose because we're looking for these logs. It would be good to have some sort of a transactional database design where it's like a legend design.
    20:07 Jeff: Not the exactly and honestly that's the order. So I just wrapped up to is ordered it because the nature of the sanctity what they do get ordered and like I'm basically spend lots of the autographing making sure everyone paid did they pay the right thing to like look at all the transactions or other orders? We need a transactional database, I don't think it's possible to skip that.
    20:30 Joe S: yeah Yeah okay. Yeah, I think having a ledger Desire is really good as well, because you can always rewind of something needs to be reround or see what happened at a certain time what the state of everything was okay. Do you have like Monday at least has this gooey you know like you can actually look at the way. Everything works together and it's kind of a no code system presumably it would need to be pretty.
    21:06 Joe S: Accessible you wouldn't we wanting to use database tools with it right like you you and your team would need to be able to see it without using database tools.
    21:16 Jeff: Ideally yeah that would have to be some kind of interactive interface between database, but I don't think anyone else.
    21:24 Joe S: Fair enough, I'm just trying to think through options because I like I've been down this path trying to find because I was trying to design my own CRM essentially when I kind of started building tools for myself and it's very tricky to get one that's both flexible enough, but also doesn't basically make your life harder in the end than it would have just been writing code. I've noticed.
    21:54 Jeff: Yeah, I mean like. Some degree of coding required is not the end of the world along it's not every day.
    22:01 Joe S: Something I did talk to Andrew about which was you will use using a tool called
    22:02 Jeff: I guess that the problem.
    22:11 Joe S: sorry. I Gotta Find It it's something Max
    22:16 Jeff: Yes, approvals approval Max is only really used for Billy the bills we receive
    22:17 Joe S: approval Max
    22:25 Jeff: it's designed so we have like a delegation schedule where there's like three a full step approval process effectively I have heard of the accounts of paper.
    22:33 Joe S: Yep.
    22:37 Jeff: Is it under budget is there a budget but? I yeah, we like what we say. two book two
    22:45 Joe S: Yeah, yeah.
    22:45 Jeff: And then it finally goes into 0. It's every two weeks. I process all the available builds that are Critical I see them pull them into Westpac manually, but that's really quick process is part of the job. It's not something that needs to be worried about in this case.
    23:04 Joe S: Something I like kind of trying to think about how we could reuse the tools that are already being used to greater effect could this be used for the member approval process it has a lot of the same things built in like needs a payment you can have your multi-step process people signing documents which sounds like a lot of the membership upgrade stuff involves all of these steps right. Do you have any thoughts on there?
    23:30 Jeff: the right tool
    23:33 Joe S: okay
    23:34 Jeff: Is very heavily focused on. Accounting all right. It's all about bills quotes sales credit notes.
    23:39 Joe S: yeah okay
    23:47 Jeff: Sadly, it doesn't really have any customization beyond that you can get really Complex in those various specific areas, but you can't. The problem is with their upgrade system is pay first. That your process starts.
    24:02 Joe S: Yes.
    24:02 Jeff: so like it wouldn't serve anything being in approval match because They pay the upgrade for them they start process.
    24:15 Joe S: Right an approval Max wouldn't it wouldn't allow for the workflow where basically they pay the fee something is API integrated into approval maps where they start that process to essentially be because they get a refund right if they're not approved.
    24:33 Jeff: They don't get away.
    24:35 Joe S: Are they don't get a refund because it's a deposit right for the upgrade?
    24:38 Jeff: Which just like your paint will it's like painful the time and effort of all the volunteers.
    24:46 Joe S: Yeah, okay.
    24:47 Jeff: Only a couple of people paid for contracts everyone else volunteers their time.
    24:54 Joe S: Right okay, so at the short version of that sounds like approval Max isn't necessarily what you would prefer to use for this.
    25:04 Jeff: I mean, I just noticed that they do have a custom work closely which is interesting. I've only just sore of a new pictures available. I have no idea if it works for this.
    25:17 Joe S: Hmm. So probably need so it'd be like an investigation process but at this point. It's like probably not like would you lean towards it if it works or lean away from it? Just so I know kind of where people are at.
    25:33 Jeff: I think I guess we could lean into it. I like unfortunately that the Secretary I don't touch that side of the equation also I've got entirely sure how it was something to say theoretically. It can improve anything contracts capital expenditure request any other request so now interior that could be used for upgrades.
    26:04 Joe S: Yeah, that's what I was thinking because there is a process there. This is a process tool. It seems to have an API whether or not. It's where things are
    26:13 Jeff: yeah
    26:14 Joe S: stored probably not.
    26:16 Jeff: Well, now you can store documents.
    26:18 Joe S: Yeah, yeah, maybe it's stores like yeah the documents related but it doesn't store the act. It's not the same as the database that we're talking about which stores everyone's details.
    26:26 Jeff: Yes.
    26:29 Joe S: okay, so basically talk to the secretariat about
    26:35 Jeff: All I know is people.
    26:37 Joe S: people hate it
    26:38 Jeff: Are people like using it issues, we have with their two factor of indications.
    26:40 Joe S: yeah
    26:46 Jeff: Every three every couple months I'm having to solve another. okay
    26:51 Joe S: okay So people like the tool but hate the 2fa.
    26:57 Jeff: Yes. And really can't get around and said the issue is obviously.
    27:04 Jeff: To the is kind of check this which are politic Communities committee members change all the time but I keep the same end of email addresses. and then
    27:13 Joe S: Yeah, so they lose their two FH time.
    27:17 Jeff: I stopped working I said a request in and they have to set it off and then the amount of salivations that ex. Ist I'm a little bit of time two people who can't even belong in because their phones won't let them set up.
    27:32 Joe S: Yeah, I get it like reusing email address. It sounds like the worst thing you could do forever.
    27:36 Jeff: It's it's the worst thing for two of the best thing for management.
    27:41 Joe S: Yeah, totally.
    27:41 Jeff: and things
    27:44 Joe S: yeah
    27:45 Jeff: A bit of a pain point so it's all like I'm more worried that. If you've been here is one of all the previous card get on and it starts becoming a manual process again.
    27:58 Joe S: Yeah, that's precisely what we kind of want to avoid right is building something that isn't so fragile that people end up going back to a manual process.
    28:08 Jeff: Faculty
    28:10 Joe S: So, would you like to cover a maybe some more pain points or even what you want the ideal solution to look like?
    28:16 Jeff: Yeah, I've got my ideal solution.
    28:19 Joe S: oh, that's I feel free to share screen or anything if that helps.
    28:34 Jeff: they wanted to do a We were building a members of solution. They wanted our website solution. Just in quite line up here is
    29:05 Jeff: sorry This is a bit of a Skype thing and I really like really depends what the board is trying to do because I haven't been a part of. the whole contract organization of it
    29:17 Joe S: Yep.
    29:19 Jeff: So we came up with a concept of like a couple of different areas to the website so you got the general front and your public is then you got the back end.
    29:28 Joe S: Yeah, yeah.
    29:29 Jeff: Got more than one reason to log into the backhand. Sorry not memberships. You've got people wanting to join people who previously drawing but then we also people
    29:38 Joe S: Yep.
    29:40 Jeff: using the website to order. all the world membership products using it we still use a particular tickets and tickets and other event things the main thing is that I'm bringing that up is always all the chapters on their host of fans and Offer discounts to members so part of the part of the reason of tying in the
    30:01 Joe S: yeah
    30:04 Jeff: tickets and stuff to the website still is. That going at least between links to the members the members place the orders
    30:12 Joe S: yeah
    30:13 Jeff: get their discounts and all makes sense.
    30:17 Joe S: Is that based on that Tier or something whether they got a discount?
    30:22 Jeff: Of society and access for discount.
    30:26 Joe S: okay
    30:28 Jeff: Obviously, we use it to a couple of information. We have the suggestion whether this is out of scope is.
    30:34 Joe S: yeah
    30:37 Jeff: the main things as professional Bishop organisation is Ensuring that they're doing professional developing professional development which they don't directly do in the website and track those education and
    30:50 Joe S: Yes.
    30:52 Jeff: qualifications isn't directly trackable.
    30:55 Joe S: No, because they put what happens is they fill in a multi-step form right and then they put in their qualifications in there proof of ongoing but that's I guess that means that you can't track it in between or until they do that right.
    31:08 Jeff: Exactly that idea I think the idea is backy and accountants Australia CPA and now you like add in your education and professional development on the fly.
    31:24 Joe S: yeah
    31:25 Jeff: I think because I think one of the main issues for The Society as a whole year. Members don't interact outside renewal. And I think one of the ideas being Jackie had was well. If you add a few of these really good features which they should be really doing and they are kind of doing that on paper professional development education qualification.
    31:48 Joe S: yeah
    31:49 Jeff: Annual into the website gives reason people reasons people to go back. Especially adding the professional development. Obviously then also we want to like display with display. You know educational opportunities. we have a big the is doesn't really big event every two years conference would be covered Strat and New Zealand That's item that comes up. Obviously, it's some days like wishless ideas. I mean Jackie came out with but
    32:21 Joe S: yeah
    32:24 Jeff: for grounded in what we think would be better to. Sorry tons of the serum at the time really it's a multi. It's a big solution.
    32:37 Joe S: yeah
    32:38 Jeff: So there's different on those facts as members non-members admin and you have your tactical volunteers and then you have. also
    32:46 Joe S: Currently the CRM doesn't really have much of this right.
    32:50 Jeff: It does breathe there are but it. Wonky it's a really makes sense broad and chapters don't have their own access
    32:57 Joe S: Right yep.
    33:01 Jeff: level they just log in as members you have to be a member to be on those panels,
    33:03 Joe S: right, yeah
    33:07 Jeff: but there's like no chat over.
    33:11 Joe S: And do they get are we talking about the member pay the member login that they
    33:11 Jeff: but
    33:15 Joe S: have access to or resist this web fulls five that some of them have access to.
    33:20 Jeff: It is the member and I've no longer.
    33:24 Joe S: Yep, yep.
    33:25 Jeff: I organize an ant Man inside.
    33:31 Joe S: right
    33:31 Jeff: Really yeah, so it's yeah. Hearing that we would like. Have the idea of having like an admin chapter on board those and granted they're
    33:40 Joe S: yeah
    33:43 Jeff: not hard to make it's not I think you're going to be a big job if it's built right. It'll work like if you did the design.
    33:51 Joe S: yeah
    33:53 Jeff: Sorry, um this has become Ranger this yourself all details are obviously got pain point of Australian New Zealand and other. So we need a way to do that. That's the biggest issue the reason the website
    34:13 Jeff: doesn't work very well. We couldn't do New Zealand people. in profuses support other tax rates
    34:21 Joe S: Wait, so wait, who did Who refused was that web force 5?
    34:25 Jeff: unsupport other tax rates, it's really very designed for Australia
    34:27 Joe S: right
    34:31 Jeff: It has a 15% JS tail obviously sorry it made like we had to pull all the New
    34:31 Joe S: oh yeah
    34:36 Jeff: Zealand people out.
    34:38 Joe S: yeah
    34:38 Jeff: so like having New Zealand's been running on manual membership invoice a lot of Australians
    34:46 Joe S: I kind of makes sense.
    34:47 Jeff: Which like before [monday.com](http://monday.com/) was I send a screenshot of payments I've received.
    34:53 Joe S: jeez yeah
    34:57 Jeff: The idea being that we should be tying it to zero in some way. Like we it's the main thing is not the biggest issue on the website is if
    35:07 Jeff: they're not placing the order in the website. You can't television actually paid if they're monthly financial. There's no possible way to cross check that isn't a hundred percent manual.
    35:19 Joe S: yeah
    35:20 Jeff: So like one of the big things that used to come out of orders before we did this system was. We pull out all the members and then we have to sit there and match transaction line by line from zero from workforce fives own sales. And see who did and didn't pan did they pay the right rate? Did they pay? What they were supposed to pay and the end of the every under every membership order is called big order be like 40 50 60 70 issues people underpaying over pain.
    35:55 Jeff: Than those like people who thought that we have paid but how to paid people market financial reports financial problem is the most he might think like
    36:03 Joe S: Well, yeah.
    36:04 Jeff: marketing someone that's financial and manual. There's always the risk that it's wrong and if you don't have a quick across Check available.
    36:14 Joe S: yeah So you basically need a pretty good record of what they played when they paid and what they were what membership tier and options they had at the time and also where they were in the I guess the year and all the rest of it.
    36:28 Jeff: That's where I get.
    36:33 Joe S: yeah
    36:33 Jeff: This why we never offered to the website it's been dragging from developed websites and tools and things we do it from. Internal time but this is so complicated so big there was no real.
    36:42 Joe S: yeah
    36:47 Jeff: solution that wasn't going to take away from Mississippi accountants and bookkeepers
    36:54 Joe S: Yeah, I mean I'm project managing that's not building it and I'm slightly happy about that because it seems like it would be pretty pretty big. Not that I haven't done every one of these things individually before I just haven't done the more than one project before.
    37:10 Jeff: Together and making it in such a way that you have to change something is it going to break everything by a large degree obviously things need to change it happens stuff Changes but like you don't want to make something so rigid that it's Falls the whole solution Falls the moment we haven't changed.
    37:32 Joe S: Yeah, yeah, the real art is to make it as simple as possible and still do all the things that needs to do because that means you have more options.
    37:39 Jeff: I mean, it's the developers train. It's never reality.
    37:44 Joe S: yeah
    37:45 Jeff: Work you're working in the middle ground always.
    37:48 Joe S: Yeah totally, it's also very hard to sell to people because they're like oh, it's not all it is and you're like yes, that's what you're paying me for Picasso would have sketch of a dog.
    37:58 Jeff: So all memberships are blue point at one will really tricky system.
    38:02 Joe S: Yep.
    38:03 Jeff: s so we have some corporate members then the financial non-voting members effectively organization, I want to Support the society at a higher rate at a higher high level and as a bonus that
    38:20 Joe S: Yep, yep.
    38:24 Jeff: we allow them to cover the memberships of members.
    38:30 Joe S: Right, so they can almost gift members or gift.
    38:35 Jeff: Yes.
    38:35 Joe S: vendorships yeah
    38:40 Jeff: for example
    38:42 Joe S: So, I'll just full screen.
    38:47 Jeff: And this you get odor. I'm going to tell you my hands and has our own so as you can see here all these
    38:55 Joe S: yeah
    38:59 Jeff: people aren't paid they can cover. members in groups two but not guaranteed to be too people can do odd numbers that have to still pay a Even things so two four six eight ten and then it increasing fee for every two members after that we have no one who born beyond. obviously, but the biggest issue with this is We have to add people to it.
    39:34 Joe S: Yep.
    39:35 Jeff: So obviously I can add or move people as needed and you need to like either every year. I'd talk to them the Chelsea When It cover. I keep people off. I have them switch them to individuals and onions acapulp people in and then this work. It's really annoying and I guess one bigger pain points than me and the Secretary it is they can pull people who never join.
    39:59 Jeff: But that's like that's always possible, but then you kind of still need to have a website profile for someone who never joined that was covered. in the off
    40:08 Joe S: Oh, I see, yeah.
    40:10 Jeff: In the off they ever do join in the future the right we don't have that in
    40:12 Joe S: so
    40:15 Jeff: cupboard.
    40:16 Joe S: All right, so now if they even if they covered and they try and log in you still have to join them up the manual way.
    40:23 Jeff: And then they get a risk and done build because I might not. I mean pick up in this year. I would say that they don't exist people in.
    40:32 Joe S: yeah
    40:33 Jeff: Pride is that's whatever reason.
    40:38 Joe S: So you kind of need this link to the same membership database has the login?
    40:43 Jeff: That's all right now. The only thing I missing is I don't have like an overall. In the sits on top of these so I've got this year and I've got lashes and previous years which is matter how high level view what happens from across
    40:55 Joe S: yeah
    41:00 Jeff: every year. I just look I operate in one little year.
    41:04 Joe S: yeah
    41:06 Jeff: otherwise out and It's not necessarily my responsibility. It's not yet anyway. S is board is very good at delegating and make your people stay in their boxes which is really good thing.
    41:23 Joe S: I think that can save people a lot of grief.
    41:26 Jeff: So and then I'll show you the mess that is this it's a mess but it does make sense. That's a dashboard. I started doing this statistics. So they can board members could see their organisation overhaul around.
    41:41 Joe S: Right, yeah, so I know about Andrew is talking about this yesterday, but would you be interested in the dashboard for the website Analytics as well or you
    41:51 Jeff: Yes, I think Analytics I think it's particularly manual and like any tweak on
    41:51 Joe S: more? yeah
    41:58 Jeff: the background pixels. So obviously and keep taking tweets because the board keeps moving more things
    42:01 Joe S: yeah
    42:07 Jeff: into this. It's lying becomes also truth. Not the website this for the current methods. Sorry memberships. This is what I work with so you may see the joints most of it. All right, I have members can be financial but not heavy it renewed. So one of the big things the board has to do is people can cease memberships. If they tell us then we can just disable that's fine, but members may electro interact with us.
    42:46 Jeff: At renewals, so every February we what we do or doesn't strike up with them we manually. update So we kind of actually gets even more tricky when they get struck off. Looking resign we call them we have official phrase. It's called membership. When they get strike off they get a different label. Called terminated and we need to be able to know when people are resigned versus terminated that they come back we have to pull them back in and let the board high school effectively approve.
    43:24 Jeff: terminated members coming back people who didn't who didn't
    43:28 Joe S: Because they're have to pay their intermediate years if they want to keep them membership right.
    43:33 Jeff: Yes.
    43:34 Joe S: And if they resign they can't come back because they've lost their.
    43:38 Jeff: Honestly most people resign because they have left the industry or they have. tights that all then she left you know Oceania They left the region and that's actually not necessarily true. We do have a real
    43:55 Joe S: yeah
    43:58 Jeff: tied member who now was in Texas and
    44:05 Joe S: So I just try to yeah take those okay, so resign basically means that not going concerned.
    44:11 Jeff: we just disabled on them and
    44:16 Joe S: yeah
    44:17 Jeff: Strike off here is a pretty big deal the reason I discussed the concept of we do need to know who's financial and that includes people who haven't made yet every year the society host an AGM captain. They need to know for their ADM for the
    44:28 Joe S: yeah
    44:33 Jeff: ADM who is financial. and who has not found it was not
    44:40 Joe S: So financial means not struck off all like active members right.
    44:43 Jeff: Resigned and not been firminated.
    44:45 Joe S: yeah So basically activist non active members.
    44:51 Jeff: Yeah, but right in a normal database that would be this many groups. This is for
    44:51 Joe S: Yep.
    44:55 Jeff: organisational purposes so I can work in these groups as I need.
    44:59 Joe S: Yeah, yeah well yeah, because you this is a process page right. You're kind of seeing what needs to happen in each group.
    45:05 Jeff: This database and I hate the people it's not really a database. It's a
    45:12 Joe S: Yep.
    45:12 Jeff: processing processes and recording my outcomes.
    45:15 Joe S: Yep.
    45:15 Jeff: the double track history which is probably its biggest issue, so
    45:25 Jeff: Multiple kind of membership sites, but it would failure correctly won't be a problem. So members can retire and retain their grade we just need to wait a markings retire.
    45:39 Joe S: Yes.
    45:40 Jeff: The minor thing but they do get to pay a different manual.
    45:44 Joe S: So where you've got corporate two members, so you can have a member twice and one of them is under their corporate tag or is it they are yeah?
    45:55 Jeff: So that they're financially because they covered by.
    45:59 Joe S: Yeah, I'll corporate status yep.
    46:00 Jeff: We do need to just distinguish between the two the three and sorry incorporate 4
    46:04 Joe S: Yep.
    46:10 Jeff: infection multiple individuals in the pools back for it.
    46:13 Joe S: Yeah, yeah.
    46:16 Jeff: You have corporate members and then finally you have what I call concessionals. and I keep so much easier to work with to concessionals are consist of a couple of different things. And we have something called honoring and life and that applies to a fellows and that's something the board can award.
    46:45 Joe S: Right, it's honoring a life to different things or they have the same.
    46:49 Jeff: There's still a member except a pack.
    46:53 Joe S: Yeah, yeah okay, but honorary and life are they two tags or they won tag?
    46:57 Jeff: And different tags that's very different. I don't I don't understand the
    46:58 Joe S: okay
    47:02 Jeff: difference because
    47:04 Joe S: It's more their side than your side right.
    47:07 Jeff: It's definitely the secretary of the fence. I only deal with these in terms of I people get approved to be on a real life members. I thought
    47:21 Joe S: And you said before multiple individuals and covered by corporate. What's the difference there?
    47:27 Jeff: so small like corporate number two four six eight etc members the issue with
    47:34 Jeff: that is They not choose to elect the cover everyone consider it slots they can feel.
    47:39 Joe S: right
    47:41 Jeff: They choose a grade and they try to fill the slots.
    47:42 Joe S: hmm yeah All right so corporate can play basically can pay for multiples of two.
    47:57 Jeff: For corporates, it's only been in mind documents they've started offering vouchers. I don't know if they want to incorporate that into corporate. Don't have that login their own login right now, but maybe they should.
    48:13 Joe S: yeah
    48:14 Jeff: It's was on our dream was from. Not I think it's had was to give corporate can renew choose their own rates and
    48:20 Joe S: what
    48:26 Jeff: look up their own members.
    48:29 Joe S: Yes, I was thinking maybe it should be I don't know if you've used accounts. I mean I think Monday Has This where you sign up as an account, but you also have an organization. The corporate account can be a bit like that where you have members and then one of them has the admin to edit the corporate account but all the members under it. Have their own like yeah, does that make sense?
    48:50 Jeff: yeah Yeah, sorry the product it's an idea. It's whether it's very very end of the line if you guys do a really quick job at this in this money. I would say do it. But it also comes into whether it goes into the design.
    49:09 Joe S: Well, I think just to make it make sense from a how the building maths works or the system works. It makes sense to have the system simply because otherwise you don't have the way to distinguish between easily distinguish between a member that's part of the corporation or not.
    49:24 Jeff: There's what I can't get away from London I would like it to be integrated into. both Sol utions
    49:32 Joe S: Yeah, I mean I've sort of a live architects over. I think this this is doable in the sense of as long as no one wants to redo the process from scratch every other year it can be built-in with tweaks every you know as as things go on.
    49:47 Jeff: Like this is an opportunity Society with their processes if they want to change it. Now's the time.
    49:54 Joe S: Yeah, yeah.
    49:55 Jeff: in the calorie fact is is it came like Sam They can add them remove members. I don't know would like to remove them allow them to do it outside of a renewal window.
    50:09 Joe S: I think the way a lot of subscription services workers. They're basically say
    50:09 Jeff: Is okay.
    50:13 Joe S: like if someone goes. Oh, I'd like to cancel my subscription. They basically say well. You are subscribed to the end of the year because you've already paid.
    50:20 Jeff: Yeah, I think an ideally they can't change it.
    50:25 Joe S: yeah
    50:29 Jeff: And after offer this is kind of being. We're about to finalized the student processes we have some students associate, then they get downgraded. for concessional students students and they had a free membership during a the call a eligible It's particles a little bit. occasion qualifications
    51:09 Joe S: I was good. Yeah, that wouldn't be part of the website or would it be idea that people would actually do these courses through the Cycles or something?
    51:17 Jeff: They wouldn't do it to the site, but we'd at least with lounge we track.
    51:22 Joe S: Yeah, so they could basically put in an adjustment to say I've completed this course but that would still be manually approved by someone for example.
    51:30 Jeff: obviously, I think any adjustment made by about
    51:42 Joe S: Okay, so sorry, did you say contact details can be done without approval but basically everything else needs approval.
    51:50 Jeff: redo the current website that's actually
    51:55 Joe S: Yeah, yeah.
    51:57 Jeff: show you Um sorry Sam Smith stack up your basic basic details very straightforward stuff. They can then choose their contact preferences actually choose. Kind of important to know if they want to they can unsubscribe to.
    52:31 Jeff: Different kinds of Communications that way we don't contact them. From a membership perspective they have membership number habitat. Was they have can be attached to call for that can have a status we need to issues. We don't know about the other profiles older profiles were they were lost not a member. So we kind of need to know a bit more than just this. because right
    52:58 Joe S: Wait, so older profiles are pre web force 5 or is that something else?
    53:02 Jeff: there are some
    53:05 Joe S: right
    53:07 Jeff: But the society 2018 17 and frankly you're not getting.
    53:13 Joe S: okay
    53:16 Jeff: Dicey, as it is we're constantly dealing with loss profiles.
    53:20 Joe S: Yeah, would you say part of this job would be reconciling your these profiles like the web force 5 databases even we can get it against your [monday.com](http://monday.com/) database the latest one.
    53:33 Jeff: Check it for errors and issues and metropoliterals content data.
    53:38 Joe S: right, so we'd probably use your [monday.com](http://monday.com/) as a source of truth for the
    53:42 Jeff: But the only thing I don't have and I think. Chris Governance of the last few days, I think we're gonna need that previous profiles which I think will be a manual thing if once the system is into have their knowing what they used to be x members and rejoining and stuff. I think
    54:03 Joe S: yeah
    54:03 Jeff: we'll have to add those profiles here. But as banular adjustments, I don't think it will be important anything with it.
    54:11 Joe S: Right, but you would we be getting that from web force 5 or would you be?
    54:16 Jeff: Was five I envision in terms of Rolling data away. It would work is I do an audit by cleaning. I just make sure everything involves five is as accurate as possible and then you'd be exporting everything you get this web for five does
    54:28 Joe S: Yep. okay
    54:33 Jeff: more than I ever do. Technical upgrade steps and that was done. You can't take a proof of which I
    54:41 Joe S: yeah
    54:44 Jeff: guess changed. Yeah, we'll see everyone said their lies technically there's five hidden away. Notes all their prior communication and Orders either on corporate.
    54:53 Joe S: Yep. yeah
    55:00 Jeff: Big clunky because only the lead corporate has the corporate tag.
    55:04 Joe S: yeah
    55:05 Jeff: And it's just sets really are. More communication preferences some of this might be defined. There's so much.
    55:15 Joe S: I was gonna say so that education table looks like they can tell you that they've done some education and then you would manually update there. Is that right or is that something?
    55:24 Jeff: It kind of only. tracked completed the introduction basics and So it's more like you know interacts very I don't know if this gets useful.
    55:40 Joe S: I'm just kind of say what what theoretically would happen here is that they would treat this like the assistant traits. This is a preference they put this in someone would go and check this and if that's correct then they put it against their membership upgrade. Is that somewhat? Yeah, okay.
    55:57 Jeff: and which is one idea because I'm Here's a good example CPA dashboard to a lot of inspirational what they could work on.
    56:10 Joe S: right
    56:12 Jeff: Just but like any membership you see your previous invoices. Hanger details kind of links in I can see everything themselves.
    56:23 Joe S: yeah
    56:24 Jeff: It's right now. I lost I don't know how many hours 80 hours to membership queries in the last three months people who claimer they didn't receive the invoice but did. Don't know that they've paid it and try to pay again and we'll try ask me to pay again. And there's an excellent complexity that goes in further on this.
    56:51 Joe S: yeah like I
    56:52 Jeff: Like to pay for that pay for their members with out vehicles.
    57:01 Joe S: Without being is that even possible do you allow that?
    57:05 Jeff: I love that because
    57:06 Joe S: okay
    57:10 Jeff: There's just more it's try trying to accommodate where possible I draw lines in the Sand though someone tried to get me to fill out there government organ. ization three different supplier applic Ation so that but that's like a very like I do only do the covering lots of people to have that tall people. And it makes it easy for them and keeps the relationship with the members and that particular corporate.
    57:43 Jeff: organization happier
    57:46 Joe S: Yeah, yeah okay, so it's seems like there's definitely a fair amount of education that we would probably have to be.
    57:56 Jeff: it's a question of
    57:57 Joe S: said yeah
    57:58 Jeff: Scoping them and then seeing you want to do them and I don't know who's project managing and our side.
    58:06 Joe S: I mean you could like it makes more sense to my mind that these people who want to not have a corporate account. We'd still have a corporate account but maybe they don't don't see it you know.
    58:18 Jeff: Yeah, and then they can just pay for the restoratively.
    58:22 Joe S: Something like that. Yeah.
    58:25 Jeff: I forget having a like a corporate. And corporate not paying for it.
    58:31 Joe S: yeah
    58:31 Jeff: That way they can because I think one of the biggest defines I think. it's broken currently and So we technically have a membership search for individual members is over the back of members utterly broken really. people are like aglo because twice Orca solid is twice.
    59:08 Joe S: and I'm guessing this isn't anything to do with Monday directly this is within the CRM
    59:13 Jeff: this is five which is why I think why became what we've had the suggestion of doing a
    59:15 Joe S: yeah
    59:19 Jeff: corporate lobby because the end of the day We can ship the management of their details to them.
    59:27 Joe S: Yes, yeah.
    59:28 Jeff: And then also more important. They can simply also flag. If they know who their members are they can then add people to their organization? And obviously someone will proverb they can also remove people and that way we can flag when people are leaving organisations because I think one of the
    59:43 Joe S: yeah
    59:44 Jeff: biggest barriers to renewals is. apparently people who regularly sign up with Just their work.
    59:55 Joe S: And nothing else.
    59:55 Jeff: And nothing else, so I think we've started trying to get people to provide secondary. It's not why we can trace them down. not to necessarily just perceived money, but like we have people who have come have come back and Please make the largest 5000 dollars.
    01:00:19 Joe S: Yeah, oh this comes back to the whole reusing emails address thing right.
    01:00:19 Jeff: and they Yeah three using email address. So, I think like you know making sure that people have a profile for like scenario is kind of the goal.
    01:00:39 Jeff: Because we have an issue right now where members are sporting system.
    01:00:44 Joe S: Yeah, so okay, so ideally you're catching people trying to sign up again with like the same person signing up again, but not necessarily the same email signing up again.
    01:00:58 Jeff: Hopefully frustria since they can they're signing up in the last three months of
    01:00:58 Joe S: yeah
    01:01:02 Jeff: the year take the associate discounts and then they can get the associate discount on the water entries. And there's nothing on system that can prevention and well. Why we structured everything get nothing even against the rules.
    01:01:17 Joe S: Yeah, I mean it seems like entering a first name last name. And having it associated with the corporation even if that corporation doesn't necessarily have its own account.
    01:01:26 Jeff: yeah
    01:01:27 Joe S: So The Corporation would be the same Beacon [lighting.com.au](http://lighting.com.au/) would be associated with that domain and then you can do a little bit more.
    01:01:34 Jeff: And I feel like I want the biggest one of the issues that I find. I'm trying to fix it up is I look at all my hands. It is particulars the different variations membership is managed to come up with organizations.
    01:01:54 Joe S: yeah
    01:01:55 Jeff: sorry, I think one of our issues is that some people listed as Fanclotting technologies Australia and then they might not have a you on the end, I will add ptiotd.
    01:02:07 Joe S: mmm
    01:02:07 Jeff: I'm wondering if we take it has an email.
    01:02:15 Joe S: Well, yes, so the domain address thing would sort this in the sense that if they sign up with their domain and it's the same one. Sorry, yeah.
    01:02:26 Jeff: and
    01:02:27 Joe S: That's what I'm saying. Yes, so if they like oh, I'm gonna type it in different way, but it's like but you're part of this domain that already has this cooperation. They don't necessarily need to even have the choice if the corporation already exists.
    01:02:38 Jeff: They've only been using effectively using a paper former thing put on the work.
    01:02:44 Joe S: yeah
    01:02:44 Jeff: Ideally, I would rather the members look up their organizations. lighting and they can go find that correct organization if apple after providing a suggestion if we Really really detailed stuff right now. It's a mess.
    01:03:04 Joe S: Yeah, I think this this again. It seems like you need a corporation system. That's separate from the member system as to work cleanly.
    01:03:13 Jeff: So what cleanly especially if they want to get back to doing this correctly? But really that is that we just the size of is to make sure people can do their
    01:03:19 Joe S: yeah
    01:03:25 Jeff: job the idea is people can come to us like they're looking for a registered
    01:03:27 Joe S: yeah
    01:03:30 Jeff: learning French organization to do some work. They can go in here. They can see all the details. This is all manually edited. They're asking where that data is stored. And they can see they can't contact.
    01:03:49 Joe S: I won okay, have you have you had any experience with them power bi?
    01:03:54 Jeff: Yes, I tried to build a power dashboard. A project management software consider synergy from my previous role, it was very powerful and I really liked it. I couldn't put it together because of
    01:04:06 Joe S: hmm
    01:04:10 Jeff: system. the project software side
    01:04:15 Joe S: Yeah, I'm kind of wondering so if we basically have a database that's a source of truth and we want to be able to pull all these different reports. We don't want to have fixed reports that are created in code, but you do probably also want pretty efficient state machines running things like the you know the sign up in the payment flows so a dashboard like power bi attached through to that database would be a good in between perhaps.
    01:04:43 Jeff: Yeah, I think it could be it is an option. I think the end of the day the goal is for me to stop sending voices.
    01:04:52 Joe S: Yeah, yeah.
    01:04:53 Jeff: The idea is it the Bank of the members can just go login there profiles and know they're not financially see when they'll last one actual. Automate the whole thing that this is how we talk to us we do need flags and reviews and things. I need to know when people do these steps like when those. I think the dream is that it's not manual. They don't need to talk to accounts to do everything.
    01:05:20 Joe S: I think what I'm Gathering is I don't think there would be an app like I don't think we would find a CRM tool or any of that that would have.
    01:05:33 Jeff: It's almost nothing that even remotely covers every scenario.
    01:05:38 Joe S: Exactly yeah, so at the moment. I'm wondering if it would be worth outsourcing
    01:05:40 Jeff: and
    01:05:44 Joe S: certain things like a digital signing is not really worth build again, but having the main Flows In the main state machines kind of live centrally and then using integrations with those tools.
    01:05:56 Jeff: Yeah, I think that could be the way it does like also. Comes right now the website it costs about 2000 dollars a year.
    01:06:02 Joe S: Yeah, yeah.
    01:06:09 Jeff: to 2,000 host of and then we are anything other than we paid or is the
    01:06:09 Joe S: too thick
    01:06:15 Jeff: [monday.com](http://monday.com/) licensing CVS Which have gone up in price because they have rejected last year which I do
    01:06:17 Joe S: hmm
    01:06:22 Jeff: apply to get the Society to have. It is actually doable in terms of putting a cost on it. This is the cost of me.
    01:06:29 Joe S: Yeah, I believe this is go to be a tricky one right because in a normal business you simply say well, what's adrs of your time worth? That's what you'll be saving so it's worth the vest. yeah
    01:06:47 Jeff: that's a partial cost of the second
    01:06:50 Joe S: yeah
    01:06:51 Jeff: so they're you can't put a cost against it and we did a cost of benefit analysis based on our time and the worst savings to be have and I guess it's just ensuring the return on investment and be that the software costs don't keep blowing out like forever and Grace And at least they still get a return on investment.
    01:07:14 Joe S: And this is going to be where we draw the line between having your cake and eating it to like every last Edge case covered versus going well. It's simpler and it doesn't allow for XYZ but it's here and it works.
    01:07:26 Jeff: yeah, I I'm very quick adoring manual processes, so I'm less worried. I would love it to be automated, but I understand that. I think the main thing was the society is main goal here is providing value to
    01:07:44 Jeff: members. Because one of the biggest figures issues is that one of the biggest office?
    01:07:45 Joe S: Yes. yeah
    01:07:53 Jeff: I think part of it is as a member of a corporate and individual you don't get to see what you're doing. You're not say your you know you operate's cleanly you don't see here. Element you don't see your members. You don't see anything to show value outside of the 10 events. And I guess like it always be problems with different. It's always someone who
    01:08:14 Joe S: yeah
    01:08:18 Jeff: will say there's no value. I think I think the focus really is not. making everything easier and cleaners
    01:08:33 Joe S: Yes dashboard, so I'm just going to write a main priority list. easier updates I members so how does the sound for your main priority list you've got your easier updates by the members. I they can log into the dashboard and get things done things. They can't currently do all things. They are currently doing but in a way that doesn't suck essentially better men membership status management which sounds like basically knowing if someone has signed up before and then they They fight stop paying or you know like because you you go year by year. So if it was two years ago. There's almost no way for you to know right things like this.
    01:09:20 Joe S: Linking so that comes along with kind of linking Monday and it won't turn web plus fiber but better.
    01:09:27 Jeff: allowing members and non members to also buy
    01:09:32 Joe S: Well, yeah okay, but yeah all the equivalent and then the other one is basically better subscription payment management which is essentially knowing if someone's paid if they haven't paid if they've over paid all of that. allowing hold on allowing
    01:09:50 Jeff: Right now, we have that feature and we lose it. It's okay that we have.
    01:09:56 Joe S: So to buy tickets to events basically.
    01:10:01 Jeff: Currently, that's integrated into a lot of some of that interference website if it could be. it could go into what I'm that right and link to the new Sol ution in terms of this year who go
    01:10:17 Joe S: yeah
    01:10:18 Jeff: This way to do that integration. It's not that one's not new that's a solvable separate issue. It needs to move account the feature on the website that we get
    01:10:26 Joe S: Yes.
    01:10:28 Jeff: lost and then there's the upgrades have to get that has to exist someone.
    01:10:35 Joe S: Yeah, I think what needs to be at the core of this from the sounds of it is just a very solid membership subscription and ideally also organization system that then can be built on with you know tags or custom rules for things like more complex upgrade procedures and things like that does that sound about right?
    01:11:02 Jeff: I think that should really happen. It will always ask that people always ask the question who's our most valuable for people. Transaction as zero the members are what? Ideally better. once again one of my dreams cases
    01:11:26 Joe S: I'm a great believer and not having the not having two versions of the same data in two different systems.
    01:11:36 Jeff: I hate that it's too versions, but the issue was we hit a point we could no longer trust the website.
    01:11:41 Joe S: Yeah, no I get that I yeah. I think that would be the the main from my
    01:11:42 Jeff: and
    01:11:45 Joe S: perspective it seems like if you're going to grow. You need a cohesive like link between everything because you can't build on it if building on it means more double handling.
    01:11:57 Jeff: I that's an example of the cpda. I don't know if they have professional requirements after. June they do but I don't.
    01:12:10 Joe S: do they okay so
    01:12:12 Jeff: I just I don't interact with it all. But CPA has requirement that you do sit down. To your professional development you have.
    01:12:23 Joe S: It seems like this could be something where they upload essentially like if they have an educational tool like this that you say okay, we accept submissions from this then that could just be linked in some way to be approved as it update.
    01:12:39 Jeff: I think that's like yeah like it's like it was an idea and I think that would provide. I don't think it's necessarily a complicated feature but in members. it would add something they could just
    01:12:55 Joe S: Yeah, yeah. Okay, I think I think I've got a pretty good general picture. It does sound very
    01:12:59 Jeff: yeah
    01:13:04 Joe S: complicated particularly the things around. Some of these processes with the different membership tiers.
    01:13:14 Jeff: Of how I interact with you overall it workflow. The mentions currently works and that will good start Point for other
    01:13:21 Joe S: yeah yeah
    01:13:26 Jeff: conversations especially with the secondary especially if I get it wrong. She'll correct me.
    01:13:30 Joe S: That would be really good. Thank you. Yeah, if you like. I know it would be a huge ask but basically your process of using Monday or your Monday process like what you have built would be fantastic.
    01:13:43 Jeff: keeps changing I write I write I fit I met riding on them iron down and the next one.
    01:13:54 Joe S: How about okay maybe?
    01:13:57 Jeff: I'm just gonna give you a high level not necessarily.
    01:13:59 Joe S: Yeah, maybe after I've talked to everyone else and if yeah depending on how that all goes. It might be good to sit down with you and then. Properly yeah properly like I can do the right it will probably take a while but
    01:14:11 Jeff: Knock it out.
    01:14:16 Joe S: basically create that. Yeah, yeah.
    01:14:21 Jeff: if you get the basic workflow in terms of membership renewals inspiring back every now everything else is just the main thing is like I'll have to
    01:14:30 Joe S: I'm getting a clearer picture, but I've also got any sense that there's so much detail that's going to be so easy to miss.
    01:14:40 Jeff: Do a good chance to everyone really sitting down with Greg is in charge of memberships. I guess maybe the Andrew Steve and just going okay here's how currently works. Is this how you wanted to work? Because it's opportunity to change it because once you build it like this thing
    01:14:55 Joe S: Yes. Yep.
    01:14:59 Jeff: is going to be very specific for that workflow.
    01:15:02 Joe S: Oh, absolutely.
    01:15:03 Jeff: Like they're not going to change until they want to do a major upgrade in that one people like 10 years.
    01:15:09 Joe S: Yep, that's right. I will I will try and build it in such way that it's like hmm. Say a particular workflow lives on its own and it doesn't need to interact with anything else, so that if it does need to change it won't break anything else, but it might be very hard to do that because if it's relying on someone being a Membership here in that membership here goes away then of course you can't have it independent right.
    01:15:33 Jeff: This week and what the students and students are students conc.
    01:15:40 Joe S: yeah
    01:15:40 Jeff: Essional running just finalizing that now because there was.
    01:15:43 Joe S: yeah, exactly it sounds like it's yeah all in Flux
    01:15:47 Jeff: It's it's always implies. but the
    01:15:50 Joe S: And the good thing about a manual process is it can be to some degree in Flux it's just you are more likely to have issues because you like what we weren't doing it this way a year ago.
    01:15:59 Jeff: Exactly and it's like one of the biggest things I do. Impressible so that in terms of like. Easy prior five years but only two of these are only one of these as relevant. Because everything was so vastly different it was almost.
    01:16:21 Joe S: Yes, yeah totally understand. I mean I've been in very similar situation. yeah okay, so I would love if you don't mind sharing these documents the pain
    01:16:33 Jeff: yeah
    01:16:34 Joe S: points and Also, is there anything you'd like so obviously I got to talk to the secretary. Is there anything specific that you'd like me to ask anyone else?
    01:16:50 Jeff: Not particular I mean. Not really think about anything I'll send.
    01:16:56 Joe S: Okay and if you do sorry. Also, yeah like if you're like okay. This is my process now because that's what
    01:17:04 Jeff: you
    01:17:05 Joe S: I'll be trying to figure out with you, but if you're like well given a blank slate. I would do this instead and as much detail as possible into that but then of course I understand that we would have to talk to everybody else to approve that right.
    01:17:19 Jeff: Speak to like secretary Craig and pollutioner as well. She does education a lot
    01:17:20 Joe S: yeah
    01:17:26 Jeff: more about education side of that you get a good understanding of everything else that's going on with memberships. And then we can do some process mapping. And just map it all out and then at that point. I'll know there's anything that we could do differently.
    01:17:44 Joe S: yeah
    01:17:45 Jeff: Suggest what I don't know so unfortunately. I might see if I can also send you. Governance as recently revising the process for membership on how exactly works with him and I might get Samuel copy of that draft, so actually lays out a lot of the processes in detail.
    01:18:09 Joe S: Yeah, that would be really good.
    01:18:09 Jeff: Not in terms of how it's supposed to work which I think might help you
    01:18:13 Joe S: Yes.
    01:18:14 Jeff: especially with your meeting correct.
    01:18:16 Joe S: Yeah awesome. Cool all right. I think that's it. Thanks so much for your time. It's been yeah. Very good to go into detail. I think that's gonna be very useful. Yeah, so awesome. Good to talk to you and probably will be in touch the next week so once I've talked to a couple other people or a few other people for a bit more detail and I'll have a look through these before that as well. So we can hopefully come back and talk about more of a final version.
    01:18:48 Jeff: all right
    01:18:50 Joe S: Also, thanks so much. Have a good one talk to you soon.
    

## Greg (Membership)

- Notes
    - Dual country really important
    - Everybody has a personal membership
    - Should have a timeline of membership changes
    - Membes SaaS looks maybe good?
    - Bank transfer currently works through paypal for eg
    - Pain points
        - Reporting is problematic
        - Emails not getting through
        - Keeping memberships up to date
    - Ideal solution
        - Graph of membership data per year (by type, chapter grade, etc)
        - Invoice for continuing lapsed accounts by tracking timelines
    - Corporate members in parallel
        - Minimum 2 members
        - Pay more per member
        - Then can be shown in the database
        - Can get corp member discounts
    - Currently CPD goes into a black hole
        - Currently honor based
        - Allow for manual pdf + approval (could be complicated otherwise)
            - Only really required for RLP
    - Assc technician member (MIES) fellow
    - Life membership member fellow
    - Everyone joins as an assc
    - Students join as normal
        - Get their associate membership tier for free
            - If going through an approved course
                - 2 types of course
                    - Endorsed course (2-3 day) expensive, introduction to lighting etc, paid for by kickback from the
                    - Approved course (longer, 1-2 year), university led, once passed then they have completed and they can be upgraded to technician
                        - Dont need referees but do need course cert, grades, etc (evidence)
        - Upgrade applications (Associate → Technician)
            - 160-180
            - Upload proof
            - Goes to secretariat
                - Copies to sharepoint
            - Goes to chapter membership coordinator
                - Checks they passed and signs off
                - Signed with Xodo sign atm
            - Approved by Secretariat and notifies Jeff that membership is upgraded
            - Ann looking after Wf5
            - Sent certificate
            - Applies for the year
    - Technician → MIES (kind of like passing the bar)
        - No mandatory CPD point requirements for any of the 4 grades
        - Same as MIES → Fellow
        - Two routes
            - Tech certificate + 4 years practical experience + 3 referee statements (3x MSIES+ or  2x MSIE+ level referees + one well known ring in eg managing director/president) + submit portfolio (spreadsheet + some other documents)
                - If something is missing then an interview is required. Chapter membership chair organises some people (3+) for a sit in / speed interview
                - Reviewed at chapter level (more than one member), known for giving easy passes
                - Goes to international status and qualifications (moderator for NSW, Perth, WA) who look review what has been done to review and approve that / send it back
                - Then goes to MIES board for final approval
                    - Via email
                        - Log of whats happened
                        - This is a Xodo sign off
                        - Everyone on the board signs off
                    - If it goes as part of a meeting and isnt unanimous
                        - can be upgraded as a meeting decision
            - Appeal to the board directly
                - Someone writes directly as a referee saying they meet all requirements and would like it to be a surprise
                - Usually falls under honorary membership
                - Lifetime Membership
                    - Not different from an honorary membership technically
                    - Difference is this member has gone through the membership process
    - MIES+ → Addon → Registered lighting practitioner (RLP)
        - Not currently charged
        - Similar to process to get to MIES
        - More requirements
            - Must do 20 CPD points every 3 years
            - Need to submit 3 projects as a portfolio
    - Assc → MIES
        - Often used for people who have lots of experience in the industry
        - Arrange for a panel interview
    - Fellow → Life Fellow
        - Manual, decided by the board
    - Retired Membership
        - Discounted membership
- Transcript
    
    # PXL x IESANZ - Stakeholder Scope Meeting Schedule (Greg Williams)
    
    Meeting started: 08/10/2025, 15:13:08
    Duration: 54 minutes
    Participants: Greg Williams, Joe S
    
    [View original transcript](https://app.tactiq.io/api/2/u/m/r/0kjWcCtFbo98UJ3MxIk9?o=txt)
    
    ```
    ## Highlights
    
    > 04:15 Greg Williams: So so Jill country or more than one country functionality is really really important able to cope with the text jurisdictions in different GST rates in particular is really really important. Integration was zero is vital.
    
    ```
    
    > 20:09 Greg Williams: and I've get three referees to agree that I've got professional experience and I'll submit some staff and one of them as a spreadsheet and There's a few more but some pieces that they have to put in there, so there's probably two or three documents that they need to submit. With that upload three statements need to come.
    27:24 Greg Williams: right, so So there's more steps to get to member right, so they submit their form. They
    33:11 Greg Williams: it's it's the process to get to rlp is very similar to the process that you need to get to Mis From technician there are more requirements in terms of the documentation you need to provide instead of having three referees that sign off all your work and you don't need to nobody needs to see the work you actually have to submit.
    33:41 Joe S: Oh, I see so the spreadsheet from the other one isn't the same as submitting a portfolio. They're letting practitioner needs to submit actual projects.
    42:30 Greg Williams: Yeah, well at the moment. We ordered it by saying you give me your CPD point for summary and if you've got some proof that you've actually done this stuff as well. That would be nice. Thank you because we are voluntary organisation and we
    44:52 Joe S: Oh, I see, I was wondering there's a very interesting looking band of screens behind you that looked like they're doing something important.
    48:37 Greg Williams: And and holy crap. It's hard work and so that's that is a bit of a challenge then keeping their their information up to date as always to challenge. So the reporting is important to me specially annual report time because I then
    49:05 Greg Williams: And yes the other stuff that you've heard about is still there as pain points too so yep ultimately the ability to freeform. And invoice for renewal of past years as important to us right so people can
    51:19 Greg Williams: yeah, that's it and so that caused grief so that's where the link to 0 is important that automated payment system through Zeros fantastic, so
    52:10 Joe S: Maybe I should ask this to Jeff as I just okay, so the reason I was asking about that is mentioned that the strike fees are basically pretty honorous, but what stripe does do really well is make sure people have paid what they're supposed to pay on time for the rest of it their credit card hasn't expired all of these things that are kind of important for like managing lots of subscriptions. It's kind of built in.
    53:08 Joe S: bank transfers still being manual could be an issue. At least it would be a smaller issue than I suppose.
    > 
    
    ## Transcript
    
    00:00 Joe S: Hello, how's it going?
    00:01 Greg Williams: Sorry, I'm late.
    00:03 Joe S: That's so good as I drink something wrong.
    00:05 Greg Williams: It night will it has but not on this job some are different job say. The life of a director is never to to say well done people good job and well and and that's that's fine. It's only to deal with shat.
    00:20 Joe S: Unfortunately is that yeah, I'm glad I'm not one at the moment or at least not one with the team.
    00:29 Greg Williams: Yeah, it's unfortunate position until you end up being too busy, but yes.
    00:34 Joe S: Yes, which is already happened absolutely yeah, so lovely to chat again. We
    00:36 Greg Williams: he's So we got you in there. Well done. That's awesome hey. Yeah. Tell me about it
    00:40 Joe S: chatted before didn't we? Yeah, we did at last it's been one every year yes.
    00:47 Greg Williams: defec's lost here gone Gray grains some more here lost to the game there. It's
    00:51 Joe S: It had another child. Yeah.
    00:53 Greg Williams: yeah. That's right.
    00:55 Joe S: Absolutely anyway, so yeah nice to see your face. It's been a minute. I have
    01:00 Greg Williams: yeah
    01:00 Joe S: talked to Andrew and at least I talked to Jeff from Allen 360.
    01:05 Greg Williams: Good, yeah.
    01:07 Joe S: And Jeff basically said to talk to you about everything membership related that he isn't across does that sound of array?
    01:15 Greg Williams: Yeah, I guess so yeah. That's my tip. That's my official portfolio so
    01:19 Joe S: I I'll try not to take too much of your time, but it does sound very detailed for what I gathered.
    01:25 Greg Williams: well I guess I get it from the Company Secretary when the the membership portfolio win the membership list doesn't correct because can't be secretary has to make sure that. When we reporting back to Isaac and which is the government regulator in Australia on on? How we're going and who we are and what we are and do we know who all around members are and then we know when they joined and when they when they ceased and have these people ever been a member before and it's like well. You're not really.
    02:03 Joe S: Yes, yeah, I have yeah. Just just been through that.
    02:05 Greg Williams: And there's been a few iterations of the membership database like 2016. We we started one.
    02:13 Joe S: yeah
    02:13 Greg Williams: I think before that it was probably spreadsheets.
    02:16 Joe S: Yeah, and now it's [monday.com](http://monday.com/) database being run by ref.
    02:19 Greg Williams: and and the website was was a marketing website And when you look at it when you look through it, you'll say well. Yeah, I can sell things and I can. It's how things to people when I can keep notes of CRM it's a CRM tool basically.
    02:41 Joe S: Yes, yeah.
    02:41 Greg Williams: And and it's and it's and it's like right so we want to do invoices on this thing right now.
    02:50 Joe S: It's not that kind of a CRM yeah.
    02:53 Greg Williams: No and and actually we've got two text jurisdictions that we have to look after.
    02:57 Joe S: Yes, yeah which is why currently it's being done manually from the sounds of it for the like. It's been doing done manually longer for the New Zealand constituents that I have for the AU but they're all being done manually now, is that right?
    03:10 Greg Williams: Yeah, yeah something like that. Yes, and so so we've disabled the selling things
    03:13 Joe S: yeah
    03:16 Greg Williams: part of the website ended up because it's like it couldn't handle it could handle buying things with e-way, but EWA can't cope with two with two.
    03:30 Joe S: Hmm with multi currencies and all the rest of it. Yeah.
    03:30 Greg Williams: current Multiple end different GST rates and you know and that's just like holy crap. This is this is fundamental people. What did you and Andrew was the one that was
    03:39 Joe S: yeah
    03:41 Greg Williams: responsible amongst other people in the board back then for giving us web force fives website and the first place. so so am I a bit grumpy and disappointed quietly yes, but I won't I won't dwell on it because because when we here going forward and we're going to help us fix it right so
    04:03 Joe S: Yes, yeah, although hearing about everything. We went wrong is no bad thing in the sense of let's not do those things.
    04:11 Greg Williams: Yeah, let's not do those things right so yeah.
    04:12 Joe S: Yes. yes, so
    04:15 Greg Williams: So so Jill country or more than one country functionality is really really important able to cope with the text jurisdictions in different GST rates in particular is really really important. Integration was zero is vital.
    04:29 Joe S: Yes yep yeah, yeah.
    04:33 Greg Williams: From a membership perspective who's joined, what state is they are our the way our memberships are structured is everybody has a personal membership.
    04:44 Joe S: Yes.
    04:46 Greg Williams: Okay and so I'll be I'll be a Fallow in the lighting Society and I joined in I think 2013 or something like that. And and somewhere in my membership record they should be a way of saying Greg Williams is was an associate app until this state technician happened all that date a member and they're each different grades higher up right, but I remember
    05:15 Joe S: yeah
    05:17 Greg Williams: from this state to this state the board. Side of the convert them to a fellow on this date he still there. and and then As a parallel exercise I said let's make corporate members and corporate members we want to recognize the fact that the company is paying for. four people
    05:41 Joe S: Yeah, so yeah, they pay for up to in groups of Tours that right.
    05:41 Greg Williams: right Yeah, and the only reason I chose two was because of better than one because
    05:46 Joe S: yeah
    05:49 Greg Williams: otherwise all people will just take one.
    05:52 Joe S: And then there's just the same as a normal member yep.
    05:53 Greg Williams: And so if they have to pay. And if they have to pay for two everybody starts us in associate. As a company member as a company two member. Thing you get two members it doesn't matter what level they are.
    06:12 Joe S: So basically corporations have a minimum of two members to exist.
    06:16 Greg Williams: yeah
    06:17 Joe S: And do they get a different right I assume on those memberships.
    06:20 Greg Williams: We pay more.
    06:22 Joe S: per member
    06:24 Greg Williams: yeah Because they're corporates. They can pay more because they get text to that actions.
    06:32 Joe S: All right and but the benefit they get is their corporation can then be shown on the website? Is that yet okay?
    06:37 Greg Williams: And we might give them corporate member discounts actually what we've done. So let me just Just clear the slice a little bit so we've got associate technician member fellow. And we've got life memberships of member. and fellow
    07:04 Joe S: life membership member
    07:07 Greg Williams: Like life membership means they don't have to pay fees anymore right.
    07:10 Joe S: Yes, yep so associate technician member fellow is the usual flow someone said.
    07:15 Greg Williams: Yeah, everybody everybody has to join as an associate no matter what?
    07:20 Joe S: Yes, yeah someone said MMS ie is a membership.
    07:25 Greg Williams: Mis is member for Cabot is a professional member.
    07:28 Joe S: Okay, so someone says Mis they're just referring to member but then there's also a lighting something that's more of a tag not an actual status right.
    07:39 Greg Williams: Yeah, so so let's I'll get to that one. That's coming all right so everybody
    07:43 Joe S: Yep.
    07:45 Greg Williams: joins us an associate member.
    07:47 Joe S: Yep.
    07:48 Greg Williams: students That are studying join us and associate member and then get a discount of the full price so that they're free.
    07:59 Joe S: cool students okay
    08:04 Greg Williams: And and so if they can prove to us at the same time as they join that there are student then we apply the discount straightaway near free.
    08:13 Joe S: Right hold on just make sure I've got this so Associates join us in associate, then they could just counted price upgrade to member as in they don't go via technician.
    08:22 Greg Williams: No, no hang on hang on Associates the base level of people in our organization.
    08:29 Joe S: Yep, so everyone joins us an associate including students, so there's no special
    08:31 Greg Williams: everybody Associates
    08:34 Joe S: student associate.
    08:36 Greg Williams: You know there's not there's not a space called associate student or student associate.
    08:42 Joe S: Called so they join.
    08:43 Greg Williams: as a joint as a rank I'll put
    08:46 Joe S: So they basically join as normal I standard and then they get a discounted price
    08:48 Greg Williams: Yep.
    08:50 Joe S: when they want to upgrade to a member i m i e yes.
    08:54 Greg Williams: No, no no, we do all we do is if you're a student member.
    08:56 Joe S: sorry
    09:01 Greg Williams: Then we will give you your membership for free.
    09:04 Joe S: Okay, so that's the that's the associate membership here that they get for free.
    09:10 Greg Williams: yeah
    09:12 Joe S: okay
    09:13 Greg Williams: Okay because normally students and already professional members or technicians.
    09:20 Joe S: yeah Gotcha okay, sorry the dual use of the word member. I think that's tripping out
    09:26 Greg Williams: It's Complicated they are now drives me around the bin too, but then using
    09:26 Joe S: there okay. and Jeff mentioned
    09:31 Greg Williams: people is because that's what's in our constitution and our bylaws and if I get give you something different and you start using those different things in the
    09:38 Joe S: Then it'll get confused.
    09:40 Greg Williams: website. Holy crap. I'm going to have to change the vials so.
    09:43 Joe S: Yeah, gotcha.
    09:44 Greg Williams: right, so
    09:46 Joe S: And Jeff mentioned that student process is a solving figured out is that true?
    09:50 Greg Williams: Well, not my head.
    09:52 Joe S: Okay, so it might be downstream from you. That's being figured out.
    09:55 Greg Williams: when when you get to somebody like lurcher who's in charge of students and knowledge development and that sort of thing she got all sorts of ideas right so
    10:07 Joe S: If I've got her books, I think certainly need to.
    10:10 Greg Williams: You need to different you need to have your book done right, so she's vice president and she goes around she goes round coming up with ideas. She's an
    10:20 Joe S: yeah
    10:20 Greg Williams: idea. It's really like that say.
    10:23 Joe S: cool
    10:24 Greg Williams: Yeah, so we have we have associate members if somebody is a student and they
    10:27 Joe S: yeah They got it.
    10:30 Greg Williams: join as a then if somebody's going through one of our courses or our not our courses, but somebody's houses courses that we've we've tagged up with we say you can have a free student membership right. That's the free associate as a
    10:45 Joe S: So an affiliate cool. Yes.
    10:46 Greg Williams: student. Yes.
    10:49 Joe S: I'll just call it an approved course.
    10:51 Greg Williams: yeah
    10:53 Joe S: Cool yes cool and that that only applies presumably while they're going through the course. They don't get to keep it forever.
    11:02 Greg Williams: Well, that it applies for the year there. Get because we have a yearly a yearly renewal and I can't be asking this this course only lasts for two months so
    11:11 Joe S: Fair enough, so it applies for the year.
    11:12 Greg Williams: So get it for the right.
    11:13 Joe S: Cool all right that that makes sense alright, so we've got the main flow life
    11:17 Greg Williams: okay
    11:18 Joe S: membership. students yep
    11:22 Greg Williams: Yeah, and then they'll go through and we have two types of courses one is an endorse course. Which is like a two-day course or a three-day course or something like that and their expensive and people pay for them just to. Just to get an introduction to life and or something like that and we'll say well because you've done this and because we get a kick back from the course provider you can have your your student membership.
    11:51 Greg Williams: And we people say student membership, but when there were what I'm getting at is when they say student membership is it's an associate member with a discount over 100%
    12:00 Joe S: Yes, yeah, and is that kind of how you would want it represented in reports and everything or is that just kind of how it structured.
    12:10 Greg Williams: let's let's The hopes I go through to reconcile the way the bylaw is a written.
    12:18 Joe S: Right, so yeah so for my perspective. We're trying to match the Bilal
    12:19 Greg Williams: Okay, if any report you could just pay it would be a student membership and that would be fine.
    12:24 Joe S: Yeah, yes.
    12:25 Greg Williams: And everyone would know exactly what you're talking about and I would go that's not what the Bible says.
    12:33 Joe S: Yeah, so in a sense the bylaws are the process in this case we're trying to
    12:33 Greg Williams: okay
    12:37 Joe S: match the system to do what the bylaws say does that sound right okay?
    12:39 Greg Williams: yeah Yeah, which you can get on the website and read a few feel like going to sleep,
    12:43 Joe S: cool
    12:46 Greg Williams: but yes.
    12:48 Joe S: Yes, I imagine at some point. I will be going through them. Cool right, so there's two types of course the endorse course and then there was presumably another one.
    12:58 Greg Williams: These an approved course and that is a much longer thing that's like a one to
    12:59 Joe S: Yes.
    13:03 Greg Williams: two year course.
    13:06 Joe S: Yes.
    13:07 Greg Williams: And that's put on by the universities. And once people have got and passed their approved course. Then they have come then we say they have completed the technical requirements that enable them to be upgraded to technician.
    13:27 Joe S: Cool and they don't need to provide any extreme forward do they still need to provide referees in a rest of it?
    13:32 Greg Williams: They don't need referees, but they do need copy of the course certificate their grades or their passing. pass Max it's evidence that they've passed of course right so
    13:42 Joe S: yeah Yeah, cool okay.
    13:48 Greg Williams: And some of them give us the grade results and some of them give us the certificate that she's well done. You love me are illumination diploma and lighting or something like that.
    13:59 Joe S: gotcha, yeah
    14:01 Greg Williams: So we upload that information of course.
    14:01 Joe S: okay And that goes against the profile, but it's not public unless they wanted to be like you don't see their certificate but you can.
    14:12 Greg Williams: So what happens then is that?
    14:12 Joe S: there's no
    14:19 Greg Williams: At the moment they apply for an upgrade which costs them some money.
    14:25 Joe S: Yep.
    14:26 Greg Williams: And $160 or 180 dollars or something like that whatever the numbers.
    14:31 Joe S: Yeah, yeah.
    14:31 Greg Williams: And and they upload their proof. That goes to the secretary at the secretary at then copies that proof into a SharePoint folder and pokes the relevant chat to representative that look because my my position is membership is replicated in all of the chapters.
    14:53 Joe S: right
    14:54 Greg Williams: So I said it sent at Broad level and I've got a membership person at chapter level. And and they do the first level of checking so they say yep this person has
    15:02 Joe S: Yes.
    15:07 Greg Williams: passed the bar. Well done the sign on the on the approval Max sign form. That electronically and and they get upgraded to technician.
    15:21 Joe S: And this is done with approval Max currently no approval Max is for budgets. What's this one done?
    15:27 Greg Williams: This is done using Adobe sign or something like that.
    15:31 Joe S: Okay so kind of manual-ish.
    15:33 Greg Williams: It's yeah, because because Ann loads it into the thing to for people to sign and then they sign it and then she says oh, it's signed so she then changes the she seen then notifies Jeff that they've the things come through. And notifies the person that they've got their upgrade and then sends a Pacific at this world and you now technician great.
    15:58 Joe S: Yeah, so once. I've been upgraded by Jeff then they also get sentences to certificate is alright.
    16:02 Greg Williams: yeah
    16:03 Joe S: Okay, so there's a few moving parts here right because there's the pro yeah,
    16:07 Greg Williams: Yeah, there's lots.
    16:09 Joe S: there's the process with SharePoint from the signing Jeff has to not only be notified that that's been signed and approved but also check to see that the deposit's been paid or yeah, so he's combining that and then.
    16:21 Greg Williams: Yep.
    16:24 Joe S: Is going into [monday.com](http://monday.com/) currently and upgrading the membership manually in
    16:29 Greg Williams: Yeah, yeah.
    16:30 Joe S: [monday.com](http://monday.com/) and also going to webflows5 presumably an updating the data in there.
    16:33 Greg Williams: Well, and because we've got two moving parts one is Jeff looking after
    16:37 Joe S: yeah
    16:37 Greg Williams: [Monday.com](http://monday.com/) and we've got Ann looking after our dog which is web for swivel thing. Right, she's supposed to keep web force 5 app to date and Jeff's posts to keep
    16:44 Joe S: Yes, yeah.
    16:49 Greg Williams: [mandate.com](http://mandate.com/) up to date the sometimes the two refused to communicate to each other just I don't pick up the phone right.
    16:56 Joe S: Yeah, Jeff was just showing me the membership things within web force five so I
    16:58 Greg Williams: And it becomes disappointed.
    17:03 Joe S: know he can do that, but yeah okay good to know that.
    17:04 Greg Williams: okay, I don't think they I don't think he changes web for I think Anne changes web, Portsmith
    17:10 Joe S: okay cool so
    17:12 Greg Williams: But I'm not sure but if we've got it all in one system then lies would be fine say.
    17:17 Joe S: Yeah, yeah totally cool all right so upgrade application. They upload proof because the secretary of who then copies it to SharePoint which goes to I've
    17:25 Greg Williams: yeah
    17:25 Joe S: called it chat to appointee is that the right term or should I call it some chapter head or something?
    17:30 Greg Williams: chapter membership coordinator
    17:33 Joe S: s*** coordinator
    17:34 Greg Williams: yeah
    17:36 Joe S: Who basically checks that they passed and then signs off?
    17:39 Greg Williams: yeah
    17:41 Joe S: Currently stand off with the Dobby probably that which is then approved by well. It goes back to the secretary right.
    17:51 Greg Williams: yeah Who then manually notifies Jeff that it's that it's passed. You feel my pain every time I say the word right so yeah.
    18:02 Joe S: yeah Yeah, and anything manual is yeah prone to like things falling through the
    18:06 Greg Williams: This gives nana excuse to forget something but yeah. yeah
    18:15 Joe S: cracks cool and then in theory and Jeff does one day and Force 5 and at this point the number is Center certificate, so that's the full process.
    18:29 Greg Williams: Paula Birches and other words secretary it sends it via zodo xodo sign formerly ever sign There's the plate.
    18:37 Joe S: Which was is that the certificate or is that which one?
    18:39 Greg Williams: It's so you know how I said it obi sign is the thing they use it's not it's
    18:42 Joe S: yeah
    18:43 Greg Williams: called zodo sign. x sign
    18:46 Joe S: Exodia ok gotcha.
    18:50 Greg Williams: I don't know why they use that one. It's hard. I don't really care as long as I get see it and review it and before and sign it.
    18:58 Joe S: Yeah, yeah cool and that's all upgrade applications is it essentially that go
    18:59 Greg Williams: And and the key is somebody has said. Yes, so That's technicians right.
    19:08 Joe S: that way? Yep.
    19:13 Greg Williams: The the bar you've heard of the legal bar well. We've got legal bar.
    19:18 Joe S: Yes.
    19:20 Greg Williams: to get to professional member Mis
    19:24 Joe S: yeah
    19:25 Greg Williams: And it involves. the applicant who says I want to upgrade from I want to upgrade to Mis and and there's essentially two roots to get into Mis S3 actually, so the first one is the easy way which is you've done your technicians. So that you've got your technician certificate that says I know about the technical requirements of light and lighting. I've got to prove that I've got four years practical experience and professional experience.
    20:09 Greg Williams: and I've get three referees to agree that I've got professional experience and I'll submit some staff and one of them as a spreadsheet and There's a few more but some pieces that they have to put in there, so there's probably two or three documents that they need to submit. With that upload three statements need to come.
    20:34 Greg Williams: The referees need to be at least two Mis level people plus one who doesn't have to be an Mis but it has to be a kindergard in the industry.
    20:47 Joe S: So okay.
    20:49 Greg Williams: I managing director of affirm or somebody that's that's like president or somebody that's got enough. Professional experience to say yes these people know how to behave professionally in the industry.
    21:04 Joe S: So it's they can't be free msie plus level they have to be one really well
    21:08 Greg Williams: three mis's
    21:09 Joe S: known. Or two plus one really well known person.
    21:12 Greg Williams: What we find that or two black or minimum two are Mis is plus a ringing basically a lot of people have trouble getting mises to sign because there's not
    21:18 Joe S: right
    21:21 Greg Williams: that many around.
    21:23 Joe S: yeah
    21:25 Greg Williams: Okay and if you can't get those and if you can't get those or you can't prove
    21:25 Joe S: okay gotcha
    21:29 Greg Williams: the educational requirements have been met by having a tech is already already in your background. Or you haven't got the graduate diploma or something else then we say you have to go through an interview.
    21:47 Joe S: okay
    21:50 Greg Williams: And what we do is the chapter membership chair. Organizes the panel of people to sit in and basically I say have a cup of tea. It's it's about a speed date. You tell us about yourself. Don't lie now tell us about yourself because we're
    22:09 Joe S: yeah
    22:10 Greg Williams: asking questions and if we think that you don't know what you're talking about we won't pass you.
    22:15 Joe S: Yeah, so and there's a I'm guessing what like six people three people something
    22:16 Greg Williams: right
    22:20 Joe S: like that.
    22:21 Greg Williams: It's it's at least three. And and in effect. Because most of the time our applicants that go through that system go through it because they haven't got referees.
    22:39 Joe S: Yes.
    22:40 Greg Williams: I need minimum three referees.
    22:42 Joe S: yeah
    22:42 Greg Williams: So I need minimum three panelers panelists and they step in to being the effectively the referee.
    22:50 Joe S: Yeah, they're like an encore referee and that scenario.
    22:52 Greg Williams: Yeah, and that's just like well. You have to prove to me that you know what you're talking about salesfinder piece of paper so yes.
    22:58 Joe S: Yeah, and it's that they pay for that on top of their normal.
    23:04 Greg Williams: No, I've just said that they to get from technician to Mis cost the 180 dollars to $200 so slightly more than the technician.
    23:16 Joe S: Right and sorry, I was just covering there's no extra for the interview right.
    23:21 Greg Williams: now this not although that's a good idea, but I I'm trying to remove barriers to
    23:22 Joe S: okay
    23:26 Greg Williams: to upgrades rather than implement them so So if you've if you can genuinely prove to me that you know what you're talking about it would be stupid for me to charge you for an interview process as well.
    23:42 Joe S: yeah, yeah and
    23:43 Greg Williams: As I've already had you for the fact that you haven't got got the referees that was that was no fault of your own in the first place because there aren't none and your chat that.
    23:53 Joe S: Yeah, yeah understood and I think Jeff mentioned you. Can you can skip a step sometimes is that true?
    23:59 Greg Williams: Right, so if you haven't got the educational requirements as in you didn't do the diploma course. That you've spent 20 years in the industry and you actually know what you're talking about you can arrange to have a panel interview. Right which is by the panel interview is quite useful because it's like if I if
    24:18 Joe S: right, yeah
    24:21 Greg Williams: there's a gap in my application form, which well I haven't got that. I haven't got that but I know what I'm know what I'm talking about well. You prove it by giving going through the speed date.
    24:32 Joe S: yeah
    24:33 Greg Williams: And then the referees will sign you off in life will be good. Or not and then it won't make so we have people they have gramped being grumpy because we see them yeah, she don't quite know it talking about so go back and do some more so.
    24:48 Joe S: Yeah, gotcha, so was that for people going straight it was that the other route from technician to Mis or is this a way to skip a step?
    24:58 Greg Williams: It's the way to skip technician.
    25:00 Joe S: So associate to Mia yes is okay gotcha. So there was you said there was another
    25:02 Greg Williams: Yes.
    25:08 Joe S: route to go from technician to Mia's.
    25:11 Greg Williams: There's another route to be appointed as a member and it's basically to appeal to the board directly.
    25:17 Joe S: right right And how does that work?
    25:24 Greg Williams: Somebody writes a piece of paper and says I think this person is fantastic. They know what they're talking about. I've seen all of the evidentiary proof that they make the requirements of of the process, but they haven't quite gone through that processing we by the way we want to keep it the surprise because it's in the coming up and we want to make them. Give them a cheet up so board make the decision so ultimately the board can make a decision at any time to upgrade somebody to whatever level.
    25:53 Joe S: Cool and that would be usually kind of presumably under a corporate membership because they wouldn't be paying themselves. They'd already know.
    25:58 Greg Williams: Now it might not be covered by any membership it might just be it might just be a thing that they've all does so. It happens outside of a normal process is what I'm saying.
    26:09 Joe S: Right so with that fall under honorary.
    26:13 Greg Williams: It usually does fall under honorary yes.
    26:19 Joe S: There's like honorary member and lifetime member.
    26:19 Greg Williams: Yes, so honoury member is somebody that's worked. Alongside us and the industry or somebody wants to recognize as being really cool and and that can't be asking through the paperwork and doesn't even really want to apply so quite often we'll give those people an honorary membership. Yes, that's exactly right.
    26:43 Joe S: cool okay
    26:45 Greg Williams: But that's a quite mean the same as mris because it doesn't apply that they actually know they necessarily know all of what they're talking about.
    26:52 Joe S: so is that kind of I mean for whoever's looking is that identified in any way or
    27:00 Greg Williams: Different it has a different. Letters after your name that's called on Mis not.
    27:11 Joe S: Oh, I see yeah okay.
    27:13 Greg Williams: Not just my ears right.
    27:15 Joe S: Yeah, yeah okay, I think I got that so that's that rude and we've talked about skipping from associate directly to Mis so there's there's a couple more right.
    27:24 Greg Williams: right, so So there's more steps to get to member right, so they submit their form. They
    27:33 Greg Williams: get their referees. It's it's assuming that they've got all of the pieces of paper that they need all of their stuff has reviewed at the level.
    27:44 Joe S: yeah
    27:45 Greg Williams: By the membership coordinator and usually and usually and I'm encouraging and
    27:48 Joe S: Yep.
    27:51 Greg Williams: I'd like to see I membership panel so that it's not just one person that makes that decision. It's more than one person that makes it decision that chapter level because ultimately they're closest to the person.
    28:04 Joe S: Yeah, yes.
    28:04 Greg Williams: Then it goes to what I call international status and qualifications which is another committee. And they are the moderator between New South New South Wales and South Australia and oh my god Perth Western Australia they always give everybody recommendation no matter what so we've actually looked hard at them in New Zealand they do the same thing. Oh my god right so we moderating committee to say that they yes.
    28:33 Greg Williams: It's a second period of Eyes yes, they have actually done all of the steps I suppose to do. And and followed all the rules because quite often we'll see chapter shortcut.
    28:47 Joe S: Right, so you're saying the chapters give easy passes and then it goes to status qualifications who will review and more detail okay.
    28:53 Greg Williams: yeah, who will do actually is probably not in more detail but they'll just take a look at what's been done today and and And in the past will fail it and if they fail a lot of guys back to the chapter within they need to do more.
    29:09 Joe S: Okay, so they need to provide their own paperwork saying that they've reviewed properly basically.
    29:13 Greg Williams: Yep, yep.
    29:16 Joe S: cool
    29:17 Greg Williams: And then once it's got cleared that. Hurdle then. it goes to the board for For final approval that Mis and so all of this happens outside of the the board meetings or a lot of it now all of it happens outside of the board meetings this process just through use of zodo sign.
    29:44 Joe S: Yes, okay. So when it goes to the bottom final approval what goes to the board is the zodo?
    29:49 Greg Williams: It's a secular because it resolution that says this has been this has been through the New Zealand New Zealand committee or the Sydney committee has been through ice and Q here's the details if you want to do your own personal check and here's the form that says the same either approval don't approve and if it doesn't approve then it's problematic because it needs to be unanimous. And if it does approve then great.
    30:19 Joe S: yeah
    30:19 Greg Williams: We wait the next board meeting in the ball ratifies that decision so.
    30:24 Joe S: Cool, so it's kind of a log of what's happened who's reviewed it so far all the
    30:25 Greg Williams: and yeah
    30:27 Joe S: rest of his over to sign up does everyone on the board need to sign it off.
    30:31 Greg Williams: So the yes.
    30:33 Joe S: okay
    30:34 Greg Williams: Yes, the answer is yes, they do need to be unanimous decision by the board.
    30:39 Joe S: cool Cool right yep.
    30:41 Greg Williams: Okay if it if that happens if it goes to the board at the time of a board meeting then the board might decide not unanimously that that person is upgraded and when we've got a chance to be person the person discussing that stuff. then an onion decision is fine it happens outside of zodo sign and the board just issues it I see the minutes the Company Secretary informs Jeff and Anne But the board's upgraded this person and this is the date that that's effective.
    31:16 Joe S: Yeah, okay.
    31:18 Greg Williams: Okay and now the same process happens for fellow.
    31:24 Joe S: So that's technician. I mean I'm is is the same process as Mis to technician?
    31:29 Greg Williams: you
    31:30 Joe S: As sorry Mis to fellow.
    31:33 Greg Williams: Take the MIS as the same process as Mis to fellow.
    31:38 Joe S: cool
    31:39 Greg Williams: okay
    31:45 Joe S: gotcha
    31:48 Greg Williams: right and then outside of Associate tech Mis and fellow, we've got a separate qualification called registered lighting practitioner rlp. and that's basically we have got we've got not got any mandatory CBD point requirements for any of the any of the the four grades We've got a Rica board recommendation that Mis is in fellows, do at least 15
    32:20 Joe S: Yeah, yeah.
    32:24 Greg Williams: hours or points with of CPD per annum. Which isn't very much for rlp you must do 20 points per year. Or for 20 points every three years.
    32:36 Joe S: Oh I see. cool
    32:42 Greg Williams: you know
    32:45 Joe S: You're right.
    32:45 Greg Williams: yeah, yeah, somebody's talking about me in background and my ears are building but yeah
    32:55 Joe S: Cool all right so basically to be a registering practitioner you need to do these points.
    33:01 Greg Williams: yeah
    33:03 Joe S: And that I think screenshot, it's like an online course with its own certificate essentially to say that you've done.
    33:11 Greg Williams: it's it's the process to get to rlp is very similar to the process that you need to get to Mis From technician there are more requirements in terms of the documentation you need to provide instead of having three referees that sign off all your work and you don't need to nobody needs to see the work you actually have to submit.
    33:35 Greg Williams: three portfolio of three projects or five projects
    33:41 Joe S: Oh, I see so the spreadsheet from the other one isn't the same as submitting a portfolio. They're letting practitioner needs to submit actual projects.
    33:48 Greg Williams: Yeah, that's actual projects information. So this will be pictures and documents and all sorts of staff so I don't know how it could be quite thatch. that portfolio submission
    34:01 Joe S: gotcha cool
    34:02 Greg Williams: And that'll get reviewed by the chat there and then by the isnq and then go to the board and the board will say yep.
    34:10 Joe S: Yep.
    34:11 Greg Williams: okay
    34:13 Joe S: Yep, gotcha, so yep so say similar process basically.
    34:18 Greg Williams: Yeah, it is. It's just the evidence that the evidence required us more say yeah.
    34:18 Joe S: yeah Yes, and does this so Jeff measure that it sounded like it was not the same as a whole different membership. It was more like a kind of membership. Is that right?
    34:36 Greg Williams: well at the end of the you can only get rlp if you're already an EMIS
    34:36 Joe S: like
    34:41 Greg Williams: Or you're already if I yes right.
    34:41 Joe S: right, so there's Which is a fellows right?
    34:45 Greg Williams: yeah
    34:48 Joe S: cool so basically, it's a Plus two becoming and once you are an rlp. You are no longer an Mis who are only Anara
    34:58 Greg Williams: You know it's an additional qualification.
    35:01 Joe S: right, so it's
    35:02 Greg Williams: So it's more letters out. It's more letters after your name.
    35:05 Joe S: Right, that's what I was getting okay.
    35:06 Greg Williams: Mis arlp
    35:08 Joe S: Okay, so you're not changing your membership in any way you are adding a qualification essentially.
    35:14 Greg Williams: Yeah at the moment. We don't charge extra for rlps. I'd like to be able to do that. I'd like to be able to do that in the future, but Because these auditing requirements for rlp's every three years we say have you
    35:28 Joe S: Yes.
    35:30 Greg Williams: done your 60 hours if you haven't then you fall off.
    35:33 Joe S: yeah
    35:33 Greg Williams: it doesn't matter with your paid or not so
    35:35 Joe S: Yeah, so there's a lot of time involved in cool. Okay, understood all right, so
    35:37 Greg Williams: yeah
    35:42 Joe S: we've got that and then is there there's a level above fellow isn't there.
    35:48 Greg Williams: Well, there is it's called life fellow.
    35:52 Joe S: okay, yeah
    35:53 Greg Williams: Free membership free free they have to pay for it right. There's no hot there's
    35:55 Joe S: yeah Yes.
    35:58 Greg Williams: no higher than fellow.
    36:00 Joe S: Okay, so you that's manual Lyme there's no real process for that.
    36:01 Greg Williams: yeah Yeah, it's many. It's as basically the chapters apply or the chapters or the board a chapter supply to the board or the board says this person has been really good at retired usually we wait till they retire because if they're not retired then they can afford to pay them membership. So why would we give them a free life free membership right so
    36:25 Joe S: Gotcha yes okay, and then there's there's a few.
    36:29 Greg Williams: In my approach, it's like if you've got money. I'm gonna have it. Thank you.
    36:34 Joe S: I think given what you're providing and also how many volunteers and stuff for involved it is kind of hard to run this I think for sure cool all right, so are
    36:42 Greg Williams: yeah
    36:45 Joe S: there any other like there's education membership types like there's a lifetime membership be kind of covered that under honorary membership results something else again.
    36:54 Greg Williams: There's a life member. So we have lifetime membership for member and there's one more actually one more membership called retired. and and they might be retired memberships retired fellows retired Associates
    37:04 Joe S: Yep, yep.
    37:13 Greg Williams: Retired technicians, but we didn't want to give them membership. We didn't want
    37:13 Joe S: Yep.
    37:17 Greg Williams: to give him a life membership. So we said well. You can only have to pay $100.
    37:22 Joe S: So they get a discount it's essentially a discount so it's no moment.
    37:23 Greg Williams: Again, that's the retirement discount. Yes.
    37:28 Joe S: Okay cool all right and then so what's the difference between sorry if I'm repeating things we've already talked about but once the difference between a
    37:35 Greg Williams: an essence nothing
    37:38 Joe S: lifetime membership and a honorary membership. okay
    37:49 Greg Williams: They they have the same financial kickbacks. And it a life and honorary member. May not necessarily know as much about light and lighting.
    38:05 Joe S: right
    38:06 Greg Williams: Because they haven't necessarily they haven't an honorary member.
    38:06 Joe S: But the process they go through is.
    38:11 Greg Williams: Can be arbitrarily appointed they don't have to be from within the industry at
    38:11 Joe S: always Yep.
    38:16 Greg Williams: all.
    38:18 Joe S: Yep.
    38:19 Greg Williams: So there's no there's no minimum. There's no evidence basis required necessarily
    38:20 Joe S: I say
    38:24 Greg Williams: other than somebody says I think it would be a good idea to give this person a number of remembership. And they might write along letter y they might not that might come down to three board members or actually six board members know this person and I think it would be a beneficial advantage that the Society to have them as non remember. Thank you very much.
    38:45 Joe S: yeah Yeah, okay, I think I understand now so basically differences that a lifetime member has gone through the normal process and then been upgraded to a lifetime member.
    38:56 Greg Williams: yeah
    38:56 Joe S: they have still submitted all that documentation although it's
    38:58 Greg Williams: Yeah, so that means like it. It means I get a bit more respect in terms of they
    39:01 Joe S: okay
    39:04 Greg Williams: actually know what they're talking about and honor remember is that it's nice. Well done, you've obviously helped us somewhere in the past. That's good.
    39:12 Joe S: Yeah, have this okay cool cool so that seems like that's perspective pretty much
    39:14 Greg Williams: yeah
    39:20 Joe S: the whole structure. Is that right or is there?
    39:23 Greg Williams: Yeah anything yeah, I don't think there's much else. CPD at the moment our website has a spot where you can intercpd into it it goes
    39:31 Joe S: Yes.
    39:36 Greg Williams: into the black hole and nobody can pull it pull that information out. Not even web force 5 can pull that information out. Yeah.
    39:43 Joe S: Oh really. okay
    39:46 Greg Williams: Just like what did you have this field? If you can't report on it?
    39:49 Joe S: Yeah okay, yeah, that is right. So, what do they do they're supposed to upload a certificate or how many hours they've done just as a number or what is it that they are currently do.
    39:58 Greg Williams: And it will be it will be ready magazine for an hour an hour. There's a multiplier attached of these if they're if I was preparing a presentation. There's multiplier of two or five to that to that number of hours. So it's hours times the multiplier equals the CPD points.
    40:17 Joe S: And those points come from a separate website right they you can prove that they did it in theory. I'd give at the moment you can't.
    40:24 Greg Williams: No, we are absolutely relying on the honesty of the people.
    40:28 Joe S: Okay, would you like to be or is there a way to fix that?
    40:36 Greg Williams: Would I like to here to be potentially? about I think but I'm a little bit hamstrung because you know people like the
    40:41 Joe S: Because it's it.
    40:45 Greg Williams: Architects and things have are approved CBD point we're just as and holders and that sort of thing and they give you a little certificate says this is an approve CBD Event and you can have one CBD or once ceu or whatever the number whatever the thing is it's like well. That's nice. But I have no way of proving. I don't want to have to pay. More than more than I've already paid to get that CPD point right.
    41:16 Joe S: totally yeah So so that you let people just say it.
    41:19 Greg Williams: So all of these other places charge for their CPD points and I don't want to pay so.
    41:26 Joe S: So you would prefer to be able to upload essentially proof proof that you did it without having to actually pay for them to prove that you did it is that right.
    41:33 Greg Williams: Yeah, yeah.
    41:36 Joe S: so you want to
    41:37 Greg Williams: But just being put a PDF in or something like that.
    41:41 Joe S: Yes. Daniel okay, which means that we'll probably have to say manual unless you kind
    41:49 Greg Williams: yeah
    41:49 Joe S: of figure out how to do both like allow for manual process, but people can automatically do it, but it seems like this could get very complicated if we try and do both.
    41:58 Greg Williams: It could get really really complicated and ultimately what is it for well for a member? These no requirements so I'm not going to go and order the member. Right for an rlp there's an audit requirements, so yes our lord at them and I and so we might want to report on rlps. To say what CBD points have you done and have you provided in the evidence we
    42:18 Joe S: yeah
    42:22 Greg Williams: can print that all out if we need to.
    42:25 Joe S: Yes, and they will be providing that at the time but you were saying that they have to kind of prove it every so often on top of that.
    42:30 Greg Williams: Yeah, well at the moment. We ordered it by saying you give me your CPD point for summary and if you've got some proof that you've actually done this stuff as well. That would be nice. Thank you because we are voluntary organisation and we
    42:44 Joe S: yeah
    42:49 Greg Williams: don't like hang out secretary to do very much so
    42:49 Joe S: yeah Okay, I so basically the short version is will probably stay manual because it would be not worth changing it and guessing yeah, yeah.
    43:01 Greg Williams: hi Did that right but but having having the ability to? Record your CBD points online as and when you do them is a useful tool that I would like to see us have.
    43:20 Joe S: yes, I was going to Kind of about might have been Jeff about basically this idea that you have this ongoing update to your membership. So there's the idea that the portal kind of becomes more of a ongoing thing that I want and done or whenever you want to change something. Like big yeah, does that track with what you'll kind of thinking? Have I lost you?
    43:48 Greg Williams: Spot onto my phone how cooler?
    43:48 Joe S: and That's okay.
    44:28 Greg Williams: I'm back.
    44:30 Joe S: Hi, I've got your voice but pictures of frozen.
    44:35 Greg Williams: okay
    44:37 Joe S: Oh, yeah, they are gotcha. cool So what I said before is.
    44:44 Greg Williams: Yeah, I'm looking hospital project offices at the moment and so these dodgy because I'm using somebody else's wi-fi, but yes.
    44:52 Joe S: Oh, I see, I was wondering there's a very interesting looking band of screens behind you that looked like they're doing something important.
    45:03 Joe S: Not be frozen again. Hello.
    45:21 Greg Williams: back again
    45:23 Joe S: This is back again cool.
    45:24 Greg Williams: As back again yeah, yeah those were like those panels behind me so yeah.
    45:31 Joe S: Maybe good time to wrap up if that is pretty much the full picture.
    45:36 Greg Williams: I'm membership Yes, probably it is let's say a good start.
    45:45 Joe S: is the Yeah, yeah totally. I don't like do you want to real quick go through like any major Pain points that you have or any major like things that we haven't talked about yet that you'd like to kind of see in this next version.
    46:00 Greg Williams: So at the moment our reporting is problematic. I can't tell. when people joined who joined who didn't join I'd you know the reporting that I've got out of [monday.com](http://monday.com/) and Jeff will have shown you that as fantastic because it gives you splits by chapter and and
    46:18 Joe S: Yes.
    46:23 Greg Williams: Grade and all that sort of good stuff. Who's paid who's not you remember? Who is a member actually. He's a bit of a process around setting the fees every year. There's a bit of a process around annual reporting. I'd like to be able to get a graph of our membership. As it stood last year as it stood the year before as it stood the year before that.
    46:51 Greg Williams: Back in history has been total number and total number by type by grade and by
    46:51 Joe S: has in total number or or just
    46:57 Greg Williams: chapter and you know all of the things that Jeff can report on now. I'd like to be able to say as of the 31st of Of June 2024 this was what that looked like and and the same for 31st of June 2025, this is what it looked like at the moment website.
    47:14 Joe S: yeah
    47:18 Greg Williams: reports based on today
    47:21 Joe S: Yeah, there's no back. There's no history. Yeah.
    47:23 Greg Williams: There's no back. And and it's you know I've attempted to write some when you go to the website. You'll see Greg's attempts at writing membership reports saved in there so
    47:37 Joe S: Oh, is that yeah okay? Yeah?
    47:39 Greg Williams: And it's like I tried to yeah has they have they joined by the state? Yes have they ceased to be a member by that date? No, then they must still be a member.
    47:50 Joe S: yeah I mean yeah, yeah, so what we say that you know there's like you have to know who was amendment because they have a choice when they decide if they want to be a member again of paying the different sorting again and even if they start again you want to still know that they were a member.
    48:06 Greg Williams: That's yeah. Yeah, that's right too. So they do forget to pay their membership fees or we don't send them an invoice or we send them an invoice but they've moved emails so it doesn't get to them. And that's that's still our fault believe it or not apparently.
    48:22 Joe S: Yeah, yeah.
    48:27 Greg Williams: Despite there responsible for keeping their membership emails up to date.
    48:32 Joe S: Yes, yes, I've had that emails get reused by chapters and things.
    48:37 Greg Williams: And and holy crap. It's hard work and so that's that is a bit of a challenge then keeping their their information up to date as always to challenge. So the reporting is important to me specially annual report time because I then
    48:56 Greg Williams: they don't have to fabric. It's been the hours fabricating graphs.
    49:01 Joe S: yeah
    49:05 Greg Williams: And yes the other stuff that you've heard about is still there as pain points too so yep ultimately the ability to freeform. And invoice for renewal of past years as important to us right so people can
    49:21 Greg Williams: hang on to the membership because they actually carries a bit of weight if you're trying to upgrade to a fellowship to a fellow or how long have you been a member for one year but I was a member for three years, but you didn't but I didn't pay my bill. Well, actually, are you weren't because you didn't pay your bill say I can pay
    49:39 Joe S: yeah
    49:40 Greg Williams: my bill and catch up and then I could we count it so.
    49:44 Joe S: Yes, so this is where the history comes in right because at least you would know that at one point they were you could kind of figure out. How long they were and
    49:49 Greg Williams: yeah yeah
    49:52 Joe S: even if they go back to the beginning it could be like all the few play your intervening is you could be again kind of thing.
    49:58 Greg Williams: That's that.
    49:58 Joe S: yeah
    50:00 Greg Williams: So yeah, there's there's wrinkles to that and there's work around that we can do man nearly for that too, but it's painful so.
    50:08 Joe S: Yeah timelines right that's out yeah. I was talking about basically having like a ledger based database or history for everything because that would be that you can roll back and see. What things were which will yeah greatly help with things like reporting as
    50:26 Greg Williams: yeah
    50:26 Joe S: well?
    50:27 Greg Williams: yeah
    50:30 Joe S: Yes cool.
    50:32 Greg Williams: Yeah, certainly using the current we we've disabled it now but in the past the Australians were able to go to the website. Press the button which which created a foe invoice. What not linked to zero that's which is why it was a fire invoice it didn't have a specific invoice number. I don't think.
    50:56 Joe S: all right
    50:57 Greg Williams: You know we this page had a GST number on it, so it was an invoice.
    51:03 Joe S: yeah
    51:04 Greg Williams: It says and and please put this into your bank account details when you transfer the money to us. And and it was a study as fact so.
    51:14 Joe S: Yeah, it sounds like a nightmare because I just be like I paid it and you were like I have no way of knowing that.
    51:19 Greg Williams: yeah, that's it and so that caused grief so that's where the link to 0 is important that automated payment system through Zeros fantastic, so
    51:28 Joe S: Yeah, so you don't so currently you don't do bank transfer. You do do bank transfer, but you zero to get people to put the data in.
    51:38 Greg Williams: Um they can do a bank transfer and I think it's I think they can use like a PayPal or something like that which can do bank transfers. Yeah, it's certainly New Zealand we use PayPal and Australia they use something
    51:51 Joe S: Oh, yeah.
    51:57 Greg Williams: different not sure about that one when you catch up with Stephen Collard when he's back from holiday. You get a bit about actually it's Jeff that knows it's not Stephen that knows
    52:04 Joe S: yeah
    52:08 Greg Williams: so.
    52:10 Joe S: Maybe I should ask this to Jeff as I just okay, so the reason I was asking about that is mentioned that the strike fees are basically pretty honorous, but what stripe does do really well is make sure people have paid what they're supposed to pay on time for the rest of it their credit card hasn't expired all of these things that are kind of important for like managing lots of subscriptions. It's kind of built in.
    52:33 Greg Williams: Yeah, yeah.
    52:34 Joe S: Whereas yeah banking transfer?
    52:36 Greg Williams: We don't use the subscription feature of stripe.
    52:39 Joe S: No, yeah, I know that I'm just wondering.
    52:41 Greg Williams: but which is stupid available for us so If we get a paper something we might as well get it right so all we stop paying
    52:46 Joe S: yeah yeah
    52:51 Greg Williams: for it and use something about simpler but it can still handle Australian dollars saying.
    52:56 Joe S: It seems like so zero is the source of truth but having a membership like having a subscription system like a proper subscription system would solve quite a few of these pain points because you wouldn't be wondering quite so much but then
    53:05 Greg Williams: yeah
    53:08 Joe S: bank transfers still being manual could be an issue. At least it would be a smaller issue than I suppose.
    53:14 Greg Williams: Yeah, that's right, so we have looked at a system called members mmbes.
    53:21 Joe S: yeah
    53:23 Greg Williams: Software as a service thing which does a lot of the stuff that I can see that membership we would want.
    53:30 Joe S: yeah
    53:30 Greg Williams: And then ppak said yeah, but hang on a minute. We've just gonna get Joe to do some some briefing first and so I'm really opened to whatever right but if the answer is a a combination of what members can do and what a website front end needs to do plus zero then that's fine. That's just comes down to what's the what's the least cost for the best outcome.
    53:56 Greg Williams: say
    53:57 Joe S: Totally yeah, it's kind of made a yeah the problem with the all-in-one Solutions is they tend to first of all lucky when and then they'll do everything kind of badly so if you like. Oh, we need to make this you know process slightly different they're just like no we cannot do that. You've both a whole system
    54:15 Greg Williams: Yeah, now you go away all the highway. That's it right so they
    54:16 Joe S: now. Yeah, yeah, even things like hubspot are like that.
    54:22 Greg Williams: yeah, so maybe there's a bit of investigation that I'll ask you to have a look at in terms of members as well, but
    54:33 Joe S: Happy to yeah, yes, yeah. I think that all. It's a lot to digest but I it all makes sense. I don't think there's anything that I'm unclear on.
    54:43 Greg Williams: okay cool awesome
    54:46 Joe S: Cool, thanks so much for your time. Sorry to take up so much of it.
    54:47 Greg Williams: all right That's okay, it's I'm sorry I was like so thank you for putting it with me being
    54:51 Joe S: That's okay.
    54:53 Greg Williams: like to say.
    54:55 Joe S: That's okay. Talk to you soon, hopefully.
    54:57 Greg Williams: all right, bye
    54:58 Joe S: Cheers ate.
    

## Tiina (Standards)

- Notes
    - Technical standards director
        - More about whats happening in the standards atm
        - Is sent events from the chapters, local events
            - Currently mostly emails
        - Would be nice to have a front page presence
            - Boost bulletins to front page?
        - 
    - Luchka will be running training side
    - Talk to Deepak about who runs which socials and what they are using it for
    - Secretariat manages the website
    - Intranet eventually?
        - Messages
        - Micro services (vercel style) for different tools?
    - Chapters came first
        - Everyone wants better communication
        - Using linkedin etc because website isnt working
            - https://www.linkedin.com/company/iesanz---the-lighting-society/?originalSubdomain=au
            - https://www.facebook.com/iesthelightingsociety
            - 
    - Member hub
        - Calendar
            - Easy to find events
            - 
        - News section
            - Bulletin board?
                - Channels?
                    - public
                    - members
                    - per chapter
                    - etc
        - Communication tools
            - Surveys (aggregate forms)
            - Individual forms
        - Training sessions (/knowledgebase?)
            - How standards work
            - Expressions of interest / managing bookings
        - General improvements
            - Custom forms?
            - More automation
                - 
    - Awards
        - Publicity
        - Tickets?
            - Eventbrite has been approved
            - used in WA a lot
            - not sure about elsewhere?
    
    - Membership
        - Calendar
    
    - Bit of a mess (eg links not working, calendar doesnt do much, etc)
- Transcript
    
    # PXL x IESANZ - Stakeholder Scope Meeting Schedule (Tiina Ratamo)
    
    Meeting started: 16/10/2025, 11:58:52
    Duration: 40 minutes
    Participants: Joe S, Tiina
    
    [View original transcript](https://app.tactiq.io/api/2/u/m/r/QOLjfd4TZlFNgTu4jHVp?o=txt)
    
    ```
    ## Highlights
    
    > 14:36 Joe S: seem very important in a way that if it started from the central organization.
    
    ```
    
    > 15:40 Joe S: Okay, that's really good tonight.
    20:46 Joe S: Yeah, it could be for some degree a good like we look to replace it at least for the subset of people who want to use the website and the goal of course is to
    23:16 Tiina: Yes, so having a platform through the talking about having squares and whatever and urban prices being. Sort of the main thing at the moment for our side. From just looking at all the other ones his miracles. Tickets now on sale whether they sell their tickets. Yeah, looks like they. they must be some sort of ticketing system out of
    24:59 Tiina: hmm I suspected isn't. and on on deep export version it's just a It doesn't even have a link ticket sales. Are you tell the link to get sales? I think that goes to an email so I'll leave that to him found out and so we're a
    26:06 Tiina: So this one just makes it more complex and I don't care what it's ticket or
    > 
    
    ## Transcript
    
    00:00 Joe S: Hello. Can you hear me? How's it going?
    00:05 Tiina: Hello ivy you open my corporate computer and it doesn't work on teams.
    00:06 Joe S: go I know.
    00:14 Tiina: So normal my iPad yeah, we're on Google mates to show.
    00:16 Joe S: All good. Yeah, we're on Google meets the show sorry I've got an echo.
    00:23 Tiina: okay
    00:25 Joe S: Hello, yeah, that's better. Yeah on Google meet so it should work on anything
    00:25 Tiina: Now he yes, I can hear.
    00:30 Joe S: with the browsing but
    00:31 Tiina: Yeah, yeah, yes no.
    00:32 Joe S: good most place Cool, so do you know kind of what this is about? Where should I start?
    00:43 Tiina: We're fairly close to the start. I know it's work with page and that's about it. Or web.
    00:49 Joe S: Kill all good yeah, so I am I'm Joe I see you. I'm the project manager for this
    00:50 Tiina: it's
    00:56 Joe S: upcoming web rebuild. I'll just be doing essentially the up to the tendering process of this stage, but what I'm doing is going through literally everything that even remotely touches the website. And making sure that you know everything's written like god of source of Truth essentially that everything that will need to be carried forward in some way is in here somewhere. It's logged away and then on top of that also figuring out.
    01:28 Joe S: What works what doesn't work what everyone would like to do and where we'd like to go with it so far. I've talked to Andrew Greg and Jeffrey from haddon's 360
    01:40 Tiina: mm-hmm
    01:40 Joe S: and I've got a pretty good idea of the membership system. I've got the general. I dare, how everything works at one day calm. zero and yeah how the general flow of like the membership upgrades and all of that stuff so that Had a super high level is kind of where I've got to so yeah, I suppose would you
    02:05 Tiina: yeah
    02:11 Joe S: mind introducing they're like what you do in Context of all of this and where
    02:15 Tiina: okay
    02:18 Joe S: this maybe you should go.
    02:19 Tiina: I am technical comes standards director. So, I'm looking at we have represented Jesus standards. So for my point of it would be more about saying what's going on having like a this is happening in the standards at the moment or whether I could also.
    02:40 Joe S: yeah
    02:44 Tiina: It would be really good if I could actually ask people's but to surveys.
    02:50 Joe S: yeah
    02:50 Tiina: So this is happening. What's your opinion and get an answer for we tried that on survey monkey, but because we had only had a free license to there were more questions more answers that we could actually look at services. Not very timely, so that's sort of thing so if we can ask.
    03:07 Joe S: Yeah, yeah.
    03:14 Tiina: have almost like a SharePoint this is this month's or this is what's happened standard is looking for XYZ
    03:27 Joe S: So this is almost like a research tool built into the website right where you're kind of using it to engage the temperature of different topics right.
    03:36 Tiina: That's one thing on the other thing is also being able to. Um so say like standards was looking for new blood. It's almost like a discussion forum.
    03:50 Joe S: Yep.
    03:52 Tiina: There was a section which is off for now for people. to be trained on how to do standards like a Next Generation Young people to be how to deal with standards and what standard is all about. And they were actually paying for the guys to go to Sydney for a couple weeks or
    04:09 Joe S: yeah
    04:13 Tiina: whatever so I could have put that into like a news this is. And respond here if you want to or respond straight with all alternatives respond straight to do Express all interest. Ideally, I would be a funnel so I know who's going.
    04:29 Joe S: yeah yeah so wait, sorry those would be classes the house standards work would be more like a class session scenario than a knowledge based on the website itself
    04:39 Tiina: oh Yes in the same as when I have to do expression of interest because we have
    04:45 Joe S: okay
    04:50 Tiina: representatives or different. different standards committees
    04:56 Joe S: yeah
    04:56 Tiina: And somebody leaves so I need to get a replacement so I need to send out expression of interest.
    05:03 Joe S: Yep.
    05:04 Tiina: Rather than doing that by email and then trying to figure out who's answered, what way?
    05:10 Joe S: Yeah, yeah totally. So we've got I saw the existing website has custom forms, but I'm guessing they're not used for this at the moment.
    05:20 Tiina: No, they're not useful that and that's the other thing the custom forms if we
    05:22 Joe S: okay
    05:24 Tiina: could actually make themselves so that the xcr. The slightly more slightly better and curating the information then what they are at the moment.
    05:34 Joe S: yeah
    05:35 Tiina: But this is more worth. It's it's almost like a I know what would be cool and like an Intex type thing that you then get the information back.
    05:48 Joe S: In aggregate or individual so with this be like you have a way to review every expression of interest or in the context of the surveys.
    05:57 Tiina: yeah four for the Two surveys will guess I would definitely want it as aggregate. And to pull each survey the same on the form, so if there was a I would expression of interest to standards committee. XYZ then I will get a answers for extends committee xyz.
    06:22 Joe S: yeah Okay, so we've got three three. I think main topics here. We've got research tools. I surveys so kind of reaching out to your membership and using them as a
    06:32 Tiina: mmm
    06:36 Joe S: way to. I guess almost right papers at the highest level but I guess it allows level. It'll be just kind of a bulletin going hey. This is a topic of like a hot Topic in the
    06:50 Tiina: Yeah, get little opinions, put it that way.
    06:51 Joe S: And yeah okay. Yes, yeah, Gathering opinions so with community and the discussion forum. I think the challenge that generate gets turned into there is moderation and I
    07:04 Tiina: Yes.
    07:05 Joe S: know that you're a volunteer organization and not many people are. Making it making bank of the situations, so would that would be something to consider if you're going to run a forum. Do you have any thoughts on that?
    07:23 Tiina: Moderation to be I was more. I'm trying to hit because it's engine Australia runs a sort of. Volunteer forum on a topic or whatever and I'm assuming somebody moderated but
    07:35 Joe S: yeah
    07:37 Tiina: how we would moderate it would be. Apart from having being able to ask a specific question at specific time.
    07:47 Joe S: yeah I think it would be.
    07:50 Tiina: I suppose it also.
    07:53 Joe S: What I'm thinking here is it's like a channel between you and your members directly makes a lot of sense a channel for members to talk to each other would
    07:59 Tiina: Yes.
    08:03 Joe S: require a lot of immigration.
    08:03 Tiina: No, yeah, no not for each other. Yes.
    08:07 Joe S: Yes. okay
    08:08 Tiina: not to each other they if they're good to each other that's outside the realms of what we can probably deal with
    08:17 Joe S: Yeah, yeah okay, so to me. I guess to me a forum was a forum where everyone's talking around to each other so this would be more of a membership hub with a
    08:23 Tiina: mmm Yes.
    08:28 Joe S: contact form kind of scenario.
    08:31 Tiina: mmm
    08:35 Joe S: cool so Communication would take perform over surveys. and forms essentially
    08:51 Tiina: It could be it even the request or interest can be a survey survey of Interest it's probably. Probably can be the same sort of thing as long as that you could put individual questions in there.
    09:03 Joe S: yeah Yeah, I'm like I'm thinking at the highest level this is like whether you have you have custom forms and they can be viewed or reported on in aggregate or viewed individually so that would capture a lot of this. Um and in the terms of like the structure of how it would work and then the
    09:27 Tiina: Yes.
    09:27 Joe S: actual practical application is like maybe there's a section where you sign up for training session within your membership hub and the tool from your end looks
    09:34 Tiina: good that's
    09:35 Joe S: like that form's been used.
    09:38 Tiina: Yeah, because that's then that's goes to luchkestone as well because she's gonna have lots of training. seating world with the training side
    09:47 Joe S: Yes, yeah.
    09:48 Tiina: To maybe see my end up having something similar as well, but leave that to her. Because we have different training we have driven training providers but for my
    09:56 Joe S: yeah
    09:59 Tiina: sight. It's probably fairly simple of having that side but also then. I'm assuming everybody wants some sort of News section that we can actually tell what's going on.
    10:14 Joe S: So remember have would be yeah new section. To like basically broken up into I guess there'd be like two or three. There'd be like your knowledge base section would be static a lot more or less static and maybe they get more or less. Content based on their membership level depending on what you want to do there and then there's communication with you. And then there would be a news feed from the sounds of it. So those are pretty good high level.
    10:51 Joe S: Oh yeah, and then you section presumably would be whether or not it's broken down by say chapter.
    10:58 Tiina: Oh, they should we put my bits not broken down by chapters work as such but because we do have chapters of the chapters would have news.
    11:05 Joe S: Yep.
    11:09 Tiina: Like I'm trying to figure out when the wa lighting Awards is on.
    11:14 Joe S: Yep.
    11:15 Tiina: I could have identified it at the moment.
    11:19 Joe S: Oh yes, yeah. I've been talking that yeah defects that he's like I can't use the system. Yeah, it sounds a good complicated. I haven't really got access to the membership. I can only see the adminaria from the other end, but yeah it does
    11:33 Tiina: yeah
    11:34 Joe S: look. pretty complicated
    11:37 Tiina: It is it's also a lot of paper for type form. It's just been Putting their paper form and even the when somebody applies for something like
    11:45 Joe S: yeah
    11:50 Tiina: membership applications.
    11:52 Joe S: Yes, yeah. Yeah and it's all kind of done by hand at the moment right.
    11:57 Tiina: yeah so the basic
    11:59 Joe S: I say yeah. So a lot of the member hub stuff is currently done by hand like manually updating the website.
    12:08 Tiina: Yeah, yes.
    12:10 Joe S: yeah So that's something we presumably would like to automate.
    12:16 Tiina: Yes, we would.
    12:18 Joe S: So at the moment say if you do a bulletin do you select for example which specific users it goes to or is it not even that advance like it. Just goes to everyone.
    12:28 Tiina: It's not even that just think. Like they had a membership everybody and it does say what state you are from. So that it's basically the Excel sheet.
    12:38 Joe S: yeah Yes, and then you put that into your emails send list or whatever it is.
    12:42 Tiina: and You yeah, yes.
    12:48 Joe S: Okay, let's see yeah okay. I do have a question then okay, so if we are to automate this more say if you're like going okay and you user would probably want that's called them channels. They would get general bulletins. I bulletins that go to everyone and they might have a channel for their chapter for example like New South Wales I don't know how much. Complicated maybe there's like a new like maybe there's a general fellowship channel or something like that.
    13:19 Tiina: No, not really. It's just it's just every stage but we used to.
    13:20 Joe S: if
    13:24 Tiina: we used to be just state-based so every state operated on it on their own and then they just had it like a
    13:30 Joe S: Yes, right.
    13:34 Tiina: bigger they still had a board but There was no central there's anything.
    13:41 Joe S: Yeah, so it's kind of grown organically from there.
    13:41 Tiina: So a lot of the chapters still yeah, it was like crumbly in the late 90s.
    13:46 Joe S: yeah Okay, so it's fed around a little.
    13:51 Tiina: They became in actually. Yeah. Oh, no, it's been around since. I know if I say 30 so. What should somebody should know but I don't have a lot it, but 90s that 90s it was already a very well established organization, but it ran every state had their own. Treasury and they rent separately.
    14:17 Joe S: I see okay.
    14:17 Tiina: But then they be but then they became they actually got became an organization national organization and low-space. And that's when we started heading centralised stuff.
    14:30 Joe S: Yeah, okay this explains the the chapter first. I was going okay these chapters
    14:31 Tiina: luckily just
    14:36 Joe S: seem very important in a way that if it started from the central organization.
    14:38 Tiina: Yes.
    14:40 Joe S: They may be wouldn't be so it makes sense that it went the other way.
    14:43 Tiina: Yes, it went when the other way, yes.
    14:47 Joe S: That's actually a really good insight okay. So is there still a struggle trying to get all the chapters to use to work the same way in terms of the website and everything or is it more or less fine now?
    15:01 Tiina: this was gonna say I think we adequate time has gone that the Previous or previous or the previous generation from that who were fighting against decentral. Have now so the people are now looking for help. They're still better about the fact that when they get profit. They have to give
    15:21 Joe S: right, so
    15:24 Tiina: some of the profit and somebody else might use it but
    15:29 Joe S: Yeah, okay, I get that but mostly it's it's kind of going okay the central organization exist for a reason and we can rely on it to do certain things and they're actually okay with it.
    15:38 Tiina: Yes.
    15:40 Joe S: Okay, that's really good tonight.
    15:40 Tiina: Yes. And if they can get help and that everybody's asking for. like better communication
    15:54 Joe S: Yes.
    15:54 Tiina: and better having information on the they're now working on LinkedIn and Also celebrated because they sort of just decided that there wasn't enough.
    16:10 Joe S: Like the website, it's not working very well.
    16:12 Tiina: Yeah, yes.
    16:14 Joe S: I wouldn't be possible to find out what everyone's doing in places like LinkedIn or even contact the chapters and Aggregate
    16:21 Tiina: Well, if you go go to LinkedIn and do a oh yes anz. And I know the wa has a their own page.
    16:33 Joe S: yeah So, this is what they're using for let's say like the posting on there in a way that they're not posting on the website like they're putting events on their
    16:44 Tiina: Yes.
    16:46 Joe S: things like that.
    16:46 Tiina: Yes.
    16:51 Joe S: Cool, that's where three searching because presumably if these things could exist on the website there would be less of a reason to use LinkedIn for everything.
    17:00 Tiina: and we and if the website it's not really a website, but it's just Because we do have or histor 360 and just finding. I'm even trying to open up with my other one at the moment. I yes, but the It doesn't really help, but yeah, it would if there was stuff that we can then. Or link the LinkedIn post of the Japanese looks the same and feels the same and all sort of having information for that.
    17:41 Joe S: Yeah, yeah, there is yeah, so it gets posted on a lot so happy to look at it's a lot of repeat posts.
    17:48 Tiina: Yes.
    17:50 Joe S: Presumably, that's just to keep bumping it to the top. But yeah okay, that's good to know so some sort of a feed hey like in bulletin
    18:01 Tiina: mmm
    18:02 Joe S: board kind of a fee system would be. Worth looking into okay. Cool. That's really good to know.
    18:11 Tiina: on Instagram
    18:15 Joe S: yeah so there's sort of there also posting these things on Instagram
    18:24 Tiina: States have them as well.
    18:30 Joe S: Is there a way to get? I guess what I'd be looking into is whether it's possible to find out from them. And what their pain points are and what they want in terms of running these feeds some of a lot more active than others and guessing.
    18:51 Tiina: Yeah, um yes, I know was Anthony Russo which name I continued. He's our marketing one, but he's I'm assuming he's been working with Deepak as well. But he's I know that he does the all the flyers and stuff like that and put similar to Instagram and whatever which is looking at introcam. They haven't been very. very Organised but looks like the last last but posted they've done was Christmas like a year ago.
    19:32 Tiina: so
    19:32 Joe S: Yeah, usually depends on where people's focuses. Yeah, you're looking at the yeah.
    19:35 Tiina: they might have stopped that but oh, yes, wa
    19:41 Joe S: yeah
    19:42 Tiina: Yeah, so I think they might have decided that the Instagram didn't do that much for them, but LinkedIn is they actually following how many followers we get and all that sort of stuff? Dylan Phillips who it's DWA president he's very much into LinkedIn
    20:01 Joe S: Cool, so do you have a social media manager?
    20:07 Tiina: I don't think so if it eats. It'll be debug.
    20:08 Joe S: okay Right, yeah, so yeah, there's no one who's job it is to just update all of these different places.
    20:21 Tiina: this yeah, that's the different places get done by their own somebody's local
    20:32 Joe S: Yeah, yeah. So, I don't think the website probably would include tools for posting to all these different social platforms, but it could be.
    20:44 Tiina: no
    20:46 Joe S: Yeah, it could be for some degree a good like we look to replace it at least for the subset of people who want to use the website and the goal of course is to
    20:58 Joe S: make the website nice to use so more people use it. Cool that makes sense okay, so that's we've covered the member hub and we've covered the social media.
    21:09 Tiina: Yes.
    21:12 Joe S: Is there yeah?
    21:12 Tiina: That's probably. I say just as a general user it just finding things and finding. But Awards are one of the big ones that we have every year. So having publicity for them.
    21:39 Joe S: yeah And it would be nice to be able to buy tickets.
    21:48 Tiina: Yes, we after lots of fighting have managed to get event right now approved.
    21:56 Joe S: eventbrite is that
    21:57 Tiina: Yeah, yes.
    22:00 Joe S: So your currently just sending people a link to that when they sign up.
    22:06 Tiina: said yes, oh at the moment, it's goes through the LinkedIn posts or or this one thing I'm trying to find out one way the when the Opera when the Event actually is in state. I found all the a funnel the entrance.
    22:31 Joe S: As this is this. Sorry, I'm just trying to I've just had a look at event right. So is this being used for all the award ceremonies or is it just being used for some of?
    22:44 Tiina: I don't know we use it in wa a lot. Some people sell tickets. I don't know what this is may not knowing whether people still just in tickets or whether they use some other one. I've seen a New Zealand New Zealand ad well, they award sing.
    23:10 Joe S: Oh, yes, I can talk to Deepak about that about what they're using to manage
    23:13 Tiina: yeah
    23:14 Joe S: their tickets.
    23:16 Tiina: Yes, so having a platform through the talking about having squares and whatever and urban prices being. Sort of the main thing at the moment for our side. From just looking at all the other ones his miracles. Tickets now on sale whether they sell their tickets. Yeah, looks like they. they must be some sort of ticketing system out of
    23:55 Tiina: Five years because it's just an email this I'm looking at a lighting awards for new type essay, sa and T and it just comes into a form that say bye to get here. We must go through. Our accounting somehow.
    24:17 Joe S: yeah
    24:18 Tiina: but we've
    24:22 Joe S: Yeah, I'm looking at so I'm looking I clicked on one of them and it took me to eventbrite. I clicked on another one okay. It looks like at least with a LinkedIn for isn said the tickets and walk through eventbrite.
    24:39 Tiina: But then if you're on the website and you go to events.
    24:45 Joe S: Yes, and then go to say upcoming.
    24:48 Tiina: yeah
    24:55 Joe S: Yeah, and then it goes tickets here. You're right and then there's just a form and you buy it through the cart understands working well.
    24:59 Tiina: hmm I suspected isn't. and on on deep export version it's just a It doesn't even have a link ticket sales. Are you tell the link to get sales? I think that goes to an email so I'll leave that to him found out and so we're a
    25:26 Joe S: yeah
    25:28 Tiina: little bit disorganized, put it that way.
    25:32 Joe S: Yes, I've heard a few different versions of the same things in terms of how
    25:34 Tiina: so it
    25:39 Joe S: things are done.
    25:40 Tiina: Every state has things or different so if there was a easy way from a webpage to actually do the sales then it will go straight into. Account and we actually know what's been paid the problem. What's until recently we didn't even know who had paid membership and who hadn't paid membership.
    26:04 Joe S: Yeah, yeah that makes sense.
    26:06 Tiina: So this one just makes it more complex and I don't care what it's ticket or
    26:12 Tiina: whatever.
    26:13 Joe S: hmm
    26:15 Tiina: But I think having a common way of doing it might be. of some benefit
    26:20 Joe S: Yeah, that's right because you don't really want people who want members to be able to buy everything right they need to ideally.
    26:27 Tiina: Yeah, they most of it on like some looking at deep one. They don't have
    26:27 Joe S: yeah
    26:32 Tiina: different projects. We checked into have different pricing for. people who are members and none
    26:40 Joe S: Yes, yeah.
    26:42 Tiina: although the members get a discount code and Then it goes from there. So this wave in price is quite good if you have your discount code says you're are you remember?
    26:59 Joe S: Oh, I see, so they need to discount code.
    27:01 Tiina: mmm
    27:02 Joe S: That makes sense yeah okay, but then anyone who gets the discount code presumably could use it or is it a one-use code?
    27:11 Tiina: Good question, I'm assuming it's not.
    27:16 Joe S: But I guess at a certain point they get found out either way.
    27:16 Tiina: but Yes, yes. Can only do that so many times but I'm sitting there so we don't even we don't even have. The Who chapter 1 here on the on the event So having eventually has all the events might be a good idea. Just start off.
    27:40 Joe S: Yes, that would be also the calendar doesn't really let you do anything other than see the name of the thing in the calendar. It isn't actually linked the
    27:47 Tiina: mmm
    27:49 Joe S: things that having. Um the link to the events at all which is. A bit challenging I guess if you try to buy tickets for an event you're like oh, I can go to that.
    28:02 Tiina: Yeah, but it's it's an online store, too. Quick have some public.
    28:08 Joe S: yeah it seemed yeah, so
    28:11 Tiina: Then they would stick it says well.
    28:14 Joe S: I'm guessing it's this. Oh it says coming soon if you click on that though and
    28:18 Tiina: Oh, yeah.
    28:18 Joe S: it also it says coming soon for 2022. And the URL so I think there's a lot of tidying up today.
    28:23 Tiina: it's Yes.
    28:27 Joe S: Like a lot a lot. Okay, that's very good food for thought I think in terms of how we want to structure all of this. I can see why people don't like using this side if it doesn't really function.
    28:50 Tiina: It no it doesn't really functionality. I think it's just and This is better than what it was couple years ago.
    28:59 Joe S: Right, it was even worse.
    29:01 Tiina: I yes more things the bar wasn't very high.
    29:08 Joe S: That's wild okay cool, so is there anything else from your perspective like I guess we've got a pretty you've got quite a high level view of this.
    29:19 Tiina: Yeah, and yeah, and I have my my part is probably very limited sort of small
    29:24 Joe S: yeah
    29:27 Tiina: part from membership. So having a user-friendly things to maybe online stores or events or at least having a Event calendar under the event or coming, but a member of Engineering to Syria
    29:39 Joe S: Yes.
    29:42 Tiina: and they have like they send me an email once a week or something this is coming these are these events are coming? The problem was that they send me everything from everywhere. It's better now because everything's just about everything's on team so I could actually go to something less in New South Wales and listen to that one was anything that is a webinar, but it also then when there's like a local events. It will send me
    30:05 Joe S: yeah
    30:10 Tiina: local events. These are coming this month.
    30:17 Joe S: Yeah, so is this something that happens is this something you'd like to happen.
    30:23 Tiina: I think that yeah people don't want to have too many emails.
    30:26 Joe S: Yeah, it's a currently it's all the email.
    30:27 Tiina: But if the information in engineers Australia's emails, but it's or they have an event section there in their website as well, but if the events where easy to find and then we actually there.
    30:44 Joe S: yeah
    30:45 Tiina: So, this is this is what's happening this month and this is what's happening next month. And people would even if it's just taper today or something like that. This is happening and there's not much detail but it's
    30:57 Joe S: yeah
    30:58 Tiina: having interest
    31:01 Joe S: I think this this works quite nicely with the feed feed ID because you could. Have events as part of your feed so you can see what's happening. What's coming
    31:10 Tiina: mmm
    31:12 Joe S: up and even if it has a date you could have a calendar version of that feed as
    31:14 Tiina: so
    31:17 Joe S: well.
    31:19 Tiina: Mmm. Yes
    31:20 Joe S: Cool. I yeah okay that makes sense so within this you say your role is fight in a box. Do you update?
    31:28 Tiina: but I've also been being you know yes for a long time so
    31:34 Joe S: You've seen a bit of everything.
    31:36 Tiina: yeah
    31:37 Joe S: yeah, yeah, which is why this is good, so do you update the website at all yourself or
    31:43 Tiina: No, I don't think anybody they have to go through. decentral yeah
    31:47 Joe S: workforce
    31:50 Tiina: or go to the older secretary of
    31:53 Joe S: all of the secretary of Managers the website yeah
    31:56 Tiina: their So if the chapters could put events in or something like that would be probably easier.
    32:04 Joe S: yeah So be nice to have a little bit of autonomy for example. Yeah, I think that would be. Yeah, I think that would have to be approved, but it might be a good thing. And also it would have to yeah reliable. I guess the challenges like water for
    32:20 Tiina: Well that that's been that's part of the problem of being involved the
    32:24 Joe S: some chapters basically. Just don't do their part and then someone has to do it for them. But I guess that's already the case.
    32:34 Tiina: organizations we have. varying skill sets
    32:39 Joe S: Yeah, yeah. Um, so is there anything else that you do the interacts of the website like in terms of you might not do it yourself but you're running into challenges.
    32:58 Tiina: It's more actually just actually putting things. Having some sort of presence on the front page every now and then but we used to have a newsletter that came in. Monthly we don't have the Testament electronic newsletter or messages from the
    33:12 Joe S: yeah
    33:16 Tiina: board members or something like that. That would be nice. It's also challenges us actually having The Right Stuff
    33:27 Joe S: Yeah, so I guess this would be say if you have a bulletin post that you you
    33:32 Tiina: hmm
    33:33 Joe S: wrote, but you want to kind of boost it to the front page is that.
    33:37 Tiina: yeah
    33:39 Joe S: yeah
    33:43 Tiina: But whether it would be monthly news maybe they would be a monthly. This is what's happening this month. Or if there's been I'm thinking more of a SharePoint page type thing is what we get corporately we get XYZ have had presentation of here and it sits on the front page for a week or so.
    34:07 Joe S: So not the chef point itself, but just the news about it.
    34:12 Tiina: Yeah, yeah well the shape would page has that they write a music might come.
    34:13 Joe S: yeah
    34:17 Tiina: It's an email if date decided it's big enough to date and an email other than that. It's the first four tiles on the corporate SharePoint site. I have new events and they're just changed and keep rotating and you can go you can actually go back. And find him if you remember that somebody did something two years ago you can actually find them if you Snoop for long enough.
    34:41 Tiina: but this
    34:41 Joe S: So because it's got the four boxes but you can go back through the history if
    34:45 Tiina: Yeah, yeah.
    34:45 Joe S: you need to so this is something that would be nice to have on the website in terms of how it works.
    34:50 Tiina: It's like we could say that these are the we do have Awards winners past winners and the entrance from this year on on the page for the if you could then save all this is. The winners for New South Wales or for this and it would flash up.
    35:09 Joe S: Yeah, yeah.
    35:09 Tiina: That's probably more on the pack side than my side. It's just It's just making it a little bit more. Like reason to go there instead of having it always every time you go there it looks the same.
    35:27 Joe S: Totally it would yeah having to manually update things like the front page is usually not good if you have a very active but not very web-centric business.
    35:36 Tiina: mmm
    35:39 Joe S: Yeah, I guess this almost feels like you would have your bulletin system, but
    35:40 Tiina: so the
    35:43 Joe S: then you one of the channels could be public right. So you don't care if people
    35:45 Tiina: Mmm. Yeah
    35:46 Joe S: see it when they're not logged in.
    35:48 Tiina: Yes, yeah, but yeah, you could I was definitely using.
    35:50 Joe S: you know
    35:56 Tiina: If there was a public facing because you want new. One new members, so it has to be public facing it has to have some elemental public facing and you have to log in to get to the rest of it.
    36:11 Joe S: Yeah, yeah. So your private isn't board would probably still have the public stuff on it to a degree but not as much.
    36:17 Tiina: yeah Yes.
    36:21 Joe S: Yeah, I'm kind of seeing a structure here that could work quite well in terms of like you update it all in one place instead of having to go here to do this here to do this here to do this.
    36:32 Tiina: Mmm. Yeah
    36:34 Joe S: Cool all right well. Thank you very much. I think that's plenty to go on.
    36:43 Tiina: It's good.
    36:44 Joe S: yeah, is that kind of everything you wanted to talk about in terms of your
    36:51 Tiina: Yeah, my part is very parts fairly simple but on the other side I've also.
    36:52 Joe S: review of this
    36:58 Tiina: It was just trying to get the website. There's something that people will actually use.
    37:02 Joe S: Yeah, yeah, I understand that I might my mum's an education. She's while she's retired now, but she spent many many years trying to get all the different. I think it was like blackboard and all these different bits of tech and she was just like if the Tech hard to use then no one uses it. So it doesn't really
    37:21 Tiina: mmm
    37:21 Joe S: work.
    37:23 Tiina: And also if there's too much like we now use teams we have watch out groups. We have this group and that group and I'm sensations. I don't look at everything all the time.
    37:39 Joe S: yeah Yeah, I wonder if yeah, I mean, I'm not overreach with the project scope but some sort of internal. Chat or message might be northwest like turning it into a kind of an intranet.
    37:49 Tiina: hmm yeah, but we we do have the team so the people who are on the board of their
    37:53 Joe S: Eventually might be a thought.
    38:02 Tiina: things and the guys on the local chapters Should have it as well, but looks like they used more they tend to use more watch out or at least my for w.a guys use WhatsApp for some reason.
    38:19 Joe S: I guess if everyone they know is on WhatsApp and it comes more naturally I know yeah a lot of my friends are still on Facebook messenger but my cousins overseas are all on WhatsApp
    38:29 Tiina: oh, yeah, I know that my my fault families in Derby so yeah, they all use WhatsApp
    38:36 Joe S: Yeah, yeah, I don't know why it's yeah, anyway. Yeah.
    38:38 Tiina: But in it. Yeah, what's up signal signals looting track you know the moment. At least in my family, but yeah. lots and lots of stuff
    38:54 Joe S: Yeah, so it's one of these things where it's like that there's an internet as an internal communication all of these things to do with the technology that people
    39:00 Tiina: hmm
    39:02 Joe S: use outside of the website.
    39:05 Tiina: Yes.
    39:06 Joe S: And it might be good to at least treat like maybe put that to one side for the bell, but keep it in mind is like how much of this could come in onboard if you're already doing memberships stuff then the more.
    39:15 Tiina: mmm
    39:20 Joe S: Yeah, the more it could be one place to do it all the more that maybe makes
    39:22 Tiina: the mop and it's also having like a
    39:24 Joe S: sense.
    39:29 Tiina: Members yeah, if you could that's it comes back into the moderation for the members. so it's letter Pandora's Box
    39:43 Joe S: Yeah, I my brain almost fried when I learned all the membership protocols like
    39:46 Tiina: and
    39:50 Joe S: how the how that's automatic.
    39:53 Tiina: yes, and that and that's differently better now than it was so
    39:59 Joe S: Yes, I think yeah Monday night cover is doing a pretty good job, but I can't
    39:59 Tiina: so mmm
    40:03 Joe S: imagine what it was like before because it sounded like it was an Excel spreadsheet.
    40:07 Tiina: Yep more or less.
    40:09 Joe S: Good fun. cool
    40:12 Tiina: Well, I that's all I have at the moment.
    40:15 Joe S: I mean amazing like that's all super helpful stuff lots of think about I think I'll run if it's okay with your run some of this past defect for.
    40:24 Tiina: That's good.
    40:24 Joe S: In terms of like ideas and get yeah, it's also as well awesome. Thanks so much.
    40:26 Tiina: mmm this take in
    40:30 Joe S: Thanks taking the time and talk to you soon.
    40:30 Tiina: Thank you. It's okay. Thank you. Bye.
    40:35 Joe S: Yes.
    

## Lushka

- Notes
    - Recommended talk to Jake Wood -
        - knowledgeable about marketing
        - AGM next month, formally board director at that point
    - Role
        - Dealing with course grants
        - Dealing with bursary
        - Endorsed programs need to have links to their universities, need to be trackable (ie track when they were clicked on, ie utm property added to link)
        - Webinars and tech events
            - Each chapter has its own webinars and tech events
            - Tracking where clicks came from
            - Need a booking system (currently Eventbrite)
                - Link out to eventbrite
                - Some booked through  https://humanitix.com/nz as well
                - Also needs tracking
                - Needs to be linked to accounting
                    - 2 layers, members attend free,
                    - Not a member, there is a fee
                - Currently using [monday.com](http://monday.com) for this
        - Knowledgebase Video content
            - White papers
            - PDF’s
            - Journals
            - Tutorials
            - Members only
            - Looking at Vimeo (PRO)
        - Overlooking education portfolio
        - Overseeing endorsed / approved courses
            - 4 postgrad endorsed
                - Young professional
            - 1 university
                - Residential lighting design
                - Adding 2 more
            - Icor
                - 3 short courses
                - Adding one more
            - David Bergfrom(?)
                - One course
        - Liase with course managers
            - Financial etc
        - Students get a reimbursement on membership
        - Workshops
            - Need to be marketed
            - Primarily  for members
                - Outsiders are welcome to join
    - Wishlist
        - Anyone interested in courses, need that information to be there
        - There is a sketch of what would be good to have in website
    - Membership restricted content
        - Videos, whitepapers, etc
        - Standards discounts
        - Limited to eg 2 per person, we need to make sure that members cant buy more than 1 standard at a time for IP reasons
            - Possibly not a downloadable PDF? view online only
        - Members sarch
            - Eg client is looking for a lighting designer
            - Maybe members curate a ‘profile’?
            - Reference IALD https://www.iald.org/IALD/Contacts/PublicProfile.aspx?ID=101005
    - Learning Management (LMS)
        - CPD points
            - Can be gained by viewing webinar, not just booking but also arrived
            - Meetings that chapter management committees, go into CPD portfolio
            - Spreadsheet per member for tracking CPD points
            - Not officially Mandatory (but also members arent informed of that) but even MIES are encouraged to gather X points in Y years
        - Quizzes
        - Course progress updates form
        - Certificates for completed modules
    - Website usage as director of education
        - Uploading research
        - Updating courses with dates and linking to calendar
    - Usage as end user
        - Upload CPD points
        - Viewing news and events for other chapters?
        - Looking at past award winners (this is public)
        - Due dates / submission dates ( membership)
        - Standards on website for eg?
        - Tutorials on a particular subject
        - Research on a particular subject
        - Access webinars (book through website)
        - Dinners, eg had to send an email to get a form to send a reply with pdf and then pay manually
    - No comprehensive list of type
- Transcript
    
    # PXL x IESANZ - Stakeholder Scope Meeting Schedule (Lucka Slatner)
    
    Meeting started: 22/10/2025, 15:00:12
    Duration: 70 minutes
    Participants: Joe S, Lucka Slatner Smrkolj, Lucka's Notetaker
    
    [View original transcript](https://app.tactiq.io/api/2/u/m/r/7GZpx33qazypuRiP37TL?o=txt)
    
    ```
    ## Highlights
    
    > 02:01 Lucka's Notetaker: Hi, I'm an AI assistant helping Lucka Slatner take notes for this meeting. Follow along the transcript here:  <https://otter.ai/u/iQ8oqZktyx8jfXWecDob_UHkDN4?utm_source=va_chat_link_1>
    
    ```
    
    You can see screenshots and add highlights and comments. After the meeting, you'll get a summary and action items.
    
    Tip: If you'd like to stop this recording, you can go to the link above and click the Stop button.
    
    > 03:09 Joe S: Yeah, okay, cool. That's good tonight.
    14:02 Lucka's Notetaker: Hi, I'm an AI assistant helping Lucka Slatner take notes for this meeting. Follow along the transcript here:  https://otter.ai/u/iQ8oqZktyx8jfXWecDob_UHkDN4?utm_source=va_chat_link_2
    > 
    
    You can see screenshots and add highlights and comments. After the meeting, you'll get a summary and action items.
    
    Tip: If you'd like to stop this recording, you can go to the link above and click the Stop button.
    
    > 27:20 Lucka Slatner Smrkolj: And we have certain requirements from each and every member so if you want to upgrade your membership, you need to demonstrate if you want to retain your Mis or FYI so high grades of membership. You need to demonstrate that you have been continuously developing this on and so forth so that's that's very important now that little b*****.
    31:53 Lucka Slatner Smrkolj: foam. It's nothing flashier than just the form so so when the Secretary asks you. To submit it you just press. Yeah. Send or ideally Rd secretary would have
    34:58 Joe S: Yeah, and that's kind of the goal of the Architecture isn't necessarily to rush to this Final point because that would probably cost too much and take too long,
    35:55 Joe S: That's kind of the goal here. So yeah, I think from what you've said the things
    39:02 Lucka Slatner Smrkolj: Would you have to download it no sometimes my experience was the sometimes even when something was was embedded into the website and not linked on to the external one it could cause problems. Sometimes because of your antivirus protection would say no it's a harmful side. Don't do this or it would maybe you missing a plugin or god knows what typically I found that would cause more problems than having a link to a platform like Vimeo and then.
    39:40 Lucka Slatner Smrkolj: YouTube for that matter and If you would have an issue with a plugin then you can easily fix it.
    42:38 Lucka Slatner Smrkolj: No, yes, it does however and I see where you're coming from. There's always caveats when we're dealing with something that's off the shelf and doesn't like to talk to each other and that happens everywhere now where I foresee a very big issue potential issue would be that all these education. Let's say as an example
    50:13 Joe S: So yeah, that's kind of the goal of what we're working towards.
    51:15 Joe S: membership database to your shopping system. It's gonna immediately fall over and you won't be able to go any further the idea of what we're talking about is in order to do this future proofing is we want an architecture that allows for this and this and this obviously you do some work to make sure that you don't make it too complicated for anyone to user understand but at the same time you don't lock yourself into a platform like say Salesforce because at that point you might go okay. There is literally no way to do this one thing that actually is really important and unless you reprogram, Salesforce or go enterprising get
    01:00:37 Lucka Slatner Smrkolj: I would definitely be interested in in that. I would also love to know when the due dates and submission dates are for the said awards. If they want those would be on it just organizing Mike and in that respect
    01:01:47 Lucka Slatner Smrkolj: access that webinars or seminars whatever the event is that I can just simply book myself through the website that would be absolutely business phenomenal vanilla ice cream with cherries on top. Because let's say what I'm doing currently and I'll give you an example that bothered me and I know each individual chapter. They have their respective dinners right and I couldn't I needed to send an email to the organizer of the awards in New South Wales so they can send me an email with the link with the form so I could write down. How many people are attending latter days with this PDF so I sent it back and then they sent me an invoice I prepared and then I don't know so it was convoluted as hell to get myself a ticket.
    01:03:37 Lucka Slatner Smrkolj: in yourself? It's on that day click here to buy ticket.
    01:03:43 Lucka Slatner Smrkolj: I'm clicking that and I'm going through whatever it needs to happen afterwards whether they're if I'm pride whatever it is pick a platform so I can buy that I can pay it what however I pay for it so zero connected or any kind of paying system. I don't care I want to click on it. I want to pay it and I've got my ticket. It takes me less than five minutes to sort that out right now. It took
    01:07:18 Joe S: okay okay Because basically what I say before is that I'm thinking it kind of falls into different categories in terms of like you will have something that is a subscription I pay for it on a regular basis, so something like a membership would become a subscription and then you can have a product like a ticket that is just something that you buy then you have a member but your there's a several different gods of member and they all have their different processes attach.
    > 
    
    ## Transcript
    
    00:00 Joe S: Hello.
    00:01 Lucka Slatner Smrkolj: Hi, sorry my camera around.
    00:04 Joe S: Yeah, yeah, we're about to see you calling in from.
    00:05 Lucka Slatner Smrkolj: There we go that's me. Good. Yes, I am can you hear me? I am in Queensland
    00:23 Joe S: Okay shouldn't be too much okay.
    00:26 Lucka Slatner Smrkolj: No, we should be just a couple of hours. Oh.
    00:30 Joe S: Yeah, that's good cool. So I think did I talk to you when I was on that board meeting called by the while ago now like a few months ago.
    00:40 Lucka Slatner Smrkolj: It was in February 24th India's.
    00:45 Joe S: Cool, so you know who I am.
    00:47 Lucka Slatner Smrkolj: I do
    00:48 Joe S: We're finally getting going on this one. We are yeah. I'm just in the process of interviewing everyone to do the existing website getting a good understanding of what's going on there. How it'll works telling that into a plan and producing essentially a report with recommendations for the next step. So that's currently where we're at you are currently the last one in the someone else manages to book in.
    01:11 Lucka Slatner Smrkolj: Well, I'm glad that so I know where we are.
    01:17 Joe S: Yeah, yeah, so I've talked to quite a few people there talk to our bring up the list. I've talked to Jeff Greg Tina and Andrew and I was supposed to talk to James and This I guess today, but they had some urgent pull out so that didn't happen. So yeah, that's where we're at.
    01:43 Lucka Slatner Smrkolj: ideally if I'm put some somebody else on your to-do list, it would be Jake Wood
    01:49 Joe S: Jake
    01:49 Lucka Slatner Smrkolj: He is yeah Jake Wood he's now newly elected board member. And by the way things are looking I cannot confirm this just yet 100% certainty
    01:57 Joe S: yeah
    02:01 Lucka's Notetaker: Hi, I'm an AI assistant helping Lucka Slatner take notes for this meeting. Follow along the transcript here:  https://otter.ai/u/iQ8oqZktyx8jfXWecDob_UHkDN4?utm_source=va_chat_link_1
    
    You can see screenshots and add highlights and comments. After the meeting, you'll get a summary and action items.
    
    Tip: If you'd like to stop this recording, you can go to the link above and click the Stop button.
    02:05 Lucka Slatner Smrkolj: but he is rather knowledgeable in the department of marketing.
    02:11 Joe S: cool, yeah
    02:12 Lucka Slatner Smrkolj: So and it is highly likely that he will over that he will take that portfolio on. so, but he's not formally a ball director until the AGM which is next month so I'm not saying that you should but it would be he has already in the capacity to pass any on any comments or insights and I think that would be. beneficial
    02:44 Joe S: Cool, so when you said take on your portfolio you mean for like from a marketing perspective or for the website as a whole.
    02:51 Lucka Slatner Smrkolj: For my marketing perspective.
    02:54 Joe S: okay
    02:54 Lucka Slatner Smrkolj: So each of us as you know we were looking after our own respective portfolios mine is education and most likely Jake will be taking marketing.
    03:01 Joe S: yeah
    03:07 Lucka Slatner Smrkolj: so
    03:09 Joe S: Yeah, okay, cool. That's good tonight.
    03:19 Lucka Slatner Smrkolj: I'm just looking for. A board paper that I wanted to put in front of everybody doesn't matter fire away what questions do you have for me?
    03:38 Joe S: Cool so I was thinking for to start with what I've got everyone to do is just do a little bit of an introduction. I kind of want you. What your interactions with the website are what your priorities are. Yeah, because everyone's got to go to roll to play and some overlap more or less with how the website is built so it would be good to start with that understanding and then we can yeah move into things like pain points ideas all of that stuff.
    04:06 Lucka Slatner Smrkolj: okay, so let me talk you through what my What I'm obviously what my sheep are so you can understand the flock a little bit better. So as overlooking the Education Portfolio I am overseeing.
    04:17 Joe S: yeah
    04:25 Lucka Slatner Smrkolj: All the endorsed I'll simplify all the indoors and or approved but endorsed. Educational so lighting education courses we currently have four that are post-graduate and those are the stepping stone or a gateway tools tech IES so one of the membership grades. Let's call it young professional and for easy understanding and then we currently have. Bond university in the have a running Course called residential Lighting Design but they're adding two more then. We have I call who currently has three short very short courses, but they're adding one more and then we have David Bert from to be designed his in Victoria and that's also Media interracial course, so those are the courses what I do is alias with them. There's financial involves disorder and so forth in addition to that are student the students that enroll in the apartment courses do get a free membership for A certain period of time if it's a short course then it's typically a year. It's longer duration than it's between 18 months up to two years.
    05:52 Joe S: Yep.
    05:53 Lucka Slatner Smrkolj: Anyway, that's it. We're also. the we also deal with workshops And those workshops need to be marketed. They need to be that designed for the members primarily for the members, but also outside so welcome to to join
    06:16 Joe S: yeah
    06:18 Lucka Slatner Smrkolj: now what I need the website to do for me is that if anybody ever is interested in any anything that revolves around the courses I need that to be there so in I don't know if Deepak has sent you I sketched I sketched something up whilst I was in the meeting on the day that we met and it was a little bit of a scribble and it outlines the things that I think I would need on my website to be of course. It's just in Broad Strokes but it should outline.
    06:58 Lucka Slatner Smrkolj: a little bit what my needs are And I don't know if the packs share that with you. I'm happy to talk you through it but
    07:09 Joe S: I do know that there's some resources that I'm going to be putting together with
    07:09 Lucka Slatner Smrkolj: yeah
    07:11 Joe S: all of these interviews. There's a 300 page PDF and by the sounds of it if I haven't seen this one but it would be good to get that through as well if possible.
    07:23 Lucka Slatner Smrkolj: What kind of PDF I'm sorry?
    07:25 Joe S: There might be a 30-page PDF it's a bit long. I don't think it was done by A possibly happens or purple giraffe is alright. Yeah.
    07:34 Lucka Slatner Smrkolj: Uh-huh our purple marketing so I don't know how that would incorporate anyways what we need to do is. those three things that I mentioned so we've got when it comes to education. I'm dealing with long duration so endorse programs. We're dealing with the bursary which is a grant that is by annual. And I've got a need some information that is put in there. But that's just having the document up there in people being able to apply for them.
    08:13 Lucka Slatner Smrkolj: And the endorsed programs they need to have links tools their respective educational facilities to get more information on and those links need to be trackable.
    08:28 Joe S: I track whether they've been clicked on or track whether they've been used.
    08:32 Lucka Slatner Smrkolj: Yeah, where the first point of contact came from so we can start collecting the data and then see where our marketing efforts need to be.
    08:47 Joe S: Okay, so that's basically whether they've clicked on the link from a different place within the website or is this tracking whether they've been clicked on at all from say inside their dashboard.
    08:56 Lucka Slatner Smrkolj: But they need to be trackable towards. Sorry, let me start again. They we need to have the link that is embedded in the website to be so it's effectively it's a cookie. We need to have those cookies tracking cookies to see whether the click came from because that's one of the things that are. education providers are interested where Where the first point of contact came from did you come from a website? Did it come from any of the social media platforms where the attendees come from? How did they hear about their course?
    09:32 Joe S: So that would be Analytics on their end and what we'd probably do is attach a
    09:34 Lucka Slatner Smrkolj: yeah
    09:36 Joe S: utm parameter that they would provide us with right.
    09:38 Lucka Slatner Smrkolj: correct
    09:39 Joe S: Cool that's easy. You just put that in the link.
    09:42 Lucka Slatner Smrkolj: There we go so but I need to mention these things so they need to be incorporated in that and then another thing that we'll need to happen is again. We've got webinars and tech events and it's not just So each of the chapters has their own webinars and their own tech events.
    10:03 Joe S: Yep.
    10:04 Lucka Slatner Smrkolj: And again we will need to monitor where those clicks in info request came from however. We will need a booking system, so I'm going to say let's say eventbrido humanistics or something something that will be embedded into the no. Sorry not embedded. It will be should be linked to our website.
    10:26 Joe S: Yeah, yes, so currently you're using event right. I don't know if that's for all of them, but it's just some of them. So, what are you asking for that to come back into the website?
    10:34 Lucka Slatner Smrkolj: So, I will need an external. I will need a link to both of them probably because some of the things that there will be booked on will be through eventbrite and some of them will be humanitigates the difference between them being eventbrite is ever so slightly maybe more known and well organized you've got a background that fun out that I know of that you've got your clientele listed on and so forth so we can set out those marketing campaigns however humidity. Doesn't is not that much worse and humanistics has a better side of when it comes to the fees.
    11:20 Joe S: Sorry, no. Are you saying you I used are you say humid lyrics I haven't heard of
    11:20 Lucka Slatner Smrkolj: So eventbrite is more expensive we will need both.
    11:26 Joe S: this one before is this. How do you spell that? humanitarix yeah within x
    11:32 Lucka Slatner Smrkolj: That's the one I yeah. I probably Miss pronounce it.
    11:35 Joe S: That's right.
    11:37 Lucka Slatner Smrkolj: So either all but let's say an event organizing engine for now. We will need that link in that link now. I'm going to throw in the works because that that eventbrite that's cool. It event price that event right. We'll need to be schools linked to our accounting.
    11:58 Joe S: Yes, yeah.
    11:59 Lucka Slatner Smrkolj: Because we will have two layers now if you are a member and you want to attend a tech event the attend. It's free but if you not and you want to attend then it's a nominal fee of I'm gonna make it up like $20. So that distinction needs to need to happen with that said. If you are a member, you do have your membership number.
    12:24 Joe S: Yes, so you can use it like a coupon code or something.
    12:24 Lucka Slatner Smrkolj: And that membership. yeah
    12:29 Joe S: Okay and this currently doesn't exist.
    12:30 Lucka Slatner Smrkolj: so that will then need to be connected to our current membership database currency CRM is [monday.com](http://monday.com/) and everybody's super happy with that so probably that's
    12:44 Joe S: I've gone through monday.co.f. So I do know where the pros and cons of using [monday.com](http://monday.com/) yes.
    12:50 Lucka Slatner Smrkolj: Yeah, um and then further to that. Because we will have video content now video content cannot reside fully work cannot reside on the website because it's going to be too heavy what do I mean by that video content? It's not just video content. It's gonna be white papers. It's gonna be PDFs it's going to be journals. It's going to be videos tutorials started data does so hip content that will be restricted to members only.
    13:21 Lucka Slatner Smrkolj: So, let's say we're going to do a webinar we're going to record the educational
    13:22 Joe S: right
    13:26 Lucka Slatner Smrkolj: content. That's B I know and we only need to have the members having access to that.
    13:33 Joe S: Yes okay, so when you say it's two heavy to go to the website. What did you have in mind?
    13:37 Lucka Slatner Smrkolj: So we were looking either probably not YouTube but vivio.
    13:42 Joe S: Yes.
    13:42 Lucka Slatner Smrkolj: Vimeo sounds like a very good Avenue to explore.
    13:45 Joe S: yeah
    13:49 Lucka Slatner Smrkolj: and The rest would be fine in my view if their PDFs and gonna be like but if we still need a dumping database and if somebody says teams I'm going to kick them in the shin.
    14:02 Lucka's Notetaker: Hi, I'm an AI assistant helping Lucka Slatner take notes for this meeting. Follow along the transcript here:  https://otter.ai/u/iQ8oqZktyx8jfXWecDob_UHkDN4?utm_source=va_chat_link_2
    
    You can see screenshots and add highlights and comments. After the meeting, you'll get a summary and action items.
    
    Tip: If you'd like to stop this recording, you can go to the link above and click the Stop button.
    14:04 Lucka Slatner Smrkolj: So it yeah, it might as well be I'm not gonna say but I bloody hate I haven't
    14:05 Joe S: I don't use Microsoft
    14:11 Lucka Slatner Smrkolj: think about things. and I think teams doesn't like me either but All we will need somewhere to have. all that database Of all that information, so this is all educational content that is available
    14:30 Joe S: This is so this is basically talking about how the knowledge base would work but
    14:31 Lucka Slatner Smrkolj: to.
    14:35 Joe S: also I guess some input on how it would be hosted or though I think maybe I would have some input on that based on. Yeah, what you want to do with it whether or not who Mayo is the right choice
    14:45 Lucka Slatner Smrkolj: yeah
    14:47 Joe S: but yes?
    14:47 Lucka Slatner Smrkolj: yeah So they're all need to be connected and I'm very I'm aware. So I know that it's multi-pronged thing that. In all the pieces need to work together. Yeah, I know.
    15:02 Joe S: Yeah, yeah, because if you have the meows separately and you don't API integrate it then you're going to have to have someone manually managing that but it sounds like a lot of the problem with this website at the moment. Is that a lot
    15:09 Lucka Slatner Smrkolj: yeah
    15:11 Joe S: of different things need to be manually managed by different people so yeah.
    15:14 Lucka Slatner Smrkolj: yeah
    15:16 Joe S: Yeah, I think there's some work to be done there.
    15:19 Lucka Slatner Smrkolj: Yeah, yeah, we we couldn't do that because the old platform was done in a rush. It was done without any full site into end all sorts of the technology moved so freaking fast that it stayed behind so this. website that you see currently, I think it was developed over 10 years ago, but it's too rigid it's rigid it won't allow for any kind of new integration which I do for CS as a problem because
    15:48 Joe S: It is because it isn't custom built this slide. It's a framework that has been
    15:52 Lucka Slatner Smrkolj: yeah
    15:53 Joe S: chew on yeah. I've had a look at it.
    15:54 Lucka Slatner Smrkolj: Yeah, it's yeah. It's it's not ideal it was fine. For a little while, but it lacked that flexibility in then. We we started facing other issues when it started cracking because there were people they will involved in it and the membership database overflowed and then we were dealing with duplicates and so on and so forth and it took them three years to cleanse that data so we're we're very passionate about that a hygiene now that when it's
    16:21 Joe S: Yeah, yeah.
    16:26 Lucka Slatner Smrkolj: coming in anyways, but but that's a different conversation.
    16:27 Joe S: Yes, yeah. Okay cool, so basically I've talked to a few people about this. There's a knowledge based system that is what to different layers of membership. You're going to have different kinds of content in there. You're going to want to control access sometimes you're gonna give it out based on I suppose whether or not they're enrolled in a certain course or something like that. I don't know if
    16:57 Lucka Slatner Smrkolj: Yep.
    16:57 Joe S: there's any link there. I was talking to I don't know if this is related but the I think when I first talk to Andrew who's talking about a standards body where
    17:07 Lucka Slatner Smrkolj: Yep with that. I can already give you a little bit of insert. What one of the
    17:08 Joe S: you would.
    17:12 Lucka Slatner Smrkolj: things that we want to do is also, so this is I'm going to talk about membership restricted content. So the content that is registricted to me for members only access and it's the
    17:21 Joe S: yeah
    17:24 Lucka Slatner Smrkolj: same thing as it was before so all the videos the educational videos tutorials and white papers and all the research that it's going to be published that it will be accessible to the members. So that will be the membership benefit white to be a member because I can get my hands on these further to that we are looking into getting. The standards accessible to our members at a discounted rate.
    17:51 Lucka Slatner Smrkolj: and again Connected to zero connected to member limiting the amount of copies each person can buy and so on and so forth.
    18:04 Joe S: Yeah, so it sounds like I kind of breakfast out into like very general categories of like how you're going to control his sees what and who can do what a new can buy what so something. I've been thinking about is the idea that you have channels essentially so maybe you've your someone writes a post and the channel might be public you see online page or it might be members and you see it when you're in the membership section or it might be a specific check chapter like Western Australia and then you only see it if you're already assigned to that Western Australia section so I was thinking something along those lines can also be used for.
    18:45 Joe S: Distributing these like how you access your knowledge base and it sounds a little bit like this needs to be tied into the payment system.
    18:55 Lucka Slatner Smrkolj: Yep.
    18:55 Joe S: Because you're also going to want to track who's paid for what in relation to
    18:59 Lucka Slatner Smrkolj: Yep.
    19:00 Joe S: what they can see and what they can access does that sound about right? okay
    19:05 Lucka Slatner Smrkolj: Somewhat so somewhat, so the way I see this is. like a shopping platform if that makes sense and
    19:14 Joe S: Kind of accept that there's a membership aspect to it right.
    19:17 Lucka Slatner Smrkolj: yeah, so we've got our currently when you go on to a website if you remember there's a member's hub and for now you probably noticed that it's rather confusing because you go into members hub, and then you log in or you can log in and then you're going to a different area it's Anyways, so when you log in as a member, you should have access to the above set and once you buy a standard, then it can lock you out for buying additional copies if that makes sense that that's my view.
    19:53 Joe S: Yes, yes and so something else. I've gathered through talking to everyone is as quite a few parts of the process that I'm manual by Design because they have to be for example run past a board so that's going to be presumably approval flows for who becomes a member or becomes a fellow. something like that so some
    20:16 Lucka Slatner Smrkolj: That's already in place.
    20:19 Joe S: Yes through [Monday.com](http://monday.com/) is that right.
    20:21 Lucka Slatner Smrkolj: No, if somebody applies to upgrade membership is all applies to be anything then so to be an associate. You just need to pay your membership, but if you want to upgrade then it needs to go through the board and then that's updated into [monday.com](http://monday.com/).
    20:41 Joe S: Correct so what I'm saying. Is is that there is an element of manual control over people's membership because they can't automatically be approved until it's been signed off by a team some of it involves signatures some of it doesn't so.
    20:55 Lucka Slatner Smrkolj: yeah
    21:00 Joe S: It seems like there will be a balance here between what is a automatic flow. What is a manual flow because we're going to want to try and keep it as simple as possible without making it to magic if we're like. Oh, it's automatically limited to like you bought a standard and now you can't buy these other standards and there's no way to control that then you're gonna end up with a system. That's going to be more frustrating to use because you can't actually go and override it if you need to so this is part of what I needed understanding on is sure we can automate everything but then it might break or it might not work
    21:30 Lucka Slatner Smrkolj: yeah yeah
    21:35 Joe S: very far into the future.
    21:35 Lucka Slatner Smrkolj: Well, the thing is I hear what you're saying the the challenge is that. What we could be potentially facing is IP questions what can happen if we get the standard at the discounted rate. To a member and then it's it's like buying beers for miners. Am I making sense? We need to be wary of that because that will get us into a
    22:00 Joe S: Yes, yeah, yeah.
    22:02 Lucka Slatner Smrkolj: lot of trouble because this is IP therefore if Peter Paul by a standard and it's one PDF they can download it and there could be so that's a good discussion to have and was I have you here. So they could either download it onto their computer and they can look at it. It's these standards are trust me already. They're locked. Harder than Fort Knox so you can't print it you can't it's really well protected pdf well done for them.
    22:37 Lucka Slatner Smrkolj: What they could do is either they could download it, but that's not for discussion between the two of us. They could either download it or it's view only on the website whilst they're in there. Does that make sense?
    22:51 Joe S: yeah, so possibly not a downloadable PDF
    22:55 Lucka Slatner Smrkolj: Make possibly maybe not a downloadable PDF but trust me we'd be fine with that. Because we use standards on a regular basis and it does not a problem for me to have to log on to check whether the Luxe levels need to be 15 or 20. I Should Know It by by heart, but if I get there then checking yes and I can cover that with my with my the Don't know we we need to start that discussion with the standard to Australia how we can what we can navigate but I'm just discussing these two potential options either. They can purchase it and download it into the onto their computers which is fine, but they only get one copy.
    23:50 Joe S: Right, yes.
    23:50 Lucka Slatner Smrkolj: They cannot they cannot disseminate it. Or alternatively, it's only for viewing was on website but again they would have to pay some. Some nominal fee to have access to it. Because standards Australia it's a private company. This is their IP and they
    24:07 Joe S: Yes.
    24:11 Lucka Slatner Smrkolj: will have our skin if we are just. Chucking this out we cannot do that.
    24:17 Joe S: Yeah, I think there's a there will always be an element of you. Did your best here right because you can never stop someone from taking a screenshot. That's
    24:21 Lucka Slatner Smrkolj: yeah
    24:24 Joe S: not part of what you can control so you could yeah, so you can make sure that
    24:25 Lucka Slatner Smrkolj: And that's fine.
    24:28 Joe S: they could only download it once for example, but that doesn't stop them pacing that into an email you could yeah, I think putting it on.
    24:35 Lucka Slatner Smrkolj: You can actually stop them from from screenshotting. There's a plug-in that just makes pixels on top of it. I've seen it. I've seen it done and yeah you can you can somewhat read it still
    24:48 Joe S: mmm
    24:53 Lucka Slatner Smrkolj: but you'd struggling but at least you can say hey f*** it language pocket. I've done my best and if somebody found a way to navigate around that plug in then god bless them right.
    25:07 Joe S: Yeah, I think by the time by looking at plug is like that. We're going to be well into the weeds in terms of how many features that site has but I would say
    25:12 Lucka Slatner Smrkolj: Exactly, yeah.
    25:14 Joe S: putting it on the website and stopping it from being downloadable is probably going to be a good first step.
    25:21 Lucka Slatner Smrkolj: yeah
    25:21 Joe S: Whether or not you go any further than that is kind of up to timeline budget whatever I would say.
    25:27 Lucka Slatner Smrkolj: We'll figure that out but I just wanted to sort of start this conversation. I know that standards in the purview of my colleague, but as the VP I do need to start this conversation because I know that it is in the Works
    25:42 Joe S: Yes, I suppose following on for that with this also apply to things like videos you I mean Vimeo whatever we heard some probably wouldn't just let you download but yeah, it might be good to have like a concept of what what it needs to be controlled in this way in terms of the content throughout the site because it sounds like they might be differing levels of yeah who cares about whether you
    26:05 Lucka Slatner Smrkolj: Yep.
    26:10 Joe S: can download it for example.
    26:12 Lucka Slatner Smrkolj: Yep, so but to make matters a little bit more complicated for you. And again this is different different. I'm going to say different apps that would be. That would have a meeting point on the website is that we will need probably some learning management feature, so it's not llm. What do you call again? oh Like a learning plan LMS sorry, not llm. That's tragic ppt LMS
    27:02 Joe S: yeah
    27:04 Lucka Slatner Smrkolj: Because why am I mentioning that is because we will have CPD tracking. And it will behave the same way so CPD so continuous professional development.
    27:15 Joe S: That's the standards audio. I was thinking of before yes.
    27:20 Lucka Slatner Smrkolj: And we have certain requirements from each and every member so if you want to upgrade your membership, you need to demonstrate if you want to retain your Mis or FYI so high grades of membership. You need to demonstrate that you have been continuously developing this on and so forth so that's that's very important now that little b*****.
    27:45 Lucka Slatner Smrkolj: What we do look for ah that let's say how to gain those CPD points is attending webinar seminars or educational programs attending conferences and so on and so forth. And so conference let's say that you go to a webinar. It should be and you book yourself through the throughout website it should automatically as soon as you log into that meeting it should not that yes, the person has arrived not just booked in but arrived so it records those CPD points as being present.
    28:24 Lucka Slatner Smrkolj: There's also meetings that let's say the chapter management committees that they tend to saunas of in every case it can be reticent to say like an Excel spreadsheet that you can also manually top up with with items but some of them can be automated. But it still it needs to go into that person's portfolio. I'm going to say.
    28:49 Joe S: Right, so I use saying that the fact that they attended reading goes into the portfolio or more than that.
    28:57 Lucka Slatner Smrkolj: More than that look to gain CPD points and you need to keep a diligent track record as much as you can but we're all busy. This is all volunteering but we try we do our best but you need to be regularly we submitting the CPD tracking points. So you can hold on to your membership? I mean we won't let's say kick you out but we will send you a friendly reminder that you need to update that that your CPD points are insufficient so that's kind of a Kick in the bum for members to stay on top of things so CPD tracking and CPD tracking as far as I'm concerned.
    29:39 Lucka Slatner Smrkolj: The future proofing would be that if you log in or the or through I'm going to say a fat pride humanistic, so whatever the platform how you can actually book yourself into the into the event or slash OR meeting that it automatically. Tracks that you were present but that's for future considerations what I would need right now would be I'm going to say an Excel spreadsheet.
    30:05 Joe S: hey
    30:11 Lucka Slatner Smrkolj: That can where you can track. It's a bloody form. No more than that but it needs to be on each of the members. Logging and on their profiles that they can access.
    30:29 Joe S: Yes, so what they would occurrently this non-future version they would up input their CPD actions into this spreadsheet. yeah
    30:40 Lucka Slatner Smrkolj: Yeah by hand. They'll some things will have to be It Would by hand because they
    30:41 Joe S: yeah
    30:45 Lucka Slatner Smrkolj: happen behind outside of the electronic world and we get that but at least
    30:50 Joe S: yes, also, don't just
    30:51 Lucka Slatner Smrkolj: there'll be less of them yeah far away.
    30:53 Joe S: Don't the CPD points currently get tracked externally to the website and then. Like you can put your what stuff back into the website, but there's no API integration or anything between the actual store of the CBD links and the website currently.
    31:07 Lucka Slatner Smrkolj: There's nothing.
    31:09 Joe S: okay
    31:09 Lucka Slatner Smrkolj: There's nothing we have a PDF god blesses a PDF that you. fill out
    31:19 Joe S: Yes, yeah, so yeah.
    31:21 Lucka Slatner Smrkolj: and it's Yeah, and it's not up to par at least we need to do it in electronic so you could. Keep that on your on your on your profile and updated on a monthly basis or whenever you see it fit. We need access to having a form on our Hub that I can I can put that in. We have nothing right now, so but as far as I understand it. It's it's just a
    31:49 Joe S: yeah yeah
    31:53 Lucka Slatner Smrkolj: foam. It's nothing flashier than just the form so so when the Secretary asks you. To submit it you just press. Yeah. Send or ideally Rd secretary would have
    32:08 Lucka Slatner Smrkolj: access to this headphone. So if they see that something's not. Sufficient they can say hey mate. Do you mind? You need you need this you need your CPD points to retain your membership or upgrade your membership and so forth.
    32:23 Joe S: Is that currently the case is that just something that's going to work towards with the CBD points.
    32:27 Lucka Slatner Smrkolj: It it is but we haven't been following through.
    32:31 Joe S: Okay because I talked to Greg about this and he basically said that to go from technician to Mis as a as a membership grade. There's no mandatory point requirements. I think you might put them in as evidence. It's only the rlp where
    32:42 Lucka Slatner Smrkolj: yeah yeah
    32:46 Joe S: you must do 20 points every three years.
    32:50 Lucka Slatner Smrkolj: Yes, the numbers change since but Greg is very passionate. It's not officially mandatory. But we're not telling that that if you get my chest. We're kind of kicking them
    33:01 Joe S: right
    33:04 Lucka Slatner Smrkolj: to be to be more active which is good for them.
    33:09 Joe S: hmm
    33:09 Lucka Slatner Smrkolj: But we're not going to literally kick them out of the society if they instead of 40 points they have 35. that there's there's
    33:20 Joe S: Right even at the Mia's level like not not to do that rot.
    33:26 Lucka Slatner Smrkolj: Correct so even Mis they're encouraged to gather XY CPD points per annum or as it was rewritten they need to get get a required number of CPD points across three years.
    33:43 Joe S: yeah
    33:43 Lucka Slatner Smrkolj: So because some years you'll be more active than you'll be swapped with work and it's kind of a work is always fluctuating a workload is always fluctuating so
    33:52 Joe S: yeah
    33:52 Lucka Slatner Smrkolj: we're making those those necessary kind of reflexible. That's fine.
    33:56 Lucka's Notetaker: Lucka is on a Basic Otter plan with 30 minute meetings. To record longer meetings, upgrade to Pro: https://otter.ai/pricing?utm_source=oa-chat-basic
    33:57 Lucka Slatner Smrkolj: Um, but it's still it should be it should be tracked somehow and they should be putting that in into their profile. if that
    34:08 Joe S: Yeah, yeah gotcha.
    34:09 Lucka Slatner Smrkolj: Makes sense then there's going to be. Some quizzes and quotes progresses that could be so again element feature.
    34:28 Joe S: Close progress updates is that kind of way what you mean?
    34:28 Lucka Slatner Smrkolj: but Yes, yeah things like that or and we'll need to be looking at certificates for complete modules and so on so probably just future proofing these things.
    34:46 Joe S: yeah
    34:46 Lucka Slatner Smrkolj: No up, I'm not trying to see this website as the current requirements. I'm trying to forceive what they will be in. three to four years
    34:58 Joe S: Yeah, and that's kind of the goal of the Architecture isn't necessarily to rush to this Final point because that would probably cost too much and take too long,
    35:08 Joe S: but what you would do is create a foundation that doesn't prevent. In fact in it will like enable the future growth to the point about so having a
    35:20 Lucka Slatner Smrkolj: Yep, yep.
    35:20 Joe S: really good course system across all these different points so for example not separating your membership from your downloadable standards, you need them to be designed in such a way that you can.
    35:34 Lucka Slatner Smrkolj: Yep.
    35:36 Joe S: Integrate these things so that's kind of what I'm Gathering here is what needs to be linked to what else? And then also taking the like anything that's kind of labeled future-proofing is kind of put into the like stage-to-stage tree, but it is still there and it's
    35:51 Lucka Slatner Smrkolj: and
    35:52 Joe S: still considered while coming up the architecture.
    35:54 Lucka Slatner Smrkolj: yeah
    35:55 Joe S: That's kind of the goal here. So yeah, I think from what you've said the things
    36:02 Joe S: that sound if anything the most challenging are going through the things that don't come from the website itself for example if you host your Let's say you host something on eventbrite and you want to also track. What was done on eventbrite side than that's a challenge because unless event pride has somewhere to extract that knowledge. You're not going to know about it. So that leads the question to you. Keep it there and try and get something working or do you bring it into the website that kind of thing right?
    36:35 Lucka Slatner Smrkolj: I would prefer to keep it separate so what my vision of this would be to have a very simple. I'm My vision of this um is that we would have a very simple framework. I'm going to say very very naively something like a WordPress or wigs or something like that. You know what I'm talking about just.
    37:00 Joe S: No, yeah, I mean like I know what you're talking about. It's just not going to
    37:02 Lucka Slatner Smrkolj: the basic platform but then keeping everything outside as an
    37:02 Joe S: be able to do this. Yeah.
    37:09 Lucka Slatner Smrkolj: Just linked in between those assets so if any of these assets was to change we can all. to ruin we can always replace it in link it again, so whether I'm thinking
    37:24 Joe S: yeah
    37:27 Lucka Slatner Smrkolj: having all the video content hosted on Vimeo So they can handle the heavy weights of the data not having it saved somewhere and then relying on a local player to display the video that's just stupid in mind in my personal opinion because I foresee more issues. If if it's done like that versus if it's on let's say again. I'm just gonna say Vimeo then.
    37:56 Joe S: Other curiosity, would you mind running me through what those issues would be obviously I've done this for a while. So I'm just curious to your perspective.
    38:04 Lucka Slatner Smrkolj: oh lucky for you is Jake You guys have met John the website developer. Oh, yes, oh right you walked in and I just barged on you like it's yeah.
    38:19 Joe S: yeah I think we supposed to call yesterday and we're rearranging that or is that a different one?
    38:31 Lucka Slatner Smrkolj: No, did you guys?
    38:31 Joe S: that's
    38:32 Lucka Slatner Smrkolj: Talk no. No that was him.
    38:36 Joe S: Yeah, yeah okay.
    38:37 Lucka Slatner Smrkolj: So my experience why pressing a play on your computer is because it's reliant on your individual player that you have embedded in your in your prizes.
    38:49 Joe S: Oh, it's already looking about downloading of file because that right.
    39:02 Lucka Slatner Smrkolj: Would you have to download it no sometimes my experience was the sometimes even when something was was embedded into the website and not linked on to the external one it could cause problems. Sometimes because of your antivirus protection would say no it's a harmful side. Don't do this or it would maybe you missing a plugin or god knows what typically I found that would cause more problems than having a link to a platform like Vimeo and then.
    39:40 Lucka Slatner Smrkolj: YouTube for that matter and If you would have an issue with a plugin then you can easily fix it.
    39:49 Joe S: Interesting yeah okay, I see office effective. yeah, yeah, I'll type that into account okay cool so We talked about that you mentioned WordPress I think there is a fundamental reason why you wouldn't use works or Wordpress or anything like that and that is because you need a fundamental database to do pretty much everything that this website's going to do you're going to be wanting to run Analytics you're going to be wanting to manage memberships to quite a complex degree. You're going to want to integrate those memberships with payment structures all of that.
    40:27 Joe S: Every time you add a plugin to WordPress that plugin usually has little to nothing to do with any other plugins, so if you're like oh cool. We've got a membership plugin that membership program is going to have no idea what any of the other stuff is or how it works or what is for what it does and that's true.
    40:43 Lucka Slatner Smrkolj: absolutely
    40:43 Joe S: Yeah, that's true pretty much any system like that so the way I think this should work is that you start from your structure you start from your your businesses core membership structure which is going to form the like? This is how your business works, then? That's how the website works and then you build on top of that. It doesn't really matter to me for example whether or not your videos take the form of a Vimeo embedded link or something else aside from you know the challenges that each fight provide but you yeah you do want to source of truth and if that sort of Truth doesn't exist anywhere else then it's that's going to be part of the main selling point of the website really is.
    41:26 Joe S: That it is it becomes the source of Truth right so for example one of the challenges with [monday.com](http://monday.com/) is talking to Japanese then I have to basically copy paste the whole database from year to year. So there's no going back over the previous years in order to have good reports for anything like anything you
    41:45 Lucka Slatner Smrkolj: now
    41:46 Joe S: might want to structure over multiple years now the website itself if it becomes this business structure to fundamental level you can extract any report you want. You need to do to get new reports is essentially make sure that the data is tracked and then construct a report based around that data, so to me this is going to be driven structurally upwards, and then you know one of the frontends is going to be the website one of the frontends is going to be the reports one of the front ends is going to be how it becomes how it's administrative lots of different people involved in different forms there. So yeah, I think fundamentally has lightweight as the website would be nice to be it does need to perform some fundamental functions and the fundamental function is going to be based around the structure does that make sense.
    42:38 Lucka Slatner Smrkolj: No, yes, it does however and I see where you're coming from. There's always caveats when we're dealing with something that's off the shelf and doesn't like to talk to each other and that happens everywhere now where I foresee a very big issue potential issue would be that all these education. Let's say as an example
    42:58 Lucka Slatner Smrkolj: all these. Educational programs, they keep on changing and I need somebody who is an analphabet when it comes to designing a website doesn't have to be a website designer per se can be a secretary that can update the website and it's going to bloody work and this happens on a monthly basis, because it's not just the educational programs that are happening. We need to update it them on the calendar. That is now linked in lauded hours furthermore. We're going to have different web.
    43:36 Lucka Slatner Smrkolj: Us we're going to have different workshops. We're gonna have different events and that needs to be flexible that needs to change on a practically not monthly fortnightly session. We cannot afford to have somebody who is a train professional just to do that.
    43:54 Joe S: right, yeah
    43:54 Lucka Slatner Smrkolj: We're currently have somebody who is doing that and it's a bloody long process to get them engaged in everything and that's the time. That's the luxury. We do
    44:00 Joe S: yeah
    44:04 Lucka Slatner Smrkolj: not have it's not so much about finance this is about some having somebody that can skip through the protocol and get it done. at a blink of an eye
    44:15 Joe S: yes, so this is a good point and there is kind of there's two kinds of ways to
    44:15 Lucka Slatner Smrkolj: so
    44:21 Joe S: get think of like a website being easy to update right one of them is you could have something like squarespace or Wordpress which is
    44:27 Lucka Slatner Smrkolj: yeah
    44:29 Joe S: Like I think a lot of people to see these things as easy because they're like oh I can just click on the screen start typing I want an image and drag an image blah blah the you create a template on the fly based on the content you have to upload that some won't work that well in this situation because a lot of the content will be highly structured you want to produce a quiz you're going to want to have all the things filled out for a quiz so I'm not I'm not programming this website but something I use a lot is sanity CMS where what you can do is create a quiz type. You go okay. It needs to have this stuff. You can even make it essentially preview edit on screen if you want it does go to that degree, but essentially it says you need to fill in these things that won't let you publish in those you don't once you fill them all in it's good to go you can like have that as straightforward as you like I've trained dozens of clients on it who are extremely non-technical it works really well, but That the same time it has this level of content structure built-in. I'm not saying we use this by the way. I'm just picking it as an example. It has this level of you can connect to content structure as precises it needs to be to an editing experience. That is not confusing for someone who is non-technical so I think.
    45:51 Joe S: Like well, I hear what you're saying and I certainly dealt with my share of cms. Is that more trouble than they're worth than that regard? I don't think it's necessarily the state of the art that we would have that problem.
    46:08 Lucka Slatner Smrkolj: I understand what you're saying. I do see things differently because I can I already am dealing with the challenges that are currently in there. So just talk me through it. Let's say that I organize a workshop. And I organized it on on eventbrite right so now I've got the link. and I'm not saying that any wordpresses what not I just want to create a button that is accessible to the now through the members hub that they can click on it and they can it's gonna transfer them onto eventbrite and they can.
    46:51 Lucka Slatner Smrkolj: They can register for the event, I don't see that as a in all the forms that
    46:53 Joe S: yeah
    46:56 Lucka Slatner Smrkolj: you've now mentioned no no those forms that that won't happen on regular basis, but organizing webinars like this that will. And I need that to be something that I don't have to bend myself backwards to
    47:04 Joe S: Yes.
    47:10 Lucka Slatner Smrkolj: get it done.
    47:12 Joe S: Yes, so nothing nothing about what nothing about what you said is invalidated by
    47:12 Lucka Slatner Smrkolj: So, I don't know how we're gonna achieve that.
    47:18 Joe S: doing it in fact it would be harder to do through something like wigsaw, WordPress right it would be you would have to have your custom template your template would have to have this content somewhere to live that's not very easy to do or is Insanity you just be like here is where that link is type in the link so yeah, I think we're going to the same place here. It's just hard to kind of explain without having something visual to look at.
    47:42 Lucka Slatner Smrkolj: Maybe you can send me some flow shot flowcharts now. I would love to see that.
    47:46 Joe S: yeah
    47:47 Lucka Slatner Smrkolj: now
    47:47 Joe S: Sure, yeah, absolutely.
    47:51 Lucka Slatner Smrkolj: Yep, thank you for listening because I've got I've got concerns how this could be done without maybe I'm just a little bit better because currently we're really struggling with every kind of update to our website not just changing names. It's anything anything and all them all the content that is currently on the website needs to be changed. every week every week because we've got six cmcs each of the cmcs has got approximately 10 members and each of these members their volunteers and They change hands.
    48:33 Lucka Slatner Smrkolj: So and this happens all the time and that means that every time that some and
    48:33 Joe S: yeah
    48:39 Lucka Slatner Smrkolj: I'm just naming one of the changes just one and it's minuscule but scheme of
    48:42 Joe S: yeah
    48:45 Lucka Slatner Smrkolj: things I need to call on the Secretary or can you do this? Can you do that? Can you do that? Can you do that and it's Just time consuming and I need somebody on the ground who can do that kind of
    48:55 Joe S: I can imagine.
    49:00 Lucka Slatner Smrkolj: adaptation within milliseconds.
    49:03 Joe S: Yeah, so yeah, what essentially what what we're aiming for here is we're going
    49:03 Lucka Slatner Smrkolj: So we can move on yeah.
    49:07 Joe S: to build the tool around the user instead of building the user around the tool which is what workforce fibers. That's what you would end up with with works all wordpressor and everything else if you have something that you've used that you really enjoyed that has this level of power then yeah totally worth looking at there are it's more the one cms in the world. There's just happens to be the one that I've used that has that level of structure and also the level of usability most of them fall down somewhere.
    49:39 Joe S: Um in my experience and honestly like the more you want a tool to do the more basic some of its areas are so if you try and use a Salesforce I have slot to do everything you usually end up with it being terrible at something you just have to put up with it because you're now sold into hubspot. So yeah a lot of my
    49:56 Lucka Slatner Smrkolj: Mmm. Yeah
    50:00 Joe S: philosophy around development and around producing these things is to not have those issues because you can use best-in-class for what the thing is that you're trying to do and you're not locked to right.
    50:12 Lucka Slatner Smrkolj: Now now.
    50:13 Joe S: So yeah, that's kind of the goal of what we're working towards.
    50:17 Lucka Slatner Smrkolj: But even Salesforce they've got their platform and they've got their individual apps that then talk to each other so the thing that really confuses me maybe it's just me is that even if we have off the shelf products that are produced by the same company the same developer. What why wouldn't they do up to each other?
    50:38 Joe S: They do talk to each other but what you find is doesn't matter. How well known it is whether it sells force or something because you're business structure and
    50:43 Lucka Slatner Smrkolj: yeah
    50:46 Joe S: your membership structure is quite unique as soon as you go okay. I need this but also this you're already dealing with baby 50% of the tools will be able to keep up if you're like this and this and this then all of a sudden you end up either custom developing it or you end up dealing with the fact that you can't have that. So this is why I'm saying WordPress is.
    51:10 Joe S: Probably the worst place to start because as soon as you try and connect your
    51:10 Lucka Slatner Smrkolj: yeah
    51:15 Joe S: membership database to your shopping system. It's gonna immediately fall over and you won't be able to go any further the idea of what we're talking about is in order to do this future proofing is we want an architecture that allows for this and this and this obviously you do some work to make sure that you don't make it too complicated for anyone to user understand but at the same time you don't lock yourself into a platform like say Salesforce because at that point you might go okay. There is literally no way to do this one thing that actually is really important and unless you reprogram, Salesforce or go enterprising get
    51:43 Lucka Slatner Smrkolj: hmm
    51:47 Joe S: someone to like program it into Salesforce you're simply not going to have that functionality. So there is a balance always the balances generally just finding the right power like tools that are powerful enough to get what you're trying to go without being so custom or so. Hard to do that. You can't afford to get there or once you get there you kind of
    52:11 Lucka Slatner Smrkolj: yeah
    52:13 Joe S: take the website anymore because it's got too complicated. Yeah, that's where I come in. I'm very good at that.
    52:19 Lucka Slatner Smrkolj: Do you understand? Oh, um I just remembered there's one more functionality that I don't know if Greggs mentioned it, but we do want to have members search so the the functionality that we would like is that we imagine that eight let's say a client would would be looking for a lighting designer. Now we go okay, go hop onto our website and go find one now all the members.
    52:45 Joe S: yeah
    52:51 Lucka Slatner Smrkolj: Would be listed in the above said the ones that I'm aware of the privacy laws, so you can untick yourself or vice versa you can take that. Yes, I want to be listed on on this search engine but also that you would have a simple filter, so I'm just gonna run you through a scenario. Let's say I've got a project in Perth and I need an Mis member um.
    53:20 Lucka Slatner Smrkolj: To do the works so I'm going to open the website. I'm gonna say Western Australia or even if I'm going further down that it needs to be that they need to be in perfect and better not necessarily, but it's up to me and that they need to be as a minimum of miso. Apply these filters there we go it's like a shopping cart kmart same. Um, but it would be very very beneficial because currently there's no search engine. It's ridiculous. It's not ignore that. So we would need yeah.
    53:53 Joe S: Yeah, yeah, I've seen once that yeah, so I think this could almost be like a profile system right where you go okay. You'll remember now. Do you want to finish setting up your profile like on LinkedIn you do that and then yeah, you choose whether it's public private. Maybe you can choose whether you're looking
    54:11 Lucka Slatner Smrkolj: no
    54:11 Joe S: for work or not and then I guess you might decide whether you want inquiry to be
    54:12 Lucka Slatner Smrkolj: yeah
    54:15 Joe S: just giving them giving their email out or if you want to manage the email by having a form on the website or something like that. Yeah, that's all perfectly
    54:21 Lucka Slatner Smrkolj: yeah
    54:23 Joe S: durable.
    54:24 Lucka Slatner Smrkolj: So um in a good reference point for these things. I would say is ields website. I don't know if anybody pointed you in that direction.
    54:34 Joe S: I blp
    54:35 Lucka Slatner Smrkolj: I internationally Association of lighting designers i i a l d.
    54:41 Joe S: I ALD yeah, I'll just open that up.
    54:43 Lucka Slatner Smrkolj: They have something that is very very similar to what we would.
    54:48 Joe S: right
    54:48 Lucka Slatner Smrkolj: quite similar many respects including the members search engine
    54:53 Joe S: So something like designer directory find a lighting designer for lame contains.
    54:57 Lucka Slatner Smrkolj: Yeah, finalizing designer there we go we need that.
    55:01 Joe S: Cool yeah, I've been this yeah odds yeah.
    55:06 Lucka Slatner Smrkolj: It's super easy right. It's very stupid friendly and just Lancing way, we like it.
    55:10 Joe S: Yeah, so pretty old school, but yeah, it's got the contact details. It's got their role or the rest of it on social media doesn't have a yeah okay. Yeah, yeah, that's a good starting point I think. ialt sorry, just had to look at it all going to
    55:28 Lucka Slatner Smrkolj: Of course of course.
    55:30 Joe S: Cool, I'll just copy that in so. When it comes to these the things that we're talking about now where we've got me all this stuff. Is this like a consensus or is this student? Do you have like some of it's coming from you directly some of it's a consensus you talk to other people about it that kind of thing and just get a gauge.
    55:55 Lucka Slatner Smrkolj: I'm sorry, I don't understand the question.
    56:05 Joe S: so like when I've talked to everyone, I'm essentially getting everyone's personal viewpoints like what works and what doesn't would you say there is some of this stuff that is kind of like you've talked within the business and there's a lot of there's been a lot of conversational already about what the right solution would be and this was where you got to on those things versus essentially just
    56:23 Lucka Slatner Smrkolj: Give us you're asking if I did my homework.
    56:27 Joe S: Not homework, but like whether or not you talked about any two anyone else about this in previously and that was the general consensus. Yeah.
    56:33 Lucka Slatner Smrkolj: Yes, no. I'm not going to call it consent yeah. There's not a lot of people in on our board that would be. knowledgeable To that depth.
    56:49 Joe S: right okay
    56:49 Lucka Slatner Smrkolj: I explained what I want. What kind of functionality I would want and when I approached the different
    56:55 Joe S: yeah
    57:00 Lucka Slatner Smrkolj: platforms people generally agreed, but I don't think that I got educated response to that degree. It sounds horrible with the way I just now said it and I'm going to apologize. I don't to be this message told to my colleague far from
    57:12 Joe S: That's that's okay.
    57:15 Lucka Slatner Smrkolj: it, but Greg's portfolio in my portfolio are two of the most. intricate and complex ones
    57:25 Joe S: right yeah, yeah
    57:27 Lucka Slatner Smrkolj: And and that's why it was very hard to have these conversations with anybody else, but we were discussing different functionalities as in Broad Strokes not the exact tool that would deliver home the goods.
    57:42 Joe S: Okay yeah that does make sense cool. So one last thing I would like to cover is
    57:42 Lucka Slatner Smrkolj: that makes sense
    57:50 Joe S: when you say that you are kind of working your this is what you want from the website you're going to be at a high level managing this knowledge base is that correct? but at a high level Would you what would you be using the website day-to-day for if such a thing
    58:04 Lucka Slatner Smrkolj: Exactly, yes.
    58:09 Joe S: like admin both admin and consuming things like bulletins and things like.
    58:17 Lucka Slatner Smrkolj: so what I would be doing as the director of education would be I would be I would love to have access or if my secretary did that that they upload the the research. The research is that were found on a particular topic I would be. All the all the courses that are so all the endorsed courses they shout out the dates when they start the set courses so that would need to be updated and then put into again now linking to the calendar.
    58:56 Lucka Slatner Smrkolj: So if somebody wants to know what's happening in the new future, they could see what's ahead and then.
    59:04 Joe S: Yeah, yeah.
    59:21 Lucka Slatner Smrkolj: That's practically it from. from that end
    59:27 Joe S: Okay, so would you or do an assistant they looking at say the CPD points for you talking about or updating them for example?
    59:36 Lucka Slatner Smrkolj: For me as the end user yes, I would be doing that.
    59:37 Joe S: yeah okay
    59:40 Lucka Slatner Smrkolj: Oh, you're asking as the as the end user what I would be doing.
    59:44 Joe S: Kind of both sorry, it's kind of confusing to try and talk about them both at
    59:46 Lucka Slatner Smrkolj: trying to figure out which I'm putting on so me as the end user if
    59:47 Joe S: the same time. yeah
    59:52 Lucka Slatner Smrkolj: I would be using all of these functionalities. I would go on to the website and I'll go oh, let's see I'm visiting Victorian next month I wonder if there's there's a webinar or seminar or something an event that I could join so I can you know mingle and and network definitely would be looking at so looking at the calendar for sure I would be looking at the past.
    01:00:22 Lucka Slatner Smrkolj: Award winners I want to see what kind of projects receive the accolades definitely.
    01:00:29 Joe S: That's is that on the public side of the website. That's not behind membership.
    01:00:32 Lucka Slatner Smrkolj: Yeah, there are that is that awards.
    01:00:33 Joe S: Yeah. yeah
    01:00:37 Lucka Slatner Smrkolj: I would definitely be interested in in that. I would also love to know when the due dates and submission dates are for the said awards. If they want those would be on it just organizing Mike and in that respect
    01:00:46 Joe S: with
    01:00:51 Lucka Slatner Smrkolj: definitely if there were standards to be accessible on the website hack here. Absolutely, I would love to have some I would love to.
    01:00:57 Joe S: yeah
    01:01:02 Lucka Slatner Smrkolj: It's very hard for me grow very busy, so I would be going on to the website and trying to see if there's any tutorials on a particular subject so trying to filter through that content now we also fantastic thing. Or if there was any any research done on flickering for that matter right now. I'm in the process of I'm starting to work towards might PhD and flickering is part of it. I want to know what's out there if somebody if there's anything
    01:01:35 Joe S: That's cool. Yeah.
    01:01:36 Lucka Slatner Smrkolj: published on that topic. I'm going to retreat and
    01:01:39 Joe S: Try and find it yeah.
    01:01:40 Lucka Slatner Smrkolj: I want to find it right, so that would be another thing and again if I can
    01:01:42 Joe S: yeah
    01:01:47 Lucka Slatner Smrkolj: access that webinars or seminars whatever the event is that I can just simply book myself through the website that would be absolutely business phenomenal vanilla ice cream with cherries on top. Because let's say what I'm doing currently and I'll give you an example that bothered me and I know each individual chapter. They have their respective dinners right and I couldn't I needed to send an email to the organizer of the awards in New South Wales so they can send me an email with the link with the form so I could write down. How many people are attending latter days with this PDF so I sent it back and then they sent me an invoice I prepared and then I don't know so it was convoluted as hell to get myself a ticket.
    01:02:49 Lucka Slatner Smrkolj: so if I
    01:02:49 Joe S: None of that was done through the websites structure like us and Monday or
    01:02:52 Lucka Slatner Smrkolj: None of it none of it none of it each chapter is doing it their own separate
    01:02:54 Joe S: anything like that. Yeah. yeah
    01:02:58 Lucka Slatner Smrkolj: ways god bless them. They're trying to do. They're doing the best. I can guarantee you. They're doing their absolute best but if I could do it through the website. Oh my god, that would be fantastic.
    01:03:12 Joe S: So this seems to be that like something like eventbrite or even a takes would be harder to like people wouldn't bother for this kind of thing is that right or is it something where it's just?
    01:03:21 Lucka Slatner Smrkolj: Oh, no, if I am if I'm going onto the website Say even if I'm an architect that
    01:03:24 Joe S: yeah
    01:03:26 Lucka Slatner Smrkolj: I want to go let's say that I'm not even part of the society if I could there was oh this dinner in New South Wales I'm gonna follow that one so do you know
    01:03:34 Joe S: yeah
    01:03:37 Lucka Slatner Smrkolj: in yourself? It's on that day click here to buy ticket.
    01:03:43 Lucka Slatner Smrkolj: I'm clicking that and I'm going through whatever it needs to happen afterwards whether they're if I'm pride whatever it is pick a platform so I can buy that I can pay it what however I pay for it so zero connected or any kind of paying system. I don't care I want to click on it. I want to pay it and I've got my ticket. It takes me less than five minutes to sort that out right now. It took
    01:04:09 Lucka Slatner Smrkolj: me two weeks. And people don't didn't even know how to buy them. I knew that I needed to follow up because if they didn't get the rmsvp email. And I'm on the on this side of the fence, so I knew what to do, but it's nobody
    01:04:20 Joe S: That's it.
    01:04:26 Lucka Slatner Smrkolj: but I had to call around to ask when their date is for the dinner.
    01:04:31 Joe S: Yeah, yeah gosh you.
    01:04:32 Lucka Slatner Smrkolj: That was not that wasn't there so things like this. They might sing a little bit inconvenient, but that's what makes life. Great, this is where you realize your quality of life.
    01:04:44 Joe S: Yeah, yeah, I was just wondering whether the roadblock was in entering the entry
    01:04:45 Lucka Slatner Smrkolj: no
    01:04:48 Joe S: into the website or whether it was entering the entry into eventbrite or both only the it sounds like it's mostly that the website is just very hard to update and also hard to use as a like the calendar for example the links don't work.
    01:05:00 Lucka Slatner Smrkolj: all of the above
    01:05:01 Joe S: I'd seen that.
    01:05:02 Lucka Slatner Smrkolj: all of the above
    01:05:04 Joe S: Yeah, okay.
    01:05:05 Lucka Slatner Smrkolj: So but so if I was as the end user how I would like to do this. That's how I'd like to do it also. I would love love to pay my membership through the website. Not that I have to save an email so I can then look I'm I'm traumatized by this
    01:05:17 Joe S: Yes.
    01:05:22 Lucka Slatner Smrkolj: right now pdsd, absolutely.
    01:05:24 Joe S: hmm This is somewhere where it's [underlay.com](http://underlay.com/) wasn't working so well, because it
    01:05:30 Lucka Slatner Smrkolj: functionality, yeah
    01:05:34 Joe S: still had this manual process of managing zero sending out payment and also is once a year and all the rest of it right. Yeah.
    01:05:42 Lucka Slatner Smrkolj: You're asking too much. I don't know I don't know why they couldn't I'm sure
    01:05:44 Joe S: Yeah, okay.
    01:05:47 Lucka Slatner Smrkolj: absolutely 100% sure that it had something to do with functionality into that. I don't know but This is how it end user experience. This is how I want to do this because I
    01:05:57 Joe S: yeah yeah
    01:06:00 Lucka Slatner Smrkolj: don't have time to be doing this ping pong impacts and forwards and god knows how many tickets we couldn't sell for these events because it was just too convolutely people didn't know or couldn't figure out how to get there. so And yes, they will have to be regularly updated.
    01:06:16 Joe S: Oh Actually That is a very good question if you have some insight, so let's say where we've got a few different things going on we've got events coming up we've got donors. We've got Awards all of this different stuff is there. I'm going to use the word canonical is there a list of the different. Types of information source of Truth anywhere because I've heard a lot but I don't know what I've got as comprehensive so I'm talking for example. You know like a dinner event is just an event but it's also good to know that there is a dinner event. There's going to be everything that you could buy you can even buy sponsorships presumably if you're you know a company. Is is there a list of this
    01:06:59 Lucka Slatner Smrkolj: yeah
    01:07:02 Joe S: anywhere or because otherwise what I'm basically going to do is just go through every conversation I've had And go through the website list everything I have seen so far and that becomes the list.
    01:07:15 Lucka Slatner Smrkolj: Yeah, I don't think there's a comprehensive one not this stage.
    01:07:18 Joe S: okay okay Because basically what I say before is that I'm thinking it kind of falls into different categories in terms of like you will have something that is a subscription I pay for it on a regular basis, so something like a membership would become a subscription and then you can have a product like a ticket that is just something that you buy then you have a member but your there's a several different gods of member and they all have their different processes attach.
    01:07:52 Lucka Slatner Smrkolj: yeah
    01:07:53 Joe S: You're going to have events if I haven't already. Oh, yeah, you have events which aren't quite products then linked and then whether or not you see the event as a public event and probably you know a member event or if it's in your chapter, so yeah, just kind of grouping these together into category, so we go okay the core of it. It is this and then figuring out the different versions of what that could be.
    01:08:16 Lucka Slatner Smrkolj: yeah, it's I love this work.
    01:08:22 Joe S: So it's yeah, it's I think it's the foundation right. This is where everything needs to start and be built back up from Cool awesome. Thanks so much for your time. It's been really good to talk to you. I've got so many notes so yeah once I don't have I'll talk to I'm going to try and talk to a few more people you mentioned Jake
    01:08:42 Lucka Slatner Smrkolj: Yeah, I think it would be a good idea for you to talk to Jake with now. I wasn't expecting him.
    01:08:50 Joe S: yeah
    01:08:51 Lucka Slatner Smrkolj: Do you have it in your schedule to talk to him?
    01:08:54 Joe S: Like as in right now. Yeah, I could do that.
    01:08:56 Lucka Slatner Smrkolj: I don't know what his plans are but. Do you have a couple of minutes you walked in you might have to talk to John about the website your ideas your requirements. I don't have them in an organised format to do that right now. I would be
    01:09:17 Joe S: That's all right.
    01:09:18 Lucka Slatner Smrkolj: pulling things for everywhere. Let me get an organized and then we'll have chart.
    01:09:22 Joe S: cool awesome
    01:09:23 Lucka Slatner Smrkolj: Is it?
    01:09:27 Joe S: awesome
    01:09:28 Lucka Slatner Smrkolj: You got that.
    01:09:29 Joe S: Yeah, so I need an email address and then I'll follow up with that.
    01:09:34 Lucka Slatner Smrkolj: Okay, I'll send it in in an email.
    01:09:38 Joe S: Awesome, thanks so much and also you said you had a skept so if you don't mind selling that through I'll make sure I've got that too.
    01:09:43 Lucka Slatner Smrkolj: You haven't seen it okay.
    01:09:47 Joe S: I don't think so, yeah.
    01:09:51 Lucka Slatner Smrkolj: It's mainly about. The the layout what I thought would be there, but it also when you look at it. It kind of gives you an idea of the requirements, but we've discussed them, but it's just a quick kind of
    01:10:09 Joe S: Cool awesome yeah, yeah, I'll Be Yeah bringing everything together in the next few days, so it's yeah, really good.
    01:10:17 Lucka Slatner Smrkolj: Thank you. Thanks so much.
    01:10:18 Joe S: Awesome, thanks so much you soon.
    01:10:21 Lucka Slatner Smrkolj: Jesse but
    

## Vessi

- Notes
    - Conference committeee
    - Oreganised 2x so far, one in auckland coming soon
    - At the moment conferences are managed by a conference organiser with a separate conference website
    - Conferences managed from a PCO level not to do with the website
    - Would be good if it can be syncronised in future
    - Conference organiser is  Icon Conference and Event Management Ltd.
    - https://www.iesanzlightinfocus.org/ - approx 16 pages?
    - Website to remain independent because its being managed as its own thing
    - Marketing ticket sales etc all managed by committee + icon
    - Next time will involve a different PCO
    - Currently website content is proposed by committee
    - Completely separate from eventbrite
    - If the website can handle bookings instead of pco, then pco can still have input but bookings can be managed by the website
    - eventbrite might be an option, would need to consider if this is a good solution
    - 
- Transcript
    
    # PXL x IESANZ - Secretariat
    
    Meeting started: 29/10/2025, 14:01:18
    Duration: 79 minutes
    Participants: Ann, Joe S
    
    [View original transcript](https://app.tactiq.io/api/2/u/m/r/ujLQMxDavyINtxIcr9af?o=txt)
    
    ```
    ## Highlights
    
    > 09:30 Ann: Mmm. That's an issue.
    
    ```
    
    > 09:46 Ann: That was the number one biggest issue. We had with the current website that
    19:41 Ann: really really important New South Wales it's New South Wales slash act.
    31:30 Ann: Oh, that's where that is. Oh, I've actually been having this issue. That's perfect. Thank you for the
    38:10 Joe S: what. Yeah, you can see you know what was changed in previous versions on this particular one. We have a form where people are submitting documents or submitting text and you can actually submit two here and review it in here to
    38:32 Ann: Actually in okay my biggest bugbear. I guess is with the membership um. I have this issue where I cannot upload documents for example to members fold
    54:20 Joe S: cool awesome, I think there is Yeah, something I was hoping to Jeff about is that the reports for example these things currently they're done and the same way that the records are managed three monday.com the reports are done through monday.com with a dashboard and the issue with that is there is no year on year.
    55:25 Ann: That that actually is an issue with the database as well. You can't select.
    > 
    
    ## Transcript
    
    00:00 Ann: Hi, how you going?
    00:01 Joe S: I'm good, how are you?
    00:03 Ann: Not too bad at all. You're Joe I take it.
    00:05 Joe S: I'm Joe yes yep.
    00:07 Ann: Excellent on the right. I'm on the right meeting that's amazing.
    00:13 Joe S: yes, yes that
    00:18 Ann: indeed, oh my goodness and you're in New Zealand
    00:22 Joe S: That's correct yeah, and I are you in Australia western.
    00:22 Ann: so right yeah in the Moreton Bay area of just slightly North from Brisbane in Queensland
    00:35 Joe S: Oh cool, we're gonna be an oppington.
    00:36 Ann: Yeah freezing today actually.
    00:39 Joe S: Yeah, it's a little show hey that's like trying to be spring but not already getting there. I think they're getting similar weather. I mean we've had storms and they're in the south island last week and then we're here today with some of it comes across from Australia and then sometimes it doesn't.
    00:57 Ann: Oh right okay. Yeah, we've had quite a bit of rough weather the last couple of days and it's actually we've gone through about 38 degrees and it's hit about 21. So it was a big drop. So just getting over that.
    01:10 Joe S: Oh jeez, yes. Yes, I imagine it gets extremely hot where you are.
    01:16 Ann: It's sometimes. It's not the hate here. It's a humidity which is you can knock you around a bit but yeah, we get there.
    01:22 Joe S: yeah Yeah, you still are longed.
    01:25 Ann: Thanks a bit dryer.
    01:27 Joe S: Yeah, another life. I used to live in on Fiji and it was just yeah, I wasn't it
    01:32 Ann: oh
    01:33 Joe S: didn't get to hot but it was like 100% humidity all the time like it was maybe maxed out 32 33-ish didn't really get hotter than that there is Australia's Got
    01:41 Ann: Yeah, yep.
    01:44 Joe S: all that and more.
    01:47 Ann: yeah, and it's just
    01:48 Joe S: Yeah, yes.
    01:50 Ann: I love the air conditioner.
    01:52 Joe S: Kind of imagine memorable Christmas and Port Douglas which was quite nice. Yes very very hot.
    01:58 Ann: It would have been up there absolutely.
    02:03 Joe S: Til so I imagine you've heard a bit about me and what I'm up to but I haven't.
    02:07 Ann: Not really, I actually don't know very much at all. So you're going to have to fill me in.
    02:14 Joe S: That's all good okay, so yeah, let's start there I suppose so I'm essentially project managing or at least the initial project manager for this next step of the website. So what I'm currently doing is interviewing everyone kind of gathering everyone's perspectives. Pain points things that they'd like to do better things they want for the new site all of that kind of stuff but kind of with a view to turning that all into a plan so I'm going to synthesize everything and turn it into a plan, but yeah at the moment. I'm still just trying to understand everyone's roles and it kind of what the website looks like from everyone's different perspectives and then
    02:54 Ann: Yep.
    02:55 Joe S: yeah, what works and what doesn't so I can start putting that together.
    02:59 Ann: gotcha okay, I probably do most work with the current website that we have so I
    03:04 Joe S: Yes, that's why I was like I need to talk to you.
    03:08 Ann: Yes. So I sort of use I get into the backend a lot because at the moment. It's membership and and the chapter landing pages. That's all things so and emails get sent out from there. The occasional sort of payment set up for events that sort of thing not from
    03:31 Joe S: yeah
    03:33 Ann: membership anymore. But yeah, it's it's clunky but usable. On the only one that you're with it.
    03:46 Joe S: Yeah, yeah, I have been kind of it's funny because like different people seem to have very strong opinions are like oh we don't do emails from there and I'm like well. I've been in the advent and I don't think that's necessarily true. There's buddy want people think happens first one actually happens sometimes.
    04:02 Ann: Yeah, I think people who don't use it. At all would find it absolutely overwhelming but um because we use it on a daily basis. Will I do it's not quite as overwhelming.
    04:16 Joe S: Yeah, yeah, I can imagine it you get used to it right you can get you most
    04:21 Ann: You do yeah.
    04:21 Joe S: things in the end. Yeah, so I guess I want to talk to you.
    04:25 Ann: What what's the new website actually gonna incorporate like what I actually don't really know much about it at all. I'm how it's going so yeah.
    04:33 Joe S: No right. Yes, so I'm still in the research phase but I've actually a few won a little Stick preview.
    04:42 Ann: Okay, oh, that'd be good.
    04:44 Joe S: I started to put together let's call it a mind map which might be a good way to
    04:48 Ann: Yep.
    04:50 Joe S: kind of start this conversation because this is where I was I started this this morning so
    04:59 Ann: my god
    05:02 Joe S: Saying it at a very very early stage so it's more complicated than I wanted to
    05:04 Ann: yeah
    05:07 Joe S: be by the time other people see it but anyway.
    05:10 Ann: mmm
    05:13 Joe S: Let's look at a used to this as well. I only started using this this morning you saw this anyway, so what this is is me starting to plot out the different areas of the website and what it all does. What what I kind of want to do is arrange
    05:25 Ann: Yep.
    05:31 Joe S: it in such a way that everyone can look at it kind of go that's my bit does it do what I want. So let's go into the middle so what I've got and how I've split it up is we've got the admin area and then this is largely going to be you've kind of got different business processes. You've got a lot of membership admin right because a lot of your business is based around your membership structure, how it gets paid.
    06:00 Ann: 100% if
    06:01 Joe S: So I kind of broken that all off here and started to like break it down into like you'll have different processes for all of these things and then like and I started to write down your different kinds of members type making this little tiny. It's going to be fun but Yeah, and then you know reports which currently go through [Monday.com](http://monday.com/) I'll probably talk to you a bit about just kind of starting to break it down and get the different areas nailed down a little bit. So this is like someone logs in to their members area they go to their account. What can they do? If you go to the education area, what kind of things are in there and then just starting to plot out like for example the 2025 conference as it's own separate website so this is actually separate from any future plan even though in theory.
    06:51 Joe S: We're building a site to replace this should be 2026. And then we've got marketing so Facebook now looks linked to new on newsletters which as you just said come out from the website. We've got hosting which I'll get to we've got potential store and that's currently as far as I understand it mostly for buying sponsorships and advertising because tickets are managed through or should eventually be managed through eventbrite. That kind of thing then we've got.
    07:17 Ann: Yep.
    07:23 Joe S: Where is it so I've got we're going to have to figure out a payment system so members can pay for things and then that goes stripes in zero so currently what you're doing. I believe is your payment system is manually run by going to [monday.com](http://monday.com/) seeing what's where things are at covering back here and creating an
    07:37 Ann: Yep.
    07:40 Joe S: invoice and all sending out a payment link so.
    07:43 Ann: Okay, so they'll be able to with the invoices still go out yearly or is this something that people have to log in and renew the membership again because I don't think that went down very well.
    07:57 Joe S: I was that how it was doing um yeah.
    07:59 Ann: Not when you have to rely on people to renew their. membership didn't yeah, it was just like yeah, but
    08:04 Joe S: like on time Yes, yes, so this is this is again. This is a big part of it. So like I feel like stripe stripe can do things like keep credit cards on record and send out bills as they come through that or a director debit kind of system the but Jeff
    08:20 Ann: Yep. right
    08:26 Joe S: I talked to Jeffrey was at hands 360 and he was basically like are the strike fees are huge and I'm like yes, but if you're doing this manually and you're trying to compare that to someone's actual time that you'll spending yeah. It might be worth it especially because strike and zero connect together and they can also connect to shopify and they connect to so many other things so.
    08:48 Ann: Okay, that's handy.
    08:50 Joe S: Yeah, so I was thinking and also strike could potentially connect to eventbrite and things like that so having one place to be like okay did any payments fail or all your customers have their payment details in one account like in stripe that would be good, but yeah, that's tvd. I haven't really talked any more about
    09:04 Ann: yeah At the moment, I don't I don't think we keep.
    09:07 Joe S: it.
    09:10 Ann: We don't keep payment details we don't keep car detail or anything like that at the moment. It's a manual send everybody's invoices out and on the first of July
    09:16 Joe S: right
    09:20 Ann: and everybody just you know clicks on a link on the invoice and pays at that way, so that's how it's actually currently done so
    09:28 Joe S: Yeah, and then there's GST so a GST is a big one. Yes.
    09:30 Ann: Mmm. That's an issue.
    09:36 Joe S: Yes, that's something to cover because that's almost like your paying to and from in two directions. You know like you're having to calculate GST as if the
    09:42 Ann: Yep.
    09:45 Joe S: business is in two different locations.
    09:46 Ann: That was the number one biggest issue. We had with the current website that
    09:51 Ann: we've got it. Just could not. it couldn't do two separate premiers could only do the Australian GST didn't have the capability to have the New Zealand GST Or so it was yeah that way.
    10:03 Joe S: Yeah, that's right. Yeah, so that is that's kind of yeah. I've got that on my mind and whether that's two stripe accounts or whatever that ends up looking like.
    10:15 Ann: they could
    10:17 Joe S: Yeah, that's kind of where that'll get to but yeah at a super high level the other thing that I'm thinking might be good is essentially between your like you and the people around you and the chapters and the people around the chapters
    10:35 Ann: Yep.
    10:35 Joe S: kind of coming up with a way for them to. Naturally create a feed of content that then gets kind of disseminated through the website without anyone having to go well this goes on this page. You know like deciding who gets their five minutes on the home page or anything like that shouldn't really be. Like that shouldn't take too much time because if it does then it doesn't get updated and then your homepage never you know it's updated and all the rest of
    10:57 Ann: current
    10:59 Joe S: it so since you'll probably be using this this might be a good time to tell you what I have in mind which is basically that things behave like a little bit like a social media feed where you make a post and you select where the post goes so if you're like okay, we are having an event and this event is for this chapter and in fact. It's not even a public event we don't want public to know about it.
    11:24 Joe S: Maybe you have a channel called I don't know wa I that's yeah as you say you
    11:28 Ann: Yep.
    11:30 Joe S: have a channel called wa and then you select that and you post that and without doing any extra work the only time you'll see that is if you're. In a situation where you're seeing that channel and the same could be true of
    11:43 Ann: Let's change.
    11:44 Joe S: public the same could be true. Yeah. I think that could be a nice way to get everyone. Able to you know start publishing content regularly without having to go. Oh, you know to get something on the calendar. I have to go all the way through this process and even that it really work blah blah.
    11:58 Ann: Yes, oh my god, that would be amazing. At the moment we use buffer for all yeah and some chapters had their own and we have the money it's like it's just chaotic. So yeah streamlining something like that would be fantastic.
    12:16 Joe S: Cool I mean so could you say you're using buffer especially?
    12:20 Ann: Yeah, yeah.
    12:23 Joe S: And it's not very good.
    12:25 Ann: that was and we use that for well actually most is members pretty much unused LinkedIn That's their number one go to that all Facebook but very rarely most most of the
    12:34 Joe S: yeah
    12:40 Ann: time if I get a task to do from an ias member. They just say LinkedIn because it's just purely business, so that's the
    12:47 Joe S: Yes.
    12:50 Ann: that's the one that they want to do but I think Facebook would be another one that Twitter no one ever mentions that words so yeah, it's either Facebook or Twitter that LinkedIn
    13:04 Joe S: yeah, Twitter unfortunately is no longer Twitter
    13:09 Ann: What's that?
    13:10 Joe S: And I think it's slowly die. It's been it's been renamed to x by Elon Musk yeah.
    13:15 Ann: That's right. Yes.
    13:17 Joe S: And now they're called I don't know what they're called anymore. They're not
    13:17 Ann: I think so, that's too young but apart from that.
    13:20 Joe S: called tweets, but yeah, I think everyone's moving off that now.
    13:32 Ann: The only thing that I would like the chapters to have access to would be the landing pages so that they can. Like put their own you know tech event things coming up and that sort of thing so you. 've been on the website they have each chapter has your own landing page where they have? What do you call it like take events awards and where they actually advertise for their own chapter.
    14:06 Joe S: yeah And would you say so the chapters? I've been in some ways. It's deciding whether the chapters are like. A category or whether you go in and you filter things by chapters slowly the website is just filter Naturally by the chapter or in.
    14:26 Ann: It is definitely filtered by chapter. Because people in South Australia really are not interested in what's going on in Queensland like. Just not interest year.
    14:37 Joe S: yeah So this could look something like this. So you go into your chapters to find your member directory instead of having a big. High-level member directory is that kind of what we're thinking or is it gonna be more like? Over directory is just one of these.
    15:00 Ann: When you say member directory, what's that?
    15:01 Joe S: I'm just kind of So currently, I don't think it's really working all that well, but in theory. There's this idea that you'll be able to.
    15:12 Ann: oh the membersearch
    15:14 Joe S: yeah, do the
    15:15 Ann: I looked this is a bone of contention for me. I really hate this membersearch there. Oh, it's awful because What they looking to do is have okay, let's start the very bottom. When you join you elect whether you do or do not want to be visible on the website to start with right if you do and you're a corporate member then you
    15:40 Joe S: Yes. yeah
    15:44 Ann: should be able to be found on the website by a corporate search however the way it set up on this one and I have tried so many times to get this change is. I'd like to see is for instance Becca in New Zealand I would like to see one. Corporate box for Becca not every single member and then when you open that box the members are there.
    16:12 Ann: So nine times out of 10 people are looking for an organization, but you can also search by members um because as it stands at the moment on the website in the corporate search every single member comes up so Beckham may have eight books which is. Really annoying so one box per company with then you open up and you see that the members that okay there are eight members that are in the back of corporate.
    16:42 Ann: Now a spa as the member search that is far as I'm aware. They only want members who are of the mies level or higher to be able to be surged because they're the only ones that can sign off on things.
    16:57 Joe S: Hello, what? And they want them to be on that level and also opted in right.
    17:09 Ann: sorry
    17:10 Joe S: As I also want to be able to have those members decide if they want to be searchable or not. Yeah.
    17:14 Ann: Of course yeah, yeah absolutely 100% because some people just do not want to be appear on the website so we have to give them that option that privacy.
    17:22 Joe S: Yeah, cool. I think I understand that so it's kind of more like a well. Let's call it directly.
    17:33 Ann: hmm
    17:34 Joe S: and then
    17:35 Ann: That only applies that directly only applies to corporate and also Mia's. Or higher at that, that's how it's they want it set up but I would like it to be
    17:46 Joe S: yeah
    17:49 Ann: corporate opener box and these members and then the MIF just holist.
    17:55 Joe S: So currently it's like.
    17:58 Ann: butcher if possible
    17:58 Joe S: Yes, I currently it's like this for you want it to be more like hold on. More like this. So you surgical and then?
    18:09 Ann: No, no, they're two completely separate entities.
    18:14 Joe S: So they are separate so like this.
    18:14 Ann: So corporate every member on that yeah, yeah, that's better yep.
    18:19 Joe S: Yep, okay.
    18:20 Ann: So because and the MIS and the corporate. need to be One step further split into chapters, so it would be okay. I'm looking for a corporate member in the New South Wales chapter and then it comes up with the corporate available in New South Wales so they're not trolling through. It's very separate by chapters every opportunity he can.
    18:45 Joe S: Yeah, yes, I think that's gonna be almost like the chapters aren't they are and they aren't a hierarchy it's almost gonna be like picking your currency for a website like you just browse as if you're part of that chapter.
    18:59 Ann: Yeah, well, they have because I set up the way the organisation with Society set up is they have the board now the board are all part of a chapter and the chapter is run like each chapter is run by a committee. So they don't want to have anything like money does not change borders. Nothing borders are borders and that is the end of it and yeah, there is no crossover.
    19:29 Ann: 100% no crossover, so they want to see that in searches. They want to see it
    19:31 Joe S: yeah
    19:36 Ann: every on landing pages. They want to see it everywhere so chapters. That's
    19:40 Joe S: yeah
    19:41 Ann: really really important New South Wales it's New South Wales slash act.
    19:48 Ann: and then the next chapter is who we got there then we've got Victoria Tasmania there's six all together and then South Australia Northern Territory
    20:02 Joe S: They loved together.
    20:04 Ann: yep, South Australia Northern Territory and then Queensland
    20:09 Joe S: Cool and then Queensland and that's all okay.
    20:11 Ann: Yep, yep, so there should be.
    20:13 Joe S: So here's here's the thing like yes, they might want to be separate but then on the homepage for example you kind of want to have a general feed of what's happening I imagine.
    20:23 Ann: not no
    20:26 Joe S: What happens if you haven't logged in and you just arrive and like does everyone do we basically almost want every chapter to have its own website?
    20:35 Ann: Have you seen it on the actual is? Website, have you looked at it?
    20:43 Joe S: I've got it open right now, so I'm looking for example awards and then it
    20:45 Ann: yeah
    20:47 Joe S: pre-selects New Zealand I don't know what it does.
    20:50 Ann: Yeah, that's how I want it. They were wanna absolutely 100% separate. So that when you go on to the website hang on let me open it up myself okay, so we have yeah chapters. See there's about membership Awards chapters.
    21:07 Joe S: yeah
    21:08 Ann: That's how they want to very separate there is no crossover. And it will they will tell you 100% it has to be that way. Because they had their own separate events. I'm telling you they had their own separate events. They had their own committees. They had their own funding they have their own Awards everything is separate.
    21:32 Joe S: So basically assuming that everything that we talk about throughout all of this
    21:37 Ann: huh
    21:37 Joe S: is going to be broken down by chapter except for this very high level admin stuff because that's actually got to go through you.
    21:44 Ann: Yep.
    21:46 Joe S: Um but anything else like education events. marketing is that
    21:53 Ann: Awards definitely by chapter
    21:56 Joe S: yeah
    21:56 Ann: And internet these in the international Awards but I'm not really sure if they want that on. On the website at all.
    22:05 Joe S: All right whether or not maybe I'll just make a box for that.
    22:10 Ann: Yeah, just question that one because that's a it's another thing that they do say I don't know whether they want that they do have a centralized calendar where every that's also on the website as well on the top line there and that's literally a calendar and it includes all chapters. And then the events. All events get put in one spot but also on the chapters landing pages, so it's actually duplicated. And that's how they want it.
    22:47 Joe S: right, so Something like this and then the same for the events the events can also.
    22:55 Ann: Yeah, it's it will be duplicated yep, so if you have a look on the website that is now there's the events title and it's if you click on upcoming events. That's just a like yep yep. So that is just a rundown on and you can see everything separated by chapter. So if you go now on to say the New South Wales or the Queensland or whatever chapter you'll see that exactly duplicated.
    23:28 Ann: on the
    23:29 Joe S: Right. Oh, so if I go to one of these like this.
    23:31 Ann: So if yes so if you now go to chapters and get onto yep there you go, so yeah, it's it's really messy and they never updated at no I have to do it and it's really annoying but yeah as you can see even New South Wales and act like should be separate. It's really really annoying but that's the way it is and everyone's used to work
    23:46 Joe S: hmm
    23:50 Ann: because members don't want to waste time scrolling through information that does not affect them. So it's even like with our bulletin that we used to have which we don't have
    23:59 Joe S: yeah
    24:04 Ann: anymore and I don't know if it's coming back. I always wanted hyperlinks because people are going to jump from they're going to go look I'm in Western Australia I have no I really don't give a s*** what's going on in Queensland so they will jump down to their chapter to see what's going on information blah blah. So it's very separated.
    24:24 Joe S: yeah Yeah, yes, so okay. Here's what I'm thinking is I'm just going to get rid of these. There will have to be to some degree of public website, so we've talked about having an old Calendar all events already.
    24:39 Ann: Yep, yep.
    24:43 Joe S: so what I've done is I've gone chapters up here and this is what you see under the chapters and we can bring that out yeah and then what we do is we also talk
    24:48 Ann: Sure, yeah.
    24:52 Joe S: about what the You know like does the directory live under the chapter like this. Is that what we're gonna do? Or is there going to be or is there going to be a general directory that you go to the website?
    25:07 Ann: I I would I would say it would be a general directory. Which then gets broken down into chapters because what you've Got to Understand with the directory it could be somebody who's not a member who is coming to the website to look for. Someone in their state.
    25:30 Joe S: yeah
    25:31 Ann: So what they're going to do is They're gonna go I need to find a corporate member or I need to find an Mis because Mia's. Can actually sign off on Projects so if you're a company who needs someone who's Mis to sign off on a project you're going to look in your state. You're not going to look in Queensland you're not going to look anywhere else if you need someone in New South Wales you need to go straight to I need. Someone so I'm going to go to the directory. I look for New South Wales act.
    26:03 Ann: And then I'm going to look for Mis members, so it's just making that step down all the time as like. If you know what I mean lights narrowing down what they're searching for?
    26:14 Joe S: Yeah, I got you. So this is like a filtering system that we're talking about for
    26:16 Ann: yeah
    26:19 Joe S: the director itself will be available from even when you're not logged in or
    26:19 Ann: yeah
    26:23 Joe S: anything like that.
    26:25 Ann: So it's yeah. It's just gonna be simplified because the way it set up now. It's really bloody
    26:28 Joe S: cool
    26:32 Ann: awful.
    26:34 Joe S: Yeah, and this is the thing is like do we.
    26:35 Ann: it's
    26:38 Joe S: We need to find the simplest possible version that allows for logged inverse
    26:41 Ann: correct
    26:43 Joe S: lockdown content and also by chapter content and there's only really two ways to
    26:45 Ann: Yep. Yep.
    26:51 Joe S: do that one is every single combination has its own page which seems like the the situation you have now which doesn't sound great and the other one is you have kind of like I was saying before like when you pick a currency on the website Everything kind of just a ranges itself based on based on. What chat to
    27:10 Ann: mmm
    27:12 Joe S: you have selected like the location.
    27:15 Ann: Yeah, yeah.
    27:17 Joe S: I think this I think I saw somewhere it says like you click in awards and it pre-selects New Zealand now. I don't know if it does that because New Zealand is the default. Or because we decided I was in New Zealand I think it just decided.
    27:27 Ann: It's just the front it just starts at the front and then you just pick where you
    27:33 Joe S: okay
    27:34 Ann: want to go.
    27:35 Joe S: Yes, so what we could do is something like. Imagine this bar this bar. Here is actually at the top of the screen and then you can select. The chapter to your browsing by and then everything else just filters itself by that.
    27:53 Ann: Yeah, yeah.
    27:56 Joe S: I think that that honestly sounds like it might work.
    27:58 Ann: If you keep honestly, if you keep that mentality of Everything's each chapter is separate.
    28:06 Joe S: yeah
    28:07 Ann: Then I think that would be.
    28:11 Joe S: Do you happen to have?
    28:11 Ann: a great
    28:13 Joe S: So, I'm just going to quickly scan. So this is a global page so about it needs
    28:17 Ann: Yep.
    28:19 Joe S: to be. Needs to be global.
    28:27 Ann: Yep.
    28:30 Joe S: What are some membership?
    28:32 Ann: Membership is pretty much for new people who are looking to become a member and people who are members and want to upgrade. So that's one just the that's Not chapter.
    28:41 Joe S: Yes. Yes, so those.
    28:48 Ann: Like dependent here.
    28:51 Joe S: Yes, there's almost like there's it's a knowledge based type there right no one. It's like membership. Guide I think maybe that's what that would be called and then you can.
    29:04 Ann: Yep.
    29:05 Joe S: Find what you need to find from there.
    29:07 Ann: Yep.
    29:10 Joe S: Cool and then there's a whole bunch of forms. Sorts this Awards entry form, so that would come here.
    29:16 Ann: Oh good. Yes, I change every year to. awards's Oh my god, if we could simplify that and and make it yeah look the Awards as awful. It's an awful setup and Because there are two different prices for people who are members and people who are not members. So and then there's early bird pricing and you know it's just
    29:44 Joe S: Yeah, yes short training long sculptures publications.
    29:48 Ann: Not have anything to do with the wards if I can help it.
    29:57 Joe S: long training courses scholarships and publications
    30:04 Ann: Yes. And yeah the wording has to be absolutely precise. There is no yeah as far as the education goes how it's set up now is 100% how
    30:12 Joe S: yeah
    30:19 Ann: they want to.
    30:21 Joe S: Yes, I would yeah, I was talking to Luca Lucia I'll get that right. Yes, I say
    30:24 Ann: Just yeah.
    30:30 Joe S: that like there's PDF so they really don't want anyone else to be able to see the PDFs in this kind of thing.
    30:36 Ann: It is really yeah, it's difficult.
    30:40 Joe S: That is a bursary so write this.
    30:42 Ann: The bursary yeah, that's the scholarship.
    30:45 Joe S: Okay, so that's actually under scholarships.
    30:47 Ann: Yes, yep.
    30:51 Joe S: How this thing works? Hard to tell the people watching they go right.
    31:02 Ann: Yep.
    31:04 Joe S: for the videos and then we've got
    31:04 Ann: It's the Guinness in are you in yep?
    31:08 Joe S: Oh, I see and then yeah, we've got publications. So we've got publications here.
    31:15 Ann: Yep.
    31:16 Joe S: and then Within publications we have started this.
    31:21 Ann: I'm not really sure that there are many publications. Oh, yeah, there is a few.
    31:29 Joe S: So that's the way.
    31:30 Ann: Oh, that's where that is. Oh, I've actually been having this issue. That's perfect. Thank you for the
    31:40 Joe S: All I try to find that.
    31:40 Ann: Oh, we've got a new standards document and everyone's like oh my god, where do we put it? Where do we put it? It's like I'm sure there's somewhere found out okay.
    31:51 Joe S: Good, there's a place for it.
    31:53 Ann: Yeah, I found it um yeah that that's near there's a lot of stuff that just is
    31:56 Joe S: was nothing
    31:59 Ann: not relevant.
    32:01 Joe S: It's quite a t203.
    32:03 Ann: Yeah, leave that oh my god. Don't touch it the other yeah that it's
    32:04 Joe S: yeah
    32:12 Ann: Coming webinars here and I'm previous webinars you have to be a member to see. That's part of membership. Yeah, the online store there's not really much in that. It's we do have a sporting publication. It's quite outdated, but it's there and the job advertisements people can. If I've got any jobs, but that's really not. Used much which is said, but yeah.
    32:45 Joe S: Are the jobs board?
    32:47 Ann: Yes, yeah.
    32:51 Joe S: Oh, there's a list of jobs and would that be my chapter or would that be?
    32:55 Ann: No, that's just a blanket thing. Yeah.
    32:58 Joe S: in general basics privacy policy I guess Cool, would you have him to have so that I have not been able to get access to this I've got the admin but I don't have the membership area which I think might be very useful.
    33:25 Ann: Okay hang on sick. So what do you need access to?
    33:29 Joe S: the membership areas so this whole member content thing
    33:33 Ann: Okay, let me just get into the admin and I'll give you. 10 second adminated admins Okay Joe I'm going to Swan what's your email address?
    33:57 Joe S: Jayo put it in the chat with that looks shall we happy?
    33:59 Ann: Oh, yeah.
    34:01 Joe S: [joe@pxl.nz](mailto:joe@pxl.nz) [joe@pxl.nz](mailto:joe@pxl.nz)
    34:01 Ann: I'll copy and paste it the way I know I've got a right.
    34:03 Joe S: okay
    34:06 Ann: Perfect, how are you okay? And what I might do? is And this will be your password.
    34:31 Ann: JoeS
    34:34 Ann: Two seconds I'm nearly done a what do you have note that's not going to be the password. fine it's not happy with that so I'm going to I'll just put your email addressing for now. It should be happy with that. Sorry about this.
    35:04 Joe S: That's alright.
    35:06 Ann: Are you happy with that still not happy with that?
    35:26 Ann: Okay so okay now. We're happy. Exactly all right and I have got you as view everything. so you should be able to log in just make your
    35:44 Joe S: hey
    35:48 Ann: password at the same machine email address that's yeah
    35:52 Joe S: okay, just Joey
    35:54 Ann: yeah
    35:55 Joe S: Cool, I just waiting for that sounds good.
    35:56 Ann: I figured I'd be the easiest way. That way you'll be able to see everything.
    36:03 Joe S: okay yeah, yeah cool
    36:07 Ann: I'm pretty frustrating on who gets full access because some people have actually deleted members in which case yeah, I tend to lose my mind a little bit.
    36:16 Joe S: Yeah, as a developer. I'm like very like I need access. I need full access to do my job, but also I'm very hesitant to give anyone else access because I've seen what people can do.
    36:29 Ann: It's like a baby.
    36:29 Joe S: I had a client. Yeah. I had a client once and they're like oh the websites down. It's an emergency and it was like unknown 10 o'clock at night and I logged in and I was like it looks awfully like someone has dragged the images folder in the FTP in no drag the admin folder the contain the whole advent into the images folder and they're like oh we didn't touch it today. I don't like well someone did and they were like okay. Maybe we did touch it today.
    36:51 Ann: Oh my god, yes, somebody who did it.
    36:57 Joe S: Like this stuff doesn't do it stuff. Yeah, what it is.
    37:01 Ann: Somebody nobody yeah, what is it somebody nobody everybody or something?
    37:06 Joe S: Yes, one thing I was thinking is I could kind of give you. A quick like this is someone else's having an area that I've built in this piece of software and it'll probably look more friendly if I switched light mode. I'm a dark cloud person, but this is an admin area that I've built specifically for
    37:29 Ann: okay
    37:30 Joe S: this website. It's not fully finished yet, but it is using a technology that that I prefer called sanity that basically lets you build out the cms's fit like four purpose so I can add things like a preview window is currently not on because it's on my
    37:49 Ann: Oh, yeah.
    37:50 Joe S: machine but you can preview your changes for example.
    37:52 Ann: Yep, yep.
    37:54 Joe S: Um you can even do things like comment and have like collaboration with other team members you can have multiple people editing at the same time. Yeah, it's
    38:03 Ann: all right
    38:05 Joe S: got some critical stuff like you can roll back to previous versions you can see
    38:10 Ann: Oh, let's handy.
    38:10 Joe S: what. Yeah, you can see you know what was changed in previous versions on this particular one. We have a form where people are submitting documents or submitting text and you can actually submit two here and review it in here to
    38:30 Joe S: approve it. So there's there's quite.
    38:32 Ann: Actually in okay my biggest bugbear. I guess is with the membership um. I have this issue where I cannot upload documents for example to members fold
    38:50 Ann: members like profiles whatever. Is that possible on this one?
    38:57 Joe S: Yes, so you're saying do you can't upload like PDFs against members or
    39:00 Ann: correct
    39:01 Joe S: something?
    39:01 Ann: not on the membership, so I think like I can upload if I'm to the landing Pages I can upload to if I'm going to send an email like an upload documents and Pictures whatever but I cannot do it on a member's profile so from the back end. Yeah, I just have to copy and paste say for instance. They send me an email.
    39:22 Joe S: right
    39:27 Ann: I've resignation I need to get that in their profile for auditing purposes, but
    39:30 Joe S: He yes.
    39:32 Ann: I can't so I've just got to cut and paste the email and pop that in the notes which is not ideal.
    39:41 Joe S: Not ideal no yes well. The thing is you can do anything in here. This is like almost like an operating system. You can unlike what you're used to with web force 5 where they're like this is the shape of the app that we have built and you need to fight tooth and nail for them to change anything at all. This is this is built like this is specifically for this website none of this existed until it was built for this website. So you can do anything you want.
    40:09 Ann: oh
    40:11 Joe S: This isn't a structure that prelike that you know came before. So this is extremely powerful. I think for your particular business simply because logic. Is quite complicated and you need that flexibility but also you don't want to be you know fighting tooth and there to change anything which you would be if he used any Enterprise tool that could do it all that was already you know very enterprising and expensive this is kind of yeah. That's why I like this because
    40:40 Ann: yeah
    40:43 Joe S: we can do stuff in it that you would be spending 10 times as much and still not really getting the same results.
    40:49 Ann: yeah, so if anyone so if
    40:50 Joe S: but yeah
    40:55 Ann: If you can get into the back end, which is where I do most my work like remember that sort of thing can you like have a limit like this one's got like for
    41:00 Joe S: Yes.
    41:07 Ann: instance. With the board members they can see everything they need to see but they don't have access to change anything. Are you able to do that? I really don't want people to come in and playing around with things I want to give them that that access I want to be able to say okay. No, you're not touching anything or if you know what I mean. So yeah, I don't want anybody
    41:29 Joe S: Yes.
    41:31 Ann: coming in the back end and is playing around as they have done in the bars and deleted memories and that's all stuff so.
    41:38 Joe S: Yeah, so this is something to figure out because sanity does have I think it does have rolls, but I guess. So like see here where you can kind of currently. It's only got one but you can have multiple basically content areas so there's an option there to basically have every chapter gets its own sandbox effectively for the content and then
    42:03 Ann: yeah
    42:05 Joe S: you're in charge of all of it.
    42:08 Ann: Yep, yep.
    42:09 Joe S: That's one way to do it. I think we would have to you know maybe think quite.
    42:14 Ann: At the end of the day, this is how I would envisage saying it. I want chapters
    42:14 Joe S: like hard
    42:19 Ann: to be able to have the access to their landing pages and so that they can oh look I've got this flyer. I want to put up yep pop that up yourself going just do it. But I just I do not want anybody to have access to membership at all. that's
    42:38 Joe S: Yes, I think that might be separate again. So yeah, what I've got here is I've
    42:44 Ann: Yeah, yeah perfect yep, let's see.
    42:44 Joe S: got main admin in chapter admin already separated. Yeah, and what I'm thinking is like the chapter admin. They'll edit this stuff. This is what they get to see this is what they get to change.
    42:55 Ann: perfect
    42:58 Joe S: But then yeah the main admin is where all of this happens like where the
    42:59 Ann: yeah
    43:00 Joe S: membership the dealt with where you're going to be doing your approvals making your records looking out to reports managing your payments all of that so none
    43:06 Ann: Love it.
    43:12 Joe S: of that will be accessible from here. That's how the accessible from here.
    43:12 Ann: oh Yes, yes, I see what you're doing. Yep our perfect that works for me.
    43:17 Joe S: Yeah awesome covered. Great so and then of course There's Gonna Be store admin to think about whether or not you want to. Like sanity doesn't have its own store for what we do is we link it to a shopify
    43:32 Ann: Yep.
    43:36 Joe S: store and then it brings across.
    43:38 Ann: Yep.
    43:40 Joe S: You know product content you put your own content on top of that content because we work with well either work with a lot of extremely custom designs so in this
    43:49 Ann: Yep.
    43:50 Joe S: case like perfume has its own product style and then books have a completely different design. So that is all managed in here because shopify doesn't really do that at all, but then what that means is you can bring that in.
    44:02 Ann: So, what is this just products or events or what?
    44:07 Joe S: This is products, but I've including all intents in purposes. It could be anything like what are we got here? So we've got a diary which is like a Blog we've got prompts which is a little bit like user comments. We've got press releases so like this is all very as an ecom site plus a bit of editorial. So this isn't really doing anything like what you'll be doing. It's just a demo of what sanity looks like in the sort of customization. You can get really.
    44:36 Joe S: Yeah, yeah, so this is just what the interface would be and then we break it down differently the only thing that you were saying that I think sanity might struggle with or that we've been talking about the sanity by struggle with is. this stuff I.e like managing your membership's specific processes managing payments like
    44:54 Ann: okay
    45:02 Joe S: it's not really designed as that kind of a tool it's more of a it's more content
    45:06 Ann: Yep.
    45:07 Joe S: you know like uploading the experience memberships that kind of thing yeah, so
    45:08 Ann: Yep, okay.
    45:13 Joe S: that's that's where I'm still breaking it down.
    45:14 Ann: So if it's going to struggle with them we have to have that somewhere else like I'm just thinking now is there a way that? Yours will be able to talk to the membership one. If you like, are we able to to be able to have that that corporate and mis
    45:29 Joe S: Yes.
    45:37 Ann: search on yours if you can't membership?
    45:41 Joe S: He yes, so when I showed you watch How We linked to shopify the way I see it working is we would link the same way to anything else if you've got a membership Database That's managed somewhere else you can have the same thing
    45:55 Ann: Yep, yep.
    45:57 Joe S: within sanity I can see all the members. You can refer to them when you're
    46:00 Ann: Yep.
    46:03 Joe S: updating a page or all the rest of it the only things you wouldn't be doing
    46:05 Ann: Yep.
    46:08 Joe S: through sanity is the same as in shopify like in shopify it deals with the Taxes and the inventory and the shipping and all the rest of it. You don't want that insanity the same would be true of the memberships. You wouldn't really want your payment details insanity.
    46:23 Ann: Got this this really is just like the front page that the website you. It's basically just the website as in all the information about is here.
    46:36 Joe S: Yeah, basically everything that's branching off from here the website.
    46:40 Ann: Yep.
    46:40 Joe S: can be insanity so that's all of this content all of the Chapter content the
    46:42 Ann: Yep. That's good. Oh my god.
    46:48 Joe S: marketing to yeah the
    46:50 Ann: Yep. That's a lot.
    46:53 Joe S: Events the Awards even the Education could all come from sanity that's fine.
    46:59 Ann: That would be absolutely awesome actually take the memberships out of it out.
    47:00 Joe S: Yeah.
    47:04 Ann: Don't worry about that having that like and and any like the chapters would have access to it. They'd be able to to be able to do it themselves or that sort of thing is that what you're saying.
    47:16 Joe S: So where yes, that's right, so the chapters would have their own sanity area
    47:18 Ann: yeah Yep.
    47:22 Joe S: their own content management and then what what would happen is basically. We'd lock the memberships behind the main the main happened essentially.
    47:30 Ann: yeah Yep, yep.
    47:34 Joe S: I'm just messing around I'm trying to like think about whether memberships can
    47:38 Ann: yeah
    47:39 Joe S: to education or not. Maybe not maybe that is very sense anyway, the idea is that yeah education is weird because it sits kind of somewhere between memberships and the website.
    47:51 Ann: yeah
    47:52 Joe S: Some of its in the member areas some of it isn't I guess anyway, I'll figure that out. So yes, that's right.
    47:58 Ann: No, you're right. You right is sometimes. We need like to upgrade to a technician for example. They need those. Long endorse courses I need that information to be able to upgrade and to myself completed that then they can upgrade so things a year that you're right in that regard.
    48:18 Joe S: Yes, so this is where things are going to get interesting because for the memberships which as we've just talked about one necessarily be insanity you do
    48:24 Ann: hmm
    48:28 Joe S: want something that can basically handle. This and this is a lot. I don't know if any one thing handles all of this all that well like the idea of having corporate accounts that can pay for memberships for example. Is pretty unique so the only thing I've only really got to options here that I can think of and one is that we build it essentially break it down and it's into its component parts built it and make it as simple as possible to manage
    48:58 Ann: yeah
    49:00 Joe S: essentially. like yeah, essentially building a new advent around how this works or we kind of
    49:06 Ann: Yep.
    49:08 Joe S: shoe horn it into hubspot, or you know some sort of Online subscription platform that can manage as much as possible of this stuff, but it's got to be it's got to be tricky because you're you have so much process around your approvals.
    49:26 Ann: Oh, yeah.
    49:28 Joe S: Yeah, and whether or not.
    49:29 Ann: You know what like I'm gonna say I'm gonna say make the membership a very low priority. Because what we have at the moment is working to some degree.
    49:45 Joe S: yeah
    49:46 Ann: I I would Focus 100% on everything else Because if it can handle if it can handle the information side of it and the
    49:57 Joe S: okay
    50:03 Ann: event side of it and the Awards education all that sort of stuff. And it can make that better than what we've got here, then. That's a huge step
    50:12 Joe S: yeah
    50:14 Ann: forward. That's like half the battle one. If you know what I mean, so that's a lot of information and I would.
    50:18 Joe S: Yes.
    50:23 Ann: 100% start with that Um I mean look at it.
    50:27 Joe S: also There's so much of it.
    50:32 Ann: yeah, yeah, I know it's and the membership side of it is so How do you put it? It's got to be absolutely 100% spot on because of auditing like the auditors are all over it all the time. So it's that's a bit of a tricky one. So I absolutely would. Love to see the rest like everything that you've got there on the left hand side there.
    51:03 Joe S: Yes.
    51:04 Ann: That's that's a lot of information and if that can be made better than it is in yeah 100% go there.
    51:12 Joe S: Also, I think.
    51:13 Ann: Because if it's gonna struggle with the membership side of it then. I think we just stick to what we've got until you know you can find a better way or something like that, but yeah.
    51:23 Joe S: Yes, so essentially what was saying is this becomes a separate project all of
    51:27 Ann: Yeah, absolutely.
    51:29 Joe S: this. Yeah? I don't know how it decides. What what to drag when you click on stuff. That's fun okay, so that that makes sense to me as well, so basically that does.
    51:42 Ann: Yeah, it's a clean.
    51:45 Joe S: Yeah, but what that means is that we would be leaving alone for now. This members area essentially or like the this part right. So this is the bit of
    51:55 Ann: What's that one?
    51:57 Joe S: the account where they manage their overdues and all that stuff would be left
    51:57 Ann: Yes.
    52:00 Joe S: alone simply because
    52:02 Ann: yeah
    52:03 Joe S: Currently, that's not like you could put content in but it to actually automate anything you would have to start building this out.
    52:12 Ann: yeah, if that's our next chance like it's gonna be quite a an extensive process in itself so um
    52:25 Joe S: Yeah, that's kind of what I'm thinking is whether or not yeah.
    52:27 Ann: yeah Anything to do with the members their profile there their information all that sort of stuff I think. If if it's going to struggle with that. Because ideally I guess what we're trying to achieve here is making it easier for chapters to set up their own events to you know get like an even if that means like you linking to a vent right and you saying it like you're leaning your linking to shopify and all that sort of thing that is if you can do that easily then that's that's really going to open that up 100% open it up.
    53:14 Joe S: Yes, that's this wherever it was study eventbrite coming in here.
    53:19 Ann: Um yeah, yeah.
    53:20 Joe S: And just being able to link to that in a content way probably just be dropping
    53:24 Ann: Yes.
    53:25 Joe S: links in to be like how this links out to your eventbrite page.
    53:28 Ann: Yep, because that's stains at the moment that the current one that we've got is
    53:29 Joe S: for now
    53:33 Ann: oh my god. It's such a convoluted process to set up events and stuff like that. It's really is awful. So getting something like that and easier process because this can't link to anything really if you can do that, then excellent. That's
    53:45 Joe S: yeah yeah
    53:50 Ann: just going to save hundreds of hours.
    53:55 Joe S: Also, yeah, I think that's it. We're just trying to like make the thing like make the website work the way it needs to to get that momentum. It seems like
    54:03 Ann: yeah
    54:05 Joe S: momentum is what it's been kind of lacking the most right.
    54:08 Ann: It is 100% The membership, I'll just deal with for now everything else can be made easier this really just gonna make my job easier 100%
    54:20 Joe S: cool awesome, I think there is Yeah, something I was hoping to Jeff about is that the reports for example these things currently they're done and the same way that the records are managed three [monday.com](http://monday.com/) the reports are done through [monday.com](http://monday.com/) with a dashboard and the issue with that is there is no year on year.
    54:37 Ann: Yep.
    54:40 Joe S: kind of tracking and if we don't build that as part of the new website that would probably have to be a later job or we'd have to find a way to do it almost as a separate
    54:52 Ann: What we're posting looking for?
    54:53 Joe S: Project So he's basically saying that like they've got a pretty good dashboard for let's say 2025, but what their current processes is when they start 2026 they copied the board clear all the data and put in the New Year's data and start from there. They basically start from a white slate because otherwise [monday.com](http://monday.com/) falls over. Which means that there's no way to do a report for multiple years because each like all the reports that they have for the current year or for that year right.
    55:25 Ann: That that actually is an issue with the database as well. You can't select.
    55:34 Ann: Like a date range, we don't have that date range ability which is.
    55:39 Joe S: Yeah, so that's that's that yeah. That's the same thing. Yeah, so that it that
    55:39 Ann: Yeah, yeah.
    55:43 Joe S: is all within this kind of Arena which means that in order to start solving that problem we would have to tackle this to some degree but whether or yeah whether or not. Whether or not it's sensible to treat this is part of the same project this initial project. I maybe it wouldn't be. yeah
    56:06 Ann: Because I think everything else becomes everything else comes before the reports
    56:06 Joe S: yeah
    56:10 Ann: doesn't unless you can get all that other stuff to work.
    56:15 Joe S: You need something to report on.
    56:16 Ann: Well, yeah exactly.
    56:19 Joe S: Yeah, that's correct. So yeah. I think we would need to. Solve kind of what platform it's all on and then go from there and currently it's all on [monday.com](http://monday.com/) and it's being done somewhat manually.
    56:34 Ann: It's actually we do it by database and [monday.com](http://monday.com/) and then we just cross reference make sure everything matches at the moment.
    56:44 Joe S: Right, yes, so there's no singles truth.
    56:45 Ann: Because everything is manual yeah.
    56:48 Joe S: Yeah, I'll get you.
    56:49 Ann: Everything's manually in on both ends at the moment, so yeah.
    56:53 Joe S: Yes.
    56:53 Ann: and that's I think that's because of the way the purchasing setup for Like because they don't renew from the database anymore. They don't renew from their profile anymore. They actually get sorry invoys the Cent directly from accounts from zero slash [monday.com](http://monday.com/). It's um. not none of that is recorded in the membership database so
    57:24 Joe S: Mmm. Yes and that yeah.
    57:25 Ann: that So when when so what actually happens is Jeff in accounts. He he just has this list okay sounds those paid so when I see that they've paid a manually going and update there membership.
    57:41 Joe S: Yes, yeah, and that is I've done that before I mean yeah. I've been running business and referral long time now and you like any manual step like going into
    57:46 Ann: Yep.
    57:50 Joe S: zero and being like has this invoice being paid is just inviting headaches
    57:54 Ann: Yeah, yep 100% and I mean at the end of the day would be absolutely ideal I
    57:55 Joe S: because you're like what if you don't check or you know what if you send out to invoices instead of one because you didn't find the first one or whatever yeah. like
    58:13 Ann: think. if we could yes at the on the first of July every year everybody gets their invoices sent out to them for renewal, but There should be able to log in and go. Where's my invoice? I need to pay my invoice and still be able to pay it if rather than have to email me and then I have to tell Jeff and Jeff has to send it to them again it becomes a bit of a convoluted process. I guess and it takes a lot longer than it should do so Yeah, which is not ideal.
    58:48 Joe S: Yeah, so that's yeah, so that's kind of what I would like to do at some point is basically this is I've called this process, but essentially what I want is this to be? Like an engine like it basically is a reference that is your source of Truth it
    59:08 Ann: yeah
    59:11 Joe S: updates your membership database it pulls from zero it does all that stuff so
    59:22 Ann: Yep. Yep.
    59:24 Joe S: this kind of becomes. It's it's own little like core. essentially making all that happen, but that that is going to be custom I think because you have am I right and say they're called bylaws you've basically got yeah, and they change and then basically what happens is this has to be a reflection of your Bible is like this actually has to Follow that yeah.
    59:42 Ann: Not just that with the approvals as well. I mean there's a very specific process as you said and Constitutionally they have to be followed so we need some system that's going to be able to follow that as well. That's why everything has to be sort of manually. Sort of done at the moment, so yeah. It's annoying but it's all we've got.
    01:00:12 Joe S: exactly Yeah, yeah, so I guess the one of the big questions. I'll be floating is yeah
    01:00:29 Ann: yeah yeah
    01:00:38 Joe S: exactly that's whether this area is part of this what we're trying to solve or
    01:00:40 Ann: Agree, that's going to be a monumental job actually the membership side of it.
    01:00:53 Joe S: shall we solve all of this and come back to this because this is easily going to
    01:00:53 Ann: It's noticed simple as as probably those said to you.
    01:01:00 Joe S: be as complicated as all of this. Yeah, yeah, and I like this this could easily be twice the size and still only be touching the surface but I think having it. Yeah. I've had about yeah four or five versions of very similar but not completely agreeing yeah versions of this conversation about what we want and what what's supposed to happen and how things work it's quite funny. Because yeah, I'm family and listening mode. I'm like I'm not correcting anyone. I'm just gonna you know try to do that.
    01:01:17 Ann: yeah, that's that's the thing I mean and I was I need to discussing this yesterday with one of the other members that actually work for ias and The thing that the trouble with all of this is we've been doing this now for six years ourselves and when we inherited this. Not approach this was to be found anywhere. We've had to learn as we go and so
    01:01:43 Joe S: mmm
    01:01:46 Ann: what's actually happening at the moment. Is that we are as we go we are creating these processes now. So it is becoming easier for us, but yeah as far as for. sideboard members and the chapter members and that sort of thing it's still An a very big unknown because they don't work with it every day, so but I
    01:02:09 Joe S: Yeah, yeah.
    01:02:10 Ann: categorically say it is getting better.
    01:02:13 Joe S: That's the go. Yeah, I like this okay. Yeah, I think I'm starting do you think this is I mean I'm gonna color code it in all the rest of it, but do you think this is a good visual tool for explaining things to people?
    01:02:26 Ann: Yes, I think so, are they just need to understand the membership side of thing is. very complex
    01:02:34 Joe S: Hmm. Yeah, I will be filling this out based on what I know so far to try and be
    01:02:37 Ann: yeah
    01:02:39 Joe S: able to talk to it all.
    01:02:39 Ann: That's yeah, that's gonna be quite a complex task because there are so it's like a spider web it's any way I can explain it's it is like a spider web and they've
    01:02:46 Joe S: Yeah, yes.
    01:02:50 Ann: created that. They you know and we've had to make adjustments to to fit what they need so and that's fine like that's the way the constitution is and that sort of thing so it's not a problem. It's I'm used to it. It's easy for me. I don't care. What is and is like the the biggest time ways to for me is doing the whole chapter thing and events and social media and you know.
    01:03:19 Joe S: Yes, yes.
    01:03:20 Ann: Send it actually that's another thing. emails bulletins that sort of thing is that something that will this thing will be able to do this website will be able to do like send out emails to Like notifications sort of thing to to all members.
    01:03:38 Joe S: So that is something that will be under the marketing wing so what I usually do
    01:03:43 Ann: Yep.
    01:03:48 Joe S: is. Basically, we use something called clavio most of the time. Have you heard of Clavier
    01:03:57 Ann: no Right okay, we're at that down and in biscuit.
    01:04:03 Joe S: It's just it's a marketing tool first and foremost and but it's got a lot of
    01:04:07 Ann: yeah
    01:04:08 Joe S: things that so it's got email Marketing SMS marketing but it also has tracking Analytics built in and also has some very so we work with a lot of e-commerce and with e-commerce there's it's it's like SAS light and what I mean by that is like you're basically running a piece of software but you're mostly. Running just the same as everybody else you're selling products and you have all the same problems as everyone else so you get you get the the known way to do
    01:04:37 Ann: Yep.
    01:04:39 Joe S: those things is less custom and what these guys do for example is they have abandoned cardi bails and you can go okay, so if they've abandoned their cart, but they have over this much money in their car, then you send an abandoned card email and you follow up in five days like that's the kind of thing you can do in clavio, but that means that if you don't just want to say you can do newsletters too and you can drag drop customize them all the rest of it. You can do like drag drop like you can put a newsletter pop up on the website. Just by editing it in clavio usually try not to do that because it doesn't look very good, but you can do it, but yeah, they've got a lot of functionality.
    01:05:19 Ann: So you can actually have like a newsletter on the website that somebody can come in and go what's going on sort of thing and flips a new on the website. You don't have to actually send it out to to members or you can.
    01:05:31 Joe S: I'm actually I mean you probably could do that that what I meant was that you can have the pop up managed from in here instead of having to like but yeah,
    01:05:37 Ann: Oh okay, yeah.
    01:05:40 Joe S: there's there's a lot I don't really know everything it can do mostly just use it for Setting people up with email marketing and sometimes transactional emails, but it's got segmentation you can do ad campaigns which you know some people get
    01:05:52 Ann: Yep.
    01:05:57 Joe S: very into their own campaigns and they want to know who clicked on what so it's got analytics for that and things like that which is also very good.
    01:06:03 Ann: Yep.
    01:06:04 Joe S: But yeah, that's the sort of thing I would suggest instead of trying to build this. into
    01:06:11 Ann: Just link it to something else. That's already built yep.
    01:06:14 Joe S: Yeah, and just making sure that yeah, so like making sure that it's the best that the best out there. And then just using those tools because someone else is spending millions of not billions of dollars making those things really really good and then using them for the bits that you can do and then it's the stuff that they can't do
    01:06:32 Ann: yeah Yep.
    01:06:35 Joe S: membership that will be where the effort goes to build your own version essentially.
    01:06:41 Ann: Yep, I like it. That's good idea the other thing.
    01:06:44 Joe S: awesome
    01:06:46 Ann: when it comes to publications there was something because I know I don't know what they're doing about the newsletter but There was a publication that I saw once and it's used like a book.
    01:07:02 Joe S: yeah
    01:07:03 Ann: Like Coles catalogues, that's all the moment you know the name of any of those
    01:07:08 Joe S: Like that yeah.
    01:07:10 Ann: and could it could it link to anything like that because I just found that good because like I said with the with the bulletin we used to be called the bulletin um because it chapter segregated. I always wanted to get a hyperlinking but this database couldn't do that. It could produce a bulletin but it was like one long page and if I wanted to jump to Western Australia I couldn't I had to scroll through the whole thing.
    01:07:39 Ann: So yeah being able to hyperlink jump to an the chapter that I am in sort of thing yeah, anything like that that you could recommend that it could link to.
    01:07:50 Joe S: yeah
    01:07:51 Ann: they've got they do have one but um I think it's
    01:07:55 Joe S: Let's see if I I'll just wanna demo stuff like so this is. See if I can find a good example.
    01:08:01 Ann: Something that easy to use too by the way.
    01:08:05 Joe S: This is in the same thing that I was showing you before. I'm just trying to find a good example if there's a I guess the home page so like the home page here if you think of this like a magazine. Is you basically just pick your pay your designs and you pick your content so in this case
    01:08:21 Ann: Yep.
    01:08:24 Joe S: they've got three of the same which I firstly wouldn't recommend is what they've done and then this is a different one. This is a different one as this is a
    01:08:28 Ann: Yep.
    01:08:32 Joe S: different one. This is a different one and the idea is that you can basically make instead of having this just big block of text bulletin style you can make your own content. In a more magazine style without having to upload PDFs because as soon as you upload a PDF you lose so much you lose all your accessibility you lose the ability for Google to pick up on what it says or link to it. You know all of that stuff is just gone.
    01:09:01 Ann: You're asleep. I did not know that.
    01:09:07 Joe S: yeah, yeah PDFs They're kind of their own little world. They do their own things for their you need to download them to read them and things like that. I mean you can't do it.
    01:09:17 Ann: Yeah, yep.
    01:09:19 Joe S: Yeah. Yes, I've just just a thought we can totally. Embed something there's you know this. You just drag and drop a PDF and it turns it into it's like a little you remember flash players from back in the day. it turns it basically into like a flash player for a PDF yes, you can do that,
    01:09:42 Ann: Yep.
    01:09:43 Joe S: but I yeah, I don't think they're as Good really for one thing they depend on the zoom level of your screen, so it's very easy to pick it up on a mobile for example and it'll be way too small.
    01:09:57 Ann: Yeah, right okay.
    01:09:58 Joe S: that kind of thing but Yeah, the literally and the thing is is actually possible here. It's just about try to find the right approach for Ticking is very boxes as possible and what goes essentially.
    01:10:14 Ann: Yeah, that kind of don't forget that kind of want everything.
    01:10:17 Joe S: Yes, yes.
    01:10:17 Ann: Like this like well. I think eight nine hundred members something like that and trying to believe everybody is extraordinarily difficult. Trying to divorce or the one chapter is hard enough for that. Yeah. Everyone's got a but I like it this way, but I like it that way and it's like trying to please everybody is so hard.
    01:10:38 Joe S: Yes, that's why I think this is good right because you kind of got okay, so we're talking to you about this area for example education like cool. This is
    01:10:44 Ann: Yeah, yep.
    01:10:47 Joe S: this is high impact low reward or you know. High difficulty level reward and you can kind of get everyone to focus on their bit and if everyone wants to talk about this. You're like okay. Well. This is extremely high effort medium reward kind of thing and then it's kind of easy to break down and leave notes, I think.
    01:11:07 Ann: Yes.
    01:11:09 Joe S: And kind of get to the point where people are like okay is all of this worth not having all of this the answer is probably no. Hopefully, hopefully that's how it goes. I'm not really used to Boards I've only ever really been in business of like listen 10 people. So be fun.
    01:11:28 Ann: Yeah, yeah, that's all right now. It's a good start. Yeah. I mean at least now. We've got like that segregation. We know what it can handle what it's going to have difficulty with and what we know we can do um that's going to be huge.
    01:11:42 Joe S: Yes. Awesome, so thank you. Thank you and thank you so much for your time. It's been
    01:11:46 Ann: great start not a problem any
    01:11:49 Joe S: great talking to you. Is there I actually went to talk to you more about your day to day follow. I haven't actually managed to get to that unfortunately maybe
    01:11:58 Ann: yeah
    01:12:00 Joe S: I'll send through some questions if that's all right.
    01:12:03 Ann: Yeah, absolutely.
    01:12:05 Joe S: I'm sure there's water and also I don't think that invite came through unfortunately. I don't know really what happened there.
    01:12:13 Ann: Look I'm happy to if you want to. If you want to set up another meeting and go through the day-to-day stuff, I'm quite happy to do that as well. Not a problem.
    01:12:25 Joe S: Awesome yeah, maybe maybe that would be good. Everybody's everything's gonna get
    01:12:28 Ann: yeah
    01:12:30 Joe S: very tight moving forward if I could get that invite through for the membership area maybe what I do is I finished putting this together and I send it to you
    01:12:34 Ann: yeah
    01:12:39 Joe S: and I feel like okay here's what's missing from there from what you do, then that would be great because then I can I can just add it in and make sure it's all in there without.
    01:12:48 Ann: it's
    01:12:49 Joe S: Awesome, yeah, I don't like I said I don't know what happened to that invite unfortunately. I'm Having seen it. Is it supposed to come through from is I suppose job pixels, sorry.
    01:13:06 Ann: This that year that adminton you're talking about.
    01:13:09 Joe S: Yeah, yeah.
    01:13:10 Ann: let me
    01:13:13 Joe S: I've checked I'm promised subject my span. I don't think it's in there.
    01:13:17 Ann: Oh hang in a second. I think what you're going to need is a different. I'm going to have to find you the link the URL to log in from the back in. um hanging a second let me just try Where do I put the chat thing here? try
    01:13:44 Ann: https://www.iesanz.org/admin/home/
    01:13:45 Ann: let's see URL to get you in the home at the back end and then log in with your Sophie just want to perhaps copy that. I'm pretty sure that's right one. Not gonna happen.
    01:14:01 Joe S: oh, yes, so this is the
    01:14:02 Ann: Yeah, we go yep.
    01:14:05 Joe S: Yeah, so what am I doing? I'm just gonna like type in my email address again is
    01:14:06 Ann: and then
    01:14:09 Joe S: my password.
    01:14:10 Ann: And I'm not a robot and then yep login. You should be able to get in and there you go perfect.
    01:14:16 Joe S: and this is
    01:14:16 Ann: So what you'd be able to yeah, yeah.
    01:14:20 Joe S: So is this one it looks like has a member.
    01:14:24 Ann: No what oh I hate is ah right okay. Let me just let you I'm gonna add you as a
    01:14:25 Joe S: Okay, sorry, that's what I was trying to get is the membership access.
    01:14:35 Ann: member um. Give me two seconds.
    01:14:40 Joe S: Yeah, it's like this looks like too much control from ever to have.
    01:14:40 Ann: members Don't worry, you can't do anything you just gonna have to let's new clients. Grip that email address again. Oh just use your email because it's so short and nice. I'll just use that as your password.
    01:15:07 Joe S: easy
    01:15:08 Ann: pace space And I'll have to make you financial so that you can actually see stuff. And hanging sick. member Associates Here just say that you should be able to log in that's all where are we okay create. There you go so same sort of log in you are there. and done yep, so if you just click on I don't know why we've got two logins remember hub and Yeah, so you looked in now.
    01:15:59 Joe S: Yes.
    01:16:00 Ann: That's how you can see from the members side of things.
    01:16:04 Joe S: Okay and then from within here. Sorry this card.
    01:16:06 Ann: Yep.
    01:16:08 Joe S: So I can I can pick the upgrade. that's just a click load against
    01:16:15 Ann: What you want to create two?
    01:16:18 Joe S: So this is all just forms and stuff, is it yeah?
    01:16:21 Ann: Yep trees.
    01:16:23 Joe S: Cool and then you've got your recent orders, which I assume is only partially working because a lot of things don't happen through the site.
    01:16:34 Ann: yeah
    01:16:36 Joe S: Yes.
    01:16:36 Ann: but um let's have a look yeah, if you look if you use any of the forms if you want to fill in any of the forms don't panic they just come through to my email address so Just I'll say you name or not now. Just playing.
    01:16:50 Joe S: I'll just try testing yeah awesome. Thank you.
    01:16:53 Ann: yeah, that's all you do test it's Joe test whatever you want to call yep perfect.
    01:16:58 Joe S: Or Joe test, I do that all the time. Cool, I mean it's pretty basic. Is that like you fell informs and you can see your orders and you can download some stuff.
    01:17:10 Ann: Yep.
    01:17:11 Joe S: Right okay, that's so I guess one thing to note is that you kind of need quite a flexible and Powerful form system.
    01:17:20 Ann: mmm yep
    01:17:22 Joe S: So, I'm just gonna write.
    01:17:24 Ann: absolutely
    01:17:27 Joe S: I'm going to write that here is like a content management will need to involve basically form management. Because you're going to want to basically be able to have people fill informs. See them on aggregate or individually I suppose for reporting sake all the rest of it right.
    01:17:45 Ann: Yeah, yeah.
    01:17:47 Joe S: Whether or not that goes here or in fact under here is a good question that's something to.
    01:17:52 Ann: It is I will suggest it would be. Yeah, it's pretty much the sign up once you've joined then you have access to your profile.
    01:18:05 Joe S: your forms Yes, yeah. Yeah, so there's got to be I mean I guess maybe it's more like this
    01:18:10 Ann: Yeah, I guess you have to do the forms two sign up so yeah. That's the first off.
    01:18:22 Joe S: forms come quite early in the process.
    01:18:24 Ann: yeah
    01:18:26 Joe S: But you do like you do need to manage your forms. Quite early on can chapters manage the forms or just mainland.
    01:18:35 Ann: No me no one else. I don't get to touch anything when it comes to membership not
    01:18:39 Joe S: no
    01:18:42 Ann: a thing.
    01:18:42 Joe S: Yes okay. Good today. I'll put that here actually. so it is behind the main admin as in chapters, can't see it but
    01:18:47 Ann: no yeah no
    01:18:53 Joe S: Yeah, but we'll figure out how to slot that I just I yeah. I know you're coming
    01:18:55 Ann: Nobody touches anything trust me.
    01:19:01 Joe S: from I vetted yet. I've been in your shoes that even see like why do they keep changing things? I've had yeah, this story is I'm sure.
    01:19:10 Ann: Oh my gosh. Oh, yeah.
    01:19:16 Joe S: Thank you so much. You've been amazing.
    01:19:17 Ann: Not a problem not a problem lately. Yeah, it just let me know if you want to set up another one and we'll go in more in depth and yeah show you what you need to show you. all right
    01:19:31 Joe S: I'm sure we'll talk soon the rest of your day. Thank you. Bye.
    01:19:32 Ann: No worries, thanks. Joe okay. Bye.
    

## Ann

- Notes
    - Most of the admin done by Ann
    - Emails sent out from admin
    - Occasional payment setup (events, no longer membership)
    - Atm buffer for social media posts
        - Most members only use linkedin / facebook
    - Doesnt like member search
        - Members elect if they want to be found
            - Corp found by corp search
    - Ideally, one corporate box for ‘BECA’, then within that see the members of BECA
        - Mostly people are searching for orgs but can also search by members
        - ATM search brings up all members
    - Currently only want MIES level members to be searched, if they have opted
    - Chapters want to basically have the website browsable only by chapter
    - Currently cant upload eg pdfs against member profiles
    - Maybe each chapter has their own sanity?
    - Make membership low priority and focus initially on content upload + allowing chapters to manage their own content
- Transcript
    
    # PXL x IESANZ - Secretariat
    
    Meeting started: 29/10/2025, 14:01:18
    Duration: 79 minutes
    Participants: Ann, Joe S
    
    [View original transcript](https://app.tactiq.io/api/2/u/m/r/ujLQMxDavyINtxIcr9af?o=txt)
    
    ```
    ## Highlights
    
    > 09:30 Ann: Mmm. That's an issue.
    
    ```
    
    > 09:46 Ann: That was the number one biggest issue. We had with the current website that
    19:41 Ann: really really important New South Wales it's New South Wales slash act.
    31:30 Ann: Oh, that's where that is. Oh, I've actually been having this issue. That's perfect. Thank you for the
    38:10 Joe S: what. Yeah, you can see you know what was changed in previous versions on this particular one. We have a form where people are submitting documents or submitting text and you can actually submit two here and review it in here to
    38:32 Ann: Actually in okay my biggest bugbear. I guess is with the membership um. I have this issue where I cannot upload documents for example to members fold
    54:20 Joe S: cool awesome, I think there is Yeah, something I was hoping to Jeff about is that the reports for example these things currently they're done and the same way that the records are managed three monday.com the reports are done through monday.com with a dashboard and the issue with that is there is no year on year.
    55:25 Ann: That that actually is an issue with the database as well. You can't select.
    > 
    
    ## Transcript
    
    00:00 Ann: Hi, how you going?
    00:01 Joe S: I'm good, how are you?
    00:03 Ann: Not too bad at all. You're Joe I take it.
    00:05 Joe S: I'm Joe yes yep.
    00:07 Ann: Excellent on the right. I'm on the right meeting that's amazing.
    00:13 Joe S: yes, yes that
    00:18 Ann: indeed, oh my goodness and you're in New Zealand
    00:22 Joe S: That's correct yeah, and I are you in Australia western.
    00:22 Ann: so right yeah in the Moreton Bay area of just slightly North from Brisbane in Queensland
    00:35 Joe S: Oh cool, we're gonna be an oppington.
    00:36 Ann: Yeah freezing today actually.
    00:39 Joe S: Yeah, it's a little show hey that's like trying to be spring but not already getting there. I think they're getting similar weather. I mean we've had storms and they're in the south island last week and then we're here today with some of it comes across from Australia and then sometimes it doesn't.
    00:57 Ann: Oh right okay. Yeah, we've had quite a bit of rough weather the last couple of days and it's actually we've gone through about 38 degrees and it's hit about 21. So it was a big drop. So just getting over that.
    01:10 Joe S: Oh jeez, yes. Yes, I imagine it gets extremely hot where you are.
    01:16 Ann: It's sometimes. It's not the hate here. It's a humidity which is you can knock you around a bit but yeah, we get there.
    01:22 Joe S: yeah Yeah, you still are longed.
    01:25 Ann: Thanks a bit dryer.
    01:27 Joe S: Yeah, another life. I used to live in on Fiji and it was just yeah, I wasn't it
    01:32 Ann: oh
    01:33 Joe S: didn't get to hot but it was like 100% humidity all the time like it was maybe maxed out 32 33-ish didn't really get hotter than that there is Australia's Got
    01:41 Ann: Yeah, yep.
    01:44 Joe S: all that and more.
    01:47 Ann: yeah, and it's just
    01:48 Joe S: Yeah, yes.
    01:50 Ann: I love the air conditioner.
    01:52 Joe S: Kind of imagine memorable Christmas and Port Douglas which was quite nice. Yes very very hot.
    01:58 Ann: It would have been up there absolutely.
    02:03 Joe S: Til so I imagine you've heard a bit about me and what I'm up to but I haven't.
    02:07 Ann: Not really, I actually don't know very much at all. So you're going to have to fill me in.
    02:14 Joe S: That's all good okay, so yeah, let's start there I suppose so I'm essentially project managing or at least the initial project manager for this next step of the website. So what I'm currently doing is interviewing everyone kind of gathering everyone's perspectives. Pain points things that they'd like to do better things they want for the new site all of that kind of stuff but kind of with a view to turning that all into a plan so I'm going to synthesize everything and turn it into a plan, but yeah at the moment. I'm still just trying to understand everyone's roles and it kind of what the website looks like from everyone's different perspectives and then
    02:54 Ann: Yep.
    02:55 Joe S: yeah, what works and what doesn't so I can start putting that together.
    02:59 Ann: gotcha okay, I probably do most work with the current website that we have so I
    03:04 Joe S: Yes, that's why I was like I need to talk to you.
    03:08 Ann: Yes. So I sort of use I get into the backend a lot because at the moment. It's membership and and the chapter landing pages. That's all things so and emails get sent out from there. The occasional sort of payment set up for events that sort of thing not from
    03:31 Joe S: yeah
    03:33 Ann: membership anymore. But yeah, it's it's clunky but usable. On the only one that you're with it.
    03:46 Joe S: Yeah, yeah, I have been kind of it's funny because like different people seem to have very strong opinions are like oh we don't do emails from there and I'm like well. I've been in the advent and I don't think that's necessarily true. There's buddy want people think happens first one actually happens sometimes.
    04:02 Ann: Yeah, I think people who don't use it. At all would find it absolutely overwhelming but um because we use it on a daily basis. Will I do it's not quite as overwhelming.
    04:16 Joe S: Yeah, yeah, I can imagine it you get used to it right you can get you most
    04:21 Ann: You do yeah.
    04:21 Joe S: things in the end. Yeah, so I guess I want to talk to you.
    04:25 Ann: What what's the new website actually gonna incorporate like what I actually don't really know much about it at all. I'm how it's going so yeah.
    04:33 Joe S: No right. Yes, so I'm still in the research phase but I've actually a few won a little Stick preview.
    04:42 Ann: Okay, oh, that'd be good.
    04:44 Joe S: I started to put together let's call it a mind map which might be a good way to
    04:48 Ann: Yep.
    04:50 Joe S: kind of start this conversation because this is where I was I started this this morning so
    04:59 Ann: my god
    05:02 Joe S: Saying it at a very very early stage so it's more complicated than I wanted to
    05:04 Ann: yeah
    05:07 Joe S: be by the time other people see it but anyway.
    05:10 Ann: mmm
    05:13 Joe S: Let's look at a used to this as well. I only started using this this morning you saw this anyway, so what this is is me starting to plot out the different areas of the website and what it all does. What what I kind of want to do is arrange
    05:25 Ann: Yep.
    05:31 Joe S: it in such a way that everyone can look at it kind of go that's my bit does it do what I want. So let's go into the middle so what I've got and how I've split it up is we've got the admin area and then this is largely going to be you've kind of got different business processes. You've got a lot of membership admin right because a lot of your business is based around your membership structure, how it gets paid.
    06:00 Ann: 100% if
    06:01 Joe S: So I kind of broken that all off here and started to like break it down into like you'll have different processes for all of these things and then like and I started to write down your different kinds of members type making this little tiny. It's going to be fun but Yeah, and then you know reports which currently go through [Monday.com](http://monday.com/) I'll probably talk to you a bit about just kind of starting to break it down and get the different areas nailed down a little bit. So this is like someone logs in to their members area they go to their account. What can they do? If you go to the education area, what kind of things are in there and then just starting to plot out like for example the 2025 conference as it's own separate website so this is actually separate from any future plan even though in theory.
    06:51 Joe S: We're building a site to replace this should be 2026. And then we've got marketing so Facebook now looks linked to new on newsletters which as you just said come out from the website. We've got hosting which I'll get to we've got potential store and that's currently as far as I understand it mostly for buying sponsorships and advertising because tickets are managed through or should eventually be managed through eventbrite. That kind of thing then we've got.
    07:17 Ann: Yep.
    07:23 Joe S: Where is it so I've got we're going to have to figure out a payment system so members can pay for things and then that goes stripes in zero so currently what you're doing. I believe is your payment system is manually run by going to [monday.com](http://monday.com/) seeing what's where things are at covering back here and creating an
    07:37 Ann: Yep.
    07:40 Joe S: invoice and all sending out a payment link so.
    07:43 Ann: Okay, so they'll be able to with the invoices still go out yearly or is this something that people have to log in and renew the membership again because I don't think that went down very well.
    07:57 Joe S: I was that how it was doing um yeah.
    07:59 Ann: Not when you have to rely on people to renew their. membership didn't yeah, it was just like yeah, but
    08:04 Joe S: like on time Yes, yes, so this is this is again. This is a big part of it. So like I feel like stripe stripe can do things like keep credit cards on record and send out bills as they come through that or a director debit kind of system the but Jeff
    08:20 Ann: Yep. right
    08:26 Joe S: I talked to Jeffrey was at hands 360 and he was basically like are the strike fees are huge and I'm like yes, but if you're doing this manually and you're trying to compare that to someone's actual time that you'll spending yeah. It might be worth it especially because strike and zero connect together and they can also connect to shopify and they connect to so many other things so.
    08:48 Ann: Okay, that's handy.
    08:50 Joe S: Yeah, so I was thinking and also strike could potentially connect to eventbrite and things like that so having one place to be like okay did any payments fail or all your customers have their payment details in one account like in stripe that would be good, but yeah, that's tvd. I haven't really talked any more about
    09:04 Ann: yeah At the moment, I don't I don't think we keep.
    09:07 Joe S: it.
    09:10 Ann: We don't keep payment details we don't keep car detail or anything like that at the moment. It's a manual send everybody's invoices out and on the first of July
    09:16 Joe S: right
    09:20 Ann: and everybody just you know clicks on a link on the invoice and pays at that way, so that's how it's actually currently done so
    09:28 Joe S: Yeah, and then there's GST so a GST is a big one. Yes.
    09:30 Ann: Mmm. That's an issue.
    09:36 Joe S: Yes, that's something to cover because that's almost like your paying to and from in two directions. You know like you're having to calculate GST as if the
    09:42 Ann: Yep.
    09:45 Joe S: business is in two different locations.
    09:46 Ann: That was the number one biggest issue. We had with the current website that
    09:51 Ann: we've got it. Just could not. it couldn't do two separate premiers could only do the Australian GST didn't have the capability to have the New Zealand GST Or so it was yeah that way.
    10:03 Joe S: Yeah, that's right. Yeah, so that is that's kind of yeah. I've got that on my mind and whether that's two stripe accounts or whatever that ends up looking like.
    10:15 Ann: they could
    10:17 Joe S: Yeah, that's kind of where that'll get to but yeah at a super high level the other thing that I'm thinking might be good is essentially between your like you and the people around you and the chapters and the people around the chapters
    10:35 Ann: Yep.
    10:35 Joe S: kind of coming up with a way for them to. Naturally create a feed of content that then gets kind of disseminated through the website without anyone having to go well this goes on this page. You know like deciding who gets their five minutes on the home page or anything like that shouldn't really be. Like that shouldn't take too much time because if it does then it doesn't get updated and then your homepage never you know it's updated and all the rest of
    10:57 Ann: current
    10:59 Joe S: it so since you'll probably be using this this might be a good time to tell you what I have in mind which is basically that things behave like a little bit like a social media feed where you make a post and you select where the post goes so if you're like okay, we are having an event and this event is for this chapter and in fact. It's not even a public event we don't want public to know about it.
    11:24 Joe S: Maybe you have a channel called I don't know wa I that's yeah as you say you
    11:28 Ann: Yep.
    11:30 Joe S: have a channel called wa and then you select that and you post that and without doing any extra work the only time you'll see that is if you're. In a situation where you're seeing that channel and the same could be true of
    11:43 Ann: Let's change.
    11:44 Joe S: public the same could be true. Yeah. I think that could be a nice way to get everyone. Able to you know start publishing content regularly without having to go. Oh, you know to get something on the calendar. I have to go all the way through this process and even that it really work blah blah.
    11:58 Ann: Yes, oh my god, that would be amazing. At the moment we use buffer for all yeah and some chapters had their own and we have the money it's like it's just chaotic. So yeah streamlining something like that would be fantastic.
    12:16 Joe S: Cool I mean so could you say you're using buffer especially?
    12:20 Ann: Yeah, yeah.
    12:23 Joe S: And it's not very good.
    12:25 Ann: that was and we use that for well actually most is members pretty much unused LinkedIn That's their number one go to that all Facebook but very rarely most most of the
    12:34 Joe S: yeah
    12:40 Ann: time if I get a task to do from an ias member. They just say LinkedIn because it's just purely business, so that's the
    12:47 Joe S: Yes.
    12:50 Ann: that's the one that they want to do but I think Facebook would be another one that Twitter no one ever mentions that words so yeah, it's either Facebook or Twitter that LinkedIn
    13:04 Joe S: yeah, Twitter unfortunately is no longer Twitter
    13:09 Ann: What's that?
    13:10 Joe S: And I think it's slowly die. It's been it's been renamed to x by Elon Musk yeah.
    13:15 Ann: That's right. Yes.
    13:17 Joe S: And now they're called I don't know what they're called anymore. They're not
    13:17 Ann: I think so, that's too young but apart from that.
    13:20 Joe S: called tweets, but yeah, I think everyone's moving off that now.
    13:32 Ann: The only thing that I would like the chapters to have access to would be the landing pages so that they can. Like put their own you know tech event things coming up and that sort of thing so you. 've been on the website they have each chapter has your own landing page where they have? What do you call it like take events awards and where they actually advertise for their own chapter.
    14:06 Joe S: yeah And would you say so the chapters? I've been in some ways. It's deciding whether the chapters are like. A category or whether you go in and you filter things by chapters slowly the website is just filter Naturally by the chapter or in.
    14:26 Ann: It is definitely filtered by chapter. Because people in South Australia really are not interested in what's going on in Queensland like. Just not interest year.
    14:37 Joe S: yeah So this could look something like this. So you go into your chapters to find your member directory instead of having a big. High-level member directory is that kind of what we're thinking or is it gonna be more like? Over directory is just one of these.
    15:00 Ann: When you say member directory, what's that?
    15:01 Joe S: I'm just kind of So currently, I don't think it's really working all that well, but in theory. There's this idea that you'll be able to.
    15:12 Ann: oh the membersearch
    15:14 Joe S: yeah, do the
    15:15 Ann: I looked this is a bone of contention for me. I really hate this membersearch there. Oh, it's awful because What they looking to do is have okay, let's start the very bottom. When you join you elect whether you do or do not want to be visible on the website to start with right if you do and you're a corporate member then you
    15:40 Joe S: Yes. yeah
    15:44 Ann: should be able to be found on the website by a corporate search however the way it set up on this one and I have tried so many times to get this change is. I'd like to see is for instance Becca in New Zealand I would like to see one. Corporate box for Becca not every single member and then when you open that box the members are there.
    16:12 Ann: So nine times out of 10 people are looking for an organization, but you can also search by members um because as it stands at the moment on the website in the corporate search every single member comes up so Beckham may have eight books which is. Really annoying so one box per company with then you open up and you see that the members that okay there are eight members that are in the back of corporate.
    16:42 Ann: Now a spa as the member search that is far as I'm aware. They only want members who are of the mies level or higher to be able to be surged because they're the only ones that can sign off on things.
    16:57 Joe S: Hello, what? And they want them to be on that level and also opted in right.
    17:09 Ann: sorry
    17:10 Joe S: As I also want to be able to have those members decide if they want to be searchable or not. Yeah.
    17:14 Ann: Of course yeah, yeah absolutely 100% because some people just do not want to be appear on the website so we have to give them that option that privacy.
    17:22 Joe S: Yeah, cool. I think I understand that so it's kind of more like a well. Let's call it directly.
    17:33 Ann: hmm
    17:34 Joe S: and then
    17:35 Ann: That only applies that directly only applies to corporate and also Mia's. Or higher at that, that's how it's they want it set up but I would like it to be
    17:46 Joe S: yeah
    17:49 Ann: corporate opener box and these members and then the MIF just holist.
    17:55 Joe S: So currently it's like.
    17:58 Ann: butcher if possible
    17:58 Joe S: Yes, I currently it's like this for you want it to be more like hold on. More like this. So you surgical and then?
    18:09 Ann: No, no, they're two completely separate entities.
    18:14 Joe S: So they are separate so like this.
    18:14 Ann: So corporate every member on that yeah, yeah, that's better yep.
    18:19 Joe S: Yep, okay.
    18:20 Ann: So because and the MIS and the corporate. need to be One step further split into chapters, so it would be okay. I'm looking for a corporate member in the New South Wales chapter and then it comes up with the corporate available in New South Wales so they're not trolling through. It's very separate by chapters every opportunity he can.
    18:45 Joe S: Yeah, yes, I think that's gonna be almost like the chapters aren't they are and they aren't a hierarchy it's almost gonna be like picking your currency for a website like you just browse as if you're part of that chapter.
    18:59 Ann: Yeah, well, they have because I set up the way the organisation with Society set up is they have the board now the board are all part of a chapter and the chapter is run like each chapter is run by a committee. So they don't want to have anything like money does not change borders. Nothing borders are borders and that is the end of it and yeah, there is no crossover.
    19:29 Ann: 100% no crossover, so they want to see that in searches. They want to see it
    19:31 Joe S: yeah
    19:36 Ann: every on landing pages. They want to see it everywhere so chapters. That's
    19:40 Joe S: yeah
    19:41 Ann: really really important New South Wales it's New South Wales slash act.
    19:48 Ann: and then the next chapter is who we got there then we've got Victoria Tasmania there's six all together and then South Australia Northern Territory
    20:02 Joe S: They loved together.
    20:04 Ann: yep, South Australia Northern Territory and then Queensland
    20:09 Joe S: Cool and then Queensland and that's all okay.
    20:11 Ann: Yep, yep, so there should be.
    20:13 Joe S: So here's here's the thing like yes, they might want to be separate but then on the homepage for example you kind of want to have a general feed of what's happening I imagine.
    20:23 Ann: not no
    20:26 Joe S: What happens if you haven't logged in and you just arrive and like does everyone do we basically almost want every chapter to have its own website?
    20:35 Ann: Have you seen it on the actual is? Website, have you looked at it?
    20:43 Joe S: I've got it open right now, so I'm looking for example awards and then it
    20:45 Ann: yeah
    20:47 Joe S: pre-selects New Zealand I don't know what it does.
    20:50 Ann: Yeah, that's how I want it. They were wanna absolutely 100% separate. So that when you go on to the website hang on let me open it up myself okay, so we have yeah chapters. See there's about membership Awards chapters.
    21:07 Joe S: yeah
    21:08 Ann: That's how they want to very separate there is no crossover. And it will they will tell you 100% it has to be that way. Because they had their own separate events. I'm telling you they had their own separate events. They had their own committees. They had their own funding they have their own Awards everything is separate.
    21:32 Joe S: So basically assuming that everything that we talk about throughout all of this
    21:37 Ann: huh
    21:37 Joe S: is going to be broken down by chapter except for this very high level admin stuff because that's actually got to go through you.
    21:44 Ann: Yep.
    21:46 Joe S: Um but anything else like education events. marketing is that
    21:53 Ann: Awards definitely by chapter
    21:56 Joe S: yeah
    21:56 Ann: And internet these in the international Awards but I'm not really sure if they want that on. On the website at all.
    22:05 Joe S: All right whether or not maybe I'll just make a box for that.
    22:10 Ann: Yeah, just question that one because that's a it's another thing that they do say I don't know whether they want that they do have a centralized calendar where every that's also on the website as well on the top line there and that's literally a calendar and it includes all chapters. And then the events. All events get put in one spot but also on the chapters landing pages, so it's actually duplicated. And that's how they want it.
    22:47 Joe S: right, so Something like this and then the same for the events the events can also.
    22:55 Ann: Yeah, it's it will be duplicated yep, so if you have a look on the website that is now there's the events title and it's if you click on upcoming events. That's just a like yep yep. So that is just a rundown on and you can see everything separated by chapter. So if you go now on to say the New South Wales or the Queensland or whatever chapter you'll see that exactly duplicated.
    23:28 Ann: on the
    23:29 Joe S: Right. Oh, so if I go to one of these like this.
    23:31 Ann: So if yes so if you now go to chapters and get onto yep there you go, so yeah, it's it's really messy and they never updated at no I have to do it and it's really annoying but yeah as you can see even New South Wales and act like should be separate. It's really really annoying but that's the way it is and everyone's used to work
    23:46 Joe S: hmm
    23:50 Ann: because members don't want to waste time scrolling through information that does not affect them. So it's even like with our bulletin that we used to have which we don't have
    23:59 Joe S: yeah
    24:04 Ann: anymore and I don't know if it's coming back. I always wanted hyperlinks because people are going to jump from they're going to go look I'm in Western Australia I have no I really don't give a s*** what's going on in Queensland so they will jump down to their chapter to see what's going on information blah blah. So it's very separated.
    24:24 Joe S: yeah Yeah, yes, so okay. Here's what I'm thinking is I'm just going to get rid of these. There will have to be to some degree of public website, so we've talked about having an old Calendar all events already.
    24:39 Ann: Yep, yep.
    24:43 Joe S: so what I've done is I've gone chapters up here and this is what you see under the chapters and we can bring that out yeah and then what we do is we also talk
    24:48 Ann: Sure, yeah.
    24:52 Joe S: about what the You know like does the directory live under the chapter like this. Is that what we're gonna do? Or is there going to be or is there going to be a general directory that you go to the website?
    25:07 Ann: I I would I would say it would be a general directory. Which then gets broken down into chapters because what you've Got to Understand with the directory it could be somebody who's not a member who is coming to the website to look for. Someone in their state.
    25:30 Joe S: yeah
    25:31 Ann: So what they're going to do is They're gonna go I need to find a corporate member or I need to find an Mis because Mia's. Can actually sign off on Projects so if you're a company who needs someone who's Mis to sign off on a project you're going to look in your state. You're not going to look in Queensland you're not going to look anywhere else if you need someone in New South Wales you need to go straight to I need. Someone so I'm going to go to the directory. I look for New South Wales act.
    26:03 Ann: And then I'm going to look for Mis members, so it's just making that step down all the time as like. If you know what I mean lights narrowing down what they're searching for?
    26:14 Joe S: Yeah, I got you. So this is like a filtering system that we're talking about for
    26:16 Ann: yeah
    26:19 Joe S: the director itself will be available from even when you're not logged in or
    26:19 Ann: yeah
    26:23 Joe S: anything like that.
    26:25 Ann: So it's yeah. It's just gonna be simplified because the way it set up now. It's really bloody
    26:28 Joe S: cool
    26:32 Ann: awful.
    26:34 Joe S: Yeah, and this is the thing is like do we.
    26:35 Ann: it's
    26:38 Joe S: We need to find the simplest possible version that allows for logged inverse
    26:41 Ann: correct
    26:43 Joe S: lockdown content and also by chapter content and there's only really two ways to
    26:45 Ann: Yep. Yep.
    26:51 Joe S: do that one is every single combination has its own page which seems like the the situation you have now which doesn't sound great and the other one is you have kind of like I was saying before like when you pick a currency on the website Everything kind of just a ranges itself based on based on. What chat to
    27:10 Ann: mmm
    27:12 Joe S: you have selected like the location.
    27:15 Ann: Yeah, yeah.
    27:17 Joe S: I think this I think I saw somewhere it says like you click in awards and it pre-selects New Zealand now. I don't know if it does that because New Zealand is the default. Or because we decided I was in New Zealand I think it just decided.
    27:27 Ann: It's just the front it just starts at the front and then you just pick where you
    27:33 Joe S: okay
    27:34 Ann: want to go.
    27:35 Joe S: Yes, so what we could do is something like. Imagine this bar this bar. Here is actually at the top of the screen and then you can select. The chapter to your browsing by and then everything else just filters itself by that.
    27:53 Ann: Yeah, yeah.
    27:56 Joe S: I think that that honestly sounds like it might work.
    27:58 Ann: If you keep honestly, if you keep that mentality of Everything's each chapter is separate.
    28:06 Joe S: yeah
    28:07 Ann: Then I think that would be.
    28:11 Joe S: Do you happen to have?
    28:11 Ann: a great
    28:13 Joe S: So, I'm just going to quickly scan. So this is a global page so about it needs
    28:17 Ann: Yep.
    28:19 Joe S: to be. Needs to be global.
    28:27 Ann: Yep.
    28:30 Joe S: What are some membership?
    28:32 Ann: Membership is pretty much for new people who are looking to become a member and people who are members and want to upgrade. So that's one just the that's Not chapter.
    28:41 Joe S: Yes. Yes, so those.
    28:48 Ann: Like dependent here.
    28:51 Joe S: Yes, there's almost like there's it's a knowledge based type there right no one. It's like membership. Guide I think maybe that's what that would be called and then you can.
    29:04 Ann: Yep.
    29:05 Joe S: Find what you need to find from there.
    29:07 Ann: Yep.
    29:10 Joe S: Cool and then there's a whole bunch of forms. Sorts this Awards entry form, so that would come here.
    29:16 Ann: Oh good. Yes, I change every year to. awards's Oh my god, if we could simplify that and and make it yeah look the Awards as awful. It's an awful setup and Because there are two different prices for people who are members and people who are not members. So and then there's early bird pricing and you know it's just
    29:44 Joe S: Yeah, yes short training long sculptures publications.
    29:48 Ann: Not have anything to do with the wards if I can help it.
    29:57 Joe S: long training courses scholarships and publications
    30:04 Ann: Yes. And yeah the wording has to be absolutely precise. There is no yeah as far as the education goes how it's set up now is 100% how
    30:12 Joe S: yeah
    30:19 Ann: they want to.
    30:21 Joe S: Yes, I would yeah, I was talking to Luca Lucia I'll get that right. Yes, I say
    30:24 Ann: Just yeah.
    30:30 Joe S: that like there's PDF so they really don't want anyone else to be able to see the PDFs in this kind of thing.
    30:36 Ann: It is really yeah, it's difficult.
    30:40 Joe S: That is a bursary so write this.
    30:42 Ann: The bursary yeah, that's the scholarship.
    30:45 Joe S: Okay, so that's actually under scholarships.
    30:47 Ann: Yes, yep.
    30:51 Joe S: How this thing works? Hard to tell the people watching they go right.
    31:02 Ann: Yep.
    31:04 Joe S: for the videos and then we've got
    31:04 Ann: It's the Guinness in are you in yep?
    31:08 Joe S: Oh, I see and then yeah, we've got publications. So we've got publications here.
    31:15 Ann: Yep.
    31:16 Joe S: and then Within publications we have started this.
    31:21 Ann: I'm not really sure that there are many publications. Oh, yeah, there is a few.
    31:29 Joe S: So that's the way.
    31:30 Ann: Oh, that's where that is. Oh, I've actually been having this issue. That's perfect. Thank you for the
    31:40 Joe S: All I try to find that.
    31:40 Ann: Oh, we've got a new standards document and everyone's like oh my god, where do we put it? Where do we put it? It's like I'm sure there's somewhere found out okay.
    31:51 Joe S: Good, there's a place for it.
    31:53 Ann: Yeah, I found it um yeah that that's near there's a lot of stuff that just is
    31:56 Joe S: was nothing
    31:59 Ann: not relevant.
    32:01 Joe S: It's quite a t203.
    32:03 Ann: Yeah, leave that oh my god. Don't touch it the other yeah that it's
    32:04 Joe S: yeah
    32:12 Ann: Coming webinars here and I'm previous webinars you have to be a member to see. That's part of membership. Yeah, the online store there's not really much in that. It's we do have a sporting publication. It's quite outdated, but it's there and the job advertisements people can. If I've got any jobs, but that's really not. Used much which is said, but yeah.
    32:45 Joe S: Are the jobs board?
    32:47 Ann: Yes, yeah.
    32:51 Joe S: Oh, there's a list of jobs and would that be my chapter or would that be?
    32:55 Ann: No, that's just a blanket thing. Yeah.
    32:58 Joe S: in general basics privacy policy I guess Cool, would you have him to have so that I have not been able to get access to this I've got the admin but I don't have the membership area which I think might be very useful.
    33:25 Ann: Okay hang on sick. So what do you need access to?
    33:29 Joe S: the membership areas so this whole member content thing
    33:33 Ann: Okay, let me just get into the admin and I'll give you. 10 second adminated admins Okay Joe I'm going to Swan what's your email address?
    33:57 Joe S: Jayo put it in the chat with that looks shall we happy?
    33:59 Ann: Oh, yeah.
    34:01 Joe S: [joe@pxl.nz](mailto:joe@pxl.nz) [joe@pxl.nz](mailto:joe@pxl.nz)
    34:01 Ann: I'll copy and paste it the way I know I've got a right.
    34:03 Joe S: okay
    34:06 Ann: Perfect, how are you okay? And what I might do? is And this will be your password.
    34:31 Ann: JoeS
    34:34 Ann: Two seconds I'm nearly done a what do you have note that's not going to be the password. fine it's not happy with that so I'm going to I'll just put your email addressing for now. It should be happy with that. Sorry about this.
    35:04 Joe S: That's alright.
    35:06 Ann: Are you happy with that still not happy with that?
    35:26 Ann: Okay so okay now. We're happy. Exactly all right and I have got you as view everything. so you should be able to log in just make your
    35:44 Joe S: hey
    35:48 Ann: password at the same machine email address that's yeah
    35:52 Joe S: okay, just Joey
    35:54 Ann: yeah
    35:55 Joe S: Cool, I just waiting for that sounds good.
    35:56 Ann: I figured I'd be the easiest way. That way you'll be able to see everything.
    36:03 Joe S: okay yeah, yeah cool
    36:07 Ann: I'm pretty frustrating on who gets full access because some people have actually deleted members in which case yeah, I tend to lose my mind a little bit.
    36:16 Joe S: Yeah, as a developer. I'm like very like I need access. I need full access to do my job, but also I'm very hesitant to give anyone else access because I've seen what people can do.
    36:29 Ann: It's like a baby.
    36:29 Joe S: I had a client. Yeah. I had a client once and they're like oh the websites down. It's an emergency and it was like unknown 10 o'clock at night and I logged in and I was like it looks awfully like someone has dragged the images folder in the FTP in no drag the admin folder the contain the whole advent into the images folder and they're like oh we didn't touch it today. I don't like well someone did and they were like okay. Maybe we did touch it today.
    36:51 Ann: Oh my god, yes, somebody who did it.
    36:57 Joe S: Like this stuff doesn't do it stuff. Yeah, what it is.
    37:01 Ann: Somebody nobody yeah, what is it somebody nobody everybody or something?
    37:06 Joe S: Yes, one thing I was thinking is I could kind of give you. A quick like this is someone else's having an area that I've built in this piece of software and it'll probably look more friendly if I switched light mode. I'm a dark cloud person, but this is an admin area that I've built specifically for
    37:29 Ann: okay
    37:30 Joe S: this website. It's not fully finished yet, but it is using a technology that that I prefer called sanity that basically lets you build out the cms's fit like four purpose so I can add things like a preview window is currently not on because it's on my
    37:49 Ann: Oh, yeah.
    37:50 Joe S: machine but you can preview your changes for example.
    37:52 Ann: Yep, yep.
    37:54 Joe S: Um you can even do things like comment and have like collaboration with other team members you can have multiple people editing at the same time. Yeah, it's
    38:03 Ann: all right
    38:05 Joe S: got some critical stuff like you can roll back to previous versions you can see
    38:10 Ann: Oh, let's handy.
    38:10 Joe S: what. Yeah, you can see you know what was changed in previous versions on this particular one. We have a form where people are submitting documents or submitting text and you can actually submit two here and review it in here to
    38:30 Joe S: approve it. So there's there's quite.
    38:32 Ann: Actually in okay my biggest bugbear. I guess is with the membership um. I have this issue where I cannot upload documents for example to members fold
    38:50 Ann: members like profiles whatever. Is that possible on this one?
    38:57 Joe S: Yes, so you're saying do you can't upload like PDFs against members or
    39:00 Ann: correct
    39:01 Joe S: something?
    39:01 Ann: not on the membership, so I think like I can upload if I'm to the landing Pages I can upload to if I'm going to send an email like an upload documents and Pictures whatever but I cannot do it on a member's profile so from the back end. Yeah, I just have to copy and paste say for instance. They send me an email.
    39:22 Joe S: right
    39:27 Ann: I've resignation I need to get that in their profile for auditing purposes, but
    39:30 Joe S: He yes.
    39:32 Ann: I can't so I've just got to cut and paste the email and pop that in the notes which is not ideal.
    39:41 Joe S: Not ideal no yes well. The thing is you can do anything in here. This is like almost like an operating system. You can unlike what you're used to with web force 5 where they're like this is the shape of the app that we have built and you need to fight tooth and nail for them to change anything at all. This is this is built like this is specifically for this website none of this existed until it was built for this website. So you can do anything you want.
    40:09 Ann: oh
    40:11 Joe S: This isn't a structure that prelike that you know came before. So this is extremely powerful. I think for your particular business simply because logic. Is quite complicated and you need that flexibility but also you don't want to be you know fighting tooth and there to change anything which you would be if he used any Enterprise tool that could do it all that was already you know very enterprising and expensive this is kind of yeah. That's why I like this because
    40:40 Ann: yeah
    40:43 Joe S: we can do stuff in it that you would be spending 10 times as much and still not really getting the same results.
    40:49 Ann: yeah, so if anyone so if
    40:50 Joe S: but yeah
    40:55 Ann: If you can get into the back end, which is where I do most my work like remember that sort of thing can you like have a limit like this one's got like for
    41:00 Joe S: Yes.
    41:07 Ann: instance. With the board members they can see everything they need to see but they don't have access to change anything. Are you able to do that? I really don't want people to come in and playing around with things I want to give them that that access I want to be able to say okay. No, you're not touching anything or if you know what I mean. So yeah, I don't want anybody
    41:29 Joe S: Yes.
    41:31 Ann: coming in the back end and is playing around as they have done in the bars and deleted memories and that's all stuff so.
    41:38 Joe S: Yeah, so this is something to figure out because sanity does have I think it does have rolls, but I guess. So like see here where you can kind of currently. It's only got one but you can have multiple basically content areas so there's an option there to basically have every chapter gets its own sandbox effectively for the content and then
    42:03 Ann: yeah
    42:05 Joe S: you're in charge of all of it.
    42:08 Ann: Yep, yep.
    42:09 Joe S: That's one way to do it. I think we would have to you know maybe think quite.
    42:14 Ann: At the end of the day, this is how I would envisage saying it. I want chapters
    42:14 Joe S: like hard
    42:19 Ann: to be able to have the access to their landing pages and so that they can oh look I've got this flyer. I want to put up yep pop that up yourself going just do it. But I just I do not want anybody to have access to membership at all. that's
    42:38 Joe S: Yes, I think that might be separate again. So yeah, what I've got here is I've
    42:44 Ann: Yeah, yeah perfect yep, let's see.
    42:44 Joe S: got main admin in chapter admin already separated. Yeah, and what I'm thinking is like the chapter admin. They'll edit this stuff. This is what they get to see this is what they get to change.
    42:55 Ann: perfect
    42:58 Joe S: But then yeah the main admin is where all of this happens like where the
    42:59 Ann: yeah
    43:00 Joe S: membership the dealt with where you're going to be doing your approvals making your records looking out to reports managing your payments all of that so none
    43:06 Ann: Love it.
    43:12 Joe S: of that will be accessible from here. That's how the accessible from here.
    43:12 Ann: oh Yes, yes, I see what you're doing. Yep our perfect that works for me.
    43:17 Joe S: Yeah awesome covered. Great so and then of course There's Gonna Be store admin to think about whether or not you want to. Like sanity doesn't have its own store for what we do is we link it to a shopify
    43:32 Ann: Yep.
    43:36 Joe S: store and then it brings across.
    43:38 Ann: Yep.
    43:40 Joe S: You know product content you put your own content on top of that content because we work with well either work with a lot of extremely custom designs so in this
    43:49 Ann: Yep.
    43:50 Joe S: case like perfume has its own product style and then books have a completely different design. So that is all managed in here because shopify doesn't really do that at all, but then what that means is you can bring that in.
    44:02 Ann: So, what is this just products or events or what?
    44:07 Joe S: This is products, but I've including all intents in purposes. It could be anything like what are we got here? So we've got a diary which is like a Blog we've got prompts which is a little bit like user comments. We've got press releases so like this is all very as an ecom site plus a bit of editorial. So this isn't really doing anything like what you'll be doing. It's just a demo of what sanity looks like in the sort of customization. You can get really.
    44:36 Joe S: Yeah, yeah, so this is just what the interface would be and then we break it down differently the only thing that you were saying that I think sanity might struggle with or that we've been talking about the sanity by struggle with is. this stuff I.e like managing your membership's specific processes managing payments like
    44:54 Ann: okay
    45:02 Joe S: it's not really designed as that kind of a tool it's more of a it's more content
    45:06 Ann: Yep.
    45:07 Joe S: you know like uploading the experience memberships that kind of thing yeah, so
    45:08 Ann: Yep, okay.
    45:13 Joe S: that's that's where I'm still breaking it down.
    45:14 Ann: So if it's going to struggle with them we have to have that somewhere else like I'm just thinking now is there a way that? Yours will be able to talk to the membership one. If you like, are we able to to be able to have that that corporate and mis
    45:29 Joe S: Yes.
    45:37 Ann: search on yours if you can't membership?
    45:41 Joe S: He yes, so when I showed you watch How We linked to shopify the way I see it working is we would link the same way to anything else if you've got a membership Database That's managed somewhere else you can have the same thing
    45:55 Ann: Yep, yep.
    45:57 Joe S: within sanity I can see all the members. You can refer to them when you're
    46:00 Ann: Yep.
    46:03 Joe S: updating a page or all the rest of it the only things you wouldn't be doing
    46:05 Ann: Yep.
    46:08 Joe S: through sanity is the same as in shopify like in shopify it deals with the Taxes and the inventory and the shipping and all the rest of it. You don't want that insanity the same would be true of the memberships. You wouldn't really want your payment details insanity.
    46:23 Ann: Got this this really is just like the front page that the website you. It's basically just the website as in all the information about is here.
    46:36 Joe S: Yeah, basically everything that's branching off from here the website.
    46:40 Ann: Yep.
    46:40 Joe S: can be insanity so that's all of this content all of the Chapter content the
    46:42 Ann: Yep. That's good. Oh my god.
    46:48 Joe S: marketing to yeah the
    46:50 Ann: Yep. That's a lot.
    46:53 Joe S: Events the Awards even the Education could all come from sanity that's fine.
    46:59 Ann: That would be absolutely awesome actually take the memberships out of it out.
    47:00 Joe S: Yeah.
    47:04 Ann: Don't worry about that having that like and and any like the chapters would have access to it. They'd be able to to be able to do it themselves or that sort of thing is that what you're saying.
    47:16 Joe S: So where yes, that's right, so the chapters would have their own sanity area
    47:18 Ann: yeah Yep.
    47:22 Joe S: their own content management and then what what would happen is basically. We'd lock the memberships behind the main the main happened essentially.
    47:30 Ann: yeah Yep, yep.
    47:34 Joe S: I'm just messing around I'm trying to like think about whether memberships can
    47:38 Ann: yeah
    47:39 Joe S: to education or not. Maybe not maybe that is very sense anyway, the idea is that yeah education is weird because it sits kind of somewhere between memberships and the website.
    47:51 Ann: yeah
    47:52 Joe S: Some of its in the member areas some of it isn't I guess anyway, I'll figure that out. So yes, that's right.
    47:58 Ann: No, you're right. You right is sometimes. We need like to upgrade to a technician for example. They need those. Long endorse courses I need that information to be able to upgrade and to myself completed that then they can upgrade so things a year that you're right in that regard.
    48:18 Joe S: Yes, so this is where things are going to get interesting because for the memberships which as we've just talked about one necessarily be insanity you do
    48:24 Ann: hmm
    48:28 Joe S: want something that can basically handle. This and this is a lot. I don't know if any one thing handles all of this all that well like the idea of having corporate accounts that can pay for memberships for example. Is pretty unique so the only thing I've only really got to options here that I can think of and one is that we build it essentially break it down and it's into its component parts built it and make it as simple as possible to manage
    48:58 Ann: yeah
    49:00 Joe S: essentially. like yeah, essentially building a new advent around how this works or we kind of
    49:06 Ann: Yep.
    49:08 Joe S: shoe horn it into hubspot, or you know some sort of Online subscription platform that can manage as much as possible of this stuff, but it's got to be it's got to be tricky because you're you have so much process around your approvals.
    49:26 Ann: Oh, yeah.
    49:28 Joe S: Yeah, and whether or not.
    49:29 Ann: You know what like I'm gonna say I'm gonna say make the membership a very low priority. Because what we have at the moment is working to some degree.
    49:45 Joe S: yeah
    49:46 Ann: I I would Focus 100% on everything else Because if it can handle if it can handle the information side of it and the
    49:57 Joe S: okay
    50:03 Ann: event side of it and the Awards education all that sort of stuff. And it can make that better than what we've got here, then. That's a huge step
    50:12 Joe S: yeah
    50:14 Ann: forward. That's like half the battle one. If you know what I mean, so that's a lot of information and I would.
    50:18 Joe S: Yes.
    50:23 Ann: 100% start with that Um I mean look at it.
    50:27 Joe S: also There's so much of it.
    50:32 Ann: yeah, yeah, I know it's and the membership side of it is so How do you put it? It's got to be absolutely 100% spot on because of auditing like the auditors are all over it all the time. So it's that's a bit of a tricky one. So I absolutely would. Love to see the rest like everything that you've got there on the left hand side there.
    51:03 Joe S: Yes.
    51:04 Ann: That's that's a lot of information and if that can be made better than it is in yeah 100% go there.
    51:12 Joe S: Also, I think.
    51:13 Ann: Because if it's gonna struggle with the membership side of it then. I think we just stick to what we've got until you know you can find a better way or something like that, but yeah.
    51:23 Joe S: Yes, so essentially what was saying is this becomes a separate project all of
    51:27 Ann: Yeah, absolutely.
    51:29 Joe S: this. Yeah? I don't know how it decides. What what to drag when you click on stuff. That's fun okay, so that that makes sense to me as well, so basically that does.
    51:42 Ann: Yeah, it's a clean.
    51:45 Joe S: Yeah, but what that means is that we would be leaving alone for now. This members area essentially or like the this part right. So this is the bit of
    51:55 Ann: What's that one?
    51:57 Joe S: the account where they manage their overdues and all that stuff would be left
    51:57 Ann: Yes.
    52:00 Joe S: alone simply because
    52:02 Ann: yeah
    52:03 Joe S: Currently, that's not like you could put content in but it to actually automate anything you would have to start building this out.
    52:12 Ann: yeah, if that's our next chance like it's gonna be quite a an extensive process in itself so um
    52:25 Joe S: Yeah, that's kind of what I'm thinking is whether or not yeah.
    52:27 Ann: yeah Anything to do with the members their profile there their information all that sort of stuff I think. If if it's going to struggle with that. Because ideally I guess what we're trying to achieve here is making it easier for chapters to set up their own events to you know get like an even if that means like you linking to a vent right and you saying it like you're leaning your linking to shopify and all that sort of thing that is if you can do that easily then that's that's really going to open that up 100% open it up.
    53:14 Joe S: Yes, that's this wherever it was study eventbrite coming in here.
    53:19 Ann: Um yeah, yeah.
    53:20 Joe S: And just being able to link to that in a content way probably just be dropping
    53:24 Ann: Yes.
    53:25 Joe S: links in to be like how this links out to your eventbrite page.
    53:28 Ann: Yep, because that's stains at the moment that the current one that we've got is
    53:29 Joe S: for now
    53:33 Ann: oh my god. It's such a convoluted process to set up events and stuff like that. It's really is awful. So getting something like that and easier process because this can't link to anything really if you can do that, then excellent. That's
    53:45 Joe S: yeah yeah
    53:50 Ann: just going to save hundreds of hours.
    53:55 Joe S: Also, yeah, I think that's it. We're just trying to like make the thing like make the website work the way it needs to to get that momentum. It seems like
    54:03 Ann: yeah
    54:05 Joe S: momentum is what it's been kind of lacking the most right.
    54:08 Ann: It is 100% The membership, I'll just deal with for now everything else can be made easier this really just gonna make my job easier 100%
    54:20 Joe S: cool awesome, I think there is Yeah, something I was hoping to Jeff about is that the reports for example these things currently they're done and the same way that the records are managed three [monday.com](http://monday.com/) the reports are done through [monday.com](http://monday.com/) with a dashboard and the issue with that is there is no year on year.
    54:37 Ann: Yep.
    54:40 Joe S: kind of tracking and if we don't build that as part of the new website that would probably have to be a later job or we'd have to find a way to do it almost as a separate
    54:52 Ann: What we're posting looking for?
    54:53 Joe S: Project So he's basically saying that like they've got a pretty good dashboard for let's say 2025, but what their current processes is when they start 2026 they copied the board clear all the data and put in the New Year's data and start from there. They basically start from a white slate because otherwise [monday.com](http://monday.com/) falls over. Which means that there's no way to do a report for multiple years because each like all the reports that they have for the current year or for that year right.
    55:25 Ann: That that actually is an issue with the database as well. You can't select.
    55:34 Ann: Like a date range, we don't have that date range ability which is.
    55:39 Joe S: Yeah, so that's that's that yeah. That's the same thing. Yeah, so that it that
    55:39 Ann: Yeah, yeah.
    55:43 Joe S: is all within this kind of Arena which means that in order to start solving that problem we would have to tackle this to some degree but whether or yeah whether or not. Whether or not it's sensible to treat this is part of the same project this initial project. I maybe it wouldn't be. yeah
    56:06 Ann: Because I think everything else becomes everything else comes before the reports
    56:06 Joe S: yeah
    56:10 Ann: doesn't unless you can get all that other stuff to work.
    56:15 Joe S: You need something to report on.
    56:16 Ann: Well, yeah exactly.
    56:19 Joe S: Yeah, that's correct. So yeah. I think we would need to. Solve kind of what platform it's all on and then go from there and currently it's all on [monday.com](http://monday.com/) and it's being done somewhat manually.
    56:34 Ann: It's actually we do it by database and [monday.com](http://monday.com/) and then we just cross reference make sure everything matches at the moment.
    56:44 Joe S: Right, yes, so there's no singles truth.
    56:45 Ann: Because everything is manual yeah.
    56:48 Joe S: Yeah, I'll get you.
    56:49 Ann: Everything's manually in on both ends at the moment, so yeah.
    56:53 Joe S: Yes.
    56:53 Ann: and that's I think that's because of the way the purchasing setup for Like because they don't renew from the database anymore. They don't renew from their profile anymore. They actually get sorry invoys the Cent directly from accounts from zero slash [monday.com](http://monday.com/). It's um. not none of that is recorded in the membership database so
    57:24 Joe S: Mmm. Yes and that yeah.
    57:25 Ann: that So when when so what actually happens is Jeff in accounts. He he just has this list okay sounds those paid so when I see that they've paid a manually going and update there membership.
    57:41 Joe S: Yes, yeah, and that is I've done that before I mean yeah. I've been running business and referral long time now and you like any manual step like going into
    57:46 Ann: Yep.
    57:50 Joe S: zero and being like has this invoice being paid is just inviting headaches
    57:54 Ann: Yeah, yep 100% and I mean at the end of the day would be absolutely ideal I
    57:55 Joe S: because you're like what if you don't check or you know what if you send out to invoices instead of one because you didn't find the first one or whatever yeah. like
    58:13 Ann: think. if we could yes at the on the first of July every year everybody gets their invoices sent out to them for renewal, but There should be able to log in and go. Where's my invoice? I need to pay my invoice and still be able to pay it if rather than have to email me and then I have to tell Jeff and Jeff has to send it to them again it becomes a bit of a convoluted process. I guess and it takes a lot longer than it should do so Yeah, which is not ideal.
    58:48 Joe S: Yeah, so that's yeah, so that's kind of what I would like to do at some point is basically this is I've called this process, but essentially what I want is this to be? Like an engine like it basically is a reference that is your source of Truth it
    59:08 Ann: yeah
    59:11 Joe S: updates your membership database it pulls from zero it does all that stuff so
    59:22 Ann: Yep. Yep.
    59:24 Joe S: this kind of becomes. It's it's own little like core. essentially making all that happen, but that that is going to be custom I think because you have am I right and say they're called bylaws you've basically got yeah, and they change and then basically what happens is this has to be a reflection of your Bible is like this actually has to Follow that yeah.
    59:42 Ann: Not just that with the approvals as well. I mean there's a very specific process as you said and Constitutionally they have to be followed so we need some system that's going to be able to follow that as well. That's why everything has to be sort of manually. Sort of done at the moment, so yeah. It's annoying but it's all we've got.
    01:00:12 Joe S: exactly Yeah, yeah, so I guess the one of the big questions. I'll be floating is yeah
    01:00:29 Ann: yeah yeah
    01:00:38 Joe S: exactly that's whether this area is part of this what we're trying to solve or
    01:00:40 Ann: Agree, that's going to be a monumental job actually the membership side of it.
    01:00:53 Joe S: shall we solve all of this and come back to this because this is easily going to
    01:00:53 Ann: It's noticed simple as as probably those said to you.
    01:01:00 Joe S: be as complicated as all of this. Yeah, yeah, and I like this this could easily be twice the size and still only be touching the surface but I think having it. Yeah. I've had about yeah four or five versions of very similar but not completely agreeing yeah versions of this conversation about what we want and what what's supposed to happen and how things work it's quite funny. Because yeah, I'm family and listening mode. I'm like I'm not correcting anyone. I'm just gonna you know try to do that.
    01:01:17 Ann: yeah, that's that's the thing I mean and I was I need to discussing this yesterday with one of the other members that actually work for ias and The thing that the trouble with all of this is we've been doing this now for six years ourselves and when we inherited this. Not approach this was to be found anywhere. We've had to learn as we go and so
    01:01:43 Joe S: mmm
    01:01:46 Ann: what's actually happening at the moment. Is that we are as we go we are creating these processes now. So it is becoming easier for us, but yeah as far as for. sideboard members and the chapter members and that sort of thing it's still An a very big unknown because they don't work with it every day, so but I
    01:02:09 Joe S: Yeah, yeah.
    01:02:10 Ann: categorically say it is getting better.
    01:02:13 Joe S: That's the go. Yeah, I like this okay. Yeah, I think I'm starting do you think this is I mean I'm gonna color code it in all the rest of it, but do you think this is a good visual tool for explaining things to people?
    01:02:26 Ann: Yes, I think so, are they just need to understand the membership side of thing is. very complex
    01:02:34 Joe S: Hmm. Yeah, I will be filling this out based on what I know so far to try and be
    01:02:37 Ann: yeah
    01:02:39 Joe S: able to talk to it all.
    01:02:39 Ann: That's yeah, that's gonna be quite a complex task because there are so it's like a spider web it's any way I can explain it's it is like a spider web and they've
    01:02:46 Joe S: Yeah, yes.
    01:02:50 Ann: created that. They you know and we've had to make adjustments to to fit what they need so and that's fine like that's the way the constitution is and that sort of thing so it's not a problem. It's I'm used to it. It's easy for me. I don't care. What is and is like the the biggest time ways to for me is doing the whole chapter thing and events and social media and you know.
    01:03:19 Joe S: Yes, yes.
    01:03:20 Ann: Send it actually that's another thing. emails bulletins that sort of thing is that something that will this thing will be able to do this website will be able to do like send out emails to Like notifications sort of thing to to all members.
    01:03:38 Joe S: So that is something that will be under the marketing wing so what I usually do
    01:03:43 Ann: Yep.
    01:03:48 Joe S: is. Basically, we use something called clavio most of the time. Have you heard of Clavier
    01:03:57 Ann: no Right okay, we're at that down and in biscuit.
    01:04:03 Joe S: It's just it's a marketing tool first and foremost and but it's got a lot of
    01:04:07 Ann: yeah
    01:04:08 Joe S: things that so it's got email Marketing SMS marketing but it also has tracking Analytics built in and also has some very so we work with a lot of e-commerce and with e-commerce there's it's it's like SAS light and what I mean by that is like you're basically running a piece of software but you're mostly. Running just the same as everybody else you're selling products and you have all the same problems as everyone else so you get you get the the known way to do
    01:04:37 Ann: Yep.
    01:04:39 Joe S: those things is less custom and what these guys do for example is they have abandoned cardi bails and you can go okay, so if they've abandoned their cart, but they have over this much money in their car, then you send an abandoned card email and you follow up in five days like that's the kind of thing you can do in clavio, but that means that if you don't just want to say you can do newsletters too and you can drag drop customize them all the rest of it. You can do like drag drop like you can put a newsletter pop up on the website. Just by editing it in clavio usually try not to do that because it doesn't look very good, but you can do it, but yeah, they've got a lot of functionality.
    01:05:19 Ann: So you can actually have like a newsletter on the website that somebody can come in and go what's going on sort of thing and flips a new on the website. You don't have to actually send it out to to members or you can.
    01:05:31 Joe S: I'm actually I mean you probably could do that that what I meant was that you can have the pop up managed from in here instead of having to like but yeah,
    01:05:37 Ann: Oh okay, yeah.
    01:05:40 Joe S: there's there's a lot I don't really know everything it can do mostly just use it for Setting people up with email marketing and sometimes transactional emails, but it's got segmentation you can do ad campaigns which you know some people get
    01:05:52 Ann: Yep.
    01:05:57 Joe S: very into their own campaigns and they want to know who clicked on what so it's got analytics for that and things like that which is also very good.
    01:06:03 Ann: Yep.
    01:06:04 Joe S: But yeah, that's the sort of thing I would suggest instead of trying to build this. into
    01:06:11 Ann: Just link it to something else. That's already built yep.
    01:06:14 Joe S: Yeah, and just making sure that yeah, so like making sure that it's the best that the best out there. And then just using those tools because someone else is spending millions of not billions of dollars making those things really really good and then using them for the bits that you can do and then it's the stuff that they can't do
    01:06:32 Ann: yeah Yep.
    01:06:35 Joe S: membership that will be where the effort goes to build your own version essentially.
    01:06:41 Ann: Yep, I like it. That's good idea the other thing.
    01:06:44 Joe S: awesome
    01:06:46 Ann: when it comes to publications there was something because I know I don't know what they're doing about the newsletter but There was a publication that I saw once and it's used like a book.
    01:07:02 Joe S: yeah
    01:07:03 Ann: Like Coles catalogues, that's all the moment you know the name of any of those
    01:07:08 Joe S: Like that yeah.
    01:07:10 Ann: and could it could it link to anything like that because I just found that good because like I said with the with the bulletin we used to be called the bulletin um because it chapter segregated. I always wanted to get a hyperlinking but this database couldn't do that. It could produce a bulletin but it was like one long page and if I wanted to jump to Western Australia I couldn't I had to scroll through the whole thing.
    01:07:39 Ann: So yeah being able to hyperlink jump to an the chapter that I am in sort of thing yeah, anything like that that you could recommend that it could link to.
    01:07:50 Joe S: yeah
    01:07:51 Ann: they've got they do have one but um I think it's
    01:07:55 Joe S: Let's see if I I'll just wanna demo stuff like so this is. See if I can find a good example.
    01:08:01 Ann: Something that easy to use too by the way.
    01:08:05 Joe S: This is in the same thing that I was showing you before. I'm just trying to find a good example if there's a I guess the home page so like the home page here if you think of this like a magazine. Is you basically just pick your pay your designs and you pick your content so in this case
    01:08:21 Ann: Yep.
    01:08:24 Joe S: they've got three of the same which I firstly wouldn't recommend is what they've done and then this is a different one. This is a different one as this is a
    01:08:28 Ann: Yep.
    01:08:32 Joe S: different one. This is a different one and the idea is that you can basically make instead of having this just big block of text bulletin style you can make your own content. In a more magazine style without having to upload PDFs because as soon as you upload a PDF you lose so much you lose all your accessibility you lose the ability for Google to pick up on what it says or link to it. You know all of that stuff is just gone.
    01:09:01 Ann: You're asleep. I did not know that.
    01:09:07 Joe S: yeah, yeah PDFs They're kind of their own little world. They do their own things for their you need to download them to read them and things like that. I mean you can't do it.
    01:09:17 Ann: Yeah, yep.
    01:09:19 Joe S: Yeah. Yes, I've just just a thought we can totally. Embed something there's you know this. You just drag and drop a PDF and it turns it into it's like a little you remember flash players from back in the day. it turns it basically into like a flash player for a PDF yes, you can do that,
    01:09:42 Ann: Yep.
    01:09:43 Joe S: but I yeah, I don't think they're as Good really for one thing they depend on the zoom level of your screen, so it's very easy to pick it up on a mobile for example and it'll be way too small.
    01:09:57 Ann: Yeah, right okay.
    01:09:58 Joe S: that kind of thing but Yeah, the literally and the thing is is actually possible here. It's just about try to find the right approach for Ticking is very boxes as possible and what goes essentially.
    01:10:14 Ann: Yeah, that kind of don't forget that kind of want everything.
    01:10:17 Joe S: Yes, yes.
    01:10:17 Ann: Like this like well. I think eight nine hundred members something like that and trying to believe everybody is extraordinarily difficult. Trying to divorce or the one chapter is hard enough for that. Yeah. Everyone's got a but I like it this way, but I like it that way and it's like trying to please everybody is so hard.
    01:10:38 Joe S: Yes, that's why I think this is good right because you kind of got okay, so we're talking to you about this area for example education like cool. This is
    01:10:44 Ann: Yeah, yep.
    01:10:47 Joe S: this is high impact low reward or you know. High difficulty level reward and you can kind of get everyone to focus on their bit and if everyone wants to talk about this. You're like okay. Well. This is extremely high effort medium reward kind of thing and then it's kind of easy to break down and leave notes, I think.
    01:11:07 Ann: Yes.
    01:11:09 Joe S: And kind of get to the point where people are like okay is all of this worth not having all of this the answer is probably no. Hopefully, hopefully that's how it goes. I'm not really used to Boards I've only ever really been in business of like listen 10 people. So be fun.
    01:11:28 Ann: Yeah, yeah, that's all right now. It's a good start. Yeah. I mean at least now. We've got like that segregation. We know what it can handle what it's going to have difficulty with and what we know we can do um that's going to be huge.
    01:11:42 Joe S: Yes. Awesome, so thank you. Thank you and thank you so much for your time. It's been
    01:11:46 Ann: great start not a problem any
    01:11:49 Joe S: great talking to you. Is there I actually went to talk to you more about your day to day follow. I haven't actually managed to get to that unfortunately maybe
    01:11:58 Ann: yeah
    01:12:00 Joe S: I'll send through some questions if that's all right.
    01:12:03 Ann: Yeah, absolutely.
    01:12:05 Joe S: I'm sure there's water and also I don't think that invite came through unfortunately. I don't know really what happened there.
    01:12:13 Ann: Look I'm happy to if you want to. If you want to set up another meeting and go through the day-to-day stuff, I'm quite happy to do that as well. Not a problem.
    01:12:25 Joe S: Awesome yeah, maybe maybe that would be good. Everybody's everything's gonna get
    01:12:28 Ann: yeah
    01:12:30 Joe S: very tight moving forward if I could get that invite through for the membership area maybe what I do is I finished putting this together and I send it to you
    01:12:34 Ann: yeah
    01:12:39 Joe S: and I feel like okay here's what's missing from there from what you do, then that would be great because then I can I can just add it in and make sure it's all in there without.
    01:12:48 Ann: it's
    01:12:49 Joe S: Awesome, yeah, I don't like I said I don't know what happened to that invite unfortunately. I'm Having seen it. Is it supposed to come through from is I suppose job pixels, sorry.
    01:13:06 Ann: This that year that adminton you're talking about.
    01:13:09 Joe S: Yeah, yeah.
    01:13:10 Ann: let me
    01:13:13 Joe S: I've checked I'm promised subject my span. I don't think it's in there.
    01:13:17 Ann: Oh hang in a second. I think what you're going to need is a different. I'm going to have to find you the link the URL to log in from the back in. um hanging a second let me just try Where do I put the chat thing here? try
    01:13:44 Ann: https://www.iesanz.org/admin/home/
    01:13:45 Ann: let's see URL to get you in the home at the back end and then log in with your Sophie just want to perhaps copy that. I'm pretty sure that's right one. Not gonna happen.
    01:14:01 Joe S: oh, yes, so this is the
    01:14:02 Ann: Yeah, we go yep.
    01:14:05 Joe S: Yeah, so what am I doing? I'm just gonna like type in my email address again is
    01:14:06 Ann: and then
    01:14:09 Joe S: my password.
    01:14:10 Ann: And I'm not a robot and then yep login. You should be able to get in and there you go perfect.
    01:14:16 Joe S: and this is
    01:14:16 Ann: So what you'd be able to yeah, yeah.
    01:14:20 Joe S: So is this one it looks like has a member.
    01:14:24 Ann: No what oh I hate is ah right okay. Let me just let you I'm gonna add you as a
    01:14:25 Joe S: Okay, sorry, that's what I was trying to get is the membership access.
    01:14:35 Ann: member um. Give me two seconds.
    01:14:40 Joe S: Yeah, it's like this looks like too much control from ever to have.
    01:14:40 Ann: members Don't worry, you can't do anything you just gonna have to let's new clients. Grip that email address again. Oh just use your email because it's so short and nice. I'll just use that as your password.
    01:15:07 Joe S: easy
    01:15:08 Ann: pace space And I'll have to make you financial so that you can actually see stuff. And hanging sick. member Associates Here just say that you should be able to log in that's all where are we okay create. There you go so same sort of log in you are there. and done yep, so if you just click on I don't know why we've got two logins remember hub and Yeah, so you looked in now.
    01:15:59 Joe S: Yes.
    01:16:00 Ann: That's how you can see from the members side of things.
    01:16:04 Joe S: Okay and then from within here. Sorry this card.
    01:16:06 Ann: Yep.
    01:16:08 Joe S: So I can I can pick the upgrade. that's just a click load against
    01:16:15 Ann: What you want to create two?
    01:16:18 Joe S: So this is all just forms and stuff, is it yeah?
    01:16:21 Ann: Yep trees.
    01:16:23 Joe S: Cool and then you've got your recent orders, which I assume is only partially working because a lot of things don't happen through the site.
    01:16:34 Ann: yeah
    01:16:36 Joe S: Yes.
    01:16:36 Ann: but um let's have a look yeah, if you look if you use any of the forms if you want to fill in any of the forms don't panic they just come through to my email address so Just I'll say you name or not now. Just playing.
    01:16:50 Joe S: I'll just try testing yeah awesome. Thank you.
    01:16:53 Ann: yeah, that's all you do test it's Joe test whatever you want to call yep perfect.
    01:16:58 Joe S: Or Joe test, I do that all the time. Cool, I mean it's pretty basic. Is that like you fell informs and you can see your orders and you can download some stuff.
    01:17:10 Ann: Yep.
    01:17:11 Joe S: Right okay, that's so I guess one thing to note is that you kind of need quite a flexible and Powerful form system.
    01:17:20 Ann: mmm yep
    01:17:22 Joe S: So, I'm just gonna write.
    01:17:24 Ann: absolutely
    01:17:27 Joe S: I'm going to write that here is like a content management will need to involve basically form management. Because you're going to want to basically be able to have people fill informs. See them on aggregate or individually I suppose for reporting sake all the rest of it right.
    01:17:45 Ann: Yeah, yeah.
    01:17:47 Joe S: Whether or not that goes here or in fact under here is a good question that's something to.
    01:17:52 Ann: It is I will suggest it would be. Yeah, it's pretty much the sign up once you've joined then you have access to your profile.
    01:18:05 Joe S: your forms Yes, yeah. Yeah, so there's got to be I mean I guess maybe it's more like this
    01:18:10 Ann: Yeah, I guess you have to do the forms two sign up so yeah. That's the first off.
    01:18:22 Joe S: forms come quite early in the process.
    01:18:24 Ann: yeah
    01:18:26 Joe S: But you do like you do need to manage your forms. Quite early on can chapters manage the forms or just mainland.
    01:18:35 Ann: No me no one else. I don't get to touch anything when it comes to membership not
    01:18:39 Joe S: no
    01:18:42 Ann: a thing.
    01:18:42 Joe S: Yes okay. Good today. I'll put that here actually. so it is behind the main admin as in chapters, can't see it but
    01:18:47 Ann: no yeah no
    01:18:53 Joe S: Yeah, but we'll figure out how to slot that I just I yeah. I know you're coming
    01:18:55 Ann: Nobody touches anything trust me.
    01:19:01 Joe S: from I vetted yet. I've been in your shoes that even see like why do they keep changing things? I've had yeah, this story is I'm sure.
    01:19:10 Ann: Oh my gosh. Oh, yeah.
    01:19:16 Joe S: Thank you so much. You've been amazing.
    01:19:17 Ann: Not a problem not a problem lately. Yeah, it just let me know if you want to set up another one and we'll go in more in depth and yeah show you what you need to show you. all right
    01:19:31 Joe S: I'm sure we'll talk soon the rest of your day. Thank you. Bye.
    01:19:32 Ann: No worries, thanks. Joe okay. Bye.
    

## Web Force Five

- Notes
    - Building a membership upgrade form
    - Continuum? CMS
        - All websites built in this CMS
        - There is a xero integration but it is basic
    - There is a bespoke division
    - https://membes.com/
    - Can design or can custom develop around a design
    - Reports are mostly managed by IESANZ
    - Admin controls for what they can see and edit
    - 
- Email
    
    Thank you for your time today,
    
    As discussed, your current website is built on our Continuum platform. However, we also have a bespoke division that caters to open-sourced platforms and custom builds, depending on your site’s specific requirements.
    
    To help us determine the best solution for your needs, please provide a brief outlining your requirements when available.Once received, I can arrange a meeting with one of our bespoke team members to scope this out in more detail.
    
    From my previous meetings with Ann and Lucka, the main areas of interest identified were:
    
    - The current membership upgrade process being labour-intensive and manual. Each applicant requires a minimum of two member referees, often extending the validation period to around 12 months.
    - We’re currently in the process of developing a membership upgrade form to streamline this workflow — improving transparency of progress dates for applicants and reducing administrative time. This is still awaiting finalisation.
    
    Please let me know once you’ve had a chance to prepare the brief, and I’ll coordinate next steps from there.
    
    Kind regards,Marian Alcantara
    
- No transcript (Microsoft call)

## Steve (Treasurer)

- Note: No call
- Email
    
    Hi Joe
    
    I have been away overseas and have now caught up with things so I can add by bit to this process.
    
    The whole reason we started this was the inability for the current website to accept payments in more than one currency – so we need that feature.
    
    Hannans, our accountants, are the best to advise on connect ability with Xero our accounting platform and I’m sure you are in contact with them.
    
    Being the treasurer, I can advise you if required on other matters relating to accounting functions but I would prefer to leave that to Hannans.
    
    I am not a marketing expert so have nothing to add on this front.
    
    Fell free to contact me if you need to.
    
    Cheers
    

## Tia (Sister)

- Transcript
    
    # Meeting Transcription
    
    Meeting started: 05/11/2025, 17:40:58
    Duration: 65 minutes
    Participants: Joe S, Tamarind Swann
    
    [View original transcript](https://app.tactiq.io/api/2/u/m/r/cPMEApA9bxXuHZAy0pgO?o=txt)
    
    ```
    ## Highlights
    
    > 02:12 Tamarind Swann: I've got one tomorrow midday, but the other one is done and today they didn't.
    
    ```
    
    > 03:08 Tamarind Swann: like yeah, I was getting really annoyed at the project manager because like He's not giving me access to we've got like. A chain of systems and he hasn't given me access to like. the the important one that tells you if it's worked or not but he keeps like
    06:08 Tamarind Swann: Not my favourite kind of project for sure but the one that's going to tomorrow.
    06:16 Tamarind Swann: Good yeah, the one tomorrow is really good though. yeah, because that one's just we're deploying a new SAS product and everyone
    16:37 Joe S: yeah, there there remind me of What was that company that built websites and New Zealand in like the early submit 2000s?
    24:26 Joe S: Well, the the thing is. I think the thing is the value of this system. Will come from the order like it will largely be that automation process because the issue that they mostly have is losing track of things.
    33:59 Joe S: Yeah, absolutely so yeah, I talked to Andrew who's basically there. I don't know what you call and CEO essentially so that was his notes. I need to go back through these which is what I'm going to be doing probably tomorrow. but yeah, he's like I've got like several versions of the same conversation because there's like everyone not a Rolls-Royce website everyone is
    35:45 Joe S: Would you say Salesforce so I think the issue? I could see is it?
    37:27 Joe S: Yes, Saturday the yeah the issue. I was bringing up the sanity as it doesn't
    45:41 Joe S: Yeah, yeah, I was thinking. Yeah, because there's kind of like value or important.
    46:23 Tamarind Swann: but The value of yeah like might be really high value because there's a deadline
    58:36 Joe S: Yeah, like I saw what you said this has like something that wouldn't fit in the budget or is less important.
    > 
    
    ## Transcript
    
    00:00 Joe S: Hello.
    00:00 Tamarind Swann: Hello.
    00:02 Joe S: The bottom of your face is cut off.
    00:05 Tamarind Swann: oops I seem to have a background on.
    00:11 Joe S: He's seem to be flying.
    00:19 Tamarind Swann: That good background.
    00:22 Joe S: I can see her about.
    00:24 Tamarind Swann: Can't see can't see clear, but it's her but anyway.
    00:34 Joe S: how you
    00:35 Tamarind Swann: I'm good, how are you?
    00:38 Joe S: I've got a headache so I've got a message right now.
    00:43 Tamarind Swann: oh
    00:44 Joe S: And that's why but this funny egg.
    00:48 Tamarind Swann: What kind of massage device be have?
    00:53 Joe S: What are these boys?
    00:55 Tamarind Swann: oh
    00:57 Joe S: yeah
    00:58 Tamarind Swann: What cause your headache?
    01:00 Joe S: I don't know I just maybe I got a bit too. sunstroke yesterday was nothing I was out in the sun with Mum but I don't know maybe I didn't drink either way. Yeah. Anyway, so I've just been a little bit. I don't know a bit blah yesterday today. Anyway. Just day before she just brain not working amazingly well, so I don't know yeah, I do. I do think it might be just like.
    01:37 Joe S: The back of my brain is like we're moving soon. Let's worry about that or something. Mmm. Anyway, I missed chatting to you on Sunday how are you?
    01:55 Tamarind Swann: Good last week was pretty crazy.
    01:56 Joe S: Yes, I exist oh, yeah.
    02:00 Tamarind Swann: yeah But less slightly less stressed than I was now so that's good.
    02:08 Joe S: Did you get your other deployment done?
    02:12 Tamarind Swann: I've got one tomorrow midday, but the other one is done and today they didn't.
    02:22 Tamarind Swann: Touchwood there was no issues that came through today so
    02:25 Joe S: That's good.
    02:25 Tamarind Swann: That one's okay.
    02:27 Joe S: What's your role? Usually you just kind of rounding triaging and things like oh that sounds like a developer thing. Oh that sounds like someone's up the wrong content thing.
    02:38 Tamarind Swann: Yeah, I do a lot of that stuff with the go lives like I usually would do smoke testing and stuff and coms and to help like with users when they've got feedback and stuff or questions or bugs to report. And the year this one's been very weird very weird project don't like it.
    03:03 Joe S: yeah
    03:08 Tamarind Swann: like yeah, I was getting really annoyed at the project manager because like He's not giving me access to we've got like. A chain of systems and he hasn't given me access to like. the the important one that tells you if it's worked or not but he keeps like
    03:31 Joe S: so he's Gate keeping or
    03:33 Tamarind Swann: saying hey
    03:34 Joe S: Is it gatekeeping or is he doing something else to just speak about useless.
    03:38 Tamarind Swann: Just a bit useless. I think like he does get keep but I think this is just easily useless and he wants to do it himself, but then he keeps asking me dumb questions because like cake clearly doesn't know how to do it.
    03:50 Joe S: Yeah, he's like I'm trying to show that I am valuable but also I need your help to do that because I'm not really. yeah
    04:00 Tamarind Swann: yeah Like he's he's got plenty on his plate. He could definitely be I hope he wasn't doing this kind of stuff. Before on other some of the other stuffies working on because like that yet. There's definitely been some Bulls dropped that like. Yeah, I don't think it's very good at like delegating and getting having that like. like balance of high level and detail yeah
    04:34 Joe S: Oh knowing knowing what level he should be involved that and what level he should be involving other people that I suppose.
    04:42 Tamarind Swann: yeah
    04:44 Joe S: yeah
    04:44 Tamarind Swann: yeah feel bad for a guy cuz like he's pretty new and they just dropped him and Kind of the most the most complex technically and politically project that we've had for not just this year but in general.
    04:58 Joe S: it Politically is the bit workouts taking credit and they're not really involved.
    05:01 Tamarind Swann: yeah Yeah, but yeah because it's like going it's come from Wayne Brown like this jerko group is like right to the top. You know like it's got visibility right to the CEO in the board and stuff so.
    05:22 Joe S: Mmm. So the steaks are high.
    05:23 Tamarind Swann: like Yeah, the steaks are really high and it's got a lot of visibility and also like there's a lot of. layers of approval and a lot of Like I guess. conflicting strong opinions
    05:44 Joe S: I had said she'll pick it your words carefully but You don't have to.
    05:50 Tamarind Swann: and it's just like A hard to explain the way the system.
    06:01 Joe S: yeah It sounds horrible.
    06:08 Tamarind Swann: Not my favourite kind of project for sure but the one that's going to tomorrow.
    06:11 Joe S: You might need to go start off or something really like there's only one person ever voted.
    06:16 Tamarind Swann: Good yeah, the one tomorrow is really good though. yeah, because that one's just we're deploying a new SAS product and everyone
    06:23 Joe S: but
    06:26 Tamarind Swann: really wants it that it getting it and Yeah, that's just like such a different position to be in.
    06:35 Joe S: You like cool. Everyone's onboard and happy yay. Oh.
    06:38 Tamarind Swann: Yeah, people actually won't work building this time.
    06:42 Joe S: Yes, I need I would like more of this. I mean not them people don't want what we build again. Just don't really seem to understand at half the time.
    06:51 Tamarind Swann: Yeah, especially with the stuff like. Like one of my projects it's like. They they want the bit that they want but they don't understand that to get there. There's a lot of like. Other slightly more boring things that you have to do first like.
    07:12 Joe S: Yes, yeah.
    07:14 Tamarind Swann: yeah
    07:17 Joe S: yeah, it's a plan was it an hour of This an hour whichever it is like a day of death and saviour our planet or something like that. One of those gists like we could now or we could waste weeks later see. mmm
    07:45 Tamarind Swann: but we bought our tickets to come home on Christmas
    07:50 Joe S: Yay, it's good.
    07:51 Tamarind Swann: I'm feeling very broke.
    07:55 Joe S: We're gonna just mess you as well.
    07:55 Tamarind Swann: I Yeah, I know.
    08:00 Joe S: It's okay. I'm just glad Bob swap. Got to have a quite Christmas she'll be able to have a Christmas with people.
    08:07 Tamarind Swann: mmm yeah
    08:11 Joe S: And she's going over to see you very soon as well, isn't she?
    08:12 Tamarind Swann: Yes. see you arrives on Friday
    08:17 Joe S: Yeah, that's exciting I'm dropping off at the airport. And then two days later we fly out to Brisbane to hop over to Hamilton Island for a few days. It's not like we're quiet either.
    08:32 Tamarind Swann: Wow, so what what are your plans? So that's the wedding right?
    08:32 Joe S: yeah Yes, and then we get back and like literally. Two weeks to pack everything up, so I've got a sort of all these vehicles to sell I put the BMW on last week and no one's really seemed interested. They are about to track a couple more on. So good luck with that I guess.
    08:55 Tamarind Swann: Yeah, we really struggle with that. We almost thought we weren't going to manage to sell our car. And we did have to take a massive pay cut like from what we wanted as well to
    09:01 Joe S: yeah
    09:06 Tamarind Swann: get it to sell.
    09:08 Joe S: Yeah, I am concerned.
    09:08 Tamarind Swann: Which was a shame because it was like an big investment for us. We've like. Bought it with the thinking that we would get like most.
    09:17 Joe S: hmm Yeah, yeah, I think I might just have to go to rail or something and be like if they don't sell. Here's the keys to everything can you?
    09:32 Tamarind Swann: bit longer
    09:32 Joe S: Yeah, but it's another market a bit longer because yeah, I don't really want to sell if they're not going to you know I don't want to sell. All of it for no money. Maybe one or two of them and something like Legacy for example. Pretty cheap I think but I wouldn't I wouldn't want to sell the bike or the BMW for nothing to be honest if I could avoid it. Yeah.
    09:59 Tamarind Swann: yeah
    10:00 Joe S: Yeah, it's hard work and there's so much to do. I got a good guard during the other day that was nice. Like the hidden James's garden and under charge them when he came here and he's like yeah see how God know that for 80 bucks so there's like I didn't tell that but I just handed him double.
    10:26 Tamarind Swann: Off that's nice.
    10:27 Joe S: Because like he did spend a while doing everything and I'm like this is a good way. Sometimes I take a little bit of that goes a long way. Maybe if it's I mean cynical or not. It's just kind of nice to be able to help. any who I wanted to pick your brain that that's okay, because you showed me that they were you zoomed out and you zoomed out and I was like oh no, I have Not thought this well. I have thought it true but I don't have.
    11:04 Joe S: The I don't have to words is the right way to put it. I don't have the like list of things. I need to do in any kind of concrete sense. I was thinking I I'm probably more likely to go well. We need a view of it from like a user story view in a view of it from like the technical view and a view of it for this view, but I don't know if there's like.
    11:30 Joe S: Yeah, I don't know any of the processes. I'd probably just start solving problems until I felt like I'd run out of problems and I don't think that's necessarily the most efficient way of doing it.
    11:42 Tamarind Swann: What are you trying to do? Is this a one project particular Project
    11:48 Joe S: Yeah, calcium. I screen. I'll talk you through. So, this is the I haven't done much on this well. I've done a bit but basically. Remember remember this so I'm gonna redo this. I had to go another app because I wasn't the biggest fan of this one, but then I don't have another app that lets you do circles. Where like flow charts where things go in a circle. I found another app that aligns things nicely and it didn't go and a circle and then I look back I tried narrow again.
    12:30 Joe S: And I was like no that's too funny other way where you have to like manually set your font sizes and everything I'm like no I don't want that I want to I want to be able to pick from like three font sizes. You know that kind of thing. I don't really enjoy the idea of having to like manually style everything all over again.
    12:48 Tamarind Swann: Mirror has really good templates though. I never start from scratch. I always just one of the templates.
    12:54 Joe S: Maybe I should look into that so you can basically just go like pick from one of these boxes and use that box from template.
    13:00 Tamarind Swann: Yeah, like you can find a template for a basically anything but you could find a template that's basically the same as this like. Pre-created and then you can usually the templates will have like a example version in a blank version and you can either just fill it or I often will just copy the components. and like Create it from scratch, but using the styles that they've created.
    13:31 Joe S: Hmm. Yeah, that's kind of what I had in mind is not doing this from scratch
    13:35 Tamarind Swann: hmm
    13:35 Joe S: okay.
    13:36 Tamarind Swann: I never do that. Why do you ladies?
    13:40 Joe S: Fair enough, so I've been thinking about this and I chatted to do pack about it. I got to present this on Friday to like two big dogs and d-pag and basically what I'm thinking is. First of all this is kind of two projects. Do you mind if I go into detail into what the project is?
    13:59 Tamarind Swann: Mmm. Good for
    14:01 Joe S: So this thing on the right. This is their membership system.
    14:43 Joe S: and one of they've got two vein issues one is their membership system is run by The accountants using [monday.com](http://monday.com/) and the secretariat who manages everything and then all of the other processes managed by like so too many people like the boards and stuff like that so in some ways. That's okay. The problem is using [monday.com](http://monday.com/) and manually sending. Invoices and keeping track of whose played what they also pay everyone pays or gets invoiced on like June of the Year like the end of some financial year or
    14:55 Tamarind Swann: What do you say there finance their invoicing software?
    14:56 Joe S: something so then they have to do prorated invoices and all the rest of it. So this is a bit of a cluster f***. They're usually they're literally they are using zero for the invoicing
    15:09 Tamarind Swann: Like as a a serum and a supply list.
    15:21 Joe S: software, but they're using [monday.com](http://monday.com/) to keep track of all their memberships manually. Literally yes yeah and they're using it to generate their reports like they're basically using it like a series of spreadsheets and from the sounds of it what they're doing or yeah, so talk to this guy who was like basically managing but the [monday.com](http://monday.com/) side of it for them and he's also an accountant and he can do reports but he basically copied.
    16:25 Joe S: The database for every year and updates it for that year, so they can't do year-to-year reports. They basically just have like three years of records that are just like a snapshot of whatever was happening at the time. Which obviously is great if you need to do any kind of like? This is the growth in memberships or or this is what was happening with this membership three years ago like I don't I can't even imagine how they're managing all that.
    16:31 Joe S: So yeah, that's this side and then all the way over here on the other side they have. Like all this content so their website is first of all. It's a huge mess.
    16:32 Tamarind Swann: Don't think so.
    16:33 Joe S: But the secondly it's basically. This is built in have you ever heard of web force 5?
    16:35 Tamarind Swann: Is the canola thing?
    16:37 Joe S: yeah, there there remind me of What was that company that built websites and New Zealand in like the early submit 2000s?
    16:54 Joe S: Um and they just had everything like wrapped up that you basically would just building in the cms. I can't remember what it's called now. I interviewed with them. Anyway, yeah you based and black Pepper's kind of like this. They're like we have a CMS and you use our CMS and it can do anything and then as soon as you're like but could you do this they're like no.
    17:16 Joe S: But yeah, I think that stuff hilarious. It's just so funny. We were talking to the salesperson and they're like yeah, you could do that and I'm like but actually though. Yeah, because it seems like you one thing about this that is.
    17:26 Tamarind Swann: can you that's
    17:34 Joe S: Hilarious is so they only turn over I think a million 1.5 or something. but they have These are their chapters. So they have each of these and I think they're volunteer run but each of these is a whole different sub organization, so they have the board.
    17:55 Tamarind Swann: well
    17:59 Joe S: So, this is the thing they don't have microsites they have.
    18:04 Tamarind Swann: I just have behave I could page.
    18:07 Joe S: They basically have a paid for tabs on it which is awful. For something that is fundamentally almost like your filtering the whole website by being in this chapter so it's almost like you need all your calendar and all your events and all your educational whatever all your members that you're searching all your Awards all your memberships all of that stuff. Is in so all your news all the rest of it that you might visit other pages or is almost like chapters specific. It's weird blend of like.
    18:38 Joe S: Okay maybe some stuff is public like maybe your advertising your international conference that every every chapter is going to be at or maybe you're just saying that this chapter's have it on award so many down the road then because you're in that award and you're in that chapter. That's what you care about so a large part of this in my head is like organizer get in such a way that you're like the navigation will be like mostly by going I'm in this chapter and some of it will be populated by Like general content but most of it will be populated by what's going on that you care about if that makes sense. So I had this idea of basically going.
    19:27 Joe S: There's a content feed the content feed is managed by the chapter admins who aren't responsible for any of the main financial zero or the rest of it. They won't see or touch this and then. Also the secretary who is in charge of most of the like. like any of the main content that isn't administered by a chapter so There's content management from both of those that goes into content feed for the ones. I've been better word and then that goes into the website and the whole website is updated mostly based on that.
    20:04 Joe S: That's the that's the live content and then you'll probably have some more static content like the about page or whatever. Does that make sense like separating it into content feeds and like static as General concept for content?
    20:22 Tamarind Swann: mhm
    20:23 Joe S: And then the yeah and then the content. Feeds for the split up by whether they're general or to do with the chapter and then that's how the website works like maybe every chapter is like a sub. Folder so it's like slash ias/nz/news would be how you get around the website for the most part. So that's kind what I was thinking all of that. There's a lot more. To that but the idea is that's how the chapters would work.
    20:58 Joe S: Now against f**** because they also have a membership section and if you're signing up for your you know webinars or whatever you have to be logged in and that's where you see. Yeah, that's where you see most of what the value of the site is which is like. Oh, you can go and browse all the publications there so that I don't know if I've actually explained this but they're basically like a lighting industry.
    21:32 Joe S: co-op thing so
    21:35 Tamarind Swann: Yeah, that's like the business and analyst Association that I'm part of or was
    21:37 Joe S: yeah, so
    21:41 Tamarind Swann: before.
    21:42 Joe S: Yes, I imagine this a few of them around. I'm sure you know accounting has.
    21:49 Tamarind Swann: Yeah, there's an events one as well that I used to be in.
    21:53 Joe S: Yeah, and they're basically trying to say that like they're trying to bring value through this very broken website and it's not working because it's not a lot of value here to be found. But basically they run events. They will help you with your education and then they will. Help you out these advertise yourself to each other essentially like you can have your business in a directory and then when someone searching for other businesses, they can find you or your corporation.
    22:25 Joe S: And you can buy sponsorships and advertising for their various events and all the rest of it, but basically it's a closed system where they're like the value of the system is being in the system. Which is kind of funny but anyway so that that is. This is the best every time. I look at it. I'm like well. There's somebody different ways to look at it and you could link things across to everything else if you think about it too hard.
    23:00 Joe S: Um so the main thing I want to do is keep the memberships and the front end separate because this is a project to me. I very complicated project because essentially. This business logic that everyone's memberships runs off and how they like upgrade their memberships to become a fellow or whatever. Is literally run by their constitution which is a written set of laws that can change? So you're basically say your business logic.
    23:27 Joe S: Is almost like taking this loyaly set of bylaws and turning it into a program and then shoe Horning all this other stuff into it like that's that's this project. And it's like yes, you could do that, but it's not going to be cheap and I don't think you've understood necessarily how how complicated that might be or even if it's simple, what would be involved like the simplest version of it. Is you build the bylaws into a program.
    23:59 Joe S: And you almost stop there you put the things in like you go out of member and it kicks out this member is on this tier and you need to send this invoice and it's like yes, that's where you would start it wouldn't be any simpler than that it would be almost like a membership calculator.
    24:17 Tamarind Swann: Right and they want that to be automated not like a selection that a person. Does based off a matrix?
    24:26 Joe S: Well, the the thing is. I think the thing is the value of this system. Will come from the order like it will largely be that automation process because the issue that they mostly have is losing track of things.
    24:46 Tamarind Swann: right
    24:46 Joe S: And they don't have a source of Truth they don't really have a source of truth for like has this member paid or not is this member that is trying to renew or like trying to sign up someone who has previously been a member and they have lapsed. They may have told us. They are but whether or not that's true. Is that something that's easy to find out like that kind of thing.
    25:12 Joe S: Is the source of Truth stuff that I think is mostly what they seem to be missing?
    25:19 Tamarind Swann: Because they're not using like Salesforce or an actual serum system.
    25:24 Joe S: exactly and even if they were their membership process is so convoluted like You can you can be. They have these corporate accounts and corporate accounts can pay for memberships, but they're not members themselves, but then. Like they have issues and people signing up with different email addresses to get some sort of bonus or whatever they just keep doing it over again and I'm like you could basically say that.
    25:55 Joe S: You have to sign up with the domain name like app whatever your company is in order to use that corporate account or something like that, but these are all rules that you kind of want to build in. Oh and another thing is they need to be able to handle. both Australian and New Zealand GST and I'm not 100% sure That they know why but I'm thinking it's because if you're in Australian chapter.
    26:28 Joe S: Your paying an Australian organization, but if you're in New Zealand you're paying the New Zealand chapter. And I'm like I don't know if they know. whether or not they're more than one organization or not in that sense if that makes yeah, I don't know if you dealt with that before but I'm sure isn't that unusual anyway, so This this is a bit of a class effect this is just big.
    26:58 Tamarind Swann: yeah
    26:58 Joe S: Like like they sell tickets through eventbrite that the tickets are used for both their rewards and their conferences and maybe also their webinars. No one seems to be sure. They kind of want to store but they only seem to know what the story is in terms of selling sponsorships and advertising and I'm like that's a lot to stand up a whole shopify store for if you're basically selling something that isn't even
    27:24 Tamarind Swann: and
    27:26 Joe S: really a product.
    27:28 Tamarind Swann: yeah Probably worth reinvesting that effort elsewhere.
    27:34 Joe S: Yeah, and like a lot of it could just be cleaned up by just having a site. That's got all the same content on it in some form or another but massively tidied up and much easy to administer like this is the funniest thing but you have an events not even that they have a calendar. But the calendar doesn't have any information under it and if you click this it
    27:58 Tamarind Swann: and
    27:58 Joe S: just opens and email. it literally just opens the What is going on here? and one of these I think it's this one yeah this conference link it links to the 2023 That wasn't the last conference you had. What is going on? Let's just so much stuff like they've got inside the membership hub. a large percentage of what the membership have does is doubt you download PDF forms to fill in and email to the secretary, who will then Manually take the process to the next step so you're like oh okay, so none of this is actually online at all anyway. It's just you download a PDF
    29:00 Tamarind Swann: Wow. surely Monday has online web forms that you can automate tasks and Monday
    29:10 Joe S: I think you.
    29:11 Tamarind Swann: if they're committed to Keeping with Monday
    29:14 Joe S: Yeah, I think the problem with Monday I think is that. Any database program like that? Is about the same level of like functional as let's say using Google sheets like a spreadsheet you can do it. But the sheer facts that it's being worked on manually gives it this like level of fragility. Like you can't do a migration really like if you need some migrate something in a real database. You're like okay. I've written a script that goes through every single user that we have pulls this information from here fills it if it exists if it doesn't exist at leaves it blank and it does that for about five different things something like [monday.com](http://monday.com/).
    30:11 Tamarind Swann: hmm
    30:12 Joe S: Basically means you can't do that all. It'll take a week because you need someone to do it manually like it. Just doesn't really work the same way.
    30:19 Tamarind Swann: Tell me about it. Yeah.
    30:22 Joe S: I don't hate the idea of using sanity because sanity's this really nice middle ground of like. It's not so strict that any database migration is a huge pain in the ass, but it's not so flexible either that you end up with like people just f****** around with the schema all the time. Like you can write you can write your own migrations essentially but I also wouldn't like it doesn't really do workflows and one of the problems with this is for example. Someone needs to upgrade their membership from let's say.
    31:01 Joe S: An associate which I think is their lowest here to a full-on member they basically need to provide a bunch of documentation. And then the board needs to in one Way Or Another sign some stuff off with docusign. And then once they've signed up with ducky sign it can be sent back. Oh, they also need to pay for it or whatever but once I've signed enough stuff off. They can kind of ticks and boxes maybe said it to someone else take another box and then they can be upgraded.
    31:38 Joe S: And all of like and there's about four or five membership tiers and every upgrade from one tier to the next is different. The whole process is different that is why I think this need and that's like a large product think of the constitution that they've got is that. That process written down it seems overly complicated realistically for what they're doing it should just be like as this web member took these boxes and it all about it goes. Yes have they paid yes? Yes, you've ever shipped someone could review that at some point if they want to.
    32:19 Tamarind Swann: Yeah, I mean it does kind of sound like all of those membership options. Are like yeah, you just need to create like a matrix of what the scenarios are and how those the handled. And create the products for whatever that is and like for the corporate one. You'd have to find a way of like potentially sharing membership login, so that could be more complicated but like The bylaws thing it's just.
    32:54 Tamarind Swann: Writing down what the rules are right like just getting clear on what the rules are.
    32:59 Joe S: Yeah, yeah, so this is.
    33:00 Tamarind Swann: And putting it into some sort of system.
    33:04 Joe S: Yeah, so this is like so I took notes with these are all the meetings. I've had so far wait. the treasurer web force 5 and versy look at Tita Greg
    33:15 Tamarind Swann: Have you do some collapsible?
    33:18 Joe S: how sir
    33:19 Tamarind Swann: how are these collapsible what kind of
    33:22 Joe S: Lotion you can just huggle them.
    33:23 Tamarind Swann: Toggle, that's what that does that's very cool.
    33:28 Joe S: It's I really find it. I don't know if I could live without no s*** at this point. I didn't like it to begin with because it was like two floppy. I was too flexible. but for stuff like documentation
    33:42 Tamarind Swann: Notes taking as well. Yeah.
    33:44 Joe S: Yeah, it's just it's just to good at like keeping a record of everything in a way. That's like this project is different from all the other projects because of course it is so let's just keep records the way this one works.
    33:56 Tamarind Swann: And searchable as well.
    33:59 Joe S: Yeah, absolutely so yeah, I talked to Andrew who's basically there. I don't know what you call and CEO essentially so that was his notes. I need to go back through these which is what I'm going to be doing probably tomorrow. but yeah, he's like I've got like several versions of the same conversation because there's like everyone not a Rolls-Royce website everyone is
    34:28 Joe S: Gonna have their own different perspectives and not everyone's gonna agree even on how the existing one works so I basically asked a lot of overlapping questions because I'm like.
    34:36 Tamarind Swann: yeah
    34:37 Joe S: If if there's any discrepancies, I need to basically be like well, so say well two people said two different things so someone needs to come back to me and confirm which one is real. But yeah, so this is why conversation with Jeff who had a wall of anime behind them and is the guy who manages [monday.com](http://monday.com/). He was nice, but yeah, I don't know I think he might be a little bit out of his depth trying to manage this [monday.com](http://monday.com/) thing.
    35:10 Joe S: Yeah, notes like if you cancel your membership your you don't just cancel you don't get credit or anything. Just stay remember till the end of year.
    35:20 Tamarind Swann: And then it doesn't renew yeah.
    35:22 Joe S: Yeah, oh and there's like.
    35:23 Tamarind Swann: A lot of those rules are like very similar to the organ art gallery membership rules.
    35:29 Joe S: interesting and do they just use a standard CRM
    35:33 Tamarind Swann: they just use Salesforce yeah, it is like it's not just like it is customized it as a little complicated but yeah
    35:45 Joe S: Would you say Salesforce so I think the issue? I could see is it?
    35:50 Joe S: Like it seems like only one or two of the people who work on any of this isn't a paid position. And everyone else is like as much as they're doing it for cloud. There is a
    35:57 Tamarind Swann: hmm
    36:02 Joe S: level of they only ever really spend time when it's very visible politically. And they don't want to be doing any grind work and part of the point of
    36:10 Tamarind Swann: yeah
    36:12 Joe S: automatic this to me anyway is to basically let them have their have their grind work cake. Like hammon's 360 is paid. They're the accountants. They're paid to do the work but almost no one inside the business is realistically going to be doing much more than like. Updating the stuff they care about you know they're not going to be managing memberships or whatever They're gonna go I want to click the red button and get a report like that kind of thing.
    36:42 Tamarind Swann: Yeah, I feel like. you probably need to come up with a bunch of options right like a table of like if you went with something that is a CRM Then potentially you could also use like AI agents in the future, and it would like you'd have that longevity of being able to migrate do better reporting or that stuff but the playoff is like that would be more expensive upfront and potentially a bit more effort day to day or you could do a workaround with another system like was it sanity that you said.
    37:27 Joe S: Yes, Saturday the yeah the issue. I was bringing up the sanity as it doesn't
    37:32 Joe S: really have a way as far as I can tell to let go see your updating a piece of content from one state to the next. It doesn't really understand that there might be multiple steps. You know like you might tick a box right but the process to take the box might rely on two other things or whatever.
    37:52 Tamarind Swann: like the dependencies
    37:54 Joe S: Yeah, like yeah dependencies, but then that's also what I would be worried about with Salesforce or hubspot. Is that like? You would for the most part probably just be running into the same issues or it's like help spot doesn't know. All care that you need to upload your CPD details in order to check your membership from an associate to a fellow or whatever the case may be.
    38:25 Tamarind Swann: Unless you make it like you can build in rules and requirements like that for. like for Salesforce who definitely can but
    38:40 Joe S: Successfuls have got like a scripting thing, doesn't it?
    38:45 Tamarind Swann: That's scripting.
    38:45 Joe S: Like they've got their own Salesforce like version of JavaScript that you use to write.
    38:53 Tamarind Swann: Yes, so you basically create workflows and like those will be automated
    38:53 Joe S: things for sales
    39:00 Tamarind Swann: workflows, but it will have points in there that as like checkpoints where there's a human step that has to be done or like your wait until that is
    39:07 Joe S: yeah
    39:10 Tamarind Swann: completing them on to the next step you can build all that kind of stuff but even then your like objects. Like your customer object you can set rules and parameters so like you have to have done a certain thing or you get a reminder if you haven't loaded a particular document or whatever.
    39:32 Joe S: yeah, yeah, so I guess my thing is like if I suggest something like Salesforce Then it's gonna be taking this bet behemoth of a piece of software. And Tailoring it to this news case probably once with the aid of consultants and
    39:54 Tamarind Swann: yeah
    39:57 Joe S: then it will not really be able to change from that and also. The platform itself will probably keep changing and it'll in my head having that work that way. is ultimately fragile because you're You're kind of baking your logic your business logic into a platform that isn't natively working that way. And what I was thinking almost is starting from the other end where you're like. You're logic is the very core of everything.
    40:32 Joe S: Your it's the immutable core of the onion and something like sending invoices from strike or it keeping records and your CRM apple choice actually is one of
    40:50 Tamarind Swann: Mm-hmm yeah, I think you're right. I don't think Salesforce is the best answer but I think you should acknowledge it as one of the options, but put it as like a pros and cons right. right
    41:10 Joe S: the layers of the Onion not in the middle. yeah
    41:11 Tamarind Swann: uh-huh okay
    41:11 Joe S: I've been these are these are yeah typed like these are people who are like. Why can't we do it in WordPress we plugins so the bar is pretty in fact in on the floor.
    41:14 Tamarind Swann: But I think what you are saying though just then. That makes a lot of sensory as starting with the like. Those journeys or user stories however you want to document that of what you were explaining to me where their pain points.
    41:33 Joe S: mmm
    41:35 Tamarind Swann: And like starting with their journeys and kind of showing. Using that as your like. Vehicle to figure out, what's the best?
    41:47 Joe S: So almost like starting with the whole podcast like I hear what you're saying and I'm gonna like try and rephrase it if you'd be so kind as solicitor that you basically say it back to them and what you're saying back is like essentially a shortened version of each of the roles that they have that they struggle with and also each of the each of the user stories for the general categories of user story like as a member I go here and then I have to download a PDF and it's a pain in the ass that kind of thing you just kind of running through a list of
    42:15 Tamarind Swann: mmm
    42:18 Joe S: the stories. That are the problems to solve. as the start of the conversation
    42:24 Tamarind Swann: yeah Yeah, that's like. I guess a bunch of different ways that can love but I think starting off with like you've you've done your research. You've listened. You've heard what they're saying and these are the points that stood out to use like particular bottlenecks or things that need. addressing first and like Some of those will be like as a member. I want to blah blah. But some of them will be like.
    42:58 Tamarind Swann: More I guess feature-based or like more of the journey and linking content sort of stuff that you would tell me about no.
    43:10 Joe S: Hello. How's it go? Yes, yes, so I think starting with that and then yeah the actual reverse brief. I was gonna break down into. Just the general sections of like starting with the front end. And that was kind of like we were just talking about also broken down into portfolios a what each person who's dealing with the website cares about so like someone has about conferences the front end will have a conference section like it makes kind of sense to reflect that in such a way that they can understand it and also like a chapter. We'll also be managing.
    43:54 Joe S: Events what do they care about and then kind of going from there into the membership and from there into the back end? And kind of running through it in terms of general category and when I go to the back end. That's what I probably be like this makes more sense as a phase two because we've been talking for an hour already and we've only covered the front end and you know like there's so much value to be had here.
    44:23 Joe S: And it is so different from anything that happens and you know apparently on [monday.com](http://monday.com/) that could probably make sense to treat it as like a separate thing. You know you're solving separate problems you probably wouldn't even get the same developers to do it because one is very visual and the other one is very you know database heavy technical. What does that make sense?
    44:46 Tamarind Swann: Yeah, like you kind of have to have catered both sides of that right.
    44:51 Joe S: Yeah, and the thing is I I would necessarily be pushing for them to push them into different phases except. They keep saying things like we've only got a 15k budget and I'm like this is not the 15k job like.
    45:05 Tamarind Swann: yeah I think that's why you need to make it super clear like give her it all of this but like the prioritize list of things you could even do one of those like value
    45:11 Joe S: yeah
    45:15 Tamarind Swann: this effort. things so you can kind of put things like your These are your like jobs to be done or the things that you've identified as like. components or yeah things that they need solutions for of different kind S and then you can kind of plot them out for them.
    45:41 Joe S: Yeah, yeah, I was thinking. Yeah, because there's kind of like value or important.
    45:50 Joe S: urgency and difficulty And you can kind of plot everything out like that's the same it's like effort value and urgency right.
    46:01 Tamarind Swann: Yeah, so usually value. I would put criteria for what that means so like there's a undervalued like there's an urgency score and there's like a like reach kind of benefit score
    46:21 Joe S: And okay so agency is actually bundled into.
    46:23 Tamarind Swann: but The value of yeah like might be really high value because there's a deadline
    46:27 Joe S: value
    46:33 Tamarind Swann: coming up for example.
    46:36 Joe S: Right, so you're kind of going there's almost a formula for value and likewise would there be a formula for effort?
    46:45 Tamarind Swann: Yeah, yeah, I mean I guess that kind of depends on how you guys want to run it like for us usually we would tend to do like effortscore based off like. The amount of development time but also keeping in mind like a bit of change management in the like. The the effort to change rather than just time. Time cost you know what I mean like they're the cost of things can be more. Holistic than that okay, yeah.
    47:24 Joe S: Yeah, and I guess complexity kind of sits under effort because it's going like the more complex it is. Not even the harder it is to build now, but the harder it is in total some total of the thing existing.
    47:38 Tamarind Swann: yeah
    47:39 Joe S: Yeah, which is I think where my instinct to go? Let's take the most complicated bit I either. The rules and make that as simple as possible by basically just making that a machine where you plug something in like it. You know what a state machine is. Yeah, basically, I want to take the rules and make a state machine. I like this is a member with these attributes and we're doing this and the state machine says yes here's what you get or know and here's why like literally that is the very core fundamental of it and if it's like yes.
    48:20 Joe S: And then you need to send an invoice then, that's where you just plug in the thing that sends the invoice or whatever or like. Yes, and here's the change to the membership and then you change the membership wherever that lives. It could be in hubspot could be anywhere that kind of thing. Sorry, you've got side track so you're like very verse effort diagrams is kind of I did have that in mind so thank you for reminding me and then we've got like the bet a map would you say frontend and back end would be like would it be with splitting this up or is it kind of good to have it all at one place?
    48:57 Tamarind Swann: Um while you were talking Sarah I was kind of visualizing it as like. a site diagram
    49:05 Joe S: hmm
    49:06 Tamarind Swann: I think it is this is really useful for explaining how things kind of connect together and the Complexity but I guess maybe just like focus on a few. key threads right
    49:20 Joe S: Yes, so maybe it would be worth having a separate site map than talked about the actual website layout for example.
    49:29 Tamarind Swann: If yeah I guess if that's useful for where you're at the moment which is? Basically, we would just trying to like communicate. the like solution options right
    49:46 Joe S: Yes.
    49:46 Tamarind Swann: or like early early stage solution options
    49:50 Joe S: Yeah, yeah, I mean I guess you could almost say that. All these integrations that everyone keeps talking about could be not so kind of included them here by like going. Oh, you know sanity and shopify like this diagram. Maybe shouldn't have that that could be a separate diagram things like that where it's kind of.
    50:10 Tamarind Swann: mmm
    50:11 Joe S: Instead of lumping things together you're almost like layering things on and off.
    50:16 Tamarind Swann: yeah Like showing those interactions and where things are connected to each other.
    50:30 Joe S: Yeah, yeah and then. So basically a bunch of diagrams to talk through I guess would be. Like yeah like a membership flow diagram. that kind of thing like maybe the user stories could have A diagram under that I don't want to send this into a massive presentation, but I also just kind of want to have something visual to speak to.
    51:54 Joe S: Yeah, I used saying almost like let's say I have a region of this value effort. That's like in light blue and then within that I that is like the whole membership system and then in that I might have like a dot. It's like here's the zero part. Are you saying that like? That'd be some linking together of the dots on the value effort that.
    52:14 Tamarind Swann: Yeah, yeah with the value verse effort diagram, because you'll have like hotspots on there like points on there. So you can on the side of that diagram have those as your like your prioritize list of the points that you want to like address so those might be the Might be the user stories or features or epics of like. Like you might bundle up. integration like membership integration as like an epic, that's that you plot on your mat or you might break that down into like Um corporate membership like you know what I mean.
    52:24 Tamarind Swann: Link them together like maybe you could link them by epic or something like that. So color code them so that it's like clear. What is related to each other so there might be some things which are more of a like bigger. We need to do some more research, but some things which are quite granular already that you've identified like. we need to sort out the chapter microsite situation so not
    52:44 Joe S: yeah Yeah, and I think skipping past me like that's already solved. It's like that's probably going to be quite hard. to do I have a structured mind but you know whether or not that's very works. I'm just like we already have e-com websites where you arrive and you're like are you an American and then if you're in America everything is filtered by USD or whatever I'm like that's kind of how I saw this working. But I could always do with explaining that more clearly I'm sure.
    53:18 Tamarind Swann: Oh, yeah, that's tricky as well because like I'm on the New Zealand chapter for iiba, but I'm not in New Zealand anymore.
    53:27 Joe S: Yes, so you'd update your membership for example right if you were to change that.
    53:32 Tamarind Swann: The next time I renew but not immediately.
    53:38 Joe S: a Yeah, and I guess the point is that you? Like when you remember you see everything on your tier where everything like I think the best structured me to say that everything on your tier even for other chapters. Isn't off limits. Like to take an example if you're like I can see New Zealand award ceremonies. I think it would be selling to arbitrarily say anyone. Couldn't see western or Australia Awards somebody's like maybe they're traveling maybe they're finding out for someone else you probably don't need that kind of security the only security you need is that they can't you know go and find a publication with the white paper. That's locked to be like a full member or whatever the case is that kind of thing.
    54:27 Tamarind Swann: yeah But you know what I mean like so you could have your like chapter site structure
    54:28 Joe S: yeah
    54:33 Tamarind Swann: as an epic and say it those are all orange and then like you've got multiple orange dots that are like your events or your like sorting out. Use a journeys were there within that.
    54:51 Joe S: Yeah, do you do you have a process for this stuff like do you know? Is there a generally accepted way to go through the stuff? What do you make it up each time or that or is it you know something else?
    55:05 Tamarind Swann: Um so usually I would start with the notes that you've already taken that kind of stuff will give you like what you took me through was like. all the stuff that's not on your brainstorm diagram like all the Duchess of pain points the things that they're like are they doing it this way and it's not quite right like
    55:28 Joe S: but
    55:28 Tamarind Swann: yeah
    55:28 Joe S: that stuff to surface giving
    55:30 Tamarind Swann: Yeah, that kind of stuff so that's what I would probably capture first and then group it from there.
    55:40 Joe S: hmm
    55:42 Tamarind Swann: Honestly for speed at the moment. I'm using chat GPT quite a lot for that kind of stuff like these are my keypaying points I like I've got a Got some prompts and stuff that I use for that kind of thing to like. More easily break it down or group it together because that stuff can take quite a while and like.
    56:10 Joe S: A lot of it's just admin right.
    56:10 Tamarind Swann: the yeah, and that's more worth your time thinking about the effort and value and Solutions
    56:18 Joe S: honestly something obviously you doing after this is go opening all the notes and all the PDFs and literally just opening the Gpd chat window almost and just talking at it for like half an hour. Just kind of like unpacking my thoughts at it and then get to essentially take notes for me as I went because I'm like that that seems like a use of GPT that will a do the text to speech there as feature texting and then be kind of hopefully.
    56:51 Joe S: Catch me repeating myself until it into one point instead of five you know whatever.
    56:57 Tamarind Swann: Yeah, I have found that's pretty good for that kind of stuff that like. What they call it functional decomposition?
    57:05 Joe S: Is that okay? I'll just write that down. Yeah, I think I have this thing girl like I'm so good at looking at things from different lenses that I end up going well. I keep repeating myself because I put a slightly different lens on and this thing is kind of the same thing as this thing with the other lens, but it means something slightly different with this lens, but you can't just repeat yourself constantly through the whole presentation does that make sense yeah like it is different but it's also.
    57:30 Tamarind Swann: yeah
    57:34 Joe S: Quite repetitive if you do it that way.
    57:37 Tamarind Swann: Yeah, I think the key is really to like understand your audience and what they what do they care about because like the purpose of your call. I guess is for you to get Like the Wind
    57:50 Joe S: The win the buy-in yeah.
    57:51 Tamarind Swann: When the right like you yeah, you want them to be like yes, you know what you're doing. You've got a good plan. I'm gonna pay money to to fix my problems so like
    58:00 Joe S: yeah
    58:01 Tamarind Swann: for them understanding that you've listened and understood the problem. You've got a good. Good enough picture of a path to fix the main issues. And like a reasonable. A communication of like how how much time and effort and money are they looking at or like how you would fit within their budget like you can we can do this
    58:27 Joe S: yeah
    58:32 Tamarind Swann: stuff? But this stuff is later nice to have do that do that later.
    58:36 Joe S: Yeah, like I saw what you said this has like something that wouldn't fit in the budget or is less important.
    58:43 Tamarind Swann: yeah
    58:43 Joe S: On that and like on the grander scale kind of thing.
    58:47 Tamarind Swann: Yeah, so like having those key requirements on your map with like.
    58:47 Joe S: Yes.
    58:53 Tamarind Swann: And then you know you can throw it back to them to prioritize things and say like from the discussions that sounded like this was a showstopper must have it but is that you know? And yeah, I think they're like.
    59:06 Joe S: yeah
    59:15 Tamarind Swann: Flow diagrams and stuff like that depends on what they're like like some people. Do like to have that really visual? Like they like that detail and they like to see a visually but if the audience is more like the CEO and people who are like. Making more financial decisions about the project there may be that details not really worth. spending time on
    59:50 Joe S: Yeah, it's interesting like of the two people Andrew who is the the main guy seemed very like chatty. I would say I couldn't tell if I couldn't tell you if he was visual, but he seemed like very gregarious if that makes sense. And I almost feel like the storytelling mode would work better on him and then Greg the other guy of this meeting is the one who is like. So this is how a membership works like you need to have this and this and this it was very detailed.
    01:00:27 Joe S: He's the one who I basically just ended up writing this is like you have it upgrade application from the associate to technician that costs and I just $60 in these are upright to prove it goes the secretary who copies it to SharePoint like that's how that conversation went. And then Andrew was just at the very high level like you need to talk to Jeff from Helen's ASAP we at a high level we have six chapters. We want wards like he was more that kind of thing and I think the diagram would work very well for him because he was thinking like that already.
    01:01:03 Joe S: In terms of like everything looks together and I think Greg's gonna be more like yes, but have you thought about zero or whatever?
    01:01:11 Tamarind Swann: mmm
    01:01:14 Joe S: Maybe it's just in case of having.
    01:01:14 Tamarind Swann: Yeah, and the balance.
    01:01:17 Joe S: a balance yeah and I think it's
    01:01:18 Tamarind Swann: or just you can do it, but keep it like relatively simple like not going to deepen the details but I have that overlay of like you could have the The site map and just the one user journey of the the membership journey, you could just take exactly what he explained how he explained it to you and if you put that through mirror it can create your diagram for you like a user journey
    01:01:44 Joe S: mmm
    01:01:48 Tamarind Swann: diagram.
    01:01:49 Joe S: I was actually got like AI or whatever for doing that.
    01:01:53 Tamarind Swann: Yeah, so you can just take a note.
    01:01:53 Joe S: And it's and it's not terrible.
    01:01:56 Tamarind Swann: Yeah, it's not terrible you sometimes have to do but a little tweak that is actually pretty good especially from notes like that clear.
    01:02:04 Joe S: okay, that's very valuable to know I don't know anything about epics and stuff, so I won't I won't talk to that specifically I try to I usually end up in a very similar place, but I've kind of make it up as I go and I'm like okay, so The idea of agile is that you're not tying yourself to an end point you know that kind of like and I'll just kind of explain it in a way that makes sense because I feel like if I start applying someone else's.
    01:02:33 Joe S: I wasn't gonna say religion almost it's like you know someone else's methodology
    01:02:35 Tamarind Swann: The language of it, yeah.
    01:02:38 Joe S: that I don't fully adopt myself, then, I can't I can't stand behind it and I
    01:02:42 Tamarind Swann: yeah
    01:02:46 Joe S: think that's where a lot of consultants seemed to just do that. They're like oh use our job because everyone uses agile that I'm an expert in agile and you're like and why have we fallen off agile and it's because they never stood behind it that much to begin with.
    01:02:59 Tamarind Swann: Yeah, but you can read label that however you need to like work streams or program or program or whatever you want.
    01:03:06 Joe S: true Um I need to let you go don't tell you you need to leave very shortly.
    01:03:13 Tamarind Swann: Yeah, I think we do. yeah
    01:03:17 Joe S: Okay well, thank you so much for taking the time. Sorry for being annoying. I'm
    01:03:17 Tamarind Swann: yeah
    01:03:23 Joe S: sure I've asked some very dumb questions.
    01:03:25 Tamarind Swann: Not at all, um. Yeah, do you need me to find any examples or like can I can I help more I feel like I've been helpful.
    01:03:35 Joe S: literally a list of Even if I don't do it all but like a list of the essentially the page titles or the document titles. I think is what I was almost asking for where you're like okay, so we have this supporting document like the reverse Brief and the Architecture document in the you know that kind of thing if you've got something
    01:03:58 Tamarind Swann: hmm
    01:04:00 Joe S: like that that would be really good because I can then go and look at what that is and whether it applies, but just knowing like that diagram where you're like. Oh here's the I think there was some sort of flow. One of the diagrams had something flow on it. Oh, yeah, I need to do that like that kind of thing and it doesn't need it can be super high level. It's just I want to basically have like a high level check box to be like have I done it if I haven't done it, do I have a reason why okay next thing?
    01:04:27 Tamarind Swann: Yeah, yeah, the ones that I choose to do 10 to depend on the project and that the audience but yeah, I definitely have many lists many less things to choose.
    01:04:40 Joe S: Perfect that's that's all I need I think really is like as many lists and I I'm happy to choose but if I just got stuff to work through to be like does this apply to this project. Yes or no. If yes, then, what am I doing about that kind of thing? yeah Awesome, thanks so much. Enjoy your going and dancing right.
    01:05:00 Tamarind Swann: regular Now we're going to spin class.
    01:05:06 Joe S: oh enjoy spitting
    01:05:07 Tamarind Swann: with the weightings
    01:05:10 Joe S: Yeah, enjoy sweating heavily. So I say too and I go and Swindon yeah, it's getting warm and we're about to leave. Yeah. okay
    01:05:29 Tamarind Swann: love
    01:05:29 Joe S: Lovely to chat lots of love Tokyo soon.
    01:05:32 Tamarind Swann: baby
    

## Not interviewed yet

- Purple Giraffe (Marketing team)
- Chris (Standards)
- James Colwell (Awards)
- Jake Wood (Marketing?) [jwood@darkspace.com.au](mailto:jwood@darkspace.com.au)

- Eway for nz payments

## Planning

- Memberships
    - Separate project?
- Content
    - Accessed by Chapters + Secretariat
- 

## Supporting Documents

- Surfacing issues and pain points
    - 
- Value vs Effort diagrams
    - Under value theres urgency score. reach/benefit, etc ie a formula for value
    - Dev time / difficulty of change / complexity
    - Hot spot keys → list of points to address
    - Colour code eg backend or finance becomes a colour
    - Site structure as an epic for eg
- Portfolio / architecture diagram
- Sitemap diagram?
- Integration diagram
- Membership flow
- User flow diagrams?
- Functional decomposition
- Throw back ie if someone says something is a must have mention that and ask if it is or not

## Topics

- Education
- Marketing
- Store
    - Who manages?
- By Chapter
    - WA
    - NSW
    - NZ
    - 
- By Portfolio
    - Secretariat
    - Education
    - Events
    - 
- 

## User Stories

- By Role (eg updating news)
- By User (eg buying tickets)

## Reverse Brief

---

- Frontend
    - Board Portfolio
        - Conferences
        - Awards
        - Education
        - Marketing
        - Memberships
    - By Chapter
        - Events
            - Upcoming
            - Past events
        - Awards
            - Upcoming
            - Past awards
        - News
        - Committee
            - Contact information
        - Calendar
    - Store
        - Sponsorships
        - Advertising
    
- Membership Hub
    - Actions
        - Sign up
        - Renew
        - Upgrade
        - Education
        - Events
        - Filling in forms
        - Pay for stuff
        - CPD Points
    - Corp memberships
    
- Backend
    - Board Portfolio
        - Conferences
        - Awards
        - Education
            - Webinars
            - Short Courses
            - Long Courses
        - Marketing
        - Memberships
            - Upgrades
        - Corp Memberships
        - Store
    - By Chapter
        - Events
        - Awards
        - News
        - Committee
        - Calendar
        - Gallery
        - Store (by chapter)
    - Reports
        - Financial
        - Etc
    - Financial
        - Xero Invoices
        - Stripe payments
        - GST (NZ + AUS)
    - Marketing
        - Linked In
        - Facebook
    

## Proposal

---

- Transcript dump
    - 2
        
        Okay, here it goes. Take two. I'm talking about the IES ANZ project and the project manager. This project was originally started in July 2024. It is now November 2025. We are going to be going through the project, including the initial brief, the proposal, and the evolution of the specifications since then. I'm going to include quite a lot of detail in the intent of figuring it all out later. I've done this before, so I'm not going to go quite so in-depth. because we're running out of time today. What I do want to talk about is super high level. So the initial client brief in July 24 included details like they wanted to be implemented on industry-standard frameworks such as WordPress, backend customization should be minimized and required use existing plugins, preferably a brief description of our requirements provided below. I look forward to your reply to discuss this further. The content will be varied and yet standard, whatever that means. We anticipate the following functionality will be required and is open to further discussion. They have referenced [cibse.org](http://cibse.org/) as a site for similar functionality. So the functionality required will be similar, although the graphics out and typography shall have to be superior, whatever that means. They then go on to describe what is actually a very complicated site. For example, multi-currency, multiple taxation and payment gateway. They want to be able to charge New Zealand GST and AUGST, except online credit card transactions. They want to have content that can be accessed at multiple levels, public content, private content scoped to regional chapters, and yet more private content scoped to individual members like a member's area. They would like static pages, pages, a lot of pages, a lot of forms to be filled in for things like award entries, and award entry, or like award juror selection, things like that. And you want an admin panel to manage the award entries. This is all quite awards focused, but as we're getting to, there's a lot more than just awards. page for award entries, award data tickets, etc. Gallery pages for awards through OK, social media, widgets for tag tweets, Facebook posts, Subos, etc. They need the back end payment gateway to be integrated with zero. They need the award entry and adjudication modules to be integrated with one drive, which will come back to that. seems like something to maybe bring up and clarify. They want integration with the newsletter mailing system. They want a download portal for being able to download publications. They want a blog section and they said interestingly enough this website has been built to or this website will be built to a build, operate, transfer, BOT model which I think they're kind of misusing the term and the reason I think they're misusing the term is build operate transfer is usually used by something like the government or a government to indicate that they would like to someone to build a platform or a service operate that service themselves I be paid to operate it on behalf of the government and then it's some later date transfer it to the government for the government to manage. I think what this person means is something more along the lines of it's built and then managed in terms of getting it up to speed by the agency like uploading content or the rest of it and then essentially handed over which is how a usual thing would work. It's just who's responsible for content I suppose is the difference. Realistically ASANZ will always be responsible for content who might just not be the people uploading it. So does that. They said after we all build the off-rate transfer, they want quotes to be needed for both a complete and also a hybrid model by hybrid model. We mean that our central and regional teams will need to be handed over the content updates, including training and the goal plugin updates will need to be managed by the vendor, which I assume means that they're talking about the vendor managing the technical side, but the content side being managed by the chapters. But again, I think that's potentially not how this really makes sense to do as a job. A profit firewall and malware protection needs to be built into websites or website optimization modules may be added and cost needs to be separately mentioned in the other. Doesn't, not really clear what that means. Annual maintenance also should include separate segments for content updates and for backend maintenance including recoveries from hacking and compromise, any other thing. So this is the initial brief, which is essentially asking for quite a lot on a bit of a budget, not really feasible in my view. I did write a reply where I basically recommended a headless front end using It's an ADCMS Shopify e-commerce in Klaviyo. There are a couple of other quotes that I was asked to comment on. One was from Mark Viz, M-A-R-K-V-I-S, which was WordPress and J-Purry. I basically said that WordPress is fundamentally a blogging platform, which doesn't seem very functional for what this is. J-Purry is a bit ancient at this point, and it also came with quite a high yearly maintenance fee. I think it was in the thousands. There's also web tricks, which is another company, W-E-B-T-R-I-X. They also said WordPress, but they also mentioned a custom CMS, which I commented that's the single point of failure as it kind of involves vendor lock-in, which is basically subject. It requires them to be able to handle all maintenance updates in the future and all the rest of it. So, I went on to outline general requirements, a site map, and the functionality outline, which I will read out because it's a pretty good baseline for everything that came later. So the general requirements include zero integration, a customizable newsletter, calendar system, and like a display for the events, awards system, form submission system, and conference tickets. The side map includes homepage about page objectives, the organization objectives, governance page, I'm guessing how the organization is governed, board profiles, so profiles of everyone on the board, code of ethics, advocacy, how the organization advocates for the industry, history of the organization, jobs, I think there's a bit of a jobs directory context. There's a contact directory for people within the organization. There's a member section. And most of what comes under here will be under the membership section. High little features are login, resetting passwords, registering the member, seeing a main dashboard, upgrading your membership, which is quite complicated. We'll get into that. Registered lighting practitioner application. So that's essentially like if I keep struggling with this, becoming a registered lighting practitioner is more like an add-on to your membership than a tier of your membership. Yeah, let's go with that. It's an add-on which kind of gives you a certain level of prestige and maybe some better access. Technical page, so maybe you're reading papers for your membership dashboard, MIS page, I'm not entirely sure about maybe there's bulletins, renewals, speaking up to like view your renewal data as a member, orders, being able to view your previous orders, whatever they may be, presumably things like tickets, ISA and Z, membership, i.e. your status and your current details. Within the main site there's some membership information like why join, about becoming a member they also have a somewhat broken and would like a less broken version of a membership directory where individuals and corporations can opt in to be essentially publicly searched like a directory system. They would like members to see upcoming webinars, past webinars, upcoming events, other end-of-sets education so um a bit tricky whether they yeah so there are short courses, long courses, medium courses, the idea I think is that they have relationships with education providers uh and then if you go through the corporation you might get a discount on your education, your course, but it also feeds back into your membership so you can basically have there's an agreement with this education provider that the education from that provider counts towards your membership in terms of your grading. If you're trying to go up or down grades the memberships also have a conference section, there's an online store, kind of unclear at this stage but it's kind of been commented that they'd be for advertisements and sponsorships. there's publications section I think kind of quanted on that above under technical but publications that would be put out by various organizations maybe white papers things like that but maybe also bulletins job advertising so maybe a jobs board member area jobs board continuing professional development which is kind of along the lines of the education where you can see what courses are available and maybe get access to various providers, maybe a bit more open than just whether or not you signed up for a course or not. Entries to awards, viewing past awards, buying award tickets. We'll talk about this later but this might really be part of the event system which may link out to Eventbrite. And then there's also the breakdown into chapters which is a whole other thing. So every member is a member of a chapter. Every chapter has its own news and events and its own committee. So one fundamental aspect of the website is whether you're viewing all the chapters or your current chapter and whether the public information, like whether there's general information that's shared between the two, but presumably there would be. There's also a link section on the existing website which has something more to do with linking out to resources, like very general resources or general companies associated with the organization. There's privacy policy, terminal conditions, all that stuff, so that's the slight map. Then under general functionality, I've put for now CMS for content types which includes pages, products, categories, awards, articles, jobs, etc. So yeah, things like events would be under, etc. The membership system will need account management, access control for members to see different things, the ability to edit the content that the memberships can see, the ability to manage ability on board, reporting on the members, zero integration which will have what to do with the payments from members, events where members can manage the, or like see, and buy tickets for events and things like that. ECO-MS, there's, I've just put very broadly the concepts of digital products, physical products, subscription, integration into the accounts, i.e. if you can see or pass orders by sharing the account data between your IS ANZ account and you'll say Shopify checkout account. So that's something to go into. And validation, for example, let's say you're buying a renewal or a upgrade. There's a certain amount of the system making sure that that is the right thing for you to be doing. You should be able to buy an upgrade if you are allowed to and not be able to buy that upgrade if you are at the wrong tier, for example. There's a concept of workflows here which will go along with the form submissions and payments and all that stuff. So maybe that kind of comes out of E-commerce and goes under the membership management system later. Another system is form submission and processing which will be quite complex because there's a lot of forms and they all are used to do quite a lot of different things to do with the Constitution. There's transactional emails which will be things like welcome emails, sign up emails, forgotten password, things like that. I'm not sure how broad that could get. There's a calendar system which has to do with events as I said before. Search functionality won't go into that right now. Payment subscription management so that might be part of the e-commerce system, might be part of a ticketing system, but it could also be to do with a membership system. So I think my suggestion there will be that everything goes through the same stripe account. Stripe account is integrated with zero, but the stripe account might be charging in a few different ways. For example, you might use Shopify to manage products, but you might use something like Eventbrite to manage events. Maybe there's something more B2B for managing sponsorships and things like that. Service integrations, yes. Analytics reporting, that's all super high level for now. This concept of a content lake is a major feature. At the moment, they are using [mandate.com](http://mandate.com/) to manage all their membership data. a lot of their payment flow and workflow data. One of the issues with that is the data has to be recreated every year simply because it's too messy to have the membership data evolve for multiple years. So Jeff from HANA 360, which is probably accounting team that works with the secretariat to manage all their membership data, create a new [Monday.com](http://monday.com/) database every year. That [Monday.com](http://monday.com/) database has its own reports, but it can't report for the other year. It's all scoped to the current year. There's a few pain points under memberships, which is that the members' registers aren't all that accurate. They have issues with zero integration, particularly to do with Levels 5. There's no current membership flow control, which I assume is more to do with, if what I was just saying there's a lot of forms, a lot of processes, and there's no real control. It's just managed by people, and those people have to basically follow the rules and remember where they got to in the flow. Likewise, there's no automation validation. There's very limited reporting, which, yeah, [mando.com](http://mando.com/) is about it. A limited functionality, which, yeah, they basically just have a basic account system I think under Webforce 5's continuum platform and then they have a bunch of other attributes kind of attached to members that live under that platform. Yeah that's all I've left for now on this recording.
        
    - 3
        
        So, Pokia where I left off. Let's go to the right tab. Skipping forward to... February of this year where I was basically Astra recommended skill set for a project manager. This is basically myself or anyone else. at the time they were basically going to justify my existence. But anyway, this is the set of recommendations I had for someone in my role. Basically, someone who can effectively bridge technical and business requirements while facilitating the successful delivery of the project. The technical skill knowledge they should have includes, while in my view, modern headless architecture and decoupled system design, or just generally modern architecture, including API design and management best practices, enterprise content management, commerce systems, and despite platform development. I mean, I said enterprise, but realistically, it's just really good content management systems, system integration patterns and best practices for scale, scalable modular systems, performance optimization, scalability, including cloud deployment strategy and continuous integration practices, all a bit hairy fairy but it's all fundamental stuff. Security and data privacy requirements include ensuring compliance with modern standards, GDPR or the rest of it. Modern SEO analytics and user experience considerations basically just being up to date with how this stuff works. Project management, they should be able to do underselection of management with a focus on aligning technical capabilities. I am getting a vendor that knows how it headless works. Technical documentation specification writing to preserve architectural integrity. I want to have a plan. Making sure that plan continues through the documentation and through to the final product. Project and timeline management across multiple project phases. Of course, the assurance oversight through rigorous testing and validation. Risk assessment and mitigation. emphasizing technical risks and change management, stakeholder communication and coordination to effectively bridge business and technical needs. And the experience was basically my experience proven delivery of large scale websites with complex technical requirements, experience managing multiple vendors and stakeholders in the technical context demonstrated technical leadership in web development projects, background and professional website and integration solutions, expertise in training, documentation development, technical team and livened, experience in deployment, planning and execution, including cloud and continuous integration of the virus. So that was it. And then the next one from the same month was a draft for the process I scoped to go through, starting with discovery, which involved initial stakeholder analysis, essentially what I've been doing, which is interviewing everyone to understand business goals, use of needs and overall project requirements. going through pretty much everyone with a portfolio on the board, so education, memberships, the strategy, that kind of thing, can basically interviewing them, gathering existing documentation as much as possible, partly to do with their existing stuff, but also to do with, let's say, their plans that they already had in place and then I did to find initial success metrics. This will be part of the reverse brief for what counts as a win. The next one would be requiring and documentation which is basically taking all the pain points, all the issues, all the things people already do and turning it into a list of categorized into portfolio or points of view, I suppose, things like the membership, the back end, the front end, various areas like admin, finance, reporting, that kind of thing. Mapping out all the integrations and then finalizing the reverse brief, which is turning this fundamental list of things, including the integrations or the rest of it into a single thing that can be then taken out to vendors and approved. So essentially tomorrow what are we doing is proposing all of these, like what I've got so far in a very recent bit, kind of presenting it all. and then once that's essentially crossed the line, tightening it all up and turning it into a full group. Then, yeah, then kind of continue into feasibility and risk assessment, which will be things like value, value propositions, yeah, balancing budget against risk, that kind of thing, followed by technical architecture planning, which will involve a lot of detail around the platforms involved, but also the various flows, the various systems and how they will speak to each other, like I think, followed by roadmap, rendering, vendor, tendering and selection, and then onboarding the vendor, which is currently the final point that, I've effectively agreed to it, just be on this project until the end, or as the vendor essentially takes it from there. So at one point, a bit later, or in the same month actually, I was asked to comment on WordPress kept coming up as a recommendation. And there is quite a lot I could say about WordPress. I think in this case I mentioned that a lot of the plugins that require constant updates, they have security vulnerabilities a lot, they have often had issues in the past. They WordPress is not optimized for logged in user traffic, it's not really good at handling member areas, especially if the member area is a large part of the website. Yeah, there's a lot of limitations to how far you can go with customization. If your workflow is more than extremely basic, it's simply not going to be something you can do with the plugin and also that plugins generally have their own look and feel they're not really designed for extremely custom websites. So you have a forum plugin on WordPress, the forum comes with all its own styling and you don't really get to merge that in with everything else. And not to mention you're also locked into paying for premium plugins and going to them for support and following them with whatever they decide to do in the future. If they decide to get bought by someone else or shut down their business or something, you're basically just along for the ride. So yeah, just some of the reasons. I think the press is not a deal. And then follow that with my approach. Hello. Yes? Yeah.
        
    - 4
        
        Okay, so the next one I want to talk about is the final statement of work, which is what we went with, which will include essentially what I'm doing right now. So yeah, let's go through that. The first setting is purpose and objectives. It's very short, basically I'm coordinating the discovery, technical planning and third body vendor onboarding for the client's website build, ending with the handover meeting. The scope of services include four main phases, the discovery phase, which includes the interviews which are completed, requirements, identification, which I'm completing in the reverse brief creation, which is what's currently underway. The next phase is the planning phase, which is the creation of the technical plan and architecture, tendering for the vendors, vendor evaluation and onboarding documentation, finalize wide the developer handover meeting, which is essentially a workshop where I hand over the documents, confirm the roadmap and make sure everyone understands what everyone is supposed to be doing. What I've stated is out of scope, includes detailed design or development, copywriting, coasting, QAN testing, and at any service not listed above. So the deliverables that I will be ending up include the reverse brief, which will be a PDF, technical plan and architecture outline, vendor evaluation summary, project roadmap, vendor onboarding package, developer handover, meeting, artifacts. And the timeline of my store, milestones include stakeholder interviews completed, reverse brief approved, architecture and technical plan approved, vendor shortlist approved, vendor selected and on boarded, developer handover meeting and final acceptance. So basically finished all the stakeholder interviews and what I'm in the process of doing now is writing, well, supporting documentation for the reverse brief, but essentially I'll be presenting the outline of the reverse brief today and then finishing that off. Client responsibilities, something, how I did is nominating a single authorised representative for approvals, non-providing information and access promptly, reviewing deliverables within five working days, contracting directly with any selected vendors and paying them on time on other payment schedule or notify me in advance of any delay. Yeah, that's all the key stuff in the statement of work. Thank you.
        
    - 5
        
        So what we're going to talk about now is my initial meeting with Andrew, who's in charge of strategy. He's kind of the big dog. I'm going to go through the notes and then the transcript to try and extract as much information as possible and condense it into one place. So forgive me, this is a couple of weeks ago and it might be a little hazy, but I'm going to start with the notes and see if anything comes back. he said, well, he said it off by saying that I needed to talk to Jeff Van Deere and from HANNINS 360 ASAP because he's on, he manages [Monday.com](http://monday.com/) and the accounting side of things. And then some high-level notes he's considering the idea of personalizing based on location, i.e. you see your current chapter information based on where you are. He said it was on the fence about this, but the more I think about it the more this makes sense. He said that six chapters, each chapter has awards, news, that kind of thing, which we've discussed. Currently chapters edit their own section, one, but then some put in information and others don't. Ideally there should be a diary of all events. I'm guessing this is a combined diary or perhaps per chapter. The question and the reason he's on the fence about this is what is relevant to a visitor should they filter or not, which is a very valid question. They are an education program business at heart, which is why education is such a fundamental part of this membership program. They want an educational content library, which doesn't exist yet, which includes general knowledge, chapter based or chapter level breakdowns for things like white papers. He did ask whether other bodies have a standard for sharing information, that's a good question, I don't know. There should be an event system, there's a membership system, he's saying that there should be 2FA, etc. And basically they want to sell memberships as their core driver of money. They want a membership directory which will show financial MIS members in an opt-in way. It will also show RLP registered lighting practitioners, fellows, honorary members, honorary fellows, and currently the directory or currently the members system is taken from [Monday.com](http://monday.com/). They also want a sponsor system where they can sell and manage sponsorships. They're no longer using shopping. Whether or not this comes back, it's kind of a bit up for debate. And there's a marketing system, which he said is inactive inside admin. But actually, I think later when I talk to the secretariat, she is in fact using it. So the SEO isn't working. The analytics is not working. Social integrations, TBD, currently using Buffer. Honestly, I think Buffer is probably good for what they're doing. but they don't seem to like it very much, so we'll come back to that. They're currently not advertising anywhere, and Clavio isn't maybe. Again, we'll come back to that. The website, he's got all the super priorities. He wanted to look great, be easy to use, integrate services, such as renewing the membership, seeing award entries. They currently use Approval Max in a fairly limited capacity for budget approvals. He said to ask the accountants about that and see if this can be used for members. There are site integrations. Initially buffer to post across all channels. Monday is a source of truth. It's the data set for the current members. They used to be overlapped between the secretary of attendance. Honestly, I think there still is. two main buckets sign up can be associate, they need their name and email, they pay their fee, goes as an email to the Chief Secretariat, or renewals at the end of the financial year which is June, and the renewals based on calculation amounts used under following year. Membership renewals, they're aiming for a thousand in two or three years, they renew once a year, ask accountants, they're updating Monday based on renewal data, they are. Membership upgrades, They are streamlining this, or they want to just in-stream this. Currently, it takes 6 to 12 months. Upgrades can occur at any time during the year. Currently, it works by going on the website, downloading an application form, which is what sells the benefits, or ideally, they would fill in a live form with Resume functionality and pay the fee. I think currently they do actually have forms with Resume functionality, so that's pretty key. nine steps in the process upgrade program including their name, their credentials, their academic data, their portfolio, referees and a log of their continued professional development for two years. This goes to local chapter which signs off after auditing, goes on to national committee, then sign off and then the board of directors. So this is all stuff that will be ideally kind of guided if not controlled by the website. it. Currently they do about 20 to 30 a year of unguessing the upgrades. So during the process the applicant can't see any progress, no one has any accountability. EG no feedback to say applicants need to provide referees. There's no feedback to say where they are in the process and what they're missing. They probably are waiting. They need to chase this up in order to get more information. So from Andrew's perspective, the society could turn this into a 10-day-10-round, this would have solved their biggest headache. He said the Secretary was using Excel, contacting accountants, sending voice, and then updating Excel. I don't know if this is true. And in his Monday integration, allowed accountants to manage directly OIC. So this is a replacement for Excel. Again, the GST thing. So current process, someone submits a form, someone manually sends a strike link and updates zero on Monday. Ideally automate this as much as possible. Not a Royals Royce website was mentioned. They're saying that their confidence revenue is 1.5 million. And generally, aside from that, it's about 1 million in revenue. I asked about personas, he said, so in market analysis, or analysts perhaps, architects, interior designers, consulting engineers, lighting manufacturers, and government organizations, which would be looking at the member directory and they'd want to see the grade MIS or higher, RLP fellow or honorary fellow. An example of member in the member director is Rio Tinto or perhaps as a member you know I think as a government organization Rio Tinto searching these members are accredited. User stories include someone trying to enter a light design lighting award someone signing up for membership renewing a membership upgrading membership voting and lighting awards such as people's choice. They also have corporate members which are businesses with individuals underneath. They have membership grades which go from associate or student to technical IES etc. They want an automatic certificate for tech IES ideally from the website using Xero and Monday, currently not connected. Monday is a bandaid, Hannan's is the gatekeeper. Deepak is in charge of the steering committee, well if that happens. Branding hasn't started yet, Deepak's reply to the replacement is marketing based. Purple Giraffe is in charge of marketing strategy. CRM is currently not used lots of naysaying about W05 and currently a Ronspro WordPress. There's a very large document from PurpleGraph including marketing and Bruggan guidelines. That's my notes from Andrew's Core.
        
    - 6
        
        This next one I'm going through is a version of the website specification sent to me by IAS ANZ. I'm not entirely sure who wrote this, but it's still supporting documentation, so I'll go through it. Who we are, IAS ANZ is a professional membership association providing a wide range of benefits professional opportunities for our members. Members are organized by federal, state, and local governments and include engineers, architects, educators, students, contractors, manufacturers, and designers. The association is largely run by volunteers and is looking to build a new website that will last years. Objective, provide a new, more productive and value-driven website for both administration, members, and chapters, which can be built upon in future updates. The key principle to guide this is the website has two components, the informative front end management CRM side for members and administrators. The management CRM is mainly a database for managing members and managing memberships with additional functions like purchases and report direction. IES ANZ is leaning towards a WordPress solution powered by plugins such as MemberMouse, MemberPress or Brilliant Directory as opposed to a fully custom solution to ensure that proposed plugins meet our needs. It's proposed that as part of development, plugins are tested early before any major configuration to see if they meet our needs in terms of usability and features. Now, I said this before and I'll say it again, this doesn't really make sense because I think they're completely underestimating how much of a problem it could be to lock themselves into WordPress and plugins in the long run. Frontend update and refresh the current frontend. current pages include memberships detailing the different grades and subscriptions awards highlighting the different awards relevant to the society obviously there'll be a lot more to that chapters each chapter is their own page highlighting local news the committee and their calendar member lookup there's a lookup specific members detailing their grade education displaying current education opportunities conference display the most recent or upcoming conference that is held every two years. Online store non-members can purchase publications and job advertisers. Now it says that this is all functional as I actually not. Okay the next one is management here and there are four kinds of members who will have different levels of access authority requirements. Members, non-members, admin, chapters and the board. Members who comprise corporate and non-corporate Members should be able to log in and update their details for new or changed member ships. Non-members will comprise of new members buying a membership, buying event purchases or buying on behalf of a member. Administration will primarily be things like running reports, managing sales, managing membership requests and purchaseable items. Chapter should be able to update their chapter page including elements such as news and calendar. To assist with quotation, the management serum has been broken down into the future areas below, which a few picture markers future which could form part of the initial development but at least should be provisioned for in terms design. Okay that doesn't really look like it's been finished I'm guessing they're saying it can be done in the future. So first section purchases, admin should be able to set up a variety of purchases, including the publicly available publications and job ads, but also the different membership levels for each financial year, membership like raise event ticket sales and event sponsorships. They should have the following features, be able to handle foreign currencies, allow for different tax rates. So this is where the different GFCs come in, they kind of want to be able to charge Australian GFC or New Zealand GST or no GST and go to payment services based on the location and they should also be able to sync across to zero and be able to generate an invoice on your system or from zero. It should be tied to account codes available from zero, should be able to update a member's status once reconciled in zero. Members should be able to upgrade, renew or cancel their membership. Additionally, they should be able to find and purchase any event tickets or sponsorships along with any other purchases made. a corporate member should be able to renew or purchase a corporate membership. Non-member should be able to purchase event tickets and purchases, although this could tie into a revised public store purchase. They should be able to purchase on behalf of someone else. We'll come back to all of this. I'd say something like being able to purchase on behalf of someone else would either not be an explicit feature or be a future feature. Events can have a variety of different price points and purchase scenarios, including different prices for members and non-members, multiple levels of sponsorships. Okay, so that was the purchase section. Next is communicating to members. There should be a bulletin board with full range of formatting options. Members should have access to calendars updated by administration or chapters to see it from the events. Members should be able to have the ability to choose their communication preferences, including different types of communications. administration should be able to schedule communications to be automatically sent. One of the girls here is simply the usability of communications. We send out, I'll come back to this, but basically I like the idea of having a feed where you, as a user, will be able to choose or will naturally have chosen by where you are on the website the filters that you see. So everyone sees public. If you're a member of a chapter and you're viewing that chapter or if you're filtering by that chapter. This is the chapter updates. If you're logged in and you're a member that's high enough and some big scope to membership tier, that's when you see those things. So a fee that's kind of based on channels. Next section, reporting. The new serum should have a reporting capability, including a reasonable reporting capability. That makes no sense. I'm guessing this was written in a hurry. The majority of reporting relates to memberships such as looking at who is a member, checking for errors from manual updating, memberships and reporting on membership statistics. The critical requirement here is being able to report on a historical basis, i.e. report run in February or for February, should be able to tell me who is a member at the end of January, excluding any new or renewed memberships that occurred in February. User of cancer memberships that should support access control based on the user type and features different dashboards should appear based on their type. Zero integration needs to be able to automatically update zero. This includes creating sales and voices, updating contact cards, creating, receiving and spending. Money transactions will full usage of fields and tracking categories. There are multiple bank accounts and payment services, which may change in the future. Okay, so this is the sort of thing that would not work at all with zero simply because you get what you get if you're using something like WooCommerce but anyway. The website needs to support to some degree updating the payment methods and automatic imports into zero as opposed to hard coding. This could be a G-virus, I think I'm gonna suggest is instead of integrating zero directly into the site. Stripe is integrated in the site and zero is integrated into Stripe. Hopefully that can include things like account codes, but we'll see. Next section, event management and chapters. This is a space where chapters event coordinators can see each event who has paid, raised an invoice, six month aid and run reports and pass events additionally. Chapters should be able to also update their own landing page. Tools and resources section. this with assist members, potentially non-members, by providing a clear area to access basically how memberships work, policy and advocacy, upgrading memberships, career development, including courses, events and engagement opportunities, and also look at registers so people can see our member profiles. Corporate accounts for the future. Corporate account is for businesses to manage their engagement with ANZ, allow for the purchasing of corporate members to manage their members list, allow for the purchasing of event tickets, the sponsorships to be in a report on both above. A corporate account would probably have two statuses managed by AESA and ZED or managed by or self-managed. The idea being that purchases made are still linked to invaders and memberships are still legal. Look at every switches to self-manage. Yeah, okay. Continued professional development for the future. They want the support for members to track and monitor their continued professional development. Dashboard for administrators optional, there would be where the secretariat and accounts can see any current and future statistics and issues, statistics including current member count, previous member count, last financial year, list of laps, memberships, etc. Current issues might include alerts to failed payments, failed imports, members who need assistance, and when imports into zero have failed, etc. And that's the document.
        
    - 7
        
        I quickly wanted to go through the deliverables again, just says I think it might make sense to create a list. So this is going back to the process draft, which is what I think of every 2025. And his list. So first section, initial stakeholder analysis. actions were to conduct the short interviews with key stakeholders and user representatives, which I've done. And then the next step is gather existing documentation, legacy processes, comparison analysis, example websites, so you can textualize objectives. Now what I've done has gone through a number of briefs that they've sent, their existing website in great detail. There's some documentation from Giraffe. I've kind of contextualized it in terms of all the systems I'm aware of that do these things. I haven't necessarily gone through a list of competitors to analyze them. That feels a little bit out of scope for what I'm trying to do here, but yeah, we've got plenty of documentation. And the next one is identify initial success metrics. Now, this is something I do need to do and do want to do as part of of this presentation today. So, example, what does success look like? Increased membership signups, improve user satisfaction, and easier to use CMS being able to write reports, that kind of thing. 1.2, so the next section, gathering requirements and documentation, which includes gathering explicit and hidden requirements that might not be obvious at first. So this is essentially the synthesizing of all the different requirements that are explicit and using that to uncover implicit ones. So things like what does it mean to have New Zealand GST and Australia GST, while that kind of means you need different organizations, that kind of thing. So actions for this include requirements sorting, categorizing into functional, My membership portal features e-commerce transactions, non-functional, performance security data privacy, and project constraints, timeline, and budget. So one of the main things I'm doing for this presentation is a large mind map, which will cover the membership admin and front end of the website. And then there will be, I guess, non-functional. as I've put it here, but I maybe wouldn't call it that, but that's kind of more like the attributes that will be needed. Integration mapping, so listing all the third party services, this might be things they currently have, or things that they maybe will have. So this would be things like Sanity CMS Shopify, if they're including that, Eventbrite, if they're using that, Clavio, if they're using that, that kind of thing, with reasons for each one. And then finalizing this section with the reverse brief, which is summarizing the entire requirements set into cohesive brief that is confirmed with the stakeholders. Yeah, so that is the condensed version of all of the above. Reverse brief validation, which is presenting the compiled reverse brief to stakeholders in a meeting or collaborative document, soliciting feedback for clarifications, additions or corrections, incorporating changes and gaining a formal sign-off so all parties agree on the initial scope. So that's this next step as well. And then there's further steps including feasibility and risk assessments, which we are going to not do just yet 'cause let's focus on reverse proof.
        
    - 8
        
        I'm just going to really quickly skim through the marketing action plan by Purple Giraffe because there's hundreds of pages and I'm not sure how much of this will be relevant. So starting with the table of contents. Objective marketing strategy on a page about comparative summaries, SWOT analysis, target market, environment, social and governments, brackets ESG, close its factors. Product services portfolio and pricing, member distribution, member journey, marketing audit strategy and actions, digital media, marketing and communication calendar of activities. So that's the table of contents as a couple of the parentheses. Page one, the objective. The marketing action plan has been developed for IES ANZ. The plan is focused on achieving key organization objectives and provides a clear comprehensive analysis of current market position, comparative industry benchmarks, and actionable marketing strategies, the plan outlines key strengths, challenges, opportunities, and risks for offering structured strategic recommendations that will allow the society to expand its influence, enhance engagement, grow membership, and drive brand awareness. To facilitate implementation, an action-based, time-bound marketing calendar has been developed ensuring that all initiatives are executed effectively and deliver tangible value to your organization. Marketing strategy on a page. So this is a table. The columns are audience strategies, activities. Each column has three rows. So the audience rows are target market, channels, and value proposition. Strategy rows are marketing goals, key strategy, pricing and positioning. Activity rows are marketing channels, tactics and activities measures of success. Let's have a look. Target marketing. Target market are lighting professionals, students, corporate partners and affiliated organizations. Channels that they are talking about are emails and newsletters, websites and social media programs. Value proposition, access to educational resources, industry connections and professional development opportunities and fostering a collaborative community of lighting experts committed to advancing the arts and science of lighting. Strategy increase awareness among key audiences, drive membership growth, enhance engagement with existing members through value-driven communication and establishing this organization as the leading authority in the lighting industry. These strategies develop chapter specific marketing guidelines and templates, establishing a content library with brand approved assets for digital and print use, expand IES and Zeds digital presence through interactive content such as videos, podcasts and webinars, leverage partnerships with universities and industry bodies to attract emerging professionals, Pricing and positioning, transparent membership tiers, competitive pricing with added value, including access to exclusive resources, networking events and certifications. And then that's the strategy. And then the activities column is marketing channels, increasingly awareness-oriented among key audiences, driving membership growth and retention, enhancing engagement with existing members, free value driven communication, which I'm a bit of a repeat, but still. as the leading authority, but tactics and activities, targeted social media campaigns, making the website look good, including member testimonials and making it easy to navigate. So this is this activities is actually the weakest column from noticing hosting, webinars and industries specific workshops for professional students, measures of success, more new members, renewals, all social media reach, engagement rates, more website traffic, positive feedback from member surveys, higher open rates, click through rates and reduce unsubscribed rates anymore. Maybe a bit of a low bar. There's about the company history, I don't think there's anything. IESA NZ is governed by constitution by laws which align its objectives membership categories and the operational structure of the society to ensure transparency and efficiency. Something I think we need to talk about is the idea of SOPs and the SOPs being based on the constitution to manage things like membership upgrades and that is going to form the outline of the of how memberships operate, especially within the website, but also just getting this six-month thing down to 10 days by presumably not reinventing the wheel every time. The Society is committed to education, research and collaboration, offering professional courses, accreditation opportunities, and as a platform for sharing knowledge and lighting innovation. So that's I think the core value proposition. Members gain access to unique benefits, including the journal, networking opportunities, professional development courses, and representation at national and international levels. It's early years. No, that's not important. That's not important. Okay, so that's the briefly about. There's an industry research and insights page. "Regulatory bodies such as standards Australia and the Lighting Council of Australia, prior to full role in setting industry benchmarks, partnerships with government agencies and sustainable initiatives, further shape industry progress or the increasing influx of imported lighting products intensifies competition requiring local manufacturers and distributors remain adaptive and innovative. This is the overall industry. I'm not sure if this is really talking about competition in the sense of other organizations. To maintain industry leadership and relevance, professional associations must prioritize sustainability, regulatory compliance and ongoing industry engagement, cross industry collaboration strategic partnerships and specialized professional development initiatives will ensure that IAS ANZ remains a just authority while continuing to support the evolving needs of its members and industry stakeholders. Industry research actions. Review and report on regulatory updates, develop strategic partnerships, establish an industry monitoring process, published annual industry white paper featuring insights from key stakeholders, industry surveys and data-driven research, that's a good one. Create a Google business page, build ongoing research collaborations with universities and writing related research institutions, fast innovation and industry advancements, develop content strategy based on insights including white papers, research reports and expert-led webinars. Cool. So that was that page. Can't these add dense? Competitive summary actions enhance brands consistency across all platforms. leverage competitor insights to improve member benefits including access to free public facing resources and extensive industry reports. I think that's a good insight. Developed structure partnerships with relevant organizations to co-host educational content podcasts and networking events. Good action there. Expand industry recognition efforts by integrating mission into advocacy campaigns, awards, promotions, and digital storytelling, improve digital accessibility by enhancing website structure, content navigation, and implementing an SEO driven content strategy. So that's basically where I come in. That would be making a good website. Next page, SWOT analysis, strengths, legacy and reputation, flexible and comprehensive membership options catering to entry-level mid and industry leaders, strong advocacy, accredited professional development programs, very focused on Australia and New Zealand, including very region-specific advocacy through the chapter system, vibrant industry communication community, vibrant industry community that fosters collaboration, innovation and knowledge sharing through events and networking opportunities, commitment to the sustainability, promoting energy efficiently, care-friendly, sliding solutions, and industry best practices, prestigious awards program, and growing industry influence weaknesses, outdated digital presence, inconsistent brand identity, limited engagement with younger professionals and underrepresented groups presumably, things like architects, where they don't really know about this at all, which restricts membership diversity and future growth potential. Inefficient membership onboarding and unclear value proposition, making it difficult for potential members to see the benefits of joining. And use utilization of content and storytelling. Yeah, you can kind of see that. They're going to the website. It tells you what is basically a bulletin board. There's nothing for telling stories about what they are, what they do, that kind of thing. Membership benefits are not clearly articulated, destroyed to the grand strategy, and it is perceived as an outdated organization. opportunities, expanding into smart lighting and human centric technologies, government incentives, accelerating digital transformation, including webinars, virtual conferences and on-demand educational content, working on younger, engagement with younger professionals, funding partnerships with architects and interior designers and urban planners, expanding into the Asia Pacific region, leveraging sponsorships to increase visibility, positioning ISNZ as a thought leader, developing structure, marketing guidelines and chapter templates, and then threats. Rising competition from global and local industry associations, economic uncertainty, and membership renew So SWOT analysis, SWOT analysis actions, improve branding and messaging, expand digital learning, develop industry partnerships, enhancing digital presence, clarifying and strengthening partnerships, increasing sponsorship and funding through structured partner programs, improving events, strategy, adapting to AI and automation by integrating relevant topics into education programs and membership discussions and monitoring global risks. Next step is the target market, aged 25 to 50 plus, inclusive on gender, income level mid to high, members frequently engaging major events such as conferences, awards and professional development courses. They seek credibility, career growth and opportunities to connect with like-minded professionals. So I guess this is basically saying that they are largely driven by the events and networking. Connections include lighting designers, engineers, architects, accessibility reviewers, educators and government bodies, younger professionals and get through social media and digital platforms while established members value in-person events and networking. Primary market, mid to senior professionals in lighting, etc. Individual seeking career growth located in Australia and New Zealand. students and early career professionals, young professionals, engaging via digital platforms. Members, yeah, okay, members are driven by passion for excellence in lighting design, they value professional recognition, networking opportunities, engagement peaks during career milestones such as seeking accreditation, employment or career changes. Members look to the society for supporting times of professional development and when adjusting industry challenges. Next page is environmental, social and government factors. Objectives include reducing carbon footprint, reducing paper usage, encouraging members of participation in greener initiatives. So this is sort of a sustainability accent, sustainability angle. social objective promote with diversity and inclusion, strengthen community engagement, improve member satisfaction, encourage education and knowledge sharing, and support mental health initiatives. Next page, governance, ensure transparency and decision-making, which will be measured by regular publication of meeting minutes, which I think is relevant to chapter content. strengthening the risk management practices. The measurement is number of risk members, risks mitigated. I'm not sure how that would work. And then objective enhanced for diversity, which is measurable. ESG actions develop and promote a clear ASG policy, integrate ASG themes, strengthen partnerships with sustainability focus organizations, enhance reporting on ESG initiatives, Ex-Fed products services portfolio and pricing. Key membership benefits include exclusive professional development, industry recognition and career advancement, networking community engagement, advocacy and digital and industry influence, and exclusive membership perks and discounts. Any of these highlights, let's see. Access to CPD accredited courses, discounts on conferences, awards and networking event, free or discounted webinars and online learning sessions, eligibility for post-nominals, IE MIS, FIS, which is the fellowship tier, I think, increasing professional credibility, access to job boards, career resources and mentorship programs, recognition through industry awards and leadership opportunities, access to regional and national networking events, bringing members together, inclusion in special interest groups, access to a broader digital directory for professional connections. Advocacy includes representation in regulatory discussions, to exclusive industry reports, opportunities to contribute to industry research and innovation projects, discounts on lighting products, software industry publications and event tickets, priority access to new research, members only content including insightful interviews, best practice guides and digital resources. Membership grades, there's a table here, noting for later this is very important. Membership grade, there's New Zealand and Australian membership and overseas membership which would be made in AED. There's the associate grade, technician grade, member, fellow, retired and corporate membership. All with different pricing. Corporate membership. Yeah, okay, we'll come back up. Products, portfolio and pricing actions. Improve how membership benefits are communicated with a member's guide. Introduce a structured onboarding process. Expand membership perks. Develop flexible membership options such as tiered pricing or corporate bundles. Offer free for member short courses. Exclusive webinars. Simplify the application upgrade process. Introduce loyalty incentives along to members such as discounted renewals or event, exclusive event invitations, develop content showcasing the value of the certifications such as testimonials. Next page, membership distribution. So there's the six chapters. New Zealand is 27%, they want it to be 30, and New South Wales/Hackt is 27, they want 28. Victoria and Tasmania is 17, they want 20. Queensland is 16, they 118, Western Australia 7, they want 10, and South Australia NT is 5, and they want 8. I don't really understand how they all go up. Should they add to 100 anyway? Industry lighting consultant, they said 28, they want 30. Distributor and boarders, 12, they want 15, etc., etc. They've got opportunities across all of these. So chapter opportunity, for example, New Zealand, they want to target local lighting organizations in industry groups. Victoria, they say grow presence in urban hubs, et cetera. Any Q1 standing out, let's see. Not really. Oh, age. So currently zero percent of the members are under 30, kids saying and they would like that to be more like 15. That seems like a very relevant issue. Engage free student membership, schedule outreach and entry level career programs. Honestly, I think software discounts would be huge for this. They've got 80 to 90 at 2% and they want it to be at 0%. Oh, maybe by discounts. Yeah, they want to transition older members into honorary roles, which yeah, fair enough. member distribution actions, implement a program to engage 20 to 30 year old student mentorship networking and career opportunities, partner with universities, expand strategies through targeted social media campaigns, simplify membership application, develop leadership and networking initiatives, encourage experienced professionals to contribute through membership mental programs, advisory committees and guest speaking, create industry specific membership offerings, develop targeted engagement campaigns, strengthen regional chapter engagement, expand corporate and organizational membership offerings, introduce a structured referral program, promote membership exclusivity and value, forge new industry partnership, seek sponsorship from leading brands, develop an implementive partnership and sponsorship strategy, utilize digital channels such as a website, social media, and webinars, target industry events, launch a refer a colleague campaign. That's actually good. Let's make a note of that. Referring a colleague could be a discount program or something like that. Implement an ambassador program. Next page is a membership journey, which goes from awareness, findability, reputation, conversion, and advocacy. The awareness is through websites, Google, webinars, seminar, social media, and word of mouth. Findability, search, funding through your website, social media, search and results, directory listings, event pages, sponsorship events, reputation, kind of show the website, social media, word of mouth, and number of testimonials. Conversion, signing up online, advocacy, same as interest and awareness I guess. Areas to concentrate and grow. Oh, I'm gonna stop there.
        
    - 9
        
        Okay, real quick, I'm just going to really quickly blast through the rest of this purple giraffe thing and only pull out the sort of detail that looks like it could have an impact on what I'm going to talk about. So here it goes, nothing. We're up to member journey. So automating the signup process. Yes. redesigning the website with improved searchability and intuitive membership pool. Yes, create a structured onboarding program that is useful. Hold on. I'm going to do that Personalized welcome emails, exclusive content access, and networking opportunities. Okay. Cool. Networking opportunities. Yes. So, I am going Cool. Make upcoming events. Yeah, okay. Develop a feedback system to capture insights from new members about their onboarding experience. So that will go and -- Okay. create downloadable documents to ensure they reflect one industry standards. [ Pause ] [ Pause ] >> There are online and offline networking opportunities for members such as local chapter, and made-ups, industry mixes, and online discussion groups. [ Pause ] Check the regional chapter engagement by offering support to leaders, helping them to create tailored events that speak to local professional needs. Next page notes that The IES logo is historically relevant, but a modern refresh would improve its alignment with the organization so you can simply update it. It could include its prison colors or emphasize the existing green palette, including subtly refinement such as a prison. It could add a modern feel while preserving the logo's legacy, calling up the lighting society, or bringing that forward would reduce barriers for people who don't know what IES means. And they basically said that the style guide, the class updated in 2006, likes a lot of consistency. Our next few pages talk about basically brand positioning and concepts for or understanding of how to reposition the brand, mostly based visually. (silence) Explore case studies, testimonials and success stories. Incorporated branded merchandise, that's an interesting one. [ Pause ] Pia strategy. [ Pause ] Hello.
        
    - 10
        
        Continuing with the purple giraffe document. Online entry portals for members and non-members, submitting entries seamlessly, so it is noted that non-members should be able to enter... down. PI pricing structure, improved communication around the benefits of the entering wards, expand marketing efforts for restructured campaigns across social media, email newsletters and email partnerships, developing showcase case studies, interviews and in-depth project features. That's a good point. How to increase visibility and inspire future entrants and enhance the awards website with high quality imagery, structured content and project insights, this transformation into a viable industry resource, increase outreach efforts, implement an ambassador program. Okay, that's a good point. Okay. [ Pause ] [ ] [ Pause ] [Sneeze [ [silence] [tapping] [ [ Silence ] Sponsorships, prioritized sponsorship to high impact events to showcase commitment to education, innovation and sustainability such as academic conferences, exhibition or awards programs. Clearly communicate the benefits of external sponsorship to internal sponsors. Develop a framework to ensure funds are allocated strategically. Yeah, okay, I don't know really how these affect the website. I don't want to skip ahead. Calendar, develop a national event, calendar prioritizing high value events. Okay, collaborate with chapters, going to show consistent branding, messaging, and objectives across all events. I think there is a point there about making control chapters use the website consistently. Hmm [ (sneaky [Sounds of [BLANK_AUDIO]
        
    - Call
        
        Cool. Yeah, I was just going to wait for everyone to arrive, but whatever works really. See one minute? It's all right. [laughs] Cool. [ Pause ] . (laughs) [BLANK_AUDIO] So, I am going to show you [silence] [typing] [typing] [Clock ticking] Sure, happy to do that. Yay, cool. all right, all's just right [typing sounds] It's doing something awesome. All right, cool. So I've talked to most of you. This is just the findings from the conversations that I've been having over the last few weeks and can get down and starting to turn it into the beginnings of a plan for the next steps. So that's what I'll be essentially covering today. There's a lot to go through and not too much time to do it. So I'll probably go quite fast, but do let me know if I need to slow down or if I'm skipping things that seem important, something like that. I do have some supporting material and I even have a little slideshow here, but I would probably prefer to tidy it up a little bit before sending it through. So what I might do is share my screen and then send it through a tidied up version soon. Let's see if I can get this working. I'll just use Google Meet. Which one is it again? Share. Hopefully this will keep me on track a bit. There's quite a few different ways to slice this. I've been spending a lot of the last couple of days kind of going, "Okay, so do we focus on it starting with this angle or going through this way?" What I've kind of settled on is starting with kind of what's there, what everyone's experiences are and have been with what's there, and then kind of what I've found and what's been highlighted as the issues with that, and then kind of turning that into the success metrics that we can kind of use to be like, what does success look like, and then turning that into the plan, the brief and then the plan of what we're going to be doing. So I've talked to quite a few of you, including, hold on, I've got a list here. Sorry, yes. Is that a question? Okay, cool. So I've talked to Andrew, Geoff from Hannan's, Greg, Tina from Stanis at Lushka, is that right? Lushka. Vessy, Lushka, cool. Vessy and Webforce 5. I didn't know I should catch up with Steve and yeah. Oh, I did. Yeah, yeah, that's all good. I got email, I've got your notes. - Yeah, I did speak to Ann. Yeah, yeah, that was good. Didn't manage to talk to Purple Giraffe, but I have gone through the very large PDF and there's some really good stuff in there. And then there was, yes. Was that the Purple Giraffe marketing strategy? Or I think there was new website specifications B3 as well. Yes, I do have that. So I've been through those, yeah, as part of all of this. Yes, so I think, well, I've got a discovery phase, discovery phase overview. So what we're doing now is we're working on basically collating this reverse brief, capturing all the essential requirements that we've talked about that have coalesced out of these conversations, getting everyone aligned on the scope, so essentially getting everyone to be happy with the solutions being suggested, and also where we're trying to go with all of this. And then I have added a preliminary risk management plan, so essentially controls that we put in place to stop anything from blowing out if something gets stuck with blocks of going, "Well, we need this to change," or, "This isn't quite right," and you can end up with basically cul-de-sacs in terms of progress with those. Just highlighting those well ahead of when they could become an issue. This is what I've done, the initial stakeholder analysis, gathered existing documentation, which is what I just talked about, identifying initial success metrics, that's what we will get to. Sorry, I'm just reading this to remind myself where my flow is supposed to be. Yeah, okay, we're up to here. So I will go through, at a very high level, some main areas that this project will consist of. We have the front-end website, which is what everyone sees and what they visit. These are the people that aren't logged in. So they could be non-members, they could be, and I'm government representatives, if they don't have a login, just anyone arriving from the general internet. The next layer in is the members. They will see as we've, as kind of layered in terms of what is there and what can be there, but the members will ideally be seeing things that are relevant to them that only, like, you need the membership to have access to. So this includes education materials, opportunities to network, that kind of thing. The next layer in from that is going to be the administration of the website. So this is starting to phase into the ownership structure. the ownership involves administration of the members, the financial aspects, the content, and all the rest of that. So I think a lot of, there's two key ends of this project that have kind of come up. One end is this membership and financial structure, which is being managed by Hannon 360 through [monday.com](http://monday.com/) largely. And a lot of the challenges there have to do with accuracy of information reporting on all this data that's coming through, keeping track of payments, making sure everything is accurate. There's a lot of manual processes involved there. And then on the front end, there's a lot of content that needs to be managed. And from what I've essentially gathered from workforce five and going through the website, it's very hard to manage and update that content in a reliable way, and it's very hard even for a visitor to find what they're looking for quite a lot of the time. And that's before even going into like the modernization aspects that Purple Draft brought up with the font choice typography or that stuff. So that's kind of landscape of everything. And then even within that, we've got these portfolios So there's the challenges within memberships, but there's also education and where education wants to go. There's a store that's been talked about. There's a job directory that's been talked about. And I guess part of what I want to do is refine the priorities here, because depending on who I've been talking to, things like the store is either not being used, Or it could be quite a high priority to make sure that people can buy sponsorships and manage advertising and things like that. So this, it would be good if this was a little bit interactive I suppose in that way. So that I can get a sense of that and how to break down the brief to go, okay, this is definitely important. This is a high value, high importance thing. Or is it maybe a low value, low importance thing as we go through each of these details. Is everyone with me so far? Does anyone have any questions? Would you like to explore something in particular? Start in any particular area? (laughs) So, okay, that's very enough. Yes, yeah, I understand. Yeah, yeah, that totally makes sense. Yeah, fair enough. So there is a bit of a structure thing I did kind of want to raise which is so for example the New Zealand and Australia GST question, that makes sense if you're charging from Australia to Australians or from New Zealand to New Zealanders because that's when you would charge the local GST. Does that mean therefore that we will be dealing with multiple zero accounts or multiple strife accounts or are they all just going to share an account and the accounting just has to to work? Like, is there a structure there in existence? I don't have quite uncovered that. Oh, I see. Yep. Okay. Cool. And it--yeah. Right. Yep. [ Silence ] [ Silence ] [no audio] [Sounds of [no audio] [Clock ticking] [ Pause ] [ Pause ] [ Pause ] [ Pause ] That's a good, yeah. Yeah, yeah, cool. Thanks for that. That was really good context. I think, yeah, so I've got a way to approach this, which I think might be good, which is to basically speak to each, like a few different ways of doing this, including something like Mambies, something with Boltons. I think WordPress was mentioned a lot earlier on. So maybe almost exploring in brief what each one would mean would be a good way to kind of understand the different options. and when I do present one that I think makes sense here, it'll be in context of the other options instead of just like, "This is good because I think it's good," if that makes sense. So... I don't think... I mean, yeah, I don't think she was hugely into WordPress specifically. Yeah, the existing system is Webforce 5, which is based on a platform called Continuum. which I did talk to them about, but it's incredibly locked down because everyone... Yeah. Oh, I don't know about the content, but that would be your agreement, but they do own... That platform that they're on, they host that platform, so I very much doubt they're giving that away. by open source or anything like that. So yes, anything you do will be locked in. And one of the things I'll be talking about is making sure that you're not locked in. It's vendor lock-in is a very real thing. Yeah, I presume they'd give you the database content or something like that to export the data. As opposed to, yeah, you're right. I don't think as a leg they can stand on to say, hey, that data's theirs, it's actually not, it's yours. Whether or not they've got a way to charge you to export it, I don't know. Excellent, cool. Yeah, so that shouldn't be an issue. Yeah, yeah, we can always, yeah, there's always ways to write scripts to import and transform content like that. Imagery and stuff like that, if that's a factor might need exporting. I don't know how much depth there is to the imagery on the website, but that's often where, yeah, CSV files stop being everything that you need. But yes, anyway, coming back a little bit. So something that came up a lot initially was, yeah, sorry, rewind, I took it with my hands, I'm sorry. Yeah, so WordPress was raised early on a few times. We were talking like February last year. My initial thoughts I did originally start my career WordPress, I've used it quite a lot. I got more and more custom and then eventually stopped using it entirely. The main issue with something like WordPress or any platform that kind of encourages you to use plugins and bolt-ons is at a certain point you hit prick walls. Like if you have a WordPress site and you want to have, let's say, a forum for sake of or a store, you install WooCommerce, great, you have a store and WordPress. As soon as you want your store and WordPress to integrate membership don't like membership system that wasn't part of we're commerce you hit a brick wall because those two things are very They're not designed to talk to each other. There's no deep integration between those two things Unless you have a plug-in that does everything in which case you're barely using WordPress at all to begin with Or you end up doing a customer which case why we use a wordpress. So Yeah, there's I have a bit of a a history with people who have tried plugins to get to where they need to be, run into brick walls and basically have to start again. So that is my personal view of WordPress. I've used it a bit. They're very esoteric and it's essentially a blogging platform with lots of things glued on because people, because it was incredibly popular, not necessarily because it was the right tool for the job. There are other platforms, Membies is a good example, where they basically try to cover a problem space, in this case, memberships. They seem to have things glued onto Membies such as a CMS system. But that CMS system will be pretty basic. It's probably not going to be comprehensive enough or integrated enough into the other aspects of what you want your web presence to be usable. And then you immediately start going, okay, so what can we use from something like Membies? And maybe the membership management is really good. And maybe they've got a membership portal that works. As soon as you're going, okay, I want to view a webinar in my membership portal. You're either going, is that going to work in the membership portal or is that going to have to be external? So these things get very mixed. They get very complicated very quickly if you're trying to use someone else's platform to achieve everything you want to achieve. If you already have started by going, I'll use their platform for everything they let me do and nothing else, that's fine. They'll get you up and running. But this system that we're talking about, this entire project already has quite set and quite varied requirements. So I personally don't think that any one system would come close to covering more than a fraction of those requirements. So that kind of leads me into, Well, there's two more. One is a completely custom solution. You write the whole thing from scratch. You build it in, I don't know, rails or something like that. It takes forever, you're locked in because as soon as you want to maintain it or upgrade it, you're basically stuck. You either pay a developer a lot of money for any upgrades and you have to make sure that it's, you know, to date with the latest version of whatever program language it was written on or the rest of it. That only makes sense if you've got an in-house team that works on it 24/7. You just don't really do that with a non-digital company. You need to be getting that ROI for that to make sense. The final approach, and this is essentially what I settled on after a couple of decades of doing this, is making use of vesting class services to do what they do best, and then writing essentially an app that speaks to those services and integrates them together. which lets you have that flexibility of using Best in Class software. So I write apps that use Shopify for the online store functionality. I use Sanity CMS in the past. I've used Contentful and all, so many different other craft CMS, all these other ones, but finally settled on Sanity 'cause it does what I want it to do and it's really, really good. Integrated with HubSpot for CRM management. All of these things can be done with a very, in ground terms, very small central hub speaking to all of them. All that's really required is a service like MBIS that's being integrated with has a good API and then that API can be used to integrate everything that that platform does into your website without being stuck with vendor lock-in, like you have to host with them if you need to replace that service. say if you're like, okay, this e-commerce store isn't working anymore, you can stop using it, you can just stop using Shopify, you can cut that segment out of your app as long as it's not way too integrated, which the goal would be to not do that. So all of that said, I would say there are core areas that would be covered by best-in-class, Ideally, membership would be one of them. Events would be another using zero. Again, would be really, really good. Whether it goes stripe zero, zero stripe, something that integrates to zero and stripe, that's something that I think would come out of this process. Yeah, and again, with the CRM complexity involved here, I would be curious if anything would be able to handle the approval process or whether it would make more sense to build something that does the core automation of this approval process and then maybe it sends out a docusign link. And then when that comes back it goes okay, you've signed the docusign, we're on to the next step in the process, it'll send an email to the member to tell them that that's been done or something like that because automation was part of this conversation. It's just not having so many touch points and so many things to go wrong. The NZ and AUGST is part of that. And there's ProRider where you send out invoices in June. So any membership or subscription software used would have to be able to also understand that. Some of them do, some of them don't. I guess guess the question is whether it would be possible to find one platform to understand all of it or whether you would be happy making sacrifices for some of it or whether you would rather build the core to do exactly what you want it to do and then build out from that core to have your reporting, have your zero integration or the rest of it. Yeah, does that make sense? Sorry Chris, that was a very long reply. [laughs] (laughs) - Cool, cool, glad to hear that. Yeah, I think we could either from here focus on the front end which is essentially the, what everyone sees, what the members see, the big visual impact, what you're gonna be sending out to the world, or there's a lot to do with Haman 360 and it's almost the same size of project and I think it is equally important, but whether it should happen in parallel or in some way, one and then the other, I'm not sure because making sure that you have accurate membership data is absolutely key. And there is so many improvements that could be made in there, but making sure that there's something for people to visit and look at and use the website for and that it's engaging and does everything it needs to do. Seems like the first step, the way to get this momentum going, Does that make sense? It's like a way to kind of treat it as two branches, cool. Yes. [ Pause ] [ Silence ] I think that would, yeah. Yeah. [ Silence ] [ Pause ] [BLANK_AUDIO] [pause] [ Silence ] Yeah, something I was going to say is that I think it is pretty key to get the membership directory whatever is in Web Force 5 out of Web Force 5 so that will automatically be part of the process by the end of it has to happen. a database that can be managed and updated in order simply to have a membership hub that you can log into and all the rest of it. That is kind of built into the front end. I think what becomes more technical and probably a job for a different team is where you would start be starting to talk about subscription management, the reporting analytics, all of that stuff because that is very much not a front-end conversation that's very architectural technical engineering kind of side of things especially when it comes to any automation that would happen on top of that but I do think it would be great to work towards that so kind of starting in the middle and working towards both ends obviously the front-end needs to be done for the website to exist and the back-end can be managed less and less by for example had in 360 as things are built out. Does that work? Yep. I would see what you're saying. So, basically, these providers that we... (laughs) It is a good question. I mean, so, I host with the software, and basically those softwares have SLAs. You know, if AWS goes down for a few hours, it makes international news. You try not to rely on something, or if it goes down for a week, you can't get a hold of anyone. You can't get a hold of anyone. Yeah, well, yeah, I mean, that's the thing, like the smaller the company and the more on-prem it is, the more you are just relying on them to be able to keep things up and running. So it's not really an advantage if you've got someone's phone number necessarily. Yes. And that would still, that would still be the case. you would-- yeah, yeah, of course. Yeah, you still need someone who understands the code that runs the website. Like, this is the thing. You're not running it on Membies. You are running it on its own code. You're just talking to Membies. So yeah, the code that is designed and run would be owned by someone, probably, and ideally, the original developer. But if it's written in software that is well understood and well known, it can be managed by anyone who can work with that technology. That's kind of the point of avoiding vendor lock-in. And there are a lot of companies that can manage this kind of technology. Yeah, that's one of the reasons you pick something that's really popular. It kind of helps to not end up being stuck hiring the one person in the country that can manage that kind of software or that kind of thing. Cool, what? Okay, so there are a few, like a lot of different details within say, education, webinars, events, selling tickets, the award ceremonies, I saw some details about managing the awards from within the CMS. I think a lot of this can be covered with relatively few tools. I would basically break it down into the CMS side of things, the membership side of things. We also had, I had a conversation with Anna actually about the way the chapters work. And I think there's an opportunity there for when you visit the website, and I welcome feedback on this, when you visit the website, whether or not you see information sort of immediately filtered by what's local to you, i.e. your local chapter, or whether everything is kind of public and everyone sees everything, until you've drilled down a little bit and gone, "Okay, I want to see what's within this chapter," and then that's what you see what that chapter's content looks like. Does anyone have any insight on if there's a preference there? I think it could work either way. (silence) Right, so that kind of goes both ways, right? Because if you have all the chapter content lumped together, you have less clicks but more noise. But if you have individual chapters, that's more click but less noise, you know? [BLANK_AUDIO] Yeah, yeah. I think that's a really good idea. Yeah. Cool. And that could be attached to your login. I think that's good. So that could be a Tenshi login or it could be like a cookie that remembers. I was kind of visualizing it almost like you pick your currency or something when you visit an e-commerce website and you're picking your chapter and then you might you still see everything but you see it filtered through the lens of the location that you're for. Yeah okay I'm glad everyone it sounds like that seems like something that could work. The other side of that was chapters being able to manage their own content so something and RISV is basically, chapters shouldn't be obviously seeing the membership data, they shouldn't be seeing the financial data, they should just be able to manage their news, their events, their bulletins, that kind of thing. So, yeah. So that would be access to, say, a store or any platform that might be managing those ticket events. Yes, so that could be definitely built in. It's more that keeping that membership area separate. Like I would say you almost have like a content admin and then you have like a super admin of sorts, the membership admin. Exactly. Cool. All right. Yeah, so that's what I envisioned there. Something else to bring up, which is a big overall concept. Like there's so much detail to go into, we can be here for those, but I'm trying to raise the really big concepts. Something I wanted to talk about was this concept of a source of truth for a data lake, which essentially is a large part of the issues with the memberships, is different systems talking to each other and having slightly different versions of the same data, or not having the data historically back into the past. So a key thing about this would be moving all your membership data into an essentially database that can be used to generate reports. You can ask questions of it. You can load it in different places. And then you can integrate it with things like zero, stripe, all the rest of it. But the same can be true of the content, as you could have a content feed. So something that would work with what you were talking about is going, OK, I want to filter by this chapter's data. Is, say, a chapter in your upload content, you can go, OK, I'm publishing to the channel everyone. and I'm also publishing to the, or I'm publishing to the channel, like, events for, or just for this chapter. And I think, from what I've gathered, there's even a layer within that which is like membership controlled. So say you're publishing a white paper, you don't want to just publish to anyone lucky at your chapter, you'd want to publish to members, maybe even of a certain tier, that can see this white paper. Does that sound? Yeah. Cool. So that's kind of the challenge. Yeah. Yeah. Yeah. So yeah, cool. So I just want to introduce this concept of channels, essentially where you're you're publishing to a channel. And that means that people can publish from a single place and not really have to go to all these different places in order to create and publish content. So, yeah, that's something I would like to kind of get from the very beginning to control this whole chapter system. Honestly, at the highest of levels, that is a lot of the detail that I've got in terms of how I would like to approach this. There's dozens of integrations from the sound of it. there's I would like to know what everyone thinks about saying event bright for all chapters or if that's something that like it sounds like sometimes there's a different tool for Australia or New Zealand or different tools for awards and Oh, that's good. Yeah. Yeah. Cool. Something, yeah. (laughs) Yeah, you kind of need to keep raising it. Cool, yeah, so there's a few things like that, some of which might be more across the board than others, but I think what I might suggest is keeping the integration loosely coupled initially. So you're not, say, forced to use Eventbrite. You can publish a link. And the link can be to Eventbrite in the first iteration. But if everyone's like, OK, well, this is working really well, then you might build that in and be like, OK, here's the Eventbrite button in the admin dashboard to link it to an Eventbrite thing. And then you get your analytics kind of like flowing back to your data lake and all the rest of it. So yeah, just kind of keeping it loosely coupled and flexible to begin with. And then building on that. Cool. Is there any particular area that I mean I'm sure I can dig into education for example or I can dig into the event systems, I did have a conversation about the conferences, microsites, things like that. That's a microsite. I think I've seen it. [silence] Hmm. Hmm. Hmm. Yeah, different kinds of content perhaps. And also, like, there's quite a lot of places in which the chapters, I think, merge their content into the main website. So having them separately on a different micro site perhaps wouldn't work for that reason. That's not to say you could reuse the same content and have something that looks like a microsite. You just don't want the content to be completely separate. Yeah, definitely something to think of. (laughing) Yeah. [ Pause ] [ Silence ] [ Silence ] [ Pause ] RLP, yeah. Yeah. [ Silence ] Yes, yeah. The automation of that is the tricky part because then you would have to figure out how to get CPD points out of different platforms and register them back to the member. But I have talked about this with a few people and how to do it. I think there is definitely a lot of flexibility that will be required around having forms and profile, membership profiles that have a lot of data against them, something, and is continually working on those things, but is having new fields against members to track things like CPD points, or adding new forms for them to fill in and the ability to resume it later and see what they filled in a year ago versus what they're filling in now and things like that. So yeah, comprehensive data against members sounds important. I have also talked about, like, I think there's this distinction between CBD points which are required and do require a paper trail currently for RLP. And they are encouraged, but not from my understanding, this enforced, maybe selectively enforced, for other membership crates is having your CBD trail, because it is, again, to my understanding, bit of an honor system around the way it currently works, but it is also somewhat tracked in terms of people filling in these forms. Does that sound right? That's yeah. I'm like combining about three separate conversations to get this. Yes, it's an honor system, right? Yeah. Uh, right. Yeah. Yeah, I think, yeah. Yeah. Yeah. Yeah. I think something internal like say if you have a webinar built within your membership hub and we would build a CBD tracking system within the membership database. Yes, that would be possible. I would probably start with the database.
        
    
- Reverse Brief (Draft)
    
    ## Solution Spaces
    
    - Portfolios
        - Conferences
            - Current one is on a separate microsite
            - 
        - Awards
            - Entry
            - Ticket sales
            - Award management
        - Education
            - Content library (doesnt exist yet)
            - Webinars
            - Short Courses
        - Memberships
            - Database copied year to year
            - Membership management
                - Special cases (terminated, resigned)
                - Lifetime / honorary
                - Review
            - Approval management
                - Approval Max
            - Payment manageent
                - Pro rata
                - Missed payments
            - Fraud prevention (same person new email)
            - Reporting
        - Marketing
            - Butter currently
            - Chapters + Secretariat
    - Front-end
        - Branding & Design
        - Ease of use
        - Ease of updating
        - Ease of improvement
        - Analytics
        - Marketing & SEO
    - Membership Hub
        - Ease of access
        - Incentives
        - Education
        
    - Store & Events
        - Tickets
        - Webinars
    - Membership Admin
        - Record keeping
        - Tracking changes
        - Tracking problems
        - Tracking history
        - Invoicing & Payments
        - Reporting
        - Automation
        
    - Chapters Admin
        - Access control
        - Following process
        - Ease of use
        - Flexibility
        
    - Admin: Content
        - Content types
        - Ease of updates
        - Flexibility
    - Admin: Store & Events
        
        
    
    ## Success Metrics
    
    - Systems
        - Flexibility
        - Reliability
        - Speed
        - Automation
    - Usability
        - No. of clicks
        - Ease of access
        - Ease of updating
        
    - Memberships
        - New Signups
        - Retention
        - Upgrades
        - Segments
            - Age groups
            - Markets
            - Locations
    
    ## Next Steps
    
    ---
    
    - Branding & Design
        - Logo
        - New copy and imagery
        - Print materials
        - Consistent branding across platforms
    - Usability Planning
        - Intuitive navigation
        - Search
        - User stories
        - Member journeys
        - Admin flows
    - Architecture Planning
        - Pages
            - Home
            - About
            - History
            - Advocacy
            - Terms / Privacy
        - Knowledgebase
            - Membership assistance
            - Education assistance
            - Mentorship programs
        - CMS types
            - General Pages
            - Help Articles
            - Events
            - Awards
            - Bulletins
            - Case studies
            - Testimonials
            - White papers
            - Interviews
        - Store types
            - Products
                - Advertisements
                - Sponsorships
            - Collections
    - Technical Planning
        - System design
            - Datalake
            - Content control
            - Membership flows
            - Reporting
        - CRM / Subscription management
            - Internal / external platform
            - Integration (xero / stripe / member logins)
            - Flexible around processes
        - Integrations
            - Xero
            - Stripe
            - Eventbrite
            - Shopify
            - Buffer
            - Google Analytics
            - Facebook Analytics
            - Linkedin
    - Automation Planning
        - Members
            - Onboarding / Sign up flows
            - Recover password
            - Recover accounts (renewal etc)
            - Form management
            - Payment
            - CPD Points
        - Memberships
            - Control flows
            - Add-on (eg RLP)
        - Transactional Emails
            - Member emails (welcome etc)
            - Payment status
            - Confirmations
            - Orders
    - External Context
        - PR Strategy
            - Online discussion groups
            - Local meetups
            - Mixers
            - Mentorship programs
            - Branded merchandise
            - Interviews and commentary
            - Media spokesperson
        - Marketing
            - Email newsletters
                - Networking opportunities
                - Bulletins
            - Social media
                - Event calendar
                - 
        - Branding & Design
            - Cohesive documents (PDF’s etc)
            - Seamless integrations
            - 
    - Future
        - Member surveys
        - Member feedback
        - Technical maintenance
        - Website improvements
        - Admin improvements
        - Community space

[Gemini](https://www.notion.so/Gemini-2a311cf7a1d680628c0fc57494247faf?pvs=21)