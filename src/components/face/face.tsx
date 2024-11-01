import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./style.css";
import { cn } from "@nextui-org/react";
const Face = ({ className }: { className?: string }) => {
  useEffect(() => {
    anime({
      targets: ".eye",
      scaleY: [1, 0.1, 1],
      duration: 300,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
      delay: anime.stagger(500),
    });
    anime({
      targets: ".mouth",
      scaleY: [1, 1.2, 1],
      duration: 1000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: ".brow",
      translateY: [-5, 0, -5],
      duration: 800,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
      delay: anime.stagger(200),
    });
  }, []);
  return (
    <div className={cn("face", className)}>
      <div className="brow left" />
      <div className="brow right" />
      <div className="eye left" />
      <div className="eye right" />
      <div className="mouth" />
    </div>
  );
};

export default Face;
