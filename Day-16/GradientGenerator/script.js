function BGChange() {
    let back = document.getElementById("back")

    function randomHex() {
        let alphanum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hex = "#";

        for (let i = 0; i < 6; i++) {
            hex += alphanum[Math.floor(Math.random() * 16)]
        }
        return hex
    }
    
    let color1 = randomHex()
    let color2 = randomHex()

    back.style.background = `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`;

}

