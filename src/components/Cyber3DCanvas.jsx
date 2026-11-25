import React, { useEffect, useRef, useState } from 'react';

export default function Cyber3DCanvas() {
  const canvasRef = useRef(null);
  const [boopCount, setBoopCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Cursor tracking for cute gaze
    let pointerX = width * 0.74;
    let pointerY = height * 0.46;
    let gazeX = 0;
    let gazeY = 0;

    const handleMouseMove = (e) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
    };

    // Scroll tracking
    let scrollProg = 0;
    let smoothScroll = 0;
    let lastScrollY = window.scrollY;
    let scrollVel = 0;

    const handleScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollProg = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      const delta = window.scrollY - lastScrollY;
      scrollVel = Math.max(-18, Math.min(18, delta));
      lastScrollY = window.scrollY;
    };

    // Click happy reaction & ring
    let ringR = 0;
    let ringAlpha = 0;
    let happyTimer = 0;

    const handleClick = () => {
      ringR = 12;
      ringAlpha = 0.85;
      happyTimer = 35;
      setBoopCount((c) => c + 1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', handleClick);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.022;

      smoothScroll += (scrollProg - smoothScroll) * 0.08;
      scrollVel *= 0.9;
      if (happyTimer > 0) happyTimer -= 1;

      const baseX = width > 1024 ? width * (0.75 - smoothScroll * 0.07) : width * 0.5;
      const baseY = height * (0.48 + (smoothScroll - 0.5) * 0.12) + Math.sin(time * 2) * 5;
      const scale = Math.min(1.24, Math.max(0.75, width / 1220));

      const dx = (pointerX - baseX) / (width * 0.42);
      const dy = (pointerY - baseY) / (height * 0.42) + scrollVel * 0.015;
      const targetGX = Math.max(-1, Math.min(1, dx));
      const targetGY = Math.max(-1, Math.min(1, dy));

      gazeX += (targetGX - gazeX) * 0.13;
      gazeY += (targetGY - gazeY) * 0.13;

      ctx.save();
      ctx.translate(baseX, baseY);
      ctx.scale(scale, scale);
      ctx.rotate(gazeX * 0.07 + scrollVel * 0.003);

      // Soft pastel/cyber glow behind cute character
      const glowGrad = ctx.createRadialGradient(0, 0, 15, 0, 0, 145);
      glowGrad.addColorStop(0, 'rgba(0, 240, 255, 0.16)');
      glowGrad.addColorStop(0.6, 'rgba(255, 42, 84, 0.08)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, 145, 0, Math.PI * 2);
      ctx.fill();

      // Click pulse ring
      if (ringAlpha > 0.01) {
        ringR += 4.5;
        ringAlpha *= 0.94;
        ctx.beginPath();
        ctx.arc(gazeX * 14, gazeY * 10, ringR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 240, 255, ${ringAlpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // 1. Cute Round Hoodie Shoulders
      const shoulderY = 82 - smoothScroll * 6;
      ctx.beginPath();
      ctx.moveTo(-92, shoulderY + 62);
      ctx.quadraticCurveTo(-86, shoulderY + 6, -28, shoulderY - 2);
      ctx.lineTo(28, shoulderY - 2);
      ctx.quadraticCurveTo(86, shoulderY + 6, 92, shoulderY + 62);
      ctx.closePath();

      const hoodieGrad = ctx.createLinearGradient(0, shoulderY - 8, 0, shoulderY + 62);
      hoodieGrad.addColorStop(0, 'rgba(30, 36, 54, 0.96)');
      hoodieGrad.addColorStop(1, 'rgba(13, 16, 26, 0.98)');
      ctx.fillStyle = hoodieGrad;
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // Cute hoodie drawstrings
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.75)';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-14, shoulderY + 4);
      ctx.lineTo(-14, shoulderY + 30);
      ctx.moveTo(14, shoulderY + 4);
      ctx.lineTo(14, shoulderY + 30);
      ctx.stroke();

      // 2. Cute Cartoon Head Group (tracks cursor)
      const headX = gazeX * 18;
      const headY = gazeY * 13 - 14;

      ctx.save();
      ctx.translate(headX, headY);

      // Cute round ear muffs / headphones
      [-64, 64].forEach((hx, idx) => {
        ctx.beginPath();
        ctx.roundRect(hx - 10, -20, 20, 36, 9);
        ctx.fillStyle = idx === 0 ? 'rgba(0, 240, 255, 0.25)' : 'rgba(255, 42, 84, 0.25)';
        ctx.fill();
        ctx.strokeStyle = idx === 0 ? '#00F0FF' : '#FF2A54';
        ctx.lineWidth = 1.8;
        ctx.stroke();
      });

      // Headband arch
      ctx.beginPath();
      ctx.arc(0, -14, 64, Math.PI * 1.08, Math.PI * 1.92);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.5)';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Round, soft cartoon face (chubby cheeks + soft chin)
      ctx.beginPath();
      ctx.arc(0, 0, 56, 0, Math.PI * 2);
      const faceGrad = ctx.createRadialGradient(-12, -16, 8, 0, 4, 60);
      faceGrad.addColorStop(0, 'rgba(255, 224, 202, 0.98)');
      faceGrad.addColorStop(1, 'rgba(232, 188, 162, 0.98)');
      ctx.fillStyle = faceGrad;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Cute floppy/tufted cartoon hair on top
      ctx.beginPath();
      ctx.moveTo(-54, -14);
      ctx.quadraticCurveTo(-56, -54, -20, -60);
      ctx.quadraticCurveTo(-8, -74, 8, -58);
      ctx.quadraticCurveTo(26, -70, 36, -52);
      ctx.quadraticCurveTo(58, -44, 54, -14);
      ctx.quadraticCurveTo(32, -28, 14, -16);
      ctx.quadraticCurveTo(0, -32, -16, -16);
      ctx.quadraticCurveTo(-36, -28, -54, -14);
      ctx.closePath();

      ctx.fillStyle = 'rgba(20, 24, 38, 0.98)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Facial features shift slightly with gaze for 3D depth
      const fx = gazeX * 8;
      const fy = gazeY * 6;

      // Rosy cute cheeks
      ctx.fillStyle = 'rgba(255, 105, 135, 0.34)';
      ctx.beginPath();
      ctx.ellipse(-28 + fx * 0.7, 10 + fy * 0.7, 10, 6, 0, 0, Math.PI * 2);
      ctx.ellipse(28 + fx * 0.7, 10 + fy * 0.7, 10, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      // Cute small nose
      ctx.strokeStyle = 'rgba(165, 112, 88, 0.75)';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(fx, 5 + fy, 3.5, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.stroke();

      // Cute smile (turns into a bigger happy grin on click!)
      ctx.strokeStyle = 'rgba(135, 72, 78, 0.9)';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      if (happyTimer > 0) {
        ctx.arc(fx, 13 + fy, 9, 0.1 * Math.PI, 0.9 * Math.PI);
      } else {
        ctx.arc(fx, 12 + fy, 7.5, 0.15 * Math.PI, 0.85 * Math.PI);
      }
      ctx.stroke();

      // Big expressive cartoon eyes tracking cursor
      const eyeOffsetX = gazeX * 9;
      const eyeOffsetY = gazeY * 6 - 3;

      [-20, 20].forEach((baseXEye) => {
        const ex = baseXEye + eyeOffsetX;
        const ey = -2 + eyeOffsetY;

        if (happyTimer > 0) {
          // Happy curved ^_^ eyes on click
          ctx.strokeStyle = '#0B0E18';
          ctx.lineWidth = 2.8;
          ctx.beginPath();
          ctx.arc(ex, ey + 2, 7.5, Math.PI * 1.1, Math.PI * 1.9);
          ctx.stroke();
        } else {
          // Big cute eye white
          ctx.beginPath();
          ctx.arc(ex, ey, 10.5, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
          ctx.strokeStyle = '#0B0E18';
          ctx.lineWidth = 1.6;
          ctx.stroke();

          // Pupil tracking cursor
          const px = ex + gazeX * 4;
          const py = ey + gazeY * 3;
          ctx.beginPath();
          ctx.arc(px, py, 5.2, 0, Math.PI * 2);
          ctx.fillStyle = '#0F172A';
          ctx.fill();

          // Big bright cartoon eye sparkle
          ctx.beginPath();
          ctx.arc(px - 2, py - 2, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px + 2, py + 1.8, 1.1, 0, Math.PI * 2);
          ctx.fillStyle = '#00F0FF';
          ctx.fill();
        }
      });

      ctx.restore();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none opacity-95"
      />
      {boopCount > 0 && (
        <div className="fixed bottom-5 right-5 z-30 bg-[#0B0D14]/90 border border-cyan-400/40 rounded-lg px-3.5 py-2 font-mono text-[11px] text-cyan-300 backdrop-blur-md">
          HELLO PING #{boopCount} // CUTE_BOT: HAPPY
        </div>
      )}
    </>
  );
}