$(document).ready(function () {
    let displayValue = '';

    $('.number').on('click', function () {
        const number = $(this).text();
        displayValue += number;
        $('#display').val(displayValue);
    });

    $('.operator').on('click', function () {
        const operator = $(this).text();
        displayValue += operator;
        $('#display').val(displayValue);
    });

    $('.clear').on('click', function () {
        displayValue = '';
        $('#display').val('');
    });

    $('#calculate').on('click', function () {
        try {
            const result = eval(displayValue);
            if (isNaN(result) || !isFinite(result)) {
                $('#display').val('Error');
            } else {
                $('#display').val(result);
            }
        } catch (error) {
            $('#display').val('Error');
        }
    });
});
