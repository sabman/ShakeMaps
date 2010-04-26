var map, layer;

OpenLayers.ProxyHost = "/proxy?url=";

function init(){
    map = new OpenLayers.Map('map', {maxResolution:'auto'});
    layer = new OpenLayers.Layer.WMS( "OpenLayers WMS",
        "http://labs.metacarta.com/wms/vmap0", {layers: 'basic'} );
    map.addLayer(layer);
    map.setCenter(new OpenLayers.LonLat(0, 0), 0);
    map.addControl(new OpenLayers.Control.LayerSwitcher());
}
function addUrl() {  
    var urlObj = OpenLayers.Util.getElement('url');
    var value = urlObj.value;
    if (!value) {
      value = "http://earthquake.usgs.gov/earthquakes/shakemap/rss.xml";
    }
    var parts = value.split("/");
    var newlayer = new OpenLayers.Layer.GeoRSS( parts[parts.length-1], value);
    map.addLayer(newlayer);
    urlObj.value = "";
}