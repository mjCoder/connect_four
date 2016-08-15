<?php
namespace Entities;

Class Players extends DBManager
{
	public function getPlayersScoreBoard() {
		$this->dbconnect();
		$sql = 'SELECT name,picture,SUM(won) as won, SUM(lost) as lost FROM score_board GROUP BY name';
        $stmt = $this->db->query($sql);
        $results = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return $results;
	}

	public function insertPlayersMatch($data = array()) {
		$this->dbconnect();
		$sql = "INSERT INTO score_board(name,picture,won,lost) VALUES(:name,:picture,:won,:lost)";
		$stmt = $this->db->prepare($sql);
		$stmt->execute($data);

		$affected_rows = $stmt->rowCount();
		return $affected_rows;
	}
}
?>