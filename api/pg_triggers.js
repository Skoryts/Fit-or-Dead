module.exports = {
  onUpdateTrigger: table => `
    CREATE TRIGGER updatedAt
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamp();
  `
};
