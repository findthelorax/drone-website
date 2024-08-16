const dinosaurFacts = [
    "Did you know? The Tyrannosaurus rex had a bite force of over 12,000 pounds...",
    "Did you know? The Stegosaurus had a brain the size of a walnut...",
    "Did you know? The Triceratops had three horns on its face...",
    "Did you know? The Velociraptor was about the size of a turkey...",
    "Did you know? The Brachiosaurus had a long neck to reach high vegetation...",
    "Did you know? The Spinosaurus was the largest carnivorous dinosaur...",
    "Did you know? The Ankylosaurus had a club-like tail for defense...",
    "Did you know? The Diplodocus was one of the longest dinosaurs...",
    "Did you know? The Pteranodon was a flying reptile, not a dinosaur...",
    "Did you know? The Allosaurus was a top predator in the Jurassic period...",
    "Did you know? The Argentinosaurus is believed to be the largest dinosaur ever...",
    "Did you know? The Microraptor had four wings and could glide...",
    "Did you know? The Parasaurolophus had a long, curved crest on its head...",
    "Did you know? The Iguanodon had thumb spikes for defense...",
    "Did you know? The Compsognathus was one of the smallest dinosaurs...",
    "Did you know? The Apatosaurus was once known as Brontosaurus...",
    "Did you know? The Deinonychus had a large, sickle-shaped claw on each foot...",
    "Did you know? The Gallimimus could run up to 30 miles per hour...",
    "Did you know? The Oviraptor was initially thought to be an egg thief...",
    "Did you know? The Pachycephalosaurus had a thick, domed skull...",
    "Did you know? The Therizinosaurus had long, clawed hands...",
    "Did you know? The Troodon had one of the largest brains relative to its body size...",
    "Did you know? The Utahraptor was one of the largest raptors...",
    "Did you know? The Maiasaura is known as the 'good mother lizard'...",
    "Did you know? The Carnotaurus had small, vestigial arms like the T. rex..."
];

export const getRandomDinosaurFact = () => {
    const randomIndex = Math.floor(Math.random() * dinosaurFacts.length);
    return dinosaurFacts[randomIndex];
};