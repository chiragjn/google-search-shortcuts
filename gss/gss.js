(function () {
    let results = document.querySelectorAll('.rc .r h3');
    for (let i = 1; i < Math.min(results.length + 1, 11); i++) {
        results[i - 1].innerHTML = '[' + (i % 10) + '] ' + results[i - 1].innerHTML;
        results[i - 1] = results[i - 1].parentNode;
    };

    document.addEventListener('keyup', function (event) {
        tag = event.target.tagName.toUpperCase()
        if (event.isComposing || event.keyCode < 48 || event.keyCode > 57 || tag === 'INPUT' || tag === 'TEXTAREA') {
            return;
        }
        idx = event.keyCode === 48 ? 9 : event.keyCode - 49;
        if (idx < results.length) {
            results[idx].click();
        }
    });
})();