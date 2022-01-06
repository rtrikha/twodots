var breakPoint1, breakPoint2, breakPoint3, breakPoint4;

const letterSpacingValue = -40;
const lineHeightValue = 1.8;

const Themes = {
	stock: {
		appBackground: '#000',
		foregroundHigh: '#FFFFFF',
		foregroundMed: '#A1A1A6',
		foregroundLow: '#4C4C4E',
		backgroundHigh: '#4C4C4E',
		backgroundMed: '#1D1D1F',
		backgroundLow: ' #000000',
		toneForeground: '#6E6E73',
		toneBackground: '#7A849D',
	},
	gotham: {
		appBackground: '#0A0F14',
		foregroundHigh: '#98D1CE',
		foregroundMed: '#EDB54B',
		foregroundLow: '#C33027',
		foregroundInverted: '#000D18',
		backgroundHigh: '#093748',
		backgroundMed: '#081F2D',
		backgroundLow: ' #10151B',
		backgroundInverted: '#8FAF9F',
	},
	warmSnow: {
		appBackground: '#FFFDFA',
		foregroundHigh: '#2A2826',
		foregroundMed: '#54504C',
		foregroundLow: '#BDB8B8',
		foregroundInverted: '#000D18',
		backgroundHigh: '#093748',
		backgroundMed: '#081F2D',
		backgroundLow: '#fff',
		backgroundInverted: '#8FAF9F',
	},
};

window.applyColourTheme = function (themeName) {
	document.documentElement.style.setProperty('--a-b', Themes[themeName].appBackground);
	document.documentElement.style.setProperty('--f-h', Themes[themeName].foregroundHigh);
	document.documentElement.style.setProperty('--f-m', Themes[themeName].foregroundMed);
	document.documentElement.style.setProperty('--f-l', Themes[themeName].foregroundLow);
	document.documentElement.style.setProperty('--b-h', Themes[themeName].backgroundHigh);
	document.documentElement.style.setProperty('--b-m', Themes[themeName].backgroundMed);
	document.documentElement.style.setProperty('--b-l', Themes[themeName].backgroundLow);
	document.documentElement.style.setProperty('--t-f', Themes[themeName].toneForeground);
	document.documentElement.style.setProperty('--t-b', Themes[themeName].toneBackground);
};

function declareBreakpoints(xl, l, m, s) {
	breakPoint1 = xl;
	breakPoint2 = l;
	breakPoint3 = m;
	breakPoint4 = s;
}

function declareFontInBreakpoints(fontType, fontSize1, fontSize2, fontSize3, fontSize4, fontSize5) {
	var lineHeight;
	var letterSpacing;
	function manipluateAttributes() {
		document.documentElement.style.setProperty(`--l-s-${fontType}`, letterSpacing);
		document.documentElement.style.setProperty(`--l-h-${fontType}`, lineHeight);
	}
	function declatreAttributes(fontSize) {
		lineHeight = `${Math.round(parseInt(fontSize, 10) * lineHeightValue)}px`;
		letterSpacing = `${(parseInt(fontSize, 10) / letterSpacingValue).toFixed(1)}px`;
	}
	if (screen.width >= breakPoint1) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize1);
		declatreAttributes(fontSize1);
		manipluateAttributes();
	} else if (screen.width < breakPoint1 && screen.width > breakPoint2) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize2);
		declatreAttributes(fontSize2);
		manipluateAttributes();
	} else if (screen.width < breakPoint2 && screen.width > breakPoint3) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize3);
		declatreAttributes(fontSize3);
		manipluateAttributes();
	} else if (screen.width < breakPoint3 && screen.width > breakPoint4) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize4);
		declatreAttributes(fontSize4);
		manipluateAttributes();
	} else if (screen.width < breakPoint4) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize5);
		declatreAttributes(fontSize5);
		manipluateAttributes();
	}
}

function callFooter() {
	function addNavItems(target, link) {
		var anchorItems = document.createElement('a');
		anchorItems.classList.add('nav-text');
		anchorItems.innerHTML = target;
		anchorItems.href = link;
		anchorItems.target = 'blank';
		document.querySelector('.footer-nav').appendChild(anchorItems);
	}

	addNavItems('GitHub', 'https://github.com/rtrikha');
	addNavItems('Medium', 'https://medium.com/@rtrikha');

	document.querySelector('.footer-nav').id = 'footer-nav';

	function idSelector(idName) {
		return document.getElementById(idName);
	}

	idSelector('footer-nav').style.background = 'var(--a-b)';
	idSelector('footer-nav').style.display = 'flex';
	idSelector('footer-nav').style.position = 'fixed';
	idSelector('footer-nav').style.bottom = '0vh';
	idSelector('footer-nav').style.marginRight = '0';
	idSelector('footer-nav').style.justifyContent = 'flex-end';
}

