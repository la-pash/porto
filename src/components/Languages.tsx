import React from 'react';

const Languages = () => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold text-blue-400 mb-2">Languages</h3>
      <div className="flex justify-center gap-4">
        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">English - Fluent</span>
        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">French - Conversational</span>
        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">Arabic - Native</span>
      </div>
    </div>
  );
};

export default Languages;
