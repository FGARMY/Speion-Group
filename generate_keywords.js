const fs = require('fs');

const keywordsSet = new Set();

// ==========================================
// PART 1: GLOBAL / LANGUAGE / LOCATION KEYWORDS
// ==========================================
const baseServices = [
  "Website Development", "Web Design", "App Development", "Mobile App Development", "Software Development", 
  "Custom Software", "IT Services", "AI Automations", "CRM Development", "ERP Development", "E-commerce Development",
  "Desarrollo de sitios web", "Diseño web", "Desarrollo de aplicaciones", "Desarrollo de software",
  "Création de site web", "Développement d'applications", "Développement de logiciels",
  "Webentwicklung", "App-Entwicklung", "Softwareentwicklung",
  "वेबसाइट डेवलपमेंट", "ऐप डेवलपमेंट", "सॉफ्टवेयर डेवलपमेंट",
  "वेबसाईट डेव्हलपमेंट", "अॅप डेव्हलपमेंट", "सॉफ्टवेअर डेव्हलपमेंट",
  "تطوير المواقع", "تطوير التطبيقات", "تطوير البرمجيات"
];

const baseIntents = [
  "Company", "Agency", "Services", "Developers", "Experts", "Cost",
  "Empresa", "Agencia", "Servicios", 
  "Entreprise", "Agence", 
  "Agentur", "Firma", 
  "कंपनी", "एजेंसी", 
  "شركة", "وكالة" 
];

const baseModifiers = [
  "Best", "Top", "Affordable", "Cheap", "Hire", "Outsource",
  "Mejor", "Barato", "Contratar", 
  "Meilleur", "Abordable", 
  "Beste", "Günstige", 
  "सबसे अच्छा", "सस्ता", 
  "أفضل", "رخيص" 
];

const locations = [
  "Pune", "Nashik", "Mumbai", "Maharashtra", "India", 
  "USA", "UK", "UAE", "Dubai", "Australia", "Canada", "London", "New York", "Germany", "France", "Spain", "Global"
];

for (const mod of baseModifiers) {
  for (const srv of baseServices) {
    for (const intent of baseIntents) {
      for (const loc of locations) {
        keywordsSet.add(`${mod} ${srv} ${intent} in ${loc}`);
      }
    }
  }
}


// ==========================================
// PART 2: B2B EXECUTIVE / INDUSTRY KEYWORDS
// ==========================================
const b2bServices = [
  "Custom Software Development", "Web Development", "Mobile App Development", 
  "AI Automation Solutions", "ERP System Integration", "CRM Customization", 
  "Cloud Migration Services", "Digital Transformation", "IT Consulting"
];

const personas = [
  "CEOs", "Founders", "CTOs", "Tech Leads", "Managing Directors", 
  "Startup Owners", "Business Owners", "VP of Engineering", "Operations Managers",
  "CIOs", "Enterprise Leaders"
];

const industries = [
  "Manufacturing", "Healthcare", "Fintech", "Logistics", "Retail", 
  "Real Estate", "SaaS", "E-commerce", "Education", "AgriTech", "EdTech", "HealthTech"
];

const execIntents = [
  "Enterprise Solutions for", "B2B Services for", "Outsourcing Partners for",
  "Cost-effective IT for", "Top Agencies for", "White-label Development for",
  "Strategic IT Consulting for", "Scalable Tech for", "Digital Transformation for"
];

const problems = [
  "to reduce costs", "to automate workflows", "to scale business",
  "to improve efficiency", "for digital transformation", "for competitive advantage",
  "to manage remote teams"
];


for (const intent of execIntents) {
  for (const srv of b2bServices) {
    for (const persona of personas) {
      keywordsSet.add(`${intent} ${srv} targeting ${persona}`);
      keywordsSet.add(`${srv} guide for ${persona}`);
    }
  }
}

for (const srv of b2bServices) {
  for (const ind of industries) {
    for (const persona of personas) {
      keywordsSet.add(`${ind} ${srv} for ${persona}`);
    }
  }
}

for (const srv of b2bServices) {
  for (const prob of problems) {
    for (const persona of personas) {
      keywordsSet.add(`${srv} ${prob} - guide for ${persona}`);
    }
  }
}

// ==========================================
// PART 3: DOMESTIC INDIA SPECIFIC KEYWORDS
// ==========================================
const indiaServices = [
  "Website Development", "Web Design", "Website Maker", "Website Builder",
  "CRM Development", "CRM Software", "Custom CRM", 
  "ERP Development", "ERP Software", "Cloud ERP",
  "App Development", "Mobile App Development", "Android App", "iOS App",
  "AI Automation", "AI Chatbots", "AI Solutions", "Business Automation"
];

const indiaLocations = [
  "India", "Pune", "Mumbai", "Nashik", "Delhi", "Bangalore", 
  "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Surat", 
  "Jaipur", "Gurgaon", "Noida", "Indore", "Maharashtra", "Gujarat", "Karnataka"
];

const indiaIntents = [
  "for Indian Startups", "for Small Business", "Near Me", 
  "with Price in India", "Cost in India", "in Low Budget", 
  "Kam Rate Me", "Sasta", "Developers", "Company", "Agency"
];

const indiaModifiers = [
  "Best", "Top 10", "Affordable", "Cheap", "Local", "Freelance", "Hire", "Trusted"
];


for (const mod of indiaModifiers) {
  for (const srv of indiaServices) {
    for (const intent of indiaIntents) {
      for (const loc of indiaLocations) {
        keywordsSet.add(`${mod} ${srv} ${intent} in ${loc}`);
        keywordsSet.add(`${srv} ${intent} ${loc}`);
      }
    }
  }
}

// ==========================================
// OUTPUT GENERATION
// ==========================================

const keywordsArray = Array.from(keywordsSet);

let csvContent = "Keyword\n" + keywordsArray.join("\n");
let mdContent = `# Comprehensive Master Agency Keywords\n\n`;
mdContent += `This list contains a combined total of **${keywordsArray.length}** keywords! I have ensured that ABSOLUTELY NO combinations are deleted. It includes everything from the global searches, B2B executives, and the extensive Indian domestic market.\n\n`;
mdContent += `## Keywords List\n\n\`\`\`text\n`;
mdContent += keywordsArray.join("\n");
mdContent += `\n\`\`\`\n`;

const artifactDir = 'C:\\Users\\Army\\.gemini\\antigravity-ide\\brain\\10eac841-d192-47aa-85b7-8397349794c5';
fs.mkdirSync(artifactDir, { recursive: true });
fs.writeFileSync(`${artifactDir}\\master_combined_keywords.md`, mdContent);
fs.writeFileSync(`${artifactDir}\\master_combined_keywords.csv`, csvContent);

console.log(`Generated ${keywordsArray.length} master keywords successfully without deleting any.`);
