export interface Service {
    id: number;
    title: string;
    image: string;
    description: string;
}

export const services: Service[] = [
    {
        id: 1,
        title: "Real Estate Photography",
        image: "/assets/Real-Estate.jpeg",
        description: "Aerial shots of a property are no longer reserved for super high-end properties. Drones have dramatically reduced the price of these unique perspectives, so take advantage of the opportunity to provide your potential buyer with a bird’s-eye view of their future home."
    },
    {
        id: 2,
        title: "Weddings",
        image: "/assets/Weddings.jpeg",
        description: "Capture your nuptials in a dynamic, exciting, and beautiful way. Drone photography provides a unique and special perspective of your wedding day. Never forget the magic – highlight the events and the splendor of the venue, whether it be on a majestic waterfront, a rugged mountaintop, or a sprawling estate."
    },
    {
        id: 3,
        title: "Inspections",
        image: "/assets/Inspections.jpeg",
        description: "By using a drone to evaluate the condition of an asset, you avoid having to place yourself in a dangerous situation. Instead of climbing several stories in the air on a tower to take a close look at a guy-wire, or scaling scaffolding to view construction progress, why not send a drone instead?"
    },
    {
        id: 4,
        title: "3D Modeling",
        image: "/assets/view-tank-container-water-storage-removebg.png",
        description: "We use advanced software to combine data from hundreds of images to produce accurate 3D models of construction sites, buildings, and properties."
    },
    {
        id: 5,
        title: "Orthomosaic Mapping",
        image: "/assets/ortho.jpg",
        description: "Orthomosaic mapping is a technique that stitches together hundreds of aerial images to create a detailed, high-resolution map of a large area. This is a great tool for construction, agriculture, and land development."
    },
    {
        id: 6,
        title: "Custom Requests",
        image: "/assets/drone-removebg.png",
        description: "We are always up for a challenge and love to think outside the box. Contact us to discuss your project and we will work with you to create a custom solution for your unique needs.  "
    },
];