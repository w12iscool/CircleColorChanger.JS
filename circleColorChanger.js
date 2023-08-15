const circle = document.createElement('button');
circle.style.cssText = `
width: 300px;
height: 300px;
font-size: 30px;
font-family: math;
position: fixed;
transform: translate(-50%, -50%);
align-items: center;
justify-content: center;
display: flex;
padding: 20px;
top: 50%;
left: 50%;
background-color: rgb(0, 0, 0);
color: rgb(255, 255, 255);
border-radius: 50%;
`;
circle.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
circle.innerText = "CLICK ME TO CHANGE COLORS";
document.body.appendChild(circle);

circle.addEventListener('click', () => {
    let color1 = Math.ceil(Math.random() * 255);
    let color2 = Math.ceil(Math.random() * 255);
    let color3 = Math.ceil(Math.random() * 255);

    circle.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    circle.textContent = `rgb(${color1}, ${color2}, ${color3})`;
});

circle.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
        circle.remove();
    }
})
