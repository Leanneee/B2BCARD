/**
 * Created by v.kazarinov on 04.08.2017.
 */
// Animation human of footer
'use strict';
var circle = $('#circle');
var cube = $('#cube');
var stark = $('#stark');
var animationCircle = 5,
    animationCube = 5,
    animationStark = 5,
    delayCircle = 3,
    delayCube   = 2,
    delayStark  = 2.6,
    repeatDelayCircle = 2,
    repeatDelayCube   = 2,
    repeatDelayStark  = 2;

CSSPlugin.useSVGTransformAttr = true;
TweenMax.fromTo(circle, animationCircle, {
    y: 0,
    x: 0,
    opacity: 1,
}, {
    y: -100,
    delay: delayCircle,
    repeatDelay: repeatDelayCircle,
    opacity: 0,
    repeat: -1
});
TweenMax.fromTo(cube, animationCube, {
    y: 0,
    x: 0,
    opacity: 1,
    transformOrigin: "50%",
    rotation: -45
}, {
    y: -110,
    opacity: 0,
    delay: delayCube,
    repeatDelay: repeatDelayCube,
    rotation: -45,
    repeat: -1
});
TweenMax.fromTo(stark, animationStark, {
    y: 0,
    x: 0,
    opacity: 1
}, {
    y: -130,
    delay: delayStark,
    repeatDelay: repeatDelayStark,
    opacity: 0,
    repeat: -1
});
