import { useEffect } from 'react';


function Oneko() {
  useEffect(() => {
    // Cria a tag <script> dinamicamente
    const script = document.createElement('script');
    script.src = "./oneko/oneko.js"; // Caminho a partir da pasta public
    script.async = true;

    // Adiciona o script ao corpo do site
    document.body.appendChild(script);

    // Limpeza: remove o script se o componente for desmontado
    return () => {
      document.body.removeChild(script);
      // Dica: se o oneko criar uma <div id="oneko"> na tela, 
      // é bom removê-la aqui na limpeza também!
    };
  }, []);

  return (
    <div>
      <p>O gatinho deve aparecer em breve...</p>
    </div>
  );
}

export default Oneko