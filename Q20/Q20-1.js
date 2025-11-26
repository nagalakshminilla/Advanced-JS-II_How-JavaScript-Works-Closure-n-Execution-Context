function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            console.log(`Current count: ${count}`);
            return count;
        },
        decrement: function() {
            count--;
            console.log(`Current count: ${count}`);
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}
console.log("=== Single Counter Example ===");
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();

console.log("\n=== Multiple Independent Counters ===");
const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();
counter1.increment();

counter2.increment();
counter2.decrement();

console.log("\n=== Counter Privacy Demonstration ===");
console.log("Direct access to count:", counter1.count); 
console.log("Using getCount method:", counter1.getCount());