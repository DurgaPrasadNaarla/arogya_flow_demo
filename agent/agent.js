const agent = agents.find(a => a.id === currentAgentId);

// Orders assigned to this agent
const todaysOrders = users.filter(u => u.agentId === agent.id);

const container = document.getElementById("agentDashboard");

let html = `
  <h2>${agent.name}</h2>
  <p><strong>Route:</strong> ${agent.area}</p>

  <hr>

  <h3>Today's Deliveries</h3>
  <table border="1" width="100%" cellpadding="6">
    <tr>
      <th>User</th>
      <th>Lane</th>
      <th>Preference</th>
      <th>Status</th>
    </tr>
`;

todaysOrders.forEach((u, index) => {
  html += `
    <tr>
      <td>${u.name}</td>
      <td>${u.lane}</td>
      <td>${u.preferences[new Date().toLocaleString('en-us', { weekday: 'long' })]}</td>
      <td>
        <select onchange="updateStatus(${index}, this.value)">
          <option>Pending</option>
          <option>Delivered</option>
        </select>
      </td>
    </tr>
  `;
});

html += `
  </table>

  <hr>

  <button onclick="openRoute()">Open Optimized Route in Google Maps</button>
  <p id="checkpoint" style="margin-top:10px;color:#555;"></p>
`;

container.innerHTML = html;

function updateStatus(index, status) {
  document.getElementById("checkpoint").innerText =
    "Last update: Order " + (index + 1) + " marked as " + status;
}

function openRoute() {
  let locations = todaysOrders.map(u => encodeURIComponent(u.lane + ", " + u.area));
  let mapsUrl = "https://www.google.com/maps/dir/" + locations.join("/");
  window.open(mapsUrl, "_blank");
}
