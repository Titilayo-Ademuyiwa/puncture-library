const SeeMore = () => {
    document.querySelector(".lists").classList.add("open");
};
const CloseMore = () => {
    document.querySelector(".lists").classList.remove("open");
};

const epilogues = {
    book1 : "The villagers said the old mansion at the edge of Hollow Creek sighed at night. They thought it was the wind. But when Evelyn moved in, she learned the truth—each sigh was a voice, calling the names of those buried in the walls.", 
    book2 : "Lena always avoided mirrors after midnight, a superstition her grandmother taught her.But one night, her reflection smiled first—and didn’t stop smiling." ,
    book3 : "Every night at 12:03, Jamie’s phone rang.No number. No sound.Until one night, a voice whispered, 'I’m outside your window.'",
    book4 : "When the power went out across the city, everyone thought it was just a grid failure.But in the darkness, something moved—something that had been waiting for the lights to go out again.",
    book5 : "The old well behind the farmhouse had been dry for decades.So when Mary heard her name echoing from inside, she leaned in to listen—and someone whispered back.",
    book6 : "Each November, the townsfolk left food at the scarecrow’s feet.No one remembered why.But when young Daniel forgot one year, the scarecrow came down from its post and knocked on his door.",
    book7 : "When the renovations began, the workers uncovered a hidden door behind the nursery wall. Inside: children’s toys, a rocking chair, and a note that read, 'Don’t wake her.'",
    book8 : "Deep in the woods stood a workshop filled with porcelain faces. The dollmaker never aged, though his dolls looked more lifelike each year. When a traveler stumbled inside, one doll had his face—and it blinked.",
    book9 : "He spilled coffee on her sketchbook, and she didn’t yell. Instead, she smiled. That smile would haunt him for years, long after the coffee dried.",
    book10 : "Spring had always been her favorite season, until he appeared, standing beneath the blossoming branches, changing everything with just one look.",
    book11 : "She wrote stories for strangers. He kept watch over the sea. And one stormy night, their worlds collided in ways neither could have imagined.",
    book12 : "He played a song on the piano, and her heart recognized it before her mind did. Music would bring them together—and tear them apart.",
    book13 : "Years apart, both carrying regrets. When fate pulled them back together, would love be enough to heal the wounds time had left behind?",
    book14 : "She came for the wine festival; he stayed for the solitude. By the time the lavender fields bloomed, neither wanted to leave.",
    book15 : "They noticed each other in passing. Always a glance, never a word. But sometimes, a glance is enough to spark a lifetime.",
    book16 : "Every letter she found in the attic was addressed to her—but from someone she had never met. Yet the words felt like home.",
    book17 : "Fear whispers 'stop.' Courage whispers, 'go anyway.' Greatness belongs to those who listen to courage.",
    book18 : "Small actions can lead to extraordinary results. One choice, one effort, one moment—can change everything.",
    book19 : "Every failure is a lesson disguised as defeat. And every defeat holds the key to your next victory.",
    book20 : "Change begins where comfort ends. The question is: are you willing to take the first step?",
    book21 : "When the world tells you 'no,' the right mindset says, 'watch me.' Success begins in your mind.",
    book22 : "Every successful person started somewhere. Ordinary beginnings do not define extraordinary endings.",
    book23 : "You are capable of more than you know. The journey is about discovering what already exists within you.",
    book24 : "The path everyone follows is easy. The road that challenges, stretches, and changes you—that is where life’s treasures lie.",
    book25 : "When the waves threatened to pull him under, he remembered the words his grandmother spoke. Faith could anchor even the most restless soul.",
    book26 : "They were ordinary people, facing ordinary struggles. Yet in moments of despair, the extraordinary became visible.",
    book27 : "Life is fleeting, yet something eternal burns within each soul. The challenge is learning how to see it, even when shadows fall.",
    book28 : "A small act of kindness, a whispered prayer, a heart willing to believe-sometimes faith begins with the smallest seeds.",
    book29 : "He had lost his way, wandering through life without purpose. Then a simple act of kindness reminded him: even the lost are seen.",
    book30 : "Each night, she knelt by her bedside, hands trembling, heart open. And though no answer came immediately, hope remained.",
    book31 : "Even in the darkest alley, a single candle can illuminate the path. And sometimes, that light comes from the most unexpected places.",
    book32 : "He stood at the edge of despair, unsure which path to take. Then he realized every journey starts with a single step—toward God."
};
const books = document.querySelectorAll(".book");
const storyContainer = document.querySelector(".story-container");
const readBooks = document.querySelector(".read-books");
books.forEach(book => {
    book.addEventListener("click", () => {
        const bookId = book.id;
        storyContainer.innerHTML = `<div class="story">${epilogues[bookId]}
        <button class="completed" onclick="EpilogueCompleted()">completed</button></div>`;
    });
});
const OpenPrologue = () => {
    document.querySelector(".books").style.display = "none";
    document.querySelector(".story-container").classList.add("show");
};
const EpilogueCompleted = () => {
    document.querySelector(".books").style.display = "grid";
    document.querySelector(".story-container").classList.remove("show");
};

 