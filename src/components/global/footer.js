import React from "react"
import { Link } from "gatsby"

import Container from "./container"

const Footer = props => {
  return (
    <footer className="bg-ziggurat">
      <Container>
        <div className="flex flex-wrap py-8 text-gray-800">
          <div className="w-full pb-4 lg:w-1/2">
            <h2 className="pb-4 text-lg font-bold">Contenido</h2>
            <Link to="/articles" className='block pb-2'>Artículos</Link>
            <Link to="/authors" className='block pb-2'>Autores</Link>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="pb-4 text-lg font-bold">
              Más de la Academia de Tolaria
            </h2>
            <Link to="/about" className='block pb-2'>Acerca</Link>
            <Link to="/contact" className='block pb-2'>Contacto</Link>
          </div>
        </div>
      </Container>
      <div className="text-xs bg-gray-500 text-white text-center">
        <p>
          El contenido de este sitio está bajo la{" "}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            licencia de Creative Commons
            Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional
          </a>
          .
        </p>
        <p>
          Wizards of the Coast, Magic: The Gathering y sus logos son marcas
          registradas de Wizards of the Coast LLC. &#169; 1995-2020. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
