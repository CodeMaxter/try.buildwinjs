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
    {title: "Creamy Orange", text: "Sorbet", picture: "./images/fruits/60Orange.png"},
    {title: "Succulent Strawberry", text: "Sorbet", picture: "./images/fruits/60Strawberry.png"},
    {title: "Very Vanilla", text: "Ice Cream", picture: "./images/fruits/60Vanilla.png"},
    {title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "./images/fruits/60Banana.png"},
    {title: "Lavish Lemon Ice", text: "Sorbet", picture: "./images/fruits/60Lemon.png"},
    {title: "Marvelous Mint", text: "Gelato", picture: "./images/fruits/60Mint.png"},
    {title: "Creamy Orange", text: "Sorbet", picture: "./images/fruits/60Orange.png"},
    {title: "Succulent Strawberry", text: "Sorbet", picture: "./images/fruits/60Strawberry.png"},
    {title: "Very Vanilla", text: "Ice Cream", picture: "./images/fruits/60Vanilla.png"},
    {title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "./images/fruits/60Banana.png"},
    {title: "Lavish Lemon Ice", text: "Sorbet", picture: "./images/fruits/60Lemon.png"},
    {title: "Marvelous Mint", text: "Gelato", picture: "./images/fruits/60Mint.png"},
    {title: "Creamy Orange", text: "Sorbet", picture: "./images/fruits/60Orange.png"},
    {title: "Succulent Strawberry", text: "Sorbet", picture: "./images/fruits/60Strawberry.png"},
    {title: "Very Vanilla", text: "Ice Cream", picture: "./images/fruits/60Vanilla.png"},
    {title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "./images/fruits/60Banana.png"},
    {title: "Lavish Lemon Ice", text: "Sorbet", picture: "./images/fruits/60Lemon.png"},
    {title: "Marvelous Mint", text: "Gelato", picture: "./images/fruits/60Mint.png"},
    {title: "Creamy Orange", text: "Sorbet", picture: "./images/fruits/60Orange.png"},
    {title: "Succulent Strawberry", text: "Sorbet", picture: "./images/fruits/60Strawberry.png"},
    {title: "Very Vanilla", text: "Ice Cream", picture: "./images/fruits/60Vanilla.png"},
    {title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "./images/fruits/60Banana.png"},
    {title: "Lavish Lemon Ice", text: "Sorbet", picture: "./images/fruits/60Lemon.png"},
    {title: "Marvelous Mint", text: "Gelato", picture: "./images/fruits/60Mint.png"},
    {title: "Creamy Orange", text: "Sorbet", picture: "./images/fruits/60Orange.png"},
    {title: "Succulent Strawberry", text: "Sorbet", picture: "./images/fruits/60Strawberry.png"},
    {title: "Very Vanilla", text: "Ice Cream", picture: "./images/fruits/60Vanilla.png"}
]);

var grouped = myData.createGrouped(function(item) {
    return item.title.toUpperCase().charAt(0);
}, function(item) {
    return {
        title: item.title.toUpperCase().charAt(0)
    };
}, function(left, right) {
    return left.charCodeAt(0) - right.charCodeAt(0);
});

WinJS.Namespace.define("Sample.ListView", {
    data: grouped
});
WinJS.UI.processAll();

