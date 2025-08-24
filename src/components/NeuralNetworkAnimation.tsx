import React, { useEffect, useRef } from 'react';

const NeuralNetworkAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const nodes = svg.querySelectorAll('.neural-node');
    const connections = svg.querySelectorAll('.neural-connection');

    // Animate nodes
    nodes.forEach((node, index) => {
      const animationDelay = index * 200;
      setTimeout(() => {
        node.classList.add('animate-pulse');
      }, animationDelay);
    });

    // Animate connections
    connections.forEach((connection, index) => {
      const animationDelay = index * 100;
      setTimeout(() => {
        connection.classList.add('animate-pulse');
      }, animationDelay);
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Neural Network Connections */}
        <g className="neural-connections">
          {/* Layer 1 to Layer 2 */}
          <line className="neural-connection stroke-blue-400 stroke-1" x1="100" y1="150" x2="300" y2="100" />
          <line className="neural-connection stroke-blue-400 stroke-1" x1="100" y1="150" x2="300" y2="200" />
          <line className="neural-connection stroke-blue-400 stroke-1" x1="100" y1="150" x2="300" y2="300" />
          <line className="neural-connection stroke-blue-400 stroke-1" x1="100" y1="300" x2="300" y2="100" />
          <line className="neural-connection stroke-blue-400 stroke-1" x1="100" y1="300" x2="300" y2="200" />
          <line className="neural-connection stroke-blue-400 stroke-1" x1="100" y1="300" x2="300" y2="300" />
          <line className="neural-connection stroke-blue-400 stroke-1" x1="100" y1="450" x2="300" y2="100" />
          <line className="neural-connection stroke-blue-400 stroke-1" x1="100" y1="450" x2="300" y2="200" />
          <line className="neural-connection stroke-blue-400 stroke-1" x1="100" y1="450" x2="300" y2="300" />

          {/* Layer 2 to Layer 3 */}
          <line className="neural-connection stroke-purple-400 stroke-1" x1="300" y1="100" x2="500" y2="150" />
          <line className="neural-connection stroke-purple-400 stroke-1" x1="300" y1="100" x2="500" y2="300" />
          <line className="neural-connection stroke-purple-400 stroke-1" x1="300" y1="100" x2="500" y2="450" />
          <line className="neural-connection stroke-purple-400 stroke-1" x1="300" y1="200" x2="500" y2="150" />
          <line className="neural-connection stroke-purple-400 stroke-1" x1="300" y1="200" x2="500" y2="300" />
          <line className="neural-connection stroke-purple-400 stroke-1" x1="300" y1="200" x2="500" y2="450" />
          <line className="neural-connection stroke-purple-400 stroke-1" x1="300" y1="300" x2="500" y2="150" />
          <line className="neural-connection stroke-purple-400 stroke-1" x1="300" y1="300" x2="500" y2="300" />
          <line className="neural-connection stroke-purple-400 stroke-1" x1="300" y1="300" x2="500" y2="450" />

          {/* Layer 3 to Output */}
          <line className="neural-connection stroke-teal-400 stroke-1" x1="500" y1="150" x2="700" y2="300" />
          <line className="neural-connection stroke-teal-400 stroke-1" x1="500" y1="300" x2="700" y2="300" />
          <line className="neural-connection stroke-teal-400 stroke-1" x1="500" y1="450" x2="700" y2="300" />
        </g>

        {/* Neural Network Nodes */}
        <g className="neural-nodes">
          {/* Input Layer */}
          <circle className="neural-node fill-blue-500" cx="100" cy="150" r="8" />
          <circle className="neural-node fill-blue-500" cx="100" cy="300" r="8" />
          <circle className="neural-node fill-blue-500" cx="100" cy="450" r="8" />

          {/* Hidden Layer */}
          <circle className="neural-node fill-purple-500" cx="300" cy="100" r="8" />
          <circle className="neural-node fill-purple-500" cx="300" cy="200" r="8" />
          <circle className="neural-node fill-purple-500" cx="300" cy="300" r="8" />

          {/* Hidden Layer 2 */}
          <circle className="neural-node fill-teal-500" cx="500" cy="150" r="8" />
          <circle className="neural-node fill-teal-500" cx="500" cy="300" r="8" />
          <circle className="neural-node fill-teal-500" cx="500" cy="450" r="8" />

          {/* Output Layer */}
          <circle className="neural-node fill-orange-500" cx="700" cy="300" r="10" />
        </g>
      </svg>
    </div>
  );
};

export default NeuralNetworkAnimation;