async function injectContent() {
    let url = location.href;
    file = url.split('=');
    let view = (file[1] != undefined) ? file[1] : 'home'
    const resp = await fetch(`views/${view}.html`);
    const html = await resp.text();
    let inject = document.getElementById('content');
    inject.innerHTML = html;
}


function activeLink(){
    let url = location.href;
    let view = url.split('=');
    let sessao = (view[1] != undefined) ? view[1] : 'home';
    document.getElementById(sessao).className += ' active';
}

injectContent();
activeLink();