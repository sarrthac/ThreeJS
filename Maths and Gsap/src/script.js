import "./style.css";
import * as THREE from "three";

//Scene
const scene = new THREE.Scene();

//Mesh
const geomtery = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geomtery, material);

scene.add(mesh);

const cursor = {
  x:0,
  y:0
}

//Mouse Listener 
window.addEventListener("mousemove",(event) =>{
  cursor.x = event.clientX/window.innerWidth -0.5;
  cursor.y = event.clientY/window.innerHeight -0.5; //here we are subtarcting the 0.5 from x & y to make it look also into the negative direction
  console.log(cursor.x,cursor.y);
})



//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;

scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

//Clock Class
const clock = new THREE.Clock();

const animate = () => {
  //GetElapsedTime
  const elapsedTime = clock.getElapsedTime();

  //Mesh Rotation Y
  // mesh.rotation.y = elapsedTime * 0.25;

  //LookAt to make mesh look at the cursor point
    mesh.lookAt(new THREE.Vector3(cursor.x,-cursor.y,1));



  //Renderer
  renderer.render(scene, camera);

  //RequestAnimationFrame
  window.requestAnimationFrame(animate);
};
animate();
