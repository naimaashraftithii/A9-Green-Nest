import React from "react";
import ErrorState from "./ErrorState";

export default class RenderErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) { /* log if you want */ }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorState
          title="Something went wrong"
          message={this.state.error?.message || "Please try again."}
          onRetry={() => location.reload()}
        />
      );
    }
    return this.props.children;
  }
}
