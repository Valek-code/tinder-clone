import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card"
import './ColnCards.css'   
import database from './firebase'


function ColnCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {

        const unsubscribe = database.collection('people').onSnapshot(snapshot => (

            setPeople(snapshot.docs.map(doc => doc.data()))

        ))

        return () => {

            unsubscribe();

        }

    }, []);

    return (
        <div className="cardContainer">

            {people.map((person) => (
    
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up','down']}
                >
                    <div className="card" style={{ backgroundImage: `url('${person.url}')` }}>

                        <h3>{ person.name }</h3>

                    </div>

                </TinderCard>

                ))}

        </div>
        )
}

export default ColnCards