//Scene Mesh Camera Renderer


//Scene 
const scene = new THREE.Scene();

//Group of mesh i.e we can add number of meshes in the group
const group = new THREE.Group()


//Mesh
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({
    color: "purple"
});
const mesh = new THREE.Mesh(geometry,material);
mesh.position.z = 1;

//Mesh two
const geometryT = new THREE.BoxGeometry(1,1,1);
const materialT = new THREE.MeshBasicMaterial({
    color: "green"
})
const meshT = new THREE.Mesh(geometryT,materialT)
meshT.position.y = 2


group.add(mesh,meshT);
group.position.x=1
scene.add(group)

//Axes helper section
const axesHelper = new THREE.AxesHelper(4)
scene.add(axesHelper)

//Camera
const aspect = {
  width:window.innerWidth,
  height:window.innerHeight  
}
const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height,1,2000) //near value is 1 and far value is 2000
camera.position.z = 5;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

//camera helper
// const helper = new THREE.CameraHelper( camera );
// scene.add( helper );

//Renderer


const canvas = document.querySelector(".draw");    //selecting the html element canva
const renderer = new THREE.WebGLRenderer({canvas});  //add the webGLRenderer
renderer.setSize(aspect.width,aspect.height) //Renderer size
renderer.render(scene,camera); //display what the camera in the scene captured