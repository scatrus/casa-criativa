const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../ws.db");

//     //consultar
// db.all(`select * from ideas`, function (err, rows) {
//   if (err) return console.log(err);

//   console.log(rows);
// });

// //criar tabela
// db.run(`
//     create table if not exists ideas(
//         id integer primary key autoincrement,
//         image text,
//         title text,
//         category text,
//         description text,
//         link text
//     );
// `);

//    // deletar

// function DeleteIdea(ideaId) {
//   if (confirm("Deseja realmente excluir a Ideia?") === true) {
//     db.run(`delete from ideas where id = ?`, [ideaId], function (err) {
//       if (err) return console.log(err);
//       console.log("deletado", this);
//     });
//   }
// }

module.exports = db;
