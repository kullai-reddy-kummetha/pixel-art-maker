// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


// the following code is just to make the table without other function enable.

var color, height, width;
const table = $("#pixelCanvas");
const td = $("td");


function makeGrid() {
    // making the table according to user given requirement
    resetTable();        //This line is used to reset the table
    height= $("#inputHeight").val();
    width = $("#inputWeight").val();
    color = $("#colorPicker").val();
    $(table).css("display", "inline-block");
    for(var i = 0; i < height; i++) {
        table.append("<tr>");
        for(var j = 0; j < width; j++) {
            table.append("<td></td>");
        }
        table.append("</tr>");
    }

    colorGrid();

    $("td").dblclick(function removeColor() {   
    /*This function will activate if we double click on the table. 
    It will remove the color on the the particular grid
    */
        color = $("#colorPicker").val();
        if($(this).attr("style")) {
            $(this).removeAttr("style")
        }
    });
}

function resetTable(){
    //This function is used to reset the table. When reset button is clicked this function will enable
    $(table).empty();
    height = 0;
    width = 0;
    $("td").css('background-color', "");
}

function colorGrid() {
    $(document).on("click", "td" , function() {
          var color = $("#colorPicker").val();
          $(this).css('background-color',color);
        });
}
