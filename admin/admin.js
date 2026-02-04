const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const todayIndex = new Date().getDay();
const tomorrowIndex = (todayIndex + 6) % 7;
const tomorrow = days[tomorrowIndex];

// Inventory calculation
let veg = 0, egg = 0, nonVeg = 0;

users.forEach(u => {
  const pref = u.preferences[tomorrow];
  if (pref === "Veg") veg++;
  if (pref === "Egg") egg++;
  if (pref === "Non-Veg") nonVeg++;
});

const container = document.getElementById("adminDashboard");

let html = `
<h2>System Overview</h2>

<h3>Users</h3>
<table border="1" width="100%" cellpadding="6">
  <tr>
    <th>Name</th>
    <th>Area</th>
    <th>Lane</th>
    <th>Assigned Agent</th>
  </tr>
`;

users.forEach(u => {
  const agent = agents.find(a => a.id === u.agentId);
  html += `
    <tr>
      <td>${u.name}</td>
      <td>${u.area}</td>
      <td>${u.lane}</td>
      <td>${agent ? agent.name : "-"}</td>
    </tr>
  `;
});

html += `
</table>

<h3 style="margin-top:20px;">Delivery Agents</h3>
<table border="1" width="100%" cellpadding="6">
  <tr>
    <th>Name</th>
    <th>Route</th>
  </tr>
`;

agents.forEach(a => {
  html += `
    <tr>
      <td>${a.name}</td>
      <td>${a.area}</td>
    </tr>
  `;
});

html += `
</table>

<h3 style="margin-top:20px;">Tomorrow's Inventory (${tomorrow})</h3>
<table border="1" width="100%" cellpadding="6">
  <tr><td>Veg</td><td>${veg}</td></tr>
  <tr><td>Egg</td><td>${egg}</td></tr>
  <tr><td>Non-Veg</td><td>${nonVeg}</td></tr>
</table>

<br>
<button onclick="downloadCSV()">Download All Data (CSV)</button>
`;

container.innerHTML = html;

function downloadCSV() {
  let csv = "Name,Area,Lane,Preference Tomorrow\n";
  users.forEach(u => {
    csv += `${u.name},${u.area},${u.lane},${u.preferences[tomorrow]}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "arogyaflow-data.csv";
  a.click();
}
