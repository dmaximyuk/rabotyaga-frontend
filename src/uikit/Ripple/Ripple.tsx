import styles from "./Ripple.module.scss";

import React, { useState, useLayoutEffect } from "react";

import { RippleProps } from "./Ripple.interface";

export const Ripple: React.FC<RippleProps> = ({ onClick }) => {
  const [rippleArray, setRippleArray] = useState<Array<Object>>([]);

  useLayoutEffect(() => {
    const duration = 500;
    const rippleCount = rippleArray.length;

    let timer: ReturnType<typeof setTimeout>;

    if (rippleCount > 0) {
      timer = setTimeout(() => {
        setRippleArray([]);
        clearTimeout(timer);
      }, duration * 4);
    }

    return () => clearTimeout(timer);
  }, [rippleArray.length]);

  const addRipple = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.clientX - rippleContainer.x - size / 2;
    const y = event.clientY - rippleContainer.y - size / 2;

    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);

    onClick && onClick();
  };

  return (
    <div className={styles.Ripple} onClick={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple: any, index: number) => {
          return (
            <span
              className={styles.Ripple__effect}
              key={"ripple-effect-block" + index}
              style={{
                top: ripple?.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </div>
  );
};
