// paintWorklet.js
class CardFlipPainter {
    static get inputProperties() {
      return ["--card-rotation"];
    }
  
    paint(ctx, geom, properties) {
      const rotation = properties.get("--card-rotation").toString();
      ctx.clearRect(0, 0, geom.width, geom.height);
      ctx.fillStyle = "#3498db";
      ctx.fillRect(0, 0, geom.width, geom.height);
      ctx.fillStyle = "#e74c3c";
      ctx.save();
      ctx.translate(geom.width / 2, geom.height / 2);
      ctx.rotate((parseFloat(rotation) || 0) * (Math.PI / 180));
      ctx.fillRect(-geom.width / 2, -geom.height / 2, geom.width, geom.height);
      ctx.restore();
    }
  }
  
  registerPaint("card-flip", CardFlipPainter);
  