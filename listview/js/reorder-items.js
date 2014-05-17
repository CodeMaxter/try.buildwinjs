var myData = new WinJS.Binding.List([
    {title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "./images/fruits/60Banana.png"},
    {title: "Lavish Lemon Ice", text: "Sorbet", picture: "./images/fruits/60Lemon.png"},
    {title: "Marvelous Mint", text: "Gelato", picture: "./images/fruits/60Mint.png"},
    {title: "Creamy Orange", text: "Sorbet", picture: "./images/fruits/60Orange.png"},
    {title: "Succulent Strawberry", text: "Sorbet", picture: "./images/fruits/60Strawberry.png"},
    {title: "Very Vanilla", text: "Ice Cream", picture: "./images/fruits/60Vanilla.png"},
    {title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "./images/fruits/60Banana.png"},
    {title: "Lavish Lemon Ice", text: "Sorbet", picture: "./images/fruits/60Lemon.png"},
    {title: "Marvelous Mint", text: "Gelato", picture: "./images/fruits/60Mint.png"},
    {title: "Creamy Orange", text: "Sorbet", picture: "./images/fruits/60Orange.png"}
]);
WinJS.Namespace.define("Sample.ListView", {
    data: myData
});
WinJS.UI.processAll();

