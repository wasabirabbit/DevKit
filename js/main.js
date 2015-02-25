$(document).ready(function () {
    //Plugin check - flexslider
    if ($(".flexslider").length > 0) {
        if (!jQuery().flexslider) {
            $.getScript("/Scripts/jquery.flexslider-min.js", function () {
                initFlexSliderPlugin();
            });
        }
        else {
            initFlexSliderPlugin();
        }
    }
});