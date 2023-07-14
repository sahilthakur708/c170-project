AFRAME.registerComponent("marker-handler", {
    init: async function () {
      this.el.addEventListner("markerFound", () => {
        console.log("marker found");
        this.handleMarkerFound();
      });
      this.el.addEventListner("markerLost", () => {
        console.log("marker lost");
        this.handleMarkerLost();
      });
    },
    handleMarkerFound: function () {
      var ButtonDiv = document.getElementById("button-div");
      ButtonDiv.style.display = "flex";
  
      var ratingButton = document.getElementById("order-button");
      var orderButton = document.getElementById("order-summary");
  
      ratingButton.addEventListener("click", () => {
        swal({
          icon: "warning",
          title: "Rate Dish",
          text: "work in progress",
        });
      });
      orderButton.addEventListener("click", () => {
        swal({
          icon: "https://i.imgur.com/4NZ6uLY.jpg",
          title: "Order Dish",
          text: "Your order is getting ready",
        });
      });
    },
    handleMarkerLost: function () {
      var ButtonDiv = document.getElementById("button-div");
      ButtonDiv.style.display = "none";
    },
  });
  