import { useState } from 'react';
import EmotionSelector from './components/EmotionSelector';

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'serif' }}>
      <h1>🎭 Orphica</h1>
      <p>Stake what you feel. ETH meets emotion.</p>
      <EmotionSelector />
    </div>
  );
}
