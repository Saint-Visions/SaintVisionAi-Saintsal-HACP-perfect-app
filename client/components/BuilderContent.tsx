import React from "react";

// Placeholder component - Builder.io integration disabled for build
interface BuilderContentProps {
  model: string;
  content?: any;
  data?: any;
  options?: any;
}

export const BuilderContent: React.FC<BuilderContentProps> = ({
  model,
  content,
  data = {},
  options = {},
}) => {
  return (
    <div className="min-h-screen bg-charcoal-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gold-300 mb-4">Builder Content</h1>
        <p className="text-white/80">Builder.io integration temporarily disabled for build.</p>
      </div>
    </div>
  );
};

export default BuilderContent;
