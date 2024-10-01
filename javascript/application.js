document.addEventListener('DOMContentLoaded', function() {
  const tooltipNodeList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  Array.from(tooltipNodeList).map(element => new bootstrap.Tooltip(element));
});