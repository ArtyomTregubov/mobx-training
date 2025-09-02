import { observer } from "mobx-react";
import CardsStore from "../stores/CardsStore";

export const Cards = observer(() => {
    const superHeros = CardsStore.cards;
    
    return (

        <section className="cards">
            {superHeros.map((item) => (
                <article key={item.id} className="card">
                    <img src={item.image} alt="картинка супергероя" className="card-image" />
                    <span className="card-name">{item.name}</span>
                </article>
        ))}
        </section>
    )
}); 
