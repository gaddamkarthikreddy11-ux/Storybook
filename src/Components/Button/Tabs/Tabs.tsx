import React, { useState } from "react";
import "./Tabs.css";

export interface TabItem {
  label: string;
  content: string;
  icon?: React.ReactNode;
}

export type TabsType =
  | "underline"
  | "pill"
  | "box"
  | "gradient"
  | "glass"
  | "vertical";

export interface TabsProps {
  type?: TabsType;
  tabs: TabItem[];

  // ✅ NEW STYLE PROPS
  bgColor?: string;
  tabBgColor?: string;
  activeColor?: string;
}

const Tabs: React.FC<TabsProps> = ({
  type = "underline",
  tabs,

  bgColor = "#ffffff",
  tabBgColor = "#e5e7eb",
  activeColor = "#2563eb",
}) => {
  const [active, setActive] = useState(0);

  return (
    <div
      className={`tabs-wrapper ${type}`}
      style={{ background: bgColor }}
    >
      {/* Tabs Header */}
      <div className="tabs-header">
        {tabs.map((tab, index) => {
          const isActive = active === index;

          return (
            <button
              key={index}
              className={`tab-btn ${isActive ? "active" : ""}`}
              onClick={() => setActive(index)}
              style={{
                background: isActive
                  ? activeColor
                  : tabBgColor,
                color: isActive ? "#fff" : "#000",
              }}
            >
              {tab.icon && (
                <span className="tab-icon">
                  {tab.icon}
                </span>
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="tabs-content">
        <h2>{tabs[active].label}</h2>
        <p>{tabs[active].content}</p>
      </div>
    </div>
  );
};

export default Tabs;