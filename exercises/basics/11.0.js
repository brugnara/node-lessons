function rnd() {
  return ~~(Math.random() * 256);
}

function rndIp() {
  return rnd() + '.' + rnd() + '.' + rnd() + '.' + rnd();
}

function getRandomStr() {
  switch (rnd() % 5) {
  case 0: return 'ERROR: Device %s shutted down abnormally';
  case 1: return 'WARN: Device sent a corrupted package. IP: %s';
  case 2: return 'INFO: Got good news from %s. It is working fine now.';
  case 3: return 'LOG: Nothing wrong today!';
  case 4: return 'DANGER: Device (%s) is not reachable since 4 days!';
  }
}

for (var i=0;i<50000;i++) {
  console.log(getRandomStr(), rndIp());
}
