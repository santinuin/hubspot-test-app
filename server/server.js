const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir el proyecto de Angular
app.use(express.static(path.join(__dirname, '../iframe/dist/iframe')));

// Ruta para la respuesta JSON card
app.get('/api/card', (req, res) => {
    res.json({
        "primaryAction": {
            "uri": "https://fbfc-2803-9810-33bb-f810-91ca-ddf2-4cfd-268e.ngrok-free.app/",
            "width": 400,
            "height": 320,
            "type": "IFRAME",
            "label": "HSM Form"
        }
    });
});


// Redirigir todas las demás rutas al index.html de Angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../iframe/dist/iframe/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
