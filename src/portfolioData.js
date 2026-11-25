export const PROFILE = {
  name: "Keshav Singh",
  role: "Network Engineer (CCNA Certified | CCNP In Progress) & Full-Stack Developer",
  tagline: "Combining Layer 1–4 Routing, Switching & Security with Layer 7 Full-Stack Web Engineering",
  location: "Moradabad / Noida, India",
  phone: "+91-9068497927",
  email: "keshavsin16@gmail.com",
  github: "https://github.com/keshav2446",
  linkedin: "https://linkedin.com/in/keshav-singh",
  instagram: "https://instagram.com/zeni.security",
  instagramHandle: "@zeni.security",
  education: [
    "B.Tech in Computer Science Engineering — Moradabad Institute of Technology (2021–2025)",
    "Diploma in Engineering (BTEUP) — Government Polytechnic, Moradabad (2018–2021)"
  ],
  certifications: [
    { name: "CCNA (200-301)", status: "Completed", color: "text-cyber-green" },
    { name: "CCNP Enterprise", status: "In Progress", color: "text-cyber-cyan" },
    { name: "Network & Cloud Security", status: "Pursuing", color: "text-cyber-red" },
    { name: "Full-Stack Web (MERN)", status: "Verified", color: "text-yellow-400" }
  ]
};

export const TOPOLOGY_NODES = [
  {
    id: "isp-edge",
    title: "ISP Edge Router (BGP / NAT)",
    ip: "203.0.113.1/30",
    role: "WAN Uplink, PAT & Edge ACLs",
    status: "UP / ACTIVE",
    config: `! CCNA / CCNP Edge Routing & NAT Policy
interface GigabitEthernet0/0
 description WAN_TO_ISP
 ip address 203.0.113.1 255.255.255.252
 ip nat outside
 ip access-group EDGE_IN in
!
ip nat inside source list LAN_POOL interface GigabitEthernet0/0 overload
router bgp 65100
 neighbor 203.0.113.2 remote-as 64500`,
    notes: "Edge WAN connectivity, NAT/PAT overload for internal hosts, ACL filtering, and BGP fundamentals."
  },
  {
    id: "core-fw",
    title: "Perimeter Security & ACL Gateway",
    ip: "10.0.0.1/24",
    role: "Access Control, Segmentation & VPN",
    status: "PROTECTED",
    config: `! Network Security & Traffic Control
ip access-list extended RESTRICT_MGMT
 permit tcp 10.20.0.0 0.0.255.255 host 10.10.1.1 eq 22
 deny   ip any any log
!
! Port Security & DHCP Snooping on Access Edge
ip dhcp snooping
ip dhcp snooping vlan 10,20`,
    notes: "Standard/Extended ACLs, DHCP snooping, port security, and secure remote management."
  },
  {
    id: "core-sw",
    title: "Enterprise Core Switch (OSPF / VLANs)",
    ip: "10.10.1.1/24",
    role: "VLAN Trunking, STP & OSPF Area 0",
    status: "CONVERGED",
    config: `! Multi-Layer Switching & OSPF Routing
vlan 10
 name CORP_WEB_APPS
vlan 20
 name ENG_LAB_NET
!
interface range GigabitEthernet0/1 - 24
 switchport mode access
 switchport access vlan 10
 spanning-tree portfast
!
router ospf 1
 router-id 1.1.1.1
 network 10.10.0.0 0.0.255.255 area 0`,
    notes: "VLAN segmentation, Inter-VLAN routing, RSTP/PortFast, EtherChannel, and single/multi-area OSPF."
  },
  {
    id: "web-app",
    title: "Layer 7 Web & API Application Server",
    ip: "10.10.10.50/24",
    role: "React, Node.js, Express, MongoDB & Python",
    status: "200 OK",
    config: `// Full-Stack & Automation Stack (Keshav Singh)
const engineeringStack = {
  web: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
  automationAndAI: ["Python", "TensorFlow", "OpenCV", "Git/GitHub", "Postman"],
  cloudAndNet: ["AWS (Basic)", "CCNA Certified", "CCNP In Progress"]
};`,
    notes: "Full-stack web apps and APIs built during GeeksforGeeks and Zidio Development internships."
  }
];

