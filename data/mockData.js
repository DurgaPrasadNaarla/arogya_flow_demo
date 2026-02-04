// ================= DELIVERY AGENTS =================

const agents = [
  { id: 1, name: "Mahesh Kumar", area: "Miyapur → Madhapur" },
  { id: 2, name: "Ravi Teja", area: "Ameerpet Central" },
  { id: 3, name: "Srinivas Rao", area: "Madhapur Tech Area" }
];

// demo logged-in agent
let currentAgentId = 1;

// ================= USERS =================

const users = [
  // -------- Agent 1 (10 users) --------
  { id: 1, name: "Ramesh Goud", area: "Miyapur", lane: "Sri Sai Nagar, Lane 3", agentId: 1,
    preferences: { Monday:"Veg", Tuesday:"Egg", Wednesday:"Veg", Thursday:"Non-Veg", Friday:"Veg", Saturday:"Egg", Sunday:"Veg" } },

  { id: 2, name: "Srilatha Reddy", area: "Miyapur", lane: "Venkateswara Colony, Lane 2", agentId: 1,
    preferences: { Monday:"Veg", Tuesday:"Veg", Wednesday:"Egg", Thursday:"Veg", Friday:"Non-Veg", Saturday:"Veg", Sunday:"Veg" } },

  { id: 3, name: "Naveen Kumar", area: "Miyapur", lane: "Mathrusri Nagar", agentId: 1,
    preferences: { Monday:"Egg", Tuesday:"Veg", Wednesday:"Veg", Thursday:"Veg", Friday:"Egg", Saturday:"Veg", Sunday:"Non-Veg" } },

  { id: 4, name: "Anil Chowdary", area: "Miyapur", lane: "Pragathi Nagar", agentId: 1,
    preferences: { Monday:"Veg", Tuesday:"Egg", Wednesday:"Veg", Thursday:"Veg", Friday:"Veg", Saturday:"Egg", Sunday:"Veg" } },

  { id: 5, name: "Sunitha Devi", area: "Miyapur", lane: "HMT Colony", agentId: 1,
    preferences: { Monday:"Veg", Tuesday:"Veg", Wednesday:"Veg", Thursday:"Egg", Friday:"Veg", Saturday:"Veg", Sunday:"Veg" } },

  { id: 6, name: "Harish Reddy", area: "Miyapur", lane: "Jai Bharat Nagar", agentId: 1,
    preferences: { Monday:"Non-Veg", Tuesday:"Veg", Wednesday:"Egg", Thursday:"Veg", Friday:"Veg", Saturday:"Non-Veg", Sunday:"Veg" } },

  { id: 7, name: "Kavitha Rao", area: "Miyapur", lane: "Bhagyanagar Colony", agentId: 1,
    preferences: { Monday:"Veg", Tuesday:"Egg", Wednesday:"Veg", Thursday:"Veg", Friday:"Egg", Saturday:"Veg", Sunday:"Veg" } },

  { id: 8, name: "Prakash Naidu", area: "Miyapur", lane: "Sri Ram Nagar", agentId: 1,
    preferences: { Monday:"Egg", Tuesday:"Veg", Wednesday:"Egg", Thursday:"Veg", Friday:"Veg", Saturday:"Egg", Sunday:"Veg" } },

  { id: 9, name: "Deepika Sharma", area: "Miyapur", lane: "RTC Colony", agentId: 1,
    preferences: { Monday:"Veg", Tuesday:"Veg", Wednesday:"Veg", Thursday:"Veg", Friday:"Veg", Saturday:"Veg", Sunday:"Veg" } },

  { id: 10, name: "Vamsi Krishna", area: "Miyapur", lane: "Srinivasa Nagar", agentId: 1,
    preferences: { Monday:"Non-Veg", Tuesday:"Egg", Wednesday:"Veg", Thursday:"Egg", Friday:"Veg", Saturday:"Non-Veg", Sunday:"Veg" } },

  // -------- Agent 2 (10 users) --------
  { id: 11, name: "Lakshmi Devi", area: "Ameerpet", lane: "Divya Shakti Apts", agentId: 2,
    preferences: { Monday:"Veg", Tuesday:"Veg", Wednesday:"Veg", Thursday:"Egg", Friday:"Veg", Saturday:"Egg", Sunday:"Veg" } },

  { id: 12, name: "Kiran Rao", area: "Ameerpet", lane: "SR Nagar Lane 4", agentId: 2,
    preferences: { Monday:"Non-Veg", Tuesday:"Veg", Wednesday:"Egg", Thursday:"Veg", Friday:"Veg", Saturday:"Non-Veg", Sunday:"Veg" } },

  { id: 13, name: "Pooja Sharma", area: "Ameerpet", lane: "Yellareddyguda", agentId: 2,
    preferences: { Monday:"Veg", Tuesday:"Egg", Wednesday:"Veg", Thursday:"Veg", Friday:"Egg", Saturday:"Veg", Sunday:"Veg" } },

  { id: 14, name: "Sandeep Verma", area: "Ameerpet", lane: "Sanath Nagar", agentId: 2,
    preferences: { Monday:"Egg", Tuesday:"Veg", Wednesday:"Veg", Thursday:"Egg", Friday:"Veg", Saturday:"Egg", Sunday:"Veg" } },

  { id: 15, name: "Meena Joshi", area: "Ameerpet", lane: "Begumpet Road", agentId: 2,
    preferences: { Monday:"Veg", Tuesday:"Veg", Wednesday:"Veg", Thursday:"Veg", Friday:"Veg", Saturday:"Veg", Sunday:"Veg" } },

  // -------- Agent 3 (10 users) --------
  { id: 21, name: "Suresh Naidu", area: "Madhapur", lane: "Image Gardens Road", agentId: 3,
    preferences: { Monday:"Egg", Tuesday:"Veg", Wednesday:"Egg", Thursday:"Veg", Friday:"Veg", Saturday:"Egg", Sunday:"Non-Veg" } },

  { id: 22, name: "Anitha Reddy", area: "Madhapur", lane: "Kavuri Hills", agentId: 3,
    preferences: { Monday:"Veg", Tuesday:"Veg", Wednesday:"Veg", Thursday:"Veg", Friday:"Veg", Saturday:"Veg", Sunday:"Veg" } },

  { id: 23, name: "Pradeep Varma", area: "Madhapur", lane: "Cyber Hills Colony", agentId: 3,
    preferences: { Monday:"Non-Veg", Tuesday:"Egg", Wednesday:"Veg", Thursday:"Egg", Friday:"Veg", Saturday:"Non-Veg", Sunday:"Veg" } }
];

// demo logged-in user
let currentUserId = 1;
