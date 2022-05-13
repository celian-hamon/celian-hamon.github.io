let dark = true;
function main() {
    console.log("%cBienvenus " + "%csur " + "%cmon " + "%cCV", "color:#eb6f92; font-size: 3em;", "color:#f6c177; font-size: 3em;", "color:#ebbcba; font-size: 3em;", "color:#9ccfd8; font-size: 3em;");
    console.log("all icones from %chttps://icons8.com/", "color:#9ccfd8; font-size: 1.5em;");
    if (window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // if in light mode switch to dark mode
        switchTheme();
        console.log("%cMode " + "%cclair", "color:#eb6f92; font-size: 3em;", "color:#f6c177; font-size: 3em;");
    } else {
        // else if in dark mode just log
        console.log("%cMode " + "%cdark", "color:#eb6f92; font-size: 3em;", "color:#f6c177; font-size: 3em;");
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches && !dark) {
        switchTheme();
    } else if (!event.matches && dark) {
        switchTheme();
    }
});

function switchTheme() {
    switch (dark) {
        case true:
            document.documentElement.style.setProperty('--background-color', 'var(--rp-dawn-base)');
            document.documentElement.style.setProperty('--surface-color', 'var(--rp-dawn-surface)');
            document.documentElement.style.setProperty('--muted-color', 'var(--rp-dawn-muted)');
            document.documentElement.style.setProperty('--text-color', 'var(--rp-dawn-text)');
            document.documentElement.style.setProperty('--love-color', 'var(--rp-dawn-love)');
            document.documentElement.style.setProperty('--gold-color', 'var(--rp-dawn-gold)');
            document.documentElement.style.setProperty('--rose-color', 'var(--rp-dawn-rose)');
            document.documentElement.style.setProperty('--iris-color', 'var(--rp-dawn-iris)');
            document.documentElement.style.setProperty('--pine-color', 'var(--rp-dawn-pine)');
            document.documentElement.style.setProperty('--foam-color', 'var(--rp-dawn-foam)');
            document.documentElement.style.setProperty('--overlay-color', 'var(--rp-dawn-overlay)');
            dark = false;
            break;
        case false:
            document.documentElement.style.setProperty('--background-color', '');
            document.documentElement.style.setProperty('--surface-color', '');
            document.documentElement.style.setProperty('--muted-color', '');
            document.documentElement.style.setProperty('--text-color', '');
            document.documentElement.style.setProperty('--love-color', '');
            document.documentElement.style.setProperty('--gold-color', '');
            document.documentElement.style.setProperty('--rose-color', '');
            document.documentElement.style.setProperty('--iris-color', '');
            document.documentElement.style.setProperty('--pine-color', '');
            document.documentElement.style.setProperty('--foam-color', '');
            document.documentElement.style.setProperty('--overlay-color', '');
            dark = true;
            break;
    }
}
main();