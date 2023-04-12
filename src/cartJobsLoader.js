import { getShoppingCart } from "./utilities/fakeDb";


const cartJobsLoader = async () => {
    const loadJob = await fetch('jobs.json');
    const jobs = await loadJob.json();

    const storedCart = getShoppingCart();
        const savedCart = [];

        for(const id in storedCart){
            const savedProducts = jobs.find(job => job.id === id );
            
            if(savedProducts){
                const quantity = storedCart[id];
                savedCart.push(quantity);
            }
        }
        return savedCart;
}

export default cartJobsLoader;
