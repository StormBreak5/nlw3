const Database = require('./db');

Database.then(async function(db) {
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.222633", 
            "-49.6455874",
            "OH BOY",
            "Isso é um teste",
            "992927137",
            "https://images.unsplash.com/photo-1567701554261-fcc4bda64847?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Teste de novo",
            "Horário de visitas Das 18h até 8h",
            "1"
        );
    `)
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')

    await db.run("DELETE FROM orphanages WHERE id = '4'")
})