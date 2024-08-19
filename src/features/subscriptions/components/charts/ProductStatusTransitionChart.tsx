import React from "react";

import { Group } from "@visx/group";
import { hierarchy, Tree } from "@visx/hierarchy";
import { LinkHorizontal } from "@visx/shape";

import { type ProductStatus, ProductStatuses } from "~/database/model";

interface TreeNode<S extends ProductStatus | "root" = "root"> {
  status: S;
  isExpanded?: boolean;
  children?: TreeNode<ProductStatus>[];
}

const defaultMargin = { top: 5, left: 45, right: 15, bottom: 5 };

export interface ProductStatusTransitionChartProps {
  readonly width: number;
  readonly height: number;
  readonly margin?: { top: number; right: number; bottom: number; left: number };
  readonly from: ProductStatus;
  readonly to: ProductStatus[];
}

/* This component is currently under construction and is not yet used in the application.  Ideally,
   we would eventually use something like this to illustrate status change transitions for
   subscription configurations. */
export const ProductStatusTransitionChart = ({
  from,
  to,
  width: totalWidth,
  height: totalHeight,
  margin = defaultMargin,
}: ProductStatusTransitionChartProps) => {
  const innerWidth = totalWidth - margin.left - margin.right;
  const innerHeight = totalHeight - margin.top - margin.bottom;

  const sizeWidth: number = innerHeight;
  const sizeHeight: number = innerWidth;

  return (
    <svg width={totalWidth} height={totalHeight}>
      {/* <Group top={margin.top} left={margin.left}> */}
      <Tree
        root={hierarchy(
          { status: from, children: to.map(status => ({ status, children: [] })) },
          d => d.children,
        )}
        size={[sizeWidth, sizeHeight]}
        separation={(a, b) => (a.parent === b.parent ? 1 : 0.5) / a.depth}
      >
        {tree => (
          <Group top={0} left={60}>
            {tree.links().map((link, i) => (
              <LinkHorizontal
                key={i}
                data={link}
                // percent={stepPercent}
                stroke="rgb(254,110,158,0.6)"
                strokeWidth="1"
                fill="none"
              />
            ))}
            {tree.descendants().map((node, key) => {
              const width = 120;
              const height = 20;

              return (
                <Group top={node.x} left={node.y} key={key}>
                  <rect
                    height={height}
                    width={width}
                    y={-height / 2}
                    x={-width / 2}
                    fill={ProductStatuses.getModel(node.data.status).backgroundColor}
                    stroke={ProductStatuses.getModel(node.data.status).textColor}
                    strokeWidth={1}
                    rx={10}
                    strokeDasharray={node.data.children ? "0" : "2,2"}
                  />
                  <text
                    dy=".33em"
                    fontSize={12}
                    fontWeight={500}
                    fontFamily="var(--font-inter)"
                    textAnchor="middle"
                    style={{ pointerEvents: "none" }}
                    fill={ProductStatuses.getModel(node.data.status).textColor}
                    // fill={node.depth === 0 ? "#71248e" : node.children ? "white" : "#26deb0"}
                  >
                    {ProductStatuses.getModel(node.data.status).shortLabel}
                  </text>
                </Group>
              );
            })}
          </Group>
        )}
      </Tree>
      {/* </Group> */}
    </svg>
  );
};
