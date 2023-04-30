import { useState } from "react";

const TextNode: React.FC<{
  text: string;
  isEditing?: boolean;
  onSave?: (label: string) => void;
}> = ({ text, isEditing, onSave }) => {
  const [label, setLabel] = useState(text);
  const [_isEditing, setIsEditing] = useState(!!isEditing);
  return _isEditing ? (
    <input
      autoFocus
      onKeyUp={(e) => {
        if (e.key.toLowerCase() === "enter") {
          setIsEditing(false);
          onSave?.(label);
        }
      }}
      onBlur={(e) => {
        setIsEditing(false);
        onSave?.(label);
      }}
      value={label}
      onChange={(e) => {
        setLabel(e.target.value);
      }}
    />
  ) : (
    <span
      onClick={() => {
        setIsEditing(true);
      }}
    >
      {label}
    </span>
  );
};

export default TextNode;
