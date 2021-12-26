AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },
      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element

      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbnailEl = this.createThumbnail(item);

      borderEl.appendChild(thumbnailEl);

      // Title Text Element
      const titleEl = this.createTitle(position, item);

      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },

  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);

    entityEl.setAttribute("visible", true);

    entityEL.setAttribute("geometry", {
      radiusInner: 9,
      radiusOuter: 10,
      primitive: "ring",
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "black",
      opacity: 1,
    });

    return entityEl;
  },

  createThumbnail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });

    entityEl.setAttribute("material", {
      src: item.url,
    });

    return entityEl;
  },
  createTitle: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      font: "exo2bold",
      color: "#FFFFFF",
      align: "center",
      width: 70,
      value: item.title,
    });

    const elPos = position;
    elPos.y = position.y - 20;
    entityEl.setAttribute("position", elPos);

    return entityEl;
  },
});
