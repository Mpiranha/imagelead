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

    $('.btn-add-pixel').on('click', function () {
        $('.shade').addClass('show-action');
    });

    $('.visibility-icon').on('click', function () {
        $('.shade').addClass('show-action');
    });

    $('.btn-cancel').on('click', function () {
        $('.shade').removeClass('show-action');
    });

    $('.edit-banner').on('click', function () {
        $('.shade').removeClass('show-action');
        $('.shade').addClass('show-action-edit');
    });
    $('.btn-cancel-sm').on('click', function () {
        $('.shade').removeClass('show-action-edit');
        $('.shade').addClass('show-action');
    });

    $('#cancel-publish').on('click', function () {
        $('.shade').removeClass('show-action-publish');
        //$('.shade').addClass('show-action');
    });

    $('#cancel-share').on('click', function () {
        $('.shade').removeClass('show-action-share');
        //$('.shade').addClass('show-action');
    });

})();