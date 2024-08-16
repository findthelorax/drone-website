const sleussSlogans = [
    "Sky-High Shots, in All the Right Spots!",
    "With DKS, We Impress from Above, No Less!",
    "Up in the Sky, We’re the Go-To Guy!",
    "Capture the Scene, From Heights Unseen!",
    "From High Above, with Views You’ll Love!",
    
];

export const getRandomSleussSlogan = () => {
    const randomIndex = Math.floor(Math.random() * sleussSlogans.length);
    return sleussSlogans[randomIndex];
};