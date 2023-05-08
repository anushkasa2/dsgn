addListener("finder", "finder-popup")
addListener("spotify", "spotify-popup")
addListener("terminal", "terminal-popup")
addListener("folder1", "artist")
addListener("folder2", "work")
addListener("folder3", "myself")

function addListener(icon_id, window_id) {

    document.getElementById(icon_id).addEventListener('click', e => {
        e.preventDefault()
        document.getElementById(window_id).style.display = "block"; 
    })

    document.getElementById(window_id).addEventListener('click', e => {
        e.preventDefault()
        document.getElementById(window_id).style.display = "none"; 
    })
}