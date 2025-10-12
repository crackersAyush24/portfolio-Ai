import React, { useEffect, useRef, FC } from 'react';

interface NeuralNetworkAnimationProps {
  darkMode?: boolean;
}

const NeuralNetworkAnimation: FC<NeuralNetworkAnimationProps> = ({ darkMode = false }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const nodes = svg.querySelectorAll('.neural-node');
    const connections = svg.querySelectorAll('.neural-connection');

    // Animate nodes
    nodes.forEach((node, index) => {
      const animationDelay = index * 200;
      setTimeout(() => node.classList.add('animate-pulse'), animationDelay);
    });

    // Animate connections
    connections.forEach((connection, index) => {
      const animationDelay = index * 100;
      setTimeout(() => connection.classList.add('animate-pulse'), animationDelay);
    });
  }, []);

  // Node colors based on theme
  const colors = {
    input: darkMode ? '#60a5fa' : '#3b82f6',       // blue
    hidden1: darkMode ? '#a78bfa' : '#8b5cf6',     // purple
    hidden2: darkMode ? '#4fd1c5' : '#14b8a6',     // teal
    output: darkMode ? '#fbbf24' : '#f97316',      // orange
    connection1: darkMode ? '#3b82f6' : '#60a5fa', // blue
    connection2: darkMode ? '#8b5cf6' : '#a78bfa', // purple
    connection3: darkMode ? '#14b8a6' : '#4fd1c5', // teal
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 transition-colors duration-500">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connections */}
        <g className="neural-connections">
          {/* Layer 1 → Layer 2 */}
          <line className="neural-connection stroke-1" x1="100" y1="150" x2="300" y2="100" stroke={colors.connection1} />
          <line className="neural-connection stroke-1" x1="100" y1="150" x2="300" y2="200" stroke={colors.connection1} />
          <line className="neural-connection stroke-1" x1="100" y1="150" x2="300" y2="300" stroke={colors.connection1} />
          <line className="neural-connection stroke-1" x1="100" y1="300" x2="300" y2="100" stroke={colors.connection1} />
          <line className="neural-connection stroke-1" x1="100" y1="300" x2="300" y2="200" stroke={colors.connection1} />
          <line className="neural-connection stroke-1" x1="100" y1="300" x2="300" y2="300" stroke={colors.connection1} />
          <line className="neural-connection stroke-1" x1="100" y1="450" x2="300" y2="100" stroke={colors.connection1} />
          <line className="neural-connection stroke-1" x1="100" y1="450" x2="300" y2="200" stroke={colors.connection1} />
          <line className="neural-connection stroke-1" x1="100" y1="450" x2="300" y2="300" stroke={colors.connection1} />

          {/* Layer 2 → Layer 3 */}
          <line className="neural-connection stroke-1" x1="300" y1="100" x2="500" y2="150" stroke={colors.connection2} />
          <line className="neural-connection stroke-1" x1="300" y1="100" x2="500" y2="300" stroke={colors.connection2} />
          <line className="neural-connection stroke-1" x1="300" y1="100" x2="500" y2="450" stroke={colors.connection2} />
          <line className="neural-connection stroke-1" x1="300" y1="200" x2="500" y2="150" stroke={colors.connection2} />
          <line className="neural-connection stroke-1" x1="300" y1="200" x2="500" y2="300" stroke={colors.connection2} />
          <line className="neural-connection stroke-1" x1="300" y1="200" x2="500" y2="450" stroke={colors.connection2} />
          <line className="neural-connection stroke-1" x1="300" y1="300" x2="500" y2="150" stroke={colors.connection2} />
          <line className="neural-connection stroke-1" x1="300" y1="300" x2="500" y2="300" stroke={colors.connection2} />
          <line className="neural-connection stroke-1" x1="300" y1="300" x2="500" y2="450" stroke={colors.connection2} />

          {/* Layer 3 → Output */}
          <line className="neural-connection stroke-1" x1="500" y1="150" x2="700" y2="300" stroke={colors.connection3} />
          <line className="neural-connection stroke-1" x1="500" y1="300" x2="700" y2="300" stroke={colors.connection3} />
          <line className="neural-connection stroke-1" x1="500" y1="450" x2="700" y2="300" stroke={colors.connection3} />
        </g>

        {/* Nodes */}
        <g className="neural-nodes">
          {/* Input Layer */}
          <circle className="neural-node" cx="100" cy="150" r="8" fill={colors.input} />
          <circle className="neural-node" cx="100" cy="300" r="8" fill={colors.input} />
          <circle className="neural-node" cx="100" cy="450" r="8" fill={colors.input} />

          {/* Hidden Layer 1 */}
          <circle className="neural-node" cx="300" cy="100" r="8" fill={colors.hidden1} />
          <circle className="neural-node" cx="300" cy="200" r="8" fill={colors.hidden1} />
          <circle className="neural-node" cx="300" cy="300" r="8" fill={colors.hidden1} />

          {/* Hidden Layer 2 */}
          <circle className="neural-node" cx="500" cy="150" r="8" fill={colors.hidden2} />
          <circle className="neural-node" cx="500" cy="300" r="8" fill={colors.hidden2} />
          <circle className="neural-node" cx="500" cy="450" r="8" fill={colors.hidden2} />

          {/* Output Layer */}
          <circle className="neural-node" cx="700" cy="300" r="10" fill={colors.output} />
        </g>
      </svg>
    </div>
  );
};

export default NeuralNetworkAnimation;
