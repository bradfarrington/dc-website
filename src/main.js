document.addEventListener('DOMContentLoaded', () => {

  const video = document.getElementById('bg-video');

  // ==========================================
  // PHASE 3 & 4 ENGINE (Sequence Execution Abstract)
  // ==========================================
  const executeSequence = () => {
    // 1. Instantly cut video to black
    gsap.set('.video-wrapper', { opacity: 0 });
    gsap.set('.section-interstitial', { visibility: 'visible', opacity: 1 });

    const phrases = [
      "Your Business Is About To Change",
      "Bespoke Systems",
      "Built for your business",
      "Designed to evolve",
      "Prepare for absolute impact"
    ];

    const sequenceTL = gsap.timeline();
    const textTarget = document.getElementById('cinematic-text');

    phrases.forEach((phrase, index) => {
      sequenceTL.call(() => {
        textTarget.innerText = phrase;
      })
      .fromTo(textTarget, { opacity: 0, scale: 0.95, filter: "blur(8px)" }, {
        opacity: 1, scale: 1, filter: "blur(0px)",
        duration: 1.0, ease: "power2.out"
      })
      .to(textTarget, {
        opacity: 0, filter: "blur(4px)",
        duration: 0.5, delay: 1.2, ease: "power2.in"
      });
    });

    sequenceTL.set('.section-interstitial', { visibility: 'hidden' })
    .set('.section-final', { visibility: 'visible', pointerEvents: 'auto' })
    .to('.section-final', {
      opacity: 1, duration: 1.5, ease: "power2.out"
    })
    .from('.layer-logo, .layer-mesh, .glass-content', {
      y: 40, opacity: 0, duration: 1.5, stagger: 0.2, ease: "power3.out"
    }, "-=1.0");
  };

  // Auto-play video immediately on page load
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    video.src = "./envato_video_gen_Apr_14_2026_9_35_35.mp4";
    const timeHandler = () => {
      if (video.currentTime >= 2.9) {
        video.pause();
        video.removeEventListener('timeupdate', timeHandler);
        executeSequence();
      }
    };
    video.addEventListener('timeupdate', timeHandler);
  } else {
    video.src = "./0414.mp4";
    video.onended = () => {
      executeSequence();
    };
  }

  video.load();
  video.play().catch(e => console.log("Autoplay blocked:", e));

  // ==========================================
  // THREE.JS BESPOKE NEURAL MESH GENERATOR
  // ==========================================
  const initThreeJSCore = () => {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.set(0, 0, 0); // Explicitly bury the camera inside the dead origin of the volume 

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Neural Particle Math Generation
    const particleCount = 4000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorCustom = new THREE.Color(0xa78bfa); // Accent purple
    const colorWhite = new THREE.Color(0xffffff);

    // Distributed organically filling the entire volume to achieve absolute deep-matrix immersion
    for (let i = 0; i < particleCount; i++) {
        const r = 100 + (1200 * Math.random()); // Parallax depth radius generating dense layers wrapping the camera natively
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);

        const mix = Math.random();
        colors[i * 3] = mix > 0.5 ? colorCustom.r : colorWhite.r;
        colors[i * 3 + 1] = mix > 0.5 ? colorCustom.g : colorWhite.g;
        colors[i * 3 + 2] = mix > 0.5 ? colorCustom.b : colorWhite.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 1.2, // Reduced massively to simulate sharp, piercing star-like points instead of dense square blocks natively
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending
    });

    const mesh = new THREE.Points(geometry, material);
    scene.add(mesh);

    // Responsive interaction array bounding coordinates natively to screen sizes continually
    let mouseX = 0;
    let mouseY = 0;
    const targetX = window.innerWidth / 2;
    const targetY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        // Only consume client resources tracking mathematically if payload screen is currently active
        // Fallback for safety across browsers accessing inline properties efficiently via native query parameters
        if (document.getElementById('section-final').style.visibility !== 'visible' && 
            getComputedStyle(document.getElementById('section-final')).visibility !== 'visible') return;

        mouseX = (event.clientX - targetX);
        mouseY = (event.clientY - targetY);
    });

    const animate = () => {
        requestAnimationFrame(animate);
        
        // Base intrinsic geometry rotation tracking organically
        mesh.rotation.y += 0.0008;
        mesh.rotation.x += 0.0004;

        // Mathematical look-around targeting explicitly pinning camera to origin
        const targetRotationX = -mouseY * 0.0008;
        const targetRotationY = -mouseX * 0.0008;

        camera.rotation.x += (targetRotationX - camera.rotation.x) * 0.05;
        camera.rotation.y += (targetRotationY - camera.rotation.y) * 0.05;

        renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
  };

  // Launching execution bounds alongside Global window bounds
  initThreeJSCore();

});
