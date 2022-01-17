//constates basicas
const mainColor = '#daa357'
const secondaryColor = '#db7093'
//constates  completa
const paddign = 'padding:0.3em;';

//variables dinamicas

const getLinearGradient = (rot, color1, color2) => (
    `background:linear-gradient(${rot}, ${color1}, ${color2});`
)


export {
    mainColor,
    secondaryColor,
    paddign,
    getLinearGradient
}
