<template>
  <div class="fullscreen">
    <div id="pt" class="superimposed fullscreen" style="pointer-events: all;"></div>

    <div
      style="width: 100vw; padding-top: 5vh; display: flex; align-items:center; justify-content: space-around;"
      class="superimposed"
    >
      <h1>Curiosity - Creativity - Contribution</h1>
    </div>

    <div
      style="width: 100vw; padding-top:20vh; display: flex; align-items:center; justify-content:center;"
      class="superimposed"
    >
      <p id="typed"></p>
    </div>

    <div
      style="width: 100vw; padding-top:60vh; display: flex; align-items:center; justify-content: space-around;"
      class="superimposed"
    >
      <a href="/about" style="color: inherit; text-decoration: none;"><button class="btn">About</button></a>

      <a href="/projects" style="color: inherit; text-decoration: none;"><button class="btn">Projects</button></a>

      <a href="/cv" style="color: inherit; text-decoration: none;"><button class="btn">CV</button></a>
    </div>

    <div
      style="width: 100vw; padding-top:80vh; display: flex; justify-content: center;"
      class="superimposed"
    >
      <g-image src="~/assets/prof_sq.png" style="height: 50px; width: 50px; border-radius: 50%; border: 2px white solid;" alt="Me" />

        <p style="padding-top: 13px; font-size: 1em; padding-left: 12px;">Theodoros Ntakouris</p>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js'
import {Pt, Group, CanvasSpace, Geom, Curve, Form, VisualForm} from 'pts'

export default {
  metaInfo: {
    title: "Personal Website",
    description: "Curiosity - Creativity - Contribution. Software and Machine Learning Engineering.",
    meta: [
      { property: "og:title", content: "Theodoros Ntakouris" },
      { property: "og:type", content: "website" }
    ]
  },
  mounted: function() {
    new Typed("#typed", {
      strings: [
        "Software and ML Engineering.",
        "Software and ML Engineering.",
        "Deep Learning Experiments.",
        "Autonomous Systems.",
        "Unmanned Aviation.",
        "Open Source Software and Research."
      ],
      typeSpeed: 30,
      startDelay: 1500,
      loop: true,
      showCursor: false
    });

    var space = new CanvasSpace("#pt")
    space.setup({bgcolor: "#112233"})

    var form = space.getForm()
    var chain = new Group()

    space.add({
      animate: (time, ftime, context) => {
        if (chain.length > 30 && chain.length % 3 === 0) chain.splice(0, 3);

        for (let i = 4, len = chain.length; i < len; i += 3) {
          chain[i].rotate2D(i % 7 === 0 ? 0.002 : -0.003, chain[i - 1]);

          chain[i - 2].to(Geom.interpolate(chain[i], chain[i - 1], 2));
        }

        form.strokeOnly("#f03", 10, "round").line(Curve.bezier(chain));
        form.strokeOnly("rgba(255,255,255,.3)", 1).line(chain);
        form.fillOnly("#fff").points(chain, 1, "circle");
      },

      action: (type, px, py) => {
        if (type == "move") {
          let p = new Pt(px, py);

          if (chain.length < 1) {
            chain.push(p);
            return;
          }

          if (p.$subtract(chain.q1).magnitudeSq() > 900) {
            if (chain.length === 4) {
              chain.push(p);
              chain.q3.to(Geom.interpolate(chain.q1, chain.q2, 2));
            } else if (chain.length > 4 && chain.length % 3 === 0) {
              chain.push(p);
              chain.push(Geom.interpolate(chain.q2, chain.q1, 2));
            } else {
              chain.push(p);
            }
          }
        }
      }
    });

    space
      .bindMouse()
      .bindTouch()
      .play();
  }
};
</script>

<style scoped>

html,
body {
  height: 100vh;
  width: 100vh;
  margin: 0;
}

.fullscreen {
  width: 100vw;
  height: 100vh;
  background-color: #112233;
}

.superimposed {
  position: absolute;
  z-index: 1;
}

.b {
  pointer-events: all;
  position: absolute;
  top: 66%;
  left: 20%;
  width: 200px;
}

.btn {
  background-color: transparent;
  border: 1px solid white;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 28px;
  padding: 16px 31px;
  text-decoration: none;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, white 50%, #112233 50%);
  transition: background-position 0.2s ease-in-out;
  width: 200px;
  pointer-events: all;
  background-position: 100% 0;
}

.btn:hover {
  background-position: 0 0;
  color: #112233;
}

h1,
div,
p {
  pointer-events: none;
}

h1 {
  font-size: 4em;
  color: white;
}

p {
  font-size: 2em;
  color: white;
}

@media only screen and (max-width: 1068px) {
  h1 {
    font-size: 3.5em;
  }

  p {
    font-size: 2em;
  }

  .btn {
    font-size: 28px;
  }
}

@media only screen and (max-width: 937px) {
  h1 {
    font-size: 2.5em;
  }

  p {
    font-size: 1.5em;
  }
}

@media only screen and (max-width: 667px) {
  h1 {
    font-size: 2em;
  }

  p {
    font-size: 1.5em;
  }
}

@media only screen and (max-width: 535px) {
  h1 {
    font-size: 1.5em;
  }

  .btn {
    font-size: 20px;
  }
}

@media only screen and (max-width: 400px) {
  h1 {
    font-size: 1em;
  }

  p {
      font-size: 1em;
  }
}
</style>
