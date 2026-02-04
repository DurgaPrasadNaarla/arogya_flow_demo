const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const todayIndex = new Date().getDay(); // 0 = Sunday
const tomorrowIndex = (todayIndex + 6) % 7;
const tomorrow = days[tomorrowIndex];

let vegCount = 0;
let eggCount = 0;
let nonVegCount = 0;

users.forEach(u => {
  const pref = u.preferences[tomorrow];
  if (pref === "Veg") vegCount++;
  if (pref === "Egg") eggCount++;
  if (pref === "Non-Veg") nonVegCount++;
});

const container = document.getElementById("inventoryDashboard");

container.innerHTML = `
  <h2>Tomorrow's Preparation (${tomorrow})</h2>

  <table border="1" width="100%" cellpadding="8">
    <tr>
      <th>Category</th>
      <th>Quantity</th>
    </tr>
    <tr>
      <td>Veg Meals</td>
      <td>${vegCount}</td>
    </tr>
    <tr>
      <td>Egg Meals</td>
      <td>${eggCount}</td>
    </tr>
    <tr>
      <td>Non-Veg Meals</td>
      <td>${nonVegCount}</td>
    </tr>
  </table>

  <p style="margin-top:15px;color:#555;">
    * Counts are based on user preferences submitted before cutoff time.
  </p>
`;
