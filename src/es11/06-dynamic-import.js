const btn = document.getElementById('btn');

btn.addEventListener('click', async function() {
    const module = await import('./modele.js');
    console.log(module);
    module.hello();
});