var runAnimation = document.getElementById("runAnimation");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var output = document.getElementById("output");

function transitionBetweenContent() {
    var incoming;
    var outgoing;

    // Assign incoming and outgoing
    if (output2.style.display === "none") {
        incoming = output2;
        outgoing = output1;
    } else {
        incoming = output1;
        outgoing = output2;
    }

    // Run the exitContent animation and then the enterContent animation
    // Use the recommended offset by leaving the offset argument empty to get the best performance
    WinJS.UI.Animation.exitContent(output, null).done(function () {
        outgoing.style.display = "none";
        incoming.style.display = "block";
        return WinJS.UI.Animation.enterContent(output, null);
    });
}

runAnimation.addEventListener("click", transitionBetweenContent, false);
output1.style.display = "block";
output2.style.display = "none";
