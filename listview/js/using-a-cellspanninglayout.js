(function() {
    "use strict";
    var sizeMap = {
        smallListIconTextItem: {width: 310, height: 80},
        mediumListIconTextItem: {width: 310, height: 170},
        largeListIconTextItem: {width: 310, height: 260},
        defaultSize: {width: 310, height: 80}
    };

    // Enable cell spanning in ListView and specify
    // the cellWidth and cellHeight for the items
    window.groupInfo = WinJS.Utilities.markSupportedForProcessing(function groupInfo() {
        return {
            enableCellSpanning: true,
            cellWidth: 310,
            cellHeight: 80
        };
    });

    // Item info function that returns the size of a cell spanning item
    window.itemInfo = WinJS.Utilities.markSupportedForProcessing(function itemInfo(itemIndex) {
        var size = sizeMap.defaultSize;

        // Get the item from the data source
        var item = window.myCellSpanningData.getAt(itemIndex);
        if (item) {
            // Get the size based on the item type
            size = sizeMap[item.type];
        }

        return size;
    });

    window.myCellSpanningData = new WinJS.Binding.List([
        {title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "./images/fruits/60Banana.png", type: "smallListIconTextItem"},
        {title: "Lavish Lemon Ice", text: "Sorbet", picture: "./images/fruits/60Lemon.png", type: "mediumListIconTextItem"},
        {title: "Marvelous Mint", text: "Gelato", picture: "./images/fruits/60Mint.png", type: "largeListIconTextItem"},
        {title: "Creamy Orange", text: "Sorbet", picture: "./images/fruits/60Orange.png", type: "mediumListIconTextItem"},
        {title: "Succulent Strawberry", text: "Sorbet", picture: "./images/fruits/60Strawberry.png", type: "smallListIconTextItem"},
        {title: "Very Vanilla", text: "Ice Cream", picture: "./images/fruits/60Vanilla.png", type: "smallListIconTextItem"},
        {title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "./images/fruits/60Banana.png", type: "mediumListIconTextItem"},
        {title: "Lavish Lemon Ice", text: "Sorbet", picture: "./images/fruits/60Lemon.png", type: "mediumListIconTextItem"},
        {title: "Marvelous Mint", text: "Gelato", picture: "./images/fruits/60Mint.png", type: "smallListIconTextItem"},
        {title: "Creamy Orange", text: "Sorbet", picture: "./images/fruits/60Orange.png", type: "smallListIconTextItem"},
        {title: "Succulent Strawberry", text: "Sorbet", picture: "./images/fruits/60Strawberry.png", type: "smallListIconTextItem"},
        {title: "Very Vanilla", text: "Ice Cream", picture: "./images/fruits/60Vanilla.png", type: "smallListIconTextItem"},
        {title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "./images/fruits/60Banana.png", type: "smallListIconTextItem"},
        {title: "Lavish Lemon Ice", text: "Sorbet", picture: "./images/fruits/60Lemon.png", type: "smallListIconTextItem"},
        {title: "Marvelous Mint", text: "Gelato", picture: "./images/fruits/60Mint.png", type: "mediumListIconTextItem"},
        {title: "Creamy Orange", text: "Sorbet", picture: "./images/fruits/60Orange.png", type: "smallListIconTextItem"},
        {title: "Succulent Strawberry", text: "Sorbet", picture: "./images/fruits/60Strawberry.png", type: "largeListIconTextItem"},
        {title: "Very Vanilla", text: "Ice Cream", picture: "./images/fruits/60Vanilla.png", type: "mediumListIconTextItem"}
    ]);

    window.MyCellSpanningJSTemplate = WinJS.Utilities.markSupportedForProcessing(function MyCellSpanningJSTemplate(itemPromise) {
        return itemPromise.then(function(currentItem) {
            var result = document.createElement("div");

            // Use source data to decide what size to make the
            // ListView item
            result.className = currentItem.data.type;
            result.style.overflow = "hidden";

            // Display image
            var image = document.createElement("img");
            image.className = "regularListIconTextItem-Image";
            image.src = currentItem.data.picture;
            result.appendChild(image);

            var body = document.createElement("div");
            body.className = "regularListIconTextItem-Detail";
            body.style.overflow = "hidden";
            result.appendChild(body);

            // Display title
            var title = document.createElement("h4");
            title.innerText = currentItem.data.title;
            body.appendChild(title);

            // Display text
            var fulltext = document.createElement("h6");
            fulltext.innerText = currentItem.data.text;
            body.appendChild(fulltext);

            return result;
        });
    });
    WinJS.UI.processAll();
})();