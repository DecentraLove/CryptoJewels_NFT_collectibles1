import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../94d40c0a-759a-4210-bb23-7a87d9e143f1/src/item"
import Script2 from "../bcdcfbe4-bd95-4100-9174-b38785b45e2c/src/item"
import Script3 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script4 from "../645d2a2b-266d-4872-9368-562ca4a81139/src/item"
import Script5 from "../0ee46c79-338c-445a-a506-ea26d80fbe46/src/item"
import Script6 from "../8dcc2ca4-5e30-4488-9731-be24f0c041fd/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const roofGlassCornerSmall = new Entity('roofGlassCornerSmall')
engine.addEntity(roofGlassCornerSmall)
roofGlassCornerSmall.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(14, 0, 0),
  rotation: new Quaternion(-5.7769201308201495e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
roofGlassCornerSmall.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("1a213f524e71d09fab0785e9800e062e3f781ebc73985a6e8068de34254429f5/GlassRoof_Corner_Small.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
roofGlassCornerSmall.addComponentOrReplace(gltfShape)

const roofGlassCornerSmall2 = new Entity('roofGlassCornerSmall2')
engine.addEntity(roofGlassCornerSmall2)
roofGlassCornerSmall2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(2, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassCornerSmall2.addComponentOrReplace(transform3)
roofGlassCornerSmall2.addComponentOrReplace(gltfShape)

const roofMetalCornerSmall = new Entity('roofMetalCornerSmall')
engine.addEntity(roofMetalCornerSmall)
roofMetalCornerSmall.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(16, 0, 14),
  rotation: new Quaternion(1.0572841430481206e-14, -0.7071070075035095, 8.429371689544496e-8, -0.7071065902709961),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
roofMetalCornerSmall.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("c7aeb2ffb71b23a1a26760808e5f4a28682a3748e64a30da13539278d7678499/MetalRoof_Corner_Small.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
roofMetalCornerSmall.addComponentOrReplace(gltfShape2)

const roofMetalCornerSmall2 = new Entity('roofMetalCornerSmall2')
engine.addEntity(roofMetalCornerSmall2)
roofMetalCornerSmall2.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(0, 0, 2),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
roofMetalCornerSmall2.addComponentOrReplace(transform5)
roofMetalCornerSmall2.addComponentOrReplace(gltfShape2)

const roofMetalSmall = new Entity('roofMetalSmall')
engine.addEntity(roofMetalSmall)
roofMetalSmall.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(2, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalSmall.addComponentOrReplace(transform6)
const gltfShape3 = new GLTFShape("a9d7f1a23f0c7e0549e86be033358f90d3c7f16c2a9144800c9cb9155fa2f3ef/MetalRoof_Small.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
roofMetalSmall.addComponentOrReplace(gltfShape3)

const roofMetalSmall2 = new Entity('roofMetalSmall2')
engine.addEntity(roofMetalSmall2)
roofMetalSmall2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(2, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalSmall2.addComponentOrReplace(transform7)
roofMetalSmall2.addComponentOrReplace(gltfShape3)

const roofGlass = new Entity('roofGlass')
engine.addEntity(roofGlass)
roofGlass.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(14, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlass.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("18751471889024d88c737019efe01603dbcb11d785f285e57d17a52c97e02744/GlassRoof.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
roofGlass.addComponentOrReplace(gltfShape4)

const roofGlass3 = new Entity('roofGlass3')
engine.addEntity(roofGlass3)
roofGlass3.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(6, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlass3.addComponentOrReplace(transform9)
roofGlass3.addComponentOrReplace(gltfShape4)

const roofMetal = new Entity('roofMetal')
engine.addEntity(roofMetal)
roofMetal.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(10, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetal.addComponentOrReplace(transform10)
const gltfShape5 = new GLTFShape("495a26ee9481fdf049c5301c21e92c0055794fd19d399dec6fa6b6f4531b3d0a/MetalRoof.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
roofMetal.addComponentOrReplace(gltfShape5)

const roofMetal2 = new Entity('roofMetal2')
engine.addEntity(roofMetal2)
roofMetal2.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(10, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetal2.addComponentOrReplace(transform11)
roofMetal2.addComponentOrReplace(gltfShape5)

const roofMetal4 = new Entity('roofMetal4')
engine.addEntity(roofMetal4)
roofMetal4.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(14, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetal4.addComponentOrReplace(transform12)
roofMetal4.addComponentOrReplace(gltfShape5)

const roofGlass4 = new Entity('roofGlass4')
engine.addEntity(roofGlass4)
roofGlass4.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(6, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlass4.addComponentOrReplace(transform13)
roofGlass4.addComponentOrReplace(gltfShape4)

const roofGlass5 = new Entity('roofGlass5')
engine.addEntity(roofGlass5)
roofGlass5.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(14, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlass5.addComponentOrReplace(transform14)
roofGlass5.addComponentOrReplace(gltfShape4)

const roofGlassSmall6 = new Entity('roofGlassSmall6')
engine.addEntity(roofGlassSmall6)
roofGlassSmall6.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(4, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassSmall6.addComponentOrReplace(transform15)
const gltfShape6 = new GLTFShape("31a9db4590601ecf1d054ea05a47d006549221e0c5a168c24a0dd4f6babca624/GlassRoof_Small.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
roofGlassSmall6.addComponentOrReplace(gltfShape6)

const roofGlassSmall7 = new Entity('roofGlassSmall7')
engine.addEntity(roofGlassSmall7)
roofGlassSmall7.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(16, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassSmall7.addComponentOrReplace(transform16)
roofGlassSmall7.addComponentOrReplace(gltfShape6)

const roofGlassSmall8 = new Entity('roofGlassSmall8')
engine.addEntity(roofGlassSmall8)
roofGlassSmall8.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(6, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassSmall8.addComponentOrReplace(transform17)
roofGlassSmall8.addComponentOrReplace(gltfShape6)

const roofGlassSmall9 = new Entity('roofGlassSmall9')
engine.addEntity(roofGlassSmall9)
roofGlassSmall9.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(16, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassSmall9.addComponentOrReplace(transform18)
roofGlassSmall9.addComponentOrReplace(gltfShape6)

const roofGlassSmall10 = new Entity('roofGlassSmall10')
engine.addEntity(roofGlassSmall10)
roofGlassSmall10.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(14, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassSmall10.addComponentOrReplace(transform19)
roofGlassSmall10.addComponentOrReplace(gltfShape6)

const roofGlassSmall11 = new Entity('roofGlassSmall11')
engine.addEntity(roofGlassSmall11)
roofGlassSmall11.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(12, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassSmall11.addComponentOrReplace(transform20)
roofGlassSmall11.addComponentOrReplace(gltfShape6)

const roofMetalSmall5 = new Entity('roofMetalSmall5')
engine.addEntity(roofMetalSmall5)
roofMetalSmall5.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(16, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalSmall5.addComponentOrReplace(transform21)
roofMetalSmall5.addComponentOrReplace(gltfShape3)

const roofMetalSmall6 = new Entity('roofMetalSmall6')
engine.addEntity(roofMetalSmall6)
roofMetalSmall6.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(16, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalSmall6.addComponentOrReplace(transform22)
roofMetalSmall6.addComponentOrReplace(gltfShape3)

const roofMetalSmall7 = new Entity('roofMetalSmall7')
engine.addEntity(roofMetalSmall7)
roofMetalSmall7.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(14, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalSmall7.addComponentOrReplace(transform23)
roofMetalSmall7.addComponentOrReplace(gltfShape3)

const roofMetalSmall8 = new Entity('roofMetalSmall8')
engine.addEntity(roofMetalSmall8)
roofMetalSmall8.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(12, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalSmall8.addComponentOrReplace(transform24)
roofMetalSmall8.addComponentOrReplace(gltfShape3)

const roofMetalSmall9 = new Entity('roofMetalSmall9')
engine.addEntity(roofMetalSmall9)
roofMetalSmall9.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(8, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalSmall9.addComponentOrReplace(transform25)
roofMetalSmall9.addComponentOrReplace(gltfShape3)

const roofMetalSmall10 = new Entity('roofMetalSmall10')
engine.addEntity(roofMetalSmall10)
roofMetalSmall10.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(10, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalSmall10.addComponentOrReplace(transform26)
roofMetalSmall10.addComponentOrReplace(gltfShape3)

const roofGlassSmall12 = new Entity('roofGlassSmall12')
engine.addEntity(roofGlassSmall12)
roofGlassSmall12.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(16, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassSmall12.addComponentOrReplace(transform27)
roofGlassSmall12.addComponentOrReplace(gltfShape6)

const roofGlassSmall13 = new Entity('roofGlassSmall13')
engine.addEntity(roofGlassSmall13)
roofGlassSmall13.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassSmall13.addComponentOrReplace(transform28)
roofGlassSmall13.addComponentOrReplace(gltfShape6)

const roofGlassSmall14 = new Entity('roofGlassSmall14')
engine.addEntity(roofGlassSmall14)
roofGlassSmall14.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(2, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassSmall14.addComponentOrReplace(transform29)
roofGlassSmall14.addComponentOrReplace(gltfShape6)

const roofGlassSmall15 = new Entity('roofGlassSmall15')
engine.addEntity(roofGlassSmall15)
roofGlassSmall15.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(2, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassSmall15.addComponentOrReplace(transform30)
roofGlassSmall15.addComponentOrReplace(gltfShape6)

const roofMetalSmall11 = new Entity('roofMetalSmall11')
engine.addEntity(roofMetalSmall11)
roofMetalSmall11.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(10, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalSmall11.addComponentOrReplace(transform31)
roofMetalSmall11.addComponentOrReplace(gltfShape3)

const roofMetalSmall12 = new Entity('roofMetalSmall12')
engine.addEntity(roofMetalSmall12)
roofMetalSmall12.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalSmall12.addComponentOrReplace(transform32)
roofMetalSmall12.addComponentOrReplace(gltfShape3)

const roofMetal3 = new Entity('roofMetal3')
engine.addEntity(roofMetal3)
roofMetal3.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(6, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetal3.addComponentOrReplace(transform33)
roofMetal3.addComponentOrReplace(gltfShape5)

const roofMetalSmall3 = new Entity('roofMetalSmall3')
engine.addEntity(roofMetalSmall3)
roofMetalSmall3.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(4, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalSmall3.addComponentOrReplace(transform34)
roofMetalSmall3.addComponentOrReplace(gltfShape3)

const roofMetalSmall4 = new Entity('roofMetalSmall4')
engine.addEntity(roofMetalSmall4)
roofMetalSmall4.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(6, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalSmall4.addComponentOrReplace(transform35)
roofMetalSmall4.addComponentOrReplace(gltfShape3)

const galleryInfoWhite2 = new Entity('galleryInfoWhite2')
engine.addEntity(galleryInfoWhite2)
galleryInfoWhite2.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(14, 0, 15.5),
  rotation: new Quaternion(-1.4210854715202004e-14, -1.7881393432617188e-7, 2.1264618145218177e-14, 1),
  scale: new Vector3(1.1250005960464478, 1, 1.000000238418579)
})
galleryInfoWhite2.addComponentOrReplace(transform36)

const galleryInfoGlass = new Entity('galleryInfoGlass')
engine.addEntity(galleryInfoGlass)
galleryInfoGlass.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(15, 4, 10),
  rotation: new Quaternion(3.4763199890458724e-15, 0.7071068286895752, -8.429366715745346e-8, -0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
galleryInfoGlass.addComponentOrReplace(transform37)

const galleryInfoGlass2 = new Entity('galleryInfoGlass2')
engine.addEntity(galleryInfoGlass2)
galleryInfoGlass2.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(1, 4, 6),
  rotation: new Quaternion(-3.4708659015468546e-14, 0.7071068286895752, -8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
galleryInfoGlass2.addComponentOrReplace(transform38)

const galleryInfoWhite3 = new Entity('galleryInfoWhite3')
engine.addEntity(galleryInfoWhite3)
galleryInfoWhite3.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(10, 4, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoWhite3.addComponentOrReplace(transform39)

const galleryInfoWhite4 = new Entity('galleryInfoWhite4')
engine.addEntity(galleryInfoWhite4)
galleryInfoWhite4.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(6, 4, 15),
  rotation: new Quaternion(-3.4898384231258142e-15, -1, 1.1920926823449918e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
galleryInfoWhite4.addComponentOrReplace(transform40)

const roofGlassSmall = new Entity('roofGlassSmall')
engine.addEntity(roofGlassSmall)
roofGlassSmall.setParent(_scene)
roofGlassSmall.addComponentOrReplace(gltfShape6)
const transform41 = new Transform({
  position: new Vector3(2, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassSmall.addComponentOrReplace(transform41)

const roofGlassSmall2 = new Entity('roofGlassSmall2')
engine.addEntity(roofGlassSmall2)
roofGlassSmall2.setParent(_scene)
roofGlassSmall2.addComponentOrReplace(gltfShape6)
const transform42 = new Transform({
  position: new Vector3(2, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassSmall2.addComponentOrReplace(transform42)

const nftPictureFrame19 = new Entity('nftPictureFrame19')
engine.addEntity(nftPictureFrame19)
nftPictureFrame19.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(15.5, 6, 11.5),
  rotation: new Quaternion(-1.7424952150261021e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.000009059906006, 2, 1.000004529953003)
})
nftPictureFrame19.addComponentOrReplace(transform43)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(15.5, 6, 13.5),
  rotation: new Quaternion(-1.7424952150261021e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.000009536743164, 2, 1.000004768371582)
})
nftPictureFrame18.addComponentOrReplace(transform44)

const nftPictureFrame26 = new Entity('nftPictureFrame26')
engine.addEntity(nftPictureFrame26)
nftPictureFrame26.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(15.5, 6, 6.5),
  rotation: new Quaternion(-1.7424952150261021e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.0000123977661133, 2, 1.0000061988830566)
})
nftPictureFrame26.addComponentOrReplace(transform45)

const nftPictureFrame20 = new Entity('nftPictureFrame20')
engine.addEntity(nftPictureFrame20)
nftPictureFrame20.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(15.5, 6, 4.5),
  rotation: new Quaternion(-1.7424952150261021e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.0000128746032715, 2, 1.0000064373016357)
})
nftPictureFrame20.addComponentOrReplace(transform46)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(15.5, 6, 2.5),
  rotation: new Quaternion(-1.7424952150261021e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.000014305114746, 2, 1.000007152557373)
})
nftPictureFrame21.addComponentOrReplace(transform47)

const nftPictureFrame23 = new Entity('nftPictureFrame23')
engine.addEntity(nftPictureFrame23)
nftPictureFrame23.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(11, 6, 15.5),
  rotation: new Quaternion(-2.464260247952727e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.000006675720215, 2, 1.0000033378601074)
})
nftPictureFrame23.addComponentOrReplace(transform48)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(9, 6, 15.5),
  rotation: new Quaternion(-2.464260247952727e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.000006675720215, 2, 1.0000033378601074)
})
nftPictureFrame14.addComponentOrReplace(transform49)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(4.5, 6, 15.5),
  rotation: new Quaternion(-2.464260247952727e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.000006675720215, 2, 1.0000033378601074)
})
nftPictureFrame15.addComponentOrReplace(transform50)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(2.5, 6, 15.5),
  rotation: new Quaternion(-2.464260247952727e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.000006675720215, 2, 1.0000033378601074)
})
nftPictureFrame16.addComponentOrReplace(transform51)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(13.5, 6, 0.5),
  rotation: new Quaternion(-8.606459525628031e-15, 1.4901161193847656e-8, -5.329070518200751e-15, -1),
  scale: new Vector3(2.0000128746032715, 2, 1.0000064373016357)
})
nftPictureFrame3.addComponentOrReplace(transform52)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(11.5, 6, 0.5),
  rotation: new Quaternion(-8.606459525628031e-15, 1.4901161193847656e-8, -5.329070518200751e-15, -1),
  scale: new Vector3(2.0000128746032715, 2, 1.0000064373016357)
})
nftPictureFrame4.addComponentOrReplace(transform53)

const nftPictureFrame24 = new Entity('nftPictureFrame24')
engine.addEntity(nftPictureFrame24)
nftPictureFrame24.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(3, 6, 0.5),
  rotation: new Quaternion(-8.606459525628031e-15, 1.4901161193847656e-8, -5.329070518200751e-15, -1),
  scale: new Vector3(2.0000128746032715, 2, 1.0000064373016357)
})
nftPictureFrame24.addComponentOrReplace(transform54)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(0.5, 6, 11.5),
  rotation: new Quaternion(-7.05841957012723e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.000016212463379, 2, 1.0000081062316895)
})
nftPictureFrame6.addComponentOrReplace(transform55)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(0.5, 6, 9.5),
  rotation: new Quaternion(-7.05841957012723e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.000016212463379, 2, 1.0000081062316895)
})
nftPictureFrame7.addComponentOrReplace(transform56)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(0.5, 6, 2.5),
  rotation: new Quaternion(-7.05841957012723e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.0000195503234863, 2, 1.0000097751617432)
})
nftPictureFrame8.addComponentOrReplace(transform57)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(1, 6, 0.5),
  rotation: new Quaternion(-8.606459525628031e-15, 1.4901161193847656e-8, -5.329070518200751e-15, -1),
  scale: new Vector3(2.0000128746032715, 2, 1.0000064373016357)
})
nftPictureFrame5.addComponentOrReplace(transform58)

const nftPictureFrame29 = new Entity('nftPictureFrame29')
engine.addEntity(nftPictureFrame29)
nftPictureFrame29.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(13, 6, 15.5),
  rotation: new Quaternion(-2.464260247952727e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.000006675720215, 2, 1.0000033378601074)
})
nftPictureFrame29.addComponentOrReplace(transform59)

const nftPictureFrame30 = new Entity('nftPictureFrame30')
engine.addEntity(nftPictureFrame30)
nftPictureFrame30.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(15, 6, 15.5),
  rotation: new Quaternion(-2.464260247952727e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.000006675720215, 2, 1.0000033378601074)
})
nftPictureFrame30.addComponentOrReplace(transform60)

const youtubeLink = new Entity('youtubeLink')
engine.addEntity(youtubeLink)
youtubeLink.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(9.5, 0, 11),
  rotation: new Quaternion(-1.1677045438983173e-14, 1, -1.1920927533992653e-7, 2.9802318834981634e-8),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
youtubeLink.addComponentOrReplace(transform61)

const wallPlainWhite4 = new Entity('wallPlainWhite4')
engine.addEntity(wallPlainWhite4)
wallPlainWhite4.setParent(_scene)
const gltfShape7 = new GLTFShape("68a6b9a8a24bec11f6b4ef0d30d243ad6d8cbd4bc40634d2bd1afd58c17738be/PlainWhiteWall.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
wallPlainWhite4.addComponentOrReplace(gltfShape7)
const transform62 = new Transform({
  position: new Vector3(2, 0, 13.5),
  rotation: new Quaternion(3.318528338884237e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainWhite4.addComponentOrReplace(transform62)

const wallPlainWhite5 = new Entity('wallPlainWhite5')
engine.addEntity(wallPlainWhite5)
wallPlainWhite5.setParent(_scene)
wallPlainWhite5.addComponentOrReplace(gltfShape7)
const transform63 = new Transform({
  position: new Vector3(2, 0, 15.5),
  rotation: new Quaternion(3.318528338884237e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
wallPlainWhite5.addComponentOrReplace(transform63)

const wallPlainWhite10 = new Entity('wallPlainWhite10')
engine.addEntity(wallPlainWhite10)
wallPlainWhite10.setParent(_scene)
wallPlainWhite10.addComponentOrReplace(gltfShape7)
const transform64 = new Transform({
  position: new Vector3(14, 0, 3.5),
  rotation: new Quaternion(3.318528338884237e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.0000041723251343, 1, 1.5000064373016357)
})
wallPlainWhite10.addComponentOrReplace(transform64)

const stairsGlassPanel = new Entity('stairsGlassPanel')
engine.addEntity(stairsGlassPanel)
stairsGlassPanel.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(10, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1.5)
})
stairsGlassPanel.addComponentOrReplace(transform65)
const gltfShape8 = new GLTFShape("2eaf9722f9348e29b3f855e63ad1bde33fee844acf103770ff86b214cd592a31/glassPanelStairs.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
stairsGlassPanel.addComponentOrReplace(gltfShape8)

const galleryInfoWhite = new Entity('galleryInfoWhite')
engine.addEntity(galleryInfoWhite)
galleryInfoWhite.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(2, 0, 1.5),
  rotation: new Quaternion(3.894567705982864e-15, 1, -1.1920925402364446e-7, 7.450580596923828e-9),
  scale: new Vector3(1.1250005960464478, 1, 1.000000238418579)
})
galleryInfoWhite.addComponentOrReplace(transform66)

const stairsGlassPanel2 = new Entity('stairsGlassPanel2')
engine.addEntity(stairsGlassPanel2)
stairsGlassPanel2.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(6, 4, 6),
  rotation: new Quaternion(9.322461558139775e-15, 1, -1.1920928244535389e-7, -2.2351741790771484e-8),
  scale: new Vector3(1, 1, 1.25)
})
stairsGlassPanel2.addComponentOrReplace(transform67)
stairsGlassPanel2.addComponentOrReplace(gltfShape8)

const roofMetalSmall14 = new Entity('roofMetalSmall14')
engine.addEntity(roofMetalSmall14)
roofMetalSmall14.setParent(_scene)
roofMetalSmall14.addComponentOrReplace(gltfShape3)
const transform68 = new Transform({
  position: new Vector3(8, 4, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 0.5)
})
roofMetalSmall14.addComponentOrReplace(transform68)

const roofMetalEdgeSmall = new Entity('roofMetalEdgeSmall')
engine.addEntity(roofMetalEdgeSmall)
roofMetalEdgeSmall.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(10, 4, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalEdgeSmall.addComponentOrReplace(transform69)
const gltfShape9 = new GLTFShape("9e751ed08b74eb682ff2c3f2708856a10a2987ff2c0fe8f6c41d7e8a3ecbf337/MetalRoof_1Edge_Small.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
roofMetalEdgeSmall.addComponentOrReplace(gltfShape9)

const roofMetalSmall15 = new Entity('roofMetalSmall15')
engine.addEntity(roofMetalSmall15)
roofMetalSmall15.setParent(_scene)
roofMetalSmall15.addComponentOrReplace(gltfShape3)
const transform70 = new Transform({
  position: new Vector3(10, 4, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 0.5)
})
roofMetalSmall15.addComponentOrReplace(transform70)

const roofMetalEdgeSmall2 = new Entity('roofMetalEdgeSmall2')
engine.addEntity(roofMetalEdgeSmall2)
roofMetalEdgeSmall2.setParent(_scene)
roofMetalEdgeSmall2.addComponentOrReplace(gltfShape9)
const transform71 = new Transform({
  position: new Vector3(12, 4, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalEdgeSmall2.addComponentOrReplace(transform71)

const roofMetalEdgeSmall3 = new Entity('roofMetalEdgeSmall3')
engine.addEntity(roofMetalEdgeSmall3)
roofMetalEdgeSmall3.setParent(_scene)
roofMetalEdgeSmall3.addComponentOrReplace(gltfShape9)
const transform72 = new Transform({
  position: new Vector3(14, 4, 10),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
roofMetalEdgeSmall3.addComponentOrReplace(transform72)

const roofMetalSmall16 = new Entity('roofMetalSmall16')
engine.addEntity(roofMetalSmall16)
roofMetalSmall16.setParent(_scene)
roofMetalSmall16.addComponentOrReplace(gltfShape3)
const transform73 = new Transform({
  position: new Vector3(12, 4, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 0.5)
})
roofMetalSmall16.addComponentOrReplace(transform73)

const roofMetalCornerSmall3 = new Entity('roofMetalCornerSmall3')
engine.addEntity(roofMetalCornerSmall3)
roofMetalCornerSmall3.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(14, 4, 12),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
roofMetalCornerSmall3.addComponentOrReplace(transform74)
roofMetalCornerSmall3.addComponentOrReplace(gltfShape2)

const roofMetalSmall17 = new Entity('roofMetalSmall17')
engine.addEntity(roofMetalSmall17)
roofMetalSmall17.setParent(_scene)
roofMetalSmall17.addComponentOrReplace(gltfShape3)
const transform75 = new Transform({
  position: new Vector3(12, 4, 10),
  rotation: new Quaternion(1.1038385137852273e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.5, 1, 0.5)
})
roofMetalSmall17.addComponentOrReplace(transform75)

const roofGlassCornerSmall3 = new Entity('roofGlassCornerSmall3')
engine.addEntity(roofGlassCornerSmall3)
roofGlassCornerSmall3.setParent(_scene)
roofGlassCornerSmall3.addComponentOrReplace(gltfShape)
const transform76 = new Transform({
  position: new Vector3(4, 4, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassCornerSmall3.addComponentOrReplace(transform76)

const roofGlassSmall4 = new Entity('roofGlassSmall4')
engine.addEntity(roofGlassSmall4)
roofGlassSmall4.setParent(_scene)
roofGlassSmall4.addComponentOrReplace(gltfShape6)
const transform77 = new Transform({
  position: new Vector3(6, 4, 11),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 1, 0.5000007152557373)
})
roofGlassSmall4.addComponentOrReplace(transform77)

const roofGlassEdgeSmall = new Entity('roofGlassEdgeSmall')
engine.addEntity(roofGlassEdgeSmall)
roofGlassEdgeSmall.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(6, 4, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlassEdgeSmall.addComponentOrReplace(transform78)
const gltfShape10 = new GLTFShape("c03aad59a4dce6e55d856757d5df3917e65ec5582538b7fd665118170a19533e/GlassRoof_1Edge_small.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
roofGlassEdgeSmall.addComponentOrReplace(gltfShape10)

const roofGlassEdgeSmall2 = new Entity('roofGlassEdgeSmall2')
engine.addEntity(roofGlassEdgeSmall2)
roofGlassEdgeSmall2.setParent(_scene)
roofGlassEdgeSmall2.addComponentOrReplace(gltfShape10)
const transform79 = new Transform({
  position: new Vector3(2, 4, 12),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
roofGlassEdgeSmall2.addComponentOrReplace(transform79)

const roofGlassEdgeSmall3 = new Entity('roofGlassEdgeSmall3')
engine.addEntity(roofGlassEdgeSmall3)
roofGlassEdgeSmall3.setParent(_scene)
roofGlassEdgeSmall3.addComponentOrReplace(gltfShape10)
const transform80 = new Transform({
  position: new Vector3(2, 4, 10),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
roofGlassEdgeSmall3.addComponentOrReplace(transform80)

const roofGlassEdgeSmall4 = new Entity('roofGlassEdgeSmall4')
engine.addEntity(roofGlassEdgeSmall4)
roofGlassEdgeSmall4.setParent(_scene)
roofGlassEdgeSmall4.addComponentOrReplace(gltfShape10)
const transform81 = new Transform({
  position: new Vector3(2, 4, 8),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
roofGlassEdgeSmall4.addComponentOrReplace(transform81)

const roofGlassEdgeSmall5 = new Entity('roofGlassEdgeSmall5')
engine.addEntity(roofGlassEdgeSmall5)
roofGlassEdgeSmall5.setParent(_scene)
roofGlassEdgeSmall5.addComponentOrReplace(gltfShape10)
const transform82 = new Transform({
  position: new Vector3(14, 4, 8),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
roofGlassEdgeSmall5.addComponentOrReplace(transform82)

const roofGlassSmall5 = new Entity('roofGlassSmall5')
engine.addEntity(roofGlassSmall5)
roofGlassSmall5.setParent(_scene)
roofGlassSmall5.addComponentOrReplace(gltfShape6)
const transform83 = new Transform({
  position: new Vector3(4, 4, 10),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 0.5000004768371582)
})
roofGlassSmall5.addComponentOrReplace(transform83)

const roofGlassSmall16 = new Entity('roofGlassSmall16')
engine.addEntity(roofGlassSmall16)
roofGlassSmall16.setParent(_scene)
roofGlassSmall16.addComponentOrReplace(gltfShape6)
const transform84 = new Transform({
  position: new Vector3(4, 4, 8),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 0.5000005960464478)
})
roofGlassSmall16.addComponentOrReplace(transform84)

const roofGlassSmall17 = new Entity('roofGlassSmall17')
engine.addEntity(roofGlassSmall17)
roofGlassSmall17.setParent(_scene)
roofGlassSmall17.addComponentOrReplace(gltfShape6)
const transform85 = new Transform({
  position: new Vector3(11, 4, 10),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 0.5000008344650269)
})
roofGlassSmall17.addComponentOrReplace(transform85)

const roofGlassSmall18 = new Entity('roofGlassSmall18')
engine.addEntity(roofGlassSmall18)
roofGlassSmall18.setParent(_scene)
roofGlassSmall18.addComponentOrReplace(gltfShape6)
const transform86 = new Transform({
  position: new Vector3(11, 4, 8),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 0.5000007152557373)
})
roofGlassSmall18.addComponentOrReplace(transform86)

const roofGlassEdgeSmall6 = new Entity('roofGlassEdgeSmall6')
engine.addEntity(roofGlassEdgeSmall6)
roofGlassEdgeSmall6.setParent(_scene)
roofGlassEdgeSmall6.addComponentOrReplace(gltfShape10)
const transform87 = new Transform({
  position: new Vector3(14, 4, 6),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
roofGlassEdgeSmall6.addComponentOrReplace(transform87)

const roofGlassEdgeSmall7 = new Entity('roofGlassEdgeSmall7')
engine.addEntity(roofGlassEdgeSmall7)
roofGlassEdgeSmall7.setParent(_scene)
roofGlassEdgeSmall7.addComponentOrReplace(gltfShape10)
const transform88 = new Transform({
  position: new Vector3(14, 4, 4),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
roofGlassEdgeSmall7.addComponentOrReplace(transform88)

const roofGlassEdgeSmall8 = new Entity('roofGlassEdgeSmall8')
engine.addEntity(roofGlassEdgeSmall8)
roofGlassEdgeSmall8.setParent(_scene)
roofGlassEdgeSmall8.addComponentOrReplace(gltfShape10)
const transform89 = new Transform({
  position: new Vector3(10, 4, 2),
  rotation: new Quaternion(2.9111781243301455e-15, -1, 1.1920928955078125e-7, 3.725290298461914e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.0000027418136597)
})
roofGlassEdgeSmall8.addComponentOrReplace(transform89)

const roofMetalEdgeSmall4 = new Entity('roofMetalEdgeSmall4')
engine.addEntity(roofMetalEdgeSmall4)
roofMetalEdgeSmall4.setParent(_scene)
roofMetalEdgeSmall4.addComponentOrReplace(gltfShape9)
const transform90 = new Transform({
  position: new Vector3(8, 4, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofMetalEdgeSmall4.addComponentOrReplace(transform90)

const roofGlassCornerSmall4 = new Entity('roofGlassCornerSmall4')
engine.addEntity(roofGlassCornerSmall4)
roofGlassCornerSmall4.setParent(_scene)
roofGlassCornerSmall4.addComponentOrReplace(gltfShape)
const transform91 = new Transform({
  position: new Vector3(12, 4, 2),
  rotation: new Quaternion(3.2051593316413532e-15, 1, -1.1920926112907182e-7, 0),
  scale: new Vector3(1, 1, 1)
})
roofGlassCornerSmall4.addComponentOrReplace(transform91)

const roofGlassSmall19 = new Entity('roofGlassSmall19')
engine.addEntity(roofGlassSmall19)
roofGlassSmall19.setParent(_scene)
roofGlassSmall19.addComponentOrReplace(gltfShape6)
const transform92 = new Transform({
  position: new Vector3(11, 4, 6),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 0.5000008344650269)
})
roofGlassSmall19.addComponentOrReplace(transform92)

const roofGlassSmall3 = new Entity('roofGlassSmall3')
engine.addEntity(roofGlassSmall3)
roofGlassSmall3.setParent(_scene)
roofGlassSmall3.addComponentOrReplace(gltfShape6)
const transform93 = new Transform({
  position: new Vector3(4, 4, 12),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 0.5000005960464478)
})
roofGlassSmall3.addComponentOrReplace(transform93)

const roofGlassSmall20 = new Entity('roofGlassSmall20')
engine.addEntity(roofGlassSmall20)
roofGlassSmall20.setParent(_scene)
roofGlassSmall20.addComponentOrReplace(gltfShape6)
const transform94 = new Transform({
  position: new Vector3(11, 4, 4),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 1, 0.5000005960464478)
})
roofGlassSmall20.addComponentOrReplace(transform94)

const roofMetalEdgeSmall5 = new Entity('roofMetalEdgeSmall5')
engine.addEntity(roofMetalEdgeSmall5)
roofMetalEdgeSmall5.setParent(_scene)
roofMetalEdgeSmall5.addComponentOrReplace(gltfShape9)
const transform95 = new Transform({
  position: new Vector3(8, 4, 2),
  rotation: new Quaternion(-2.7916168827263593e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
roofMetalEdgeSmall5.addComponentOrReplace(transform95)

const roofMetalEdgeSmall6 = new Entity('roofMetalEdgeSmall6')
engine.addEntity(roofMetalEdgeSmall6)
roofMetalEdgeSmall6.setParent(_scene)
roofMetalEdgeSmall6.addComponentOrReplace(gltfShape9)
const transform96 = new Transform({
  position: new Vector3(6, 4, 2),
  rotation: new Quaternion(-2.7916168827263593e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
roofMetalEdgeSmall6.addComponentOrReplace(transform96)

const roofMetalEdgeSmall7 = new Entity('roofMetalEdgeSmall7')
engine.addEntity(roofMetalEdgeSmall7)
roofMetalEdgeSmall7.setParent(_scene)
roofMetalEdgeSmall7.addComponentOrReplace(gltfShape9)
const transform97 = new Transform({
  position: new Vector3(4, 4, 2),
  rotation: new Quaternion(-2.7916168827263593e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
roofMetalEdgeSmall7.addComponentOrReplace(transform97)

const roofMetalEdgeSmall8 = new Entity('roofMetalEdgeSmall8')
engine.addEntity(roofMetalEdgeSmall8)
roofMetalEdgeSmall8.setParent(_scene)
roofMetalEdgeSmall8.addComponentOrReplace(gltfShape9)
const transform98 = new Transform({
  position: new Vector3(2, 4, 6),
  rotation: new Quaternion(-1.9739713200605732e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
roofMetalEdgeSmall8.addComponentOrReplace(transform98)

const roofMetalSmall13 = new Entity('roofMetalSmall13')
engine.addEntity(roofMetalSmall13)
roofMetalSmall13.setParent(_scene)
roofMetalSmall13.addComponentOrReplace(gltfShape3)
const transform99 = new Transform({
  position: new Vector3(10, 4, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 0.5)
})
roofMetalSmall13.addComponentOrReplace(transform99)

const roofMetalSmall18 = new Entity('roofMetalSmall18')
engine.addEntity(roofMetalSmall18)
roofMetalSmall18.setParent(_scene)
roofMetalSmall18.addComponentOrReplace(gltfShape3)
const transform100 = new Transform({
  position: new Vector3(8, 4, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 0.5)
})
roofMetalSmall18.addComponentOrReplace(transform100)

const roofMetalSmall19 = new Entity('roofMetalSmall19')
engine.addEntity(roofMetalSmall19)
roofMetalSmall19.setParent(_scene)
roofMetalSmall19.addComponentOrReplace(gltfShape3)
const transform101 = new Transform({
  position: new Vector3(6, 4, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 0.5)
})
roofMetalSmall19.addComponentOrReplace(transform101)

const roofMetalSmall20 = new Entity('roofMetalSmall20')
engine.addEntity(roofMetalSmall20)
roofMetalSmall20.setParent(_scene)
roofMetalSmall20.addComponentOrReplace(gltfShape3)
const transform102 = new Transform({
  position: new Vector3(5, 4, 5),
  rotation: new Quaternion(1.1038385137852273e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.5, 1, 0.5)
})
roofMetalSmall20.addComponentOrReplace(transform102)

const roofMetalCornerSmall4 = new Entity('roofMetalCornerSmall4')
engine.addEntity(roofMetalCornerSmall4)
roofMetalCornerSmall4.setParent(_scene)
roofMetalCornerSmall4.addComponentOrReplace(gltfShape2)
const transform103 = new Transform({
  position: new Vector3(2, 4, 4),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
roofMetalCornerSmall4.addComponentOrReplace(transform103)

const roofGlassSmall21 = new Entity('roofGlassSmall21')
engine.addEntity(roofGlassSmall21)
roofGlassSmall21.setParent(_scene)
roofGlassSmall21.addComponentOrReplace(gltfShape6)
const transform104 = new Transform({
  position: new Vector3(5, 4, 10),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 0.5000009536743164)
})
roofGlassSmall21.addComponentOrReplace(transform104)

const wallPlainWhite = new Entity('wallPlainWhite')
engine.addEntity(wallPlainWhite)
wallPlainWhite.setParent(_scene)
wallPlainWhite.addComponentOrReplace(gltfShape7)
const transform105 = new Transform({
  position: new Vector3(2, 0, 3.5),
  rotation: new Quaternion(3.318528338884237e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
wallPlainWhite.addComponentOrReplace(transform105)

const wallPlainWhite2 = new Entity('wallPlainWhite2')
engine.addEntity(wallPlainWhite2)
wallPlainWhite2.setParent(_scene)
wallPlainWhite2.addComponentOrReplace(gltfShape7)
const transform106 = new Transform({
  position: new Vector3(2, 0, 5.5),
  rotation: new Quaternion(3.318528338884237e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
wallPlainWhite2.addComponentOrReplace(transform106)

const teleport = new Entity('teleport')
engine.addEntity(teleport)
teleport.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(4, 8, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
teleport.addComponentOrReplace(transform107)

const stairsGlassPanel3 = new Entity('stairsGlassPanel3')
engine.addEntity(stairsGlassPanel3)
stairsGlassPanel3.setParent(_scene)
stairsGlassPanel3.addComponentOrReplace(gltfShape8)
const transform108 = new Transform({
  position: new Vector3(10, 8, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1.5)
})
stairsGlassPanel3.addComponentOrReplace(transform108)

const roofMetalEdgeSmall9 = new Entity('roofMetalEdgeSmall9')
engine.addEntity(roofMetalEdgeSmall9)
roofMetalEdgeSmall9.setParent(_scene)
roofMetalEdgeSmall9.addComponentOrReplace(gltfShape9)
const transform109 = new Transform({
  position: new Vector3(8, 8, 3),
  rotation: new Quaternion(-2.7916168827263593e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000014305114746, 1, 1.0085464715957642)
})
roofMetalEdgeSmall9.addComponentOrReplace(transform109)

const roofGlassCornerSmall5 = new Entity('roofGlassCornerSmall5')
engine.addEntity(roofGlassCornerSmall5)
roofGlassCornerSmall5.setParent(_scene)
roofGlassCornerSmall5.addComponentOrReplace(gltfShape)
const transform110 = new Transform({
  position: new Vector3(10, 8, 3),
  rotation: new Quaternion(3.2051593316413532e-15, 1, -1.1920926112907182e-7, 0),
  scale: new Vector3(1.2499995231628418, 1, 0.9999998211860657)
})
roofGlassCornerSmall5.addComponentOrReplace(transform110)

const roofGlassEdgeSmall9 = new Entity('roofGlassEdgeSmall9')
engine.addEntity(roofGlassEdgeSmall9)
roofGlassEdgeSmall9.setParent(_scene)
roofGlassEdgeSmall9.addComponentOrReplace(gltfShape10)
const transform111 = new Transform({
  position: new Vector3(12.5, 8, 5),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.0000053644180298, 1, 1.2187576293945312)
})
roofGlassEdgeSmall9.addComponentOrReplace(transform111)

const roofGlassEdgeSmall10 = new Entity('roofGlassEdgeSmall10')
engine.addEntity(roofGlassEdgeSmall10)
roofGlassEdgeSmall10.setParent(_scene)
roofGlassEdgeSmall10.addComponentOrReplace(gltfShape10)
const transform112 = new Transform({
  position: new Vector3(12.5, 8, 7),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.000005841255188, 1, 1.2187581062316895)
})
roofGlassEdgeSmall10.addComponentOrReplace(transform112)

const roofGlassEdgeSmall11 = new Entity('roofGlassEdgeSmall11')
engine.addEntity(roofGlassEdgeSmall11)
roofGlassEdgeSmall11.setParent(_scene)
roofGlassEdgeSmall11.addComponentOrReplace(gltfShape10)
const transform113 = new Transform({
  position: new Vector3(12.5, 8, 9),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(0.5000030398368835, 1, 1.2187583446502686)
})
roofGlassEdgeSmall11.addComponentOrReplace(transform113)

const roofGlassCornerSmall6 = new Entity('roofGlassCornerSmall6')
engine.addEntity(roofGlassCornerSmall6)
roofGlassCornerSmall6.setParent(_scene)
roofGlassCornerSmall6.addComponentOrReplace(gltfShape)
const transform114 = new Transform({
  position: new Vector3(6.5, 8, 12),
  rotation: new Quaternion(-1.4210854715202004e-14, -7.450580596923828e-8, 1.877861202041059e-14, 1),
  scale: new Vector3(1.2499995231628418, 1, 0.9999998211860657)
})
roofGlassCornerSmall6.addComponentOrReplace(transform114)

const roofGlassEdgeSmall12 = new Entity('roofGlassEdgeSmall12')
engine.addEntity(roofGlassEdgeSmall12)
roofGlassEdgeSmall12.setParent(_scene)
roofGlassEdgeSmall12.addComponentOrReplace(gltfShape10)
const transform115 = new Transform({
  position: new Vector3(4, 8, 6),
  rotation: new Quaternion(-1.152790157169653e-14, 0.7071068286895752, -8.42937097900176e-8, -0.7071068286895752),
  scale: new Vector3(0.5000033974647522, 1, 1.2187590599060059)
})
roofGlassEdgeSmall12.addComponentOrReplace(transform115)

const roofGlassEdgeSmall13 = new Entity('roofGlassEdgeSmall13')
engine.addEntity(roofGlassEdgeSmall13)
roofGlassEdgeSmall13.setParent(_scene)
roofGlassEdgeSmall13.addComponentOrReplace(gltfShape10)
const transform116 = new Transform({
  position: new Vector3(4, 8, 8),
  rotation: new Quaternion(-1.3697403671367181e-14, 0.7071068286895752, -8.42937097900176e-8, -0.7071068286895752),
  scale: new Vector3(1.000006079673767, 1, 1.2187583446502686)
})
roofGlassEdgeSmall13.addComponentOrReplace(transform116)

const roofGlassEdgeSmall14 = new Entity('roofGlassEdgeSmall14')
engine.addEntity(roofGlassEdgeSmall14)
roofGlassEdgeSmall14.setParent(_scene)
roofGlassEdgeSmall14.addComponentOrReplace(gltfShape10)
const transform117 = new Transform({
  position: new Vector3(4, 8, 10),
  rotation: new Quaternion(-1.3697403671367181e-14, 0.7071068286895752, -8.42937097900176e-8, -0.7071068286895752),
  scale: new Vector3(1.0000065565109253, 1, 1.2187588214874268)
})
roofGlassEdgeSmall14.addComponentOrReplace(transform117)

const roofMetalEdgeSmall10 = new Entity('roofMetalEdgeSmall10')
engine.addEntity(roofMetalEdgeSmall10)
roofMetalEdgeSmall10.setParent(_scene)
roofMetalEdgeSmall10.addComponentOrReplace(gltfShape9)
const transform118 = new Transform({
  position: new Vector3(6, 8, 3),
  rotation: new Quaternion(-2.7916168827263593e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000014305114746, 1, 1.0075615644454956)
})
roofMetalEdgeSmall10.addComponentOrReplace(transform118)

const roofMetalEdgeSmall11 = new Entity('roofMetalEdgeSmall11')
engine.addEntity(roofMetalEdgeSmall11)
roofMetalEdgeSmall11.setParent(_scene)
roofMetalEdgeSmall11.addComponentOrReplace(gltfShape9)
const transform119 = new Transform({
  position: new Vector3(8, 8, 3),
  rotation: new Quaternion(-2.7916168827263593e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000014305114746, 1, 1.0085464715957642)
})
roofMetalEdgeSmall11.addComponentOrReplace(transform119)

const roofMetalCornerSmall5 = new Entity('roofMetalCornerSmall5')
engine.addEntity(roofMetalCornerSmall5)
roofMetalCornerSmall5.setParent(_scene)
roofMetalCornerSmall5.addComponentOrReplace(gltfShape2)
const transform120 = new Transform({
  position: new Vector3(4, 8, 5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
roofMetalCornerSmall5.addComponentOrReplace(transform120)

const roofMetalEdgeSmall12 = new Entity('roofMetalEdgeSmall12')
engine.addEntity(roofMetalEdgeSmall12)
roofMetalEdgeSmall12.setParent(_scene)
roofMetalEdgeSmall12.addComponentOrReplace(gltfShape9)
const transform121 = new Transform({
  position: new Vector3(8.5, 8, 12),
  rotation: new Quaternion(3.552713678800501e-15, -1.046722344280914e-21, -8.780545125079524e-15, 1),
  scale: new Vector3(1.0000014305114746, 1, 1.0085464715957642)
})
roofMetalEdgeSmall12.addComponentOrReplace(transform121)

const roofMetalEdgeSmall13 = new Entity('roofMetalEdgeSmall13')
engine.addEntity(roofMetalEdgeSmall13)
roofMetalEdgeSmall13.setParent(_scene)
roofMetalEdgeSmall13.addComponentOrReplace(gltfShape9)
const transform122 = new Transform({
  position: new Vector3(10.5, 8, 12),
  rotation: new Quaternion(3.552713678800501e-15, -1.046722344280914e-21, -8.780545125079524e-15, 1),
  scale: new Vector3(1.0000014305114746, 1, 1.0085464715957642)
})
roofMetalEdgeSmall13.addComponentOrReplace(transform122)

const roofMetalCornerSmall6 = new Entity('roofMetalCornerSmall6')
engine.addEntity(roofMetalCornerSmall6)
roofMetalCornerSmall6.setParent(_scene)
roofMetalCornerSmall6.addComponentOrReplace(gltfShape2)
const transform123 = new Transform({
  position: new Vector3(12.5, 8, 10),
  rotation: new Quaternion(-1.1731807601330821e-15, 0.70710688829422, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
roofMetalCornerSmall6.addComponentOrReplace(transform123)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(5, 6, 0.5),
  rotation: new Quaternion(-8.606459525628031e-15, 1.4901161193847656e-8, -5.329070518200751e-15, -1),
  scale: new Vector3(2.0000128746032715, 2, 1.0000064373016357)
})
nftPictureFrame.addComponentOrReplace(transform124)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform125 = new Transform({
  position: new Vector3(7, 6, 0.5),
  rotation: new Quaternion(-8.606459525628031e-15, 1.4901161193847656e-8, -5.329070518200751e-15, -1),
  scale: new Vector3(2.0000128746032715, 2, 1.0000064373016357)
})
nftPictureFrame10.addComponentOrReplace(transform125)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform126 = new Transform({
  position: new Vector3(0.5, 6, 13.5),
  rotation: new Quaternion(-7.05841957012723e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.0000171661376953, 2, 1.0000085830688477)
})
nftPictureFrame11.addComponentOrReplace(transform126)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform127 = new Transform({
  position: new Vector3(0.5, 6, 4.5),
  rotation: new Quaternion(-7.05841957012723e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.0000205039978027, 2, 1.0000102519989014)
})
nftPictureFrame12.addComponentOrReplace(transform127)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform128 = new Transform({
  position: new Vector3(2, 1, 3.5),
  rotation: new Quaternion(8.199084111843759e-16, 0.7071067690849304, -8.429369557916289e-8, -0.70710688829422),
  scale: new Vector3(4.000031471252441, 4, 1.0000078678131104)
})
nftPictureFrame13.addComponentOrReplace(transform128)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform129 = new Transform({
  position: new Vector3(2, 1, 13.5),
  rotation: new Quaternion(8.199084111843759e-16, 0.7071067690849304, -8.429369557916289e-8, -0.70710688829422),
  scale: new Vector3(4.000033378601074, 4, 1.0000083446502686)
})
nftPictureFrame9.addComponentOrReplace(transform129)

const wallPlainWhite7 = new Entity('wallPlainWhite7')
engine.addEntity(wallPlainWhite7)
wallPlainWhite7.setParent(_scene)
wallPlainWhite7.addComponentOrReplace(gltfShape7)
const transform130 = new Transform({
  position: new Vector3(14, 0, 5.5),
  rotation: new Quaternion(3.318528338884237e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.0000044107437134, 1, 1.500006914138794)
})
wallPlainWhite7.addComponentOrReplace(transform130)

const wallPlainWhite8 = new Entity('wallPlainWhite8')
engine.addEntity(wallPlainWhite8)
wallPlainWhite8.setParent(_scene)
wallPlainWhite8.addComponentOrReplace(gltfShape7)
const transform131 = new Transform({
  position: new Vector3(14, 0, 13.5),
  rotation: new Quaternion(3.318528338884237e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.0000046491622925, 1, 1.5000077486038208)
})
wallPlainWhite8.addComponentOrReplace(transform131)

const wallPlainWhite3 = new Entity('wallPlainWhite3')
engine.addEntity(wallPlainWhite3)
wallPlainWhite3.setParent(_scene)
wallPlainWhite3.addComponentOrReplace(gltfShape7)
const transform132 = new Transform({
  position: new Vector3(14, 0, 15.5),
  rotation: new Quaternion(3.318528338884237e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.0000048875808716, 1, 1.500008225440979)
})
wallPlainWhite3.addComponentOrReplace(transform132)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(14.5, 1, 13.5),
  rotation: new Quaternion(-8.815800330410142e-15, -0.70710688829422, 8.429369557916289e-8, -0.7071067690849304),
  scale: new Vector3(4.00003719329834, 4, 1.000009298324585)
})
nftPictureFrame17.addComponentOrReplace(transform133)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform134 = new Transform({
  position: new Vector3(14.5, 1, 3.5),
  rotation: new Quaternion(-8.815800330410142e-15, -0.70710688829422, 8.429369557916289e-8, -0.7071067690849304),
  scale: new Vector3(4.000038146972656, 4, 1.000009536743164)
})
nftPictureFrame22.addComponentOrReplace(transform134)

const roofGlass2 = new Entity('roofGlass2')
engine.addEntity(roofGlass2)
roofGlass2.setParent(_scene)
const transform135 = new Transform({
  position: new Vector3(10, 12.5, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofGlass2.addComponentOrReplace(transform135)
roofGlass2.addComponentOrReplace(gltfShape4)

const nftPictureFrame25 = new Entity('nftPictureFrame25')
engine.addEntity(nftPictureFrame25)
nftPictureFrame25.setParent(_scene)
const transform136 = new Transform({
  position: new Vector3(6, 18, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 2.25, 0.9999999403953552)
})
nftPictureFrame25.addComponentOrReplace(transform136)

const nftPictureFrame27 = new Entity('nftPictureFrame27')
engine.addEntity(nftPictureFrame27)
nftPictureFrame27.setParent(_scene)
const transform137 = new Transform({
  position: new Vector3(8, 18, 10.5),
  rotation: new Quaternion(-5.838333937023467e-16, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.0000085830688477, 2.25, 1.0000041723251343)
})
nftPictureFrame27.addComponentOrReplace(transform137)

const nftPictureFrame28 = new Entity('nftPictureFrame28')
engine.addEntity(nftPictureFrame28)
nftPictureFrame28.setParent(_scene)
const transform138 = new Transform({
  position: new Vector3(10, 18, 10.5),
  rotation: new Quaternion(-5.9889282423531646e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(2, 2.25, 0.9999999403953552)
})
nftPictureFrame28.addComponentOrReplace(transform138)

const nftPictureFrame31 = new Entity('nftPictureFrame31')
engine.addEntity(nftPictureFrame31)
nftPictureFrame31.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(11, 18, 9.5),
  rotation: new Quaternion(-4.084899820879168e-15, 0.7071068286895752, -8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(2.0000057220458984, 2.25, 1.0000027418136597)
})
nftPictureFrame31.addComponentOrReplace(transform139)

const armchairWhiteModern = new Entity('armchairWhiteModern')
engine.addEntity(armchairWhiteModern)
armchairWhiteModern.setParent(_scene)
const transform140 = new Transform({
  position: new Vector3(6.5, 16.5, 8.5),
  rotation: new Quaternion(-4.113248319557875e-15, 0.9238796234130859, -1.1013501932666259e-7, 0.38268348574638367),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
armchairWhiteModern.addComponentOrReplace(transform140)
const gltfShape11 = new GLTFShape("7c1914173bb5e8f6559b772b723527f239db60f0cd49284005a4431f8ddead5c/WhiteModernArmchair.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
armchairWhiteModern.addComponentOrReplace(gltfShape11)

const stoolModernLow = new Entity('stoolModernLow')
engine.addEntity(stoolModernLow)
stoolModernLow.setParent(_scene)
const transform141 = new Transform({
  position: new Vector3(9.5, 16.5, 6),
  rotation: new Quaternion(-3.916681936290661e-16, -0.3826833963394165, 4.561942290592924e-8, 0.9238796234130859),
  scale: new Vector3(1.0000004768371582, 1.5, 1.0000004768371582)
})
stoolModernLow.addComponentOrReplace(transform141)
const gltfShape12 = new GLTFShape("ce0f93b41ceb7124a6cdcce7393e879645a4becb18fa608a251e9cd802c8ef30/ModernStoolLow.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
stoolModernLow.addComponentOrReplace(gltfShape12)

const nftPictureFrame32 = new Entity('nftPictureFrame32')
engine.addEntity(nftPictureFrame32)
nftPictureFrame32.setParent(_scene)
const transform142 = new Transform({
  position: new Vector3(7.5, 18, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 2.25, 0.9999999403953552)
})
nftPictureFrame32.addComponentOrReplace(transform142)

const nftPictureFrame34 = new Entity('nftPictureFrame34')
engine.addEntity(nftPictureFrame34)
nftPictureFrame34.setParent(_scene)
const transform143 = new Transform({
  position: new Vector3(14, 1, 3.5),
  rotation: new Quaternion(8.199084111843759e-16, 0.7071067690849304, -8.429369557916289e-8, -0.70710688829422),
  scale: new Vector3(4.000033378601074, 4, 1.0000083446502686)
})
nftPictureFrame34.addComponentOrReplace(transform143)

const nftPictureFrame35 = new Entity('nftPictureFrame35')
engine.addEntity(nftPictureFrame35)
nftPictureFrame35.setParent(_scene)
const transform144 = new Transform({
  position: new Vector3(14, 1, 13),
  rotation: new Quaternion(8.199084111843759e-16, 0.7071067690849304, -8.429369557916289e-8, -0.70710688829422),
  scale: new Vector3(4.000035285949707, 4, 1.0000088214874268)
})
nftPictureFrame35.addComponentOrReplace(transform144)

const nftPictureFrame36 = new Entity('nftPictureFrame36')
engine.addEntity(nftPictureFrame36)
nftPictureFrame36.setParent(_scene)
const transform145 = new Transform({
  position: new Vector3(2.5, 1, 13.5),
  rotation: new Quaternion(-8.815800330410142e-15, -0.70710688829422, 8.429369557916289e-8, -0.7071067690849304),
  scale: new Vector3(4.0000410079956055, 4, 1.0000102519989014)
})
nftPictureFrame36.addComponentOrReplace(transform145)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform146 = new Transform({
  position: new Vector3(10.5, 18.5, 5),
  rotation: new Quaternion(-9.408183833500752e-15, -0.9238795042037964, 1.1013501222123523e-7, -0.3826834559440613),
  scale: new Vector3(2.5000038146972656, 2.5, 1.0000059604644775)
})
nft.addComponentOrReplace(transform146)
const nftShape = new NFTShape("ethereum://0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/115792089237316195423570985008687907831491913182700502377801609132279964106876")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const discordLink2 = new Entity('discordLink2')
engine.addEntity(discordLink2)
discordLink2.setParent(_scene)
const transform147 = new Transform({
  position: new Vector3(8.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
discordLink2.addComponentOrReplace(transform147)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform148 = new Transform({
  position: new Vector3(9, 18, 10.5),
  rotation: new Quaternion(-5.9889282423531646e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(2, 2.25, 0.9999999403953552)
})
nftPictureFrame2.addComponentOrReplace(transform148)

const nftPictureFrame37 = new Entity('nftPictureFrame37')
engine.addEntity(nftPictureFrame37)
nftPictureFrame37.setParent(_scene)
const transform149 = new Transform({
  position: new Vector3(11, 18, 8),
  rotation: new Quaternion(-4.084899820879168e-15, 0.7071068286895752, -8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(2.000007152557373, 2.25, 1.000003457069397)
})
nftPictureFrame37.addComponentOrReplace(transform149)

const nftPictureFrame38 = new Entity('nftPictureFrame38')
engine.addEntity(nftPictureFrame38)
nftPictureFrame38.setParent(_scene)
const transform150 = new Transform({
  position: new Vector3(11, 18, 6.5),
  rotation: new Quaternion(-4.084899820879168e-15, 0.7071068286895752, -8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(2.0000076293945312, 2.25, 1.000003695487976)
})
nftPictureFrame38.addComponentOrReplace(transform150)

const nftPictureFrame39 = new Entity('nftPictureFrame39')
engine.addEntity(nftPictureFrame39)
nftPictureFrame39.setParent(_scene)
const transform151 = new Transform({
  position: new Vector3(5, 17.5, 6),
  rotation: new Quaternion(7.137503013005865e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.375027656555176, 3.375, 1.0000067949295044)
})
nftPictureFrame39.addComponentOrReplace(transform151)

const nftPictureFrame40 = new Entity('nftPictureFrame40')
engine.addEntity(nftPictureFrame40)
nftPictureFrame40.setParent(_scene)
const transform152 = new Transform({
  position: new Vector3(9, 18, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 2.25, 0.9999999403953552)
})
nftPictureFrame40.addComponentOrReplace(transform152)

const stairsFloatingUShape = new Entity('stairsFloatingUShape')
engine.addEntity(stairsFloatingUShape)
stairsFloatingUShape.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(6, 16.5, 9.5),
  rotation: new Quaternion(1.1920927533992653e-7, 1, -1.600116705768298e-16, 0),
  scale: new Vector3(1.0000030994415283, -1.068609356880188, 1.4648483991622925)
})
stairsFloatingUShape.addComponentOrReplace(transform153)
const gltfShape13 = new GLTFShape("a4061e95eae45bba095ec4caad3d6b443fc76bc483d5fa35946db85988335e8a/floatingUShapeStairs.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
stairsFloatingUShape.addComponentOrReplace(gltfShape13)

const nftPictureFrame41 = new Entity('nftPictureFrame41')
engine.addEntity(nftPictureFrame41)
nftPictureFrame41.setParent(_scene)
const transform154 = new Transform({
  position: new Vector3(5, 18, 7.5),
  rotation: new Quaternion(7.137503013005865e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.37501859664917, 3.375, 1.0000051259994507)
})
nftPictureFrame41.addComponentOrReplace(transform154)

const nftPictureFrame43 = new Entity('nftPictureFrame43')
engine.addEntity(nftPictureFrame43)
nftPictureFrame43.setParent(_scene)
const transform155 = new Transform({
  position: new Vector3(5, 17.5, 9),
  rotation: new Quaternion(7.137503013005865e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.531270980834961, 2.53125, 1.0000075101852417)
})
nftPictureFrame43.addComponentOrReplace(transform155)

const nftPictureFrame42 = new Entity('nftPictureFrame42')
engine.addEntity(nftPictureFrame42)
nftPictureFrame42.setParent(_scene)
const transform156 = new Transform({
  position: new Vector3(5, 16.5, 7.5),
  rotation: new Quaternion(7.137503013005865e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.5312728881835938, 2.53125, 1.0000091791152954)
})
nftPictureFrame42.addComponentOrReplace(transform156)

const bermudaGrass = new Entity('bermudaGrass')
engine.addEntity(bermudaGrass)
bermudaGrass.setParent(_scene)
const gltfShape14 = new GLTFShape("da1fed3c954172146414a66adfa134f7a5e1cb49c902713481bf2fe94180c2cf/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
bermudaGrass.addComponentOrReplace(gltfShape14)
const transform157 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass.addComponentOrReplace(transform157)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script1.spawn(galleryInfoWhite2, {"text":"Welcome to CryptoJewelry\nCollectible NFTs. \n\nGround - Animated Designs,\nMemory of Smell sculpture\n1st Floor - Still Designs\n2nd Floor -  Gallery Portal\n3rd Floor - Open\nTop Floor - Lounge, \nArtchitect's personal gallery\n","fontSize":4.5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoWhite2, channelBus))
script2.spawn(galleryInfoGlass, {"text":"Regardless of the reason behind \nthe vision, custom Crypto Jewelry\ncollectibles are ready to shake \nthe world of Crypto. Welcome \nto the future of NFTs collectibles.","fontSize":4,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGlass, channelBus))
script2.spawn(galleryInfoGlass2, {"text":"The same 3D models can be \nalso used as in-game, virtual \nreality assets. Clients will be \nprovided with updates\nto their orders.","fontSize":4,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGlass2, channelBus))
script1.spawn(galleryInfoWhite3, {"text":"Crypto Jewelry by CinnamonDream \nare the first type of \nCryptoJewelry Collectible NFTs. \nDesigns are custom and used \nonly once. By owning \nCryptoJewels, you gain access to\ntheir 3D model design, which can \nbe used to produce the jewelry \nfor yourself, or your loved ones. ","fontSize":4,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoWhite3, channelBus))
script1.spawn(galleryInfoWhite4, {"text":"Custom jewelry is often a priority\nwhen shopping for artisan jewelry.\nModels can be designed \nupon request.","fontSize":4,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoWhite4, channelBus))
script3.spawn(nftPictureFrame19, {"id":"105732673409547432726861845746573444755980791736347231362573922671661296910337","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame19, channelBus))
script3.spawn(nftPictureFrame18, {"id":"105732673409547432726861845746573444755980791736347231362573922606790110871553","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script3.spawn(nftPictureFrame26, {"id":"105732673409547432726861845746573444755980791736347231362573922605690599243777","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame26, channelBus))
script3.spawn(nftPictureFrame20, {"id":"105732673409547432726861845746573444755980791736347231362573922668362762027009","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame20, channelBus))
script3.spawn(nftPictureFrame21, {"id":"105732673409547432726861845746573444755980791736347231362573922670561785282561","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script3.spawn(nftPictureFrame23, {"id":"105732673409547432726861845746573444755980791736347231362573922599093529477121","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame23, channelBus))
script3.spawn(nftPictureFrame14, {"id":"105732673409547432726861845746573444755980791736347231362573922595794994593793","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script3.spawn(nftPictureFrame15, {"id":"105732673409547432726861845746573444755980791736347231362573922643073994588161","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script3.spawn(nftPictureFrame16, {"id":"105732673409547432726861845746573444755980791736347231362573922648571552727041","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script3.spawn(nftPictureFrame3, {"id":"105732673409547432726861845746573444755980791736347231362573922669462273654785","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script3.spawn(nftPictureFrame4, {"id":"105732673409547432726861845746573444755980791736347231362573922602392064360449","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script3.spawn(nftPictureFrame24, {"id":"105732673409547432726861845746573444755980791736347231362573922637576436449281","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame24, channelBus))
script3.spawn(nftPictureFrame6, {"id":"105732673409547432726861845746573444755980791736347231362573922649671064354817","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script3.spawn(nftPictureFrame7, {"id":"105732673409547432726861845746573444755980791736347231362573922660666180632577","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script3.spawn(nftPictureFrame8, {"id":"105732673409547432726861845746573444755980791736347231362573922603491575988225","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script3.spawn(nftPictureFrame5, {"id":"105732673409547432726861845746573444755980791736347231362573922635377413193729","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script3.spawn(nftPictureFrame29, {"id":"105732673409547432726861845746573444755980791736347231362573922596894506221569","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame29, channelBus))
script3.spawn(nftPictureFrame30, {"id":"105732673409547432726861845746573444755980791736347231362573922601292552732673","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame30, channelBus))
script4.spawn(youtubeLink, {"url":"UC1faOv6BVluBMmbhDvzsG8Q","bnw":true,"name":"Just Life, YouTube"}, createChannel(channelId, youtubeLink, channelBus))
script1.spawn(galleryInfoWhite, {"text":"Welcome to CryptoJewelry\nCollectible NFTs. \n\nGround - Animated Designs,\nMemory of Smell sculpture\n1st Floor - Still Designs\n2nd Floor - Gallery Portal\n3rd Floor - Open\nTop Floor - Lounge, \nArtchitect's personal gallery\n","fontSize":4.5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoWhite, channelBus))
script5.spawn(teleport, {"x":"-48","y":"-22","name":"Eternal Arts Gallery"}, createChannel(channelId, teleport, channelBus))
script3.spawn(nftPictureFrame, {"id":"105732673409547432726861845746573444755980791736347231362573922638675948077057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script3.spawn(nftPictureFrame10, {"id":"105732673409547432726861845746573444755980791736347231362573922639775459704833","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script3.spawn(nftPictureFrame11, {"id":"105732673409547432726861845746573444755980791736347231362573922658467157377025","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script3.spawn(nftPictureFrame12, {"id":"105732673409547432726861845746573444755980791736347231362573922669462273654785","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script3.spawn(nftPictureFrame13, {"id":"105732673409547432726861845746573444755980791736347231362573922689253482954753","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script3.spawn(nftPictureFrame9, {"id":"105732673409547432726861845746573444755980791736347231362573922693651529465857","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script3.spawn(nftPictureFrame17, {"id":"105732673409547432726861845746573444755980791736347231362573922716741273649153","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame17, channelBus))
script3.spawn(nftPictureFrame22, {"id":"105732673409547432726861845746573444755980791736347231362573922705746157371393","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script3.spawn(nftPictureFrame25, {"id":"110766789446612340787349005275737877242308208558258561254967092256690770280449","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true,"uiText":"Buy the pair (ETH 0.079) at this URL:\nhttps://opensea.io/bundles/gaze-6NA"}, createChannel(channelId, nftPictureFrame25, channelBus))
script3.spawn(nftPictureFrame27, {"id":"110766789446612340787349005275737877242308208558258561254967092255591258652673","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame27, channelBus))
script3.spawn(nftPictureFrame28, {"id":"110766789446612340787349005275737877242308208558258561254967092253392235397121","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true,"uiText":"Buy the pair (166 Mana) at the following URL:\nhttps://opensea.io/bundles/determi-nation-IMu"}, createChannel(channelId, nftPictureFrame28, channelBus))
script3.spawn(nftPictureFrame31, {"id":"110766789446612340787349005275737877242308208558258561254967092252292723769345","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame31, channelBus))
script3.spawn(nftPictureFrame32, {"id":"110766789446612340787349005275737877242308208558258561254967092257790281908225","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true,"uiText":"Buy the pair (ETH 0.079) at this URL:\nhttps://opensea.io/bundles/gaze-6NA"}, createChannel(channelId, nftPictureFrame32, channelBus))
script3.spawn(nftPictureFrame34, {"id":"105732673409547432726861845746573444755980791736347231362573922680457389932545","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame34, channelBus))
script3.spawn(nftPictureFrame35, {"id":"105732673409547432726861845746573444755980791736347231362573922695850552721409","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame35, channelBus))
script3.spawn(nftPictureFrame36, {"id":"105732673409547432726861845746573444755980791736347231362573922717840785276929","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_Wide","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame36, channelBus))
script6.spawn(discordLink2, {"url":"https://discord.com/channels/827821064612347915/827821065157083198","bnw":true,"name":"Contact the Architect"}, createChannel(channelId, discordLink2, channelBus))
script3.spawn(nftPictureFrame2, {"id":"110766789446612340787349005275737877242308208558258561254967092254491747024897","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true,"uiText":"Buy the pair (166 Mana) at the following URL:\nhttps://opensea.io/bundles/determi-nation-IMu"}, createChannel(channelId, nftPictureFrame2, channelBus))
script3.spawn(nftPictureFrame37, {"id":"110766789446612340787349005275737877242308208558258561254967092259989305163777","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true,"uiText":"Buy the pair for 222 Mana here:\nhttps://opensea.io/bundles/choose-to-see-the-beauty-x99"}, createChannel(channelId, nftPictureFrame37, channelBus))
script3.spawn(nftPictureFrame38, {"id":"110766789446612340787349005275737877242308208558258561254967092258889793536001","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true,"uiText":"Buy the bundle here for 222 Mana\nhttps://opensea.io/bundles/choose-to-see-the-beauty-x99"}, createChannel(channelId, nftPictureFrame38, channelBus))
script3.spawn(nftPictureFrame39, {"id":"105732673409547432726861845746573444755980791736347231362573922615586203893761","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame39, channelBus))
script3.spawn(nftPictureFrame40, {"id":"110766789446612340787349005275737877242308208558258561254967092261088816791553","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true,"uiText":""}, createChannel(channelId, nftPictureFrame40, channelBus))
script3.spawn(nftPictureFrame41, {"id":"123765","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame41, channelBus))
script3.spawn(nftPictureFrame43, {"id":"1","contract":"0xf4b0a9ac156b4b63d9e48333e93d7b6e4dfff45a","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame43, channelBus))
script3.spawn(nftPictureFrame42, {"id":"105732673409547432726861845746573444755980791736347231362573922608989134127105","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame42, channelBus))