import React, { useState } from "react";
function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return (props: P) => {
    const [loading, setLoading] = useState(false);

    const handleToggleLoading = () => {
      setLoading((prev) => !prev);
    };

    return (
      <div className="example-box-3">
        {loading ? (
          <p style={{ marginTop: "10px" }}>⏳ Sedang memuat...</p>
        ) : (
          <WrappedComponent {...props} />
        )}

        <button onClick={handleToggleLoading} className="btn">
          {loading ? "Selesai Loading" : "Mulai Loading"}
        </button>
      </div>
    );
  };
}

export default withLoading;
