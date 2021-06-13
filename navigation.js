$.getJSON('simps/simps.json', function(data) {
    let simps = data.simps
    let linksHtml = ""

    for(i = 0; i < simps.length; i++) {
        linksHtml += `<a class="navbar-link" href="?simp=${simps[i]}">Simp ${simps[i]}</a>`
    }

    $("#nav-links").html(linksHtml)
})
