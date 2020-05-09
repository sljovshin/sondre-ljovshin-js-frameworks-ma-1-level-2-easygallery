## What is this?

Easy Gallery is a simple lightweight jQuery plugin for creating image galleries for you webpage.

## How to use:

Download the easygallery.js file, it is dependent on jQuery, so you will also need to import jQuery https://code.jquery.com/.

link it all to your at the bottom of the body tag of your HTML file.

```
    <script src="jquery.js"></script>
    <script src="easygallery.js"></script>
    <script src="your_script.js"></script>
```

In your script file initiate the plugin like so:

```
$.easyGallery();
```

## Options

The gallery is configureable by passing options as a parameter when you initate it.
```
const options = {
    // options
}

$.easyGallery(options);
```

Otions available are:

Gap between images:
```
gap: {
    size: 10,       // default value is 0 if omitted
    shadow: true,   // default value is false if omitted
}
```

Dynamic width of images:
```
image_width: {
    min: 10,        // default value is 10rem if omitted
    max: 20         // default value is 1fr if omitted
},

```

## Use example:

```
const options = {
    gap: {
    size: 10,       
    shadow: true,   
    },
    image_width: {
        min: 10,      
        max: 20
    },
}

$.easyGallery(options);
```
