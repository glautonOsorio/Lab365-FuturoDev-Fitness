const text = document.getElementById("textarea");
const span = document.getElementById("comment");

function Post() {
  if (text.value === "") {
    // Create and append the alert
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", "alert-warning", "custom-alert"); // Add Bootstrap classes and custom class
    alertDiv.setAttribute("role", "alert");
    alertDiv.innerHTML = `
      <strong>Warning!</strong> Please write something.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    `;
    document.body.appendChild(alertDiv);
  } else {
    // Set the value of span
    span.innerText = text.value;
  }
}
