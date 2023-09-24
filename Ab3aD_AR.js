/*  
   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
The following solution is trademarked to Ab3ad, all rights are reserved.
The international university of Rabat protects the patent for the company Ab3ad, the UIR Institute of Research & Development is responsable protecting its startups.
You may not reproduce in any commercial or personal capacity the following solution either as it is or modified.
*/

import * as ARModule from  "https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js";

function clickHandler()
{
alert("Hello! I am an alert box!!");	
}


async function createARElement(elementId, modelId, altText, width=600, height=400, bWallPlaced=false, bAutoRotate=false)
{  

var sAutoRotate = "";
var sWallPlaced="";

if(bWallPlaced)
{
	sWallPlaced = 'ar ar-placement="wall"';
}
if(bAutoRotate)
{
	sAutoRotate = 'auto-rotate'
}
var cardHTML = `
<model-viewer id="lazy-load" reveal="manual" src="https://da3ba.github.io/PaintingsScript/Paintings/TestingFrame.glb" ios-src="https://da3ba.github.io/PaintingsScript/Paintings/FrameU.usdz" alt="A 3D model" loading="eager" style="width: 100%; height: 100%;" camera-controls touch-action="pan-y"  scale="1 10 20">



 <div id="lazy-load-poster" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/a/ae/Troy_Baker_SDCC_2019_%2848378614692%29_%28cropped%29.jpg')" slot="poster">
          <div id="button-load">Load 3D Model</div>
        </div>
       
        <button slot="ar-button" class="button ar-button-load" style="position: absolute;">
          Activate AR
        </button>


</model-viewer>`
document.getElementById(elementId).innerHTML += cardHTML;
/*
var cardHTML = `<style>
model-viewer {
 width:`+ width +`px;
 height:` + height +`px;
}
</style>   <model-viewer id="transform" ios="https://da3ba.github.io/PaintingsScript/Paintings/Frame1.glb"  skybox-image="https://da3ba.github.io/PaintingsScript/Paintings/aircraft_workshop_01_1k.hdr" ar ar-scale="fixed" ` + sWallPlaced + `shadow-intensity="1" camera-controls touch-action="pan-y"` + sAutoRotate +` > 
<button slot="ar-button" onclick="clickHandler()" style="background-color: white; border-radius: 20px; border: none; position: absolute; top: 16px; right: 16px; ">
      👋 Try Live AR
  </button>  </model-viewer>`
//For poster: poster="..../poster.webp"
*/
//ios-src="https://da3ba.github.io/PaintingsScript/Paintings/Painting1.usdz"
	/*
var cardHTML = `
<model-viewer id="3dmodel" src="https://cdn.shopify.com/s/files/1/0333/3655/7704/files/infsd-3d-box1.glb?v=1640737610" alt="A 3D model" loading="eager" style="width: 100%; height: 100%;" auto-rotate="" camera-controls="" ar-status="not-presenting"></model-viewer>`
document.getElementById(elementId).innerHTML += cardHTML;
/*
var cardHTML = `
<model-viewer id="3dmodel" src="https://da3ba.github.io/PaintingsScript/Paintings/Frame1.glb" alt="A 3D model" loading="eager" style="width: 100%; height: 100%;" auto-rotate="" camera-controls="" ar-status="not-presenting"></model-viewer>`
document.getElementById(elementId).innerHTML += cardHTML;
*/
const modelViewerTransform = document.querySelector("model-viewer#transform");

modelViewerTransform.addEventListener("load", () => {

const material = modelViewerTransform.model.materials[0];
material.pbrMetallicRoughness['baseColorTexture'].texture.source.setURI("https://www.puroshow.com/u/fotografias/m/2023/5/12/f608x342-72460_102183_174.jpg");	
modelVTransform4.updateFraming();
/*
	
    let material =modelViewerTransform.model.materials[0];
    const createAndApplyTexture = async (channel) => {
    const texture = await modelViewerTransform.createTexture("https://www.puroshow.com/u/fotografias/m/2023/5/12/f608x342-72460_102183_174.jpg");
    if (channel.includes('base') || channel.includes('metallic')) 
    {
      material.pbrMetallicRoughness[channel].setTexture(texture);
    } else 
    {
      material[channel].setTexture(texture);
    }

  }
createAndApplyTexture('baseColorTexture');
	*/

});

//modelViewerTransform.scale = `0.15 0.15  0.15 `;
//modelViewerTransform.orientation = `0deg 90deg 0deg`; 
//const modelViewerTransform = document.querySelector("model-viewer#transform");
// modelViewerTransform.scale = `${0.4} ${0.4} ${0.4}`;
// modelViewerTransform.updateFraming();
var modelVTransform4 = document.querySelector("model-viewer#transform");

const material = modelVTransform4.model.materials[0];
material.pbrMetallicRoughness['baseColorTexture'].texture.source.setURI("https://www.puroshow.com/u/fotografias/m/2023/5/12/f608x342-72460_102183_174.jpg");	

	
modelVTransform4.scale = `0.01 0.01  0.01 `;
modelVTransform4.updateFraming();
}  

window.createARElement = createARElement



