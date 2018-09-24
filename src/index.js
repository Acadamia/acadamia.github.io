function O(i) {
    return document.getElementById(i);
}

function titlescreenfadeoutsettings () {
    $('#titlescreen').fadeOut(300);
    setTimeout(settingsscreenfadein, 300);
}

function settingsscreenfadein () {
    O('settingsscreen').style.display = 'block';
    O('settingsheader').style.display = 'block';
    O('themesettings').style.display = 'inline-block';
    O('gradesettings').style.display = 'inline-block';
}

var passstate = 0;

function chatpasswordinputc () {
    if (passstate === 0) {
        passstate = 1;
    }
}
function chatpasswordinputd () {
    if (passstate === 1) {
        passstate = 2;
    }
}
function chatpasswordinputm () {
    if (passstate === 2) {
        passstate = 3;
        document.getElementById('topheader').style.backgroundColor = 'red';
    }
}

window.onload = passwordeventlisteners;
function passwordeventlisteners () {
    document.getElementById('chatroompassc').addEventListener('click', chatpasswordinputc);
    document.getElementById('chatroompassd').addEventListener('click', chatpasswordinputd);
    document.getElementById('chatroompassm').addEventListener('click', chatpasswordinputm);
}
