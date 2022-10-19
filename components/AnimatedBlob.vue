<template>
  <canvas id="canvas" width="400" height="400"></canvas>
</template>

<script>
export default {
  mounted() {
    let layout = new rive.Layout({
      fit: rive.Fit.Contain,
      minX: 250,
      minY: 250,
      maxX: 400,
      maxY: 400,
    });
    new rive.Rive({
      // src: "https://cdn.rive.app/animations/vehicles.riv",
      src: "new_file-9.riv",
      // src: "animation.riv",
      layout: layout,

      // Or the path to a local Rive asset
      // src: './example.riv',
      canvas: document.getElementById("canvas"),
      autoplay: true,
    });
  },
};
</script>

<style>
</style>
