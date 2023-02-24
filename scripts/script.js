let arr = [{
        title: 'qwerty'
    },
    {
        title: 'block'
    },
    {
        title: 'uytre'
    },
    {
        title: 'yjxlh'
    },
    {
        title: 'jvdj'
    },
    {
        title: 'wsowjr'
    },
    {
        title: 'nismx'
    },
    {
        title: 'rignos'
    }
]

for (let i of arr) {
    document.write(`
    <diV class='block'>
        <h2>${i.title}</h2>
        <button value='width100'>100px</button>
        <button value='width200'>200px</button>
        <button value='width300'>300px</button>
        <button value='width400'>400px</button>
        <button value='width500'>500px</button>
        <button value='width600'>600px</button>
        <button class="color" value='red'>red</button>
        <button class="color" value='orange'>orange</button>
        <button class="color" value='yellow'>yellow</button>
        <button class="color" value='lime'>green</button>
        <button class="color" value='darkblue'>darkblue</button>
        <button class="color" value='purple'>purple</button>
    </diV>
    `);
}
let blocks = document.querySelectorAll('.block button')
for (let i of blocks) {
    i.addEventListener('click', () => {
            /*for (let item of blocks) {
                item.parentNode.classList.remove('width100');
                item.parentNode.classList.remove('width200');
                item.parentNode.classList.remove('width300');
                item.parentNode.classList.remove('width400');
                item.parentNode.classList.remove('width500');
                item.parentNode.classList.remove('width600')
            }*/
            event.target.parentNode.classList.toggle(event.target.value)
        }

    )
}
let coloring = document.querySelector('.block .color')
for (let i of coloring) {
    i.addEventListener('click', () => {
            event.target.parentNode.classList.toggle(event.target.value)
        }

    )
}