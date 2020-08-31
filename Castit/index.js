function d20()
{
  var x = document.getElementsByClassName("d20-res")[0];
  var r = Math.floor(Math.random()*20) + 1;
  x.textContent = r;
}
