import Ani from '../../assets/js/Ani'
var a = new Ani({
    targets: [
        {
            el: document.querySelector('.box1'),
            animationClassName: 'change'
        },
        {
            el: document.querySelector('.box2'),
            animationClassName: 'change'
        },
        {
            el: document.querySelector('.box3'),
            animationClassName: 'change'
        },
        {
            el: document.querySelector('.box4'),
            animationClassName: 'change'
        },
        {
            el: document.querySelector('.box5'),
            animationClassName: 'change'
        }
    ],
    count: 4,
    reverse: [2]
})