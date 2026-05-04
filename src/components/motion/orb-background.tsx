"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type OrbBackgroundProps = {
  className?: string;
};

export function OrbBackground({ className }: OrbBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas?.parentElement) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parent = canvas.parentElement;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 3.2;

    const group = new THREE.Group();
    group.position.x = 0.88;
    scene.add(group);

    const count = 220;
    const points = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const vertices: THREE.Vector3[] = [];

    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      const vertex = new THREE.Vector3(radius * Math.cos(theta), y, radius * Math.sin(theta));
      vertices.push(vertex);

      points[i * 3] = vertex.x;
      points[i * 3 + 1] = vertex.y;
      points[i * 3 + 2] = vertex.z;

      if (i % 6 === 0) {
        colors[i * 3] = 0.133;
        colors[i * 3 + 1] = 0.773;
        colors[i * 3 + 2] = 0.369;
      } else {
        colors[i * 3] = 0.376;
        colors[i * 3 + 1] = 0.647;
        colors[i * 3 + 2] = 0.98;
      }
    }

    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute("position", new THREE.BufferAttribute(points, 3));
    pointGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const pointMaterial = new THREE.PointsMaterial({
      size: 0.032,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
    });
    const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
    group.add(pointCloud);

    const lineVertices: number[] = [];
    const threshold = 0.5;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (vertices[i].distanceTo(vertices[j]) < threshold) {
          lineVertices.push(
            vertices[i].x,
            vertices[i].y,
            vertices[i].z,
            vertices[j].x,
            vertices[j].y,
            vertices[j].z,
          );
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(lineVertices), 3),
    );
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.22,
    });
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lineSegments);

    const onResize = () => {
      const width = parent.offsetWidth;
      const height = parent.offsetHeight;
      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    onResize();

    const start = performance.now();
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = (performance.now() - start) / 1000;
      group.rotation.y += 0.0024;
      group.rotation.x = Math.sin(elapsed * 0.3) * 0.12;
      renderer.render(scene, camera);
    };

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
    }

    window.addEventListener("resize", onResize);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("resize", onResize);
      pointGeometry.dispose();
      lineGeometry.dispose();
      pointMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
