(function() {
	if (document.addEventListener === undefined) {
		var chrome = document.createElement('a'),
				firefox = document.createElement('a'),
				frag = document.createElement('div'),
				title = document.createElement('h1'),
				close = document.createElement('span');

		title.innerHTML = 'This website is designed for modern browsers.  For the best experience, please use one of the below.';
		title.setAttribute('style', 'font-size: 16px; line-height: 20px; width: 80%; margin: 0 0 0 10%;');
		chrome.href = 'https://www.google.com/chrome/browser/desktop/index.html';
		chrome.setAttribute('style', 'display: inline-block; margin: 5px;');
		chrome.innerHTML = 'Chrome';
		firefox.href = 'https://www.mozilla.org/en-US/firefox/new/';
		firefox.setAttribute('style', 'display: inline-block; margin: 5px;');
		firefox.innerHTML = 'Firefox';
		close.className = 'close-better-browser';
		close.setAttribute('style', 'display: block; position: absolute; top: 0; right: 0; height: 30px; width: 30px; background-color: white; text-align: center; cursor: pointer; font-family: sans-serif; line-height: 29px;');
		close.innerHTML = 'X';
		frag.className = 'download-better-browser';
		frag.setAttribute('style', 'dispay: block; position: fixed; top: 0; right: 0; left: 0; width: 100%; background: #939393; text-align: center;');

		close.attachEvent('onclick', function() {
			frag.parentNode.removeChild(frag);
		});

		frag.appendChild(title);
		frag.appendChild(close);
		frag.appendChild(chrome);
		frag.appendChild(firefox);

		document.getElementsByTagName('body')[0].appendChild(frag);
	}
})();