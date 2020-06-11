var breakPoint1, breakPoint2, breakPoint3, breakPoint4;

const letterSpacingValue = -30;
const lineHeightValue = 0.56;

const Themes = {
	stock: {
		appBackground: '#0D0D0D',
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
		lineHeight = `${Math.round(parseInt(fontSize, 10) / lineHeightValue)}px`;
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
	addNavItems('Dribbble', 'https://dribbble.com/rtrikha');
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

	document.getElementById('header-nav').appendChild(logo);

	function addNavItems(target, link) {
		var anchorItems = document.createElement('a');
		anchorItems.classList.add('nav-text');
		anchorItems.innerHTML = target;
		anchorItems.href = link;
		anchorItems.target = 'blank';
		document.querySelector('.header-nav').appendChild(anchorItems);
	}

	addNavItems('About', '');

	function idSelector(idName) {
		return document.getElementById(idName);
	}
	idSelector(
		'logo'
	).outerHTML = `<svg id="e81md6xk4sbq1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="24" height="24"><style><![CDATA[#e81md6xk4sbq6_to {animation: e81md6xk4sbq6_to__to 1200ms linear 1 normal forwards}@keyframes e81md6xk4sbq6_to__to { 0% {transform: translate(0px,0px);animation-timing-function: cubic-bezier(0.645000,0.045000,0.355000,1)} 25% {transform: translate(0px,12px);animation-timing-function: cubic-bezier(0.645000,0.045000,0.355000,1)} 50% {transform: translate(12px,12px);animation-timing-function: cubic-bezier(0.645000,0.045000,0.355000,1)} 75% {transform: translate(12px,0px);animation-timing-function: cubic-bezier(0.645000,0.045000,0.355000,1)} 100% {transform: translate(0px,0px)} }#e81md6xk4sbq7_to {animation: e81md6xk4sbq7_to__to 1200ms linear 1 normal forwards}@keyframes e81md6xk4sbq7_to__to { 0% {transform: translate(-0.054582px,0px);animation-timing-function: cubic-bezier(0.645000,0.045000,0.355000,1)} 25% {transform: translate(-0.054582px,-12px);animation-timing-function: cubic-bezier(0.645000,0.045000,0.355000,1)} 50% {transform: translate(-12.054582px,-12px);animation-timing-function: cubic-bezier(0.645000,0.045000,0.355000,1)} 75% {transform: translate(-12.054582px,0px);animation-timing-function: cubic-bezier(0.645000,0.045000,0.355000,1)} 100% {transform: translate(-0.054582px,0px)} }]]></style><g id="e81md6xk4sbq2"><g id="e81md6xk4sbq3" transform="matrix(1 0 0 1 -160 -86)"><g id="e81md6xk4sbq4" transform="matrix(1 0 0 1 160 83)"><g id="e81md6xk4sbq5" transform="matrix(1 0 0 1 0 3)"><g id="e81md6xk4sbq6_to" transform="translate(0,0)"><circle id="e81md6xk4sbq6" r="4.888890" transform="translate(6,6)" fill="rgb(255,255,255)" fill-rule="evenodd" stroke="rgb(255,255,255)" stroke-width="2.222220"/></g><g id="e81md6xk4sbq7_to" transform="translate(-0.054582,0)"><circle id="e81md6xk4sbq7" r="4.888890" transform="translate(18,18)" fill="none" fill-rule="evenodd" stroke="rgb(255,255,255)" stroke-width="2.222220"/></g></g></g></g></g></svg>`;
	idSelector('header-nav').style.background = 'var(--a-b)';
	idSelector('header-nav').style.display = 'flex';
	idSelector('header-nav').style.position = 'relative';
	idSelector('header-nav').style.alignItems = 'center';
	idSelector('header-nav').style.paddingTop = '6vh';
	idSelector('header-nav').style.marginRight = 0;
	idSelector('header-nav').style.textDecoration = 'none';
	idSelector('header-nav').style.justifyContent = 'space-between';
}

// define the theme here

applyColourTheme('stock');

declareBreakpoints(1440, 900, 720, 560);

declareFontInBreakpoints('cta', '16px', '16px', '14px', '14px', '14px');
declareFontInBreakpoints('h', '18px', '18px', '18px', '16px', '16px');
declareFontInBreakpoints('sh', '12px', '12px', '12px', '12px', '12px');
declareFontInBreakpoints('nt', '12px', '12px', '12px', '11px', '11px');
declareFontInBreakpoints('misc', '13px', '13px', '13px', '13px', '12px');



callHeader();
callFooter();
