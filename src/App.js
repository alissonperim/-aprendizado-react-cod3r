import './App.css';
import { Card } from './Components/Card/Card';
import { UsuarioInfo } from './Components/Condicional/UsuarioInfo';
import { ParOuImpar } from './Components/Condicional/ParOuImpar';
import { ListaAlunos } from './Components/repeticao/ListaAlunos';
import { RepeticaoDesafio } from './Components/RepeticaoDesafio/RepeticaoDesafio';
import { DiretaPai } from './Components/ComunicacaoDireta/DiretaPai';

function App() {
  return (
    <div className="App">
      <div className="cards">
        <Card title="Renderização Condicional #2" cardStyle="card-4" titleStyle="title-4">
          <DiretaPai />
        </Card>

        <Card title="Renderização Condicional #2" cardStyle="card-3" titleStyle="title-3">
          <UsuarioInfo usuario={{ nome: "Alisson" }}></UsuarioInfo>
          <UsuarioInfo usuario={{ email: "alisson@honostorio.com" }}></UsuarioInfo>
        </Card>

        <Card title="Renderização Condicional" cardStyle="card-2" titleStyle="title-2">
          <ParOuImpar numero={20}></ParOuImpar>
        </Card>

        <Card title="Lista Produtos" cardStyle="card-1" titleStyle="title-1">
          <RepeticaoDesafio />
        </Card>

        <Card title="Lista Alunos">
          <ListaAlunos />
        </Card>
      </div>

    </div>
  );
}

export default App;
