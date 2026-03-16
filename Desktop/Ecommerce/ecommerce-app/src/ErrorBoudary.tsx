import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("Error:", error);
    console.log("Error info", errorInfo);
  }

  render() {

    if (this.state.hasError) {
      return (
        <div
          style={{
            textAlign: "center",
            marginTop: "100px",
            fontFamily: "sans-serif"
          }}
        >
          <h1>Something went wrong</h1>
          <p>Please refresh the page.</p>

          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "20px",
              padding: "10px 15px",
              cursor: "pointer"
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;