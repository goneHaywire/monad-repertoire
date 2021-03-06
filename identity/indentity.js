const Identity = val => ({
        val,

        map: fn => Identity(fn(val)),

        // equivalent to each other
        flatMap: fn => fn(val),
        chain: fn => fn(val),
        bind: fn => fn(val),

        ap: M => Identity(M.val(val)),
        join: () => val,

        inspect: () => `Identity(${val})`,
});

// equivalent to each other
Identity.of = (val) => Identity(val);
Identity.unit = (val) => Identity(val);

export Identity;
