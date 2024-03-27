module.exports = {
  formatVariable(prefix, variable) {
    const formattedVariable = variable
      .toLowerCase()
      .split("-")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.substr(1, word.length).toLowerCase()
      )
      .join("");
    return prefix + formattedVariable;
  },
  applyText(canvas, text, defaultFontSize, width, font) {
    const ctx = canvas.getContext("2d");
    do {
      ctx.font = `${(defaultFontSize -= 1)}px ${font}`;
    } while (ctx.measureText(text).width > width);
    return ctx.font;
  },
};
