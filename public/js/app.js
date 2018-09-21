$(document).ready(function() {
    $("div.value-item").hide();
    $("div.value-item#community").show();

    $("input[name$='values']").click(function() {
        var selected = $(this).val();
        $("div.value-item").hide();
        $("div.value-item#" + selected).show();
    });
});