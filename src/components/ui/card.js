
export function Card({ children }) {
  return <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}>{children}</div>;
}
export function CardContent({ children }) {
  return <div>{children}</div>;
}
