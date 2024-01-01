const noiseWrapper = document.querySelector("#main");
const divCountSpan = document.querySelector(".div-count");
const noiseWrapperHeight = noiseWrapper.clientHeight;
const noiseWrapperWidth = noiseWrapper.clientWidth;
let noiseBoxWidthPercentage = 0.009;

const colorPicker = document.querySelector(".color-picker");
let noiseBoxes = [];
const noiseSizeInput = document.querySelector(".noise-size-input");

//Generating new noise.
const generateNoise = () => {
    console.log('generaitng Noise...');

    noiseWrapper.innerHTML = "";
    noiseBoxes = [];
    const noiseBoxWidth = noiseWrapperWidth * noiseBoxWidthPercentage;
    const totalNoNoiseBox = Math.ceil(1 / noiseBoxWidthPercentage);

    for (i = 0; i < totalNoNoiseBox; i++) {
        for (j = 0; j < totalNoNoiseBox; j++) {
            const newNoiseBox = document.createElement("div");
            newNoiseBox.classList.add("noise-box");
            newNoiseBox.style.width = noiseBoxWidth + "px";
            newNoiseBox.style.opacity = Math.random();
            newNoiseBox.style.backgroundColor = colorPicker.value;
            noiseBoxes.push(newNoiseBox);
            noiseWrapper.appendChild(newNoiseBox);
        }
    }

    divCountSpan.innerHTML = `Total of <strong> '${noiseBoxes.length}' </strong> elements generated. 😲`;
    console.log('Noise generated!');

}
generateNoise();

// Updating noise thats already created if noise size is not changed. 
const updateNoise = () => {
    noiseBoxes.forEach(noiseBox => {
        noiseBox.style.opacity = Math.random();
    })
}

const noiseGeneratorFactory = () => {

    let noiseSizeInputFloat = Number.parseFloat(noiseSizeInput.value);

    if (noiseSizeInputFloat && noiseBoxWidthPercentage !== noiseSizeInputFloat) {
        noiseBoxWidthPercentage = noiseSizeInputFloat;
        return generateNoise();
    }
    return updateNoise();
}

colorPicker.oninput = (e) => {
    noiseBoxes.forEach(noiseBox => {
        noiseBox.style.backgroundColor = !e.target.value ? "black" : e.target.value;
    })
}