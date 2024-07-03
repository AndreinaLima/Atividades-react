import "./Postagem.css"

const titulo = "Titulo da postagem";
const linkImagem = "https://picsum.photos/200";

function Postagem() {
  return (
    <article className="section-postagem">
      <h1 className="titulo-postagem">{titulo}</h1>
      <img src={linkImagem} alt="Imagem aleatória" />
      <p className="paragrafo-postagem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        accusantium, excepturi totam mollitia doloribus minima repudiandae quas
        voluptate dolor consequuntur vitae natus, ullam eaque? Voluptates saepe
        optio accusamus ducimus pariatur!
      </p>
    </article>
  )
}

export default Postagem;