var itemArray = [
    {type: "status", picture: "./images/fruits/60Banana.png", title: "Banana Blast", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {type: "photo", picture: "./images/fruits/60Lemon.png", title: "Lavish Lemon Ice", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula nisi, vehicula nec eleifend vel, rutrum non dolor."},
    {type: "photo", picture: "./images/fruits/60Mint.png", title: "Marvelous Mint", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula nisi, vehicula nec eleifend vel, rutrum non dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."},
    {type: "status", picture: "./images/fruits/60Orange.png", title: "Creamy Orange", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula nisi, vehicula nec eleifend vel, rutrum non dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."},
    {type: "status", picture: "./images/fruits/60Strawberry.png", title: "Succulent Strawberry", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula nisi, vehicula nec eleifend vel, rutrum non dolor."},
    {type: "photo", picture: "./images/fruits/60Vanilla.png", title: "Very Vanilla", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula nisi, vehicula nec eleifend vel, rutrum non dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."}
];

var items = [];

// Generate 120 items
for (var i = 0; i < 20; i++) {
    itemArray.forEach(function(item) {
        items.push(item);
    });
}
var myData = new WinJS.Binding.List(items);

WinJS.Namespace.define("Sample.CustomLayout", {
    list: myData,
    StatusLayout: WinJS.Class.define(function(options) {
        this._site = null;
        this._surface = null;
    },
            {
                // This sets up any state and CSS layout on the surface of the custom layout
                initialize: function(site) {
                    this._site = site;
                    this._surface = this._site.surface;

                    // Add a CSS class to control the surface level layout
                    WinJS.Utilities.addClass(this._surface, "statusLayout");

                    return WinJS.UI.Orientation.vertical;
                },
                // Reset the layout to its initial state
                uninitialize: function() {
                    WinJS.Utilities.removeClass(this._surface, "statusLayout");
                    this._site = null;
                    this._surface = null;
                },
            })
});

WinJS.UI.processAll().then(function() {
    var statusTemplate = document.querySelector(".statusTemplate").winControl;
    var photoTemplate = document.querySelector(".photoTemplate").winControl;
    var listView = document.querySelector(".listView").winControl;

    // Conditional renderer that chooses between statusTemplate and photoTemplate
    var statusRenderer = function(itemPromise) {
        var that = this;
        return itemPromise.then(function(item) {

            if (item.data.type === "photo") {
                return photoTemplate.renderItem(itemPromise);
            }

            return statusTemplate.renderItem(itemPromise);
        });
    }
    listView.itemTemplate = statusRenderer.bind(this);
});


