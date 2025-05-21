type Watcher = (data:any)=>void;

const observe = (obj:any):[any,(w:Watcher)=>void] => {

    const watchers:Watcher[] = [];

    const handler = {
        set: (target, prop, value) => {
            console.log(`Setting property ${String(prop)} to ${value}`);
            const oldValue = target[prop];
            target[prop] = value;
            if (oldValue !== value) {
                watchers.forEach(watcher => {
                    watcher({
                        prop: String(prop),
                        oldValue,
                        newValue: value,
                        target
                    });
                })
            }
            return true;
        }
    };

    const watch = (f: Watcher) => {
        watchers.push(f);
    }

    return [new Proxy(obj,handler), watch];
};

export default observe;