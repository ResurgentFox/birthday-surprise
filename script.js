(function () {
  let rotateY = 0, rotateX = 0;

  document.onkeydown = function (ev) {
    if (ev.key === 'ArrowLeft')
      rotateY -= 4;
    else if (ev.key === 'ArrowUp')
      rotateX += 4;
    else if (ev.key === 'ArrowRight')
      rotateY += 4;
    else if (ev.key === 'ArrowDown')
      rotateX -= 4;

    document.querySelector('.cube').style.transform =
      'rotateY(' + rotateY + 'deg)' +
      'rotateX(' + rotateX + 'deg)';
  };
})();
