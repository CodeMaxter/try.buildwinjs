var array = [
    { type: "item", title: "Cliff", picture: "./pages/flipview/images/Cliff.jpg" },
    { type: "item", title: "Grapes", picture: "./pages/flipview/images/Grapes.jpg" },
    { type: "item", title: "Rainier", picture: "./pages/flipview/images/Rainier.jpg" },
    { type: "item", title: "Sunset", picture: "./pages/flipview/images/Sunset.jpg" },
    { type: "item", title: "Valley", picture: "./pages/flipview/images/Valley.jpg" }
];
var bindingList = new WinJS.Binding.List(array);

WinJS.Namespace.define("DefaultData", {
    bindingList: bindingList,
    array: array
});
WinJS.UI.processAll();