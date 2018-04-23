var buttons = document.getElementsByTagName('button');

for (var thisButton = 0; thisButton < buttons.length; thisButton++) {
  buttons[thisButton].onmousemove = function(event) {
    let x = event.pageX - this.offsetLeft;
    let y = event.pageY - this.offsetTop;
    
    this.style.setProperty('--x', x + 'px');
    this.style.setProperty('--y', y + 'px');
  }
}