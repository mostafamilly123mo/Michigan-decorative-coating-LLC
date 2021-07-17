import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/orbitcontrols'
import './config/bootstrapConfig'
import './style.css'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import loadEpoxyOneTexutes from './config/epoxy1Textures';
import loadPConcreteTexutes from './config/polishedConcrete';


/*
    Vairables
*/
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene();
const size = {
    width: window.innerWidth,
    height: canvas.clientHeight
}

/* 
    Loaders
*/
const textureLoader = new THREE.TextureLoader()
const gltfLoader = new GLTFLoader()
gltfLoader.load('models/warehouse/warehouse.glb' , (gltf) => {
    scene.add(gltf.scene)
})

/*
    Textures
*/
const epoxy1Textures = loadEpoxyOneTexutes(textureLoader)
const polishedConcreteTextures = loadPConcreteTexutes(textureLoader)

/*
    Events
*/
window.addEventListener('resize', () => {
    size.width = window.innerWidth;
    size.height = canvas.clientHeight
    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()
    renderer.setSize(size.width, size.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
const epoxyFloorButton = document.querySelector('.epoxyFloorButton')
epoxyFloorButton.addEventListener('click' ,() => {
floor.material.map = epoxy1Textures.epoxyColorTexture
floor.material.roughnessMap = epoxy1Textures.epoxyRoughnessTexture
floor.material.normalMap = epoxy1Textures.epoxyNormalTexture
floor.material.displacementMap = epoxy1Textures.epoxyHeightTexture
})
const concreteFloorButton = document.querySelector('.concreteFloorButton')
concreteFloorButton.addEventListener('click' ,() => {
floor.material.map = polishedConcreteTextures.pConcreteColorTexture
floor.material.roughnessMap = polishedConcreteTextures.pConcreteRoughnessTexture
floor.material.normalMap = polishedConcreteTextures.pConcreteNormalTexture
floor.material.displacementMap = polishedConcreteTextures.pConcreteRoughnessTexture
})

/*
    Lights
*/
const ambiebtLight = new THREE.AmbientLight('white', 1)
scene.add(ambiebtLight)

const directionalLight = new THREE.DirectionalLight('white', 0.9)
scene.add(directionalLight)
directionalLight.position.copy(new THREE.Vector3(59.3 , 178.5 , 211))


/*
    Cameras
*/
const camera = new THREE.PerspectiveCamera(45, size.width / size.height, 0.1, 2000);
scene.add(camera)
camera.position.z = -20
camera.position.y = 20
camera.lookAt(new THREE.Vector3(0,0,20))

/*
    Objects
*/
const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(115.3, 169.7, 32),
    new THREE.MeshStandardMaterial({
        map : epoxy1Textures.epoxyColorTexture ,
        displacementMap : epoxy1Textures.epoxyHeightTexture,
        roughnessMap :epoxy1Textures.epoxyRoughnessTexture,
        normalMap : epoxy1Textures.epoxyNormalTexture
    }))
floor.rotation.x = -Math.PI / 2
floor.material.side = THREE.DoubleSide
floor.material.map.encoding = THREE.GammaEncoding 
scene.add(floor)

/*
    Renderer
*/
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setClearAlpha(0xff0000)
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.physicallyCorrectLights = true

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false
controls.dampingFactor = 0.25;
controls.minPolarAngle = Math.PI / 4;
controls.maxPolarAngle = Math.PI / 2 - 0.1;
controls.target = new THREE.Vector3(0,18 , 0)
controls.autoRotate = true
controls.autoRotateSpeed = 1.0
const tick = function () {
    requestAnimationFrame(tick);
    renderer.render(scene, camera);
    controls.update()
};

tick();
