export function Button() {
  return <button>Click</button>;
}

export function LoginButton() {
  return <button>Login</button>;
}

export function Boot(){
  return (
    <div>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
    </div>
  );
}