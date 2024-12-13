import anime from "animejs/lib/anime.es.js";
import "./face/style.css";
import { Button, cn } from "@nextui-org/react";
import { useEffect } from "react";

export type ExpressionEnum = "angry" | "happy" | "sad" | "surprised";
export const Face = ({
  className,
  expression,
}: { className?: string; expression?: ExpressionEnum }) => {
  function changeExpression(expression: ExpressionEnum) {
    const mouth = document.querySelector(".mouth") as HTMLElement;
    const brow_left = document.querySelector(".brow.left") as HTMLElement;
    const brow_right = document.querySelector(".brow.right") as HTMLElement;
    const brow = document.querySelector(".brow") as HTMLElement;
    const eye_left = document.querySelector(".eye.left") as HTMLElement;
    const eye_right = document.querySelector(".eye.right") as HTMLElement;
    const eye = document.querySelector(".eye") as HTMLElement;
    if (
      !mouth ||
      !brow_left ||
      !brow_right ||
      !brow ||
      !eye_left ||
      !eye_right ||
      !eye
    )
      return;

    // const eye =  document.querySelector('.eye');
    mouth.style.width = "80px";
    mouth.style.height = "40px";
    mouth.style.backgroundColor = "#333";
    mouth.style.borderRadius = "0 0 40px 40px";

    switch (expression) {
      case "sad":
        anime.remove(mouth);
        anime.remove(brow_left);
        anime.remove(brow_right);
        anime.remove(brow);
        anime.remove(eye_left);
        anime.remove(eye_right);
        anime.remove(eye);
        mouth.style.transform = "translateX(-50%)  rotate(180deg)";
        brow_left.style.transform = "rotate(-25deg)";
        brow_right.style.transform = "rotate(25deg)";

        anime({
          targets: ".brow",
          translateY: [-10, 10], // Движение вверх и вниз
          duration: 400,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });
        anime({
          targets: ".eye",
          translateY: [-2, 2], // Легкое движение вверх и вниз
          duration: 500,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });
        anime({
          targets: ".mouth",
          translateY: [-10, 10], // Легкое движение вверх и вниз
          duration: 500,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });

        break;

      case "happy":
        anime.remove(mouth);
        anime.remove(brow_left);
        anime.remove(brow_right);
        anime.remove(brow);
        anime.remove(eye_left);
        anime.remove(eye_right);
        anime.remove(eye);
        mouth.style.transform = "translateX(-50%) scaleY(1.2)";
        brow_left.style.transform = "rotate(0deg) translateY(-80%)";
        brow_right.style.transform = "rotate(0deg) translateY(-80%)";

        anime({
          targets: ".brow",
          translateY: [-600, 200], // Движение вверх и вниз
          duration: 400,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });
        anime({
          targets: ".eye",
          translateY: [-2, 2], // Легкое движение вверх и вниз
          duration: 500,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });
        anime({
          targets: ".mouth",
          translateY: [-10, 10], // Легкое движение вверх и вниз
          duration: 500,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });

        break;

      case "angry":
        anime.remove(mouth);
        anime.remove(brow_left);
        anime.remove(brow_right);
        anime.remove(brow);
        anime.remove(eye_left);
        anime.remove(eye_right);
        anime.remove(eye);
        mouth.style.transform = "translateX(-50%)  rotate(180deg) scaleY(0.5)";
        brow_left.style.transform = "rotate(25deg) translateY(-10%)";
        brow_right.style.transform = "rotate(-25deg) translateY(-10%)";

        anime({
          targets: ".brow",
          translateY: [-400, 400], // Движение вверх и вниз
          duration: 400,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });
        anime({
          targets: ".eye",
          translateY: [-2, 2], // Легкое движение вверх и вниз
          duration: 500,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });
        anime({
          targets: ".mouth",
          translateY: [-10, 10], // Легкое движение вверх и вниз
          duration: 500,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });

        break;

      case "surprised":
        anime.remove(mouth);
        anime.remove(brow_left);
        anime.remove(brow_right);
        anime.remove(brow);
        anime.remove(eye_left);
        anime.remove(eye_right);
        anime.remove(eye);
        mouth.style.transform = "translateX(-50%) scaleY(1.5) scaleX(0.7)";
        brow_left.style.transform = "rotate(0deg) translateY(-100%)";
        brow_right.style.transform = "rotate(0deg) translateY(-100%)";
        mouth.style.borderRadius = "50%";

        anime({
          targets: ".brow",
          translateY: [-500, 0], // Движение вверх и вниз
          duration: 400,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });
        anime({
          targets: ".eye",
          translateY: [-2, 2], // Легкое движение вверх и вниз
          duration: 500,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });
        anime({
          targets: ".mouth",
          translateY: [-2, 2], // Легкое движение вверх и вниз
          duration: 500,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });

        break;

      default:
        break;
    }
  }

  useEffect(() => {
    if (expression) changeExpression(expression);
  }, [expression]);
  // useEffect(() => {
  //   anime({
  //     targets: ".eye",
  //     scaleY: [1, 0.1, 1],
  //     duration: 300,
  //     easing: "easeInOutQuad",
  //     direction: "alternate",
  //     loop: true,
  //     delay: anime.stagger(500),
  //   });
  //   anime({
  //     targets: ".mouth",
  //     scaleY: [1, 1.2, 1],
  //     duration: 1000,
  //     easing: "easeInOutQuad",
  //     direction: "alternate",
  //     loop: true,
  //   });
  //   anime({
  //     targets: ".brow",
  //     translateY: [-5, 0, -5],
  //     duration: 800,
  //     easing: "easeInOutQuad",
  //     direction: "alternate",
  //     loop: true,
  //     delay: anime.stagger(200),
  //   });
  // }, []);
  return (
    <div
      className={cn(
        "flex flex-col gap-4 justify-center min-[400px]:flex-row items-center",
        className,
      )}
    >
      <div className="face">
        <div className="brow left" />
        <div className="brow right" />
        <div className="eye left" />
        <div className="eye right" />
        <div className="mouth" />
        <div className="school" />
      </div>
      {/* <div className="flex flex-col gap-2 w-full min-[400px]:w-auto">
        <Button onClick={() => changeExpression("sad")}>Грусть</Button>
        <Button onClick={() => changeExpression("happy")}>Радость</Button>
        <Button onClick={() => changeExpression("angry")}>Гнев</Button>
        <Button onClick={() => changeExpression("surprised")}>Удивление</Button>
      </div> */}
    </div>
  );
};
