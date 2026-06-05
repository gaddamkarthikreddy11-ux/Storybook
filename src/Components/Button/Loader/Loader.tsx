import React from "react";
import "./Loader.css";

export type LoaderType =
  | "spinner"
  | "dots"
  | "bars"
  | "pulse"
  | "ring"
  | "gradient";

export type LoaderSize = "small" | "medium" | "large";

export interface LoaderProps {
  type?: LoaderType;
  text?: string;
  size?: LoaderSize;
  color?: string;
}

const sizeMap: Record<LoaderSize, number> = {
  small: 36,
  medium: 50,
  large: 80,
};

const Loader: React.FC<LoaderProps> = ({
  type = "spinner",
  text = "Loading...",
  size = "medium",
  color = "#2563eb",
}) => {
  const pixelSize = sizeMap[size];

  const spinnerStyle: React.CSSProperties = {
    width: pixelSize,
    height: pixelSize,
    borderTopColor: color,
    borderWidth: `${Math.max(4, Math.round(pixelSize / 10))}px`,
  };

  const dotsStyle: React.CSSProperties = {
    ["--dot-size" as any]: `${Math.max(8, Math.round(pixelSize / 5))}px`,
    ["--dot-color" as any]: color,
  };

  const barsStyle: React.CSSProperties = {
    ["--bar-width" as any]: `${Math.max(6, Math.round(pixelSize / 8))}px`,
    ["--bar-height" as any]: `${Math.max(24, Math.round(pixelSize * 0.8))}px`,
    ["--bar-gap" as any]: `${Math.max(4, Math.round(pixelSize / 12))}px`,
    ["--bar-color" as any]: color,
  };

  const pulseStyle: React.CSSProperties = {
    width: pixelSize,
    height: pixelSize,
    background: color,
  };

  const ringStyle: React.CSSProperties = {
    width: pixelSize,
    height: pixelSize,
    borderColor: color,
    borderWidth: `${Math.max(4, Math.round(pixelSize / 10))}px`,
  };

  const gradientStyle: React.CSSProperties = {
    width: pixelSize,
    height: pixelSize,
    background: `linear-gradient(135deg, ${color}, purple)`,
  };

  return (
    <div className="loader-wrapper">
      {type === "spinner" && (
        <div className="spinner" style={spinnerStyle} />
      )}

      {type === "dots" && (
        <div className="dots-loader" style={dotsStyle}>
          {[1, 2, 3].map((_, i) => (
            <span key={i} />
          ))}
        </div>
      )}

      {type === "bars" && (
        <div className="bars-loader" style={barsStyle}>
          {[1, 2, 3, 4].map((_, i) => (
            <span key={i} />
          ))}
        </div>
      )}

      {type === "pulse" && (
        <div className="pulse-loader" style={pulseStyle} />
      )}

      {type === "ring" && (
        <div className="ring-loader" style={ringStyle} />
      )}

      {type === "gradient" && (
        <div className="gradient-loader" style={gradientStyle} />
      )}

      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

export default Loader;
