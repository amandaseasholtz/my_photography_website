(function ($) {

    $(document).ready(function () {
        /**
         * Hack for fixing blank spaces inside textareas.
         */
        $('textarea').each(
            function (index) {
                var textarea = $(this);
                var value = textarea.val().trim();
                if (!value) {
                    textarea.val('');
                }
            }
        );
    });

})(jQuery);