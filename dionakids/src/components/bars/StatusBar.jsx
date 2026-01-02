import "./StatusBar.css";

const StatusBar = ({
  label,
  value,
  color,
  valueText, // "100%" | "MAIS DE 9000"
}) => {
  return (
    <div className="status-bar">
      <div className="status-header">
        <span className="label">{label}</span>
        <span className="value">{valueText}</span>
      </div>

      <div className="bar-bg">
        <div
          className="bar-fill"
          style={{
            width: `${value}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

export default StatusBar;
