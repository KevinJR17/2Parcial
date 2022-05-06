import '../styles/App.css';
import { tercer_componente } from './tercer_componente';
import matriz from '../matriz/matriz' 
function App() {
  return (
        <tercer_componente back={matriz[0].theme}/>
         <tercer_componente back={matriz[1].theme} />
         <tercer_componente back={matriz[2].theme} />
  );
}

export default App;