function callHeader() {
	document.querySelector('.header-nav').id = 'header-nav';

	var logo = document.createElement('div');
	logo.classList.add('logo');
	logo.id = 'logo';

	var logoWrapper = document.createElement('div');
	logoWrapper.classList.add('logo-wrapper');
	logoWrapper.id = 'logo-wrapper';

	document.getElementById('header-nav').appendChild(logoWrapper);
	document.getElementById('logo-wrapper').appendChild(logo);

	function addNavItems(target, link) {
		var anchorItems = document.createElement('a');
		anchorItems.classList.add('nav-text');
		anchorItems.innerHTML = target;
		anchorItems.href = link;
		anchorItems.target = 'blank';
		document.querySelector('.header-nav').appendChild(anchorItems);
	}

	function idSelector(idName) {
		return document.getElementById(idName);
	}

	idSelector(
		'logo'
	).outerHTML = `<svg id="1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="24" height="24"><style><![CDATA[#e1f34n7zt81l6_to {animation: e1f34n7zt81l6_to__to 3000ms linear 1 normal forwards}@keyframes e1f34n7zt81l6_to__to { 0% {transform: translate(0px,0px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 10% {transform: translate(0px,12px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 20% {transform: translate(12px,12px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 30% {transform: translate(12px,0px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 40% {transform: translate(0px,0px)} 100% {transform: translate(0px,0px)} }#e1f34n7zt81l7_to {animation: e1f34n7zt81l7_to__to 3000ms linear 1 normal forwards}@keyframes e1f34n7zt81l7_to__to { 0% {transform: translate(0px,0px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 10% {transform: translate(0px,-12px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 20% {transform: translate(-12px,-12px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 30% {transform: translate(-12px,0px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 40% {transform: translate(0px,0px)} 100% {transform: translate(0px,0px)} }]]></style><g id="e1f34n7zt81l2"><g id="e1f34n7zt81l3" transform="matrix(1 0 0 1 -160 -86)"><g id="e1f34n7zt81l4" transform="matrix(1 0 0 1 160 83)"><g id="e1f34n7zt81l5" transform="matrix(1 0 0 1 0 3)"><g id="e1f34n7zt81l6_to" transform="translate(0,0)"><circle id="e1f34n7zt81l6" r="4.888890" transform="translate(6,6)" fill="rgb(255,255,255)" fill-rule="evenodd" stroke="rgb(255,255,255)" stroke-width="2.222220"/></g><g id="e1f34n7zt81l7_to" transform="translate(0,0)"><circle id="e1f34n7zt81l7" r="4.888890" transform="translate(18,18)" fill="none" fill-rule="evenodd" stroke="rgb(255,255,255)" stroke-width="2.222220"/></g></g></g></g></g></svg>`;
	idSelector('header-nav').style.background = 'var(--a-b)';
	idSelector('header-nav').style.display = 'flex';
	idSelector('header-nav').style.position = 'relative';
	idSelector('header-nav').style.alignItems = 'center';
	idSelector('header-nav').style.paddingTop = '8vh';
	idSelector('header-nav').style.marginRight = 0;
	idSelector('header-nav').style.textDecoration = 'none';
	idSelector('header-nav').style.justifyContent = 'space-between';
	idSelector('logo-wrapper').style.padding = '20px';
	idSelector('logo-wrapper').style.cursor = 'pointer';
	idSelector('logo-wrapper').onclick = function () {
		changeTheme();
	};
	idSelector('logo-wrapper').style.paddingLeft = '0px';

	function changeTheme() {
		if (document.getElementById('2') == null && document.getElementById('3') == null) {
			applyColourTheme('warmSnow');

			document.getElementById(
				'1'
			).outerHTML = `<svg id="2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="24" height="24"><style><![CDATA[#evhp9hzm9nkc6_to {animation: evhp9hzm9nkc6_to__to 600ms linear 1 normal forwards}@keyframes evhp9hzm9nkc6_to__to { 0% {transform: translate(0px,0px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 50% {transform: translate(0px,12px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 100% {transform: translate(12px,12px)} }#evhp9hzm9nkc7_to {animation: evhp9hzm9nkc7_to__to 600ms linear 1 normal forwards}@keyframes evhp9hzm9nkc7_to__to { 0% {transform: translate(0px,0px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 50% {transform: translate(0px,-12px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 100% {transform: translate(-12px,-12px)} }]]></style><g id="evhp9hzm9nkc2"><g id="evhp9hzm9nkc3" transform="matrix(1 0 0 1 -160 -86)"><g id="evhp9hzm9nkc4" transform="matrix(1 0 0 1 160 83)"><g id="evhp9hzm9nkc5" transform="matrix(1 0 0 1 0 3)"><g id="evhp9hzm9nkc6_to" transform="translate(0,0)"><circle id="evhp9hzm9nkc6" r="4.888890" transform="translate(6,6)" fill="rgb(0,0,0)" fill-rule="evenodd" stroke="rgb(0,0,0)" stroke-width="2.222220"/></g><g id="evhp9hzm9nkc7_to" transform="translate(0,0)"><circle id="evhp9hzm9nkc7" r="4.888890" transform="translate(18,18)" fill="none" fill-rule="evenodd" stroke="rgb(0,0,0)" stroke-width="2.222220"/></g></g></g></g></g></svg>`;
		} else if (document.getElementById('1') == null && document.getElementById('3') == null) {
			console.log('b');
			applyColourTheme('stock');

			document.getElementById(
				'2'
			).outerHTML = `<svg id="3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="24" height="24"><style><![CDATA[#etz1smyjhqj6_to {animation: etz1smyjhqj6_to__to 600ms linear 1 normal forwards}@keyframes etz1smyjhqj6_to__to { 0% {transform: translate(12px,12px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 50% {transform: translate(12px,0px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 100% {transform: translate(0px,0px)} }#etz1smyjhqj7_to {animation: etz1smyjhqj7_to__to 600ms linear 1 normal forwards}@keyframes etz1smyjhqj7_to__to { 0% {transform: translate(-12px,-12px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 50% {transform: translate(-12px,0px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 100% {transform: translate(0px,0px)} }]]></style><g id="etz1smyjhqj2"><g id="etz1smyjhqj3" transform="matrix(1 0 0 1 -160 -86)"><g id="etz1smyjhqj4" transform="matrix(1 0 0 1 160 83)"><g id="etz1smyjhqj5" transform="matrix(1 0 0 1 0 3)"><g id="etz1smyjhqj6_to" transform="translate(12,12)"><circle id="etz1smyjhqj6" r="4.888890" transform="translate(6,6)" fill="rgb(255,255,255)" fill-rule="evenodd" stroke="rgb(255,255,255)" stroke-width="2.222220"/></g><g id="etz1smyjhqj7_to" transform="translate(-12,-12)"><circle id="etz1smyjhqj7" r="4.888890" transform="translate(18,18)" fill="none" fill-rule="evenodd" stroke="rgb(255,255,255)" stroke-width="2.222220"/></g></g></g></g></g></svg>`;
		} else if (document.getElementById('1') == null && document.getElementById('2') == null) {
			console.log('c');
			applyColourTheme('warmSnow');

			document.getElementById(
				'3'
			).outerHTML = `<svg id="2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="24" height="24"><style><![CDATA[#evhp9hzm9nkc6_to {animation: evhp9hzm9nkc6_to__to 600ms linear 1 normal forwards}@keyframes evhp9hzm9nkc6_to__to { 0% {transform: translate(0px,0px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 50% {transform: translate(0px,12px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 100% {transform: translate(12px,12px)} }#evhp9hzm9nkc7_to {animation: evhp9hzm9nkc7_to__to 600ms linear 1 normal forwards}@keyframes evhp9hzm9nkc7_to__to { 0% {transform: translate(0px,0px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 50% {transform: translate(0px,-12px);animation-timing-function: cubic-bezier(0.860000,0,0.070000,1)} 100% {transform: translate(-12px,-12px)} }]]></style><g id="evhp9hzm9nkc2"><g id="evhp9hzm9nkc3" transform="matrix(1 0 0 1 -160 -86)"><g id="evhp9hzm9nkc4" transform="matrix(1 0 0 1 160 83)"><g id="evhp9hzm9nkc5" transform="matrix(1 0 0 1 0 3)"><g id="evhp9hzm9nkc6_to" transform="translate(0,0)"><circle id="evhp9hzm9nkc6" r="4.888890" transform="translate(6,6)" fill="rgb(0,0,0)" fill-rule="evenodd" stroke="rgb(0,0,0)" stroke-width="2.222220"/></g><g id="evhp9hzm9nkc7_to" transform="translate(0,0)"><circle id="evhp9hzm9nkc7" r="4.888890" transform="translate(18,18)" fill="none" fill-rule="evenodd" stroke="rgb(0,0,0)" stroke-width="2.222220"/></g></g></g></g></g></svg>`;
		}
	}
}

// define the theme here

applyColourTheme('stock');

declareBreakpoints(1440, 900, 720, 560);

declareFontInBreakpoints('cta', '16px', '16px', '14px', '14px', '14px');
declareFontInBreakpoints('h', '24px', '24px', '22px', '20px', '20px');
declareFontInBreakpoints('sh', '14px', '14px', '14px', '13px', '13px');
declareFontInBreakpoints('nt', '12px', '12px', '12px', '11px', '11px');
declareFontInBreakpoints('body-1', '14px', '14px', '14px', '13px', '13px');
declareFontInBreakpoints('body-2', '13px', '13px', '13px', '12px', '12px');

callHeader();
callFooter();
