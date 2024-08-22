// Create the WorldWindow (globe)
var wwd = new WorldWind.WorldWindow("globe-container");

// Add a base layer of imagery
var layers = [
    new WorldWind.BMNGLayer(), // Blue Marble imagery layer
    new WorldWind.BMNGLandsatLayer(), // Landsat imagery layer
    new WorldWind.CoordinatesDisplayLayer(wwd), // Displays the coordinates of the mouse
    new WorldWind.ViewControlsLayer(wwd) // Add view controls for zoom and pan
];

// Add layers to the WorldWindow
for (var i = 0; i < layers.length; i++) {
    wwd.addLayer(layers[i]);
}

// Redraw the WorldWindow (necessary to display layers)
wwd.redraw();
