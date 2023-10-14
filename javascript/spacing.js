// You can custom every class about spacing
// margin-top: Loop through all elements containing class starting with 'mt-'
if (document.querySelectorAll('[class^="mt-"]')) {
    document.querySelectorAll('[class^="mt-"]').forEach(element => {
        // Get a list of classes on the element
        const classes = element.className.split(' ');

        // Loop through all class
        classes.forEach(cls => {
            if (cls.startsWith('mt-')) {
                // Get the value 'i' from the class name
                const i = parseInt(cls.substring(3)); // Remove 'mt-' and convert to number

                // Set margin-top value based on 'i' value
                element.style.marginTop = i + 'px';
            }
        });
    });
}

// margin-bottom: Loop through all elements containing class starting with 'mb-'
if (document.querySelectorAll('[class^="mb-"]')) {
    document.querySelectorAll('[class^="mb-"]').forEach(element => {
        // Get a list of classes on the element
        const classes = element.className.split(' ');

        // Loop through all class
        classes.forEach(cls => {
            if (cls.startsWith('mb-')) {
                // Get the value 'i' from the class name
                const i = parseInt(cls.substring(3)); // Remove 'mb-' and convert to number

                // Set margin-bottom value based on 'i' value
                element.style.marginBottom = i + 'px';
            }
        });
    });
}

// padding-top: Loop through all elements containing class starting with 'pt-'
if (document.querySelectorAll('[class^="pt-"]')) {
    document.querySelectorAll('[class^="pt-"]').forEach(element => {
        // Get a list of classes on the element
        const classes = element.className.split(' ');

        // Loop through all class
        classes.forEach(cls => {
            if (cls.startsWith('pt-')) {
                // Get the value 'i' from the class name
                const i = parseInt(cls.substring(3)); // Remove 'pt-' and convert to number

                // Set padding-top value based on 'i' value
                element.style.paddingTop = i + 'px';
            }
        });
    });
}

// padding-bottom: Loop through all elements containing class starting with 'pb-'
if (document.querySelectorAll('[class^="pb-"]')) {
    document.querySelectorAll('[class^="pb-"]').forEach(element => {
        // Get a list of classes on the element
        const classes = element.className.split(' ');

        // Loop through all class
        classes.forEach(cls => {
            if (cls.startsWith('pb-')) {
                // Get the value 'i' from the class name
                const i = parseInt(cls.substring(3)); // Remove 'pb-' and convert to number

                // Set padding-bottom value based on 'i' value
                element.style.paddingBottom = i + 'px';
            }
        });
    });
}

// padding-left: Loop through all elements containing class starting with 'pl-'
if (document.querySelectorAll('[class^="pl-"]')) {
    document.querySelectorAll('[class^="pl-"]').forEach(element => {
        // Get a list of classes on the element
        const classes = element.className.split(' ');

        // Loop through all class
        classes.forEach(cls => {
            if (cls.startsWith('pl-')) {
                // Get the value 'i' from the class name
                const i = parseInt(cls.substring(3)); // Remove 'pl-' and convert to number

                // Set padding-left value based on 'i' value
                element.style.paddingLeft = i + 'px';
            }
        });
    });
}

// padding-right: Loop through all elements containing class starting with 'pr-'
if (document.querySelectorAll('[class^="pr-"]')) {
    document.querySelectorAll('[class^="pr-"]').forEach(element => {
        // Get a list of classes on the element
        const classes = element.className.split(' ');

        // Loop through all class
        classes.forEach(cls => {
            if (cls.startsWith('pr-')) {
                // Get the value 'i' from the class name
                const i = parseInt(cls.substring(3)); // Remove 'pr-' and convert to number

                // Set padding-right value based on 'i' value
                element.style.paddingRight = i + 'px';
            }
        });
    });
}

// padding: Loop through all elements containing class starting with 'p-'
if (document.querySelectorAll('[class^="p-"]')) {
    document.querySelectorAll('[class^="p-"]').forEach(element => {
        // Get a list of classes on the element
        const classes = element.className.split(' ');

        // Loop through all class
        classes.forEach(cls => {
            if (cls.startsWith('p-')) {
                // Get the value 'i' from the class name
                const i = parseInt(cls.substring(2)); // Remove 'p-' and convert to number

                // Set padding value based on 'i' value
                element.style.padding = i + 'px';
            }
        });
    });
}

// gap: Loop through all elements containing class starting with 'gap-'
if (document.querySelectorAll('[class^="gap-"]')) {
    document.querySelectorAll('[class^="gap-"]').forEach(element => {
        // Get a list of classes on the element
        const classes = element.className.split(' ');

        // Loop through all class
        classes.forEach(cls => {
            if (cls.startsWith('gap-')) {
                // Get the value 'i' from the class name
                const i = parseInt(cls.substring(4)); // Remove 'gap-' and convert to number

                // Set gap value based on 'i' value
                element.style.gap = i + 'px';
            }
        });
    });
}

// row-gap: Loop through all elements containing class starting with 'row-gap-'
if (document.querySelectorAll('[class^="row-gap-"]')) {
    document.querySelectorAll('[class^="row-gap-"]').forEach(element => {
        // Get a list of classes on the element
        const classes = element.className.split(' ');

        // Loop through all class
        classes.forEach(cls => {
            if (cls.startsWith('row-gap-')) {
                // Get the value 'i' from the class name
                const i = parseInt(cls.substring(8)); // Remove 'row-gap-' and convert to number

                // Set row-gap value based on 'i' value
                element.style.rowGap = i + 'px';
            }
        });
    });
}