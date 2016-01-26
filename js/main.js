/**
 * Created by VictorE on 4/9/2014.
 */

// declare global vars here


// declare and define global functions below

function main(){

    // get a handle to the video element
    var video_element = document.getElementById("video");

    // player and context variables
    var player;
    var context;


    ////////////////////////////////////////
    //
    // Player Setup
    //
    ////////////////////////////////////////

    context = new Dash.di.DashContext();
    player = new MediaPlayer(context);

    player.startup();

    player.attachView(video_element);
    player.setAutoPlay(true);

    player.attachSource("videos/nonencrypted/Manifest.mpd")
}

// event handlers are declared and defined below

