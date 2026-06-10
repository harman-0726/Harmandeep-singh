"use client";

import React, { useEffect, useRef, useState } from "react";
import { Camera, Sparkles } from "lucide-react";

export default function VisionCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 200, y: 150 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeTab, setActiveTab] = useState<"skeleton" | "heatmap">("skeleton");
  const [fps, setFps] = useState(60);

  // Background skeleton nodes array
  const pointsRef = useRef<{ x: number; y: number; originX: number; originY: number; vx: number; vy: number; radius: number; label: string }[]>([]);

  useEffect(() => {
    const basePoints = [
      { x: 200, y: 70, label: "FX-01" },
      { x: 160, y: 110, label: "LE-02" },
      { x: 240, y: 110, label: "RE-03" },
      { x: 200, y: 140, label: "NS-04" },
      { x: 140, y: 160, label: "LC-05" },
      { x: 260, y: 160, label: "RC-06" },
      { x: 200, y: 195, label: "MT-07" },
      { x: 120, y: 220, label: "LJ-08" },
      { x: 280, y: 220, label: "RJ-09" },
      { x: 200, y: 255, label: "CH-10" },
    ];

    pointsRef.current = basePoints.map((p) => ({
      x: p.x,
      y: p.y,
      originX: p.x,
      originY: p.y,
      vx: 0,
      vy: 0,
      radius: 4,
      label: p.label,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let lastTime = performance.now();
    let frameCount = 0;

    const handleResize = () => {
      if (containerRef.current && canvas) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = 360;
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);

    const render = () => {
      const now = performance.now();
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const offsetX = centerX - 200;
      const offsetY = centerY - 150;

      ctx.strokeStyle = "rgba(255, 90, 31, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 25;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      const points = pointsRef.current;
      points.forEach((p) => {
        const targetX = p.originX + offsetX;
        const targetY = p.originY + offsetY;

        const dx = mousePos.x - targetX;
        const dy = mousePos.y - targetY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let fx = 0;
        let fy = 0;

        if (dist < 150) {
          const force = (150 - dist) / 150;
          fx = (dx / dist) * force * 15;
          fy = (dy / dist) * force * 15;
        }

        const rx = (targetX - p.x) * 0.12;
        const ry = (targetY - p.y) * 0.12;

        p.vx = p.vx * 0.8 + rx + fx;
        p.vy = p.vy * 0.8 + ry + fy;

        p.x += p.vx;
        p.y += p.vy;

        if (activeTab === "skeleton") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = "#FF5A1F";
          ctx.fill();

          if (dist < 100) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(255, 90, 31, 0.4)";
            ctx.lineWidth = 1.2;
            ctx.stroke();

            ctx.font = "8px 'JetBrains Mono', monospace";
            ctx.fillStyle = "rgba(255, 90, 31, 0.8)";
            ctx.fillText(
              `${p.label} [X:${Math.round(p.x)},Y:${Math.round(p.y)}]`,
              p.x + 8,
              p.y + 3
            );
          }
        } else {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 35);
          gradient.addColorStop(0, "rgba(255, 90, 31, 0.3)");
          gradient.addColorStop(0.5, "rgba(255, 90, 31, 0.1)");
          gradient.addColorStop(1, "rgba(255, 90, 31, 0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, 35, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      if (activeTab === "skeleton" && points.length >= 10) {
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = "rgba(255, 90, 31, 0.22)";

        const connect = (i: number, j: number) => {
          if (!points[i] || !points[j]) return;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        };

        connect(0, 1); connect(0, 2);
        connect(1, 4); connect(2, 6);
        connect(4, 7); connect(6, 9);
        connect(7, 9);
        
        connect(1, 3); connect(2, 3);
        connect(3, 4); connect(3, 6);
        connect(3, 5);
        connect(5, 7); connect(5, 9);
        connect(5, 8);
        connect(8, 9);
      }

      if (isHovering) {
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "rgba(255, 90, 31, 0.35)";

        ctx.beginPath();
        ctx.moveTo(0, mousePos.y);
        ctx.lineTo(canvas.width, mousePos.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(mousePos.x, 0);
        ctx.lineTo(mousePos.x, canvas.height);
        ctx.stroke();

        ctx.font = "9px 'JetBrains Mono', monospace";
        ctx.fillStyle = "#FF5A1F";
        ctx.fillText(
          `POSE TARGET [X: ${Math.round(mousePos.x)} | Y: ${Math.round(mousePos.y)}]`,
          mousePos.x + 12,
          mousePos.y - 12
        );
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [mousePos, isHovering, activeTab]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div ref={containerRef} className="relative w-full rounded-2xl bg-[#0F0F0F] border border-white/10 p-4 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col group justify-between text-left">
      {/* Background scan filter line */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent pointer-events-none odd:animate-pulse" />
      <div className="absolute inset-0 grain-overlay-dark opacity-10 pointer-events-none" />

      {/* Header bar of computer vision engine */}
      <div className="z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
            Computer Vision Pose Mesh
          </span>
        </div>
        <div className="flex items-center space-x-1.5 font-mono text-[10px] text-zinc-500">
          <Camera className="h-3 w-3 text-brand-orange" />
          <span>MESH_ACTIVE</span>
          <span className="text-zinc-600">|</span>
          <span className="text-brand-orange">{fps} FPS</span>
        </div>
      </div>

      {/* Interactive canvas */}
      <div className="relative flex-grow flex items-center justify-center my-2 cursor-crosshair">
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Interactive center instructional tag */}
        {!isHovering && (
          <div className="pointer-events-none z-10 glass-panel bg-brand-black/90 border border-brand-orange/30 px-4 py-2.5 rounded-lg text-center flex flex-col items-center space-y-1">
            <Sparkles className="h-4.5 w-4.5 text-brand-orange animate-spin" />
            <p className="text-xs font-bold text-white tracking-wide">MOVE CURSOR HERE</p>
            <p className="font-mono text-[9px] text-[#FF5A1F]/70">Simulate MediaPipe Pose Mesh</p>
          </div>
        )}
      </div>

      {/* Footer selector panel */}
      <div className="z-10 flex items-center justify-between pt-3 border-t border-white/10">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setActiveTab("skeleton")}
            className={`px-3 py-1 rounded font-mono text-[10px] uppercase font-semibold transition-all ${
              activeTab === "skeleton"
                ? "bg-brand-orange text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Pose Skeletons
          </button>
          <button
            onClick={() => setActiveTab("heatmap")}
            className={`px-3 py-1 rounded font-mono text-[10px] uppercase font-semibold transition-all ${
              activeTab === "heatmap"
                ? "bg-brand-orange text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Coordinate Heat
          </button>
        </div>
        
        <div className="font-mono text-[10px] text-zinc-500 hidden sm:block">
          MOD: <span className="text-brand-orange">YOLO_MP_ESTIMATOR_v11.3</span>
        </div>
      </div>
    </div>
  );
}
