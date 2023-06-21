import * as THREE from 'three';

//Scene mesh camera renderer


//Scene
const scene = new THREE.Scene();

//Mesh
const geometry = new THREE.BoxGeometry(1,1,1);
const material  = new THREE.MeshBasicMaterial({color:"purple"})
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)


//Camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, aspect.width/aspect.height,1,2000)
camera.position.z = 3;

scene.add(camera)

//Renderer
const canvas = document.querySelector(".draw") //select the canvas
const renderer = new THREE.WebGL1Renderer({canvas})  //add webgl renderer
renderer.setSize(aspect.width,aspect.height);
renderer.render(scene,camera)


//Clock class
const clock = new THREE.Clock();


const animate = () => {

    //Get Elaspsed time
    const elapsedTime = clock.getElapsedTime();

    //Update Rotation on X-axis
    mesh.rotation.y = elapsedTime * Math.PI;

    //Renderer
    renderer.render(scene,camera);

    //RequestAnimationFrame
    window.requestAnimationFrame(animate);
};

animate();