import * as THREE from 'three'

const loadPConcreteTexutes = (textureLoader) => {
const PConcreteTextures = {}
const pConcreteColorTexture = textureLoader.load('textures\\polishedConcrete\\color.png')
const pConcreteNormalTexture = textureLoader.load('textures\\polishedConcrete\\normal.png')
const pConcreteRoughnessTexture = textureLoader.load('textures\\polishedConcrete\\roughness.png')
const pConcreteHeightTexture = textureLoader.load('textures\\polishedConcrete\\height.png')


pConcreteColorTexture.repeat.set(8, 8)
pConcreteNormalTexture.repeat.set(8, 8)
pConcreteRoughnessTexture.repeat.set(8, 8)
pConcreteHeightTexture.repeat.set(8, 8)


pConcreteColorTexture.wrapS = THREE.RepeatWrapping
pConcreteNormalTexture.wrapS = THREE.RepeatWrapping
pConcreteRoughnessTexture.wrapS = THREE.RepeatWrapping
pConcreteHeightTexture.wrapS = THREE.RepeatWrapping

pConcreteColorTexture.wrapT = THREE.RepeatWrapping
pConcreteNormalTexture.wrapT = THREE.RepeatWrapping
pConcreteRoughnessTexture.wrapT = THREE.RepeatWrapping
pConcreteHeightTexture.wrapT = THREE.RepeatWrapping

PConcreteTextures.pConcreteColorTexture = pConcreteColorTexture
PConcreteTextures.pConcreteNormalTexture = pConcreteNormalTexture
PConcreteTextures.pConcreteRoughnessTexture = pConcreteRoughnessTexture
PConcreteTextures.pConcreteHeightTexture = pConcreteHeightTexture

return PConcreteTextures
}
export default loadPConcreteTexutes;