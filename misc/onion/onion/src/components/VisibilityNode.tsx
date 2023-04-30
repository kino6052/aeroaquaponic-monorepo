const VisibilityNode: React.FC<
  React.PropsWithChildren<{ isVisible: boolean }>
> = ({ isVisible, children }) => {
  return (
    <span style={{ display: isVisible ? "initial" : "none" }}>{children}</span>
  );
};

export default VisibilityNode;
