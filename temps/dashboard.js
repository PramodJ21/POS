const list = document.getElementById('scrollable-list');
const items = list.getElementsByClassName('item');
let activeIndex = 0

const updateActiveIndex = (index) => {
    items[activeIndex].classList.remove('active');
    activeIndex = index;
    items[activeIndex].classList.add('active');
}

const scrollNext = () => {
    activeIndex = (activeIndex + 1) % items.length;
    updateActiveIndex(activeIndex);
}

const scrollPrevious = () => {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    updateActiveIndex(activeIndex);
}

list.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        scrollNext();
    } else {
        scrollPrevious();
    }
});