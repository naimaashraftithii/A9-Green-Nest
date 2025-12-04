
import React from "react";

class RenderErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
   
    console.error("RenderErrorBoundary caught:", error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold text-red-600">
            Something went wrong.
          </h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default RenderErrorBoundary;
