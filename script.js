// /************** LOGIN DATA **************/
// const credentials = {
//   admin: { password: "admin123", role: "Admin" },
//   manager: { password: "manager123", role: "Manager" },
//   user: { password: "user123", role: "User" }
// };

// let currentRole = null;

// /************** USER DATA **************/
// const users = [
//   { name: "Anuj", email: "anuj@gmail.com", role: "Admin", status: "Active" },
//   { name: "Rahul", email: "rahul@gmail.com", role: "User", status: "Inactive" },
//   { name: "Pooja", email: "pooja@gmail.com", role: "Manager", status: "Active" },
//   { name: "Amit", email: "amit@gmail.com", role: "User", status: "Active" },
//   { name: "Sneha", email: "sneha@gmail.com", role: "User", status: "Inactive" },
//   { name: "Neha", email: "neha@gmail.com", role: "Manager", status: "Active" }
// ];

// let currentPage = 1;
// const usersPerPage = 3;
// let selectedFilter = "All";

// /************** LOGIN **************/
// function login() {
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
//   const error = document.getElementById("loginError");

//   if (!credentials[username] || credentials[username].password !== password) {
//   loginError.innerText = "Invalid credentials";
//   return;
// }


//   currentRole = credentials[username].role;

//   document.getElementById("loginScreen").style.display = "none";
//   document.getElementById("dashboard").style.display = "flex";
//   document.getElementById("panelTitle").innerText = currentRole + " Panel";

//   renderAll();
// }

// /************** LOGOUT **************/
// function logout() {
//   currentRole = null;
//   document.getElementById("dashboard").style.display = "none";
//   document.getElementById("loginScreen").style.display = "flex";
// }

// /************** RENDER **************/
// function renderAll() {
//   updateStats();
//   renderTable();
//   drawChart();
// }

// /************** STATS **************/
// function updateStats() {
//   document.getElementById("totalUsers").innerText = users.length;
//   document.getElementById("activeUsers").innerText =
//     users.filter(u => u.status === "Active").length;
//   document.getElementById("inactiveUsers").innerText =
//     users.filter(u => u.status === "Inactive").length;
// }

// /************** FILTER **************/
// function filterUsers() {
//   selectedFilter = document.getElementById("roleFilter").value;
//   currentPage = 1;
//   renderTable();
// }

// function getFilteredUsers() {
//   if (selectedFilter === "All") return users;
//   return users.filter(u => u.role === selectedFilter);
// }

// /************** TABLE **************/
// function renderTable() {
//   const table = document.getElementById("userTable");
//   table.innerHTML = "";

//   if (currentRole === "User") {
//     table.innerHTML = `<tr><td colspan="4" style="text-align:center;">Access Restricted</td></tr>`;
//     return;
//   }

//   const filtered = getFilteredUsers();
//   const start = (currentPage - 1) * usersPerPage;
//   const pageUsers = filtered.slice(start, start + usersPerPage);

//   if (pageUsers.length === 0) {
//     table.innerHTML = `<tr><td colspan="4">No Data</td></tr>`;
//     return;
//   }

//   pageUsers.forEach(u => {
//     table.innerHTML += `
//       <tr>
//         <td>${u.name}</td>
//         <td>${u.email}</td>
//         <td>${u.role}</td>
//         <td>${u.status}</td>
//       </tr>`;
//   });

//   document.getElementById("pageNum").innerText =
//     `Page ${currentPage} of ${Math.ceil(filtered.length / usersPerPage)}`;
// }

// /************** PAGINATION **************/
// function nextPage() {
//   if (currentPage * usersPerPage < getFilteredUsers().length) {
//     currentPage++;
//     renderTable();
//   }
// }

// function prevPage() {
//   if (currentPage > 1) {
//     currentPage--;
//     renderTable();
//   }
// }

// /************** CHART **************/
// function drawChart() {
//   const canvas = document.getElementById("userChart");
//   const ctx = canvas.getContext("2d");

//   canvas.width = 400;
//   canvas.height = 200;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   const active = users.filter(u => u.status === "Active").length;
//   const inactive = users.length - active;

//   ctx.fillStyle = "#22c55e";
//   ctx.fillRect(80, canvas.height - active * 20, 50, active * 20);

//   ctx.fillStyle = "#ef4444";
//   ctx.fillRect(180, canvas.height - inactive * 20, 50, inactive * 20);

//   ctx.fillStyle = "#000";
//   ctx.fillText("Active", 85, canvas.height - 5);
//   ctx.fillText("Inactive", 175, canvas.height - 5);
// }credentials[username] = {
//   password: password,
//   role: "Admin"
// };

// function addUser() {
//   // Only Admin can add users
//   if (currentRole !== "Admin") {
//     alert("Only Admin can add new users");
//     return;
//   }

//   const name = document.getElementById("newName").value.trim();
//   const email = document.getElementById("newEmail").value.trim();
//   const password = document.getElementById("newPassword").value.trim();
//   const role = document.getElementById("newRole").value;

//   if (!name || !email || !password) {
//     alert("All fields are required");
//     return;
//   }

