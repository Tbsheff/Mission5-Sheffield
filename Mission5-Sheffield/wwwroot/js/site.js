// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Tyler Sheffield Mission 5
// Function to get values from the form and calculate the total
$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = parseFloat($('#hours').val());
        var hourlyRate = parseFloat($('#hourly-rate').text());
        // Validate the input
        if (isNaN(hours) || hours < 0) {
            alert("Please enter a positive number for hours.");
            return;
        }
        // output the total
        var total = hours * hourlyRate;
        $('#total').val(total.toFixed(2));
    });
});
