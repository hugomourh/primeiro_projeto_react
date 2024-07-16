import logo from './logo.svg';
import estilo from './App.css';

function  App() {
  return (
   <div>
    <header>
      <h3 className='paragrafo_react'>React JS</h3>
    </header>

    <main>
      <div className='subtitulo'>
        <h1 className='subtitulo_react'>React JS</h1>
        <p className='titulo_biblioteca'>Biblioteca JavaScript SPA</p>
        <a href='https://pt-br.legacy.reactjs.org/'target="_blank">Site Oficial</a>
      </div>
    </main>

    <section>
      <div className='requisitos'>
      <h2>Requisitos</h2>
      <p>Veja abaixo os requisitos minimos para aprender React JS</p>
      </div>
      <div className='agrupar'>
      <div className='elementos'>
        <h3>HTML</h3>
        <p>Aprender a estruturar os elementos da página em HTML.</p>
      </div>

      <div className='elementos'>
        <h3>CSS</h3>
        <p>Aprender a estatilisar os elementos da página com CSS.</p>
      </div>
    

    <div className='elementos' >
      <h3>JAVASCRIPT</h3>
      <p>Aprender a linguagem utilizada pelo React JS, o JavaSCRIPT</p>
    </div>
    </div>
    
    </section>

    <footer>
      <p>Curso de introdução de React JS</p>
    </footer>
   </div>
  );
}

export default App;