//   // Check if user already exists
//   if (users.some(u => u.email === email)) {
//     alert("User already exists");
//     return;
//   }

//   // Add user to users array
//   users.push({
//     name,
//     email,
//     role,
//     status: "Active"
//   });

//   // Create login username from email
//   const username = email.split("@")[0];

//   // Add login credentials
//   credentials[username] = {
//     password: password,
//     role: role
//   };

//   // Reset form
//   document.getElementById("newName").value = "";
//   document.getElementById("newEmail").value = "";
//   document.getElementById("newPassword").value = "";

//   alert(`${role} added successfully`);

//   // Refresh UI
//   renderAll();
// }


/************** LOGIN CREDENTIALS **************/
let credentials = {
  admin: { password: "admin123", role: "Admin" },
  manager: { password: "manager123", role: "Manager" },
  user: { password: "user123", role: "User" }
};

let currentRole = null;

/************** USER DATABASE **************/
let users = [
  { name: "Anuj", email: "anuj@gmail.com", role: "Admin", status: "Active" },
  { name: "Rahul", email: "rahul@gmail.com", role: "User", status: "Inactive" },
  { name: "Pooja", email: "pooja@gmail.com", role: "Manager", status: "Active" },
  { name: "Amit", email: "amit@gmail.com", role: "User", status: "Active" }
];

let currentPage = 1;
const usersPerPage = 3;
let selectedFilter = "All";

/************** LOGIN **************/
function login() {
  const u = username.value;
  const p = password.value;
  loginError.innerText = "";

  if (!credentials[u] || credentials[u].password !== p) {
    loginError.innerText = "Invalid credentials";
    return;
  }

  currentRole = credentials[u].role;

  loginScreen.style.display = "none";
  dashboard.style.display = "flex";
  panelTitle.innerText = currentRole + " Panel";

  document.getElementById("addUserBox").style.display =
    currentRole === "Admin" ? "block" : "none";

  renderAll();
}

/************** LOGOUT **************/
function logout() {
  currentRole = null;
  dashboard.style.display = "none";
  loginScreen.style.display = "flex";
}

/************** ADD NEW ADMIN / MANAGER **************/
function addUser() {
  const name = newName.value.trim();
  const email = newEmail.value.trim();
  const pass = newPassword.value.trim();
  const role = newRole.value;
  const msg = document.getElementById("addUserMsg");

  if (!name || !email || !pass) {
    msg.innerText = "All fields required";
    msg.style.color = "red";
    return;
  }

  // Add to users table
  users.push({
    name,
    email,
    role,
    status: "Active"
  });

  // Add login credentials
  credentials[email.split("@")[0]] = {
    password: pass,
    role
  };

  msg.innerText = `${role} added successfully`;
  msg.style.color = "green";

  newName.value = "";
  newEmail.value = "";
  newPassword.value = "";

  renderAll();
}

/************** RENDER **************/
function renderAll() {
  updateStats();
  renderTable();
  drawChart();
}

/************** STATS **************/
function updateStats() {
  totalUsers.innerText = users.length;
  activeUsers.innerText = users.filter(u => u.status === "Active").length;
  inactiveUsers.innerText = users.filter(u => u.status === "Inactive").length;
}

/************** FILTER **************/
function filterUsers() {
  selectedFilter = roleFilter.value;
  currentPage = 1;
  renderTable();
}

function getFilteredUsers() {
  return selectedFilter === "All"
    ? users
    : users.filter(u => u.role === selectedFilter);
}

/************** TABLE **************/
function renderTable() {
  userTable.innerHTML = "";

  if (currentRole === "User") {
    userTable.innerHTML =
      `<tr><td colspan="4" align="center">Access Restricted</td></tr>`;
    return;
  }

  const data = getFilteredUsers();
  const start = (currentPage - 1) * usersPerPage;
  const pageUsers = data.slice(start, start + usersPerPage);

  pageUsers.forEach(u => {
    userTable.innerHTML += `
      <tr>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.role}</td>
        <td>${u.status}</td>
      </tr>`;
  });

  pageNum.innerText =
    `Page ${currentPage} of ${Math.ceil(data.length / usersPerPage)}`;
}

/************** PAGINATION **************/
function nextPage() {
  if (currentPage * usersPerPage < getFilteredUsers().length) {
    currentPage++;
    renderTable();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
}

/************** CHART **************/
function drawChart() {
  const canvas = document.getElementById("userChart");
  const ctx = canvas.getContext("2d");

  canvas.width = 400;
  canvas.height = 200;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const active = users.filter(u => u.status === "Active").length;
  const inactive = users.length - active;

  ctx.fillStyle = "#22c55e";
  ctx.fillRect(80, canvas.height - active * 20, 50, active * 20);

  ctx.fillStyle = "#ef4444";
  ctx.fillRect(180, canvas.height - inactive * 20, 50, inactive * 20);

  ctx.fillStyle = "#000";
  ctx.fillText("Active", 85, canvas.height - 5);
  ctx.fillText("Inactive", 175, canvas.height - 5);
}credentials[username] = {
  password: password,
  role: "Admin"
};