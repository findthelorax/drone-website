export interface Service {
    id: number;
    title: string;
    image: string;
    description: string;
    background: string;
}

export const services: Service[] = [
    {
        id: 1,
        title: "Real Estate Photography",
        image: "/assets/Real-Estate.jpeg",
        description: "Aerial shots of a property are no longer reserved for super high-end properties. Drones have dramatically reduced the price of these unique perspectives, so take advantage of the opportunity to provide your potential buyer with a bird’s-eye view of their future home.",
        background: "#f0f0f0"
    },
    {
        id: 2,
        title: "Weddings",
        image: "/assets/Weddings.jpeg",
        description: "Capture your nuptials in a dynamic, exciting, and beautiful way. Drone photography provides a unique and special perspective of your wedding day. Never forget the magic – highlight the events and the splendor of the venue, whether it be on a majestic waterfront, a rugged mountaintop, or a sprawling estate.",
        background: "#e0e0e0"
    },
    {
        id: 3,
        title: "Inspections",
        image: "/assets/Inspections.jpeg",
        description: "By using a drone to evaluate the condition of an asset, you avoid having to place yourself in a dangerous situation. Instead of climbing several stories in the air on a tower to take a close look at a guy-wire, or scaling scaffolding to view construction progress, why not send a drone instead?",
        background: "#d0d0d0"
    },
    {
        id: 4,
        title: "3D Modeling",
        image: "/assets/3D-Modeling.jpeg",
        description: "We use advanced software to combine data from hundreds of images to produce accurate 3D models of construction sites, buildings, and properties.",
        background: "#d0d0d0"
    },
    {
        id: 5,
        title: "Orthomosaic Mapping",
        image: "/assets/Orthomosaic-Mapping.jpeg",
        description: "Description of Service 3",
        background: "#d0d0d0"
    },
    {
        id: 6,
        title: "Custom Requests",
        image: "/assets/drone.jpg",
        description: "Description of Service 3",
        background: "#d0d0d0"
    },
];