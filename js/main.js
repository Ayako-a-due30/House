// 'use strict'; 
// {
//     // 建築事例を動画と重ねる
//     const showProject = (entries) => {
//         const keyframes = {
//             translate:['200px 0',0],
//         }
//         entries[0].target.animate(keyframes,600);
//         console.log(entries[0].target);
//     };
//     const projectObserver = new IntersectionObserver(showProject);
//     projectObserver.observe(document.querySelector('#project'));
// }