import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { getCards } from '../../utilities/cards-api';
import { findOne } from '../../utilities/decks-api';
import Card from '../../components/Card/Card';
import './DeckDetailsPage.css';

export default function DeckDetailsPage({setDeckName, deckName, cards, setCards, user}) {

    let id = useParams().id;

    const [cardIndex, setCardIndex] = useState(0);
    const [thisDeck, setThisDeck] = useState("");

    function handleBack(evt) {
        evt.preventDefault();
        if (cardIndex > 0) {
            setCardIndex(cardIndex - 1)
        };
    };

    function handleNext(evt) {
        evt.preventDefault();
        if (cardIndex < (cards.length - 1)) {
            setCardIndex(cardIndex + 1)
        };
    };

    useEffect(function () {
        async function findDeck() {
            const oneDeck = await findOne(id);
            setThisDeck(oneDeck)
        }
        findDeck()
    }, [])

    useEffect(function () {
        async function findCards() {
            const myCards = await getCards(id);
            setCards(myCards);
        }
        findCards()
    }, []);

    let theCards= cards.map((card, index) => {
        return <Card card={card} key={card._id} />
    })

    return (
        <>
            <div className="topper"></div>
            {thisDeck.user === user._id ? 
                <Link to={`/managedeck/${id}`}>
                    <button className="form-button" onClick={()=>setDeckName(deckName)}>Edit Deck</button>
                </Link> 
                : 
                <div></div>
                }
            <div><br/></div>
            <div>
                {theCards[cardIndex]}
            </div>
            <br/>
            <button className="scroll-button" onClick={handleBack}>Back</button>
            <button className="scroll-button" onClick={handleNext}>Next</button>
        </>
    )
}