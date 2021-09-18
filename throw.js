AFRAME.registerComponent("ball", {
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key == "z") {
        let el = document.createElement("a-entity");
        el.setAttribute("geometry", { primitive: "sphere", radius: 1 });
        el.setAttribute("material", { color: "black" });
        el.setAttribute("dynamic-body", { shape: "sphere" });

        let camera = document.querySelector("#camera");
        let position = camera.getAttribute("position");
        el.setAttribute("position", position);

        let new_camera = document.querySelector("#camera").object3D;
        let direction = new THREE.Vector3();
        new_camera.getWorldDirection(direction);
        el.setAttribute("velocity", direction.multiplyScalar(-10));

        el.setAttribute("position", position);
        let scene = document.querySelector("#scene");
        el.addEventListener("collide", this.handleCollide);
        scene.appendChild(el);
      }
    });
  },
});
