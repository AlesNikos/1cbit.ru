// $(document).ready(function () {

//     var options = {
//         useEasing: true,
//         useGrouping: true,
//         separator: ',',
//         decimal: '.',
//         prefix: '',
//         suffix: '+'
//     };

//     let demo = new CountUp('count-1', 8);
//     let demo1 = new CountUp('count-2', 20, options);
//     // if (!demo.error) {
//     //     demo.start();
//     // } else {
//     //     console.error(demo.error);
//     // }

//     let target = $('.achievement .items');
//     let targetPos = target.offset().top;
//     let winHeight = $(window).height();
//     let scrollToElem = targetPos - winHeight;

//     $(window).scroll(function () {
//         var winScrollTop = $(this).scrollTop();
//         if (winScrollTop > scrollToElem) {
//             demo.start();
//             demo1.start();
//             // alert('test');
//             $(window).unbind('scroll');
//         }
//     });


// });