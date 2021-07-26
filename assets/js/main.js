"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

(($, pJS) => {
    // Greeter
    const ARG = ["color:blue;font-weight:bold;font-size:24px", "color:red;font-weight:bold;font-size:24px", "color:blue;font-weight:bold;font-size:24px", "color:green;font-weight:bold;font-size:24px"];
    console.log("%cDEVELOPED WITH %c<3%c BY%c NULLDEV.ORG", ...ARG);

    fetch("https://api.mcsrvstat.us/2/openanarchy.org", { mode: "cors" })
        .then(res => res.json())
        .then(data => $("span#stats").text(`${data.players.online} / ${data.players.max}`));

    /**
     * Set workers and timeouts
     */
    let workers = function(){
        setTimeout(() => {
            $("body").addClass("loaded");
            $("#pjs, #main").animate({
                opacity: 1
            }, 1500);
        }, 1000);
    };

    /**
     * Initialize flames and particles
     */
    let particles = function(){
        // @ts-ignore
        pJS("pjs", window.pconf);
        // @ts-ignore
        window.initFlames();
    };

    $(document).ready(() => {
        workers();
        particles();
    });

// @ts-ignore
})($ || window.jQuery, particlesJS || window.particlesJS);
