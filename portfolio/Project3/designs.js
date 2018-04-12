// Select color input (jQuery)
// Select size input (jQuery)

// When size is submitted by the user, call makeGrid()
    $('#sizePicker').submit(function() {
        event.preventDefault();
        height = $('#inputHeight').val();
        width = $('#inputWidth').val();
        makeGrid(height, width);
    });

// function makeGrid()

function makeGrid(x, y) {
    $('tr').remove();

    // project specifications to declare constants
    const table = '#pixelCanvas';
    const row = '<tr></tr>';
    const col = '<td></td>';

    // nested for loops dynamically draw grid per user inputs
    for (let n = 1; n <= x; n++) {
        $(table).append(row);
        for (let m = 1; m <= y; m++) {
            $('tr').last().append(col);
        }
    }
    // onClick event listener for applying color
    $('td').click(function applyColor() {
        const color = $('#colorPicker').val();

        // condition to remove color; else add color
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        }
        else {
            $(this).attr('style', 'background-color: ' + color);
        }
    });
};
