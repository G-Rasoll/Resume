const cursorConfig = {
circleSize: 34,       
dotSize: 6,           
color: "#F97316",     
borderWidth: 2,       
delay: 0.16     
};
const cursorDot = document.createElement("div");
const cursorCircle = document.createElement("div");

document.body.appendChild(cursorDot);
document.body.appendChild(cursorCircle);
Object.assign(cursorDot.style, {
position: "fixed",
top: "0",
left: "0",
width: cursorConfig.dotSize + "px",
height: cursorConfig.dotSize + "px",
borderRadius: "50%",
background: cursorConfig.color,
pointerEvents: "none",
zIndex: "10000",
transform: "translate(-50%, -50%)",
willChange: "transform"
});
Object.assign(cursorCircle.style, {
position: "fixed",
top: "0",
left: "0",
width: cursorConfig.circleSize + "px",
height: cursorConfig.circleSize + "px",
borderRadius: "50%",
border: `${cursorConfig.borderWidth}px solid ${cursorConfig.color}`,
pointerEvents: "none",
zIndex: "9999",
transform: "translate(-50%, -50%)",
willChange: "transform",
transition: "border-color 0.25s ease, transform 0.15s ease-out"
});
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let circleX = mouseX;
let circleY = mouseY;
window.addEventListener("mousemove", (e) => {
mouseX = e.clientX;
mouseY = e.clientY;
cursorDot.style.transform =
    `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
});
function animateCursor() {

circleX += (mouseX - circleX) * cursorConfig.delay;
circleY += (mouseY - circleY) * cursorConfig.delay;

cursorCircle.style.transform =
    `translate(${circleX}px, ${circleY}px) translate(-50%, -50%)`;

requestAnimationFrame(animateCursor);
}
animateCursor();