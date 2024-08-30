import '@/assets/styles/uno.css';
import '@/pages/panel/index.css';
import { createRoot } from 'react-dom/client';
import Panel from './Panel';

function init() {
  const rootContainer = document.querySelector('#__root');
  if (!rootContainer) throw new Error("Can't find Panel root element");
  const root = createRoot(rootContainer);
  root.render(<Panel />);
}

init();
