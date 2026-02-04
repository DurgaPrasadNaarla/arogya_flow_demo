const user = users.find(u => u.id === currentUserId);

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const todayIndex = new Date().getDay(); // 0 = Sunday
const tomorrowIndex = (todayIndex + 6) % 7;
const tomorrow = days[tomorrowIndex];

const container = document.getElementById("userDashboard");

let html = `
  <h2>${user.name}</h2>
  <p><strong>Area:</strong> ${user.area}</p>
  <p><strong>Lane:</strong> ${user.lane}</p>

  <hr>

  <h3>Tomorrow's Preference (${tomorrow})</h3>
  <select id="tomorrowPref">
    <option>Veg</option>
    <option>Egg</option>
    <option>Non-Veg</option>
  </select>
  <button onclick="savePreference()">Save Preference</button>

  <hr>

  <h3>Weekly Overview</h3>
  <table border="1" width="100%" cellpadding="6">
    <tr>
      <th>Day</th>
      <th>Preference</th>
    </tr>
`;

days.forEach(day => {
  html += `
    <tr>
      <td>${day}</td>
      <td>${user.preferences[day]}</td>
    </tr>
  `;
});

html += `</table>`;

container.innerHTML = html;

function savePreference() {
  const value = document.getElementById("tomorrowPref").value;
  user.preferences[tomorrow] = value;
  alert("Preference saved for " + tomorrow);
  location.reload();
}
