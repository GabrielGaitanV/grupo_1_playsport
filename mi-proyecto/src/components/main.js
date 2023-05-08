import React from "react";
import CardsProd from '../components/cards/cardsProd'
import CardsUser from '../components/cards/cardsUser'
import CardsCate from '../components/cards/cardsCate'
import CardsUProd from '../components/cards/cardsUProd'
import CardsUUser from '../components/cards/cardsUUser'
import CardsDest from '../components/cards/cardsDest'
import CardsDepo from '../components/cards/cardsDepo'
import CardsHom from '../components/cards/cardsHom'
import CardsMuj from '../components/cards/cardsMuj'
import CardsNiñ from '../components/cards/cardsNiñ'
import TablaP from '../components/tablas/tablaP'
import TablaU from '../components/tablas/tablaU'


function Main() {
    return (
    <div>
        <div className="panelesPrin">
            <CardsProd  titulos='Total de productos' />
            <CardsUser titulos='Total de usuarios'/>
            <CardsCate titulos='Total de categorias '/>
        </div>
        <div className="panelesPrin">
            <CardsUProd titulos='Ultimo producto creado'/>
            <CardsUUser titulos='Ultimo usuario creado'/>
        </div>
        <h2 className="titulo" id="Categorias">Categorias</h2>
        <div className="panelesPrin">
            <CardsDest titulos='Productos en destacado'/>
            <CardsDepo titulos='Productos en deporte'/>
        </div>
        <div className="panelesPrin">
            <CardsHom titulos='Productos en hombre'/>
            <CardsMuj titulos='Productos en mujer'/>
            <CardsNiñ titulos='Productos en niño'/>
        </div>
        <br />
        <h2 className="titulo" id="Productos">Productos</h2>
        <br />
        <div className="panel productos">
            <TablaP />
        </div>
        <br />
        <h2 className="titulo" id="Usuarios">Usuarios</h2>
        <br />
        <div className="panel usuarios">
            <TablaU/>
        </div>
    </div>
    );
  }

export default Main;