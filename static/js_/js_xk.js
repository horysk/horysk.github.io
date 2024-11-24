document.querySelectorAll('.truck-button').forEach(button => {
    button.addEventListener('click', e => {
  
      e.preventDefault();
  
      let box = button.querySelector('.box'),
        truck = button.querySelector('.truck');
  
      if (!button.classList.contains('done')) {
  
        if (!button.classList.contains('animation')) {
  
          button.classList.add('animation');
  
          gsap.to(button, {
            '--box-s': 1,
            '--box-o': 1,
            duration: .3,
            delay: .5
          });
  
          gsap.to(box, {
            x: 0,
            duration: .4,
            delay: .7
          });
  
          gsap.to(button, {
            '--hx': -5,
            '--bx': 50,
            duration: .18,
            delay: .92
          });
  
          gsap.to(box, {
            y: 0,
            duration: .1,
            delay: 1.15
          });
  
          gsap.set(button, {
            '--truck-y': 0,
            '--truck-y-n': -26
          });
  
          gsap.to(button, {
            '--truck-y': 1,
            '--truck-y-n': -25,
            duration: .2,
            delay: 1.25,
            onComplete() {
              gsap.timeline({
                onComplete() {
                  button.classList.add('done');
                }
              }).to(truck, {
                x: 0,
                duration: .4
              }).to(truck, {
                x: 40,
                duration: 1
              }).to(truck, {
                x: 20,
                duration: .6
              }).to(truck, {
                x: 96,
                duration: .4
              });
              gsap.to(button, {
                '--progress': 1,
                duration: 2.4,
                ease: "power2.in"
              });
            }
          });
  
        }
  
      } else {
        button.classList.remove('animation', 'done');
        gsap.set(truck, {
          x: 4
        });
        gsap.set(button, {
          '--progress': 0,
          '--hx': 0,
          '--bx': 0,
          '--box-s': .5,
          '--box-o': 0,
          '--truck-y': 0,
          '--truck-y-n': -26
        });
        gsap.set(box, {
          x: -24,
          y: -6
        });
      }
  
    });
  });
  
  document.querySelectorAll('.delete-button').forEach(button => button.addEventListener('click', e => {
    if (!button.classList.contains('delete')) {
      button.classList.add('delete');
      setTimeout(() => button.classList.remove('delete'), 3200);
    }
    e.preventDefault();
  }));
  
  document.querySelectorAll('.favorite-button').forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault()
  
      if (button.classList.contains('animated')) {
        return
      }
      button.classList.add('animated')
  
      gsap.to(button, {
        keyframes: [{
          '--star-y': '-36px',
          duration: .3,
          ease: 'power2.out'
        }, {
          '--star-y': '48px',
          '--star-scale': .4,
          duration: .325,
          onStart() {
            button.classList.add('star-round')
          }
        }, {
          '--star-y': '-64px',
          '--star-scale': 1,
          duration: .45,
          ease: 'power2.out',
          onStart() {
            button.classList.toggle('active')
            setTimeout(() => button.classList.remove('star-round'), 100)
          }
        }, {
          '--star-y': '0px',
          duration: .45,
          ease: 'power2.in'
        }, {
          '--button-y': '3px',
          duration: .11
        }, {
          '--button-y': '0px',
          '--star-face-scale': .65,
          duration: .125
        }, {
          '--star-face-scale': 1,
          duration: .15
        }],
        clearProps: true,
        onComplete() {
          button.classList.remove('animated')
        }
      })
  
      gsap.to(button, {
        keyframes: [{
          '--star-hole-scale': .8,
          duration: .5,
          ease: 'elastic.out(1, .75)'
        }, {
          '--star-hole-scale': 0,
          duration: .2,
          delay: .2
        }]
      })
  
      gsap.to(button, {
        '--star-rotate': '360deg',
        duration: 1.55,
        clearProps: true
      })
    })
  })
  
  const { to, set, from, fromTo, registerPlugin } = gsap
  
  registerPlugin(MotionPathPlugin);
  
  document.querySelectorAll('.pay-button').forEach(button => {
    button.addEventListener('pointerdown', e => {
      if (button.classList.contains('animating')) {
        return
      }
      to(button, {
        '--scale': .975,
        duration: .15
      })
    })
    button.addEventListener('pointerup', e => {
      if (button.classList.contains('animating')) {
        return
      }
      to(button, {
        '--scale': 1,
        duration: .15
      })
    })
    button.addEventListener('pointerleave', e => {
      if (button.classList.contains('animating')) {
        return
      }
      to(button, {
        '--scale': 1,
        duration: .15
      })
    })
    button.addEventListener('click', e => {
  
      e.preventDefault()
  
      button.classList.add('animating')
  
      if (button.classList.contains('done')) {
        to(button, {
          '--success-o': 0,
          duration: .15
        })
        to(button, {
          '--default-o': 1,
          duration: .4,
          clearProps: true,
          onComplete() {
            button.classList.remove('animating', 'done')
          }
        })
        return
      }
  
      to(button, {
        '--rotate': '-90deg',
        '--y': '25px',
        '--default-o': 0,
        duration: .2
      })
  
      to(button, {
        keyframes: [{
          '--light-opacity': 1,
          duration: .3,
          delay: .15,
          onComplete() {
            from(button.querySelectorAll('.icon'), {
              stagger: .2,
              opacity: 0,
              duration: .15
            })
            set(button.querySelectorAll('.icon'), {
              x: gsap.utils.random(-100, -80),
              y: gsap.utils.random(-80, -60)
            })
            to(button.querySelectorAll('.icon'), {
              stagger: .2,
              duration: .5,
              motionPath: {
                path: [{
                  x: gsap.utils.random(-60, -40),
                  y: gsap.utils.random(-10, -30),
                }, {
                  x: 0,
                  y: 0
                }],
                curviness: .5
              },
              rotation: `-=${gsap.utils.random(-720, 720)}`,
            })
          }
        }, {
          '--truck-y': '1px',
          duration: .1,
          delay: .2
        }, {
          '--truck-y': '0px',
          duration: .1
        }, {
          '--truck-y': '1px',
          duration: .1,
        }, {
          '--truck-y': '0px',
          duration: .1
        }, {
          '--truck-y': '1px',
          duration: .1,
        }, {
          '--truck-y': '0px',
          duration: .1
        }, {
          '--truck-y': '1px',
          duration: .1
        }, {
          '--truck-y': '0px',
          duration: .1
        }],
        onComplete() {
          to(button, {
            keyframes: [{
              '--truck-base-x': '-4px',
              duration: .4
            }, {
              '--truck-base-x': '60px',
              duration: 1
            }, {
              '--truck-base-x': '20px',
              duration: .6
            }, {
              '--truck-base-x': '300px',
              duration: .4
            }],
            onComplete() {
              button.classList.add('done')
              button.classList.remove('animating')
              to(button, {
                keyframes: [{
                  '--rotate': '0deg',
                  '--y': '0px',
                  duration: .2
                }, {
                  '--success-offset': '0px',
                  '--success-o': 1,
                  duration: .2
                }]
              })
            }
          })
        }
      })
  
    })
  })
  
  document.querySelectorAll('.dl-button').forEach(button => {
    button.addEventListener('pointerdown', e => {
      if (button.classList.contains('animating')) {
        return
      }
      to(button, {
        '--scale': .975,
        duration: .15
      })
    })
    button.addEventListener('pointerup', e => {
      if (button.classList.contains('animating')) {
        return
      }
      to(button, {
        '--scale': 1,
        duration: .15
      })
    })
    button.addEventListener('pointerleave', e => {
      if (button.classList.contains('animating')) {
        return
      }
      to(button, {
        '--scale': 1,
        duration: .15
      })
    })
    button.addEventListener('click', e => {
  
      e.preventDefault()
  
      button.classList.add('animating')
  
      if (button.classList.contains('done')) {
        to(button, {
          '--success-o': 0,
          duration: .15
        })
        to(button, {
          '--default-o': 1,
          duration: .4,
          clearProps: true,
          onComplete() {
            button.classList.remove('animating', 'done')
          }
        })
        return
      }
  
      to(button, {
        '--rotate': '-90deg',
        '--y': '25px',
        '--default-o': 0,
        duration: .2
      })
  
      to(button, {
        keyframes: [{
          '--truck-base-x': '-4px',
          duration: .5
        }, {
          '--truck-base-x': '0px',
          duration: .2
        }, {
          '--truck-base-x': '60px',
          '--box-x': '-60px',
          duration: .5,
          onStart() {
            setTimeout(() => {
              to(button, {
                keyframes: [{
                  '--box-y': '10px',
                  '--box-r': '-8deg',
                  duration: .2
                }, {
                  '--box-r': '0deg',
                  duration: .2
                }]
              })
            }, 200)
          }
        }, {
          '--truck-base-x': '56px',
          '--box-x': '-56px',
          duration: .4
        }, {
          '--light-opacity': 0,
          duration: .3,
          delay: .2
        }],
        onComplete() {
          setTimeout(() => {
            button.classList.add('done')
            button.classList.remove('animating')
            to(button, {
              keyframes: [{
                '--rotate': '0deg',
                '--y': '0px',
                duration: .2
              }, {
                '--success-offset': '0px',
                '--success-o': 1,
                duration: .2
              }]
            })
          }, 500)
        }
      })
  
    })
  })
  
  document.querySelectorAll(".star-button").forEach((button) => {
    const width = 400;
    const height = 200;
  
    const canvas = button.querySelector("canvas");
  
    const addLight = (x, y, z, i, s) => {
      const light = new THREE.PointLight(0xffffff, i);
      light.position.set(x, y, z);
      s.add(light);
    };
  
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      context: canvas.getContext("webgl2"),
      antialias: true,
      alpha: true,
    });
  
    renderer.setSize(width, height);
    renderer.setPixelRatio(4);
  
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 4, 100);
  
    camera.position.set(0, 0, 30);
  
    addLight(0, 1, 5, 0.2, scene);
    addLight(0, 2, 0, 0.3, scene);
    addLight(5, 0, 1, 0.2, scene);
    addLight(-5, 0, 1, 0.2, scene);
    addLight(3, 0, 5, 0.6, scene);
  
    scene.add(new THREE.AmbientLight(0xffffff));
  
    const loader = new THREE.GLTFLoader();
  
    loader.setCrossOrigin("anonymous");
    loader.setDRACOLoader(new THREE.DRACOLoader());
  
    loader.load(
      "https://assets.codepen.io/165585/star-default.glb",
      function (data) {
        const object = data.scene;
        object.position.set(0, -0.5, 0);
        scene.add(object);
  
        let scaleTween, rotateTweenXZ, rotateTweenY, rotateTweenZ;
  
        button.addEventListener("pointerenter", () => {
          if (button.classList.contains("active")) {
            return;
          }
  
          scaleTween = gsap.to(button, {
            "--button-star-scale": 1,
            ease: "elastic.out(1, .75)",
            duration: 0.5,
          });
          gsap.to(button, {
            "--button-star-greyscale": "0%",
            "--button-star-hue": "0deg",
            "--button-star-opacity": 1,
            duration: 0.15,
          });
  
          rotateTweenXZ = gsap.to(object.rotation, {
            duration: 0.25,
            x: THREE.Math.degToRad(4),
            z: THREE.Math.degToRad(12),
            ease: "none",
          });
  
          rotateTweenY = gsap.to(object.rotation, {
            duration: 1.5,
            y: THREE.Math.degToRad(360),
            ease: "none",
            repeat: -1,
          });
  
          rotateTweenZ = gsap.to(object.rotation, {
            duration: 4.5,
            keyframes: [
              {
                ease: "none",
                z: THREE.Math.degToRad(5),
              },
              {
                ease: "none",
                z: THREE.Math.degToRad(12),
              },
            ],
            repeat: -1,
          });
        });
  
        button.addEventListener("pointerleave", () => {
          if (button.classList.contains("active")) {
            return;
          }
  
          scaleTween.kill();
          rotateTweenXZ.kill();
          rotateTweenY.kill();
          rotateTweenZ.kill();
          gsap.to(button, {
            "--button-star-scale": 0.75,
            "--button-star-greyscale": "85%",
            "--button-star-hue": "170deg",
            "--button-star-opacity": 0.45,
            duration: 0.2,
          });
          gsap.to(object.rotation, {
            duration: 0.3,
            x: THREE.Math.degToRad(0),
            y: THREE.Math.degToRad(0),
            z: THREE.Math.degToRad(0),
          });
        });
  
        button.addEventListener("click", () => {
          if (button.classList.contains("active")) {
            gsap.to(button, {
              "--button-label-x": "24px",
              "--button-label-success-opacity": 0,
              "--button-star-opacity": 0.45,
              "--button-star-current-opacity": 1,
              "--button-star-current-y": "0px",
              "--button-star-new-opacity": 0,
              "--button-star-new-y": "16px",
              duration: 0.25,
              clearProps: true,
              onComplete() {
                button.classList.remove("active");
              },
            });
            return;
          }
          scaleTween.kill();
          rotateTweenY.kill();
  
          button.classList.add("active");
  
          gsap.to(button, {
            "--button-star-current-opacity": 0,
            "--button-star-current-y": "-16px",
            "--button-star-new-opacity": 1,
            "--button-star-new-y": "0px",
            "--button-star-add-opacity": 1,
            duration: 0.25,
            delay: 0.5,
          });
  
          gsap.to(button, {
            "--button-label-x": "0px",
            "--button-label-success-opacity": 1,
            duration: 0.25,
            delay: 0.2,
          });
  
          gsap.to(button, {
            "--button-star-add-opacity": 0,
            duration: 0.2,
            delay: 0.75,
          });
  
          gsap.to(button, {
            "--button-star-add-y": "-8px",
            duration: 0.5,
            delay: 0.5,
          });
  
          gsap.to(button, {
            "--button-star-scale": 1,
            "--button-star-greyscale": "0%",
            "--button-star-hue": "0deg",
            "--button-star-opacity": 1,
            duration: 0.15,
          });
  
          gsap.to(object.rotation, {
            duration: 0.4,
            y: THREE.Math.degToRad(0),
          });
  
          gsap.to(object.position, {
            duration: 0.7,
            motionPath: {
              path: [
                {
                  x: 0,
                  y: -0.5,
                },
                {
                  x: 5.45,
                  y: -5,
                },
                {
                  x: 10.9,
                  y: -0.5,
                },
                {
                  x: 7,
                  y: 7,
                },
              ],
              curviness: 1.2,
            },
            ease: "sine.in",
          });
  
          gsap.to(button, {
            "--button-star-opacity": 0,
            duration: 0.1,
            delay: 0.6,
            onComplete() {
              object.rotation.x = THREE.Math.degToRad(0);
              object.rotation.y = THREE.Math.degToRad(0);
              object.rotation.z = THREE.Math.degToRad(0);
              object.position.set(0, -0.5, 0);
              gsap.set(button, {
                "--button-star-scale": 0.75,
                "--button-star-greyscale": "85%",
                "--button-star-hue": "170deg",
                "--button-star-opacity": 0,
              });
            },
          });
        });
      }
    );
  
    const render = () => {
      requestAnimationFrame(render);
  
      renderer.render(scene, camera);
    };
  
    render();
  });
  
  document.querySelectorAll('.like-button').forEach(button => {
  
    button.addEventListener('click', e => {
      button.classList.toggle('liked');
      if (button.classList.contains('liked')) {
        gsap.fromTo(button, {
          '--hand-rotate': 8
        }, {
          ease: 'none',
          keyframes: [{
            '--hand-rotate': -45,
            duration: .16,
            ease: 'none'
          }, {
            '--hand-rotate': 15,
            duration: .12,
            ease: 'none'
          }, {
            '--hand-rotate': 0,
            duration: .2,
            ease: 'none',
            clearProps: true
          }]
        });
      }
    })
  
  });
  
  // publish-button start
  const publishLoadingTime = 5000
  const resetTime = 5000
  
  document.querySelectorAll('.publish-button').forEach(button => {
    let tweenHover = to(button, {
      paused: true,
      keyframes: [{
        '--icon-arrow-y': '-2px',
        '--icon-line-offset': '23px',
        duration: .15
      }, {
        '--icon-arrow-y': '0px',
        '--icon-line-offset': '21px',
        duration: .3
      }]
    }),
      interval;
  
    button.addEventListener('pointerenter', e => {
      if (button.classList.contains('animated')) {
        return
      }
      tweenHover.restart()
      interval = setInterval(() => tweenHover.restart(), 1000)
    });
  
    button.addEventListener('pointerleave', e => clearInterval(interval))
  
    button.addEventListener('click', e => {
      e.preventDefault()
  
      if (button.classList.contains('animated')) {
        return
      }
      button.classList.add('animated')
  
      let text = button.querySelector('.text'),
        normal = text.querySelector('.normal'),
        progress = text.querySelector('.progress'),
        done = text.querySelector('.done'),
        normalWidth = normal.offsetWidth
  
      clearInterval(interval)
      tweenHover.pause()
  
      let cloud = button.querySelector('.cloud'),
        cloudInterval,
        clone = cloud.cloneNode(true)
  
      gsap.to(button, {
        '--icon-cloud-y': '32px',
        duration: .15
      })
  
      cloudInterval = setInterval(() => {
        createCloud(clone, button.querySelector('.icon'))
      }, 400)
  
      let tweenArrow = fromTo(button, {
        '--icon-arrow-y': '0px',
        '--icon-line-offset': '21px',
        duration: .15
      }, {
        repeat: -1,
        keyframes: [{
          '--icon-arrow-y': '-6px',
          '--icon-line-offset': '24px',
          duration: .6,
        }, {
          '--icon-arrow-y': '0px',
          '--icon-line-offset': '21px',
          duration: .85,
          ease: 'power2.out'
        }]
      })
  
      to(button, {
        onStart() {
          to(text, {
            width: progress.offsetWidth,
            duration: .15
          })
        },
        '--text-normal-o': 0,
        '--text-normal-y': '8px',
        duration: .25
      })
  
      to(button, {
        '--text-progress-o': 1,
        '--text-progress-y': '0px',
        duration: .3,
        delay: .1
      })
  
      setTimeout(() => {
        tweenArrow.pause()
        clearInterval(cloudInterval)
        to(button, {
          onStart() {
            to(text, {
              width: done.offsetWidth,
              duration: .15
            })
          },
          '--text-progress-o': 0,
          '--text-progress-y': '8px',
          duration: .25
        })
        to(button, {
          duration: .25,
          keyframes: [{
            '--icon-line-offset': '13px'
          }, {
            '--icon-arrow-offset': '4px'
          }]
        })
        to(button, {
          '--text-done-o': 1,
          '--text-done-y': '0px',
          duration: .3,
          delay: .1
        })
        to(button, {
          '--icon-tick-offset': '0px',
          duration: .25,
          delay: .3
        })
        to(button, {
          '--icon-circle-scale': 1,
          duration: .7,
          delay: .2,
          ease: 'elastic.out(1, .75)'
        })
        setTimeout(() => {
          reset(button, normalWidth, text)
        }, resetTime)
      }, publishLoadingTime)
    })
  })
  
  function createCloud(node, parent) {
    let elem = node.cloneNode(true)
    parent.appendChild(elem)
    set(elem, {
      x: gsap.utils.random(-8, 8),
      y: -36
    })
    to(elem, {
      y: 36,
      duration: gsap.utils.random(.4, 1.5),
      onComplete() {
        elem.remove()
      }
    })
  }
  
  function reset(button, normalWidth, text) {
    to(button, {
      onStart() {
        to(text, {
          width: normalWidth,
          duration: .15,
          clearProps: true
        })
      },
      '--text-done-o': 0,
      '--text-done-y': '8px',
      duration: .25
    })
    fromTo(button, {
      '--text-normal-y': '-8px'
    }, {
      '--text-normal-o': 1,
      '--text-normal-y': '0px',
      duration: .3,
      delay: .1
    })
    to(button, {
      keyframes: [{
        '--icon-tick-offset': '11px',
        '--icon-circle-scale': 0,
        '--icon-arrow-y': '0px',
        duration: .2
      }, {
        '--icon-cloud-y': '0px',
        '--icon-line-offset': '21px',
        duration: .2
      }, {
        '--icon-arrow-offset': '0px',
        duration: .15
      }],
      clearProps: true,
      onComplete() {
        button.classList.remove('animated')
      }
    })
  }
  // publish-button end
  
  // progress-button start
  const buttonArea = document.querySelector('.btn-area')
  const progressArea = document.querySelector('.progress-area')
  const completeArea = document.querySelector('.complete-area')
  const mainBtn = document.querySelector('.main-btn rect')
  const frameBtn = document.querySelector('.frame-btn rect')
  const loadingIcon = document.querySelector('.progress-area .area-left svg')
  const loadingProgress = document.querySelector('.progress-area .area-left span')
  const loadingBtn = document.querySelector('.progress-area .area-right')
  const pauseBtn = document.querySelector('.progress-area .area-right .btn-pause')
  const playBtn = document.querySelector('.progress-area .area-right .btn-play')
  const tick1 = document.querySelector('.complete-area .tick-1')
  const tick2 = document.querySelector('.complete-area .tick-2')
  const doneText = document.querySelector('.complete-area span')
  
  let loadingTime = 5500
  let progress = {
    value: '0 %'
  }
  let loadingStatus = true
  
  anime({
    targets: loadingIcon,
    opacity: [0, 1],
    duration: 750,
    easing: 'easeOutQuad'
  })
  
  let aniLoadingIcon = anime({
    targets: loadingIcon,
    rotateZ: 360,
    duration: 2000,
    loop: true,
    easing: 'linear'
  })
  
  anime({
    targets: loadingProgress,
    translateY: ['15px', '0'],
    opacity: [0, 1],
    delay: 250,
    duration: 750,
    easing: 'easeOutQuart'
  })
  
  anime({
    targets: loadingBtn,
    translateY: ['15px', '0'],
    opacity: [0, 1],
    delay: 350,
    duration: 1000,
    easing: 'easeOutQuart'
  })
  
  let aniProgress = anime({
    targets: progress,
    value: '100 %',
    duration: loadingTime,
    easing: 'cubicBezier(.5, .05, .3, .9)',
    delay: 1000,
    round: 1,
    update: function () {
      loadingProgress.innerHTML = JSON.stringify(progress.value).replace(/^"(.*)"$/, '$1')
    }
  })
  
  let aniFrameBtn = anime({
    targets: frameBtn,
    strokeDashoffset: [525, 0],
    duration: loadingTime,
    easing: 'cubicBezier(.5, .05, .3, .9)',
    delay: 1000,
    complete: function () {
      completeLoading()
    }
  })
  
  loadingBtn.addEventListener('click', () => {
    if (loadingStatus) {
      aniLoadingIcon.pause()
      aniProgress.pause()
      aniFrameBtn.pause()
      pauseBtn.style.transform = 'translateY(-40px)'
      playBtn.style.transform = 'translateY(0px)'
      loadingStatus = false
    } else {
      aniLoadingIcon.play()
      aniProgress.play()
      aniFrameBtn.play()
      pauseBtn.style.transform = 'translateY(0px)'
      playBtn.style.transform = 'translateY(40px)'
      loadingStatus = true
    }
  
  })
  
  function completeLoading() {
    anime({
      targets: loadingIcon,
      translateX: [0, -20],
      opacity: [1, 0],
      duration: 500,
      delay: 0,
      easing: 'easeInQuad'
    })
  
    anime({
      targets: loadingProgress,
      translateY: [0, -20],
      opacity: [1, 0],
      duration: 500,
      delay: 250,
      easing: 'easeInQuad'
    })
  
    anime({
      targets: loadingBtn,
      translateY: [0, -20],
      opacity: [1, 0],
      duration: 500,
      delay: 500,
      easing: 'easeInQuad',
      complete: function () {
        progressArea.style.display = 'none'
        completeArea.style.display = 'flex'
      }
    })
  
    anime({
      targets: frameBtn,
      fill: ['#f5f9fe', '#1578ff'],
      duration: 500,
      delay: 750,
      easing: 'easeInQuad'
    })
  
    anime({
      targets: tick1,
      strokeDashoffset: [52, 0],
      opacity: [0, 1],
      duration: 500,
      easing: 'cubicBezier(.5, .05, .3, .9)',
      delay: 1000
    })
  
    anime({
      targets: tick2,
      strokeDashoffset: [52, 0],
      opacity: [0, 1],
      duration: 500,
      easing: 'cubicBezier(.5, .05, .3, .9)',
      delay: 1250
    })
  
    anime({
      targets: doneText,
      opacity: [0, 1],
      translateY: ['25', '0'],
      duration: 1000,
      easing: 'easeOutQuad',
      delay: 1250
    })
  }
  
  // progress-button end