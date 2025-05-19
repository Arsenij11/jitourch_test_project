class Cars{
    constructor() {
        this.prev = '1200x900.png';
        this.current = 'Rectangle 9.png';
        this.next = 'porsche.png';
    }
    go_prev() {
        const prev = this.prev;
        const next = this.next;
        const current = this.current;
        this.current = prev;
        this.next = current;
        this.prev = next;
        return this.current;
    }
    go_next() {
        const prev = this.prev;
        const next = this.next;
        const current = this.current;
        this.current = next;
        this.next = prev;
        this.prev = current;
        return this.current;
    }
}
const car = new Cars();

const picture = document.querySelector('.auto');
const strelka_vlevo = document.querySelector('.strelka_vlevo');
const strelka_vpravo = document.querySelector('.strelka_vpravo');

strelka_vlevo.addEventListener('click', (event) => {
    picture.setAttribute('src', `imgs/${car.go_prev()}`);
});
strelka_vpravo.addEventListener('click', (event) => {
    picture.setAttribute('src', `imgs/${car.go_next()}`);
});