var header;
var footer;
var pageContent;
var runAnimation;
var outputText;

WinJS.UI.Pages.define("../../pages/animations/content/transitionPages.html", {
    ready: function(element, options) {
        header = document.querySelector("header");
        footer = document.querySelector("footer");
        pageContent = document.querySelector(".pageContent");
        runAnimation = document.getElementById("runAnimation");
        outputText = document.getElementById("outputText");

        runAnimation.addEventListener("click", transitionBetweenPages, false);

        // If navigating from sample page, run the enter page animation on the incoming page
        if (WinJS.Navigation.state === "sample page") {
            outputText.textContent = "Transitioned back from sample page.";

            // Use the recommended offset by leaving the offset argument empty to get the best performance
            WinJS.UI.Animation.enterPage([header, pageContent, footer], null);
        }
    }
});

function transitionBetweenPages() {
    // Run the exit page animation on the current page, and then navigate to the new page
    // Use the recommended offset by leaving the offset argument empty to get the best performance
    WinJS.UI.Animation.exitPage([header, pageContent, footer], null).done(
            function() {
                WinJS.Navigation.navigate("../../pages/animations/content/samplePage.html");
            });
}

