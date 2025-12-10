import { useState, ElementType, ComponentProps } from "react";

type HoverHeadingProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & ComponentProps<T>;

export default function HoverHeading<T extends ElementType = "span">(
  props: HoverHeadingProps<T>
) {
  const { as, children, className = "", ...rest } = props;
  const Tag = as || "span";

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isInline =
    Tag === "span" || Tag === "strong" || Tag === "em" || Tag === "label";

  return (
    <Tag
      onMouseMove={handleMove}
      className={`
        relative 
        ${isInline ? "inline-block" : "block"} 
        font-bold 
        text-transparent bg-clip-text 
        transition-all duration-300 
        cursor-default pb-2
        ${className}
      `}
      style={{
        backgroundImage: `
          radial-gradient(
            400px circle at ${pos.x}px ${pos.y}px,
            #fecd36,
            #9b7f00,
            #3b2e00
          )
        `,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
