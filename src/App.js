import Board from './components/Board'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}> {/*react dnd library implemented*/}
        <Board/>
      </DndProvider>
    </>
  );
}
export default App;
