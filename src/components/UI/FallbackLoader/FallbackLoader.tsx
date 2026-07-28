interface FallbackLoaderProps {
  minHeight?: string;
}

export const FallbackLoader = ({
  minHeight = "100vh",
}: FallbackLoaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight,
        width: "100%",
      }}
    >
      <span
        style={{
          width: "48px",
          height: "48px",
          border: "4px solid rgba(0, 0, 0, 0.1)",
          borderBottomColor: "var(--accent-color)",
          borderRadius: "50%",
          display: "inline-block",
          boxSizing: "border-box",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default FallbackLoader;
