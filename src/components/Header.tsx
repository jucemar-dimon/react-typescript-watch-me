export default function (props: GenreResponseProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {props.title}</span></span>
    </header>
  )
}

interface GenreResponseProps { 
  title: string;
}