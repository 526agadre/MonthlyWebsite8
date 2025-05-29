class Player {
  constructor(name, role, number, image, detail, fullImage) {
    this.name = name;
    this.role = role;
    this.number = number;
    this.image = image;
    this.detail = detail;
    this.fullImage = fullImage;
  }

  render() {
    const container = document.getElementById("team-container");

    const col = document.createElement("div");
    col.className = "col-4 col-sm-3 text-center mb-4";

    const img = document.createElement("img");
    img.src = this.image;
    img.alt = this.name;
    img.className = "img-fluid jersey-img";
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#playerModal");
    img.onclick = () => {
      document.getElementById("modalBody").textContent = this.detail;
      document.getElementById("playerModalLabel").textContent = `${this.name} - #${this.number}`;
      document.getElementById("playerModalImage").src = this.fullImage;
      document.getElementById("playerModalImage").alt = this.name;

    };

    col.appendChild(img);
    container.appendChild(col);
    if (this.role.toLowerCase().includes("goalkeeper")) {
      img.style.border = "3px solid green";
      img.style.borderRadius = "10px";
    }
  }
}

class Team {
  constructor(players) {
    this.players = players;
  }

  render() {
    this.players.forEach(player => player.render());
  }
}

const team = new Team([
  new Player("Lautaro Martínez", "Forward", 22, "imgs/argentina 22.png", "Quick striker with sharp finishing.","\imgs/lautaro martinez.jpg"),
  new Player("Lionel Messi", "Forward", 10, "imgs/argentina 10.png", "7-time Ballon d'Or winner.", "imgs/lionel messi.jpg"),
  new Player("Alexis Mac Allister", "Midfielder", 20, "imgs/argentina 20.png", "Excellent playmaker.", "imgs/alexis mac allister.jpg"),
  new Player("Rodrigo De Paul", "Midfielder", 7, "imgs/argentina 7.png", "Tireless and creative.", "imgs/rodrigo de paul.jpg"),
  new Player("Ángel Di María", "Winger", 11, "imgs/argentina 11.png", "Scored in major finals.",  "imgs/angel di maria.jpg"),
  new Player("Cristian Romero", "Defender", 13, "imgs/argentina 13.png", "Strong center-back.", "imgs/cristian romero.jpg"),
  new Player("Nicolás Tagliafico", "Defender", 3, "imgs/argentina 3.png", "Quick left-back.", "imgs/nicolas tagliafico.jpg"),
  new Player("Nahuel Molina", "Defender", 26, "imgs/argentina 26.png", "Great crosser.", "imgs/nahuel molina.jpg"),
  new Player("Enzo Fernández", "Midfielder", 24, "imgs/argentina 24.png", "Bright young talent.", "imgs/enzo fernandez.jpg"),
  new Player("Nicolás Otamendi", "Defender", 19, "imgs/argentina 19.png", "Veteran leader.",  "imgs/nicolas otamendi.jpg"),
  new Player("Emiliano Martínez", "Goalkeeper", 23, "imgs/argentina 23.png", "Golden Glove winner.", "imgs/emiliano martinez.jpg"),
  new Player("Lisandro Martínez", "Defender", 25, "imgs/argentina 25.png", "Aggressive tackler.", "imgs/lisandro martinez.jpg"),
]);

document.addEventListener("DOMContentLoaded", () => {
  team.render();
});
