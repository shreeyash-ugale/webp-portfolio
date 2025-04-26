import fs from 'fs';
import path from 'path';

// Inline the resume data for Vercel deployment to avoid file system access issues
const resumeData = {
  "name": "Shreeyash Santosh Ugale",
  "contact": {
    "email": "shreeyash.santosh2023@vitstudent.ac.in",
    "phone": "1234567890",
    "github": "https://github.com/shreeyash-ugale",
    "linkedin": "https://linkedin.com/in/shreeyash-ugale"
  },
  "education": {
    "degree": "B.Tech. Computer Science and Engineering (Internet of Things)",
    "institute": "Vellore Institute of Technology",
    "cgpa": "8.99",
    "duration": "Aug. 2023 - Jul. 2027",
    "location": "Vellore, India"
  },
  "achievements": [
    {
      "title": "#801 Global Ranking on HackTheBox Labs",
      "description": "Ranked in top 0.05% globally among 1.6M+ cybersecurity practitioners.",
      "date": "Mar 2025"
    },
    {
      "title": "HackTheBox Penetration Tester Path: Top 1% in Academy",
      "description": "Mastered web security, network exploitation and privilege escalation techniques.",
      "date": "Feb 2025"
    },
    {
      "title": "HackTheBox Prolabs: FullHouse",
      "description": "Completed enterprise red team simulation across Active Directory, web applications, and multiple segregated network subnets requiring chained lateral movement techniques.",
      "date": "Feb 2025"
    }
  ],
  "certifications": [
    {
      "provider": "EC-Council Certifications",
      "certificates": [
        { "name": "Ethical Hacking Essentials (EHE)" },
        { "name": "Network Defense Essentials (NDE)" },
        { "name": "Digital Forensics Essentials (DFE)" }
      ]
    },
    {
      "provider": "Microsoft & LinkedIn Certifications",
      "certificates": [
        { "name": "Career Essentials in Cybersecurity" },
        { "name": "Career Essentials in System Administration" }
      ]
    }
  ],
  "experience": [
    {
      "title": "Research Intern",
      "company": "SECURSI TECHNOLOGIES (IIT Madras Seed-Funded Startup)",
      "duration": "Apr. 2025 - Present",
      "responsibilities": [
        "Designed and implemented FIDO2 WebAuthn protocol for passwordless authentication using security keys, reducing credential breaches",
        "Developed Full-stack application with React/Shadcn frontend and Express.js backend using Drizzle ORM with PostgreSQL",
        "Conducted security analysis and performance optimization for authentication flows in production environments"
      ]
    },    
    {
      "title": "Backend Intern",
      "company": "Interact",
      "duration": "Aug. 2024 - Nov. 2024",
      "responsibilities": [
        "Added logging of histories for communities and organization",
        "Integrated Google Authentication (OAuth) with oauth2",
        "Interfaced with Groq AI for code reviews during hackathons"
      ]
    }
  ],
  "projects": [
    {
      "title": "IoT Smart Lock System",
      "technologies": "NodeMCU (ESP8266), Capacitive Keypad (TTP229), RFID (MFRC522)",
      "date": "Mar. 2025",
      "description": [
        "Developed a smart door lock system using NodeMCU that allows secure access via physical keypad, RFID cards, and a web interface, featuring password management and master tag authentication",
        "Designed a space-efficient access control system using a 4×4 capacitive touch keypad with I2C protocol, reducing GPIO utilization by 75% compared to traditional matrix keypads"
      ]
    },
    {
      "title": "AWS Serverless Mailer",
      "technologies": "Go, AWS",
      "date": "Jan. 2025",
      "description": [
        "Collaborated with CSI team to design and manage a serverless email automation system tailored for event communication needs, ensuring efficiency and cost savings.",
        "Integrated AWS Lambda functions with Golang SDK to process emails in block and streaming modes while leveraging S3 for centralized HTML templates.",
        "Deployed infrastructure using Terraform to guarantee scalability, reliability, and seamless CI/CD workflows."
      ]
    }
  ],
  "activities": [
    {
      "organization": "Computer Society of India-VIT Chapter",
      "position": "Senior Core Member",
      "duration": "Apr. 2024 - Present",
      "location": "Vellore, India",
      "details": [
        "Developed authentication systems for event platforms using ExpressJS and implemented CI/CD pipelines with GitHub Actions for Gravitas-24 Techfest, ensuring streamlined deployments.",
        "Architected project management software on DigitalOcean with Docker, integrating Prometheus and Grafana for monitoring and improving organizational efficiency.",
        "Designed ICMP-based stealth chat application with end-to-end encryption for secure communication while leading and mentoring students at Yantra Hack 2024."
      ]
    }
  ],
  "skills": {
    "Penetration Testing Tools": [
      "Nmap", "Metasploit", "Netcat", "Wireshark", "Gobuster", "Burpsuite", "Nikto", "Sqlmap", "Crackmapexec", "Hydra", "Hashcat", "John", "BloodHound", "SharpGPO", "Responder", "Kerbrute", "Evil-WinRM", "Impacket Toolkit", "Mimikatz", "Rubeus", "PEASS-ng", "Ligolo-ng", "Chisel"
    ],
    "Languages & Frameworks": [
      "Java", "Python", "C/C++", "Golang", "Bash", "JavaScript", "HTML", "ExpressJS", "Gorilla Mux", "Go Fiber", "FastAPI"
    ],
    "Other Technologies": [
      "Git", "Docker", "Github Actions", "VMware Workstation", "Raspberry Pi 3B+", "Prometheus", "Grafana", "Digital Ocean", "AWS fundamentals"
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
