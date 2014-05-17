var target1 = document.getElementById("target1");
var target2 = document.getElementById("target2");
var target3 = document.getElementById("target3");

function onPointerDown(evt) {
    WinJS.UI.Animation.pointerDown(evt.target);
    evt.preventDefault();
}

function onPointerUp(evt) {
    WinJS.UI.Animation.pointerUp(evt.target);
    evt.preventDefault();
}

function addPointerDownHandlers(target) {
    target.addEventListener("pointerdown", onPointerDown, false);
    target.addEventListener("touchstart", onPointerDown, false);
    target.addEventListener("mousedown", onPointerDown, false);
}

function addPointerUpHandlers(target) {
    target.addEventListener("pointerup", onPointerUp, false);
    target.addEventListener("touchend", onPointerUp, false);
    target.addEventListener("mouseup", onPointerUp, false);
}
addPointerDownHandlers(target1);
addPointerUpHandlers(target1);
addPointerDownHandlers(target2);
addPointerUpHandlers(target2);
addPointerDownHandlers(target3);
addPointerUpHandlers(target3);
