import '@/assets/styles/uno.css';
import { createRoot } from 'react-dom/client';
import InsertNode from './InsertNode';

function init() {
  const rootContainer = document.querySelector('#__root');
  if (!rootContainer) throw new Error("Can't find Panel root element");
  const root = createRoot(rootContainer);
  root.render(<InsertNode />);
}

init();
