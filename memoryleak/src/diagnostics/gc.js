const { PerformanceObserver } = require('perf_hooks');

class MonitorGC {

    constructor() {

        // Create a performance observer
        this.obs = new PerformanceObserver(list => {
            const entry = list.getEntries()[0];
            /*
            The entry is an instance of PerformanceEntry containing
            metrics of a single garbage collection event.
            For example:
            PerformanceEntry {
            name: 'gc',
            entryType: 'gc',
            startTime: 2820.567669,
            duration: 1.315709,
            kind: 1
            }
            */
            console.log(entry.toJSON);
        });

    }

    ObserveGC() {
        // Subscribe to notifications of GCs
        this.obs.observe({ entryTypes: ['gc'] });
    }

    DestroyObserve() {
        // Stop subscription
        this.obs.disconnect();
    }

}

module.exports = MonitorGC;