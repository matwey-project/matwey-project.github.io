import "magnific-popup";

// Image popups
$('#image-popups').magnificPopup({
    delegate: 'a',
    type: 'image',
    removalDelay: 500,
    callbacks: {
        beforeOpen: function () {
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    closeOnContentClick: true,
    midClick: true,
    gallery: {
        enabled: true
    }
});