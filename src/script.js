import * as THREE from 'three'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three';

const image = new TextureLoader().load('models/room/textures/Blanket_baseColor.jpeg')

console.log(image)
/*
    Vairables
*/
const scene = new THREE.Scene();

/* 
    Loaders
*/
const gltfLoader = new GLTFLoader()
gltfLoader.load('models/room/scene.gltf' , (gltf) => {
    console.log(gltf)
})

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ map: image });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();