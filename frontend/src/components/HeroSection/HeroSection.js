import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const HeroSection = () => {
  const typedRef = useRef(null);
  const canvasRef = useRef();

  // Typed.js animation
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full Stack Developer", "Tech Enthusiast", "Problem Solver"],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  // Three.js setup
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial({ wireframe: false });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 3;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enableDamping = true;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
    id="hero"
    className="relative h-screen flex items-center px-6"
    style={{
      backgroundImage: 'url("/images/portfolioBgimg.jpeg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

    {/* Cube at center */}
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <div className="w-64 h-64 md:w-72 md:h-72">
        <canvas ref={canvasRef} className="rounded-xl shadow-2xl" />
      </div>
    </div>

    {/* Left content */}
    <div className="relative z-20 max-w-2xl text-white">
      <h1 className="text-4xl md:text-4xl font-extrabold mb-4 drop-shadow-md">
        Venkateswara Reddy
      </h1>
      <h2 className="text-indigo-400 text-2xl md:text-2xl font-semibold mb-6">
        <span ref={typedRef} />
      </h2>
      <p className="text-lg md:text-lg mb-8 max-w-[500px] drop-shadow">
        I'm passionate about building modern, scalable full-stack web applications and user-friendly experiences.
      </p>
      <a
        href="#projects"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        View My Work
      </a>
    </div>
  </section>
  );
};

export default HeroSection;
