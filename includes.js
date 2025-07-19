document.addEventListener("DOMContentLoaded", function () {
  includeSection("header", "includes/navbar.html");
  includeSection("footer", "includes/footer.html");
});

function includeSection(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // Optional: Reattach toggle menu script if navbar has interactive JS
      if (id === "header") attachNavbarScript();
    })
    .catch(error => console.error("Include error:", error));
}

// This reattaches the sidebar toggle menu logic after navbar is injected
function attachNavbarScript() {
  const menuToggle = document.getElementById("menuToggle");
  const sidebarMenu = document.getElementById("sidebarMenu");
  const menuOverlay = document.getElementById("menuOverlay");
  const closeSidebar = document.getElementById("closeSidebar");

  if (menuToggle && sidebarMenu && menuOverlay && closeSidebar) {
    menuToggle.addEventListener("click", function () {
      sidebarMenu.classList.add("show");
      menuOverlay.classList.add("show");
      document.body.classList.add("freeze-scroll");
    });

    closeSidebar.addEventListener("click", function () {
      sidebarMenu.classList.remove("show");
      menuOverlay.classList.remove("show");
      document.body.classList.remove("freeze-scroll");
    });

    menuOverlay.addEventListener("click", function () {
      sidebarMenu.classList.remove("show");
      menuOverlay.classList.remove("show");
      document.body.classList.remove("freeze-scroll");
    });
  }
}
