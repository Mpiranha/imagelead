(function () {
    $('.drop-icon').on('click', function () {
        $('.more-option').toggleClass('show');
    });

    $(document).on('click', function (event) {
        var trigger = $('.drop-icon');
        // console.log(trigger[0])
        // console.log(event.target)
        // console.log(!trigger.has(event.target).length)
        // console.log(trigger !== event.target)
        if (trigger[0] !== event.target && !trigger.has(event.target).length) {
            $('.more-option').removeClass('show');
        }
    });
})();