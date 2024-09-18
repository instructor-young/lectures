import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-y-4">
      {/* contained */}
      <Button size="sm" intent="primary" variant="contained" />
      <Button size="md" intent="secondary" variant="contained" />
      <Button size="lg" intent="danger" variant="contained" />
      <Button size="md" intent="warning" variant="contained" />
      {/* outlined */}
      <Button size="sm" intent="primary" variant="outlined" />
      <Button size="md" intent="secondary" variant="outlined" />
      <Button size="lg" intent="danger" variant="outlined" />
      <Button size="md" intent="warning" variant="outlined" />
    </main>
  );
}

export default App;
