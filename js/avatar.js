function changeAvatar() {
  const avatar = document.getElementById('avatar');
  avatar.src = `https://www.gravatar.com/avatar/${getRandomInt(
    1,
    500
  )}?d=monsterid`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(() => {
  changeAvatar();
}, 5000);
