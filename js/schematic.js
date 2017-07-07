/*!
 * Journey Schematic
 * Adam Turnbull
 */

(function(window){
    'use strict';
    HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];   
    function define(){
        var JourneySchematic = {};
        
        // Set up defaults to use in absence of JourneySchematic.configure being called
        var canvasClass = 'journey-canvas';
        var minSegmentHeight = 4;
        var minStationHeight = 10; // The size of a start & end station, and of a station whose time is too small to display in scale.
        var totalHeight = 99;
        
        // Not set via config: constantly 2x a station height
        const MINSTATIONCHANGEHEIGHT = minStationHeight * 2;
        
        JourneySchematic.configure = function(config) {
          minSegmentHeight = config.minSegmentHeight;
          minLayoverHeight = config.minLayoverHeight;
          totalHeight = config.totalHeight;
        }
        
        JourneySchematic.clearAll = function() {
          var canvases = document.getElementsByClassName(canvasClass);
          for (var canvas of canvases) {
            while (canvas.firstChild) {
              canvas.removeChild(canvas.firstChild);
            }
          }
        }
        
        JourneySchematic.render = function(solution) {
            
          var totalDuration = solution.duration;
          // Subtracts the height of start & end stations from the scale calculation
          var pixelsPerMinute = (totalHeight - 20) / totalDuration;
          var minSameStationConnection = 10 / 5.2;
          var minChangeStationConnection = 20 / 5.2;
          
          var solutionsLength = solution.segments.length;          
          // Iterate over segments in the solution
          for (var i = 0; i < arrayLength; i++) {
            
            
          }
          
        }
        
        return JourneySchematic;
    }
    //define globally if it doesn't already exist
    if(typeof(JourneySchematic) === 'undefined'){
        window.JourneySchematic = define();
    }
    else{
        console.log("JourneySchematic already defined.");
    }
})(window);