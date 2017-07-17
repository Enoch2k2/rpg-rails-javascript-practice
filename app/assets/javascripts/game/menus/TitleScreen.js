class TitleScreen extends Window {
  constructor(x, y, width, height, background, border = false, borderColor = null, borderSize = null) {
    super(x, y, width, height);
    this.background = background;
    if(border){
      this.borderColor = borderColor;
      this.borderSize = borderSize;
    }
  }

  this.draw = () => {
    if(border){
      this.fillStyle = borderColor;
      this.fillRect(this.x - this.borderSize, this.y - this.borderSize, this.width + this.borderSize * 2, this.height + this.borderSize * 2);
    }
    this.fillStyle = background;
    this.fillRect(this.x, this.y, this.width, this.height);
    animate(this.draw)
  }
}
