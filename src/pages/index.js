import React from "react"
import { Link } from "gatsby"

import Container from "../components/global/container"
import Layout from "../components/global/layout"

export default function Home() {
  return (
    <Layout>
      <Container>
        <Jumbotron
          title="La Academia de Tolaria"
          subtitle="Sitio de la comunidad de Magic de Costa Rica"
        />
        <Recents />
      </Container>
    </Layout>
  )
}

const Jumbotron = props => {
  return (
    <div className="py-16">
      <h1 className="py-4 text-6xl">{props.title}</h1>
      <p className="pr-32 text-xl">{props.subtitle}</p>
    </div>
  )
}

const Recents = props => {
  return (
    <div className="py-16">
      <h2 className="py-4 text-3xl">Articulos recientes</h2>
      <div className="flex flex-wrap">
        <Card
          title="Torneo Modern AFK 4/6/2019"
          summary="Resultados del torneo del pasado miercoles en la tienda AFK, San Pedro"
        />
      </div>
    </div>
  )
}

const Card = props => {
  return (
    <div className="w-full lg:w-1/3 p-4 border-2 border-ziggurat">
      <h3 className="pb-4 font-bold">{props.title}</h3>
      <p className='pb-4'>{props.summary}</p>
      <Link to="/torneo" className="underline">
        Leer más
      </Link>
    </div>
  )
}
