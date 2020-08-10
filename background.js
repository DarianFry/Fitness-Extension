var a1Timer = null;
var port = null;
var iconFlashTimer = null;

var HOUR_MS = 1000 * 60 * 60;

// Override from common.js
window.stopFlashingIcon = function() {
  window.clearTimeout(iconFlashTimer);
  chrome.browserAction.setIcon({'path': 'dumbbell16.png'});
};

// Override from common.js
window.flashIcon = function() {
  var flashes = 10;
  function flash() {
    if (flashes == 0) {
      stopFlashingIcon();
      return;
    }

    if (flashes % 2 == 0) {
      chrome.browserAction.setIcon({'path': 'dumbbell16-highlighted.png'});
    } else {
      chrome.browserAction.setIcon({'path': 'dumbbell16.png'});
    }
    flashes--;
    iconFlashTimer = window.setTimeout(flash, 500);
  }
  flash();
};

function setTimer(alarmHours, alarmMinutes) {
  var alarmTime = (alarmHours * 60 + alarmMinutes) * 60 * 1000;
  var d = new Date();
  var now = d.getHours() * HOUR_MS +
            d.getMinutes() * 60 * 1000 +
            d.getSeconds() * 1000;
  var delta = (alarmTime - now);

  if (delta >= -5000 && delta < 1000) {
    ringAlarm(alarmHours, alarmMinutes);
    if (port) {
      port.postMessage({'cmd': 'anim'});
    }
    return null;
  }

  if (delta < 0) {
    delta += HOUR_MS * 24;
  }
  if (delta >= 1000) {
    if (delta > HOUR_MS) {
      delta = HOUR_MS;
    }
    console.log('Timer set for ' + delta + ' ms');
    return window.setTimeout(resetTimers, delta);
  }

  return null;
};

function resetTimers() {
  if (a1Timer) {
    window.clearTimeout(a1Timer);
  }

  try {
    var a1_on = (localStorage['a1_on'] == 'true');
    var a1_tt = localStorage['a1_tt'] || DEFAULT_A1_TT;
    var a1_ampm = localStorage['a1_ampm'] || DEFAULT_A1_AMPM;
    if (a1_on) {
      var alarmHoursMinutes = parseTime(a1_tt, a1_ampm);
      var alarmHours = alarmHoursMinutes[0];
      var alarmMinutes = alarmHoursMinutes[1];
      a1Timer = setTimer(alarmHours, alarmMinutes);
    }
  } catch (e) {
    console.log(e);
  }

  if (a1_on) {
    chrome.browserAction.setIcon({'path': 'dumbbell16.png'});
  } else {
    chrome.browserAction.setIcon({'path': 'dumbbell16-disabled.png'});
  }
}

function onLocalStorageChange() {
  resetTimers();
}

function initBackground() {
  window.addEventListener('storage', onLocalStorageChange, false);

  chrome.runtime.onConnect.addListener(function(popupPort) {
    port = popupPort;
    port.onDisconnect.addListener(function() {
      port = null;
    });
  });
}

initBackground();
resetTimers();



