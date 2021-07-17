import * as THREE from 'three'

const loadEpoxyOneTexutes = (textureLoader) => {
const epoxyOneTextures = {}
const epoxyColorTexture = textureLoader.load('textures\\epoxy1\\color.png')
const epoxyNormalTexture = textureLoader.load('textures\\epoxy1\\normal.png')
const epoxyRoughnessTexture = textureLoader.load('textures\\epoxy1\\roughness.png')
const epoxyHeightTexture = textureLoader.load('textures\\epoxy1\\height.png')


epoxyColorTexture.repeat.set(8, 8)
epoxyNormalTexture.repeat.set(8, 8)
epoxyRoughnessTexture.repeat.set(8, 8)
epoxyHeightTexture.repeat.set(8, 8)


epoxyColorTexture.wrapS = THREE.RepeatWrapping
epoxyNormalTexture.wrapS = THREE.RepeatWrapping
epoxyRoughnessTexture.wrapS = THREE.RepeatWrapping
epoxyHeightTexture.wrapS = THREE.RepeatWrapping

epoxyColorTexture.wrapT = THREE.RepeatWrapping
epoxyNormalTexture.wrapT = THREE.RepeatWrapping
epoxyRoughnessTexture.wrapT = THREE.RepeatWrapping
epoxyHeightTexture.wrapT = THREE.RepeatWrapping

epoxyOneTextures.epoxyColorTexture = epoxyColorTexture
epoxyOneTextures.epoxyNormalTexture = epoxyNormalTexture
epoxyOneTextures.epoxyRoughnessTexture = epoxyRoughnessTexture
epoxyOneTextures.epoxyHeightTexture = epoxyHeightTexture

return epoxyOneTextures
}
export default loadEpoxyOneTexutes;