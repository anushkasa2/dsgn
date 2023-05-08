addListener("notes", "notes-popup", "close_notes")
changeResponse("text_display", "week_2_header", "week_2")
changeResponse("text_display", "week_3_header", "week_3")
changeResponse("text_display", "week_4_header", "week_4")
changeResponse("text_display", "week_5_header", "week_5")
changeResponse("text_display", "week_6_header", "week_6")
changeResponse("text_display", "week_8_header", "week_8")
changeResponse("text_display", "week_10_header", "week_10")
changeResponse("text_display", "week_11_header", "week_11")
changeResponse("text_display", "week_13_header", "week_13")
changeResponse("text_display", "week_14_header", "week_14")
changeResponse("text_display", "week_15_header", "week_15")


function addListener(icon_id, window_id, close_id) {

    document.getElementById(icon_id).addEventListener('click', e => {
        e.preventDefault()
        document.getElementById(window_id).style.display = "block"; 
    })

    document.getElementById(close_id).addEventListener('click', e => {
        e.preventDefault()
        document.getElementById(window_id).style.display = "none"; 
    })
}; 

function changeResponse(div_id, header_id, response_id) {

    document.getElementById(header_id).addEventListener('click', e => {
        e.preventDefault()
        var children = document.getElementById(div_id).children;
        for (var i = 0; i < children.length; i++) {
            children[i].style.display = "none";
        }
        document.getElementById(response_id).style.display = "block"; 
    })
};
