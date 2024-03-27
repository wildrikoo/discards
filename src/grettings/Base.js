const { createCanvas, loadImage, registerFont } = require("canvas");

registerFont("./assets/fonts/impact.ttf", { family: "Impact" });
registerFont("./assets/fonts/Montserrat.ttf", { family: "Montserrat" });
registerFont("./assets/fonts/Poppins.ttf", { family: "Poppins" });

module.exports = class Greetings {
  constructor() {
    this.userName = "User Name";
    this.guildName = "Guild Name";
    this.backgroundImage = `${__dirname}/../../../assets/images/default_bg.png`;
    this.overlayImage = `${__dirname}/../../../assets/images/default_overlay.png`;
    this.avatar = `${__dirname}/../../../assets/images/default_dp.png`;
    this.opacity = "0.8";
    this.color = "#FFFFFF";
  }

  setUserName(value) {
    this.userName = value;
    return this;
  }

  setGuildName(value) {
    this.guildName = value;
    return this;
  }

  setAvatar(value) {
    this.avatar = value;
    return this;
  }

  setColor(value) {
    this.color = value;
    return this;
  }

  setBackground(value) {
    this.backgroundImage = value;
    return this;
  }

  setOverlay(value) {
    this.overlayImage = value;
    return this;
  }

  setOpacity(value) {
    this.opacity = value;
    return this;
  }

  async toAttachment() {
    const canvasWidth = 1080;
    const canvasHeight = 420;

    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext("2d");

    const guildName = this.textMessage.replace(/{server}/g, this.guildName);

    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let background = await loadImage(this.backgroundImage);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    let overlay = await loadImage(this.overlayImage);
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;

    let avatar = await loadImage(this.avatar);
    ctx.drawImage(avatar, 200, 200, 107, 109);

    return canvas;
  }
};
