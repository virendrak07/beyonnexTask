import React from 'react';

const TargetTemperatureComponent = ({ minTemp, maxTemp, targetTemp }) => {
  const tempRange = maxTemp - minTemp;
  const legSeparation = 30;
  const legLength = 40;

  const leftLegX1 = 50 - legSeparation;
  const leftLegY1 = 90;
  const leftLegX2 = leftLegX1 - legLength * Math.cos(Math.PI / 4);
  const leftLegY2 = leftLegY1 + legLength * Math.sin(Math.PI / 4);

  const rightLegX1 = 50 + legSeparation;
  const rightLegY1 = 90;
  const rightLegX2 = rightLegX1 + legLength * Math.cos(Math.PI / 4);
  const rightLegY2 = rightLegY1 + legLength * Math.sin(Math.PI / 4);

  const targetRotation = 90 + (tempRange >= 0 ? 180 : 0) + ((targetTemp - minTemp) / tempRange) * 180;

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto' }}>
        <svg width="100" height="100">
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#707070" strokeWidth="4" />
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="10"
            stroke="blue"
            strokeWidth="4"
            transform={`rotate(${targetRotation}, 50, 50)`}
          />
          <line x1={25} y1={81} x2={leftLegX2} y2={leftLegY2} stroke="black" strokeWidth="4" />
          <line x1={75} y1={81} x2={rightLegX2} y2={rightLegY2} stroke="black" strokeWidth="4" />
        </svg>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 0)',
            textAlign: 'center',
            top: '50%',
            marginTop: '-5px',
          }}
        >
          <div style={{ marginTop: '70px' }}>{targetTemp}°C</div>
        </div>
      </div>
    </div>
  );
};

export default TargetTemperatureComponent;