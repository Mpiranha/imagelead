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

    $('#workspace-form').on('submit', function (event) {
        event.preventDefault();
        // let value = $('#workspace-input').val();
        // if (value.length > 0) {
        //     workspaces.push({
        //         name: value
        //     });
            $('#modal-create').modal('hide');
            $('#workspace-input').val('');
            $('.workspaces-wrap').css('display', 'flex');
            $('.add-workspace-wrap').css('display', 'none');
            // console.log(workspaces);
        // } else {
        //     $('.error').text('Please enter a name');
        //     $('.workspace-input').focus();
        // }
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

    $('.btn-share-now').on('click', function () {
        $('.shade').addClass('show-action-share');
    })

})();