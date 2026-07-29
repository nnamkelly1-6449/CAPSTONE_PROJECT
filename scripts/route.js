
const routes = {
  "Main Administration Block": { time: "Walking: ~2 mins | 100m", steps: ["Start at Main Gate", "Walk straight for 100m", "Admin Block is the big building on your right"] },
  "Faculty of Science & Technology": { time: "Walking: ~5 mins | 350m", steps: ["From Main Gate, walk past Admin Block", "Turn left at the roundabout", "Faculty is the 2nd building with blue roof"] },
  "University Library": { time: "Walking: ~4 mins | 250m", steps: ["Start at Main Gate", "Walk straight", "Library is beside the Chapel on your left"] },
  "University Chapel": { time: "Walking: ~3 mins | 200m", steps: ["From Main Gate, walk straight", "Chapel is the building with the cross, before the Library"] },
  "Cafeteria": { time: "Walking: ~6 mins | 400m", steps: ["Exit Main Gate area", "Walk towards Hostels", "Cafeteria is between Hostel A and B"] },
  "Campus Clinic": { time: "Walking: ~7 mins | 450m", steps: ["From Main Gate, go past Cafeteria", "Clinic is next to Hostel B"] }
}

window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const destination = params.get('to');
  if(destination) {
    document.getElementById('to-select').value = decodeURIComponent(destination);
    showRoute();
  }
}

function showRoute() {
  const to = document.getElementById('to-select').value;
  const from = document.getElementById('from-select').value;
  const route = routes[to];
  if(route) {
    document.getElementById('route-time').innerText = From: ${from} → To: ${to} | ${route.time};
    document.getElementById('route-steps').innerHTML = route.steps.map(s => <li>${s}</li>).join('');
    document.getElementById('route-result').style.display = 'block';
  }
}
