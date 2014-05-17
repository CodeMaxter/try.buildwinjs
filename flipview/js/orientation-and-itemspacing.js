// This function swaps between different values of orientation of the FlipView
function swapOrientation(evt) {

    // First step is to get the FlipView we want to change
    var myFlipView = document.getElementById("orientationAndItemSpacing_FlipView").winControl;

    // Next Step is to check the current orientation, switch it to
    // the other orientation and then switch the button text.
    if (myFlipView.orientation === "horizontal") {
        myFlipView.orientation = "vertical";
        evt.target.textContent = "Horizontal";

    } else {
        myFlipView.orientation = "horizontal";
        evt.target.textContent = "Vertical";
    }
}

// This event handler retrieves the value from the range control and
// applies it to the FlipView.
function updateItemGaps(evt) {

    // First Step is to get the FlipView we want to change
    var myFlipView = document.getElementById("orientationAndItemSpacing_FlipView").winControl;

    // Next step is to get the new Item Gap Size
    var space = evt.target.value;

    // Final step is to set the new spacing on the FlipView
    myFlipView.itemSpacing = parseInt(space);
}

document.getElementById("OrientationButton").addEventListener("click", swapOrientation, false);
document.getElementById("SpaceRange").addEventListener("change", updateItemGaps, false);

var array = [
    {type: "item", title: "Sunset", picture: "./pages/flipview/images/Sunset.jpg"},
    {type: "item", title: "Grapes", picture: "./pages/flipview/images/Grapes.jpg"},
    {type: "item", title: "Rainier", picture: "./pages/flipview/images/Rainier.jpg"},
    {type: "item", title: "Valley", picture: "./pages/flipview/images/Valley.jpg"},
    {type: "item", title: "Cliff", picture: "./pages/flipview/images/Cliff.jpg"}
];
var bindingList = new WinJS.Binding.List(array);

WinJS.Namespace.define("DefaultData", {
    bindingList: bindingList,
    array: array
});
WinJS.UI.processAll();

