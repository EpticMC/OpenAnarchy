"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

/* eslint-disable no-alert */

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

    /**
     * Copy to clipboard
     *
     * @param {Event} e
     */
    let copyToClipboard = function(e){
        navigator.clipboard.writeText(
            $(e.target).text()
        ).then(
            () => $(e.target).find("span.clip-stat").hide().text("Copied!").fadeIn(400).delay(1500).fadeOut(400),
            () => $(e.target).find("span.clip-stat").hide().text("Couldn't copy...").fadeIn(400).delay(1500).fadeOut(400)
        );
    };

    $(document).ready(() => {
        workers();
        particles();
        $("a.clip-exec").on("click", e => copyToClipboard(e));
    });

// @ts-ignore
})($ || window.jQuery, particlesJS || window.particlesJS);
