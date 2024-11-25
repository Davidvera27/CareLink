CREATE TRIGGER set_updatedAt
BEFORE UPDATE ON patients
FOR EACH ROW
EXECUTE FUNCTION update_updatedAt_column();
