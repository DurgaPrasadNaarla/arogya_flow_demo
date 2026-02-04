function goToRole(role) {
  if (role === 'user') {
    window.location.href = 'user/dashboard.html';
  }
  if (role === 'agent') {
    window.location.href = 'agent/dashboard.html';
  }
  if (role === 'inventory') {
    window.location.href = 'inventory/dashboard.html';
  }
  if (role === 'admin') {
    window.location.href = 'admin/dashboard.html';
  }
}
