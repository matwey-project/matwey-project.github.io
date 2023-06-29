// counterMove();
//
// function counterMove() {
//     $('.input-counter').each(function () {
//         let slice = $(this);
//         slice.find('i').click(function () {
//             let value = parseInt(slice.find('input').val());
//             if ($(this).hasClass('less')) {
//                 value = value - 1;
//             } else if ($(this).hasClass('more')) {
//                 value = value + 1;
//             }
//             if (value < 1) {
//                 value = 1;
//             }
//             slice.find('input').val(value);
//         });
//     });
// }