import * as THREE from "three";
import "./style.css"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"


//Scene
const scene = new THREE.Scene();

//Create our sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Sizes
const sizes = {
  height: window.innerHeight,
  width: window.innerWidth
}


//Lights
const light = new THREE.PointLight(0xffffff,1,100)
light.position.set(0,10,10)
scene.add(light)

//Camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width/sizes.height,
  0.1,
  100
  );
camera.position.z = 20;
scene.add(camera);


//Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setPixelRatio(2)
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)

//Controls
const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 5

//Resize
window.addEventListener("resize", () => {

  //Updates the sizes everytime the window is resized
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight


  //Update Camera
  camera.aspect = sizes.width/sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
})

const loop = () => { 
  // mesh.position.x += 0.1
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
}

loop()

const t1