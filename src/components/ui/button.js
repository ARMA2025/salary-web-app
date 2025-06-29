
export function Button({ children, ...props }) {
  return <button style={{ padding: '5px 10px', marginTop: '10px' }} {...props}>{children}</button>;
}
