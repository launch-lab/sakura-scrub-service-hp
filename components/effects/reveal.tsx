"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "ul" | "ol" | "span" | "header" | "footer" | "figure";
};

// NOTE: Apple 公式サイトに近い ease-out-expo 系のイージング
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function getOffset(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  distance = 32,
  once = true,
  amount = 0.2,
  className,
  as = "div",
}: RevealProps) {
  const offset = getOffset(direction, distance);
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: EASE, delay },
    },
  };

  const MotionTag = motion[as] as unknown as (
    props: ComponentProps<typeof motion.div>,
  ) => ReactNode;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
  className?: string;
  as?: RevealProps["as"];
};

// NOTE: 子要素が RevealItem の場合、親から順番に delay を伝搬してスタガード登場させる
export function RevealGroup({
  children,
  stagger = 0.1,
  delay = 0,
  once = true,
  amount = 0.15,
  className,
  as = "div",
}: RevealGroupProps) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const MotionTag = motion[as] as unknown as (
    props: ComponentProps<typeof motion.div>,
  ) => ReactNode;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={container}
    >
      {children}
    </MotionTag>
  );
}

type RevealItemProps = {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  duration?: number;
  className?: string;
  as?: RevealProps["as"];
};

export function RevealItem({
  children,
  direction = "up",
  distance = 28,
  duration = 0.8,
  className,
  as = "div",
}: RevealItemProps) {
  const offset = getOffset(direction, distance);
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: EASE },
    },
  };

  const MotionTag = motion[as] as unknown as (
    props: ComponentProps<typeof motion.div>,
  ) => ReactNode;

  return <MotionTag className={className} variants={variants}>{children}</MotionTag>;
}
