let url = document.URL.split("?")

$(document).ready(function() {
    let simp = getSimpFromUrl();

    if(simp !== null) {
        console.log("Simp: " + simp)
        handleSimpRequest(simp)
    } else {
        console.log("No simp specified!")
    }
});

function getSimpFromUrl() {
    if(url.length === 2 && url[1].startsWith("simp=")) {
        let val = url[1].replace("simp=", "")
        return val.length > 0 ? val : null
    }

    return null
}

function handleSimpRequest(simp) {
    $.getJSON(`simps/${simp.toLowerCase()}.json`, function(data) {
        $("#watch-a-simp").hide()

        setupReport(simp, data)
        google.charts.load('current', {'packages':['corechart']})
        google.charts.setOnLoadCallback(() => {setupReportCharts(data)})

        $("#simp-report").show()
    }).fail(function () {
        $("#watch-a-simp").hide()
        $("#simp-not-found").show()
        $("#simp-name-not-found").html(simp)
    })
}
