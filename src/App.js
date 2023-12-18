import { useState } from 'react';
import './App.css';
import Layout from './components/layout/Layout'
function App() {
  const [loading, setLoading] = useState(true);
  return (
    <Layout></Layout>
  )
}

export default App;
