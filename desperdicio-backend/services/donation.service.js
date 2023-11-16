const db = require('../db')

module.exports.getAllDonations = async () => {
    const [records] = await db.query("SELECT * FROM donations WHERE TipoRequisicao = 'doando' ")
    return records;
}

module.exports.getAllDonationsHelp = async () => {
    const [records] = await db.query("SELECT * FROM donations WHERE TipoRequisicao = 'precisando' ")
    return records;
}

module.exports.getDonationById = async (id) => {
    const [[record]] = await db.query("SELECT * FROM donations WHERE id = ?", [id])
    return record;
}

module.exports.deleteDonation = async (id) => {
    const [{ affectedRows }] = await db.query("DELETE FROM donations WHERE id = ?", [id])
    return affectedRows;
}

module.exports.createDonation = async (obj) => {
    const sql = "INSERT INTO donations (Name, Email, TipoRequisicao, Message) VALUES (?, ?, ?, ?)";
    const values = [obj.Name, obj.Email, obj.TipoRequisicao, obj.Message];
  
    const [result] = await db.query(sql, values);
    return result.insertId;
  }
  
  // Método para atualizar uma doação
  module.exports.updateDonation = async ( obj,id) => {
    const sql = "UPDATE donations SET Name = ?, Email = ?, TipoRequisicao = ?, Message = ? WHERE id = ?";
    const values = [obj.Name, obj.Email, obj.TipoRequisicao, obj.Message, id];
  
    const [result] = await db.query(sql, values);
    return result.affectedRows;
  }