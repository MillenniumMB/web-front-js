var before_loadtime = new Date().getTime();
(window.onload = function (){
    var aftr_loadtime = new Date().getTime();
    document.getElementById('demo').textContent = "Load time: " + (aftr_loadtime - before_loadtime)/1000;
})()

