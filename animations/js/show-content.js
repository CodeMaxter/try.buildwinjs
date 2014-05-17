var runAnimation = document.getElementById("runAnimation");
var contentArea = document.getElementById("contentArea");
var content = document.querySelector(".box");

function runEnterContentAnimation() {
    if (runAnimation.innerHTML === "Reset") {
        contentArea.style.opacity = "0";
        runAnimation.innerHTML = "Run animation";
    } else {
        content.style.overflow = "hidden";

        // Run the enterContent animation
        // The animation will cause opacity to transition to 1
        // Use the recommended offset by leaving the offset argument empty to get the best performance
        WinJS.UI.Animation.enterContent(contentArea, null).done(function () {
            content.style.overflow = "auto";
        });

        runAnimation.innerHTML = "Reset";
    }
}

contentArea.style.opacity = "0";
runAnimation.addEventListener("click", runEnterContentAnimation, false);
