
const colorPicker = new iro.ColorPicker("#color-picker",{
    width:180,color:"#fff"
});
let colorCode
colorPicker.on('color:change',function(color){
    let colorIndicator = document.getElementById("color-indicator");
    let code = document.getElementById("code");
    colorIndicator.style.backgroundColor = color.hexString;
    colorCode=color.hexString
    code.innerText=color.hexString
})
const copyColorCode=() =>{
    let code = document.getElementById("code").innerText;
    navigator.clipboard.writeText(code).then(function () {
        alert("Copied successfully ",code);
    }, function () {
        alert("Fail to copy ");
    });

}

