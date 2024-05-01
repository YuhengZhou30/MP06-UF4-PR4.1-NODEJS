const Event = require('../models/event');

// Enpoint GET simplet que retorna "OK"
exports.apiHealth =  async (req, res) => {
    res.json({ status: "OK" });
};

// POST endpoint per inserir un esdeveniment
exports.apiEvents =  async (req, res) => {
try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
} catch (err) {
    res.status(400).send(err.message);
    console.log(err)
}
};
  
// Endpoint per recuperar un esdeveniment per ID
exports.apiEventsId = async (req, res) => {
try {
    const event = await Event.findById(req.params.id);
    if (!event) {
    return res.status(404).send("L'esdeveniment no s'ha trobat.");
    }
    res.send(event);
} catch (err) {
    res.status(500).send(err.message);
}
};