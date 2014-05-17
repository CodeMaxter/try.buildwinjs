function runEnterPageAnimation() {
    // Get user selection from control
    var pageSections = document.getElementById("pageSectionsControl").value;
    document.querySelector(".box").style.overflow = "hidden";

    // Animate the application's entrance in the number of stages chosen by the user
    // Use the recommended offset by leaving the offset argument empty to get the best performance
    var enterPage;
    var rootGrid = document.getElementById("rootGrid");
    var pageContent = document.getElementById("pageContent");
    var header = document.querySelector("header");
    var footer = document.querySelector("footer");
    switch (pageSections) {
        case "1":
            // Animate the whole page together
            enterPage = WinJS.UI.Animation.enterPage(rootGrid, null);
            break;
        case "2":
            // Stagger the header and body
            enterPage = WinJS.UI.Animation.enterPage([header, [pageContent, footer]], null);
            break;
        case "3":
            // Stagger the header, input, and output areas
            enterPage = WinJS.UI.Animation.enterPage([header, pageContent, footer], null);
            break;
    }
    document.getElementById("message").textContent = "Page appeared in " + pageSections + " section(s).";
}
var runAnimation = document.getElementById("runAnimation");
runAnimation.addEventListener("click", runEnterPageAnimation, false);

