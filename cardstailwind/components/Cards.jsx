import SATHISH from '../src/assets/images/luffy.jpg'
import SANJAY from '../src/assets/images/sanjii.jpeg'
import BALA from '../src/assets/images/zoro.jpg'

const Cards = () => {
const card = [
    { id: 1, image: SATHISH, name: "SATHISH", age: 23 },
    { id: 2, image: SANJAY, name: "SANJAY", age: 22 },
    { id: 3, image: BALA, name: "BALA", age: 23 },
];

return (
    <div className="w-full bg-purple-400 p-6 rounded-lg border border-black flex justify-around flex-wrap gap-6">
    
    {card.map((e) => (
        <div
        key={e.id}
        className="bg-cyan-300 border border-black rounded-lg w-64 p-4 flex flex-col items-center shadow-md"
        >
        <img
            src={e.image}
            className="w-24 h-24 rounded-full object-cover border border-black"
        />

        <h1 className="text-xl font-bold mt-3">{e.name}</h1>
        <h2 className="text-lg mt-1">{e.age}</h2>
        </div>
    ))}

    </div>
);
};

export default Cards;
