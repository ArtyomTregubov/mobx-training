import { makeAutoObservable } from "mobx";

interface Card {
    id: number;
    name: string;
    image: string;
}

class CardsStore {
    cards: Card[] = [
        {
            id: 1,
            name: 'Batman', 
            image: 'https://avatars.mds.yandex.net/i?id=f0a27b1ef2cd85b58ea4019aa3e8df8e_l-10471435-images-thumbs&ref=rim&n=13&w=900&h=900',
        },
        {
            id: 2,
            name: 'Flash',
            image: 'https://masterpiecer-images.s3.yandex.net/52cf04367d9e11eea2fc3abd0be4d755:upscaled',
        }, 
        {
            id: 3, 
            name: 'Robin', 
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aaa79357-9476-4c1d-b9a8-6e881f2449d3/dgk4zah-17000d7a-6386-462b-a778-9ceda017dda8.jpg/v1/fill/w_894,h_894,q_70,strp/robin_dc_comics_by_buffy2ville_dgk4zah-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2FhYTc5MzU3LTk0NzYtNGMxZC1iOWE4LTZlODgxZjI0NDlkM1wvZGdrNHphaC0xNzAwMGQ3YS02Mzg2LTQ2MmItYTc3OC05Y2VkYTAxN2RkYTguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RXq6F1ZRhe7qOA865lkHw1wDxkIKrB3GpCdvcm_Fd5Y'
        }
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addCard = (card: Card): void => {
        this.cards = [...this.cards, card];
    }

    deleteCard = (id: number): void => {
        this.cards = this.cards.filter(card => card.id !== id);
    }

}

export default new CardsStore;