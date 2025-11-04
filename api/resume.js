import fs from 'fs';
import path from 'path';

// Inline the resume data for Vercel deployment to avoid file system access issues
const resumeData = {
  "name": "Shreeyash Santosh Ugale",
  "contact": {
    "email": "work.shreeyashugale@gmail.com",
    "phone": "1234567890",
    "github": "https://github.com/shreeyash-ugale",
    "linkedin": "https://linkedin.com/in/shreeyash-ugale"
  },
  "education": {
    "degree": "B.Tech. Computer Science and Engineering (Internet of Things)",
    "institute": "Vellore Institute of Technology",
    "cgpa": "8.98",
    "duration": "Aug. 2023 - Jul. 2027",
    "location": "Vellore, India"
  },
  "achievements": [
    {
      "title": "The Protector of Security Badge - HackTheBox",
      "description": "Awarded 'The Protector of Security' badge and ranking in the top 0.24% on HackTheBox",
      "date": "Sep 2025"
    },
    {
      "title": "Top 1% Global Ranking - HTB Academy",
      "description": "Ranked globally Top 1% in HTB Academy, compromised 350+ targets",
      "date": "Jul 2025"
    },
    {
      "title": "#801 Global Ranking on HackTheBox Labs",
      "description": "Secured Global Rank #801 on HackTheBox Labs, placing in top 0.05% of 1.6M+ practitioners.",
      "date": "Mar 2025"
    },
    {
      "title": "HackTheBox ProLabs: FullHouse",
      "description": "Completed HTB ProLabs FullHouse: Red Teaming exercise of Enterprise AD across 3+ subnets.",
      "date": "Feb 2025"
    }
  ],
  "certifications": [
    {
      "provider": "EC-Council",
      "certificates": [
        { "name": "Certified Ethical Hacker - CEHv13 with AI", "date": "Sept 2025" }
      ]
    },
    {
      "provider": "The SecOps Group",
      "certificates": [
        { "name": "Certified Network Security Practitioner (CNSP)", "date": "Jul 2025" }
      ]
    },
    {
      "provider": "EC-Council Essentials",
      "certificates": [
        { "name": "Ethical Hacking (EHE)", "date": "Oct 2024" },
        { "name": "Network Defense (NDE)", "date": "Oct 2024" },
        { "name": "Digital Forensics (DFE)", "date": "Oct 2024" }
      ]
    },
    {
      "provider": "Microsoft & LinkedIn",
      "certificates": [
        { "name": "Cybersecurity", "date": "Jan 2024" },
        { "name": "Azure System Administration", "date": "Jan 2024" }
      ]
    }
  ],
  "experience": [
    {
      "title": "Security Research Intern",
      "company": "CyStar Labs, IIT Madras",
      "duration": "Apr 2025 - Aug 2025",
      "technologies": "Webauthn/FIDO, PKCS11, Active Directory, ExpressJS, Typescript, Python",
      "responsibilities": [
        "Led development of a full-stack application with a custom FIDO Key on Shakti Processor for phishing-resistant authentication, reducing credential theft risk by 85%",
        "Built PDF signing software interfacing with Hardware Security Module (HSM) on Shakti Platform via PKCS#11 protocols, creating signatures verifiable in Adobe Acrobat Reader deployed within IIT Madras",
        "Created a custom Single Sign-On (SSO) service integrating LDAP (Lightweight directory access protocol) and Credential Management using Webauthn for ease of access across 8+ subdomains",
        "Configured On-premise Microsoft Active Directory (AD) infrastructure and Azure AD (with Entra ID Join) in Hybrid configuration using VMware as a testing environment, Researched Security Key integration in AD for auth"
      ]
    },
    {
      "title": "Backend Intern",
      "company": "Interact",
      "duration": "Aug. 2024 - Sept. 2024",
      "technologies": "Go, PostgreSQL, Docker, GCP",
      "responsibilities": [
        "Engineered logging of histories and comments for communities and organizations into a database using Go routines and constructed CI/CD pipelines on Google Cloud Platform"
      ]
    }
  ],
  "projects": [
    {
      "title": "Forge",
      "technologies": "Go, Geth, Docker Compose, Prometheus, Grafana",
      "date": "Oct. 2025",
      "description": [
        "Private ethereum PoS blockchain with real-time monitoring",
        "Orchestrated 3-node PoS Ethereum network along with a Go CLI App that exposes Prometheus/Grafana compatible metrics for real-time monitoring of block height, peer connectivity, and automated peer discovery via JSON-RPC and admin APIs"
      ]
    },
    {
      "title": "Courier",
      "technologies": "Go, AWS Lambda, S3, Terraform",
      "date": "Jan. 2025",
      "description": [
        "Automated mailing service built for organizations",
        "Architected cost-effective serverless email system with AWS Lambda, Go SDK, S3, and Terraform CI/CD, reducing costs by 90% while handling 1000+ emails/day with 99.9% uptime"
      ]
    }
  ],
  "activities": [
    {
      "organization": "Computer Society of India – VIT Chapter",
      "position": "Senior Core Member",
      "duration": "Apr. 2024 - Present",
      "location": "Vellore, India",
      "details": [
        "Prototyped an ICMP-based stealth chat application for covert network communication, bypassing traditional firewalls",
        "Served as panelist at Yantra Hack 2024 and team mentor for junior developers, providing technical guidance and direction",
        "Setup and self-hosted opensource project management software (Plane) on DigitalOcean leveraging Prometheus and Grafana monitoring capabilities to enhance team collaboration and track performance metrics",
        "Developed authentication systems and setup CI/CD pipelines with GitHub Actions for Gravitas-24 Techfest"
      ]
    }
  ],
  "skills": {
    "Penetration Testing Tools": [
      "Nmap", "Metasploit", "Wireshark", "Burpsuite", "Sqlmap", "Crackmapexec", "Hydra", "Hashcat", "John", "BloodHound", "Responder", "Kerbrute", "Evil-WinRM", "Impacket", "Mimikatz", "Rubeus", "PEASS-ng", "Ligolo-ng", "Chisel"
    ],
    "Languages": [
      "Java", "Python", "C/C++", "Golang", "Bash", "JavaScript", "HTML"
    ],
    "Frameworks": [
      "ExpressJS", "Go Fiber", "FastAPI"
    ],
    "Other Technologies": [
      "Git", "Docker", "VMware", "Prometheus", "Grafana", "Intermediate Networking", "Azure", "Digital Ocean", "AWS"
    ]
  }
};

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Send the resume data directly (no file system access)
    res.status(200).json(resumeData);
  } catch (error) {
    console.error('Error serving resume data:', error);
    res.status(500).json({ error: 'Failed to retrieve resume data' });
  }
}
