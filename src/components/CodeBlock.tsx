import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  // A simple hack to highlight keywords with marigold for visual effect
  // Real implementation would use Prism.js or similar
  const highlightCode = (str: string) => {
    return str.replace(
      /(def|async|return|await|True|False|@function_tool)|(".*?"|'.*?')/g,
      (match, keyword, strVal) => {
        if (keyword) return `<span style="color: var(--marigold)">${keyword}</span>`;
        if (strVal) return `<span style="color: var(--teal)">${strVal}</span>`;
        return match;
      }
    );
  };

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
    </pre>
  );
};
