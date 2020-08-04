/* stylesheet */
import "./assets/sass/styles.scss";

import * as THREE from "three";
import { Camera } from "./components/cameras";

const camera = new Camera({
  fov: 70,
  aspect: window.innerWidth / window.innerHeight,
  near: 0.01,
  far: 10,
});
camera.position.z = 1;

var scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {
  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render(scene, camera);
}
