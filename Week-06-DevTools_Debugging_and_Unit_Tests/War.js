/*
Welcome to War: Here are the instructions
    The goal is to be the first player to win all 52 cards

    # The Deal
        The deck is divided evenly, with each player receiving 26 cards, 
        dealt one at a time, face down. 
        Anyone may deal first. Each player places their stack of cards face down, in front of them.

    # The Play
        Each player turns up a card at the same time 
        and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.

        If the cards are the same rank, it is War. 
        Each player turns up one card face down and one card face up. 
        The player with the higher cards takes both piles (six cards). 
        If the turned-up cards are again the same rank, 
        each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on.

    # How to Keep Score
        The game ends when one player has won all the cards.




These are the classes we will want to consider
    Card
    Deck
    Player

We will have many cards in the deck, they should be shuffled
a deck gives a hand to a player

*/


class Card {
    constructor(){
        this.face
        this.val
    }
}

class Deck {
    constructor(){
        this.cards_in_deck = []
    }

    deal(){
        // Deal 5 cards
    }
}

class Player {
    constructor(){
        this.hand
    }

    getCards(){
        // 
    }
}
