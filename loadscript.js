var script = document.createElement("script");
script.onload = function(){
    console.log("hacked!");
}
script.src = "https://cdnjs.cloudflare.com/ajax/libs/heatmap.js/2.0.2/heatmap.min.js";
document.head.appendChild(script);