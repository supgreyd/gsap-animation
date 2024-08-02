<template>
  <div class="svg-container">
    <svg viewBox="0 0 100 100">
      <circle id="circle-1" cx="50" cy="50" r="40" stroke="grey" stroke-width="0.1px" fill="transparent"/>
      <circle id="circle-2" cx="50" cy="50" r="30" stroke="grey" stroke-width="0.1px" fill="transparent"/>
      <circle id="circle-3" cx="50" cy="50" r="20" stroke="grey" stroke-width="0.1px" fill="transparent"/>
      <image id="coin-1" href="/images/1.svg" x="25" y="25" height="10" width="10" style="opacity: 0;"/>
      <image id="coin-2" href="/images/2.svg" x="25" y="25" height="10" width="10" style="opacity: 0;"/>
      <image id="coin-3" href="/images/3.svg" x="25" y="25" height="10" width="10" style="opacity: 0;"/>
      <image id="coin-4" href="/images/4.svg" x="25" y="25" height="10" width="10" style="opacity: 0;"/>
      <image id="card" href="/images/card.svg" x="25" y="25" height="50" width="50"/>
    </svg>
  </div>
</template>

<script setup>
import {onMounted} from 'vue';

const {$gsap} = useNuxtApp()

const circles = [
  {selector: '#circle-1', cx: 50, cy: 50, r: 40},
  {selector: '#circle-2', cx: 50, cy: 50, r: 30},
  {selector: '#circle-3', cx: 50, cy: 50, r: 20}
];

const coins = [
  {selector: '#coin-1', targetIndex: 0, speed: 5},
  {selector: '#coin-2', targetIndex: 0, speed: 6},
  {selector: '#coin-3', targetIndex: 1, speed: 3},
  {selector: '#coin-4', targetIndex: 2, speed: 4}
];

onMounted(() => {
  const image = document.querySelector('#card');
  image.addEventListener('mouseenter', () => {
    $gsap.to(image, { duration: 1, rotation: 345, ease: "linear" });
  });
  image.addEventListener('mouseleave', () => {
    $gsap.to(image, { duration: 1, rotation: 360, ease: "linear" });
  });
  circles.forEach((circle, index) => {
    $gsap.fromTo(
        circle.selector,
        {opacity: 0, scale: 0.5, transformOrigin: "50% 50%"},
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.5,
        }
    );
  });

  let coinIndex = 0;

  $gsap.fromTo(
      '#card',
      {opacity: 0, scale: 0.5, transformOrigin: "50% 50%"},
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 1.5,
        rotation: 360,
        onComplete: () => {
          $gsap.to('#card', {
            y: -10,
            duration: 0.3,
            ease: "linear",
            yoyo: true,
            repeat: 7,
            onUpdate: () => {
              const cardY = $gsap.getProperty('#card', 'y');
              if (cardY < 0 && coinIndex < coins.length && $gsap.getProperty(coins[coinIndex].selector, 'opacity') === 0) {
                const coin = coins[coinIndex];
                const targetCircle = circles[coin.targetIndex];

                const angle = getRandomAngle();
                const targetX = targetCircle.cx + targetCircle.r * Math.cos(angle) - 30;
                const targetY = targetCircle.cy + targetCircle.r * Math.sin(angle) - 30;

                $gsap.fromTo(
                    coin.selector,
                    {
                      opacity: 1,
                      x: $gsap.getProperty('#card', 'x') + 25,
                      y: $gsap.getProperty('#card', 'y') + 25,
                    },
                    {
                      x: targetX,
                      y: targetY,
                      duration: 0.6,
                      ease: "bounce",
                      onComplete: () => {
                        coinIndex++;
                        animateCoinAroundCircle(coin, targetCircle, angle);
                      }
                    }
                );
              }
            }
          });
        }
      }
  );
});

function getRandomAngle() {
  const randomDivisor = Math.floor(Math.random() * 359) + 1;
  return Math.PI / randomDivisor;
}

function animateCoinAroundCircle(coin, circle, startAngle) {
  const numPoints = 359;
  const path = [];

  for (let i = 0; i < numPoints; i++) {
    const angle = startAngle + (i / numPoints) * 2 * Math.PI;
    const x = circle.cx + circle.r * Math.cos(angle) - 30;
    const y = circle.cy + circle.r * Math.sin(angle) - 30;
    path.push({ x, y });
  }

  $gsap.to(coin.selector, {
    duration: coin.speed,
    repeat: -1,
    ease: "linear",
    transformOrigin: "center center",
    motionPath: {
      path: path,
      curviness: 1,
    },
  });
}

</script>

<style scoped lang="scss">
.svg-container {
  width: 100%;
  max-height: 100vh;
  background-image: url("/images/bg.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>