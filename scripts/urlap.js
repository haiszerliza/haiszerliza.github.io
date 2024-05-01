document.getElementById("urlap").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var formData = new FormData(this);

    var name = formData.get("name");
    var email = formData.get("email");
    var message = formData.get("message");

    var to = "matricaelgato@gmail.com";

    var subject = "Űrlap üzenet";

    var content = "Név: " + name + "\n";
    content += "E-mail: " + email + "\n\n";
    content += "Üzenet:\n" + message;

    window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(content);
  });
  