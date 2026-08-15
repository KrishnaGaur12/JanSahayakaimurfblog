import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  // A simple hack to highlight keywords with marigold for visual effect
  // Real implementation would use Prism.js or similar
  const highlightCode = (str: string) => {
    return str
      .replace(/(def|async|return|await|True|False|@function_tool)/g, '<span style="color: var(--marigold)">$1</span>')
      .replace(/(".*?"|'.*?')/g, '<span style="color: var(--teal)">$1</span>');
  };

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
    </pre>
  );
};
