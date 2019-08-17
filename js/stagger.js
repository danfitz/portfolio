const staggerVisualizerEl = document.querySelector('.staggerVisualizer');
const fragment = document.createDocumentFragment();
const grid = [17, 17];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
    fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
    targets: '.staggerVisualizer div',
    easing: 'easeInOutSine',
    delay: anime.stagger(50),
    loop: true,
    autoplay: false
})
    .add({
        translateX: [
            { value: anime.stagger('-.05rem', { grid: grid, from: 'center', axis: 'x' }) },
            { value: anime.stagger('.05rem', { grid: grid, from: 'center', axis: 'x' }) }
        ],
        translateY: [
            { value: anime.stagger('-.05rem', { grid: grid, from: 'center', axis: 'y' }) },
            { value: anime.stagger('.05rem', { grid: grid, from: 'center', axis: 'y' }) }
        ],
        duration: 1000,
        scale: .5,
        delay: anime.stagger(100, { grid: grid, from: 'center' })
    })
    .add({
        translateX: () => anime.random(-1, 1),
        translateY: () => anime.random(-1, 1),
        delay: anime.stagger(5, { from: 'last' })
    })
    .add({
        rotate: anime.stagger([90, 0], { grid: grid, from: 'center' }),
        delay: anime.stagger(50, { grid: grid, from: 'center' })
    })
    .add({
        translateX: 0,
        translateY: 0,
        scale: .5,
        scaleX: 1,
        rotate: 180,
        duration: 1000,
        delay: anime.stagger(100, { grid: grid, from: 'center' })
    })
    .add({
        scaleY: 1,
        scale: 1,
        delay: anime.stagger(20, { grid: grid, from: 'center' })
    })

staggersAnimation.play();