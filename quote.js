window.addEventListener("DOMContentLoaded", function () {
    document
        .querySelector("#fetchQuotesBtn")
        .addEventListener("click", function () {
            // Get values from drop-downs
            const topicDropdown = document.querySelector("#topicSelection");
            const selectedTopic =
                topicDropdown.options[topicDropdown.selectedIndex].value;
            const countDropdown = document.querySelector("#countSelection");
            const selectedCount =
                countDropdown.options[countDropdown.selectedIndex].value;

            // Get and display quotes
            fetchQuotes(selectedTopic, selectedCount);
        });
});

function showAnonymousQuotes(count) {
    let html = "<ol>";
    for (let c = 1; c <= count; c++) {
        html += `<li>Quote ${c} - Anonymous</li>`;
    }
    html += "</ol>";

    document.querySelector("#quotes").innerHTML = html;
}

function fetchQuotes(topic, count) {
    // TODO: Modify to use Fetch API
    const quotesDiv = document.getElementById("quotes");

    if (topic === "Choose one") {
        quotesDiv.innerHTML = "Please select a valid topic.";
    }

    const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                quotesDiv.innerHTML = data.error;
            } else {
                data.forEach(function (quotes) {
                    let html = "<ol>";
                    data.forEach(function (quotes) {
                        html += `<li>${quotes.quote} - ${quotes.source}</li>`;
                    });
                    html += "</ol";

                    document.getElementById("quotes").innerHTML = html;
                });
            }
        });
}