export const PROJECTS = [
  {
    title: "Enterprise Routing, Switching & Security Lab",
    category: "Network Engineering",
    layer: "CCNA + CCNP",
    description: "End-to-end lab topologies covering VLANs, Inter-VLAN routing, STP, EtherChannel, OSPF, NAT/PAT, ACLs, and enterprise campus design.",
    tech: ["Cisco IOS", "OSPF", "VLANs/STP", "NAT/ACLs", "Packet Tracer"],
    liveLink: "https://instagram.com/zeni.security",
    githubLink: "https://github.com/keshav2446"
  },
  {
    title: "Photographers Platform — Freelancing & Community",
    category: "Full-Stack Web App",
    layer: "Layer 7",
    description: "Community & freelancing web platform with photographer portfolios, equipment listings, city/date/time search, JWT auth, yearly subscriptions, and admin panel.",
    tech: ["React.js", "Node.js", "MongoDB", "JWT Auth"],
    liveLink: "https://github.com/keshav2446",
    githubLink: "https://github.com/keshav2446"
  },
  {
    title: "Excel Analytics Platform (Zidio Development)",
    category: "Web & Data Analytics",
    layer: "Layer 7",
    description: "Web-based Excel upload, backend file processing, structured MongoDB querying, and interactive charts for automated data insights.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://github.com/keshav2446",
    githubLink: "https://github.com/keshav2446"
  },
  {
    title: "Forest Fire Detection System",
    category: "Python & Computer Vision",
    layer: "Automation / AI",
    description: "Real-time fire detection GUI application using deep learning and video frames with automated email alert notifications.",
    tech: ["Python", "TensorFlow", "OpenCV", "Tkinter"],
    liveLink: "https://github.com/keshav2446",
    githubLink: "https://github.com/keshav2446"
  }
];

export const EXPERIENCE = [
  {
    role: "Web Developer Intern",
    company: "Zidio Development",
    period: "July 2025 – Oct 2025",
    location: "Remote",
    points: [
      "Built a web-based Excel Analytics Platform with responsive React.js UI for file upload and data visualization.",
      "Implemented Node.js/Express.js APIs for Excel file processing and MongoDB querying with interactive reports."
    ]
  },
  {
    role: "MERN Stack Developer Intern",
    company: "GeeksforGeeks",
    period: "July 2024 – Oct 2024",
    location: "Noida",
    points: [
      "Developed full-stack web apps using React.js, Node.js, Express.js, and MongoDB, improving frontend load time by 25%.",
      "Designed RESTful APIs, optimized MongoDB queries to lower response latency, and implemented JWT authentication."
    ]
  }
];

export const SKILLS = {
  networking: [
    "Completed: CCNA (200-301) — Routing, Switching, IPv4/IPv6, ACLs, NAT",
    "In Progress: CCNP Enterprise — Advanced Routing, Switching & Architecture",
    "Switching & Protocols: VLANs, Trunking, STP/RSTP, EtherChannel, OSPF",
    "Security & Services: ACLs, NAT/PAT, Port Security, DHCP, DNS, IP Services",
    "Core Foundations: Computer Networks, Troubleshooting, CLI Diagnostics"
  ],
  webdev: [
    "Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Responsive UI",
    "Backend & Auth: Node.js, Express.js, RESTful APIs, JWT Authentication",
    "Databases: MongoDB, DBMS & Query Optimization",
    "Languages & Tools: Python, Core Java, Git, GitHub, GitLab, Postman",
    "Cloud & APIs: AWS (Basic), Meta APIs, Webhooks"
  ]
};